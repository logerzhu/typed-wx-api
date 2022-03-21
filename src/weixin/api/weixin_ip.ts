import { WeixinBase } from './weixin_base'

export abstract class WeixinIP extends WeixinBase {
  /**
   * 获取微信服务器IP地址
   */
  async getIP() {
    const { accessToken } = await this.ensureAccessToken()
    const result = await this.request({
      url: 'getcallbackip'
    })
    return result.ip_list as string[]
  }
}
