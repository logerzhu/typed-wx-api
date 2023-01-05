import { TicketStorage, TokenStorage } from '../storage'
import { APICrypto } from './api_crypto'
import { applyMixins } from '../utils'
import { APIBase, APIConfig } from './api_base'

export interface API extends APICrypto {}

/**
 * @internal
 */
export abstract class API extends APIBase {
  protected constructor(
    config: APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
  }
}

applyMixins(API, [APICrypto])
