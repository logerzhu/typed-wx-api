[typed-wx-api](../README.md) / [Exports](../modules.md) / AccessToken

# Class: AccessToken

## Table of contents

### Constructors

- [constructor](AccessToken.md#constructor)

### Properties

- [accessToken](AccessToken.md#accesstoken)
- [expireTime](AccessToken.md#expiretime)

### Methods

- [isValid](AccessToken.md#isvalid)
- [toJSON](AccessToken.md#tojson)
- [fromJSON](AccessToken.md#fromjson)

## Constructors

### constructor

• **new AccessToken**(`accessToken`, `expireTime`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |
| `expireTime` | `number` |

## Properties

### accessToken

• `Readonly` **accessToken**: `string`

___

### expireTime

• `Readonly` **expireTime**: `number`

## Methods

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |
| `expireTime` | `number` |

___

### fromJSON

▸ `Static` **fromJSON**(`value`): ``null`` \| [`AccessToken`](AccessToken.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

``null`` \| [`AccessToken`](AccessToken.md)
