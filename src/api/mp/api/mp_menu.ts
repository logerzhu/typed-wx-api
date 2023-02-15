import { WxMpBase } from './mp_base'

export type WxButtonItem = {
  /**
   * 一级菜单最多4个汉字，二级菜单最多8个汉字，多出来的部分将会以“...”代替
   */
  name: string
  sub_button?: []
} & (
  | /**
   * 点击推事件用户点击click类型按钮后，微信服务器会通过消息接口推送消息类型为event的结构给开发者（参考消息接口指南），并且带上按钮中开发者填写的key值，开发者可以通过自定义的key值与用户进行交互
   */
  { type: 'click'; key: string }
  /**
   * 跳转URL用户点击view类型按钮后，微信客户端将会打开开发者在按钮中填写的网页URL，可与网页授权获取用户基本信息接口结合，获得用户基本信息。
   */
  | { type: 'view'; url: string }
  /**
   * 扫码推事件用户点击按钮后，微信客户端将调起扫一扫工具，完成扫码操作后显示扫描结果（如果是URL，将进入URL），且会将扫码的结果传给开发者，开发者可以下发消息。
   */
  | { type: 'scancode_push'; key: string }
  /**
   * 扫码推事件且弹出“消息接收中”提示框用户点击按钮后，微信客户端将调起扫一扫工具，完成扫码操作后，将扫码的结果传给开发者，同时收起扫一扫工具，然后弹出“消息接收中”提示框，随后可能会收到开发者下发的消息。
   */
  | { type: 'scancode_waitmsg'; key: string }
  /**
   * 弹出系统拍照发图用户点击按钮后，微信客户端将调起系统相机，完成拍照操作后，会将拍摄的相片发送给开发者，并推送事件给开发者，同时收起系统相机，随后可能会收到开发者下发的消息。
   */
  | { type: 'pic_sysphoto'; key: string }
  /**
   * 弹出拍照或者相册发图用户点击按钮后，微信客户端将弹出选择器供用户选择“拍照”或者“从手机相册选择”。用户选择后即走其他两种流程。
   */
  | { type: 'pic_photo_or_album'; key: string }
  /**
   * 弹出微信相册发图器用户点击按钮后，微信客户端将调起微信相册，完成选择操作后，将选择的相片发送给开发者的服务器，并推送事件给开发者，同时收起相册，随后可能会收到开发者下发的消息。
   */
  | { type: 'pic_weixin'; key: string }
  /**
   * 弹出地理位置选择器用户点击按钮后，微信客户端将调起地理位置选择工具，完成选择操作后，将选择的地理位置发送给开发者的服务器，同时收起位置选择工具，随后可能会收到开发者下发的消息。
   */
  | { type: 'location_select'; key: string }
  /**
   * 下发消息（除文本消息）用户点击media_id类型按钮后，微信服务器会将开发者填写的永久素材id对应的素材下发给用户，永久素材类型可以是图片、音频、视频。请注意：永久素材id必须是在“素材管理/新增永久素材”接口上传后获得的合法id。
   */
  | { type: 'media_id'; media_id: string }
  /**
   * 用户点击 article_id 类型按钮后，微信客户端将会以卡片形式，下发开发者在按钮中填写的图文消息
   */
  | { type: 'article_id'; article_id: string }
  | { type: 'article_view_limited'; article_id: string }
  | { type: 'miniprogram'; url: string; appid: string; pagepath: string }
)

/**
 * 自定义菜单最多包括3个一级菜单，每个一级菜单最多包含5个二级菜单
 */
export type Button =
  | WxButtonItem
  | { name: string; type?: undefined; sub_button: WxButtonItem[] }

export type WxMenu = { button: Button[] }

/**
 * 在公众平台官网通过网站功能发布的菜单项
 */
export type WxMpButtonItem = { name: string } & (
  | {
      type: 'text' | 'img' | 'voice' | 'video'
      value: string
    }
  | { type: 'view'; url: string }
  | {
      type: 'news'
      value: string
      news_info: {
        list: {
          title: string
          author?: string
          digest?: string
          show_cover?: 0 | 1
          cover_url?: string
          content_url?: string
          source_url?: string
        }[]
      }
    }
)

/**
 * @internal
 */
export abstract class WxMpMenu extends WxMpBase {
  /**
   * 创建自定义菜单
   * @param menu
   * @group 菜单
   */
  async createMenu(menu: WxMenu) {
    const result = await this.request({
      method: 'post',
      url: 'menu/create',
      data: menu
    })
    return result as {}
  }

  /**
   * 获取自定义菜单配置
   * @group 菜单
   */
  async getMenu() {
    const result = await this.request({
      method: 'get',
      url: 'menu/get'
    })
    return result as
      | {
          menu: WxMenu
        }
      | {
          menu?: {
            button: Button[]
            menuid: string
          }
          conditionalmenu?: {
            button: Button[]
            matchrule: {
              group_id?: string
              client_platform_type?: 1 | 2 | 3
            }
            menuid: string
          }[]
        }
  }

  /**
   * 删除自定义菜单
   * @group 菜单
   */
  async removeMenu() {
    const result = await this.request({
      method: 'get',
      url: 'menu/delete'
    })
    return result as {}
  }

  /**
   * 查询自定义菜单配置
   *
   * 本接口将会提供公众号当前使用的自定义菜单的配置，如果公众号是通过API调用设置的菜单，则返回菜单的开发配置，
   * 而如果公众号是在公众平台官网通过网站功能发布菜单，则本接口返回运营者设置的菜单配置。
   *
   * @group 菜单
   */
  async getCurrentSelfMenuInfo() {
    const result = await this.request({
      method: 'get',
      url: 'get_current_selfmenu_info'
    })
    return result as {
      is_menu_open: 0 | 1
      selfmenu_info:
        | WxMenu
        | {
            button:
              | WxMpButtonItem
              | { name: string; type?: undefined; sub_button: WxMpButtonItem[] }
          }
    }
  }

  /**
   * 创建个性化自定义菜单
   * @group 菜单
   */
  async addConditionalMenu(menu: {
    button: Button[]
    matchrule: {
      tag_id: string
      /**
       * 客户端版本，当前只具体到系统型号：IOS(1), Android(2),Others(3)，不填则不做匹配
       */
      client_platform_type: '1' | '2' | '3'
    }
  }) {
    const result = await this.request({
      method: 'post',
      url: 'menu/addconditional',
      data: menu
    })
    return result as {
      menuid: string
    }
  }

  /**
   * 删除个性化自定义菜单
   * @group 菜单
   */
  async delConditionalMenu(menuid: string) {
    const result = await this.request({
      method: 'post',
      url: 'menu/delconditional',
      data: { menuid: menuid }
    })
    return result as {}
  }

  /**
   * 测试个性化菜单匹配结果
   * @param user_id 可以是粉丝的OpenID，也可以是粉丝的微信号。
   * @group 菜单
   */
  async tryMatchConditionalMenu(user_id: string) {
    const result = await this.request({
      method: 'post',
      url: 'menu/trymatch',
      data: { user_id: user_id }
    })
    return result as WxMenu
  }
}
