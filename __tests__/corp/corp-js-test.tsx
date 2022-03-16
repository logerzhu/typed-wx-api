/* eslint-env jest */
import { corpAPI, testUserid, testUserPhoneNumber } from '../config'

test('Test CorpJS API', async () => {
  const apiTicket = await corpAPI.getJsApiTicket()
  expect(apiTicket.ticket != null).toBeTruthy()
  expect(apiTicket.expires_in != null).toBeTruthy()

  const apiAgentTicket = await corpAPI.getJsApiAgentTicket()
  expect(apiAgentTicket.ticket != null).toBeTruthy()
  expect(apiAgentTicket.expires_in != null).toBeTruthy()

  const jsConfig = await corpAPI.getJsConfig({
    url: 'http://www.test.com',
    jsApiList: []
  })
  expect(jsConfig.signature != null).toBeTruthy()

  const agentJsConfig = await corpAPI.getAgentJsConfig({
    agentid: 'chat',
    url: 'http://www.test.com',
    jsApiList: []
  })
  expect(agentJsConfig.signature != null).toBeTruthy()
})
