[typed-wx-api](../README.md) / [Exports](../modules.md) / CorpApi

# Class: CorpApi

## Hierarchy

- `CorpJs`

- `CorpUser`

- `CorpOAuth`

- `CorpMsgTemplate`

- `CorpContact`

- `CorpGroupChat`

- `CorpMsgAudit`

- `CorpMedia`

- `CorpTag`

- `CorpMessage`

- `CorpBase`

  ↳ **`CorpApi`**

## Table of contents

### Constructors

- [constructor](CorpApi.md#constructor)

### Properties

- [config](CorpApi.md#config)
- [logger](CorpApi.md#logger)
- [corpid](CorpApi.md#corpid)
- [corpSecret](CorpApi.md#corpsecret)
- [agentid](CorpApi.md#agentid)

### Methods

- [request](CorpApi.md#request)
- [getAccessToken](CorpApi.md#getaccesstoken)
- [ensureAccessToken](CorpApi.md#ensureaccesstoken)
- [getTicket](CorpApi.md#getticket)
- [ensureTicket](CorpApi.md#ensureticket)
- [pkcs7Decoder](CorpApi.md#pkcs7decoder)
- [pkcs7Encoder](CorpApi.md#pkcs7encoder)
- [initCrypto](CorpApi.md#initcrypto)
- [rawSignature](CorpApi.md#rawsignature)
- [encrypt](CorpApi.md#encrypt)
- [decrypt](CorpApi.md#decrypt)
- [resolveAccessToken](CorpApi.md#resolveaccesstoken)
- [resolveTicket](CorpApi.md#resolveticket)

### 客户

- [getFollowUserList](CorpApi.md#getfollowuserlist)
- [getExternalContactList](CorpApi.md#getexternalcontactlist)
- [getExternalContact](CorpApi.md#getexternalcontact)
- [batchGetExternalContact](CorpApi.md#batchgetexternalcontact)
- [remarkExternalContact](CorpApi.md#remarkexternalcontact)

### 客户群

- [listGroupChat](CorpApi.md#listgroupchat)
- [getGroupChat](CorpApi.md#getgroupchat)
- [opengidToChatid](CorpApi.md#opengidtochatid)

### JS_SDK

- [getJsApiTicket](CorpApi.md#getjsapiticket)
- [getJsApiAgentTicket](CorpApi.md#getjsapiagentticket)
- [getJsConfig](CorpApi.md#getjsconfig)
- [getAgentJsConfig](CorpApi.md#getagentjsconfig)

### 素材

- [uploadMedia](CorpApi.md#uploadmedia)
- [uploadImage](CorpApi.md#uploadimage)
- [getMediaHD](CorpApi.md#getmediahd)
- [getMedia](CorpApi.md#getmedia)

### 消息

- [sendMessage](CorpApi.md#sendmessage)
- [recallMessage](CorpApi.md#recallmessage)

### 会话存档

- [getRoom](CorpApi.md#getroom)

### 群发消息

- [addMsgTemplate](CorpApi.md#addmsgtemplate)
- [getGroupMsgList](CorpApi.md#getgroupmsglist)
- [getGroupMsgTask](CorpApi.md#getgroupmsgtask)
- [getGroupMsgResult](CorpApi.md#getgroupmsgresult)
- [getGroupMsgSendResult](CorpApi.md#getgroupmsgsendresult)

### 授权登录

- [getAuthorizeURL](CorpApi.md#getauthorizeurl)
- [getUseridByCode](CorpApi.md#getuseridbycode)

### 标签

- [getCorpTagList](CorpApi.md#getcorptaglist)
- [addCorpTag](CorpApi.md#addcorptag)
- [editCorpTag](CorpApi.md#editcorptag)
- [delCorpTag](CorpApi.md#delcorptag)
- [markTag](CorpApi.md#marktag)

### 成员

- [createUser](CorpApi.md#createuser)
- [getUser](CorpApi.md#getuser)
- [updateUser](CorpApi.md#updateuser)
- [deleteUser](CorpApi.md#deleteuser)
- [deleteUsers](CorpApi.md#deleteusers)
- [getDepartmentSimpleList](CorpApi.md#getdepartmentsimplelist)
- [getDepartmentUserList](CorpApi.md#getdepartmentuserlist)
- [useridToOpenid](CorpApi.md#useridtoopenid)
- [openidToUserid](CorpApi.md#openidtouserid)
- [authSuccess](CorpApi.md#authsuccess)
- [getUserid](CorpApi.md#getuserid)

## Constructors

### constructor

• **new CorpApi**(`config`, `tokenStorage?`, `ticketStorage?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.corpid` | `string` |
| `config.corpSecret` | `string` |
| `config.agentid?` | `string` |
| `tokenStorage?` | [`TokenStorage`](../interfaces/TokenStorage.md) |
| `ticketStorage?` | [`TicketStorage`](../interfaces/TicketStorage.md) |

#### Inherited from

CorpJs.constructor

## Properties

### config

• `Readonly` **config**: `Required`<[`APIConfig`](../modules.md#apiconfig)\>

#### Inherited from

CorpJs.config

___

### logger

• **logger**: [`Logger`](../modules.md#logger)

#### Inherited from

CorpJs.logger

___

### corpid

• `Readonly` **corpid**: `string`

#### Inherited from

CorpJs.corpid

___

### corpSecret

• `Readonly` **corpSecret**: `string`

#### Inherited from

CorpJs.corpSecret

___

### agentid

• `Optional` `Readonly` **agentid**: `string`

#### Inherited from

CorpJs.agentid

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

CorpJs.request

___

### getAccessToken

▸ **getAccessToken**(): `Promise`<[`AccessToken`](AccessToken.md)\>

#### Returns

`Promise`<[`AccessToken`](AccessToken.md)\>

#### Inherited from

CorpJs.getAccessToken

___

### ensureAccessToken

▸ **ensureAccessToken**(): `Promise`<[`AccessToken`](AccessToken.md)\>

#### Returns

`Promise`<[`AccessToken`](AccessToken.md)\>

#### Inherited from

CorpJs.ensureAccessToken

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

CorpJs.getTicket

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

CorpJs.ensureTicket

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

CorpJs.pkcs7Decoder

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

CorpJs.pkcs7Encoder

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

CorpJs.initCrypto

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

CorpJs.rawSignature

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

CorpJs.encrypt

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

CorpJs.decrypt

___

### resolveAccessToken

▸ **resolveAccessToken**(): `Promise`<{ `access_token`: `any` = result.access\_token; `expires_in`: `any` = result.expires\_in }\>

#### Returns

`Promise`<{ `access_token`: `any` = result.access\_token; `expires_in`: `any` = result.expires\_in }\>

#### Inherited from

CorpJs.resolveAccessToken

___

### resolveTicket

▸ **resolveTicket**(`type`): `Promise`<{ `ticket`: `string` ; `expires_in`: `number`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Promise`<{ `ticket`: `string` ; `expires_in`: `number`  }\>

#### Inherited from

CorpJs.resolveTicket

## 客户

### getFollowUserList

▸ **getFollowUserList**(): `Promise`<`string`[]\>

获取配置了客户联系功能的成员列表

#### Returns

`Promise`<`string`[]\>

#### Inherited from

CorpContact.getFollowUserList

___

### getExternalContactList

▸ **getExternalContactList**(`userid`): `Promise`<`string`[]\>

获取客户列表

#### Parameters

| Name | Type |
| :------ | :------ |
| `userid` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

CorpContact.getExternalContactList

___

### getExternalContact

▸ **getExternalContact**(`externalUserid`): `Promise`<{ `external_contact`: [`ExternalContactUser`](../modules.md#externalcontactuser)  } & { `follow_user`: [`FollowUser`](../modules.md#followuser)[]  }\>

获取客户详情

#### Parameters

| Name | Type |
| :------ | :------ |
| `externalUserid` | `string` |

#### Returns

`Promise`<{ `external_contact`: [`ExternalContactUser`](../modules.md#externalcontactuser)  } & { `follow_user`: [`FollowUser`](../modules.md#followuser)[]  }\>

#### Inherited from

CorpContact.getExternalContact

___

### batchGetExternalContact

▸ **batchGetExternalContact**(`userids`): `Promise`<{ `external_contact`: [`ExternalContactUser`](../modules.md#externalcontactuser) ; `follow_info`: `Omit`<[`FollowUser`](../modules.md#followuser), ``"tags"``\> & { `tag_id?`: `string`[]  }  }[]\>

批量获取客户详情

#### Parameters

| Name | Type |
| :------ | :------ |
| `userids` | `string`[] |

#### Returns

`Promise`<{ `external_contact`: [`ExternalContactUser`](../modules.md#externalcontactuser) ; `follow_info`: `Omit`<[`FollowUser`](../modules.md#followuser), ``"tags"``\> & { `tag_id?`: `string`[]  }  }[]\>

#### Inherited from

CorpContact.batchGetExternalContact

___

### remarkExternalContact

▸ **remarkExternalContact**(`data`): `Promise`<{}\>

修改客户备注信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.userid` | `string` |
| `data.external_userid` | `string` |
| `data.remark?` | `string` |
| `data.description?` | `string` |
| `data.remark_company?` | `string` |
| `data.remark_mobiles?` | `string`[] |
| `data.remark_pic_mediaid?` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpContact.remarkExternalContact

## 客户群

### listGroupChat

▸ **listGroupChat**(`args?`): `Promise`<{ `chat_id`: `string` ; `status`: ``0`` \| ``2`` \| ``1`` \| ``3``  }[]\>

获取客户群列表

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Object` |
| `args.status_filter?` | ``0`` \| ``2`` \| ``1`` \| ``3`` |
| `args.owner_filter?` | `Object` |
| `args.owner_filter.userid_list` | `string`[] |
| `args.limit?` | `number` |

#### Returns

`Promise`<{ `chat_id`: `string` ; `status`: ``0`` \| ``2`` \| ``1`` \| ``3``  }[]\>

#### Inherited from

CorpGroupChat.listGroupChat

___

### getGroupChat

▸ **getGroupChat**(`args`): `Promise`<{ `chat_id`: `string` ; `name?`: `string` ; `owner?`: `string` ; `create_time`: `number` ; `notice?`: `string` ; `member_list`: { `userid`: `string` ; `type`: ``2`` \| ``1`` ; `unionid?`: `string` ; `join_time`: `number` ; `join_scene`: ``2`` \| ``1`` \| ``3`` ; `invitor?`: { `userid`: `string`  } ; `group_nickname?`: `string` ; `name?`: `string`  }[] ; `admin_list?`: { `userid`: `string`  }[]  }\>

获取客户群详情

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.chat_id` | `string` |
| `args.need_name?` | ``0`` \| ``1`` |

#### Returns

`Promise`<{ `chat_id`: `string` ; `name?`: `string` ; `owner?`: `string` ; `create_time`: `number` ; `notice?`: `string` ; `member_list`: { `userid`: `string` ; `type`: ``2`` \| ``1`` ; `unionid?`: `string` ; `join_time`: `number` ; `join_scene`: ``2`` \| ``1`` \| ``3`` ; `invitor?`: { `userid`: `string`  } ; `group_nickname?`: `string` ; `name?`: `string`  }[] ; `admin_list?`: { `userid`: `string`  }[]  }\>

#### Inherited from

CorpGroupChat.getGroupChat

___

### opengidToChatid

▸ **opengidToChatid**(`opengid`): `Promise`<`any`\>

客户群opengid转换

#### Parameters

| Name | Type |
| :------ | :------ |
| `opengid` | `string` |

#### Returns

`Promise`<`any`\>

#### Inherited from

CorpGroupChat.opengidToChatid

## JS_SDK

### getJsApiTicket

▸ **getJsApiTicket**(): `Promise`<{ `ticket`: `string` ; `expires_in`: `number`  }\>

获取jsapi_ticket
https://work.weixin.qq.com/api/doc#10029/附录1-JS-SDK使用权限签名算法

#### Returns

`Promise`<{ `ticket`: `string` ; `expires_in`: `number`  }\>

#### Inherited from

CorpJs.getJsApiTicket

___

### getJsApiAgentTicket

▸ **getJsApiAgentTicket**(): `Promise`<{ `ticket`: `string` ; `expires_in`: `number`  }\>

#### Returns

`Promise`<{ `ticket`: `string` ; `expires_in`: `number`  }\>

#### Inherited from

CorpJs.getJsApiAgentTicket

___

### getJsConfig

▸ **getJsConfig**(`param`): `Promise`<{ `beta`: `boolean` = true; `debug`: `undefined` \| `boolean` = debug; `appId`: `string` ; `timestamp`: `string` = timestamp; `nonceStr`: `string` = nonceStr; `signature`: `string` = signature; `jsApiList`: `string`[] = jsApiList }\>

获取企业微信JS SDK Config的所需参数

注意事项

1. 签名用的noncestr和timestamp必须与wx.config中的nonceStr和timestamp相同。
2. 签名用的url必须是调用JS接口页面的完整URL。
3. 出于安全考虑，开发者必须在服务器端实现签名的逻辑。
Examples:
```
var param = {
 debug:false,
 jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
 url: 'http://www.xxx.com'
};
var result = await api.getJsConfig(param);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `Object` | 参数 |
| `param.debug?` | `boolean` | - |
| `param.url` | `string` | - |
| `param.jsApiList` | `string`[] | - |

#### Returns

`Promise`<{ `beta`: `boolean` = true; `debug`: `undefined` \| `boolean` = debug; `appId`: `string` ; `timestamp`: `string` = timestamp; `nonceStr`: `string` = nonceStr; `signature`: `string` = signature; `jsApiList`: `string`[] = jsApiList }\>

#### Inherited from

CorpJs.getJsConfig

___

### getAgentJsConfig

▸ **getAgentJsConfig**(`«destructured»`): `Promise`<{ `corpid`: `string` ; `agentid`: `string` = agentid; `timestamp`: `string` = timestamp; `nonceStr`: `string` = nonceStr; `signature`: `string` = signature; `jsApiList`: `string`[] = jsApiList }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `agentid` | `string` |
| › `url` | `string` |
| › `jsApiList` | `string`[] |

#### Returns

`Promise`<{ `corpid`: `string` ; `agentid`: `string` = agentid; `timestamp`: `string` = timestamp; `nonceStr`: `string` = nonceStr; `signature`: `string` = signature; `jsApiList`: `string`[] = jsApiList }\>

#### Inherited from

CorpJs.getAgentJsConfig

## 素材

### uploadMedia

▸ **uploadMedia**(`buffer`, `type`, `filename`): `Promise`<{ `type`: ``"file"`` \| ``"video"`` \| ``"image"`` \| ``"voice"`` ; `media_id`: `string` ; `created_at`: `string`  }\>

上传临时素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `type` | ``"file"`` \| ``"video"`` \| ``"image"`` \| ``"voice"`` |
| `filename` | `string` |

#### Returns

`Promise`<{ `type`: ``"file"`` \| ``"video"`` \| ``"image"`` \| ``"voice"`` ; `media_id`: `string` ; `created_at`: `string`  }\>

#### Inherited from

CorpMedia.uploadMedia

___

### uploadImage

▸ **uploadImage**(`buffer`, `filename`): `Promise`<{ `url`: `string`  }\>

上传图片

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `filename` | `string` |

#### Returns

`Promise`<{ `url`: `string`  }\>

#### Inherited from

CorpMedia.uploadImage

___

### getMediaHD

▸ **getMediaHD**(`mediaId`): `Promise`<`Buffer`\>

获取高清语音素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

CorpMedia.getMediaHD

___

### getMedia

▸ **getMedia**(`mediaId`): `Promise`<`Buffer`\>

获取临时素材

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaId` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Inherited from

CorpMedia.getMedia

## 消息

### sendMessage

▸ **sendMessage**(`data`): `Promise`<{ `msgid`: `string` ; `invaliduser?`: `string` ; `invalidparty?`: `string` ; `invalidtag?`: `string` ; `unlicenseduser?`: `string` ; `response_code?`: `string`  }\>

应用支持推送文本、图片、视频、文件、图文等类型。

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`Promise`<{ `msgid`: `string` ; `invaliduser?`: `string` ; `invalidparty?`: `string` ; `invalidtag?`: `string` ; `unlicenseduser?`: `string` ; `response_code?`: `string`  }\>

#### Inherited from

CorpMessage.sendMessage

___

### recallMessage

▸ **recallMessage**(`msgid`): `Promise`<{}\>

撤回应用消息

本接口可以撤回24小时内通过发送应用消息接口推送的消息，仅可撤回企业微信端的数据，微信插件端的数据不支持撤回。

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgid` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpMessage.recallMessage

## 会话存档

### getRoom

▸ **getRoom**(`roomid`): `Promise`<{ `roomname`: `string` ; `creator?`: `string` ; `room_create_time`: `number` ; `notice?`: `string` ; `members`: { `memberid`: `string` ; `jointime`: `number`  }[]  }\>

获取会话内容存档内部群信息

#### Parameters

| Name | Type |
| :------ | :------ |
| `roomid` | `string` |

#### Returns

`Promise`<{ `roomname`: `string` ; `creator?`: `string` ; `room_create_time`: `number` ; `notice?`: `string` ; `members`: { `memberid`: `string` ; `jointime`: `number`  }[]  }\>

#### Inherited from

CorpMsgAudit.getRoom

## 群发消息

### addMsgTemplate

▸ **addMsgTemplate**(`data`): `Promise`<{ `msgid`: `string` ; `fail_list`: `string`[]  }\>

创建企业群发

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`Promise`<{ `msgid`: `string` ; `fail_list`: `string`[]  }\>

#### Inherited from

CorpMsgTemplate.addMsgTemplate

___

### getGroupMsgList

▸ **getGroupMsgList**(`data`): `Promise`<[`GroupMsg`](../modules.md#groupmsg)[]\>

群发任务记录的起止时间间隔不能超过1个月

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.chat_type` | ``"group"`` \| ``"single"`` |
| `data.start_time` | `number` |
| `data.end_time` | `number` |
| `data.creator?` | `string` |
| `data.filter_type?` | ``0`` \| ``2`` \| ``1`` |

#### Returns

`Promise`<[`GroupMsg`](../modules.md#groupmsg)[]\>

#### Inherited from

CorpMsgTemplate.getGroupMsgList

___

### getGroupMsgTask

▸ **getGroupMsgTask**(`msgid`): `Promise`<[`MsgSendTask`](../modules.md#msgsendtask)[]\>

获取群蜂消息任务

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgid` | `string` |

#### Returns

`Promise`<[`MsgSendTask`](../modules.md#msgsendtask)[]\>

#### Inherited from

CorpMsgTemplate.getGroupMsgTask

___

### getGroupMsgResult

▸ **getGroupMsgResult**(`msgid`): `Promise`<[`MsgSendResult`](../modules.md#msgsendresult)[]\>

群发消息结果

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgid` | `string` |

#### Returns

`Promise`<[`MsgSendResult`](../modules.md#msgsendresult)[]\>

#### Inherited from

CorpMsgTemplate.getGroupMsgResult

___

### getGroupMsgSendResult

▸ **getGroupMsgSendResult**(`msgid`, `userid`): `Promise`<[`MsgSendResult`](../modules.md#msgsendresult)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgid` | `string` |
| `userid` | `string` |

#### Returns

`Promise`<[`MsgSendResult`](../modules.md#msgsendresult)[]\>

#### Inherited from

CorpMsgTemplate.getGroupMsgSendResult

## 授权登录

### getAuthorizeURL

▸ **getAuthorizeURL**(`redirect`, `state`, `scope`, `agentid`): `string`

获取授权页面的URL地址
https://work.weixin.qq.com/api/doc#10028/获取code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redirect` | `string` | 授权后要跳转的地址 |
| `state` | `string` | 开发者可提供的数据 |
| `scope` | ``"snsapi_base"`` \| ``"snsapi_userinfo"`` \| ``"snsapi_privateinfo"`` | 应用授权作用域，snsapi_base：静默授权，可获取成员的基础信息；snsapi_userinfo：静默授权，可获取成员的详细信息，但不包含手机、邮箱；snsapi_privateinfo：手动授权，可获取成员的详细信息，包含手机、邮箱。 |
| `agentid` | `string` | 当scope是snsapi_userinfo或snsapi_privateinfo时，该参数必填 |

#### Returns

`string`

#### Inherited from

CorpOAuth.getAuthorizeURL

___

### getUseridByCode

▸ **getUseridByCode**(`code`): `Promise`<{ `userid`: `string` ; `openid`: `undefined`  } \| { `userid`: `undefined` ; `openid`: `string`  }\>

根据code获取成员信息. 企业成员返回userid, 非企业成员返回openid
https://work.weixin.qq.com/api/doc#10028/根据code获取成员信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | 通过成员授权获取到的code，最大为512字节。每次成员授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。 |

#### Returns

`Promise`<{ `userid`: `string` ; `openid`: `undefined`  } \| { `userid`: `undefined` ; `openid`: `string`  }\>

#### Inherited from

CorpOAuth.getUseridByCode

## 标签

### getCorpTagList

▸ **getCorpTagList**(`args?`): `Promise`<{ `tag_group`: { `group_id`: `string` ; `group_name`: `string` ; `create_time`: `number` ; `order`: `number` ; `deleted?`: `boolean` ; `tag`: { `id`: `string` ; `name`: `string` ; `create_time`: `number` ; `order`: `number` ; `deleted?`: `boolean`  }[]  }[]  }\>

获取企业标签库

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | { `tag_id`: `string`[] ; `group_id?`: `undefined`  } \| { `tag_id?`: `undefined` ; `group_id`: `string`[]  } |

#### Returns

`Promise`<{ `tag_group`: { `group_id`: `string` ; `group_name`: `string` ; `create_time`: `number` ; `order`: `number` ; `deleted?`: `boolean` ; `tag`: { `id`: `string` ; `name`: `string` ; `create_time`: `number` ; `order`: `number` ; `deleted?`: `boolean`  }[]  }[]  }\>

#### Inherited from

CorpTag.getCorpTagList

___

### addCorpTag

▸ **addCorpTag**(`args?`): `Promise`<{ `tag_group`: { `group_id`: `string` ; `group_name`: `string` ; `create_time`: `number` ; `order`: `number` ; `tag`: { `id`: `string` ; `name`: `string` ; `create_time`: `number` ; `order`: `number`  }[]  }[]  }\>

添加企业客户标签

如果要向指定的标签组下添加标签，需要填写group_id参数；如果要创建一个全新的标签组以及标签，则需要通过group_name参数指定新标签组名称，如果填写的groupname已经存在，则会在此标签组下新建标签。
如果填写了group_id参数，则group_name和标签组的order参数会被忽略。
不支持创建空标签组。
标签组内的标签不可同名，如果传入多个同名标签，则只会创建一个。

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Object` |

#### Returns

`Promise`<{ `tag_group`: { `group_id`: `string` ; `group_name`: `string` ; `create_time`: `number` ; `order`: `number` ; `tag`: { `id`: `string` ; `name`: `string` ; `create_time`: `number` ; `order`: `number`  }[]  }[]  }\>

#### Inherited from

CorpTag.addCorpTag

___

### editCorpTag

▸ **editCorpTag**(`args?`): `Promise`<{}\>

编辑企业客户标签

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Object` |
| `args.id` | `string` |
| `args.name?` | `string` |
| `args.order?` | `number` |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpTag.editCorpTag

___

### delCorpTag

▸ **delCorpTag**(`args`): `Promise`<{}\>

删除企业客户标签

tag_id和group_id不可同时为空。
如果一个标签组下所有的标签均被删除，则标签组会被自动删除。

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | { `tag_id`: `string`[] ; `group_id?`: `undefined`  } \| { `tag_id?`: `undefined` ; `group_id`: `string`[]  } |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpTag.delCorpTag

___

### markTag

▸ **markTag**(`args`): `Promise`<{}\>

编辑客户企业标签

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpTag.markTag

## 成员

### createUser

▸ **createUser**(`data`): `Promise`<{}\>

创建成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`WriteOnlyUserData`](../modules.md#writeonlyuserdata) |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpUser.createUser

___

### getUser

▸ **getUser**(`userid`): `Promise`<[`ReadOnlyUserData`](../modules.md#readonlyuserdata)\>

读取成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `userid` | `string` |

#### Returns

`Promise`<[`ReadOnlyUserData`](../modules.md#readonlyuserdata)\>

#### Inherited from

CorpUser.getUser

___

### updateUser

▸ **updateUser**(`userid`, `data`): `Promise`<{}\>

更新成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `userid` | `string` |
| `data` | `Omit`<`Partial`<[`WriteOnlyUserData`](../modules.md#writeonlyuserdata)\>, ``"userid"``\> |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpUser.updateUser

___

### deleteUser

▸ **deleteUser**(`userid`): `Promise`<{}\>

删除成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `userid` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpUser.deleteUser

___

### deleteUsers

▸ **deleteUsers**(`user_ids`): `Promise`<{}\>

批量删除成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `user_ids` | `string`[] |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpUser.deleteUsers

___

### getDepartmentSimpleList

▸ **getDepartmentSimpleList**(`department_id`, `fetchChild?`): `Promise`<{ `userid`: `any` = info.userid; `name`: `any` = info.name; `department`: `any` = info.department; `open_userid`: `any` = info.open\_userid }[]\>

获取部门成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `department_id` | `string` |
| `fetchChild?` | ``0`` \| ``1`` |

#### Returns

`Promise`<{ `userid`: `any` = info.userid; `name`: `any` = info.name; `department`: `any` = info.department; `open_userid`: `any` = info.open\_userid }[]\>

#### Inherited from

CorpUser.getDepartmentSimpleList

___

### getDepartmentUserList

▸ **getDepartmentUserList**(`department_id`, `fetchChild?`): `Promise`<[`ReadOnlyUserData`](../modules.md#readonlyuserdata)[]\>

获取部门成员详情

#### Parameters

| Name | Type |
| :------ | :------ |
| `department_id` | `string` |
| `fetchChild?` | ``0`` \| ``1`` |

#### Returns

`Promise`<[`ReadOnlyUserData`](../modules.md#readonlyuserdata)[]\>

#### Inherited from

CorpUser.getDepartmentUserList

___

### useridToOpenid

▸ **useridToOpenid**(`userid`): `Promise`<`string`\>

userid转openid

#### Parameters

| Name | Type |
| :------ | :------ |
| `userid` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CorpUser.useridToOpenid

___

### openidToUserid

▸ **openidToUserid**(`openid`): `Promise`<`string`\>

openid转userid

#### Parameters

| Name | Type |
| :------ | :------ |
| `openid` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CorpUser.openidToUserid

___

### authSuccess

▸ **authSuccess**(`userid`): `Promise`<{}\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userid` | `string` |

#### Returns

`Promise`<{}\>

#### Inherited from

CorpUser.authSuccess

___

### getUserid

▸ **getUserid**(`phoneNumber`): `Promise`<`string`\>

通过电话号码查询成员

#### Parameters

| Name | Type |
| :------ | :------ |
| `phoneNumber` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

CorpUser.getUserid
