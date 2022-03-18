import { Api } from '../../api/api'
import { TicketStorage, TokenStorage } from '../../storage'

export abstract class WeixinBase extends Api {
  readonly appid: string
  readonly secret: string

  protected constructor(
    config: {
      appid: string
      secret: string
    },
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(
      { baseURL: 'https://api.weixin.qq.com/cgi-bin/' },
      tokenStorage,
      ticketStorage
    )
    this.appid = config.appid
    this.secret = config.secret
  }

  async resolveAccessToken() {
    const result = await this.request({
      url: 'token',
      params: {
        grant_type: 'client_credential',
        appid: this.appid,
        secret: this.secret
      },
      ignoreAccessToken: true
    })
    return { access_token: result.access_token, expires_in: result.expires_in }
  }

  async resolveTicket(type: 'jsapi' | string) {
    const result = await this.request({
      url: 'ticket/getticket',
      params: { type: type }
    })
    console.log('ticket', result)
    return result
  }
}
