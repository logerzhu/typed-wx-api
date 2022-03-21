import { TokenStorage } from '../../storage'
import { applyMixins } from '../../utils'
import { WeixinIP } from './weixin_ip'
import { WeixinBase } from './weixin_base'

export interface WeixinApi extends WeixinBase, WeixinIP {}

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

applyMixins(WeixinApi, [WeixinIP])