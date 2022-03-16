/* eslint-env jest */
import { chatCorpAPI, testRoomID } from '../config'

test('Test CorpMsgAudit API', async () => {
  const room = await chatCorpAPI.getRoom(testRoomID)
  expect(room.roomname != null).toBeTruthy()
  expect(room.members.length > 0).toBeTruthy()
  expect(room.members[0].memberid != null).toBeTruthy()
})
