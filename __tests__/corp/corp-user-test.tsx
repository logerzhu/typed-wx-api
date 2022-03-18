/* eslint-env jest */
import { corpApi, testUserid, testUserPhoneNumber } from '../config'

test('Test CorpUser Api', async () => {
  const user = await corpApi.getUser(testUserid)
  expect(user?.name != null).toBeTruthy()
  const openid = await corpApi.useridToOpenid(testUserid)
  expect(openid != null).toBeTruthy()
  const userid = await corpApi.openidToUserid(openid)
  expect(userid).toEqual(testUserid)
  const pUserid = await corpApi.getUserid(testUserPhoneNumber)
  expect(pUserid).toEqual(testUserid)
})
