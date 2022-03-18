/* eslint-env jest */
import { weixinApi } from '../config'

test('Test Weixin IP', async () => {
  const ips = await weixinApi.getIP()
  expect(ips.length > 0).toBeTruthy()
})
