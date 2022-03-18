import { TicketStorage, TokenStorage } from '../../storage'
import { applyMixins } from '../../utils'
import { CorpJs } from './corp_js'
import { CorpUser } from './corp_user'
import { CorpOAuth } from './corp_oauth'
import { CorpMsgTemplate } from './corp_msg_template'
import { CorpContact } from './corp_contact'
import { CorpGroupChat } from './corp_groupchat'
import { CorpMsgAudit } from './corp_msg_audit'
import { CorpBase } from './corp_base'
import { CorpMedia } from './corp_media'
import { WxAPIError } from '../../errors'

export interface CorpApi
  extends CorpJs,
    CorpUser,
    CorpOAuth,
    CorpMsgTemplate,
    CorpContact,
    CorpGroupChat,
    CorpMsgAudit,
    CorpMedia {}

export class CorpApi extends CorpBase {
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

applyMixins(CorpApi, [
  CorpJs,
  CorpUser,
  CorpOAuth,
  CorpMsgTemplate,
  CorpContact,
  CorpGroupChat,
  CorpMsgAudit,
  CorpMedia
])
