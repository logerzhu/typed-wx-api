/* eslint-env jest */
import { testWxApi } from '../config'

test('Test Weixin Api', async () => {
  const accessToken = await testWxApi.getAccessToken()
  expect(accessToken.isValid() == true).toBeTruthy()
  expect(accessToken.accessToken != null).toBeTruthy()
  expect(accessToken.expireTime).toBeTruthy()

  const ticket = await testWxApi.getTicket('jsapi')
  expect(ticket.isValid() == true).toBeTruthy()
  expect(ticket.ticket != null).toBeTruthy()
  expect(ticket.expireTime).toBeTruthy()
})
