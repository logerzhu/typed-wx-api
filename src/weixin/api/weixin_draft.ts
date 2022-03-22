import { WeixinBase } from './weixin_base'

export type DraftNews = {
  title: string
  author?: string
  /**
   * 图文消息的摘要，仅有单图文消息才有摘要，多图文此处为空。如果本字段为没有填写，则默认抓取正文前54个字。
   */
  digest?: string
  /**
   * 图文消息的具体内容，支持HTML标签，必须少于2万字符，小于1M，且此处会去除JS,涉及图片url必须来源 上传图文消息内的图片获取URL接口获取。外部图片url将被过滤。
   */
  content: string
  /**
   * 图文消息的原文地址，即点击“阅读原文”后的URL
   */
  content_source_url?: string
  /**
   * 图文消息的封面图片素材id（必须是永久mediaID）
   */
  thumb_media_id: string
  need_open_comment?: 0 | 1
  only_fans_can_comment?: 0 | 1
}

/**
 * 草稿箱
 */
export abstract class WeixinDraft extends WeixinBase {
  /**
   * 新建草稿
   * @param {Object} draft 草稿
   */
  async addDraft(draft: DraftNews[]) {
    const result = await this.request({
      method: 'post',
      url: 'draft/add',
      data: { articles: draft }
    })
    return result as { media_id: string }
  }

  /**
   * 获取草稿
   * @param media_id
   */
  async getDraft(media_id: string) {
    const result = await this.request({
      method: 'post',
      url: 'draft/get',
      data: { media_id: media_id }
    })
    return result as {
      news_item: (DraftNews & {
        show_cover_pic?: 0 | 1
        url: string
      })[]
    }
  }

  /**
   * 删除草稿
   */
  async deleteDraft(media_id: string) {
    await this.request({
      method: 'post',
      url: 'draft/delete',
      data: { media_id: media_id }
    })
    return {}
  }

  /**
   * 更新草稿
   * @param draft 草稿
   */
  async updateDraft(draft: {
    media_id: string
    /**
     * 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义），第一篇为0
     */
    index: number
    articles: DraftNews
  }) {
    await this.request({
      method: 'post',
      url: 'draft/update',
      data: draft
    })
    return {}
  }

  /**
   * 获取草稿总数
   */
  async getDraftCount() {
    const result = await this.request({
      url: 'draft/count',
      method: 'get'
    })
    return result as {
      total_count: number
    }
  }

  /**
   * 获取草稿列表
   */
  async getDrafts(data: {
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
      url: 'draft/batchget',
      data: data
    })
    return result as {
      total_count: number
      item_count: number
      item: {
        media_id: string
        content: {
          news_item: (DraftNews & {
            show_cover_pic?: 0 | 1
            url: string
          })[]
        }
        update_time: number
      }[]
    }
  }
}
