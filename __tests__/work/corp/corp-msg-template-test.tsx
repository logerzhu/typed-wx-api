/* eslint-env jest */
import { corpApi, testUserid, testExternalUserid } from '../config'

test('Test CorpMsgTemplate', async () => {
  const newMsg = await corpApi.addMsgTemplate({
    text: { content: '你好' },
    sender: testUserid,
    external_userid: [testExternalUserid]
  })
  expect(newMsg.msgid != null).toBeTruthy()
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null)
    }, 5000)
  })
  const msgs = await corpApi.getGroupMsgList({
    chat_type: 'single',
    start_time: Math.round(Date.now() / 1000 - 28 * 24 * 60 * 60),
    end_time: Math.round(Date.now() / 1000)
  })
  expect(msgs.length > 0).toBeTruthy()

  const tasks = await corpApi.getGroupMsgTask(msgs[0].msgid)
  expect(tasks.length > 0).toBeTruthy()
  expect(tasks[0].userid != null).toBeTruthy()

  const sendResults = await corpApi.getGroupMsgResult(msgs[0].msgid)
  expect(sendResults.length > 0).toBeTruthy()
  expect(sendResults[0].userid != null).toBeTruthy()
})
