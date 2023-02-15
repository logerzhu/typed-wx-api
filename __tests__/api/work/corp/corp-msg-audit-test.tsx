/* eslint-env jest */
import { chatCorpApi, testRoomID } from '../config'

test('Test CorpMsgAudit Api', async () => {
  const room = await chatCorpApi.getRoom(testRoomID)
  expect(room.roomname != null).toBeTruthy()
  expect(room.members.length > 0).toBeTruthy()
  expect(room.members[0].memberid != null).toBeTruthy()
})
