/* eslint-env jest */
import { testOpenid, testWxApi } from '../config'

test('Test WxMp Message', async () => {
  await testWxApi.sendMessage(testOpenid, {
    msgtype: 'text',
    text: { content: '你好' }
  })
  const autoReplyRule = await testWxApi.getAutoReplyInfo()
  console.log(autoReplyRule)
})
