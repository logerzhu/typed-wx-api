import { WxMpBase } from './mp_base'
import { WxJsCrypto } from '../../../crypto'
import crypto from 'crypto'

/**
 * @internal
 */
export abstract class WxMpJs extends WxMpBase {
  /**
   * 获取微信JS SDK Config的所需参数
   * @param param
   * @group JS_SDK
   */
  async getJsConfig(param: {
    debug?: boolean
    jsApiList: string[]
    url: string
    openTagList?: string[]
  }) {
    const ticket = await this.ensureTicket('jsapi')
    const nonceStr = WxJsCrypto.createNonceStr()
    const timestamp = WxJsCrypto.createTimestamp()
    const signature = WxJsCrypto.sign({
      jsapi_ticket: ticket.ticket,
      nonceStr: nonceStr,
      timestamp: timestamp,
      url: param.url.split('#')[0]
    })

    return {
      debug: param.debug,
      appId: this.appid,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: param.jsApiList,
      openTagList: param.openTagList || []
    }
  }

  /**
   * 获取微信JS SDK Config的所需参数
   * @param param
   * @group JS_SDK
   */
  async getCardExtConfig(param: {
    card_id: string
    code?: string
    openid?: string
    balance?: number
  }) {
    const apiTicket = await this.ensureTicket('wx_card')
    const timestamp = WxJsCrypto.createTimestamp()

    //signCardExt

    const signature = (function () {
      const values = [
        apiTicket.ticket,
        param.card_id,
        timestamp,
        param.code || '',
        param.openid || '',
        param.balance || ''
      ]
      values.sort()

      const string = values.join('')
      const shaSum = crypto.createHash('sha1')
      shaSum.update(string)
      return shaSum.digest('hex')
    })()
    return {
      timestamp: timestamp,
      signature: signature,
      code: param.code || '',
      openid: param.openid || '',
      balance: param.balance
    }
  }
}
