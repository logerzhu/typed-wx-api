import { WeixinBase } from './weixin_base'
import { WxDraftNews } from './weixin_draft'

/**
 * 发布草稿
 * @internal
 */
export abstract class WeixinFreePublish extends WeixinBase {
  /**
   * 发布草稿
   *
   * 发布任务提交成功，并不意味着此时发布已经完成，仍有可能在后续的发布过程中出现异常情况导致发布失败，如原创声明失败、平台审核不通过等。
   * @group 图文消息
   */
  async submitFreePublish(media_id: string) {
    const result = await this.request({
      url: 'freepublish/submit',
      method: 'post',
      data: { media_id: media_id }
    })
    return result as { publish_id: string }
  }

  /**
   * 发布状态轮询
   *
   * publish_status: 发布状态，0:成功, 1:发布中，2:原创失败, 3: 常规失败, 4:平台审核不通过, 5:成功后用户删除所有文章, 6: 成功后系统封禁所有文章
   *
   * fail_idx: 当发布状态为2或4时，返回不通过的文章编号，第一篇为 1
   * @group 图文消息
   */
  async getFreePublish(publish_id: string) {
    const result = await this.request({
      url: 'freepublish/get',
      method: 'post',
      data: { publish_id: publish_id }
    })
    return result as
      | {
          publish_id: string
          publish_status: 0
          article_id: string
          article_detail: {
            count: number
            item: { idx: number; article_url: string }[]
          }
        }
      | {
          publish_id: string
          publish_status: 1
        }
      | {
          publish_id: string
          publish_status: 2 | 3 | 4 | 5 | 6
          fail_idx: number[]
        }
  }

  /**
   * 删除发布
   * @param data
   * @group 图文消息
   */
  async deleteFreePublish(data: {
    article_id: string
    /**
     * 要删除的文章在图文消息中的位置，第一篇编号为1，该字段不填或填0会删除全部文章
     */
    index?: number
  }) {
    await this.request({
      url: 'freepublish/delete',
      method: 'post',
      data: data
    })
    return {}
  }

  /**
   * 通过 article_id 获取已发布文章
   * @param article_id
   * @group 图文消息
   */
  async getArticle(article_id: string) {
    const result = await this.request({
      url: 'freepublish/getarticle',
      method: 'post',
      data: { article_id: article_id }
    })
    return result as {
      news_item: (WxDraftNews & {
        show_cover_pic?: 0 | 1
        url: string
        is_deleted: boolean
      })[]
    }
  }

  /**
   * 获取图文列表
   * @group 图文消息
   */
  async getFreePublishes(data: {
    /**
     * 从全部素材的该偏移位置开始返回，0表示从第一个素材返回
     */
    offset: number
    /**
     * 返回素材的数量，取值在1到20之间
     */
    count: number
    /**
     * 1 表示不返回 content 字段，0 表示正常返回，默认为 0
     */
    no_content?: 0 | 1
  }) {
    const result = await this.request({
      method: 'post',
      url: 'freepublish/batchget',
      data: data
    })
    return result as {
      total_count: number
      item_count: number
      item: {
        article_id: string
        content: {
          news_item: (WxDraftNews & {
            show_cover_pic?: 0 | 1
            url: string
            is_deleted: boolean
          })[]
        }
        update_time: number
      }[]
    }
  }
}
