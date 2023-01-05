import { TokenStorage } from '../storage'
import { applyMixins } from '../utils'
import {
  WeixinBase,
  WeixinDraft,
  WeixinFreePublish,
  WeixinIP,
  WeixinJs,
  WeixinMaterial,
  WeixinMedia,
  WeixinMenu,
  WeixinMessage,
  WeixinOpenAPI,
  WeixinQRCode,
  WeixinUser
} from './api'

export interface WeixinAPI
  extends WeixinBase,
    WeixinIP,
    WeixinJs,
    WeixinUser,
    WeixinQRCode,
    WeixinMedia,
    WeixinMaterial,
    WeixinDraft,
    WeixinFreePublish,
    WeixinOpenAPI,
    WeixinMenu,
    WeixinMessage {}

export class WeixinAPI extends WeixinBase {
  readonly appid: string
  readonly secret: string

  constructor(
    config: {
      appid: string
      secret: string
    },
    tokenStorage?: TokenStorage
  ) {
    super(config, tokenStorage)
    this.appid = config.appid
    this.secret = config.secret
  }
}

applyMixins(WeixinAPI, [
  WeixinIP,
  WeixinJs,
  WeixinUser,
  WeixinQRCode,
  WeixinMedia,
  WeixinMaterial,
  WeixinDraft,
  WeixinFreePublish,
  WeixinOpenAPI,
  WeixinMenu,
  WeixinMessage
])
