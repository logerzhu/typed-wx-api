import { CorpBase } from './corp_base'

export type TextMessage = {
  msgtype: 'text'
  /** 消息内容，最长不超过2048个字节，超过将截断（支持id转译）
   *  其中text参数的content字段可以支持换行、以及A标签，即可打开自定义的网页（可参考以上示例代码）(注意：换行符请用转义过的\n)*/
  text: { content: string }
}

export type ImageMessage = {
  msgtype: 'image'
  image: {
    /** 图片媒体文件id，可以调用上传临时素材接口获取 */
    media_id: string
  }
}

export type VoiceMessage = {
  msgtype: 'voice'
  voice: {
    /** 语音文件id，可以调用上传临时素材接口获取 */
    media_id: string
  }
}

export type VideoMessage = {
  msgtype: 'video'
  video: {
    media_id: string
    /** 视频消息的标题，不超过128个字节，超过会自动截断 */
    title?: string
    /** 视频消息的描述，不超过512个字节，超过会自动截断 */
    description: string
  }
}

export type FileMessage = {
  msgtype: 'file'
  file: {
    media_id: string
  }
}

export type TextCardMessage = {
  msgtype: 'textcard'
  textcard: {
    /** 标题，不超过128个字节，超过会自动截断（支持id转译） */
    title: string
    /** 描述，不超过512个字节，超过会自动截断（支持id转译）*/
    description: string
    /** 点击后跳转的链接。最长2048字节，请确保包含了协议头(http/https)*/
    url: string
    /** 按钮文字。 默认为“详情”， 不超过4个文字，超过自动截断。*/
    btntxt?: string
  }
}

export type NewsMessage = {
  msgtype: 'news'
  news: {
    /** 图文消息，一个图文消息支持1到8条图文 */
    articles: {
      /** 标题，不超过128个字节，超过会自动截断（支持id转译）*/
      title: string
      /** 描述，不超过512个字节，超过会自动截断（支持id转译） */
      description?: string
      /** 点击后跳转的链接。 最长2048字节，请确保包含了协议头(http/https)，小程序或者url必须填写一个*/
      url?: string
      /** 图文消息的图片链接，最长2048字节，支持JPG、PNG格式，较好的效果为大图 1068*455，小图150*150。*/
      picurl?: string
      /** 小程序appid，必须是与当前应用关联的小程序，appid和pagepath必须同时填写，填写后会忽略url字段 */
      appid?: string
      /** 点击消息卡片后的小程序页面，最长128字节，仅限本小程序内的页面。appid和pagepath必须同时填写，填写后会忽略url字段 */
      pagepath?: string
    }[]
  }
}

export type MpNewsMessage = {
  msgtype: 'mpnews'
  mpnews: {
    /**图文消息，一个图文消息支持1到8条图文*/
    articles: {
      /** 标题，不超过128个字节，超过会自动截断（支持id转译） */
      title: string
      /** 图文消息缩略图的media_id, 可以通过素材管理接口获得。此处thumb_media_id即上传接口返回的media_id */
      thumb_media_id: string
      /** 图文消息的作者，不超过64个字节 */
      author?: string
      /** 图文消息点击“阅读原文”之后的页面链接 */
      content_source_url?: string
      /** 图文消息的内容，支持html标签，不超过666 K个字节（支持id转译） */
      content: string
      /** 图文消息的描述，不超过512个字节，超过会自动截断（支持id转译）*/
      digest?: string
    }[]
  }
}

export type MarkdownMessage = {
  msgtype: 'markdown'
  markdown: {
    content: string
  }
}

export type MiniprogramNoticeMessage = {
  msgtype: 'miniprogram_notice'
  miniprogram_notice: {
    /** 小程序appid，必须是与当前应用关联的小程序 */
    appid: string
    /** 点击消息卡片后的小程序页面，最长1024个字节，仅限本小程序内的页面。该字段不填则消息点击后不跳转。*/
    page?: string
    /** 消息标题，长度限制4-12个汉字（支持id转译） */
    title: string
    /** 消息描述，长度限制4-12个汉字（支持id转译） */
    description?: string
    /** 是否放大第一个content_item */
    emphasis_first_item?: boolean
    /** 消息内容键值对，最多允许10个item */
    content_item: {
      /** 长度10个汉字以内 */
      key: string
      /** 长度30个汉字以内（支持id转译）*/
      value: string
    }[]
  }
}

