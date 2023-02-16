import { WxSpBase } from './sp_base'
import { AuthorizationInfo } from './sp_authorizer'
import { URL } from 'url'

/**
 * @internal
 */
export abstract class WxSpAuth extends WxSpBase {
  /**
   * 获取预授权码
   */
  async createPreAuthCode() {
    const componentAccessToken = (await this.ensureAccessToken()).accessToken
    const result = await this.request({
      method: 'post',
      url: `component/api_create_preauthcode`,
      ignoreAccessToken: true,
      params: {
        component_access_token: componentAccessToken
      },
      data: {
        component_appid: this.componentAppid
      }
    })
    return result as {
      pre_auth_code: string
      expires_in: number
    }
  }

  /**
   * 使用授权码获取授权信息
   */
  async getAuthInfo(authorization_code: string) {
    const componentAccessToken = (await this.ensureAccessToken()).accessToken
    const result = await this.request({
      method: 'post',
      url: `component/api_query_auth`,
      ignoreAccessToken: true,
      params: {
        component_access_token: componentAccessToken
      },
      data: {
        component_appid: this.componentAppid,
        authorization_code: authorization_code
      }
    })
    return result as {
      authorization_info: AuthorizationInfo
    }
  }

  /**
   * 构建授权URL
   */
  async getAuthorizeURL(params: {
    scene: 'PC' | 'H5'
    /**
     * - 授权回调 URI(填写格式为https://xxx)。（插件版无该参数）
     * - 管理员授权确认之后会自动跳转进入回调 URI，并在 URL 参数中返回授权码和过期时间(redirect_url?auth_code=xxx&expires_in=600)
     */
    redirect_uri: string
    /**
     * - 要授权的帐号类型，即商家点击授权链接或者扫了授权码之后，展示在用户手机端的授权帐号类型。
     * - 1 表示手机端仅展示公众号；2 表示仅展示小程序，3 表示公众号和小程序都展示。如果为未指定，则默认小程序和公众号都展示。
     * - 第三方平台开发者可以使用本字段来控制授权的帐号类型。
     * - 对于已经注销、冻结、封禁、以及未完成注册的帐号不再出现于授权帐号列表。
     */
    auth_type: '1' | '2' | '3'
    /**
     * - 指定授权唯一的小程序或公众号 。
     * - 如果指定了appid，则只能是该 appid 的管理员进行授权，其他用户扫码会出现报错。
     * - auth_type、biz_appid 两个字段如果设置的信息冲突，则biz_appid生效的优先级更高。
     * - 例如，auth_type=1，但是biz_appid是小程序的appid，则会按照auth_type=2来处理，即以biz_appid的类型为准去拉出来对应的权限集列表.
     */
    biz_appid?: string
    /**
     * - 指定的权限集 id 列表，如果不指定，则默认拉取当前第三方账号已经全网发布的权限集列表。
     * - 如需要指定单个权限集ID，写法为“category_id_list=99” ，如果有多个权限集，则权限集 id 与id之间用中竖线隔开。
     */
    category_id_list?: string
  }) {
    const preAuthCode = (await this.createPreAuthCode()).pre_auth_code
    const url = new URL(
      params.scene == 'PC'
        ? 'https://mp.weixin.qq.com/cgi-bin/componentloginpage'
        : 'https://open.weixin.qq.com/wxaopen/safe/bindcomponent'
    )
    url.searchParams.append('component_appid', this.componentAppid)
    url.searchParams.append('pre_auth_code', preAuthCode)
    url.searchParams.append('redirect_uri', params.redirect_uri)
    url.searchParams.append('auth_type', params.auth_type)
    if (params.biz_appid) {
      url.searchParams.append('biz_appid', params.biz_appid)
    }
    if (params.category_id_list) {
      url.searchParams.append('category_id_list', params.category_id_list)
    }
    return url.href
  }
}
