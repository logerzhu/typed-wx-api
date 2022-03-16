/* eslint-env jest */
import { corpAPI, testUserid, testUserPhoneNumber } from '../config'

test('Test CorpUser API', async () => {
  const user = await corpAPI.getUser(testUserid)
  expect(user?.name != null).toBeTruthy()
  const openid = await corpAPI.useridToOpenid(testUserid)
  expect(openid != null).toBeTruthy()
  const userid = await corpAPI.openidToUserid(openid)
  expect(userid).toEqual(testUserid)
  const pUserid = await corpAPI.getUserid(testUserPhoneNumber)
  expect(pUserid).toEqual(testUserid)
})
