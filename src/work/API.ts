import { TokenStorage } from './common/AccessToken'
import { TicketStorage } from './common/Ticket'
import { APICrypto } from './api/APICrypto'
import { applyMixins } from '../common'
import { APIConfig, BaseAPI } from './api/BaseAPI'
import { APIMedia } from './api/APIMedia'

export interface API extends APICrypto, APIMedia {}

export abstract class API extends BaseAPI {
  protected constructor(
    config: APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
  }
}

applyMixins(API, [APICrypto, APIMedia])
