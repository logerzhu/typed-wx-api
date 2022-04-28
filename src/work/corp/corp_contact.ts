import { CorpBase } from './corp_base'

export type FollowUser = {
  userid: string //添加了此外部联系人的企业成员userid
  remark?: string //该成员对此外部联系人的备注
  description?: string // 该成员对此外部联系人的描述
  createtime: number //该成员添加此外部联系人的时间
  tags?: {
    group_name?: string // 该成员添加此外部联系人所打标签的分组名称（标签功能需要企业微信升级到2.7.5及以上版本）
    tag_name: string //该成员添加此外部联系人所打标签名称
    type: 1 | 2 | 3 // 该成员添加此外部联系人所打标签类型, 1-企业设置，2-用户自定义，3-规则组标签（仅系统应用返回）
    tag_id?: string //该成员添加此外部联系人所打企业标签的id，用户自定义类型标签（type=2）不返回
  }[]
  remark_corp_name?: string //该成员对此微信客户备注的企业名称（仅微信客户有该字段）
  remark_mobiles?: string //该成员对此客户备注的手机号码，代开发自建应用需要管理员授权才可以获取，第三方不可获取，上游企业不可获取下游企业客户该字段
  /*
  0	未知来源
  1	扫描二维码
  2	搜索手机号
  3	名片分享
  4	群聊
  5	手机通讯录
  6	微信联系人
  8	安装第三方应用时自动添加的客服人员
  9	搜索邮箱
  10	视频号添加
  201	内部成员共享
  202	管理员/负责人分配
  */
  add_way: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 201 | 202 //该成员添加此客户的来源，具体含义详见来源定义
  //该成员添加此客户的来源add_way为10时，对应的视频号信息
  wechat_channels?: {
    nickname: string
    //视频号添加场景，0-未知 1-视频号主页 2-视频号直播间（微信版本要求：iOS ≥ 8.0.20，Android ≥ 8.0.21，且添加时间不早于2022年4月21日。否则添加场景值为0）
    source?: 0 | 1 | 2
  }
  oper_userid?: string //发起添加的userid，如果成员主动添加，为成员的userid；如果是客户主动添加，则为客户的外部联系人userid；如果是内部成员共享/管理员分配，则为对应的成员/管理员userid
  state?: string //企业自定义的state参数，用于区分客户具体是通过哪个「联系我」添加，由企业通过创建「联系我」方式指定
}
export type ExternalContactUser = {
  external_userid: string //外部联系人的userid
  name: string // 外部联系人的名称
  avatar: string //外部联系人头像，代开发自建应用需要管理员授权才可以获取，第三方不可获取，上游企业不可获取下游企业客户该字段
  type: 1 | 2 // 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
  gender: 0 | 1 | 2 //外部联系人性别 0-未知 1-男性 2-女性。第三方不可获取，上游企业不可获取下游企业客户该字段，返回值为0，表示未定义
  unionid?: string //外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当联系人类型是微信用户，且企业绑定了微信开发者ID有此字段。查看绑定方法。第三方不可获取，上游企业不可获取下游企业客户的unionid字段
  position?: string //外部联系人的职位，如果外部企业或用户选择隐藏职位，则不返回，仅当联系人类型是企业微信用户时有此字段
  corp_name?: string //外部联系人所在企业的简称，仅当联系人类型是企业微信用户时有此字段
  corp_full_name?: string //外部联系人所在企业的主体名称，仅当联系人类型是企业微信用户时有此字段
  external_profile?: any //外部联系人的自定义展示信息，可以有多个字段和多种类型，包括文本，网页和小程序，仅当联系人类型是企业微信用户时有此字段，字段详情见对外属性；
}

export abstract class CorpContact extends CorpBase {
  /**
   * 获取配置了客户联系功能的成员列表
   * */
  async getFollowUserList() {
    const result = await this.request({
      method: 'get',
      url: 'externalcontact/get_follow_user_list'
    })
    return result.follow_user as string[]
  }

