[typed-wx-api](../README.md) / [Exports](../modules.md) / Ticket

# Class: Ticket

## Table of contents

### Constructors

- [constructor](Ticket.md#constructor)

### Properties

- [ticket](Ticket.md#ticket)
- [expireTime](Ticket.md#expiretime)

### Methods

- [isValid](Ticket.md#isvalid)
- [toJSON](Ticket.md#tojson)
- [fromJSON](Ticket.md#fromjson)

## Constructors

### constructor

• **new Ticket**(`ticket`, `expireTime`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticket` | `string` |
| `expireTime` | `number` |

## Properties

### ticket

• `Readonly` **ticket**: `string`

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
| `ticket` | `string` |
| `expireTime` | `number` |

___

### fromJSON

▸ `Static` **fromJSON**(`value`): ``null`` \| [`Ticket`](Ticket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

``null`` \| [`Ticket`](Ticket.md)
