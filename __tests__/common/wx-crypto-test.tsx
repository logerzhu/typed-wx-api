/* eslint-env jest */
import { testIncomeEvent, wxCrypto } from '../config'

test('Test Income Msg decrypt API', async () => {
  const msgSig = wxCrypto.signature({
    timestamp: testIncomeEvent.encrypt.timestamp,
    nonce: testIncomeEvent.encrypt.nonce,
    encrypt: decodeURIComponent(testIncomeEvent.encrypt.echostr)
  })
  expect(msgSig).toEqual(testIncomeEvent.encrypt.msg_signature)
  const decryptInfo = wxCrypto.decrypt(
    decodeURIComponent(testIncomeEvent.encrypt.echostr)
  )
  expect(decryptInfo).toEqual(testIncomeEvent.decrypt)
})
