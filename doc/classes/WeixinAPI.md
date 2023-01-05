[typed-wx-api](../README.md) / [Exports](../modules.md) / WeixinAPI

# Class: WeixinAPI

## Hierarchy

- `WeixinBase`

- `WeixinIP`

- `WeixinJs`

- `WeixinUser`

- `WeixinQRCode`

- `WeixinMedia`

- `WeixinMaterial`

- `WeixinDraft`

- `WeixinFreePublish`

- `WeixinOpenAPI`

- `WeixinMenu`

- `WeixinMessage`

  ↳ **`WeixinAPI`**

## Table of contents

### Constructors

- [constructor](WeixinAPI.md#constructor)

### Properties

- [config](WeixinAPI.md#config)
- [logger](WeixinAPI.md#logger)
- [appid](WeixinAPI.md#appid)
- [secret](WeixinAPI.md#secret)

### Methods

- [request](WeixinAPI.md#request)
- [getAccessToken](WeixinAPI.md#getaccesstoken)
- [ensureAccessToken](WeixinAPI.md#ensureaccesstoken)
- [getTicket](WeixinAPI.md#getticket)
- [ensureTicket](WeixinAPI.md#ensureticket)
- [pkcs7Decoder](WeixinAPI.md#pkcs7decoder)
- [pkcs7Encoder](WeixinAPI.md#pkcs7encoder)
- [initCrypto](WeixinAPI.md#initcrypto)
- [rawSignature](WeixinAPI.md#rawsignature)
- [encrypt](WeixinAPI.md#encrypt)
- [decrypt](WeixinAPI.md#decrypt)
- [resolveAccessToken](WeixinAPI.md#resolveaccesstoken)
- [resolveTicket](WeixinAPI.md#resolveticket)
- [getIdList](WeixinAPI.md#getidlist)

### 草稿

- [addDraft](WeixinAPI.md#adddraft)
- [getDraft](WeixinAPI.md#getdraft)
- [deleteDraft](WeixinAPI.md#deletedraft)
- [updateDraft](WeixinAPI.md#updatedraft)
- [getDraftCount](WeixinAPI.md#getdraftcount)
- [getDrafts](WeixinAPI.md#getdrafts)

### 图文消息

- [submitFreePublish](WeixinAPI.md#submitfreepublish)
- [getFreePublish](WeixinAPI.md#getfreepublish)
- [deleteFreePublish](WeixinAPI.md#deletefreepublish)
- [getArticle](WeixinAPI.md#getarticle)
- [getFreePublishes](WeixinAPI.md#getfreepublishes)

### 微信服务器

- [getIP](WeixinAPI.md#getip)

### JS_SDK

- [getJsConfig](WeixinAPI.md#getjsconfig)
- [getCardExtConfig](WeixinAPI.md#getcardextconfig)

### 永久素材

- [uploadMaterial](WeixinAPI.md#uploadmaterial)
- [uploadVideoMaterial](WeixinAPI.md#uploadvideomaterial)
- [getVideoMaterial](WeixinAPI.md#getvideomaterial)
- [getMaterial](WeixinAPI.md#getmaterial)
- [getNewsMaterial](WeixinAPI.md#getnewsmaterial)
- [deleteMaterial](WeixinAPI.md#deletematerial)
- [getMaterialCount](WeixinAPI.md#getmaterialcount)
- [getMaterials](WeixinAPI.md#getmaterials)
- [getNewsMaterials](WeixinAPI.md#getnewsmaterials)

### 临时素材

- [uploadMedia](WeixinAPI.md#uploadmedia)
- [getMedia](WeixinAPI.md#getmedia)
- [getVideoMedia](WeixinAPI.md#getvideomedia)
- [getMediaHD](WeixinAPI.md#getmediahd)
- [uploadImage](WeixinAPI.md#uploadimage)

### 菜单

- [createMenu](WeixinAPI.md#createmenu)
- [getMenu](WeixinAPI.md#getmenu)
- [removeMenu](WeixinAPI.md#removemenu)
- [getCurrentSelfMenuInfo](WeixinAPI.md#getcurrentselfmenuinfo)
- [addConditionalMenu](WeixinAPI.md#addconditionalmenu)
- [delConditionalMenu](WeixinAPI.md#delconditionalmenu)
- [tryMatchConditionalMenu](WeixinAPI.md#trymatchconditionalmenu)

### 消息

- [sendMessage](WeixinAPI.md#sendmessage)
- [getAutoReplyInfo](WeixinAPI.md#getautoreplyinfo)

### API额度

- [getQuota](WeixinAPI.md#getquota)
- [clearQuota](WeixinAPI.md#clearquota)
- [getRid](WeixinAPI.md#getrid)

### 二维码

- [createTmpQRCode](WeixinAPI.md#createtmpqrcode)
- [createLimitQRCode](WeixinAPI.md#createlimitqrcode)
- [showQRCodeURL](WeixinAPI.md#showqrcodeurl)

### 用户

- [getUser](WeixinAPI.md#getuser)
- [batchGetUsers](WeixinAPI.md#batchgetusers)
- [getFollowers](WeixinAPI.md#getfollowers)
- [updateRemark](WeixinAPI.md#updateremark)
- [createTag](WeixinAPI.md#createtag)
- [getTags](WeixinAPI.md#gettags)
- [updateTag](WeixinAPI.md#updatetag)
- [deleteTag](WeixinAPI.md#deletetag)
- [getUsersFromTag](WeixinAPI.md#getusersfromtag)
- [batchTagging](WeixinAPI.md#batchtagging)
- [batchUnTagging](WeixinAPI.md#batchuntagging)

## Constructors

### constructor

• **new WeixinAPI**(`config`, `tokenStorage?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.appid` | `string` |
| `config.secret` | `string` |
| `tokenStorage?` | [`TokenStorage`](../interfaces/TokenStorage.md) |

#### Inherited from

WeixinBase.constructor

## Properties

### config

• `Readonly` **config**: `Required`<[`APIConfig`](../modules.md#apiconfig)\>

#### Inherited from

WeixinBase.config

___

### logger

• **logger**: [`Logger`](../modules.md#logger)

#### Inherited from

WeixinBase.logger

___

### appid

• `Readonly` **appid**: `string`

#### Inherited from

WeixinBase.appid

___

### secret

• `Readonly` **secret**: `string`

#### Inherited from

WeixinBase.secret

## Methods

### request

▸ **request**(`opts`, `retry?`): `Promise`<`any`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `opts` | `AxiosRequestConfig`<`any`\> & { `ignoreAccessToken?`: `boolean`  } | `undefined` |
| `retry` | `number` | `3` |

#### Returns

`Promise`<`any`\>

#### Inherited from

WeixinBase.request

___

### getAccessToken

▸ **getAccessToken**(): `Promise`<[`AccessToken`](AccessToken.md)\>

#### Returns

`Promise`<[`AccessToken`](AccessToken.md)\>

#### Inherited from

WeixinBase.getAccessToken

___

### ensureAccessToken

▸ **ensureAccessToken**(): `Promise`<[`AccessToken`](AccessToken.md)\>

#### Returns

`Promise`<[`AccessToken`](AccessToken.md)\>

#### Inherited from

WeixinBase.ensureAccessToken

___

### getTicket

▸ **getTicket**(`type`): `Promise`<[`Ticket`](Ticket.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Promise`<[`Ticket`](Ticket.md)\>

#### Inherited from

WeixinBase.getTicket

___

### ensureTicket

▸ **ensureTicket**(`type`): `Promise`<[`Ticket`](Ticket.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Promise`<[`Ticket`](Ticket.md)\>

#### Inherited from

WeixinBase.ensureTicket

___

### pkcs7Decoder

▸ **pkcs7Decoder**(`buff`): `Buffer`

AES算法pkcs7 padding Decoder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buff` | `Buffer` | 需要解码的Buffer |

#### Returns

`Buffer`

#### Inherited from

WeixinBase.pkcs7Decoder

___

### pkcs7Encoder

▸ **pkcs7Encoder**(`buff`): `Buffer`

AES算法pkcs7 padding Encoder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buff` | `Buffer` | 需要编码码的Buffer |

#### Returns

`Buffer`

#### Inherited from

WeixinBase.pkcs7Encoder

___

### initCrypto

▸ **initCrypto**(`corpId`, `token`, `encodingAESKey`): `void`

初始化AES解密的配置信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `corpId` | `string` | 企业微信的corpId，当为第三方套件回调事件时，corpId的内容为suiteId |
| `token` | `string` | 企业微信的token，当为第三方套件回调事件时，token的内容为套件的token |
| `encodingAESKey` | `string` | 企业微信的encodingAESKey，当为第三方套件回调事件时，encodingAESKey的内容为套件的encodingAESKey |

#### Returns

`void`

#### Inherited from

WeixinBase.initCrypto

___

### rawSignature

▸ **rawSignature**(`timestamp`, `nonce`, `encrypt`): `string`

生成签名

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timestamp` | `number` | String\|Number 时间戳 |
| `nonce` | `string` | String 随机串 |
| `encrypt` | `string` | String 加密的数据 |

#### Returns

`string`

String 排好序的签名

#### Inherited from

WeixinBase.rawSignature

___

### encrypt

▸ **encrypt**(`message`, `corpId`): `string`

对给定的消息进行AES加密

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | - |
| `corpId` | `string` | 可选 需要对比的corpId，如果第三方回调时默认是suiteId，也可自行传入作为匹配处理 |

#### Returns

`string`

加密后的结果

#### Inherited from

WeixinBase.encrypt

___

### decrypt

▸ **decrypt**(`str`, `corpId`): `string`

对给定的密文进行AES解密

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要解密的密文 |
| `corpId` | `string` | 可选 需要对比的corpId，如果第三方回调时默认是suiteId，也可自行传入作为匹配处理 |

#### Returns

`string`

解密后的结果

#### Inherited from

WeixinBase.decrypt

___

### resolveAccessToken

▸ **resolveAccessToken**(): `Promise`<{ `access_token`: `any` = result.access\_token; `expires_in`: `any` = result.expires\_in }\>

#### Returns

`Promise`<{ `access_token`: `any` = result.access\_token; `expires_in`: `any` = result.expires\_in }\>

#### Inherited from

WeixinBase.resolveAccessToken

___

### resolveTicket

▸ **resolveTicket**(`type`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Promise`<`any`\>

#### Inherited from

WeixinBase.resolveTicket

___

### getIdList

▸ **getIdList**(`openid`): `Promise`<`number`[]\>

获取用户身上的标签列表

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |

#### Returns

`Promise`<`number`[]\>

#### Inherited from

WeixinUser.getIdList

## 草稿

### addDraft

▸ **addDraft**(`draft`): `Promise`<{ `media_id`: `string`  }\>

新建草稿

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `draft` | [`WxDraftNews`](../modules.md#wxdraftnews)[] | 草稿 |

#### Returns

`Promise`<{ `media_id`: `string`  }\>

#### Inherited from

WeixinDraft.addDraft

___

### getDraft

▸ **getDraft**(`media_id`): `Promise`<{ `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string`  }[]  }\>

获取草稿

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string`  }[]  }\>

#### Inherited from

WeixinDraft.getDraft

___

### deleteDraft

▸ **deleteDraft**(`media_id`): `Promise`<{}\>

删除草稿

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinDraft.deleteDraft

___

### updateDraft

▸ **updateDraft**(`draft`): `Promise`<{}\>

更新草稿

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `draft` | `Object` | 草稿 |
| `draft.media_id` | `string` | - |
| `draft.index` | `number` | 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义），第一篇为0 |
| `draft.articles` | [`WxDraftNews`](../modules.md#wxdraftnews) | - |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinDraft.updateDraft

___

### getDraftCount

▸ **getDraftCount**(): `Promise`<{ `total_count`: `number`  }\>

获取草稿总数

#### Returns

`Promise`<{ `total_count`: `number`  }\>

#### Inherited from

WeixinDraft.getDraftCount

___

### getDrafts

▸ **getDrafts**(`data`): `Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `media_id`: `string` ; `content`: { `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string`  }[]  } ; `update_time`: `number`  }[]  }\>

获取草稿列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | - |
| `data.offset` | `number` | 从全部素材的该偏移位置开始返回，0表示从第一个素材返回 |
| `data.count` | `number` | 返回素材的数量，取值在1到20之间 |
| `data.no_content?` | ``0`` \| ``1`` | 1 表示不返回 content 字段，0 表示正常返回，默认为 0 |

#### Returns

`Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `media_id`: `string` ; `content`: { `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string`  }[]  } ; `update_time`: `number`  }[]  }\>

#### Inherited from

WeixinDraft.getDrafts

## 图文消息

### submitFreePublish

▸ **submitFreePublish**(`media_id`): `Promise`<{ `publish_id`: `string`  }\>

发布草稿

发布任务提交成功，并不意味着此时发布已经完成，仍有可能在后续的发布过程中出现异常情况导致发布失败，如原创声明失败、平台审核不通过等。

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `publish_id`: `string`  }\>

#### Inherited from

WeixinFreePublish.submitFreePublish

___

### getFreePublish

▸ **getFreePublish**(`publish_id`): `Promise`<{ `publish_id`: `string` ; `publish_status`: ``0`` ; `article_id`: `string` ; `article_detail`: { `count`: `number` ; `item`: { `idx`: `number` ; `article_url`: `string`  }[]  }  } \| { `publish_id`: `string` ; `publish_status`: ``1``  } \| { `publish_id`: `string` ; `publish_status`: ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` ; `fail_idx`: `number`[]  }\>

发布状态轮询

publish_status: 发布状态，0:成功, 1:发布中，2:原创失败, 3: 常规失败, 4:平台审核不通过, 5:成功后用户删除所有文章, 6: 成功后系统封禁所有文章

fail_idx: 当发布状态为2或4时，返回不通过的文章编号，第一篇为 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `publish_id` | `string` |

#### Returns

`Promise`<{ `publish_id`: `string` ; `publish_status`: ``0`` ; `article_id`: `string` ; `article_detail`: { `count`: `number` ; `item`: { `idx`: `number` ; `article_url`: `string`  }[]  }  } \| { `publish_id`: `string` ; `publish_status`: ``1``  } \| { `publish_id`: `string` ; `publish_status`: ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` ; `fail_idx`: `number`[]  }\>

#### Inherited from

WeixinFreePublish.getFreePublish

___

### deleteFreePublish

▸ **deleteFreePublish**(`data`): `Promise`<{}\>

删除发布

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` |  |
| `data.article_id` | `string` | - |
| `data.index?` | `number` | 要删除的文章在图文消息中的位置，第一篇编号为1，该字段不填或填0会删除全部文章 |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinFreePublish.deleteFreePublish

___

### getArticle

▸ **getArticle**(`article_id`): `Promise`<{ `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string` ; `is_deleted`: `boolean`  }[]  }\>

通过 article_id 获取已发布文章

#### Parameters

| Name | Type |
| :------ | :------ |
| `article_id` | `string` |

#### Returns

`Promise`<{ `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string` ; `is_deleted`: `boolean`  }[]  }\>

#### Inherited from

WeixinFreePublish.getArticle

___

### getFreePublishes

▸ **getFreePublishes**(`data`): `Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `article_id`: `string` ; `content`: { `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string` ; `is_deleted`: `boolean`  }[]  } ; `update_time`: `number`  }[]  }\>

获取图文列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Object` | - |
| `data.offset` | `number` | 从全部素材的该偏移位置开始返回，0表示从第一个素材返回 |
| `data.count` | `number` | 返回素材的数量，取值在1到20之间 |
| `data.no_content?` | ``0`` \| ``1`` | 1 表示不返回 content 字段，0 表示正常返回，默认为 0 |

#### Returns

`Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `article_id`: `string` ; `content`: { `news_item`: [`WxDraftNews`](../modules.md#wxdraftnews) & { `show_cover_pic?`: ``0`` \| ``1`` ; `url`: `string` ; `is_deleted`: `boolean`  }[]  } ; `update_time`: `number`  }[]  }\>

#### Inherited from

WeixinFreePublish.getFreePublishes

## 微信服务器

### getIP

▸ **getIP**(): `Promise`<`string`[]\>

获取微信服务器IP地址

#### Returns

`Promise`<`string`[]\>

#### Inherited from

WeixinIP.getIP

## JS_SDK

### getJsConfig

▸ **getJsConfig**(`param`): `Promise`<{ `debug`: `undefined` \| `boolean` = param.debug; `appId`: `string` ; `timestamp`: `string` = timestamp; `nonceStr`: `string` = nonceStr; `signature`: `string` = signature; `jsApiList`: `string`[] = param.jsApiList; `openTagList`: `string`[]  }\>

获取微信JS SDK Config的所需参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.debug?` | `boolean` |
| `param.jsApiList` | `string`[] |
| `param.url` | `string` |
| `param.openTagList?` | `string`[] |

#### Returns

`Promise`<{ `debug`: `undefined` \| `boolean` = param.debug; `appId`: `string` ; `timestamp`: `string` = timestamp; `nonceStr`: `string` = nonceStr; `signature`: `string` = signature; `jsApiList`: `string`[] = param.jsApiList; `openTagList`: `string`[]  }\>

#### Inherited from

WeixinJs.getJsConfig

___

### getCardExtConfig

▸ **getCardExtConfig**(`param`): `Promise`<{ `timestamp`: `string` = timestamp; `signature`: `string` = signature; `code`: `string` ; `openid`: `string` ; `balance`: `undefined` \| `number` = param.balance }\>

获取微信JS SDK Config的所需参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `Object` |
| `param.card_id` | `string` |
| `param.code?` | `string` |
| `param.openid?` | `string` |
| `param.balance?` | `number` |

#### Returns

`Promise`<{ `timestamp`: `string` = timestamp; `signature`: `string` = signature; `code`: `string` ; `openid`: `string` ; `balance`: `undefined` \| `number` = param.balance }\>

#### Inherited from

WeixinJs.getCardExtConfig

## 永久素材

### uploadMaterial

▸ **uploadMaterial**(`buffer`, `type`, `filename`): `Promise`<{ `media_id`: `string` ; `url?`: `string`  }\>

新增永久素材，分别有图片（image）、语音（voice）和缩略图（thumb）

图片（image）: 10M，支持PNG\JPEG\JPG\GIF格式
语音（voice）：2M，播放长度不超过60s，支持AMR\MP3格式
缩略图（thumb）：64KB，支持JPG格式

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `type` | ``"image"`` \| ``"voice"`` \| ``"thumb"`` |
| `filename` | `string` |

#### Returns

`Promise`<{ `media_id`: `string` ; `url?`: `string`  }\>

#### Inherited from

WeixinMaterial.uploadMaterial

___

### uploadVideoMaterial

▸ **uploadVideoMaterial**(`buffer`, `filename`, `title`, `introduction`): `Promise`<{ `media_id`: `string`  }\>

新增永久视频素材
视频（video）：10MB，支持MP4格式

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `filename` | `string` |
| `title` | `string` |
| `introduction` | `string` |

#### Returns

`Promise`<{ `media_id`: `string`  }\>

#### Inherited from

WeixinMaterial.uploadVideoMaterial

___

### getVideoMaterial

▸ **getVideoMaterial**(`media_id`): `Promise`<{ `title`: `string` ; `description`: `string` ; `down_url`: `string`  }\>

获取视频(video)永久素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `title`: `string` ; `description`: `string` ; `down_url`: `string`  }\>

#### Inherited from

WeixinMaterial.getVideoMaterial

___

### getMaterial

▸ **getMaterial**(`media_id`): `Promise`<`Buffer`\>

获取图片（image）、语音（voice）和缩略图（thumb）永久素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

WeixinMaterial.getMaterial

___

### getNewsMaterial

▸ **getNewsMaterial**(`media_id`): `Promise`<{ `news_item`: { `title`: `string` ; `thumb_media_id`: `string` ; `show_cover_pic`: ``0`` \| ``1`` ; `author?`: `string` ; `digest?`: `string` ; `content`: `string` ; `url`: `string` ; `content_source_url`: `string`  }[]  }\>

获取图文消息(news)永久素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `news_item`: { `title`: `string` ; `thumb_media_id`: `string` ; `show_cover_pic`: ``0`` \| ``1`` ; `author?`: `string` ; `digest?`: `string` ; `content`: `string` ; `url`: `string` ; `content_source_url`: `string`  }[]  }\>

#### Inherited from

WeixinMaterial.getNewsMaterial

___

### deleteMaterial

▸ **deleteMaterial**(`media_id`): `Promise`<{}\>

删除永久素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinMaterial.deleteMaterial

___

### getMaterialCount

▸ **getMaterialCount**(): `Promise`<{ `voice_count`: `number` ; `video_count`: `number` ; `image_count`: `number` ; `news_count`: `number`  }\>

获取素材总数
1. 永久素材的总数，也会计算公众平台官网素材管理中的素材
2.图片和图文消息素材（包括单图文和多图文）的总数上限为100000，其他素材的总数上限为1000

#### Returns

`Promise`<{ `voice_count`: `number` ; `video_count`: `number` ; `image_count`: `number` ; `news_count`: `number`  }\>

#### Inherited from

WeixinMaterial.getMaterialCount

___

### getMaterials

▸ **getMaterials**(`type`, `offset?`, `count?`): `Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `media_id`: `string` ; `name`: `string` ; `update_time`: `number` ; `url`: `string`  }[]  }\>

获取永久素材列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | ``"video"`` \| ``"image"`` \| ``"voice"`` | `undefined` | 素材的类型，图片（image）、视频（video）、语音 （voice） |
| `offset` | `number` | `0` | 从全部素材的该偏移位置开始返回，0表示从第一个素材 返回 |
| `count` | `number` | `20` | 返回素材的数量，取值在1到20之间 |

#### Returns

`Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `media_id`: `string` ; `name`: `string` ; `update_time`: `number` ; `url`: `string`  }[]  }\>

#### Inherited from

WeixinMaterial.getMaterials

___

### getNewsMaterials

▸ **getNewsMaterials**(`offset?`, `count?`): `Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `media_id`: `string` ; `content`: { `news_item`: [{ `title`: `string` ; `thumb_media_id`: `string` ; `show_cover_pic`: ``0`` \| ``1`` ; `author?`: `string` ; `digest?`: `string` ; `content`: `string` ; `url`: `string` ; `content_source_url`: `string`  }]  } ; `update_time`: `number`  }[]  }\>

获取图文永久素材列表

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `offset` | `number` | `0` | 从全部素材的该偏移位置开始返回，0表示从第一个素材 返回 |
| `count` | `number` | `20` | 返回素材的数量，取值在1到20之间 |

#### Returns

`Promise`<{ `total_count`: `number` ; `item_count`: `number` ; `item`: { `media_id`: `string` ; `content`: { `news_item`: [{ `title`: `string` ; `thumb_media_id`: `string` ; `show_cover_pic`: ``0`` \| ``1`` ; `author?`: `string` ; `digest?`: `string` ; `content`: `string` ; `url`: `string` ; `content_source_url`: `string`  }]  } ; `update_time`: `number`  }[]  }\>

#### Inherited from

WeixinMaterial.getNewsMaterials

## 临时素材

### uploadMedia

▸ **uploadMedia**(`buffer`, `type`, `filename`): `Promise`<{ `type`: ``"video"`` \| ``"image"`` \| ``"voice"`` \| ``"thumb"`` ; `media_id`: `string` ; `created_at`: `number`  }\>

新增临时素材，分别有图片（image）、语音（voice）、视频（video）和缩略图（thumb）

1、临时素材media_id是可复用的。
2、媒体文件在微信后台保存时间为3天，即3天后media_id失效。
3、上传临时素材的格式、大小限制与公众平台官网一致。
图片（image）: 10M，支持PNG\JPEG\JPG\GIF格式
语音（voice）：2M，播放长度不超过60s，支持AMR\MP3格式
视频（video）：10MB，支持MP4格式
缩略图（thumb）：64KB，支持JPG格式

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `type` | ``"video"`` \| ``"image"`` \| ``"voice"`` \| ``"thumb"`` |
| `filename` | `string` |

#### Returns

`Promise`<{ `type`: ``"video"`` \| ``"image"`` \| ``"voice"`` \| ``"thumb"`` ; `media_id`: `string` ; `created_at`: `number`  }\>

#### Inherited from

WeixinMedia.uploadMedia

___

### getMedia

▸ **getMedia**(`media_id`): `Promise`<`Buffer`\>

获取临时素材
如果要获取视频素材, 请使用 getVideoMedia

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

WeixinMedia.getMedia

___

### getVideoMedia

▸ **getVideoMedia**(`media_id`): `Promise`<{ `video_url`: `string`  }\>

获取临时视频素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<{ `video_url`: `string`  }\>

#### Inherited from

WeixinMedia.getVideoMedia

___

### getMediaHD

▸ **getMediaHD**(`media_id`): `Promise`<`Buffer`\>

获取高清语音素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `media_id` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

WeixinMedia.getMediaHD

___

### uploadImage

▸ **uploadImage**(`buffer`, `filename`): `Promise`<{ `url`: `string`  }\>

上传图文消息内的图片获取URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `filename` | `string` |

#### Returns

`Promise`<{ `url`: `string`  }\>

#### Inherited from

WeixinMedia.uploadImage

## 菜单

### createMenu

▸ **createMenu**(`menu`): `Promise`<{}\>

创建自定义菜单

#### Parameters

| Name | Type |
| :------ | :------ |
| `menu` | [`WxMenu`](../modules.md#wxmenu) |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinMenu.createMenu

___

### getMenu

▸ **getMenu**(): `Promise`<{ `menu`: [`WxMenu`](../modules.md#wxmenu)  } \| { `menu?`: { `button`: [`Button`](../modules.md#button)[] ; `menuid`: `string`  } ; `conditionalmenu?`: { `button`: [`Button`](../modules.md#button)[] ; `matchrule`: { `group_id?`: `string` ; `client_platform_type?`: ``2`` \| ``1`` \| ``3``  } ; `menuid`: `string`  }[]  }\>

获取自定义菜单配置

#### Returns

`Promise`<{ `menu`: [`WxMenu`](../modules.md#wxmenu)  } \| { `menu?`: { `button`: [`Button`](../modules.md#button)[] ; `menuid`: `string`  } ; `conditionalmenu?`: { `button`: [`Button`](../modules.md#button)[] ; `matchrule`: { `group_id?`: `string` ; `client_platform_type?`: ``2`` \| ``1`` \| ``3``  } ; `menuid`: `string`  }[]  }\>

#### Inherited from

WeixinMenu.getMenu

___

### removeMenu

▸ **removeMenu**(): `Promise`<{}\>

删除自定义菜单

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinMenu.removeMenu

___

### getCurrentSelfMenuInfo

▸ **getCurrentSelfMenuInfo**(): `Promise`<{ `is_menu_open`: ``0`` \| ``1`` ; `selfmenu_info`: [`WxMenu`](../modules.md#wxmenu) \| { `button`: [`WxMpButtonItem`](../modules.md#wxmpbuttonitem) \| { `name`: `string` ; `type?`: `undefined` ; `sub_button`: [`WxMpButtonItem`](../modules.md#wxmpbuttonitem)[]  }  }  }\>

查询自定义菜单配置

本接口将会提供公众号当前使用的自定义菜单的配置，如果公众号是通过API调用设置的菜单，则返回菜单的开发配置，
而如果公众号是在公众平台官网通过网站功能发布菜单，则本接口返回运营者设置的菜单配置。

#### Returns

`Promise`<{ `is_menu_open`: ``0`` \| ``1`` ; `selfmenu_info`: [`WxMenu`](../modules.md#wxmenu) \| { `button`: [`WxMpButtonItem`](../modules.md#wxmpbuttonitem) \| { `name`: `string` ; `type?`: `undefined` ; `sub_button`: [`WxMpButtonItem`](../modules.md#wxmpbuttonitem)[]  }  }  }\>

#### Inherited from

WeixinMenu.getCurrentSelfMenuInfo

___

### addConditionalMenu

▸ **addConditionalMenu**(`menu`): `Promise`<{ `menuid`: `string`  }\>

创建个性化自定义菜单

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `menu` | `Object` | - |
| `menu.button` | [`Button`](../modules.md#button)[] | - |
| `menu.matchrule` | `Object` | - |
| `menu.matchrule.tag_id` | `string` | - |
| `menu.matchrule.client_platform_type` | ``"1"`` \| ``"2"`` \| ``"3"`` | 客户端版本，当前只具体到系统型号：IOS(1), Android(2),Others(3)，不填则不做匹配 |

#### Returns

`Promise`<{ `menuid`: `string`  }\>

#### Inherited from

WeixinMenu.addConditionalMenu

___

### delConditionalMenu

▸ **delConditionalMenu**(`menuid`): `Promise`<{}\>

删除个性化自定义菜单

#### Parameters

| Name | Type |
| :------ | :------ |
| `menuid` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinMenu.delConditionalMenu

___

### tryMatchConditionalMenu

▸ **tryMatchConditionalMenu**(`user_id`): `Promise`<[`WxMenu`](../modules.md#wxmenu)\>

测试个性化菜单匹配结果

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user_id` | `string` | 可以是粉丝的OpenID，也可以是粉丝的微信号。 |

#### Returns

`Promise`<[`WxMenu`](../modules.md#wxmenu)\>

#### Inherited from

WeixinMenu.tryMatchConditionalMenu

## 消息

### sendMessage

▸ **sendMessage**(`toOpenid`, `message`, `kf_account?`): `Promise`<{}\>

发送客服消息

#### Parameters

| Name | Type |
| :------ | :------ |
| `toOpenid` | `string` |
| `message` | { `msgtype`: ``"text"`` ; `text`: { `content`: `string`  }  } \| { `msgtype`: ``"image"`` ; `image`: { `media_id`: `string`  }  } \| { `msgtype`: ``"voice"`` ; `voice`: { `media_id`: `string`  }  } \| { `msgtype`: ``"video"`` ; `video`: { `media_id`: `string` ; `thumb_media_id`: `string` ; `title?`: `string` ; `description?`: `string`  }  } \| { `msgtype`: ``"music"`` ; `music`: { `title?`: `string` ; `description?`: `string` ; `musicurl`: `string` ; `hqmusicurl`: `string` ; `thumb_media_id`: `string`  }  } \| { `msgtype`: ``"news"`` ; `news`: { `title?`: `string` ; `description?`: `string` ; `url`: `string` ; `picurl?`: `string`  }  } \| { `msgtype`: ``"mpnewsarticle"`` ; `mpnewsarticle`: { `article_id`: `string`  }  } \| { `msgtype`: ``"msgmenu"`` ; `msgmenu`: { `head_content`: `string` ; `tail_content`: `string` ; `list`: { `id`: `string` ; `content`: `string`  }[]  }  } \| { `msgtype`: ``"wxcard"`` ; `wxcard`: { `card_id`: `string`  }  } \| { `msgtype`: ``"miniprogrampage"`` ; `miniprogrampage`: { `title`: `string` ; `appid`: `string` ; `pagepath`: `string` ; `thumb_media_id`: `string`  }  } |
| `kf_account?` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinMessage.sendMessage

___

### getAutoReplyInfo

▸ **getAutoReplyInfo**(): `Promise`<{ `is_add_friend_reply_open`: ``0`` \| ``1`` ; `is_autoreply_open`: ``0`` \| ``1`` ; `add_friend_autoreply_info?`: [`WxReplyMessage`](../modules.md#wxreplymessage) ; `message_default_autoreply_info?`: [`WxReplyMessage`](../modules.md#wxreplymessage) ; `keyword_autoreply_info?`: { `list`: { `rule_name`: `string` ; `create_time`: `number` ; `reply_mode`: ``"reply_all"`` \| ``"random_one"`` ; `keyword_list_info`: { `type`: ``"text"`` ; `match_mode`: ``"contain"`` \| ``"equal"`` ; `content`: `string`  }[] ; `reply_list_info`: [`WxReplyMessage`](../modules.md#wxreplymessage)[]  }[]  }  }\>

获取自动回复规则

#### Returns

`Promise`<{ `is_add_friend_reply_open`: ``0`` \| ``1`` ; `is_autoreply_open`: ``0`` \| ``1`` ; `add_friend_autoreply_info?`: [`WxReplyMessage`](../modules.md#wxreplymessage) ; `message_default_autoreply_info?`: [`WxReplyMessage`](../modules.md#wxreplymessage) ; `keyword_autoreply_info?`: { `list`: { `rule_name`: `string` ; `create_time`: `number` ; `reply_mode`: ``"reply_all"`` \| ``"random_one"`` ; `keyword_list_info`: { `type`: ``"text"`` ; `match_mode`: ``"contain"`` \| ``"equal"`` ; `content`: `string`  }[] ; `reply_list_info`: [`WxReplyMessage`](../modules.md#wxreplymessage)[]  }[]  }  }\>

#### Inherited from

WeixinMessage.getAutoReplyInfo

## API额度

### getQuota

▸ **getQuota**(`cgi_path`): `Promise`<{ `daily_limit`: `number` ; `used`: `number` ; `remain`: `number`  }\>

查询openAPI调用quota

cgi_path: api的请求地址，例如"/cgi-bin/message/custom/send";不要前缀“https://api.weixin.qq.com” ，也不要漏了"/",否则都会76003的报错

#### Parameters

| Name | Type |
| :------ | :------ |
| `cgi_path` | `string` |

#### Returns

`Promise`<{ `daily_limit`: `number` ; `used`: `number` ; `remain`: `number`  }\>

#### Inherited from

WeixinOpenAPI.getQuota

___

### clearQuota

▸ **clearQuota**(): `Promise`<{}\>

清空api的调用quota

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinOpenAPI.clearQuota

___

### getRid

▸ **getRid**(`rid`): `Promise`<{ `request`: { `invoke_time`: `number` ; `cost_in_ms`: `number` ; `request_url`: `string` ; `request_body`: `string` ; `response_body`: `string`  }  }\>

查询rid信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `rid` | `string` |

#### Returns

`Promise`<{ `request`: { `invoke_time`: `number` ; `cost_in_ms`: `number` ; `request_url`: `string` ; `request_body`: `string` ; `response_body`: `string`  }  }\>

#### Inherited from

WeixinOpenAPI.getRid

## 二维码

### createTmpQRCode

▸ **createTmpQRCode**(`scene`, `expire?`): `Promise`<{ `ticket`: `string` ; `expire_seconds`: `number` ; `url`: `string`  }\>

创建临时二维码

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scene` | { `id`: `number` ; `str?`: `undefined`  } \| { `id?`: `undefined` ; `str`: `string`  } | `undefined` | 场景ID. id: 临时二维码时为32位非0整型. str: 字符串类型，长度限制为1到64 |
| `expire` | `number` | `60` | 过期时间，单位秒。最大不超过2592000（即30天），此字段如果不填，则默认有效期为60秒 |

#### Returns

`Promise`<{ `ticket`: `string` ; `expire_seconds`: `number` ; `url`: `string`  }\>

#### Inherited from

WeixinQRCode.createTmpQRCode

___

### createLimitQRCode

▸ **createLimitQRCode**(`sceneId`): `Promise`<{ `ticket`: `string` ; `url`: `string`  }\>

创建永久二维码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sceneId` | `number` | 场景ID。ID不能大于100000 |

#### Returns

`Promise`<{ `ticket`: `string` ; `url`: `string`  }\>

#### Inherited from

WeixinQRCode.createLimitQRCode

___

### showQRCodeURL

▸ **showQRCodeURL**(`ticket`): `string`

生成显示二维码的链接。微信扫描后，可立即进入场景

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ticket` | `string` | 二维码Ticket |

#### Returns

`string`

显示二维码的URL地址，通过img标签可以显示出来

#### Inherited from

WeixinQRCode.showQRCodeURL

## 用户

### getUser

▸ **getUser**(`openid`, `lang?`): `Promise`<[`WxUser`](../modules.md#wxuser)\>

获取用户基本信息。可以设置lang，其中zh_CN 简体，zh_TW 繁体，en 英语。默认为en

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `openid` | `string` | `undefined` |
| `lang` | ``"zh_CN"`` \| ``"zh_TW"`` \| ``"en"`` | `'zh_CN'` |

#### Returns

`Promise`<[`WxUser`](../modules.md#wxuser)\>

#### Inherited from

WeixinUser.getUser

___

### batchGetUsers

▸ **batchGetUsers**(`openidList`, `lang?`): `Promise`<[`WxUser`](../modules.md#wxuser)[]\>

批量获取用户基本信息

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `openidList` | `string`[] | `undefined` |
| `lang` | ``"zh_CN"`` \| ``"zh_TW"`` \| ``"en"`` | `'zh_CN'` |

#### Returns

`Promise`<[`WxUser`](../modules.md#wxuser)[]\>

#### Inherited from

WeixinUser.batchGetUsers

___

### getFollowers

▸ **getFollowers**(): `Promise`<`string`[]\>

获取关注者列表

#### Returns

`Promise`<`string`[]\>

#### Inherited from

WeixinUser.getFollowers

___

### updateRemark

▸ **updateRemark**(`openid`, `remark`): `Promise`<{}\>

设置用户备注名

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openid` | `string` | 用户的openid |
| `remark` | `string` | 新的备注名，长度必须小于30字符 |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinUser.updateRemark

___

### createTag

▸ **createTag**(`name`): `Promise`<`number`\>

创建标签

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 标签名 |

#### Returns

`Promise`<`number`\>

#### Inherited from

WeixinUser.createTag

___

### getTags

▸ **getTags**(): `Promise`<{ `id`: `number` ; `name`: `string` ; `count`: `number`  }[]\>

获取公众号已创建的标签

#### Returns

`Promise`<{ `id`: `number` ; `name`: `string` ; `count`: `number`  }[]\>

#### Inherited from

WeixinUser.getTags

___

### updateTag

▸ **updateTag**(`tagid`, `name`): `Promise`<{}\>

编辑标签

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagid` | `number` |
| `name` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinUser.updateTag

___

### deleteTag

▸ **deleteTag**(`tagid`): `Promise`<{}\>

删除标签

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagid` | `number` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinUser.deleteTag

___

### getUsersFromTag

▸ **getUsersFromTag**(`tagId`): `Promise`<`string`[]\>

获取标签下粉丝列表

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tagId` | `number` | 标签id |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

WeixinUser.getUsersFromTag

___

### batchTagging

▸ **batchTagging**(`opendidList`, `tagid`): `Promise`<{}\>

批量为用户打标签
1. 每次传入的openid列表个数不能超过50个
2. 有粉丝身上的标签数最多20个

#### Parameters

| Name | Type |
| :------ | :------ |
| `opendidList` | `string`[] |
| `tagid` | `number` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinUser.batchTagging

___

### batchUnTagging

▸ **batchUnTagging**(`opendidList`, `tagid`): `Promise`<{}\>

批量为用户取消标签

#### Parameters

| Name | Type |
| :------ | :------ |
| `opendidList` | `string`[] |
| `tagid` | `number` |

#### Returns

`Promise`<{}\>

#### Inherited from

WeixinUser.batchUnTagging
