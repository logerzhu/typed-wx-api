/**
 * 提供基于PKCS7算法的加解密接口
 */
export class PKCS7Encoder {
  static decode(text: Buffer) {
    let pad = text[text.length - 1]

    if (pad < 1 || pad > 32) {
      pad = 0
    }

    return text.slice(0, text.length - pad)
  }

  static encode(text: Buffer) {
    const blockSize = 32
    const textLength = text.length
    //计算需要填充的位数
    const amountToPad = blockSize - (textLength % blockSize)

    const result = new Buffer(amountToPad)
    result.fill(amountToPad)

    return Buffer.concat([text, result])
  }
}
