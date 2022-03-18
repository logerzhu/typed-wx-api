/* eslint-env jest */
import { corpApi, testUserid, testExternalUserid } from '../config'

test('Test CorpContact Api', async () => {
  const users = await corpApi.getFollowUserList()
  expect(users.length > 0 && typeof users[0] === 'string').toBeTruthy()

  const contacts = await corpApi.getExternalContactList(testUserid)
  expect(contacts.length > 0 && typeof contacts[0] === 'string').toBeTruthy()

  const contact = await corpApi.getExternalContact(contacts[0])
  expect(
    contact != null &&
      contact.follow_user.find((u) => u.userid === testUserid) != null
  ).toBeTruthy()

  const batchContacts = await corpApi.batchGetExternalContact([testUserid])
  expect(batchContacts.length > 0).toBeTruthy()
  expect(
    batchContacts[0].external_contact?.external_userid != null
  ).toBeTruthy()
  expect(batchContacts[0].follow_info?.userid === testUserid)

  await corpApi.remarkExternalContact({
    external_userid: testExternalUserid,
    userid: testUserid,
    remark: '测试人员',
    description: '测试人员',
    remark_company: '测试公司',
    remark_mobiles: ['15888888888']
  })
})
