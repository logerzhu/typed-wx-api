/* eslint-env jest */
import { WxJsCrypto } from '../../dist'

test('Test WxJsCrypto', async () => {
  const sign = WxJsCrypto.sign({
    jsapi_ticket: 'zdfasdfsadfasdfasdfaeqweqwx',
    nonceStr: '32asfasdfqwe',
    timestamp: '1647825988',
    url: 'http://backend.tikicrowd.com'
  })
  expect(sign).toEqual('d2245909ad791d203eab0b0af0f3ec55566c43f7')
})
