import {
  AccessToken,
  MemoryTicketStorage,
  MemoryTokenStorage,
  Ticket,
  TicketStorage,
  TokenStorage
} from '../storage'
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { WxAPIError } from '../errors'

export type APIConfig = {
  baseURL: string
  accessTokenKey?: string
}

export type Logger = (message: any, ...args: any[]) => void

/**
 * @internal
 */
export abstract class APIBase {
  readonly config: Required<APIConfig>
  private tokenStorage: TokenStorage
  private ticketStorage: TicketStorage
  private axiosInstance: AxiosInstance

  logger: Logger = () => {}

  constructor(
    config: APIConfig,
    tokenStorage?: TokenStorage,
    ticketStorage?: TicketStorage
  ) {
    this.config = {
      ...config,
      baseURL: config.baseURL,
      accessTokenKey: config.accessTokenKey || 'access_token'
    }
    this.tokenStorage = tokenStorage || new MemoryTokenStorage()
    this.ticketStorage = ticketStorage || new MemoryTicketStorage()

    this.axiosInstance = Axios.create({
      baseURL: this.config.baseURL,
      timeout: 12000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async request(
    opts: AxiosRequestConfig & { ignoreAccessToken?: boolean },
    retry = 3
  ): Promise<any> {
    opts.method = opts.method || 'get'
    if (!opts.ignoreAccessToken) {
      const token = await this.ensureAccessToken()
      opts.params = opts.params || {}
      opts.params[this.config.accessTokenKey] = token.accessToken
    }

    try {
      const res = await this.axiosInstance.request(opts)
      this.logger('WxRequest', opts, res.data)
      if (res.status < 200 || res.status > 204) {
        throw new WxAPIError(`url: ${opts.url}, status code: ${res.status}`, -1)
      }

      const { errcode, errmsg } = res.data
      if (!errcode) {
        return res.data
      }

      if ((errcode === 40001 || errcode === 42001) && retry > 0) {
        // Token过期, 重新获取
        await this.tokenStorage.save(null)
        return this.request(opts, retry - 1)
      } else {
        throw new WxAPIError(errmsg, errcode)
      }
    } catch (error) {
      this.logger('WxRequestError', opts, error)
      console.error('WxRequestError:', opts, error)
      if (error instanceof WxAPIError) {
        throw error
      } else if (error.response) {
        throw new WxAPIError(
          error.response.data?.errmsg || '服务器内部错误',
          error.response.data?.errcode || error.response.status
        )
      } else if (error.request) {
        throw new WxAPIError('请求超时，请检查网络', 406)
      } else if (typeof error.errcode === 'undefined') {
        throw new WxAPIError('请求失败，请稍后再试', 400)
      } else {
        throw new WxAPIError('未知错误', 500)
      }
    }
  }

  abstract resolveAccessToken(): Promise<{
    access_token: string
    expires_in: number
  }>

  async getAccessToken() {
    const { expires_in, access_token } = await this.resolveAccessToken()
    // 过期时间，因网络延迟等，将实际过期时间提前10秒，以防止临界点
    const expireTime = new Date().getTime() + (expires_in - 10) * 1000
    const token = new AccessToken(access_token, expireTime)

    await this.tokenStorage.save(token)
    return token
  }

  async ensureAccessToken() {
    const token = await this.tokenStorage.load()
    if (token?.isValid()) {
      return token
    }
    return this.getAccessToken()
  }

  abstract resolveTicket(
    type: string
  ): Promise<{ ticket: string; expires_in: number }>

  async getTicket(type: string) {
    const { expires_in, ticket } = await this.resolveTicket(type)

    // 过期时间，因网络延迟等，将实际过期时间提前10秒，以防止临界点
    const expireTime = new Date().getTime() + (expires_in - 10) * 1000
    const ticketToken = new Ticket(ticket, expireTime)
    await this.ticketStorage.save(type, ticketToken)
    return ticketToken
  }

  async ensureTicket(type: string) {
    const ticketToken = await this.ticketStorage.load(type)
    if (ticketToken?.isValid()) {
      return ticketToken
    } else {
      return this.getTicket(type)
    }
  }
}
