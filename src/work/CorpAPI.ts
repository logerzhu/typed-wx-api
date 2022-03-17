import { TokenStorage } from './common/AccessToken'
import { TicketStorage } from './common/Ticket'
import { applyMixins } from '../common'
import { CorpJS } from './corp/CorpJS'
import { CorpUser } from './corp/CorpUser'
import { CorpOAuth } from './corp/CorpOAuth'
import { CorpMsgTemplate } from './corp/externalcontact/CorpMsgTemplate'
import { CorpContact } from './corp/externalcontact/CorpContact'
import { CorpGroupChat } from './corp/externalcontact/CorpGroupChat'
import { CorpMsgAudit } from './corp/CorpMsgAudit'
import { APIConfig, WxWorkAPIError } from './api/BaseAPI'
import { BaseCorpAPI } from './corp/BaseCorpAPI'

export interface CorpAPI
  extends CorpJS,
    CorpUser,
    CorpOAuth,
    CorpMsgTemplate,
    CorpContact,
    CorpGroupChat,
    CorpMsgAudit {}

export class CorpAPI extends BaseCorpAPI {
  constructor(
    config: {
      corpid: string
      corpSecret: string
      agentid?: string
    } & APIConfig,
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
    throw new WxWorkAPIError(`Unsupported ticket type: ${type}`, 500)
  }
}

applyMixins(CorpAPI, [
  CorpJS,
  CorpUser,
  CorpOAuth,
  CorpMsgTemplate,
  CorpContact,
  CorpGroupChat,
  CorpMsgAudit
])
