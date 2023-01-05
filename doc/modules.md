[typed-wx-api](README.md) / Exports

# typed-wx-api

## Table of contents

### Classes

- [WxAPIError](classes/WxAPIError.md)
- [AccessToken](classes/AccessToken.md)
- [Ticket](classes/Ticket.md)
- [WeixinApi](classes/WeixinApi.md)
- [CorpApi](classes/CorpApi.md)
- [CorpCrypto](classes/CorpCrypto.md)

### Interfaces

- [TokenStorage](interfaces/TokenStorage.md)
- [TicketStorage](interfaces/TicketStorage.md)
- [CorpEvents](interfaces/CorpEvents.md)

### Type Aliases

- [APIConfig](modules.md#apiconfig)
- [Logger](modules.md#logger)
- [WxDraftNews](modules.md#wxdraftnews)
- [WxButtonItem](modules.md#wxbuttonitem)
- [Button](modules.md#button)
- [WxMenu](modules.md#wxmenu)
- [WxMpButtonItem](modules.md#wxmpbuttonitem)
- [WxReplyMessage](modules.md#wxreplymessage)
- [WxUser](modules.md#wxuser)
- [FollowUser](modules.md#followuser)
- [ExternalContactUser](modules.md#externalcontactuser)
- [TextMessage](modules.md#textmessage)
- [ImageMessage](modules.md#imagemessage)
- [VoiceMessage](modules.md#voicemessage)
- [VideoMessage](modules.md#videomessage)
- [FileMessage](modules.md#filemessage)
- [TextCardMessage](modules.md#textcardmessage)
- [NewsMessage](modules.md#newsmessage)
- [MpNewsMessage](modules.md#mpnewsmessage)
- [MarkdownMessage](modules.md#markdownmessage)
- [MiniprogramNoticeMessage](modules.md#miniprogramnoticemessage)
- [TemplateCardSource](modules.md#templatecardsource)
- [TemplateCardActionMenu](modules.md#templatecardactionmenu)
- [TemplateCardHorizontalContent](modules.md#templatecardhorizontalcontent)
- [TemplateCardJump](modules.md#templatecardjump)
- [TemplateCardAction](modules.md#templatecardaction)
- [TemplateCardMainTitle](modules.md#templatecardmaintitle)
- [TemplateCardArea](modules.md#templatecardarea)
- [TemplateCardQuoteArea](modules.md#templatecardquotearea)
- [TextNoticeTemplateCard](modules.md#textnoticetemplatecard)
- [NewsNoticeTemplateCard](modules.md#newsnoticetemplatecard)
- [ButtonInteraction](modules.md#buttoninteraction)
- [VoteInteraction](modules.md#voteinteraction)
- [TemplateCard](modules.md#templatecard)
- [TemplateCardMessage](modules.md#templatecardmessage)
- [AgentMessage](modules.md#agentmessage)
- [MsgSendResult](modules.md#msgsendresult)
- [MsgSendTask](modules.md#msgsendtask)
- [MsgAttachment](modules.md#msgattachment)
- [GroupMsg](modules.md#groupmsg)
- [UserData](modules.md#userdata)
- [WriteOnlyUserData](modules.md#writeonlyuserdata)
- [ReadOnlyUserData](modules.md#readonlyuserdata)
- [ArrayItems](modules.md#arrayitems)
- [CommaArray](modules.md#commaarray)

## Type Aliases

### APIConfig

Ƭ **APIConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `baseURL` | `string` |
| `accessTokenKey?` | `string` |

___

### Logger

Ƭ **Logger**: (`message`: `any`, ...`args`: `any`[]) => `void`

#### Type declaration

▸ (`message`, `...args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `...args` | `any`[] |

##### Returns

`void`

___

### WxDraftNews

Ƭ **WxDraftNews**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | - |
| `author?` | `string` | - |
| `digest?` | `string` | 图文消息的摘要，仅有单图文消息才有摘要，多图文此处为空。如果本字段为没有填写，则默认抓取正文前54个字。 |
| `content` | `string` | 图文消息的具体内容，支持HTML标签，必须少于2万字符，小于1M，且此处会去除JS,涉及图片url必须来源 上传图文消息内的图片获取URL接口获取。外部图片url将被过滤。 |
| `content_source_url?` | `string` | 图文消息的原文地址，即点击“阅读原文”后的URL |
| `thumb_media_id` | `string` | 图文消息的封面图片素材id（必须是永久mediaID） |
| `need_open_comment?` | ``0`` \| ``1`` | - |
| `only_fans_can_comment?` | ``0`` \| ``1`` | - |

___

### WxButtonItem

Ƭ **WxButtonItem**: { `name`: `string` ; `sub_button?`: []  } & { `type`: ``"click"`` ; `key`: `string`  } \| { `type`: ``"view"`` ; `url`: `string`  } \| { `type`: ``"scancode_push"`` ; `key`: `string`  } \| { `type`: ``"scancode_waitmsg"`` ; `key`: `string`  } \| { `type`: ``"pic_sysphoto"`` ; `key`: `string`  } \| { `type`: ``"pic_photo_or_album"`` ; `key`: `string`  } \| { `type`: ``"pic_weixin"`` ; `key`: `string`  } \| { `type`: ``"location_select"`` ; `key`: `string`  } \| { `type`: ``"media_id"`` ; `media_id`: `string`  } \| { `type`: ``"article_id"`` ; `article_id`: `string`  } \| { `type`: ``"article_view_limited"`` ; `article_id`: `string`  } \| { `type`: ``"miniprogram"`` ; `url`: `string` ; `appid`: `string` ; `pagepath`: `string`  }

___

### Button

Ƭ **Button**: [`WxButtonItem`](modules.md#wxbuttonitem) \| { `name`: `string` ; `type?`: `undefined` ; `sub_button`: [`WxButtonItem`](modules.md#wxbuttonitem)[]  }

自定义菜单最多包括3个一级菜单，每个一级菜单最多包含5个二级菜单

___

### WxMenu

Ƭ **WxMenu**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `button` | [`Button`](modules.md#button)[] |

___

### WxMpButtonItem

Ƭ **WxMpButtonItem**: { `name`: `string`  } & { `type`: ``"text"`` \| ``"img"`` \| ``"voice"`` \| ``"video"`` ; `value`: `string`  } \| { `type`: ``"view"`` ; `url`: `string`  } \| { `type`: ``"news"`` ; `value`: `string` ; `news_info`: { `list`: { `title`: `string` ; `author?`: `string` ; `digest?`: `string` ; `show_cover?`: ``0`` \| ``1`` ; `cover_url?`: `string` ; `content_url?`: `string` ; `source_url?`: `string`  }[]  }  }

在公众平台官网通过网站功能发布的菜单项

___

### WxReplyMessage

Ƭ **WxReplyMessage**: { `type`: ``"text"`` \| ``"img"`` \| ``"voice"`` \| ``"video"`` ; `content`: `string`  } \| { `type`: ``"news"`` ; `news_info`: { `content?`: `string` ; `list`: [{ `title`: `string` ; `author?`: `string` ; `digest?`: `string` ; `show_cover?`: ``0`` \| ``1`` ; `cover_url?`: `string` ; `content_url`: `string` ; `source_url?`: `string`  }]  }  }

2021年6月之后各场景的客服消息下发规则：
场景         下发额度   额度有效期
用户发送消息    20条      48小时
点击自定义菜单  3条       1分钟
关注公众号     3条       1分钟
扫描二维码     3条       1分钟
支付成功      20条       48小时

___

### WxUser

Ƭ **WxUser**: { `subscribe`: ``0`` ; `openid`: `string`  } \| { `subscribe`: ``1`` ; `openid`: `string` ; `language`: `string` ; `subscribe_time`: `number` ; `unionid?`: `string` ; `remark?`: `string` ; `groupid?`: `number` ; `tagid_list?`: `number`[] ; `subscribe_scene?`: `string` ; `qr_scene?`: `number` ; `qr_scene_str?`: `string`  }

___

### FollowUser

Ƭ **FollowUser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `userid` | `string` |
| `remark?` | `string` |
| `description?` | `string` |
| `createtime` | `number` |
| `tags?` | { `group_name?`: `string` ; `tag_name`: `string` ; `type`: ``1`` \| ``2`` \| ``3`` ; `tag_id?`: `string`  }[] |
| `remark_corp_name?` | `string` |
| `remark_mobiles?` | `string`[] |
| `add_way` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``201`` \| ``202`` |
| `wechat_channels?` | { `nickname`: `string` ; `source?`: ``0`` \| ``1`` \| ``2``  } |
| `wechat_channels.nickname` | `string` |
| `wechat_channels.source?` | ``0`` \| ``1`` \| ``2`` |
| `oper_userid?` | `string` |
| `state?` | `string` |

___

### ExternalContactUser

Ƭ **ExternalContactUser**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `external_userid` | `string` |
| `name` | `string` |
| `avatar` | `string` |
| `type` | ``1`` \| ``2`` |
| `gender` | ``0`` \| ``1`` \| ``2`` |
| `unionid?` | `string` |
| `position?` | `string` |
| `corp_name?` | `string` |
| `corp_full_name?` | `string` |
| `external_profile?` | `any` |

___

### TextMessage

Ƭ **TextMessage**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgtype` | ``"text"`` | - |
| `text` | { `content`: `string`  } | 消息内容，最长不超过2048个字节，超过将截断（支持id转译） 其中text参数的content字段可以支持换行、以及A标签，即可打开自定义的网页（可参考以上示例代码）(注意：换行符请用转义过的\n) |
| `text.content` | `string` | - |

___

### ImageMessage

Ƭ **ImageMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"image"`` |
| `image` | { `media_id`: `string`  } |
| `image.media_id` | `string` |

___

### VoiceMessage

Ƭ **VoiceMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"voice"`` |
| `voice` | { `media_id`: `string`  } |
| `voice.media_id` | `string` |

___

### VideoMessage

Ƭ **VideoMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"video"`` |
| `video` | { `media_id`: `string` ; `title?`: `string` ; `description`: `string`  } |
| `video.media_id` | `string` |
| `video.title?` | `string` |
| `video.description` | `string` |

___

### FileMessage

Ƭ **FileMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"file"`` |
| `file` | { `media_id`: `string`  } |
| `file.media_id` | `string` |

___

### TextCardMessage

Ƭ **TextCardMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"textcard"`` |
| `textcard` | { `title`: `string` ; `description`: `string` ; `url`: `string` ; `btntxt?`: `string`  } |
| `textcard.title` | `string` |
| `textcard.description` | `string` |
| `textcard.url` | `string` |
| `textcard.btntxt?` | `string` |

___

### NewsMessage

Ƭ **NewsMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"news"`` |
| `news` | { `articles`: { `title`: `string` ; `description?`: `string` ; `url?`: `string` ; `picurl?`: `string` ; `appid?`: `string` ; `pagepath?`: `string`  }[]  } |
| `news.articles` | { `title`: `string` ; `description?`: `string` ; `url?`: `string` ; `picurl?`: `string` ; `appid?`: `string` ; `pagepath?`: `string`  }[] |

___

### MpNewsMessage

Ƭ **MpNewsMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"mpnews"`` |
| `mpnews` | { `articles`: { `title`: `string` ; `thumb_media_id`: `string` ; `author?`: `string` ; `content_source_url?`: `string` ; `content`: `string` ; `digest?`: `string`  }[]  } |
| `mpnews.articles` | { `title`: `string` ; `thumb_media_id`: `string` ; `author?`: `string` ; `content_source_url?`: `string` ; `content`: `string` ; `digest?`: `string`  }[] |

___

### MarkdownMessage

Ƭ **MarkdownMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"markdown"`` |
| `markdown` | { `content`: `string`  } |
| `markdown.content` | `string` |

___

### MiniprogramNoticeMessage

Ƭ **MiniprogramNoticeMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"miniprogram_notice"`` |
| `miniprogram_notice` | { `appid`: `string` ; `page?`: `string` ; `title`: `string` ; `description?`: `string` ; `emphasis_first_item?`: `boolean` ; `content_item`: { `key`: `string` ; `value`: `string`  }[]  } |
| `miniprogram_notice.appid` | `string` |
| `miniprogram_notice.page?` | `string` |
| `miniprogram_notice.title` | `string` |
| `miniprogram_notice.description?` | `string` |
| `miniprogram_notice.emphasis_first_item?` | `boolean` |
| `miniprogram_notice.content_item` | { `key`: `string` ; `value`: `string`  }[] |

___

### TemplateCardSource

Ƭ **TemplateCardSource**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon_url` | `string` | 来源图片的url，来源图片的尺寸建议为72*72 |
| `desc?` | `string` | 来源图片的描述，建议不超过20个字，（支持id转译） |
| `desc_color?` | ``0`` \| ``1`` \| ``2`` \| ``3`` | 来源文字的颜色，目前支持：0(默认) 灰色，1 黑色，2 红色，3 绿色 |

___

### TemplateCardActionMenu

Ƭ **TemplateCardActionMenu**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `desc?` | `string` | 更多操作界面的描述 |
| `action_list` | { `text`: `string` ; `key`: `string`  }[] | 操作列表，列表长度取值范围为 [1, 3] |

___

### TemplateCardHorizontalContent

Ƭ **TemplateCardHorizontalContent**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | ``0`` \| ``1`` \| ``2`` \| ``3`` | 链接类型，0或不填代表不是链接，1 代表跳转url，2 代表下载附件，3 代表点击跳转成员详情 |
| `keyname?` | `string` | 二级标题，建议不超过5个字 |
| `value?` | `string` | 二级文本，如果horizontal_content_list.type是2，该字段代表文件名称（要包含文件类型），建议不超过30个字，（支持id转译） |
| `url?` | `string` | 链接跳转的url，horizontal_content_list.type是1时必填 |
| `media_id?` | `string` | 附件的media_id，horizontal_content_list.type是2时必填 |
| `userid?` | `string` | 成员详情的userid，horizontal_content_list.type是3时必填 |

___

### TemplateCardJump

Ƭ **TemplateCardJump**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``0`` \| ``1`` \| ``2`` | 跳转链接类型，0或不填代表不是链接，1 代表跳转url，2 代表跳转小程序 |
| `title` | `string` | 跳转链接样式的文案内容，建议不超过18个字 |
| `url?` | `string` | 跳转链接的url，jump_list.type是1时必填 |
| `appid?` | `string` | 跳转链接的小程序的appid，必须是与当前应用关联的小程序，jump_list.type是2时必填 |
| `pagepath?` | `string` | 跳转链接的小程序的pagepath，jump_list.type是2时选填 |

___

### TemplateCardAction

Ƭ **TemplateCardAction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``1`` \| ``2`` | 跳转事件类型，1 代表跳转url，2 代表打开小程序。text_notice卡片模版中该字段取值范围为[1,2] |
| `url?` | `string` | 跳转事件的url，card_action.type是1时必填 |
| `appid?` | `string` | 跳转事件的小程序的appid，必须是与当前应用关联的小程序，card_action.type是2时必填 |
| `pagepath?` | `string` | 跳转事件的小程序的pagepath，card_action.type是2时选填 |

___

### TemplateCardMainTitle

Ƭ **TemplateCardMainTitle**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | 一级标题，建议不超过36个字，文本通知型卡片本字段非必填，但不可本字段和sub_title_text都不填，（支持id转译） |
| `desc?` | `string` | 标题辅助信息，建议不超过44个字，（支持id转译） |

___

### TemplateCardArea

Ƭ **TemplateCardArea**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``0`` \| ``1`` \| ``2`` | 引用文献样式区域点击事件，0或不填代表没有点击事件，1 代表跳转url，2 代表跳转小程序 |
| `url?` | `string` | 点击跳转的url，quote_area.type是1时必填 |
| `appid?` | `string` | 点击跳转的小程序的appid，必须是与当前应用关联的小程序，quote_area.type是2时必填 |
| `pagepath?` | `string` | 点击跳转的小程序的pagepath，quote_area.type是2时选填 |

___

### TemplateCardQuoteArea

Ƭ **TemplateCardQuoteArea**: [`TemplateCardArea`](modules.md#templatecardarea) & { `title?`: `string` ; `quote_text?`: `string`  }

___

### TextNoticeTemplateCard

Ƭ **TextNoticeTemplateCard**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `card_type` | ``"text_notice"`` | - |
| `source?` | [`TemplateCardSource`](modules.md#templatecardsource) | 卡片来源样式信息 |
| `action_menu?` | [`TemplateCardActionMenu`](modules.md#templatecardactionmenu) | 卡片右上角更多操作按钮 |
| `task_id?` | `string` | 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节，填了action_menu字段的话本字段必填 |
| `main_title?` | [`TemplateCardMainTitle`](modules.md#templatecardmaintitle) | - |
| `quote_area?` | [`TemplateCardQuoteArea`](modules.md#templatecardquotearea) | 引用文献样式 |
| `emphasis_content?` | { `title`: `string` ; `desc?`: `string`  } | 关键数据样式 |
| `emphasis_content.title` | `string` | 关键数据样式的数据内容，建议不超过14个字 |
| `emphasis_content.desc?` | `string` | 关键数据样式的数据描述内容，建议不超过22个字 |
| `sub_title_text?` | `string` | 二级普通文本，建议不超过160个字，（支持id转译） |
| `horizontal_content_list?` | [`TemplateCardHorizontalContent`](modules.md#templatecardhorizontalcontent)[] | 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6 |
| `jump_list?` | [`TemplateCardJump`](modules.md#templatecardjump)[] | 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3 |
| `card_action` | [`TemplateCardAction`](modules.md#templatecardaction) | 整体卡片的点击跳转事件，text_notice必填本字段 |

___

### NewsNoticeTemplateCard

Ƭ **NewsNoticeTemplateCard**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `card_type` | ``"news_notice"`` | - |
| `source?` | [`TemplateCardSource`](modules.md#templatecardsource) | 卡片来源样式信息 |
| `action_menu?` | [`TemplateCardActionMenu`](modules.md#templatecardactionmenu) | 卡片右上角更多操作按钮 |
| `task_id?` | `string` | 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节，填了action_menu字段的话本字段必填 |
| `main_title?` | [`TemplateCardMainTitle`](modules.md#templatecardmaintitle) | - |
| `quote_area?` | [`TemplateCardQuoteArea`](modules.md#templatecardquotearea) | 引用文献样式 |
| `image_text_area?` | [`TemplateCardArea`](modules.md#templatecardarea) & { `title?`: `string` ; `desc?`: `string` ; `image_url`: `string`  } | 左图右文样式，news_notice类型的卡片，card_image和image_text_area两者必填一个字段，不可都不填 |
| `card_image?` | { `url`: `string` ; `aspect_ratio`: `number`  } | 图片样式，news_notice类型的卡片，card_image和image_text_area两者必填一个字段，不可都不填 |
| `card_image.url` | `string` | - |
| `card_image.aspect_ratio` | `number` | 图片的宽高比，宽高比要小于2.25，大于1.3，不填该参数默认1.3 |
| `vertical_content_list` | { `title`: `string` ; `desc?`: `string`  }[] | 卡片二级垂直内容，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过4 |
| `horizontal_content_list?` | [`TemplateCardHorizontalContent`](modules.md#templatecardhorizontalcontent)[] | 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6 |
| `jump_list?` | [`TemplateCardJump`](modules.md#templatecardjump)[] | 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3 |
| `card_action` | [`TemplateCardAction`](modules.md#templatecardaction) | 整体卡片的点击跳转事件，text_notice必填本字段 |

___

### ButtonInteraction

Ƭ **ButtonInteraction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `card_type` | ``"button_interaction"`` | - |
| `source?` | [`TemplateCardSource`](modules.md#templatecardsource) | 卡片来源样式信息 |
| `action_menu?` | [`TemplateCardActionMenu`](modules.md#templatecardactionmenu) | 卡片右上角更多操作按钮 |
| `task_id?` | `string` | 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节，填了action_menu字段的话本字段必填 |
| `main_title?` | [`TemplateCardMainTitle`](modules.md#templatecardmaintitle) | - |
| `quote_area?` | [`TemplateCardQuoteArea`](modules.md#templatecardquotearea) | 引用文献样式 |
| `sub_title_text?` | `string` | 二级普通文本，建议不超过160个字，（支持id转译） |
| `button_selection` | { `question_key`: `string` ; `title?`: `string` ; `option_list`: { `id`: `string` ; `text`: `string`  }[] ; `selected_id?`: `string`  } | - |
| `button_selection.question_key` | `string` | 下拉式的选择器的key，用户提交选项后，会产生回调事件，回调事件会带上该key值表示该题，最长支持1024字节 |
| `button_selection.title?` | `string` | 下拉式的选择器左边的标题 |
| `button_selection.option_list` | { `id`: `string` ; `text`: `string`  }[] | 选项列表，下拉选项不超过 10 个，最少1个 |
| `button_selection.selected_id?` | `string` | 默认选定的id，不填或错填默认第一个 |
| `button_list` | { `type?`: ``0`` \| ``1`` ; `text`: `string` ; `style?`: ``1`` \| ``2`` \| ``3`` \| ``4`` ; `key?`: `string` ; `url?`: `string`  }[] | 按钮列表，列表长度不超过6 |
| `horizontal_content_list?` | [`TemplateCardHorizontalContent`](modules.md#templatecardhorizontalcontent)[] | 二级标题+文本列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过6 |
| `jump_list?` | [`TemplateCardJump`](modules.md#templatecardjump)[] | 跳转指引样式的列表，该字段可为空数组，但有数据的话需确认对应字段是否必填，列表长度不超过3 |
| `card_action` | [`TemplateCardAction`](modules.md#templatecardaction) | 整体卡片的点击跳转事件，text_notice必填本字段 |

___

### VoteInteraction

Ƭ **VoteInteraction**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `card_type` | ``"vote_interaction"`` | - |
| `source?` | [`TemplateCardSource`](modules.md#templatecardsource) | 卡片来源样式信息 |
| `task_id` | `string` | 任务id，同一个应用任务id不能重复，只能由数字、字母和“_-@”组成，最长128字节 |
| `main_title?` | [`TemplateCardMainTitle`](modules.md#templatecardmaintitle) | - |
| `checkbox` | { `question_key`: `string` ; `option_list`: { `id`: `string` ; `text`: `string` ; `is_checked`: `boolean`  }[] ; `mode?`: ``0`` \| ``1``  } | - |
| `checkbox.question_key` | `string` | 选择题key值，用户提交选项后，会产生回调事件，回调事件会带上该key值表示该题，最长支持1024字节 |
| `checkbox.option_list` | { `id`: `string` ; `text`: `string` ; `is_checked`: `boolean`  }[] | 选项list，选项个数不超过 20 个，最少1个 |
| `checkbox.mode?` | ``0`` \| ``1`` | 选择题模式，单选：0，多选：1，不填默认0 |
| `submit_button?` | { `text`: `string` ; `key`: `string`  } | 提交按钮样式 |
| `submit_button.text` | `string` | 按钮文案，建议不超过10个字，不填默认为提交 |
| `submit_button.key` | `string` | 提交按钮的key，会产生回调事件将本参数作为EventKey返回，最长支持1024字节 |

___

### TemplateCard

Ƭ **TemplateCard**: [`TextNoticeTemplateCard`](modules.md#textnoticetemplatecard) \| [`NewsNoticeTemplateCard`](modules.md#newsnoticetemplatecard) \| [`ButtonInteraction`](modules.md#buttoninteraction) \| [`VoteInteraction`](modules.md#voteinteraction)

___

### TemplateCardMessage

Ƭ **TemplateCardMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgtype` | ``"template_card"`` |
| `template_card` | [`TemplateCard`](modules.md#templatecard) |

___

### AgentMessage

Ƭ **AgentMessage**: [`TextMessage`](modules.md#textmessage) \| [`ImageMessage`](modules.md#imagemessage) \| [`VoiceMessage`](modules.md#voicemessage) \| [`VideoMessage`](modules.md#videomessage) \| [`FileMessage`](modules.md#filemessage) \| [`TextCardMessage`](modules.md#textcardmessage) \| [`NewsMessage`](modules.md#newsmessage) \| [`MpNewsMessage`](modules.md#mpnewsmessage) \| [`MarkdownMessage`](modules.md#markdownmessage) \| [`MiniprogramNoticeMessage`](modules.md#miniprogramnoticemessage) \| [`TemplateCardMessage`](modules.md#templatecardmessage)

___

### MsgSendResult

Ƭ **MsgSendResult**: { `userid`: `string` ; `status`: ``0`` \| ``1`` \| ``2`` \| ``3`` ; `send_time`: `number`  } & { `external_userid`: `string` ; `chat_id`: `undefined`  } \| { `external_userid`: `undefined` ; `chat_id`: `string`  }

___

### MsgSendTask

Ƭ **MsgSendTask**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `userid` | `string` |
| `status` | ``0`` \| ``2`` |
| `send_time?` | `number` |

___

### MsgAttachment

Ƭ **MsgAttachment**: { `msgtype`: ``"image"`` ; `image`: { `media_id`: `string`  } \| { `pic_url`: `string`  }  } \| { `msgtype`: ``"link"`` ; `link`: { `title`: `string` ; `picurl?`: `string` ; `desc?`: `string` ; `url`: `string`  }  } \| { `msgtype`: ``"miniprogram"`` ; `miniprogram`: { `title`: `string` ; `pic_media_id`: `string` ; `appid`: `string` ; `page`: `string`  }  } \| { `msgtype`: ``"video"`` ; `video`: { `media_id`: `string`  }  } \| { `msgtype`: ``"file"`` ; `file`: { `media_id`: `string`  }  }

___

### GroupMsg

Ƭ **GroupMsg**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msgid` | `string` |
| `creator?` | `string` |
| `create_time` | `number` |
| `create_type` | ``0`` \| ``1`` |
| `text?` | { `content`: `string`  } |
| `text.content` | `string` |
| `attachments?` | [`MsgAttachment`](modules.md#msgattachment)[] |

___

### UserData

Ƭ **UserData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `userid` | `string` |
| `name` | `string` |
| `alias?` | `string` |
| `mobile?` | `string` |
| `department` | `string`[] |
| `order?` | `number`[] |
| `position?` | `string` |
| `gender?` | ``1`` \| ``2`` |
| `email?` | `string` |
| `biz_mail?` | `string` |
| `telephone?` | `string` |
| `is_leader_in_dept?` | ``1`` \| ``0`` |
| `direct_leader?` | `string`[] |
| `extattr?` | { `attrs`: { `type`: ``0`` \| ``1`` \| ``2`` ; `name`: `string` ; `text?`: { `value`: `string`  } ; `web?`: { `url`: `string` ; `title`: `string`  }  }[]  } |
| `extattr.attrs` | { `type`: ``0`` \| ``1`` \| ``2`` ; `name`: `string` ; `text?`: { `value`: `string`  } ; `web?`: { `url`: `string` ; `title`: `string`  }  }[] |
| `external_profile?` | `any` |
| `external_position?` | `string` |
| `address?` | `string` |
| `main_department?` | `string` |

___

### WriteOnlyUserData

Ƭ **WriteOnlyUserData**: [`UserData`](modules.md#userdata) & { `avatar_mediaid?`: `string` ; `enable?`: ``1`` \| ``0`` ; `to_invite?`: `boolean` ; `nickname?`: `string`  }

___

### ReadOnlyUserData

Ƭ **ReadOnlyUserData**: [`UserData`](modules.md#userdata) & { `avatar?`: `string` ; `thumb_avatar?`: `string` ; `status?`: ``1`` \| ``2`` \| ``4`` \| ``5`` ; `qr_code?`: `string` ; `open_userid?`: `string`  }

___

### ArrayItems

Ƭ **ArrayItems**<`T`\>: `T` \| `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

___

### CommaArray

Ƭ **CommaArray**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `split` | (`s`: ``","``) => `T`[] |
