import { WeixinBase } from './weixin_base'

/**
 * 2021年6月之后各场景的客服消息下发规则：
 * 场景         下发额度   额度有效期
 * 用户发送消息    20条      48小时
 * 点击自定义菜单  3条       1分钟
 * 关注公众号     3条       1分钟
 * 扫描二维码     3条       1分钟
 * 支付成功      20条       48小时
 */

export type WxReplyMessage =
  | { type: 'text' | 'img' | 'voice' | 'video'; content: string }
  | {
      type: 'news'
      news_info: {
        content?: string
        list: [
          {
            title: string
            author?: string
            digest?: string
            show_cover?: 0 | 1
            cover_url?: string
            content_url: string
            source_url?: string
          }
        ]
      }
    }

export abstract class WeixinMessage extends WeixinBase {
  async sendMessage(
    toOpenid: string,
    message:
      | /**
       * 发送文本消息时，支持插入跳小程序的文字链
       * 文本内容<a href="http://www.qq.com" data-miniprogram-appid="appid" data-miniprogram-path="pages/index/index">点击跳小程序</a>
       * 说明：
       * 1.data-miniprogram-appid 项，填写小程序appid，则表示该链接跳小程序；
       * 2.data-miniprogram-path项，填写小程序路径，路径与app.json中保持一致，可带参数；
       * 3.对于不支持data-miniprogram-appid 项的客户端版本，如果有herf项，则仍然保持跳href中的网页链接；
       * 4.data-miniprogram-appid对应的小程序必须与公众号有绑定关系。
       */
      { msgtype: 'text'; text: { content: string } }
      | { msgtype: 'image'; image: { media_id: string } }
      | { msgtype: 'voice'; voice: { media_id: string } }
      | {
          msgtype: 'video'
          video: {
            media_id: string
            thumb_media_id: string
            title?: string
            description?: string
          }
        }
      | {
          msgtype: 'music'
          music: {
            title?: string
            description?: string
            musicurl: string
            hqmusicurl: string
            thumb_media_id: string
          }
        }
      | {
          msgtype: 'news'
          news: {
            title?: string
            description?: string
            url: string
            picurl?: string
          }
        }
      | { msgtype: 'mpnewsarticle'; mpnewsarticle: { article_id: string } }
      | {
          msgtype: 'msgmenu'
          msgmenu: {
            head_content: string
            tail_content: string
            list: { id: string; content: string }[]
          }
        }
      | { msgtype: 'wxcard'; wxcard: { card_id: string } }
      | {
          msgtype: 'miniprogrampage'
          miniprogrampage: {
            title: string
            appid: string
            pagepath: string
            thumb_media_id: string
          }
        },
    kf_account?: string
  ) {
    const result = await this.request({
      method: 'post',
      url: 'message/custom/send',
      data: {
        touser: toOpenid,
        ...message,
        ...(kf_account ? { customservice: { kf_account: kf_account } } : {})
      }
    })
    return result as {}
  }

  /**
   * 获取自动回复规则
   */
  async getAutoReplyInfo() {
    const result = await this.request({
      method: 'get',
      url: 'get_current_autoreply_info'
    })
    return result as {
      is_add_friend_reply_open: 0 | 1
      is_autoreply_open: 0 | 1
      add_friend_autoreply_info?: WxReplyMessage
      message_default_autoreply_info?: WxReplyMessage
      keyword_autoreply_info?: {
        list: {
          rule_name: string
          create_time: number
          reply_mode: 'reply_all' | 'random_one'
          keyword_list_info: {
            type: 'text'
            match_mode: 'contain' | 'equal'
            content: string
          }[]
          reply_list_info: WxReplyMessage[]
        }[]
      }
    }
  }
}
