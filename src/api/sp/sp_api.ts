import { TicketStorage, TokenStorage } from '../../storage'
import { applyMixins } from '../../utils'
import { WxSpAuth, WxSpAuthorizer, WxSpBase, WxSpTicket } from './api'

export interface WxSpAPI
  extends WxSpBase,
    WxSpTicket,
    WxSpAuthorizer,
    WxSpAuth {}

export class WxSpAPI extends WxSpBase {
  constructor(
    config: {
      componentAppid: string
      componentAppSecret: string
      token: string
      encodingAESKey: string
    },
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
  }
}

applyMixins(WxSpAPI, [WxSpTicket, WxSpAuthorizer, WxSpAuth])
