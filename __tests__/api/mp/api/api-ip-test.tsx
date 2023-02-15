/* eslint-env jest */
import { testWxApi } from '../config'

test('Test WxMp IP', async () => {
  const ips = await testWxApi.getIP()
  expect(ips.length > 0).toBeTruthy()
})
