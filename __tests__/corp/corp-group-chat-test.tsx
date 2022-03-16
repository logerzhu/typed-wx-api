/* eslint-env jest */
import { corpAPI } from '../config'

test('Test CorpGroupChat API', async () => {
  const groupChats = await corpAPI.listGroupChat()
  expect(groupChats.length > 0)
  const groupChar = await corpAPI.getGroupChat({
    chat_id: groupChats[0].chat_id,
    need_name: 1
  })
  expect(groupChar.member_list[0].name != null).toBeTruthy()
})
