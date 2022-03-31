/* eslint-env jest */
import { testWxApi } from '../config'

test('Test Weixin OpenApi', async () => {
  const result = await testWxApi.getQuota('/cgi-bin/message/custom/send')
  expect(result.daily_limit > 0).toBeTruthy()
  expect(result.used !== undefined).toBeTruthy()
  expect(result.remain !== undefined).toBeTruthy()
  await testWxApi.clearQuota()

  const result2 = await testWxApi.getQuota('/cgi-bin/message/custom/send')
  expect(result2.daily_limit > 0).toBeTruthy()
  expect(result2.used === 0).toBeTruthy()
  expect(result.remain > 0).toBeTruthy()
})
