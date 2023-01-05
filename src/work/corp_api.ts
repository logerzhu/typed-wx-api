import { TicketStorage, TokenStorage } from '../storage'
import { applyMixins } from '../utils'
import { WxAPIError } from '../errors'
import {
  CorpBase,
  CorpContact,
  CorpGroupChat,
  CorpJs,
  CorpMedia,
  CorpMessage,
  CorpMsgAudit,
  CorpMsgTemplate,
  CorpOAuth,
  CorpTag,
  CorpUser
} from './corp'

export interface CorpAPI
  extends CorpJs,
    CorpUser,
    CorpOAuth,
    CorpMsgTemplate,
    CorpContact,
    CorpGroupChat,
    CorpMsgAudit,
    CorpMedia,
    CorpTag,
    CorpMessage {}

export class CorpAPI extends CorpBase {
  constructor(
    config: {
      corpid: string
      corpSecret: string
      agentid?: string
    },
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
  }

  async resolveTicket(type: string) {
    if (type === 'jsapi') {
      return this.getJsApiTicket()
    } else if (type === 'jsapi-agent') {
      return this.getJsApiAgentTicket()
    }
    throw new WxAPIError(`Unsupported ticket type: ${type}`, 500)
  }
}

applyMixins(CorpAPI, [
  CorpJs,
  CorpUser,
  CorpOAuth,
  CorpMsgTemplate,
  CorpContact,
  CorpGroupChat,
  CorpMsgAudit,
  CorpMedia,
  CorpTag,
  CorpMessage
])
