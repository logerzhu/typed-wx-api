import { BaseCorpAPI } from '../BaseCorpAPI'

export type MsgSendResult = {
  userid: string
  status: 0 | 1 | 2 | 3 //发送状态：0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-因客户已经收到其他群发消息导致发送失败
  send_time: number
} & ({ external_userid: string } | { chat_id: string })

export type MsgSendTask = {
  userid: string //企业服务人员的userid
  status: 0 | 2 //发送状态：0-未发送 2-已发送
  send_time?: number //发送时间，未发送时不返回
}

export type MsgAttachment =
  | {
      msgtype: 'image'
      image:
        | {
            media_id: string //图片的media_id，可以通过素材管理接口获得
          }
        | {
            pic_url: string //图片的链接，仅可使用上传图片接口得到的链接
          }
    }
  | {
      msgtype: 'link'
      link: {
        title: string //图文消息标题，最长128个字节
        picurl?: string //图文消息封面的url，最长2048个字节
        desc?: string //图文消息的描述，最多512个字节
        url: string //图文消息的链接，最长2048个字节
      }
    }
  | {
      msgtype: 'miniprogram'
      miniprogram: {
        title: string //小程序消息标题，最多64个字节
        pic_media_id: string //小程序消息封面的mediaid，封面图建议尺寸为520*416
        appid: string //小程序appid（可以在微信公众平台上查询），必须是关联到企业的小程序应用
        page: string //小程序page路径
      }
    }
  | {
      msgtype: 'video'
      video: {
        media_id: string //视频的media_id，可以通过素材管理接口获得
      }
    }
  | {
      msgtype: 'file'
      file: {
        media_id: string //文件的media_id，可以通过素材管理接口获得
      }
    }

export type GroupMsg = {
  msgid: string
  creator?: string
  create_time: number
  create_type: 0 | 1 //群发消息创建来源。0：企业 1：个人
  text?: { content: string }
  attachments?: MsgAttachment[]
}

export abstract class CorpMsgTemplate extends BaseCorpAPI {
  //创建企业群发
  async addMsgTemplate(
    data: {
      text?: { content: string } //消息文本内容，最多4000个字节
      attachments?: MsgAttachment[]
    } & (
      | {
          chat_type?: 'single'
          external_userid: string[] //客户的外部联系人id列表，最多可传入1万个客户
          sender?: string //发送企业群发消息的成员userid
        }
      | {
          chat_type: 'group'
          sender: string
        }
    )
  ) {
    const result = await this.request({
      method: 'post',
      url: 'externalcontact/add_msg_template',
      data: data
    })
    return {
      msgid: result.msgid as string,
      fail_list: result.fail_list as string[]
    }
  }

  //群发任务记录的起止时间间隔不能超过1个月
  async getGroupMsgList(data: {
    chat_type: 'single' | 'group' //群发任务的类型，默认为single，表示发送给客户，group表示发送给客户群
    start_time: number //群发任务记录开始时间, 单位:秒
    end_time: number //群发任务记录结束时间, 单位:秒
    creator?: string //群发任务创建人企业账号id
    filter_type?: 0 | 1 | 2 //创建人类型。0：企业发表 1：个人发表 2：所有，包括个人创建以及企业创建，默认情况下为所有类型
  }) {
    const groupMsgList: GroupMsg[] = []
    let cursor = undefined
    do {
      const result: {
        group_msg_list: GroupMsg[]
        next_cursor?: string
      } = await this.request({
        method: 'post',
        url: 'externalcontact/get_groupmsg_list_v2',
        data: { ...data, cursor: cursor }
      })
      groupMsgList.push(...result.group_msg_list)
      cursor = result.next_cursor
    } while (cursor)
    return groupMsgList
  }

  async getGroupMsgTask(msgid: string) {
    const sendList: MsgSendTask[] = []
    let cursor = undefined
    do {
      const result: {
        task_list: MsgSendTask[]
        next_cursor?: string
      } = await this.request({
        method: 'post',
        url: 'externalcontact/get_groupmsg_task',
        data: { msgid: msgid, cursor: cursor }
      })
      sendList.push(...result.task_list)
      cursor = result.next_cursor
    } while (cursor)
    return sendList
  }

  async getGroupMsgResult(msgid: string) {
    const detailList: MsgSendResult[] = []
    let cursor = undefined
    do {
      const result: {
        detail_list: MsgSendResult[]
        next_cursor?: string
      } = await this.request({
        method: 'post',
        url: 'externalcontact/get_group_msg_result',
        data: { msgid: msgid, cursor: cursor }
      })
      detailList.push(...result.detail_list)
      cursor = result.next_cursor
    } while (cursor)
    return detailList
  }

  async getGroupMsgSendResult(msgid: string, userid: string) {
    const sendList: MsgSendResult[] = []
    let cursor = undefined
    do {
      const result: {
        send_list: MsgSendResult[]
        next_cursor?: string
      } = await this.request({
        method: 'post',
        url: 'externalcontact/get_groupmsg_send_result',
        data: { msgid: msgid, userid: userid, cursor: cursor }
      })
      sendList.push(...result.send_list)
      cursor = result.next_cursor
    } while (cursor)
    return sendList
  }
}