export type TemplateCardSource = {
  /** 来源图片的url，来源图片的尺寸建议为72*72*/
  icon_url: string
  /** 来源图片的描述，建议不超过20个字，（支持id转译）*/
  desc?: string
  /** 来源文字的颜色，目前支持：0(默认) 灰色，1 黑色，2 红色，3 绿色 */
  desc_color?: 0 | 1 | 2 | 3
}

export type TemplateCardActionMenu = {
  /** 更多操作界面的描述*/
  desc?: string
  /** 操作列表，列表长度取值范围为 [1, 3]*/
  action_list: {
    /** 操作的描述文案 */
    text: string
    /** 操作key值，用户点击后，会产生回调事件将本参数作为EventKey返回，回调事件会带上该key值，最长支持1024字节，不可重复 */
    key: string
  }[]
}

export type TemplateCardHorizontalContent = {
  /** 链接类型，0或不填代表不是链接，1 代表跳转url，2 代表下载附件，3 代表点击跳转成员详情*/
  type?: 0 | 1 | 2 | 3
  /** 二级标题，建议不超过5个字 */
  keyname?: string
  /** 二级文本，如果horizontal_content_list.type是2，该字段代表文件名称（要包含文件类型），建议不超过30个字，（支持id转译）*/
  value?: string
  /** 链接跳转的url，horizontal_content_list.type是1时必填 */
  url?: string
  /** 附件的media_id，horizontal_content_list.type是2时必填*/
  media_id?: string
  /** 成员详情的userid，horizontal_content_list.type是3时必填*/
  userid?: string
}

export type TemplateCardJump = {
  /** 跳转链接类型，0或不填代表不是链接，1 代表跳转url，2 代表跳转小程序*/
  type: 0 | 1 | 2
  /** 跳转链接样式的文案内容，建议不超过18个字*/
  title: string
  /** 跳转链接的url，jump_list.type是1时必填*/
  url?: string
  /** 跳转链接的小程序的appid，必须是与当前应用关联的小程序，jump_list.type是2时必填 */
  appid?: string
  /** 跳转链接的小程序的pagepath，jump_list.type是2时选填 */
  pagepath?: string
}

export type TemplateCardAction = {
  /** 跳转事件类型，1 代表跳转url，2 代表打开小程序。text_notice卡片模版中该字段取值范围为[1,2] */
  type: 1 | 2
  /** 跳转事件的url，card_action.type是1时必填*/
  url?: string
  /** 跳转事件的小程序的appid，必须是与当前应用关联的小程序，card_action.type是2时必填*/
  appid?: string
  /** 跳转事件的小程序的pagepath，card_action.type是2时选填*/
  pagepath?: string
}

export type TemplateCardMainTitle = {
  /** 一级标题，建议不超过36个字，文本通知型卡片本字段非必填，但不可本字段和sub_title_text都不填，（支持id转译）*/
  title: string
  /** 标题辅助信息，建议不超过44个字，（支持id转译）*/
  desc?: string
}

export type TemplateCardArea = {
  /** 引用文献样式区域点击事件，0或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序*/
  type: 0 | 1 | 2
  /** 点击跳转的url，quote_area.type是1时必填 */
  url?: string
  /** 点击跳转的小程序的appid，必须是与当前应用关联的小程序，quote_area.type是2时必填*/
  appid?: string
  /** 点击跳转的小程序的pagepath，quote_area.type是2时选填*/
  pagepath?: string
}

export type TemplateCardQuoteArea = TemplateCardArea & {
  /** 引用文献样式的标题 */
  title?: string
  /** 引用文献样式的引用文案 */
  quote_text?: string
}

