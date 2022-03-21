/* eslint-env jest */
import { weixinApi } from '../config'
import Axios from 'axios'

test('Test Weixin QRCode', async () => {
  const tmpCode1 = await weixinApi.createTmpQRCode({ id: 1 }, 10000)
  expect(tmpCode1.ticket != null).toBeTruthy()
  expect(tmpCode1.expire_seconds).toEqual(10000)
  expect(tmpCode1.url != null).toBeTruthy()

  const tmpCode2 = await weixinApi.createTmpQRCode({ str: 'testQRCode' }, 10000)
  expect(tmpCode2.url != null).toBeTruthy()

  const limitCode = await weixinApi.createLimitQRCode(1)
  expect(limitCode.ticket != null).toBeTruthy()
  expect(limitCode.url != null).toBeTruthy()

  const qrcodeUrl = await weixinApi.showQRCodeURL(limitCode.ticket)
  const result = await Axios.create().request({
    url: qrcodeUrl,
    responseType: 'arraybuffer'
  })
  expect(result.status).toEqual(200)
})
