import { TokenStorage } from '../../storage'
import { applyMixins } from '../../utils'
import { WxSpBase, WxSpTicket, WxSpAuthorizer } from './api'

export interface WxSpAPI extends WxSpBase, WxSpTicket, WxSpAuthorizer {}

export class WxSpAPI extends WxSpBase {
  constructor(
    config: {
      componentAppid: string
      componentAppSecret: string
      token: string
      encodingAESKey: string
    },
    tokenStorage?: TokenStorage
  ) {
    super(config, tokenStorage)
  }
}

applyMixins(WxSpAPI, [WxSpTicket, WxSpAuthorizer])
