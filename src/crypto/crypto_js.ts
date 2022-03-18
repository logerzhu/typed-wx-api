import Crypto from 'crypto'

export class WxJsCrypto {

  static createNonceStr() {
    return Math.random().toString(36).substr(2, 15)
  }

  static createTimestamp() {
    return new Date().getTime() / 1000 + ''
  }

  /*
 * 排序查询字符串
 */
  private static raw(args: any) {
    let keys = Object.keys(args)
    keys = keys.sort()

    const newArgs: any = {}
    keys.forEach(function (key) {
      newArgs[key.toLowerCase()] = args[key]
    })

    let string = ''
    for (let k in newArgs) {
      string += '&' + k + '=' + newArgs[k]
    }
    return string.substr(1)
  }

  /*
   * 签名算法
   *
   * @param {Object} ret 需要签名的对象，注：需要先排序好
   */
  static sign(ret: object) {
    const string = WxJsCrypto.raw(ret)
    const shaSum = Crypto.createHash('sha1')

    shaSum.update(string)
    return shaSum.digest('hex')
  }
}