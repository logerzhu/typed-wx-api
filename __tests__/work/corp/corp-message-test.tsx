/* eslint-env jest */
import { monitorCorpApi } from '../config'

test('Test CorpJS Api', async () => {
  const result = await monitorCorpApi.sendMessage({
    touser: 'loger',
    agentid: '1000010',
    msgtype: 'text',
    text: {
      content: '你好'
    }
  })
  expect(result.msgid != null).toBeTruthy()
})
