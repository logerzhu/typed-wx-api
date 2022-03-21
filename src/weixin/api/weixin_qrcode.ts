import { WeixinBase } from './weixin_base'

export abstract class WeixinQRCode extends WeixinBase {
  /**
   * 创建临时二维码
   * @param scene 场景ID. id: 临时二维码时为32位非0整型. str: 字符串类型，长度限制为1到64
   * @param expire 过期时间，单位秒。最大不超过2592000（即30天），此字段如果不填，则默认有效期为60秒
   */
  async createTmpQRCode(
    scene: { id: number; str?: undefined } | { id?: undefined; str: string },
    expire: number = 60
  ) {
    const result = await this.request({
      method: 'post',
      url: 'qrcode/create',
      data: scene.str
        ? {
            expire_seconds: expire,
            action_name: 'QR_STR_SCENE',
            action_info: { scene: { scene_id: scene.str } }
          }
        : {
            expire_seconds: expire,
            action_name: 'QR_SCENE',
            action_info: { scene: { scene_id: scene.id } }
          }
    })
    return result as {
      ticket: string
      expire_seconds: number
      /**
       * 二维码的内容, 非二维码图片的地址
       */
      url: string
    }
  }

  /**
   * 创建永久二维码
   * @param sceneId 场景ID。ID不能大于100000
   */
  async createLimitQRCode(sceneId: number) {
    const result = await this.request({
      url: 'qrcode/create',
      method: 'post',
      data: {
        action_name: 'QR_LIMIT_SCENE',
        action_info: { scene: { scene_id: sceneId } }
      }
    })
    return result as {
      ticket: string
      /**
       * 二维码的内容, 非二维码图片的地址
       */
      url: string
    }
  }

  /**
   * 生成显示二维码的链接。微信扫描后，可立即进入场景
   * @param {String} ticket 二维码Ticket
   * @return {String} 显示二维码的URL地址，通过img标签可以显示出来 */
  showQRCodeURL(ticket: string) {
    return (
      'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' +
      encodeURIComponent(ticket)
    )
  }
}
