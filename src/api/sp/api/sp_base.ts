import { API } from '../../index'
import { TicketStorage, TokenStorage } from '../../../storage'

/**
 * @internal
 */
export abstract class WxSpBase extends API {
  readonly componentAppid: string // 微信第三方平台 appid
  readonly componentAppSecret: string // 微信第三方平台 appSecret
  readonly token: string // 消息校验 Token
  readonly encodingAESKey: string // 消息加解密 key

  protected constructor(
    config: {
      componentAppid: string
      componentAppSecret: string
      token: string
      encodingAESKey: string
    },
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(
      { baseURL: 'https://api.weixin.qq.com/cgi-bin/' },
      tokenStorage,
      ticketStorage
    )
    this.componentAppid = config.componentAppid
    this.componentAppSecret = config.componentAppSecret
    this.token = config.token
    this.encodingAESKey = config.encodingAESKey
  }

  async resolveAccessToken() {
    const result = await this.request({
      url: 'component/api_component_token',
      params: {
        component_appid: this.componentAppid,
        component_appsecret: this.componentAppSecret,
        component_verify_ticket: await this.ensureTicket(
          'component_verify_ticket'
        )
      },
      ignoreAccessToken: true
    })
    return {
      access_token: result.component_access_token,
      expires_in: result.expires_in
    }
  }

  async resolveTicket(
    type: string
  ): Promise<{ ticket: string; expires_in: number }> {
    // TODO
    throw new Error('Unsupported')
  }
}
