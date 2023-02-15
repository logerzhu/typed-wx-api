import { TokenStorage } from '../../storage'
import { applyMixins } from '../../utils'
import {
  WxMpBase,
  WxMpDraft,
  WxMpFreePublish,
  WxMpIP,
  WxMpJs,
  WxMpMaterial,
  WxMpMedia,
  WxMpMenu,
  WxMpMessage,
  WxMpOpenAPI,
  WxMpQRCode,
  WxMpUser
} from './api'

export interface WxMpAPI
  extends WxMpBase,
    WxMpIP,
    WxMpJs,
    WxMpUser,
    WxMpQRCode,
    WxMpMedia,
    WxMpMaterial,
    WxMpDraft,
    WxMpFreePublish,
    WxMpOpenAPI,
    WxMpMenu,
    WxMpMessage {}

export class WxMpAPI extends WxMpBase {
  constructor(
    config: {
      appid: string
      secret: string
    },
    tokenStorage?: TokenStorage
  ) {
    super(config, tokenStorage)
  }
}

applyMixins(WxMpAPI, [
  WxMpIP,
  WxMpJs,
  WxMpUser,
  WxMpQRCode,
  WxMpMedia,
  WxMpMaterial,
  WxMpDraft,
  WxMpFreePublish,
  WxMpOpenAPI,
  WxMpMenu,
  WxMpMessage
])
