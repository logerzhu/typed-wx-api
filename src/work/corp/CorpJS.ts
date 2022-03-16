import { createNonceStr, createTimestamp, sign } from '../../util'
import { BaseCorpAPI } from './BaseCorpAPI'

export abstract class CorpJS extends BaseCorpAPI {
  /**
   * 获取jsapi_ticket
   * https://work.weixin.qq.com/api/doc#10029/附录1-JS-SDK使用权限签名算法
   */
  getJsApiTicket(): Promise<{ ticket: string; expires_in: number }> {
    return this.request({
      url: 'get_jsapi_ticket'
    })
  }

  getJsApiAgentTicket(): Promise<{ ticket: string; expires_in: number }> {
    return this.request({
      url: 'ticket/get',
      params: {
        type: 'agent_config'
      }
    })
  }

  /**
   * 获取企业微信JS SDK Config的所需参数
   *
   * 注意事项
   *
   * 1. 签名用的noncestr和timestamp必须与wx.config中的nonceStr和timestamp相同。
   * 2. 签名用的url必须是调用JS接口页面的完整URL。
   * 3. 出于安全考虑，开发者必须在服务器端实现签名的逻辑。
   * Examples:
   * ```
   * var param = {
   *  debug:false,
   *  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
   *  url: 'http://www.xxx.com'
   * };
   * var result = await api.getJsConfig(param);
   * ```
   *
   * @param {Object} param 参数
   */
  async getJsConfig({
    debug,
    url,
    jsApiList
  }: {
    debug?: boolean
    url: string
    jsApiList: string[]
  }) {
    const ticketToken = await this.ensureTicket('jsapi')

    const nonceStr = createNonceStr()
    const timestamp = createTimestamp()
    const signature = sign({
      jsapi_ticket: ticketToken.ticket,
      noncestr: nonceStr,
      timestamp: timestamp,
      url: url
    })

    return {
      beta: true,
      debug: debug,
      appId: this.corpid,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: jsApiList
    }
  }

  async getAgentJsConfig({
    agentid,
    url,
    jsApiList
  }: {
    agentid: string
    url: string
    jsApiList: string[]
  }) {
    const ticketToken = await this.ensureTicket('jsapi-agent')

    const nonceStr = createNonceStr()
    const timestamp = createTimestamp()
    const signature = sign({
      jsapi_ticket: ticketToken.ticket,
      noncestr: nonceStr,
      timestamp,
      url
    })

    return {
      corpid: this.corpid, // 必填，企业微信的corpid，必须与当前登录的企业一致
      agentid: agentid, // 必填，企业微信的应用id （e.g. 1000247）
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: nonceStr, // 必填，生成签名的随机串
      signature: signature, // 必填，签名，见附录-JS-SDK使用权限签名算法
      jsApiList: jsApiList //必填
    }
  }
}
