/* eslint-env jest */
import { corpAPI, testUserID, testExternalUserID } from '../config'

test('Test CorpContact API', async () => {
  const users = await corpAPI.getFollowUserList()
  expect(users.length > 0 && typeof users[0] === 'string').toBeTruthy()

  const contacts = await corpAPI.getExternalContactList(testUserID)
  expect(contacts.length > 0 && typeof contacts[0] === 'string').toBeTruthy()

  const contact = await corpAPI.getExternalContact(contacts[0])
  expect(
    contact != null &&
      contact.follow_user.find((u) => u.userid === testUserID) != null
  ).toBeTruthy()

  const batchContacts = await corpAPI.batchGetExternalContact([testUserID])
  console.log(batchContacts)
  expect(batchContacts.length > 0).toBeTruthy()
  expect(
    batchContacts[0].external_contact?.external_userid != null
  ).toBeTruthy()
  expect(batchContacts[0].follow_info?.userid === testUserID)

  await corpAPI.remarkExternalContact({
    external_userid: testExternalUserID,
    userid: testUserID,
    remark: '测试人员',
    description: '测试人员',
    remark_company: '测试公司',
    remark_mobiles: ['15888888888']
  })
})
