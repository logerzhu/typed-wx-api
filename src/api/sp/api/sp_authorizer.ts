import { WxSpBase } from './sp_base'

export type AuthorizationInfo = {
  authorizer_appid: string //授权方 appid
  authorizer_access_token?: string //接口调用令牌（在授权的公众号/小程序具备 API 权限时，才有此返回值）
  expires_in?: number //authorizer_access_token 的有效期（在授权的公众号/小程序具备 API 权限时，才有此返回值），单位：秒
  authorizer_refresh_token: string //刷新令牌（在授权的公众号具备 API 权限时，才有此返回值），刷新令牌主要用于第三方平台获取和刷新已授权用户的 authorizer_access_token。一旦丢失，只能让用户重新授权，才能再次拿到新的刷新令牌。用户重新授权后，之前的刷新令牌会失效
  func_info?: {
    funcscope_category: {
      id: number
      type?: number
      name?: string
      desc?: string
    }
  }[] //授权给开发者的权限集列表
}

/**
 * @internal
 */
export abstract class WxSpAuthorizer extends WxSpBase {
  /**
   * 获取授权帐号调用令牌
   */
  async getAuthorizerAccessToken(params: {
    authorizer_appid: string //授权方 appid
    authorizer_refresh_token: string //刷新令牌，获取授权信息时得到
  }) {
    const componentAccessToken = (await this.ensureAccessToken()).accessToken
    const result = await this.request({
      method: 'post',
      url: `component/api_authorizer_token`,
      ignoreAccessToken: true,
      params: {
        component_access_token: componentAccessToken
      },
      data: {
        component_appid: this.componentAppid,
        authorizer_appid: params.authorizer_appid,
        authorizer_refresh_token: params.authorizer_refresh_token
      }
    })
    return result as {
      pre_auth_code: string
      expires_in: number
    }
  }

  /**
   * 拉取已授权的帐号信息
   */
  async getAuthorizerList(params: {
    offset: number //偏移位置/起始位置
    count: number //拉取数量，最大为 500
  }) {
    const componentAccessToken = (await this.ensureAccessToken()).accessToken
    const result = await this.request({
      method: 'post',
      url: `component/api_get_authorizer_list`,
      data: {
        component_appid: this.componentAppid,
        offset: params.offset,
        count: params.count
      }
    })
    return result as {
      total_count: number
      list: {
        authorizer_appid: string
        refresh_token: string
        auth_time: number
      }[]
    }
  }

  /**
   * 获取授权帐号详情
   */
  async getAuthorizerInfo(authorizer_appid: string) {
    const result = await this.request({
      method: 'post',
      url: `component/api_get_authorizer_info`,
      data: {
        component_appid: this.componentAppid,
        authorizer_appid: authorizer_appid
      }
    })
    return result as {
      authorizer_info: {
        nick_name: string //昵称
        head_img: string //头像
        service_type_info: {
          //公众号/小程序类型
          id: number //类型id
          name?: string //	类型说明
        }
        verify_type_info: {
          //公众号/小程序认证类型
          id: number //类型id
          name?: string //	类型说明
        }
        user_name: string //原始ID
        alias?: string //公众号所设置的微信号，可能为空
        qrcode_url: string //二维码图片的 URL
        business_info: {
          //用以了解功能的开通状况（0代表未开通，1代表已开通）
          open_pay: number //	是否开通微信支付功能
          open_shake: number //是否开通微信摇一摇功能
          open_scan: number //是否开通微信扫商品功能
          open_card: number //是否开通微信卡券功能
          open_store: number //是否开通微信门店功能
        }
        principal_name: string // 主体名称
        signature?: string //小程序帐号介绍
        MiniProgramInfo?: {
          //小程序配置信息，可根据这个字段判断是否为小程序类型授权
          network: {
            RequestDomain?: string[] //request合法域名
            WsRequestDomain?: string[] //socket合法域名
            UploadDomain?: string[] //uploadFile合法域名
            DownloadDomain?: string[] //downloadFile合法域名
            UDPDomain?: string[] //udp合法域名
            TCPDomain?: string[] //tcp合法域名
          }
          categories?: {
            //	小程序配置的类目信息
            first?: string //	一级类目
            second?: string //二级类目
          }[]
        }
        register_type?: number //小程序注册方式
        account_status: number //帐号状态，该字段小程序也返回
        basic_config?: {
          //基础配置信息
          is_phone_configured: boolean //是否已经绑定手机号
          is_email_configured: boolean //是否已经绑定邮箱，不绑定邮箱帐号的不可登录微信公众平台
        }
        authorization_info: AuthorizationInfo
      }
    }
  }

  /**
   * 设置授权方选项信息
   * @param authorizer_appid
   * @param option
   */
  async setAuthorizerOption(
    authorizer_appid: string,
    option:
      | {
          name: 'location_report' //地理位置上报选项
          value: '0' | '1' | '2' //0:无上报, 1:进入会话时上报, 2:每5s上报
        }
      | {
          name: 'voice_recognize' //语音识别开关选项
          value: '0' | '1' //0:关闭语音识别, 1:开启语音识别
        }
      | {
          name: 'customer_service' //多客服开关选项
          value: '0' | '1' //0:关闭多客服, 1:	开启多客服
        }
  ) {
    const result = await this.request({
      method: 'post',
      url: `component/api_set_authorizer_option`,
      data: {
        component_appid: this.componentAppid,
        authorizer_appid: authorizer_appid,
        option_name: option.name,
        option_value: option.value
      }
    })
    return result as {}
  }

  /**
   * 获取授权方选项信息
   * @param authorizer_appid
   * @param option_name
   */
  async getAuthorizerOption(
    authorizer_appid: string,
    option_name: 'location_report' | 'voice_recognize' | 'customer_service'
  ) {
    const result = await this.request({
      method: 'post',
      url: `component/api_get_authorizer_option`,
      data: {
        component_appid: this.componentAppid,
        authorizer_appid: authorizer_appid,
        option_name: option_name
      }
    })
    return result as {
      authorizer_appid: string
      option_name: string
      option_value: string
    }
  }
}