export type TextNoticeTemplateCard = {
  card_type: 'text_notice'
  /** 卡片来源样式信息 */
  source?: TemplateCardSource
  /** 卡片右上角更多操作按钮*/
  action_menu?: TemplateCardActionMenu
  /** 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节，填了action_menu字段的话本字段必填*/
  task_id?: string
  main_title?: TemplateCardMainTitle
  /** 引用文献样式*/
  quote_area?: TemplateCardQuoteArea
  /** 关键数据样式*/
  emphasis_content?: {
    /** 关键数据样式的数据内容，建议不超过14个字*/
    title: string
    /** 关键数据样式的数据描述内容，建议不超过22个字*/
    desc?: string
  }
  /** 二级普通文本，建议不超过160个字，（支持id转译） */
  sub_title_text?: string
  /** 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6*/
  horizontal_content_list?: TemplateCardHorizontalContent[]
  /** 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3*/
  jump_list?: TemplateCardJump[]
  /** 整体卡片的点击跳转事件，text_notice必填本字段*/
  card_action: TemplateCardAction
}

export type NewsNoticeTemplateCard = {
  card_type: 'news_notice'
  /** 卡片来源样式信息 */
  source?: TemplateCardSource
  /** 卡片右上角更多操作按钮*/
  action_menu?: TemplateCardActionMenu
  /** 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节，填了action_menu字段的话本字段必填*/
  task_id?: string
  main_title?: TemplateCardMainTitle
  /** 引用文献样式*/
  quote_area?: TemplateCardQuoteArea

  /** 左图右文样式，news_notice类型的卡片，card_image和image_text_area两者必填一个字段，不可都不填*/
  image_text_area?: TemplateCardArea & {
    /** 左图右文样式的标题*/
    title?: string
    /** 左图右文样式的描述*/
    desc?: string
    /** 左图右文样式的图片url*/
    image_url: string
  }
  /** 图片样式，news_notice类型的卡片，card_image和image_text_area两者必填一个字段，不可都不填*/
  card_image?: {
    url: string
    /**  图片的宽高比，宽高比要小于2.25，大于1.3，不填该参数默认1.3*/
    aspect_ratio: number
  }
  /** 卡片二级垂直内容，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过4*/
  vertical_content_list: {
    /** 卡片二级标题，建议不超过38个字*/
    title: string
    /** 二级普通文本，建议不超过160个字*/
    desc?: string
  }[]
  /** 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6*/
  horizontal_content_list?: TemplateCardHorizontalContent[]
  /** 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3*/
  jump_list?: TemplateCardJump[]
  /** 整体卡片的点击跳转事件，text_notice必填本字段*/
  card_action: TemplateCardAction
}

export type ButtonInteraction = {
  card_type: 'button_interaction'
  /** 卡片来源样式信息 */
  source?: TemplateCardSource
  /** 卡片右上角更多操作按钮*/
  action_menu?: TemplateCardActionMenu
  /** 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节，填了action_menu字段的话本字段必填*/
  task_id?: string
  main_title?: TemplateCardMainTitle
  /** 引用文献样式*/
  quote_area?: TemplateCardQuoteArea
  /** 二级普通文本，建议不超过160个字，（支持id转译） */
  sub_title_text?: string

  button_selection: {
    /** 下拉式的选择器的key，用户提交选项后，会产生回调事件，回调事件会带上该key值表示该题，最长支持1024字节 */
    question_key: string
    /** 下拉式的选择器左边的标题*/
    title?: string
    /** 选项列表，下拉选项不超过 10 个，最少1个*/
    option_list: {
      /** 下拉式的选择器选项的id，用户提交后，会产生回调事件，回调事件会带上该id值表示该选项，最长支持128字节，不可重复*/
      id: string
      /** 下拉式的选择器选项的文案，建议不超过16个字*/
      text: string
    }[]
    /** 默认选定的id，不填或错填默认第一个*/
    selected_id?: string
  }
  /** 按钮列表，列表长度不超过6*/
  button_list: {
    /** 按钮点击事件类型，0 或不填代表回调点击事件，1 代表跳转url */
    type?: 0 | 1
    /** 按钮文案，建议不超过10个字*/
    text: string
    /** 按钮样式，目前可填1~4，不填或错填默认1 */
    style?: 1 | 2 | 3 | 4
    /** 按钮key值，用户点击后，会产生回调事件将本参数作为EventKey返回，回调事件会带上该key值，最长支持1024字节，不可重复，button_list.type是0时必填*/
    key?: string
    /** 跳转事件的url，button_list.type是1时必填*/
    url?: string
  }[]

  /** 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6*/
  horizontal_content_list?: TemplateCardHorizontalContent[]
  /** 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3*/
  jump_list?: TemplateCardJump[]
  /** 整体卡片的点击跳转事件，text_notice必填本字段*/
  card_action: TemplateCardAction
}

