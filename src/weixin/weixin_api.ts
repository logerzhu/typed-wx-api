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
  WeixinOpenApi,
  WeixinQRCode,
  WeixinUser
} from './api'

export interface WeixinApi
  extends WeixinBase,
    WeixinIP,
    WeixinJs,
    WeixinUser,
    WeixinQRCode,
    WeixinMedia,
    WeixinMaterial,
    WeixinDraft,
    WeixinFreePublish,
    WeixinOpenApi,
    WeixinMenu,
    WeixinMessage {}

export class WeixinApi extends WeixinBase {
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

applyMixins(WeixinApi, [
  WeixinIP,
  WeixinJs,
  WeixinUser,
  WeixinQRCode,
  WeixinMedia,
  WeixinMaterial,
  WeixinDraft,
  WeixinFreePublish,
  WeixinOpenApi,
  WeixinMenu,
  WeixinMessage
])
