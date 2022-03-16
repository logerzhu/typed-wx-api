/* eslint-env jest */
import { corpAPI ,testUserID, testExternalUserID} from '../config'

test('Test CorpMsgTemplate', async () => {
  const newMsg = await corpAPI.addMsgTemplate({
    text: { content: '你好' },
    sender: testUserID,
    external_userid: [testExternalUserID]
  })
  expect(newMsg.msgid != null).toBeTruthy()
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null)
    }, 2000)
  })
  const msgs = await corpAPI.getGroupMsgList({
    chat_type: 'single',
    start_time: Math.round(Date.now() / 1000 - 28 * 24 * 60 * 60),
    end_time: Math.round(Date.now() / 1000)
  })
  expect(msgs.length > 0).toBeTruthy()

  const tasks = await corpAPI.getGroupMsgTask(msgs[0].msgid)
  expect(tasks.length > 0).toBeTruthy()
  expect(tasks[0].userid != null).toBeTruthy()

  const sendResults = await corpAPI.getGroupMsgResult(msgs[0].msgid)
  expect(sendResults.length > 0).toBeTruthy()
  expect(sendResults[0].userid != null).toBeTruthy()
})
