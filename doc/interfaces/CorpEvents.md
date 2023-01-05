[typed-wx-api](../README.md) / [Exports](../modules.md) / CorpEvents

# Interface: CorpEvents

## Table of contents

### Properties

- [event\_change\_external\_contact\_add\_external\_contact](CorpEvents.md#event_change_external_contact_add_external_contact)
- [event\_change\_external\_contact\_edit\_external\_contact](CorpEvents.md#event_change_external_contact_edit_external_contact)
- [event\_change\_external\_contact\_add\_half\_external\_contact](CorpEvents.md#event_change_external_contact_add_half_external_contact)
- [event\_change\_external\_contact\_del\_external\_contact](CorpEvents.md#event_change_external_contact_del_external_contact)
- [event\_change\_contact\_create\_user](CorpEvents.md#event_change_contact_create_user)
- [event\_change\_contact\_update\_user](CorpEvents.md#event_change_contact_update_user)
- [event\_change\_contact\_delete\_user](CorpEvents.md#event_change_contact_delete_user)

## Properties

### event\_change\_external\_contact\_add\_external\_contact

• **event\_change\_external\_contact\_add\_external\_contact**: `Object`

添加企业客户事件
https://developer.work.weixin.qq.com/document/path/92130

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | ``"sys"`` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_external_contact"`` |
| `ChangeType` | ``"add_external_contact"`` |
| `UserID` | `string` |
| `ExternalUserID` | `string` |
| `State?` | `string` |
| `WelcomeCode?` | `string` |

___

### event\_change\_external\_contact\_edit\_external\_contact

• **event\_change\_external\_contact\_edit\_external\_contact**: `Object`

编辑企业客户事件
https://developer.work.weixin.qq.com/document/path/92130

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | ``"sys"`` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_external_contact"`` |
| `ChangeType` | ``"edit_external_contact"`` |
| `UserID` | `string` |
| `ExternalUserID` | `string` |

___

### event\_change\_external\_contact\_add\_half\_external\_contact

• **event\_change\_external\_contact\_add\_half\_external\_contact**: `Object`

外部联系人免验证添加成员事件
https://developer.work.weixin.qq.com/document/path/92130

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | ``"sys"`` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_external_contact"`` |
| `ChangeType` | ``"add_half_external_contact"`` |
| `UserID` | `string` |
| `ExternalUserID` | `string` |
| `State?` | `string` |
| `WelcomeCode?` | `string` |

___

### event\_change\_external\_contact\_del\_external\_contact

• **event\_change\_external\_contact\_del\_external\_contact**: `Object`

删除企业客户事件
https://developer.work.weixin.qq.com/document/path/92130

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | ``"sys"`` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_external_contact"`` |
| `ChangeType` | ``"del_external_contact"`` |
| `UserID` | `string` |
| `ExternalUserID` | `string` |
| `Source` | `string` |

___

### event\_change\_contact\_create\_user

• **event\_change\_contact\_create\_user**: `Object`

新增成员事件
https://developer.work.weixin.qq.com/document/path/90970

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | `string` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_contact"`` |
| `ChangeType` | ``"create_user"`` |
| `UserID` | `string` |
| `Name` | `string` |
| `Department?` | [`CommaArray`](../modules.md#commaarray)<`string`\> |
| `MainDepartment?` | `string` |
| `IsLeaderInDept?` | [`CommaArray`](../modules.md#commaarray)<``"0"`` \| ``"1"``\> |
| `DirectLeader?` | [`CommaArray`](../modules.md#commaarray)<`string`\> |
| `Position?` | `string` |
| `Mobile?` | `string` |
| `Gender?` | ``"1"`` \| ``"2"`` |
| `Email?` | `string` |
| `BizMail?` | `string` |
| `Status?` | ``"1"`` \| ``"2"`` \| ``"4"`` \| ``"5"`` |
| `Avatar?` | `string` |
| `Alias?` | `string` |
| `Telephone?` | `string` |
| `Address?` | `string` |
| `ExtAttr?` | [`ArrayItems`](../modules.md#arrayitems)<{ `Item`: { `Name`: `string` ; `Type`: ``"0"`` \| ``"1"`` ; `Text?`: { `Value?`: `string`  } ; `Web?`: { `Title?`: `string` ; `Url?`: `string`  }  }  }\> |

___

### event\_change\_contact\_update\_user

• **event\_change\_contact\_update\_user**: `Object`

更新成员事件
https://developer.work.weixin.qq.com/document/path/90970

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | `string` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_contact"`` |
| `ChangeType` | ``"update_user"`` |
| `UserID` | `string` |
| `NewUserID?` | `string` |
| `Name?` | `string` |
| `Department?` | [`CommaArray`](../modules.md#commaarray)<`string`\> |
| `MainDepartment?` | `string` |
| `IsLeaderInDept?` | [`CommaArray`](../modules.md#commaarray)<``"0"`` \| ``"1"``\> |
| `DirectLeader?` | [`CommaArray`](../modules.md#commaarray)<`string`\> |
| `Position?` | `string` |
| `Mobile?` | `string` |
| `Gender?` | ``"1"`` \| ``"2"`` |
| `Email?` | `string` |
| `BizMail?` | `string` |
| `Status?` | ``"1"`` \| ``"2"`` \| ``"4"`` \| ``"5"`` |
| `Avatar?` | `string` |
| `Alias?` | `string` |
| `Telephone?` | `string` |
| `Address?` | `string` |
| `ExtAttr?` | [`ArrayItems`](../modules.md#arrayitems)<{ `Item`: { `Name`: `string` ; `Type`: ``"0"`` \| ``"1"`` ; `Text?`: { `Value?`: `string`  } ; `Web?`: { `Title?`: `string` ; `Url?`: `string`  }  }  }\> |

___

### event\_change\_contact\_delete\_user

• **event\_change\_contact\_delete\_user**: `Object`

删除成员事件
https://developer.work.weixin.qq.com/document/path/90970

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ToUserName` | `string` |
| `FromUserName` | `string` |
| `CreateTime` | `string` |
| `MsgType` | ``"event"`` |
| `Event` | ``"change_contact"`` |
| `ChangeType` | ``"update_user"`` |
| `UserID` | `string` |
