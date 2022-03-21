/* eslint-env jest */
import { testOpenid, weixinApi } from '../config'

test('Test Weixin IP', async () => {
  const user = await weixinApi.getUser(testOpenid)
  expect(user.subscribe).toEqual(1)

  const users = await weixinApi.batchGetUsers([testOpenid])
  expect(users.length).toEqual(1)
  expect(user).toEqual(users[0])

  const followers = await weixinApi.getFollowers()
  expect(followers.find((f) => f === testOpenid) != null).toBeTruthy()

  await weixinApi.updateRemark(testOpenid, 'LogerZhu')

  const testTagName = '测试9999'
  const tagid = await weixinApi.createTag(testTagName)
  try {
    expect(tagid > 0).toBeTruthy()
    const tags = await weixinApi.getTags()
    expect(tags.find((t) => t.name === testTagName)?.count === 0).toBeTruthy()

    await weixinApi.updateTag(tagid, testTagName + 'Updated')

    await weixinApi.batchTagging([testOpenid], tagid)
    const tagOpenidList = await weixinApi.getUsersFromTag(tagid)
    expect(tagOpenidList.indexOf(testOpenid) != -1).toBeTruthy()

    const userTagidList = await weixinApi.getIdList(testOpenid)
    expect(userTagidList.indexOf(tagid) != -1).toBeTruthy()

    await weixinApi.batchUnTagging([testOpenid], tagid)
    const tagOpenidList2 = await weixinApi.getUsersFromTag(tagid)
    expect(tagOpenidList2.indexOf(testOpenid) == -1).toBeTruthy()
  } finally {
    await weixinApi.deleteTag(tagid)
  }
})
