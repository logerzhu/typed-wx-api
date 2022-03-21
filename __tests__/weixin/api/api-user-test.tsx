/* eslint-env jest */
import { testOpenid, testWxApi } from '../config'

test('Test Weixin User', async () => {
  const user = await testWxApi.getUser(testOpenid)
  expect(user.subscribe).toEqual(1)

  const users = await testWxApi.batchGetUsers([testOpenid])
  expect(users.length).toEqual(1)
  expect(user).toEqual(users[0])

  const followers = await testWxApi.getFollowers()
  expect(followers.find((f) => f === testOpenid) != null).toBeTruthy()

  await testWxApi.updateRemark(testOpenid, 'LogerZhu')

  const testTagName = '测试9999'
  const tagid = await testWxApi.createTag(testTagName)
  try {
    expect(tagid > 0).toBeTruthy()
    const tags = await testWxApi.getTags()
    expect(tags.find((t) => t.name === testTagName)?.count === 0).toBeTruthy()

    await testWxApi.updateTag(tagid, testTagName + 'Updated')

    await testWxApi.batchTagging([testOpenid], tagid)
    const tagOpenidList = await testWxApi.getUsersFromTag(tagid)
    expect(tagOpenidList.indexOf(testOpenid) != -1).toBeTruthy()

    const userTagidList = await testWxApi.getIdList(testOpenid)
    expect(userTagidList.indexOf(tagid) != -1).toBeTruthy()

    await testWxApi.batchUnTagging([testOpenid], tagid)
    const tagOpenidList2 = await testWxApi.getUsersFromTag(tagid)
    expect(tagOpenidList2.indexOf(testOpenid) == -1).toBeTruthy()
  } finally {
    await testWxApi.deleteTag(tagid)
  }
})
