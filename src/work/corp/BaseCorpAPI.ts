import { API } from '../API'
import { APIConfig } from '../api/BaseAPI'
import { TokenStorage } from '../common/AccessToken'
import { TicketStorage } from '../common/Ticket'

export abstract class BaseCorpAPI extends API {
  readonly corpid: string
  readonly corpSecret: string
  readonly agentid?: string

  constructor(
    config: {
      corpid: string
      corpSecret: string
      agentid?: string
    } & APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
    this.corpid = config.corpid
    this.corpSecret = config.corpSecret
    this.agentid = config.agentid
  }

  async resolveAccessToken() {
    const result = await this.request({
      url: 'gettoken',
      params: {
        corpid: this.corpid,
        corpsecret: this.corpSecret
      },
      ignoreAccessToken: true
    })
    return { access_token: result.access_token, expires_in: result.expires_in }
  }
}