export type VoteInteraction = {
  card_type: 'vote_interaction'
  /** 卡片来源样式信息 */
  source?: TemplateCardSource
  /** 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节*/
  task_id: string
  main_title?: TemplateCardMainTitle

  checkbox: {
    /** 选择题key值，用户提交选项后，会产生回调事件，回调事件会带上该key值表示该题，最长支持1024字节 */
    question_key: string
    /** 选项list，选项个数不超过 20 个，最少1个*/
    option_list: {
      /** 选项id，用户提交选项后，会产生回调事件，回调事件会带上该id值表示该选项，最长支持128字节，不可重复*/
      id: string
      /** 选项文案描述，建议不超过17个字*/
      text: string
      /** 该选项是否要默认选中 */
      is_checked: boolean
    }[]
    /** 选择题模式，单选：0，多选：1，不填默认0*/
    mode?: 0 | 1
  }
  /** 提交按钮样式*/
  submit_button?: {
    /** 按钮文案，建议不超过10个字，不填默认为提交*/
    text: string
    /** 提交按钮的key，会产生回调事件将本参数作为EventKey返回，最长支持1024字节*/
    key: string
  }
}

export type TemplateCard =
  | TextNoticeTemplateCard
  | NewsNoticeTemplateCard
  | ButtonInteraction
  | VoteInteraction

export type TemplateCardMessage = {
  msgtype: 'template_card'
  template_card: TemplateCard
}

export type AgentMessage =
  | TextMessage
  | ImageMessage
  | VoiceMessage
  | VideoMessage
  | FileMessage
  | TextCardMessage
  | NewsMessage
  | MpNewsMessage
  | MarkdownMessage
  | MiniprogramNoticeMessage
  | TemplateCardMessage

export abstract class CorpMessage extends CorpBase {
  /**
   * 应用支持推送文本、图片、视频、文件、图文等类型。
   */
  async sendMessage(
    data: {
      /** 指定接收消息的成员，成员ID列表（多个接收者用‘|’分隔，最多支持1000个）。特殊情况：指定为"@all"，则向该企业应用的全部成员发送*/
      touser?: string
      /** 指定接收消息的部门，部门ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为"@all"时忽略本参数*/
      toparty?: string
      /** 指定接收消息的标签，标签ID列表，多个接收者用‘|’分隔，最多支持100个。当touser为"@all"时忽略本参数*/
      totag?: string
      /** 企业应用的id，整型。企业内部开发，可在应用的设置页面查看；第三方服务商，可通过接口 获取企业授权信息 获取该参数值 */
      agentid: string
      /** 表示是否是保密消息，0表示可对外分享，1表示不能分享且内容显示水印，默认为0 */
      safe?: 0 | 1
      /** 表示是否开启重复消息检查，0表示否，1表示是，默认0 */
      enable_duplicate_check?: 0 | 1
      /** 表示是否重复消息检查的时间间隔，默认1800s，最大不超过4小时     */
      duplicate_check_interval?: number
    } & AgentMessage
  ) {
    const result = await this.request({
      method: 'post',
      url: 'message/send',
      data: data
    })
    return result as {
      /** 消息id，用于撤回应用消息 */
      msgid: string
      /** 不合法的userid，不区分大小写，统一转为小写 */
      invaliduser?: string
      /** 不合法的partyid */
      invalidparty?: string
      /** 不合法的标签id*/
      invalidtag?: string
      /** 没有基础接口许可(包含已过期)的userid */
      unlicenseduser?: string
      /** 仅消息类型为“按钮交互型”，“投票选择型”和“多项选择型”的模板卡片消息返回，应用可使用response_code调用更新模版卡片消息接口，24小时内有效，且只能使用一次*/
      response_code?: string
    }
  }

  /**
   * 撤回应用消息
   *
   * 本接口可以撤回24小时内通过发送应用消息接口推送的消息，仅可撤回企业微信端的数据，微信插件端的数据不支持撤回。
   * @param msgid
   */
  async recallMessage(msgid: string) {
    const result = await this.request({
      method: 'post',
      url: 'message/recall',
      data: { msgid: msgid }
    })
    return result as {}
  }
}
