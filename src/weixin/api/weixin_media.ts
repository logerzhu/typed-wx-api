import { WeixinBase } from './weixin_base'
import FormData from 'form-data'

export abstract class WeixinMedia extends WeixinBase {
  /**
   * 新增临时素材，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb）
   *
   * 1、临时素材media_id是可复用的。
   * 2、媒体文件在微信后台保存时间为3天，即3天后media_id失效。
   * 3、上传临时素材的格式、大小限制与公众平台官网一致。
   * 图片（image）: 10M，支持PNG\JPEG\JPG\GIF格式
   * 语音（voice）：2M，播放长度不超过60s，支持AMR\MP3格式
   * 视频（video）：10MB，支持MP4格式
   * 缩略图（thumb）：64KB，支持JPG格式
   */
  async uploadMedia(
    buffer: Buffer,
    type: 'image' | 'voice' | 'video' | 'thumb',
    filename: string
  ) {
    const form = new FormData()
    form.append('media', buffer, filename)
    const result = await this.request({
      method: 'post',
      headers: { ...form.getHeaders(), Accept: 'application/json' },
      data: form.getBuffer(),
      url: 'media/upload',
      params: { type }
    })
    return {
      type: result.type as 'image' | 'voice' | 'video' | 'thumb',
      media_id: result.media_id as string,
      created_at: result.created_at as number
    }
  }

  /**
   * 获取临时素材
   * 如果要获取视频素材, 请使用 getVideoMedia
   * @param media_id
   */
  async getMedia(media_id: string) {
    const result = await this.request({
      url: 'media/get',
      params: { media_id: media_id },
      responseType: 'arraybuffer'
    })
    return result as Buffer
  }

  /**
   * 获取临时视频素材
   * @param media_id
   */
  async getVideoMedia(media_id: string) {
    const result = await this.request({
      url: 'media/get',
      params: { media_id: media_id },
      responseType: 'json'
    })
    return result as {
      video_url: string
    }
  }

  /**
   * 获取高清语音素材
   */
  async getMediaHD(media_id: string) {
    const result = await this.request({
      url: 'media/get/jssdk',
      params: { media_id: media_id },
      responseType: 'arraybuffer'
    })
    return result as Buffer
  }

  /**
   * 上传图文消息内的图片获取URL
   */
  async uploadImage(buffer: Buffer, filename: string) {
    const form = new FormData()
    form.append('media', buffer, filename)
    const result = await this.request({
      method: 'post',
      headers: { ...form.getHeaders(), Accept: 'application/json' },
      data: form.getBuffer(),
      url: 'media/uploadimg'
    })
    return {
      url: result.url as string
    }
  }
}
