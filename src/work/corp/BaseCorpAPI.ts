import { API } from '../API'
import { APIConfig } from '../api/BaseAPI'
import { TokenStorage } from '../AccessToken'
import { TicketStorage } from '../Ticket'

export abstract class BaseCorpAPI extends API {
  readonly corpID: string
  readonly corpSecret: string

  constructor(
    config: { corpID: string; corpSecret: string } & APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
    this.corpID = config.corpID
    this.corpSecret = config.corpSecret
  }

  async resolveAccessToken() {
    const result = await this.request({
      url: 'gettoken',
      params: {
        corpid: this.corpID,
        corpsecret: this.corpSecret
      },
      ignoreAccessToken: true
    })
    return { access_token: result.access_token, expires_in: result.expires_in }
  }
}
