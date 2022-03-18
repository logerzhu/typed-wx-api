import { CorpBase } from './corp_base'

export abstract class CorpGroupChat extends CorpBase {
  /**
   * 获取客户群列表
   */
  async listGroupChat(args?: {
    /*客户群跟进状态过滤。
      0 - 所有列表(即不过滤)
      1 - 离职待继承
      2 - 离职继承中
      3 - 离职继承完成
      默认为0 */
    status_filter?: 0 | 1 | 2 | 3
    /*群主过滤。如果不填，表示获取应用可见范围内全部群主的数据（但是不建议这么用，如果可见范围人数超过1000人，为了防止数据包过大，会报错 81017）*/
    owner_filter?: {
      /*用户ID列表。最多100个*/
      userid_list: string[]
    }
    limit?: number //分页，预期请求的数据量，取值范围 1 ~ 1000
  }) {
    const data: {
      chat_id: string
      /*
      客户群跟进状态。
      0 - 跟进人正常
      1 - 跟进人离职
      2 - 离职继承中
      3 - 离职继承完成
      */
      status: 0 | 1 | 2 | 3
    }[] = []
    let cursor = undefined
    do {
      const result: any = await this.request({
        method: 'post',
        url: 'externalcontact/groupchat/list',
        data: { ...(args || {}), cursor: cursor, limit: args?.limit || 500 }
      })
      data.push(...result.group_chat_list)
      cursor = result.next_cursor
    } while (cursor && args?.limit == null)
    return data
  }

  /**
   * 获取客户群详情
   */
  async getGroupChat(args: {
    chat_id: string //客户群ID
    need_name?: 0 | 1 //是否需要返回群成员的名字group_chat.member_list.name。0-不返回；1-返回。默认不返回
  }) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/groupchat/get',
      data: args
    })
    return result.group_chat as {
      chat_id: string //客户群ID
      name?: string //群名
      owner?: string //群主ID
      create_time: number //群的创建时间
      notice?: string //群公告
      member_list: {
        userid: string //群成员id
        type: 1 | 2 //成员类型。1-企业成员, 2-外部联系人
        unionid?: string //外部联系人在微信开放平台的唯一身份标识（微信unionid），通过此字段企业可将外部联系人与公众号/小程序用户关联起来。仅当群成员类型是微信用户（包括企业成员未添加好友），且企业绑定了微信开发者ID有此字段（查看绑定方法）。第三方不可获取，上游企业不可获取下游企业客户的unionid字段
        join_time: number //入群时间
        /*入群方式。
          1 - 由群成员邀请入群（直接邀请入群）
          2 - 由群成员邀请入群（通过邀请链接入群）
          3 - 通过扫描群二维码入群
          */
        join_scene: 1 | 2 | 3
        invitor?: {
          //邀请者。目前仅当是由本企业内部成员邀请入群时会返回该值
          userid: string // 邀请者的userid
        }
        group_nickname?: string //在群里的昵称
        /*名字。仅当 need_name = 1 时返回
          如果是微信用户，则返回其在微信中设置的名字
          如果是企业微信联系人，则返回其设置对外展示的别名或实名
          */
        name?: string
      }[]
      admin_list?: {
        //群管理员列表
        userid: string //群管理员userid
      }[]
    }
  }

  /**
   * 客户群opengid转换
   */
  async opengidToChatid(opengid: string) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/opengid_to_chatid',
      data: { opengid: opengid }
    })
    return result.chat_id
  }
}
