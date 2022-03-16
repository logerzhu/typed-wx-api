import { BaseAPI } from './BaseAPI'
import FormData from 'form-data'

export abstract class APIMedia extends BaseAPI {
  /**
   * 上传临时素材
   */
  async uploadMedia(
    buffer: Buffer,
    type: 'image' | 'voice' | 'video' | 'file',
    filename: string
  ) {
    const form = new FormData()
    form.append('media', buffer, filename)
    const result = await this.request({
      method: 'post',
      headers: { ...form.getHeaders(), Accept: 'application/json' },
      data: form,
      url: 'media/upload',
      params: { type }
    })
    return {
      type: result.type as 'image' | 'voice' | 'video' | 'file',
      mediaId: result.media_id as string,
      createdAt: new Date(parseInt(result.created_at) * 1000)
    }
  }

  /**
   * 上传图片
   */
  async uploadImage(buffer: Buffer, filename: string) {
    const form = new FormData()
    form.append('fieldNameHere', buffer, filename)
    const result = await this.request({
      method: 'post',
      headers: { ...form.getHeaders(), Accept: 'application/json' },
      data: form,
      url: 'media/uploadimg'
    })
    return {
      url: result.url as string
    }
  }

  /**
   * 获取高清语音素材
   */
  async getMediaHD(mediaId: string) {
    const result = await this.request({
      url: 'media/get/jssdk',
      params: { media_id: mediaId },
      responseType: 'arraybuffer'
    })
    return result as Buffer
  }

  /**
   * 获取临时素材
   */
  async getMedia(mediaId: string) {
    const result = await this.request({
      url: 'media/get',
      params: { media_id: mediaId },
      responseType: 'arraybuffer'
    })
    return result as Buffer
  }
}
