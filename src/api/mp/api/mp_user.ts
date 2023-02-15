import { WxMpBase } from './mp_base'

export type WxUser =
  | {
      subscribe: 0
      openid: string
    }
  | {
      subscribe: 1
      openid: string
      language: string
      subscribe_time: number
      unionid?: string
      remark?: string
      groupid?: number
      tagid_list?: number[]
      /**
       * 返回用户关注的渠道来源，ADD_SCENE_SEARCH 公众号搜索，ADD_SCENE_ACCOUNT_MIGRATION 公众号迁移，ADD_SCENE_PROFILE_CARD 名片分享，
       * ADD_SCENE_QR_CODE 扫描二维码，ADD_SCENE_PROFILE_LINK 图文页内名称点击，ADD_SCENE_PROFILE_ITEM 图文页右上角菜单，
       * ADD_SCENE_PAID 支付后关注，ADD_SCENE_WECHAT_ADVERTISEMENT 微信广告，ADD_SCENE_REPRINT 他人转载 ,
       * ADD_SCENE_LIVESTREAM 视频号直播，ADD_SCENE_CHANNELS 视频号 , ADD_SCENE_OTHERS 其他
       */
      subscribe_scene?: string
      qr_scene?: number
      qr_scene_str?: string
    }

/**
 * @internal
 */
export abstract class WxMpUser extends WxMpBase {
  /**
   * 获取用户基本信息。可以设置lang，其中zh_CN 简体，zh_TW 繁体，en 英语。默认为en
   * @group 用户
   */
  async getUser(openid: string, lang: 'zh_CN' | 'zh_TW' | 'en' = 'zh_CN') {
    const result = await this.request({
      url: 'user/info',
      params: {
        openid: openid,
        lang: lang
      }
    })
    return result as WxUser
  }

  /**
   * 批量获取用户基本信息
   * @group 用户
   */
  async batchGetUsers(
    openidList: string[],
    lang: 'zh_CN' | 'zh_TW' | 'en' = 'zh_CN'
  ) {
    const result = await this.request({
      method: 'post',
      url: 'user/info/batchget',
      data: {
        user_list: openidList.map((id) => {
          return { openid: id, lang: lang }
        })
      }
    })
    return result.user_info_list as WxUser[]
  }

  /**
   * 获取关注者列表
   * @group 用户
   */
  async getFollowers() {
    const openidList: string[] = []
    let next_openid = ''
    do {
      const result: {
        data?: { openid: string[] }
        next_openid: string
      } = await this.request({
        url: 'user/get',
        params: {
          next_openid: next_openid
        }
      })
      if (result.data?.openid) {
        openidList.push(...result.data.openid)
      }
      next_openid = result.next_openid
    } while (next_openid)
    return openidList
  }

  /**
   * 设置用户备注名
   * @param {String} openid 用户的openid
   * @param {String} remark 新的备注名，长度必须小于30字符
   * @group 用户
   */
  async updateRemark(openid: string, remark: string) {
    await this.request({
      method: 'post',
      url: 'user/info/updateremark',
      data: {
        openid: openid,
        remark: remark
      }
    })
    return {}
  }

  /**
   * 创建标签
   * @param {String} name 标签名
   * @group 用户
   */
  async createTag(name: string) {
    const result = await this.request({
      url: 'tags/create',
      method: 'post',
      data: {
        tag: {
          name: name
        }
      }
    })
    return result.tag.id as number
  }

  /**
   * 获取公众号已创建的标签
   * @group 用户
   */
  async getTags() {
    const result = await this.request({
      url: 'tags/get'
    })
    return result.tags as {
      id: number
      name: string
      count: number
    }[]
  }

  /**
   * 编辑标签
   * @group 用户
   */
  async updateTag(tagid: number, name: string) {
    await this.request({
      url: 'tags/update',
      method: 'post',
      data: {
        tag: {
          id: tagid,
          name: name
        }
      }
    })
    return {}
  }

  /**
   * 删除标签
   * @group 用户
   */
  async deleteTag(tagid: number) {
    await this.request({
      url: 'tags/delete',
      method: 'post',
      data: {
        tag: {
          id: tagid
        }
      }
    })
    return {}
  }

  /**
   * 获取标签下粉丝列表
   * @param {String} tagId 标签id
   * @group 用户
   */
  async getUsersFromTag(tagId: number) {
    const openidList: string[] = []
    let next_openid = ''
    do {
      const result: {
        count: number
        data?: { openid: string[] }
        next_openid: string
      } = await this.request({
        url: 'user/tag/get',
        method: 'post',
        data: {
          tagid: tagId,
          next_openid: next_openid
        }
      })
      if (result.data?.openid) {
        openidList.push(...result.data.openid)
      }
      next_openid = result.next_openid
    } while (next_openid)
    return openidList
  }

  /**
   * 批量为用户打标签
   * 1. 每次传入的openid列表个数不能超过50个
   * 2. 有粉丝身上的标签数最多20个
   * @group 用户
   */
  async batchTagging(opendidList: string[], tagid: number) {
    await this.request({
      method: 'post',
      url: 'tags/members/batchtagging',
      data: {
        openid_list: opendidList,
        tagid: tagid
      }
    })
    return {}
  }

  /**
   * 批量为用户取消标签
   * @group 用户
   */
  async batchUnTagging(opendidList: string[], tagid: number) {
    await this.request({
      method: 'post',
      url: 'tags/members/batchuntagging',
      data: {
        openid_list: opendidList,
        tagid: tagid
      }
    })
    return {}
  }

  /**
   * 获取用户身上的标签列表
   *
   */
  async getIdList(openid: string) {
    const result = await this.request({
      method: 'post',
      url: 'tags/getidlist',
      data: { openid: openid }
    })
    return result.tagid_list as number[]
  }
}
