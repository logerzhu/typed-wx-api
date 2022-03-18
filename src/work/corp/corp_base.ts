import { Api } from '../api/api'
import { APIConfig } from '../api/api_base'
import { TicketStorage, TokenStorage } from '../../storage'

export abstract class CorpBase extends Api {
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