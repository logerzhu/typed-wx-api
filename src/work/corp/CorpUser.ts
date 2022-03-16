import { BaseCorpAPI } from './BaseCorpAPI'

export type UserData = {
  userid: string //成员UserID。对应管理端的帐号，企业内必须唯一。长度为1~64个字节。只能由数字、字母和“_-@.”四种字符组成，且第一个字符必须是数字或字母。系统进行唯一性检查时会忽略大小写。
  name: string //成员名称。长度为1~64个utf8字符
  alias?: string //成员别名。长度1~64个utf8字符
  mobile?: string //手机号码。企业内必须唯一，mobile/email二者不能同时为空
  department: string[] //成员所属部门id列表，不超过100个
  order?: number[] //部门内的排序值，默认为0，成员次序以创建时间从小到大排列。个数必须和参数department的个数一致，数值越大排序越前面。有效的值范围是[0, 2^32)
  position?: string //职务信息。长度为0~128个字符
  gender?: 1 | 2 //性别。1表示男性，2表示女性
  email?: string //邮箱。长度6~64个字节，且为有效的email格式。企业内必须唯一，mobile/email二者不能同时为空
  biz_mail?: string //企业邮箱。仅对开通企业邮箱的企业有效。长度6~64个字节，且为有效的企业邮箱格式。企业内必须唯一。未填写则系统会为用户生成默认企业邮箱（可修改一次）
  telephone?: string //座机。32字节以内，由纯数字、“-”、“+”或“,”组成。
  is_leader_in_dept?: 1 | 0 //个数必须和参数department的个数一致，表示在所在的部门内是否为部门负责人。1表示为部门负责人，0表示非部门负责人。在审批(自建、第三方)等应用里可以用来标识上级审批人
  direct_leader?: string[] //直属上级UserID，设置范围为企业内成员，可以设置最多5个上级
  avatar_mediaid?: string //成员头像的mediaid，通过素材管理接口上传图片获得的mediaid
  extattr?: {
    //自定义字段。自定义字段需要先在WEB管理端添加，见扩展属性添加方法，否则忽略未知属性的赋值。
    attrs: {
      type: 0 | 1 | 2 //属性类型: 0-文本 1-网页 2-小程序
      name: string //属性名称： 需要先确保在管理端有创建该属性，否则会忽略
      text?: {
        // 文本类型的属性
        value: string //文本属性内容，长度限制64个UTF8字符
      }
      web?: {
        //网页类型的属性，url和title字段要么同时为空表示清除该属性，要么同时不为空
        url: string //网页的url,必须包含http或者https头
        title: string //网页的展示标题,长度限制12个UTF8字符
      }
    }[]
  }
  external_profile?: any //成员对外属性，字段详情见对外属性
  external_position?: string //对外职务，如果设置了该值，则以此作为对外展示的职务，否则以position来展示。长度12个汉字内
  address?: string //地址。长度最大128个字符
  main_department?: string //主部门
}
export type WriteOnlyUserData = UserData & {
  enable?: 1 | 0 //启用/禁用成员。1表示启用成员，0表示禁用成员
  to_invite?: boolean //是否邀请该成员使用企业微信（将通过微信服务通知或短信或邮件下发邀请，每天自动下发一次，最多持续3个工作日），默认值为true。
  nickname?: string //视频号名字（设置后，成员将对外展示该视频号）。须从企业绑定到企业微信的视频号中选择，可在“我的企业”页中查看绑定的视频号
}

export type ReadOnlyUserData = UserData & {
  thumb_avatar?: string //头像缩略图url。第三方仅通讯录应用可获取；对于非第三方创建的成员，第三方通讯录应用也不可获取；上游企业不可获取下游企业成员该字段
  status?: 1 | 2 | 4 | 5 //激活状态: 1=已激活，2=已禁用，4=未激活，5=退出企业。已激活代表已激活企业微信或已关注微信插件（原企业号）。未激活代表既未激活企业微信又未关注微信插件（原企业号）。
  qr_code?: string //员工个人二维码，扫描可添加为外部联系人(注意返回的是一个url，可在浏览器上打开该url以展示二维码)；第三方仅通讯录应用可获取；对于非第三方创建的成员，第三方通讯录应用也不可获取；上游企业不可获取下游企业成员该字段
  open_userid?: string // 全局唯一。对于同一个服务商，不同应用获取到企业内同一个成员的open_userid是相同的，最多64个字节。仅第三方应用可获取
}

export abstract class CorpUser extends BaseCorpAPI {
  async createUser(data: WriteOnlyUserData) {
    await this.request({
      method: 'post',
      url: 'user/create',
      data: data
    })
    return {}
  }

  async getUser(userID: string) {
    const result = await this.request({
      url: 'user/get',
      params: {
        userid: userID
      }
    })
    return result as ReadOnlyUserData
  }

  async updateUser(
    userID: string,
    data: Omit<Partial<WriteOnlyUserData>, 'userid'>
  ) {
    await this.request({
      method: 'post',
      url: 'user/update',
      data: Object.assign({ userid: userID }, data)
    })
    return {}
  }

  async deleteUser(userID: string) {
    await this.request({
      url: 'user/delete',
      params: {
        userid: userID
      }
    })
    return {}
  }

  async deleteUsers(userIDs: string[]) {
    await this.request({
      method: 'post',
      url: 'user/batchdelete',
      data: {
        useridlist: userIDs
      }
    })
    return {}
  }

  async getDepartmentSimpleList(
    departmentID: string,
    fetchChild?: 1 | 0 //是否递归获取子部门下面的成员：1-递归获取，0-只获取本部门
  ) {
    const result = await this.request({
      url: 'user/simplelist',
      params: {
        department_id: departmentID,
        fetch_child: fetchChild
      }
    })
    return (result.userlist as any[]).map((info) => {
      return {
        userid: info.userid, //成员UserID。对应管理端的帐号
        name: info.name, //成员名称，代开发自建应用需要管理员授权才返回；此字段从2019年12月30日起，对新创建第三方应用不再返回真实name，使用userid代替name，2020年6月30日起，对所有历史第三方应用不再返回真实name，使用userid代替name，后续第三方仅通讯录应用可获取，未返回名称的情况需要通过通讯录展示组件来展示名字
        department: info.department, //成员所属部门列表。列表项为部门ID，32位整型
        open_userid: info.open_userid //全局唯一。对于同一个服务商，不同应用获取到企业内同一个成员的open_userid是相同的，最多64个字节。仅第三方应用可获取
      }
    })
  }

  async getDepartmentUserList(
    departmentID: string,
    fetchChild?: 1 | 0 //是否递归获取子部门下面的成员：1-递归获取，0-只获取本部门)
  ) {
    const result = await this.request({
      url: 'user/list',
      params: {
        department_id: departmentID,
        fetch_child: fetchChild
      }
    })
    return result.userlist as ReadOnlyUserData[]
  }

  async convertToOpenID(userID: string) {
    const result = await this.request({
      method: 'post',
      url: 'user/convert_to_openid',
      data: {
        userid: userID
      }
    })
    return result.openid as string
  }

  async convertToUserID(openID: string) {
    const result = await this.request({
      method: 'post',
      url: 'user/convert_to_userid',
      data: {
        openid: openID
      }
    })
    return result.userid as string
  }

  async authSuccess(userID: string) {
    await this.request({
      url: 'user/authsucc',
      params: {
        userid: userID
      }
    })
    return {}
  }

  async getUserID(phoneNumber: string) {
    const result = await this.request({
      method: 'post',
      url: 'user/getuserid',
      data: {
        mobile: phoneNumber
      }
    })
    return result.userid as string
  }
}
