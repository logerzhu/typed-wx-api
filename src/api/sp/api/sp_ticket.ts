import { WxSpBase } from './sp_base'
import { WxSpBaseInfoMessage } from '../crypto/crypto_sp'

//定义回调消息类型格式
declare module '../crypto/crypto_sp' {
  export interface WxSpInfoMessages {
    component_verify_ticket: WxSpBaseInfoMessage<'component_verify_ticket'> & {
      ComponentVerifyTicket: string
    }
  }
}

/**
 * @internal
 */
export abstract class WxSpTicket extends WxSpBase {
  /**
   * 启动 ticket 推送服务
   */
  async startPushTicket() {
    const result = await this.request({
      method: 'post',
      url: 'component/api_start_push_ticket',
      ignoreAccessToken: true,
      params: {
        component_appid: this.componentAppid,
        component_secret: this.componentAppSecret
      }
    })
    return {}
  }
}
