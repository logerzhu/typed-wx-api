/* eslint-env jest */
import { corpCrypto, testUserUpdateEvent, testVerifyEvent } from '../config'

test('Test Income Msg decrypt Api', async () => {
  const verifyResult = await corpCrypto.decrypt(
    testVerifyEvent.request.query,
    testVerifyEvent.request.echostr
  )
  expect(verifyResult).toEqual(testVerifyEvent.decrypt)

  const decryptInfo = await corpCrypto.decryptXML(
    testUserUpdateEvent.request.query,
    testUserUpdateEvent.request.body
  )
  expect(decryptInfo.errMessage === undefined).toBeTruthy()
  if (decryptInfo.errMessage === undefined) {
    expect(
      decryptInfo.Decrypt.ChangeType === 'edit_external_contact'
    ).toBeTruthy()
  }
})
