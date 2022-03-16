import { TokenStorage } from './AccessToken'
import { TicketStorage } from './Ticket'
import { applyMixins } from '../util'
import { CorpJS } from './corp/CorpJS'
import { CorpUser } from './corp/CorpUser'
import { CorpOAuth } from './corp/CorpOAuth'
import { CorpMsgTemplate } from './corp/externalcontact/CorpMsgTemplate'
import { CorpContact } from './corp/externalcontact/CorpContact'
import { CorpGroupChat } from './corp/externalcontact/CorpGroupChat'
import { CorpMsgAudit } from './corp/CorpMsgAudit'
import { APIConfig } from './api/BaseAPI'
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
    config: { corpID: string; corpSecret: string } & APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
  }

  async resolveTicket(type: string) {
    if (type === 'jsapi') {
      return this.getJsApiTicket()
    }
    return null
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
