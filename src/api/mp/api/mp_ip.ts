import { WxMpBase } from './mp_base'

/**
 * @internal
 */
export abstract class WxMpIP extends WxMpBase {
  /**
   * 获取微信服务器IP地址
   * @group 微信服务器
   */
  async getIP() {
    const result = await this.request({
      url: 'getcallbackip'
    })
    return result.ip_list as string[]
  }
}
