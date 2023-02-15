import { WxCrypto } from '../../../crypto'
import xml2js from 'xml2js'

export type WxSpBaseInfoMessage<T> = {
  AppId: string
  CreateTime: string
  InfoType: T
}

export interface WxSpInfoMessages {}

export class WxSpCrypto {
  private readonly wxCrypto: WxCrypto

  constructor(config: {
    token: string
    encodingAESKey: string
    componentAppid: string
  }) {
    this.wxCrypto = new WxCrypto({
      token: config.token,
      encodingAESKey: config.encodingAESKey,
      id: config.componentAppid
    })
  }

  async decrypt(
    params: { msg_signature: string; timestamp: string; nonce: string },
    encrypt: string
  ) {
    if (
      params.msg_signature ===
      this.wxCrypto.signature({
        timestamp: params.timestamp,
        nonce: params.nonce,
        encrypt: encrypt
      })
    ) {
      const decryptData = this.wxCrypto.decrypt(encrypt)
      if (decryptData.id !== this.wxCrypto.id) {
        return {
          errMessage: 'Invalid componentAppid:' + decryptData.id
        }
      } else {
        return {
          errMessage: undefined,
          message: decryptData.message
        }
      }
    } else {
      return {
        errMessage: 'Invalid MsgSignature'
      }
    }
  }

  private formatXmlObj(xmlObj: any) {
    const self = this
    if (typeof xmlObj === 'object') {
      for (const key in xmlObj) {
        if (!Array.isArray(xmlObj[key]) || xmlObj[key].length === 0) {
          continue
        }
        if (xmlObj[key].length === 1) {
          const val = xmlObj[key][0]
          if (typeof val === 'object') {
            xmlObj[key] = self.formatXmlObj(val)
          } else {
            xmlObj[key] = (val || '').trim()
          }
        } else {
          xmlObj[key] = xmlObj[key].map((item: any) => self.formatXmlObj(item))
        }
      }
    }
    return xmlObj
  }

  async decryptInfoXML(
    params: { msg_signature: string; timestamp: string; nonce: string },
    xmlStr: string
  ): Promise<
    | { errMessage: string }
    | {
        errMessage: undefined
        AppID: string
        Decrypt: WxSpInfoMessages[keyof WxSpInfoMessages]
      }
  > {
    return this.decryptXML<WxSpInfoMessages[keyof WxSpInfoMessages]>(
      params,
      xmlStr
    )
  }

  async decryptXML<T>(
    params: { msg_signature: string; timestamp: string; nonce: string },
    xmlStr: string
  ) {
    const event = this.formatXmlObj(
      (await xml2js.parseStringPromise(xmlStr)).xml
    )
    if (event?.Encrypt == null) {
      return {
        errMessage: 'Missing Encrypt Data'
      }
    }

    const decryptInfo = await this.decrypt(params, event.Encrypt)
    if (decryptInfo.errMessage === undefined) {
      return {
        errMessage: undefined,
        AppID: event.AppId as string,
        Decrypt: this.formatXmlObj(
          (await xml2js.parseStringPromise(decryptInfo.message)).xml
        ) as T
      }
    } else {
      return decryptInfo
    }
  }
}
