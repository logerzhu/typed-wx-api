/* eslint-env jest */
import { corpApi } from '../config'

test('Test CorpGroupChat Api', async () => {
  const groupChats = await corpApi.listGroupChat()
  expect(groupChats.length > 0)
  const groupChar = await corpApi.getGroupChat({
    chat_id: groupChats[0].chat_id,
    need_name: 1
  })
  expect(groupChar.member_list[0].name != null).toBeTruthy()
})
