import { WxMpBase } from './mp_base'
import FormData from 'form-data'

/**
 * @internal
 */
export abstract class WxMpMaterial extends WxMpBase {
  /**
   * 新增永久素材，分别有图片（image）、语音（voice）和缩略图（thumb）
   *
   * 图片（image）: 10M，支持PNG\JPEG\JPG\GIF格式
   * 语音（voice）：2M，播放长度不超过60s，支持AMR\MP3格式
   * 缩略图（thumb）：64KB，支持JPG格式
   * @group 永久素材
   */
  async uploadMaterial(
    buffer: Buffer,
    type: 'image' | 'voice' | 'thumb',
    filename: string
  ) {
    const form = new FormData()
    form.append('media', buffer, filename)
    const result = await this.request({
      method: 'post',
      headers: { ...form.getHeaders(), Accept: 'application/json' },
      data: form.getBuffer(),
      url: 'material/add_material',
      params: { type }
    })
    return result as {
      media_id: string
      /**
       * 新增的图片素材的图片URL（仅新增图片素材时会返回该字段）
       */
      url?: string
    }
  }

  /**
   * 新增永久视频素材
   * 视频（video）：10MB，支持MP4格式
   * @group 永久素材
   */
  async uploadVideoMaterial(
    buffer: Buffer,
    filename: string,
    title: string,
    introduction: string
  ) {
    const form = new FormData()
    form.append('media', buffer, filename)
    form.append(
      'description',
      JSON.stringify({
        title: title,
        introduction: introduction
      })
    )
    const result = await this.request({
      method: 'post',
      headers: { ...form.getHeaders(), Accept: 'application/json' },
      data: form.getBuffer(),
      url: 'material/add_material',
      params: { type: 'video' }
    })

    return result as {
      media_id: string
    }
  }

  /**
   * 获取视频(video)永久素材
   * @param media_id
   * @group 永久素材
   */
  async getVideoMaterial(media_id: string) {
    const result = await this.request({
      method: 'post',
      url: 'material/get_material',
      data: { media_id: media_id }
    })
    return result as {
      title: string
      description: string
      down_url: string
    }
  }

  /**
   * 获取图片（image）、语音（voice）和缩略图（thumb）永久素材
   * @param media_id
   * @group 永久素材
   */
  async getMaterial(media_id: string) {
    const result = await this.request({
      method: 'post',
      url: 'material/get_material',
      data: { media_id: media_id },
      responseType: 'arraybuffer'
    })
    return result as Buffer
  }

  /**
   * 获取图文消息(news)永久素材
   * @param media_id
   * @group 永久素材
   */
  async getNewsMaterial(media_id: string) {
    const result = await this.request({
      method: 'post',
      url: 'material/get_material',
      data: { media_id: media_id }
    })
    return result as {
      news_item: {
        title: string
        thumb_media_id: string
        show_cover_pic: 0 | 1
        author?: string
        digest?: string
        content: string
        url: string
        content_source_url: string
      }[]
    }
  }

  /**
   * 删除永久素材
   * @group 永久素材
   */
  async deleteMaterial(media_id: string) {
    await this.request({
      method: 'post',
      url: 'material/del_material',
      data: { media_id: media_id }
    })
    return {}
  }

  /**
   * 获取素材总数
   * 1. 永久素材的总数，也会计算公众平台官网素材管理中的素材
   * 2.图片和图文消息素材（包括单图文和多图文）的总数上限为100000，其他素材的总数上限为1000
   * @group 永久素材
   */
  async getMaterialCount() {
    const result = await this.request({
      url: 'material/get_materialcount',
      method: 'get'
    })
    return result as {
      voice_count: number
      video_count: number
      image_count: number
      news_count: number
    }
  }

  /**
   * 获取永久素材列表
   * @param type 素材的类型，图片（image）、视频（video）、语音 （voice）
   * @param offset 从全部素材的该偏移位置开始返回，0表示从第一个素材 返回
   * @param count 返回素材的数量，取值在1到20之间
   * @group 永久素材
   */
  async getMaterials(
    type: 'image' | 'video' | 'voice',
    offset: number = 0,
    count: number = 20
  ) {
    const result = await this.request({
      method: 'post',
      url: 'material/batchget_material',
      data: {
        type: type,
        offset: offset,
        count: count
      }
    })
    return result as {
      total_count: number
      item_count: number
      item: {
        media_id: string
        name: string
        update_time: number
        url: string
      }[]
    }
  }

  /**
   * 获取图文永久素材列表
   * @param offset 从全部素材的该偏移位置开始返回，0表示从第一个素材 返回
   * @param count 返回素材的数量，取值在1到20之间
   * @group 永久素材
   */
  async getNewsMaterials(offset: number = 0, count: number = 20) {
    const result = await this.request({
      method: 'post',
      url: 'material/batchget_material',
      data: {
        type: 'news',
        offset: offset,
        count: count
      }
    })
    return result as {
      total_count: number
      item_count: number
      item: {
        media_id: string
        content: {
          news_item: [
            {
              title: string
              thumb_media_id: string
              show_cover_pic: 0 | 1
              author?: string
              digest?: string
              content: string
              url: string
              content_source_url: string
            }
          ]
        }
        update_time: number
      }[]
    }
  }
}
