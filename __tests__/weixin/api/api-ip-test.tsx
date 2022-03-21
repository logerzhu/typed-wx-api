/* eslint-env jest */
import { testWxApi } from '../config'

test('Test Weixin IP', async () => {
  const ips = await testWxApi.getIP()
  expect(ips.length > 0).toBeTruthy()
})
