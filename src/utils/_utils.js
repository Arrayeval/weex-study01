// var md5 = require('../../third_party/md5')
import md5 from 'blueimp-md5'
function bytesToHex (arr) {
  var str = ''
  for (var i = 0; i < arr.length; i++) {
    var h = (arr[i] & 0xff).toString(16)
    if (h.length < 2) str += '0'
    str += h
  }
  return str
}

function getIntBytes (x, digits) {
  var bytes = []
  var i = digits || 4
  do {
    bytes[--i] = x & (255)
    x = x >> 8
  } while (i)
  return bytes.reverse()
}

function getrandkey (length) {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
  var str = ''
  for (var i = 0; i < length * 2; i++) {
    str += arr[Math.floor(Math.random() * 16)]
  }
  return str
}

/**
 *  @desc:全局公共方法.
 */
// var JSEncrypt = require('jsencrypt').JSEncrypt
var sjcl = require('./sjcl')
// var md5 = require('./md5')

var hmacSHA256 = function (key) {
  var _hmac = sjcl.misc.hmac
  var hasher = new _hmac(key, sjcl.hash.sha256)
  this.encrypt = function () {
    return hasher.encrypt.apply(hasher, arguments)
  }
}

// var WangEditor = require('wangeditor')
// var jquery = require('jquery')

sjcl.beware["CBC mode is dangerous because it doesn't protect message integrity."]()
var iv = '72ba90dbddbe8b4913edac9e65302c8f'
// var key = '850562AA32A2AC3201784642191CD96FFF79863BA0CFDBB4D854639D48369411'
const _utils = {}

// demo
_utils.demo = (name) => {
  console.log('hello', name)
}

// 加密
_utils.sjclEncrypt = function (iteration, salt, uin, pwd) {
  // sjcl
  var md5Pwd = md5(pwd)
  var bits = sjcl.codec.hex.toBits(md5Pwd)
  // var start = new Date().getTime()
  var _s2 = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(bits, sjcl.codec.hex.toBits(salt), iteration, 256, hmacSHA256))
  // console.log(s1_1_1_1)

  // console.log(uin.toString(16)); tmp_1_1_1 -> _tmp
  var _tmp = bytesToHex(getIntBytes(uin, 4)) + _s2

  _s2 = sjcl.codec.hex.fromBits(sjcl.misc.pbkdf2(sjcl.codec.hex.toBits(_tmp), sjcl.codec.hex.toBits(salt), iteration, 256, hmacSHA256))
  // console.log(_s2)

  var timestamp = Math.floor(+new Date() / 1000)
  var rndkey = getrandkey(32)
  _tmp = bytesToHex(getIntBytes(0, 4)) + _tmp + bytesToHex(getIntBytes(timestamp, 8)) + rndkey

  // _s2
  var _aes = sjcl.cipher.aes
  var aes = new _aes(sjcl.codec.hex.toBits(_s2))
  var cbc = 'cbc'
  var cbcMode = "CBC mode is dangerous because it doesn't protect message integrity."
  sjcl.beware[cbcMode]()
  var decrypted = sjcl.mode[cbc].encrypt(aes, sjcl.codec.hex.toBits(_tmp), sjcl.codec.hex.toBits(iv))

  var _A1 = sjcl.codec.hex.fromBits(decrypted)
  // var end = new Date().getTime()
  // console.log(end-start);
  return {
    auth: _A1,
    s2: _s2,
    rndkey: rndkey
  }
}

export default _utils