  /**
   * 获取客户列表
   */
  async getExternalContactList(userid: string) {
    const result = await this.request({
      url: 'externalcontact/list',
      params: {
        userid: userid
      }
    })
    return result.external_userid as string[]
  }

  /**
   * 获取客户详情
   */
  async getExternalContact(externalUserid: string) {
    const result = await this.request({
      url: 'externalcontact/get',
      params: {
        external_userid: externalUserid
      }
    })
    delete result.errcode
    delete result.errmsg
    const contact = result as {
      external_contact: ExternalContactUser
    } & {
      follow_user: FollowUser[]
    }
    let cursor = result.next_cursor
    while (cursor) {
      const res = await this.request({
        url: 'externalcontact/get',
        params: {
          external_userid: externalUserid,
          cursor: cursor
        }
      })
      contact.follow_user?.push(...res.follow_user)
      cursor = res.next_cursor
    }
    return contact
  }

  /**
   * 批量获取客户详情
   */
  async batchGetExternalContact(userids: string[]) {
    const data: {
      external_contact: ExternalContactUser
      follow_info: Omit<FollowUser, 'tags'> & { tag_id?: string[] }
    }[] = []

    let cursor = undefined
    do {
      const res: any = await this.request({
        method: 'post',
        url: 'externalcontact/batch/get_by_user',
        data: {
          userid_list: userids
        }
      })
      data.push(...res.external_contact_list)
      cursor = res.next_cursor
    } while (cursor)
    return data
  }

  /**
   * 修改客户备注信息
   */
  async remarkExternalContact(data: {
    userid: string //企业成员的userid
    external_userid: string //外部联系人userid
    remark?: string //此用户对外部联系人的备注，最多20个字符
    description?: string //此用户对外部联系人的描述，最多150个字符
    remark_company?: string // 此用户对外部联系人备注的所属公司名称，最多20个字符
    remark_mobiles?: string[] //此用户对外部联系人备注的手机号
    remark_pic_mediaid?: string //备注图片的mediaid
  }) {
    await this.request({
      method: 'post',
      url: 'externalcontact/remark',
      data: data
    })
    return {}
  }
}

//定义回调消息类型格式
declare module '../crypto/crypto_corp' {
  export interface CorpEvents {
    /**
     * 添加企业客户事件
     * https://developer.work.weixin.qq.com/document/path/92130
     */
    event_change_external_contact_add_external_contact: {
      ToUserName: string
      FromUserName: 'sys'
      CreateTime: string
      MsgType: 'event'
      Event: 'change_external_contact'
      ChangeType: 'add_external_contact'
      UserID: string
      ExternalUserID: string
      State?: string
      WelcomeCode?: string
    }
    /**
     * 编辑企业客户事件
     * https://developer.work.weixin.qq.com/document/path/92130
     */
    event_change_external_contact_edit_external_contact: {
      ToUserName: string
      FromUserName: 'sys'
      CreateTime: string
      MsgType: 'event'
      Event: 'change_external_contact'
      ChangeType: 'edit_external_contact'
      UserID: string
      ExternalUserID: string
    }
    /**
     * 外部联系人免验证添加成员事件
     * https://developer.work.weixin.qq.com/document/path/92130
     */
    event_change_external_contact_add_half_external_contact: {
      ToUserName: string
      FromUserName: 'sys'
      CreateTime: string
      MsgType: 'event'
      Event: 'change_external_contact'
      ChangeType: 'add_half_external_contact'
      UserID: string
      ExternalUserID: string
      State?: string
      WelcomeCode?: string
    }
    /**
     * 删除企业客户事件
     * https://developer.work.weixin.qq.com/document/path/92130
     */
    event_change_external_contact_del_external_contact: {
      ToUserName: string
      FromUserName: 'sys'
      CreateTime: string
      MsgType: 'event'
      Event: 'change_external_contact'
      ChangeType: 'del_external_contact'
      UserID: string
      ExternalUserID: string
      Source: 'DELETE_BY_TRANSFER' | string
    }
  }
}
