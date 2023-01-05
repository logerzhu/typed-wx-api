微信公众号和企业微信API
===========


## 模块状态
- [![NPM version](https://badge.fury.io/js/typed-wx-api.png)](http://badge.fury.io/js/typed-wx-api)

## Installation

```sh
$ npm install typed-wx-api
```

## Usage

```typescript
import {WeixinAPI} from 'typed-wx-api'

async function() {
  const api = new WeixinAPI({
    appid: appid,
    secret: secret
  });
  const result = await api.getMenu();
}
```