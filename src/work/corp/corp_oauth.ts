import { CorpBase } from './corp_base'
import querystring from 'querystring'

/**
 * @internal
 */
export abstract class CorpOAuth extends CorpBase {
  /**
   * 获取授权页面的URL地址
   * https://work.weixin.qq.com/api/doc#10028/获取code
   * @param {String} redirect 授权后要跳转的地址
   * @param {String} state 开发者可提供的数据
   * @param {String} scope 应用授权作用域，snsapi_base：静默授权，可获取成员的基础信息；snsapi_userinfo：静默授权，可获取成员的详细信息，但不包含手机、邮箱；snsapi_privateinfo：手动授权，可获取成员的详细信息，包含手机、邮箱。
   * @param {String} agentid 当scope是snsapi_userinfo或snsapi_privateinfo时，该参数必填
   * @group 授权登录
   */
  getAuthorizeURL(
    redirect: string,
    state: string,
    scope: 'snsapi_base' | 'snsapi_userinfo' | 'snsapi_privateinfo',
    agentid: string
  ) {
    const url = 'https://open.weixin.qq.com/connect/oauth2/authorize'
    const info = {
      appid: this.corpid,
      redirect_uri: redirect,
      response_type: 'code',
      scope: scope,
      agentid: agentid,
      state: state || ''
    }
    return url + '?' + querystring.stringify(info) + '#wechat_redirect'
  }

  /**
   * 根据code获取成员信息. 企业成员返回userid, 非企业成员返回openid
   * https://work.weixin.qq.com/api/doc#10028/根据code获取成员信息
   * @param {String} code 通过成员授权获取到的code，最大为512字节。每次成员授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。
   * @group 授权登录
   */
  async getUseridByCode(code: string) {
    const result = await this.request({
      url: 'user/getuserinfo',
      params: {
        code: code
      }
    })
    if (result.UserId) {
      return { userid: result.UserId as string }
    } else {
      return { openid: result.OpenId as string }
    }
  }
}
