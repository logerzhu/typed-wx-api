import { TicketStorage, TokenStorage } from '../../storage'
import { ApiCrypto } from './api_crypto'
import { applyMixins } from '../../utils'
import { ApiBase, APIConfig } from './api_base'
import { ApiMedia } from './api_media'

export interface Api extends ApiCrypto, ApiMedia {}

export abstract class Api extends ApiBase {
  protected constructor(
    config: APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    super(config, tokenStorage, ticketStorage)
  }
}

applyMixins(Api, [ApiCrypto, ApiMedia])
