[typed-wx-api](../README.md) / [Exports](../modules.md) / CorpCrypto

# Class: CorpCrypto

## Table of contents

### Constructors

- [constructor](CorpCrypto.md#constructor)

### Methods

- [decrypt](CorpCrypto.md#decrypt)
- [decryptXML](CorpCrypto.md#decryptxml)

## Constructors

### constructor

• **new CorpCrypto**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.token` | `string` |
| `config.encodingAESKey` | `string` |
| `config.corpid` | `string` |

## Methods

### decrypt

▸ **decrypt**(`params`, `encrypt`): `Promise`<{ `errMessage`: `string` ; `message`: `undefined` = decryptData.message } \| { `errMessage`: `undefined` = undefined; `message`: `string` = decryptData.message }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.msg_signature` | `string` |
| `params.timestamp` | `string` |
| `params.nonce` | `string` |
| `encrypt` | `string` |

#### Returns

`Promise`<{ `errMessage`: `string` ; `message`: `undefined` = decryptData.message } \| { `errMessage`: `undefined` = undefined; `message`: `string` = decryptData.message }\>

___

### decryptXML

▸ **decryptXML**(`params`, `xmlStr`): `Promise`<{ `errMessage`: `string` ; `message`: `undefined` = decryptData.message } \| { `errMessage`: `undefined` = undefined; `ToUserName`: `string` ; `AgentID`: `string` ; `Decrypt`: { `ToUserName`: `string` ; `FromUserName`: `string` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_contact"`` ; `ChangeType`: ``"create_user"`` ; `UserID`: `string` ; `Name`: `string` ; `Department?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `MainDepartment?`: `string` ; `IsLeaderInDept?`: [`CommaArray`](../modules.md#commaarray)<``"0"`` \| ``"1"``\> ; `DirectLeader?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `Position?`: `string` ; `Mobile?`: `string` ; `Gender?`: ``"1"`` \| ``"2"`` ; `Email?`: `string` ; `BizMail?`: `string` ; `Status?`: ``"1"`` \| ``"2"`` \| ``"4"`` \| ``"5"`` ; `Avatar?`: `string` ; `Alias?`: `string` ; `Telephone?`: `string` ; `Address?`: `string` ; `ExtAttr?`: [`ArrayItems`](../modules.md#arrayitems)<{ `Item`: { `Name`: `string` ; `Type`: ``"0"`` \| ``"1"`` ; `Text?`: { `Value?`: `string`  } ; `Web?`: { `Title?`: `string` ; `Url?`: `string`  }  }  }\>  } \| { `ToUserName`: `string` ; `FromUserName`: `string` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_contact"`` ; `ChangeType`: ``"update_user"`` ; `UserID`: `string` ; `NewUserID?`: `string` ; `Name?`: `string` ; `Department?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `MainDepartment?`: `string` ; `IsLeaderInDept?`: [`CommaArray`](../modules.md#commaarray)<``"0"`` \| ``"1"``\> ; `DirectLeader?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `Position?`: `string` ; `Mobile?`: `string` ; `Gender?`: ``"1"`` \| ``"2"`` ; `Email?`: `string` ; `BizMail?`: `string` ; `Status?`: ``"1"`` \| ``"2"`` \| ``"4"`` \| ``"5"`` ; `Avatar?`: `string` ; `Alias?`: `string` ; `Telephone?`: `string` ; `Address?`: `string` ; `ExtAttr?`: [`ArrayItems`](../modules.md#arrayitems)<{ `Item`: { `Name`: `string` ; `Type`: ``"0"`` \| ``"1"`` ; `Text?`: { `Value?`: `string`  } ; `Web?`: { `Title?`: `string` ; `Url?`: `string`  }  }  }\>  } \| { `ToUserName`: `string` ; `FromUserName`: `string` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_contact"`` ; `ChangeType`: ``"update_user"`` ; `UserID`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"add_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string` ; `State?`: `string` ; `WelcomeCode?`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"edit_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"add_half_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string` ; `State?`: `string` ; `WelcomeCode?`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"del_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string` ; `Source`: `string`  }  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.msg_signature` | `string` |
| `params.timestamp` | `string` |
| `params.nonce` | `string` |
| `xmlStr` | `string` |

#### Returns

`Promise`<{ `errMessage`: `string` ; `message`: `undefined` = decryptData.message } \| { `errMessage`: `undefined` = undefined; `ToUserName`: `string` ; `AgentID`: `string` ; `Decrypt`: { `ToUserName`: `string` ; `FromUserName`: `string` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_contact"`` ; `ChangeType`: ``"create_user"`` ; `UserID`: `string` ; `Name`: `string` ; `Department?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `MainDepartment?`: `string` ; `IsLeaderInDept?`: [`CommaArray`](../modules.md#commaarray)<``"0"`` \| ``"1"``\> ; `DirectLeader?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `Position?`: `string` ; `Mobile?`: `string` ; `Gender?`: ``"1"`` \| ``"2"`` ; `Email?`: `string` ; `BizMail?`: `string` ; `Status?`: ``"1"`` \| ``"2"`` \| ``"4"`` \| ``"5"`` ; `Avatar?`: `string` ; `Alias?`: `string` ; `Telephone?`: `string` ; `Address?`: `string` ; `ExtAttr?`: [`ArrayItems`](../modules.md#arrayitems)<{ `Item`: { `Name`: `string` ; `Type`: ``"0"`` \| ``"1"`` ; `Text?`: { `Value?`: `string`  } ; `Web?`: { `Title?`: `string` ; `Url?`: `string`  }  }  }\>  } \| { `ToUserName`: `string` ; `FromUserName`: `string` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_contact"`` ; `ChangeType`: ``"update_user"`` ; `UserID`: `string` ; `NewUserID?`: `string` ; `Name?`: `string` ; `Department?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `MainDepartment?`: `string` ; `IsLeaderInDept?`: [`CommaArray`](../modules.md#commaarray)<``"0"`` \| ``"1"``\> ; `DirectLeader?`: [`CommaArray`](../modules.md#commaarray)<`string`\> ; `Position?`: `string` ; `Mobile?`: `string` ; `Gender?`: ``"1"`` \| ``"2"`` ; `Email?`: `string` ; `BizMail?`: `string` ; `Status?`: ``"1"`` \| ``"2"`` \| ``"4"`` \| ``"5"`` ; `Avatar?`: `string` ; `Alias?`: `string` ; `Telephone?`: `string` ; `Address?`: `string` ; `ExtAttr?`: [`ArrayItems`](../modules.md#arrayitems)<{ `Item`: { `Name`: `string` ; `Type`: ``"0"`` \| ``"1"`` ; `Text?`: { `Value?`: `string`  } ; `Web?`: { `Title?`: `string` ; `Url?`: `string`  }  }  }\>  } \| { `ToUserName`: `string` ; `FromUserName`: `string` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_contact"`` ; `ChangeType`: ``"update_user"`` ; `UserID`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"add_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string` ; `State?`: `string` ; `WelcomeCode?`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"edit_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"add_half_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string` ; `State?`: `string` ; `WelcomeCode?`: `string`  } \| { `ToUserName`: `string` ; `FromUserName`: ``"sys"`` ; `CreateTime`: `string` ; `MsgType`: ``"event"`` ; `Event`: ``"change_external_contact"`` ; `ChangeType`: ``"del_external_contact"`` ; `UserID`: `string` ; `ExternalUserID`: `string` ; `Source`: `string`  }  }\>
