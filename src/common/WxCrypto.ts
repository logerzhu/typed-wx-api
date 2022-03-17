import crypto from 'crypto'
import { PKCS7Encoder } from './PKCS7Encoder'

export class WxCrypto {
  private readonly token: string
  private readonly key: Buffer
  private readonly iv: Buffer
  private readonly id: string

  /*
   * 生成随机字符串
   */
  static createNonceStr() {
    return Math.random().toString(36).substr(2, 15)
  }

  static createTimestamp() {
    return new Date().getTime() / 1000 + ''
  }

  constructor(config: { token: string; encodingAESKey: string; id: string }) {
    this.token = config.token
    this.id = config.id
    this.key = new Buffer(config.encodingAESKey + '=', 'base64')
    if (this.key.length !== 32) {
      throw new Error('invalided encodingAESKey')
    }
    this.iv = this.key.slice(0, 16)
  }

  signature(args: { timestamp: string; nonce: string; encrypt: string }) {
    const shaSum = crypto.createHash('sha1')
    const arr = [this.token, args.timestamp, args.nonce, args.encrypt].sort()
    shaSum.update(arr.join(''))
    return shaSum.digest('hex')
  }

  decrypt(text: string) {
    // 创建解密对象，AES采用CBC模式，数据采用PKCS#7填充；IV初始向量大小为16字节，取AESKey前16字节
    const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv)
    decipher.setAutoPadding(false)
    let deciphered = Buffer.concat([
      decipher.update(text, 'base64'),
      decipher.final()
    ])

    deciphered = PKCS7Encoder.decode(deciphered)
    // 算法：AES_Encrypt[random(16B) + msg_len(4B) + msg + $CorpID]
    // 去除16位随机数
    const content = deciphered.slice(16)
    const length = content.slice(0, 4).readUInt32BE(0)

    return {
      message: content.slice(4, length + 4).toString(),
      id: content.slice(length + 4).toString()
    }
  }

  encrypt(text: string) {
    // 算法：AES_Encrypt[random(16B) + msg_len(4B) + msg + $CorpID]
    // 获取16B的随机字符串
    const randomString = crypto.pseudoRandomBytes(16)

    const msg = new Buffer(text)

    // 获取4B的内容长度的网络字节序
    const msgLength = new Buffer(4)
    msgLength.writeUInt32BE(msg.length, 0)

    const id = new Buffer(this.id)

    const bufMsg = Buffer.concat([randomString, msgLength, msg, id])

    // 对明文进行补位操作
    const encoded = PKCS7Encoder.encode(bufMsg)

    // 创建加密对象，AES采用CBC模式，数据采用PKCS#7填充；IV初始向量大小为16字节，取AESKey前16字节
    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv)
    cipher.setAutoPadding(false)

    const cipheredMsg = Buffer.concat([cipher.update(encoded), cipher.final()])

    // 返回加密数据的base64编码
    return cipheredMsg.toString('base64')
  }
}
