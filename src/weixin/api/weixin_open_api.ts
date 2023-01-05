import { WeixinBase } from './weixin_base'

/**
 * @internal
 */
export abstract class WeixinOpenApi extends WeixinBase {
  /**
   * 查询openAPI调用quota
   *
   * cgi_path: api的请求地址，例如"/cgi-bin/message/custom/send";不要前缀“https://api.weixin.qq.com” ，也不要漏了"/",否则都会76003的报错
   * @group API额度
   */
  async getQuota(cgi_path: string) {
    const result = await this.request({
      method: 'post',
      url: 'openapi/quota/get',
      data: {
        cgi_path: cgi_path
      }
    })
    return result.quota as {
      daily_limit: number
      used: number
      remain: number
    }
  }

  /**
   * 清空api的调用quota
   * @group API额度
   */
  async clearQuota() {
    const result = await this.request({
      method: 'post',
      url: 'clear_quota',
      data: {
        appid: this.appid
      }
    })
    return result as {}
  }

  /**
   * 查询rid信息
   * @group API额度
   */
  async getRid(rid: string) {
    const result = await this.request({
      method: 'post',
      url: 'openapi/rid/get',
      data: {
        appid: this.appid
      }
    })
    return result as {
      request: {
        invoke_time: number
        cost_in_ms: number
        request_url: string
        request_body: string
        response_body: string
      }
    }
  }
}
