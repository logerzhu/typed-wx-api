import { BaseCorpAPI } from './BaseCorpAPI'

/**
 * 回话存档相关接口
 */
export abstract class CorpMsgAudit extends BaseCorpAPI {
  /**
   *
   */
  async getRoom(roomID: string) {
    const result = await this.request({
      url: 'msgaudit/groupchat/get',
      data: {
        roomid: roomID
      },
      method: 'post'
    })
    delete result.errcode
    delete result.errmsg
    return result as {
      roomname: string //群名称
      creator?: string //	群创建者，userid
      room_create_time: number // 群创建时间
      notice?: string //群公告
      members: {
        memberid: string //群成员的id，userid
        jointime: number //群成员的入群时间
      }[]
    }
  }
}
