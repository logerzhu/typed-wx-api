import { TokenStorage } from '../../storage'
import { applyMixins } from '../../utils'
import { WeixinIP } from './weixin_ip'
import { WeixinJs } from './weixin_js'
import { WeixinUser } from './weixin_user'
import { WeixinBase } from './weixin_base'
import { WeixinQRCode } from './weixin_qrcode'
import { WeixinMedia } from './weixin_media'
import { WeixinMaterial } from './weixin_material'

export interface WeixinApi
  extends WeixinBase,
    WeixinIP,
    WeixinJs,
    WeixinUser,
    WeixinQRCode,
    WeixinMedia,
    WeixinMaterial {}

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
  WeixinMaterial
])
