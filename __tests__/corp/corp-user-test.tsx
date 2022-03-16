/* eslint-env jest */
import {corpAPI, testUserID, testUserPhoneNumber} from '../config'

test('Test CorpUser API', async () => {
  const user = await corpAPI.getUser(testUserID)
  expect(user?.name != null).toBeTruthy()
  const openID = await corpAPI.convertToOpenID(testUserID)
  expect(openID != null).toBeTruthy()
  const userID = await corpAPI.convertToUserID(openID)
  expect(userID).toEqual(testUserID)
  const pUserID = await corpAPI.getUserID(testUserPhoneNumber)
  expect(pUserID).toEqual(testUserID)
})
