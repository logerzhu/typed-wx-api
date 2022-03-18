/* eslint-env jest */
import { corpApi, testUserid, testUserPhoneNumber } from '../config'

test('Test CorpJS Api', async () => {
  const apiTicket = await corpApi.getJsApiTicket()
  expect(apiTicket.ticket != null).toBeTruthy()
  expect(apiTicket.expires_in != null).toBeTruthy()

  const apiAgentTicket = await corpApi.getJsApiAgentTicket()
  expect(apiAgentTicket.ticket != null).toBeTruthy()
  expect(apiAgentTicket.expires_in != null).toBeTruthy()

  const jsConfig = await corpApi.getJsConfig({
    url: 'http://www.test.com',
    jsApiList: []
  })
  expect(jsConfig.signature != null).toBeTruthy()

  const agentJsConfig = await corpApi.getAgentJsConfig({
    agentid: 'chat',
    url: 'http://www.test.com',
    jsApiList: []
  })
  expect(agentJsConfig.signature != null).toBeTruthy()
})
