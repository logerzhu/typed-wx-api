import Crypto from 'crypto'
import xml2js from 'xml2js'
export * from './PKCS7Encoder'
export * from './WxCrypto'

export function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      )
    })
  })
}

/*
 * 生成随机字符串
 */
export function createNonceStr() {
  return Math.random().toString(36).substr(2, 15)
}

/*
 * 生成时间戳
 */
export function createTimestamp() {
  return new Date().getTime() / 1000 + ''
}

/*
 * 排序查询字符串
 */
export function raw(args: any) {
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
export function sign(ret: object) {
  const string = raw(ret)
  const shaSum = Crypto.createHash('sha1')

  shaSum.update(string)
  return shaSum.digest('hex')
}

/**
 * 解析xml成object
 * @param xml 待解析字符串
 * @param opts xml2js.parseString参数
 * @returns {Promise}
 */
export function parseXml(xml: string, opts = {}) {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, opts, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

/**
 * 根据object构建一个xml
 * @param obj 对象
 * @param opts xml2js.Builder的参数
 * @returns String
 */
export function buildXml(obj: object, opts = {}) {
  const builder = new xml2js.Builder(opts)
  return builder.buildObject(obj)
}
export { PKCS7Encoder } from './PKCS7Encoder'
