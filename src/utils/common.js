import status from '../modules/status.js'
const loanStatus = status.loanStatus

export function testEmail (value) {
  let reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  value += ''
  if (value) {
    return reg.test(value.trim())
  }
  return false
}

export function testPhone (value) {
  let reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
  return reg.test(value)
}

// 根据不同区号,做不同的验证
export function testPhoneFix (value, region) {
  const regs = {
    CHN: /^[ ]*1\d{10}[ ]*$/,
    HKG: /^[ ]*\d{8}[ ]*$/,
    MAC: /^[ ]*6\d{7}[ ]*$/,
    TWN: /^[ ]*\d{10}[ ]*$/,
    SGP: /^[ ]*\d{1,50}[ ]*$/,
    MYS: /^[ ]*\d{1,50}[ ]*$/,
    IDN: /^[ ]*\d{1,50}[ ]*$/
  }
  return regs[region].test(value)
}

export function addClass (el, className) { // el：元素  className：带新增的样式类名
  if (hasClass(el, className)) {
    return 0
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 判断是否拥有某个样式类
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 判断是否是pc[true] moblie[false]
export function IsPC () {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 贷款记录页映射
export function getLoanHistoryObj (status) {
  if (status === loanStatus.syncEsopBefore || status === loanStatus.syncEsopAfter) {
    return { text: '已提交行权申请，正等待贷款申请邮件通知', button_text: '未开放' }
  } else if (status >= loanStatus.sendEmail && status < loanStatus.csReject) {
    return { text: '尚未提交贷款申请', button_text: '待提交' }
  } else if (status === loanStatus.submitSignature || status === loanStatus.syncLoanSystem) {
    return { text: '审核阶段(1/4)', button_text: '审核中' }
  } else if (status === loanStatus.waitCompanyAppr) {
    return { text: '审核阶段(2/4)', button_text: '审核中' }
  } else if (status === loanStatus.waitRiskAppr) {
    return { text: '审核阶段(3/4)', button_text: '审核中' }
  } else if (status === loanStatus.waitGTJAAppr) {
    return { text: '审核阶段(4/4)', button_text: '审核中' }
  } else if (status === loanStatus.waitClientCfm) {
    return { text: '等待客户确认条款', button_text: '准备汇款' }
  } else if (status === loanStatus.waitOpsAppr || status === loanStatus.syncwaitOpsAppr || status === loanStatus.waitFinanceAppr || status === loanStatus.waitLoanRelease) {
    return { text: '等待汇款', button_text: '汇款中' }
  } else if (status === loanStatus.waitRepay) {
    return { text: '待还款', button_text: '待还款' }
  } else if (status === loanStatus.waitRepayAppr) {
    return { text: '还款审核中', button_text: '还款审核中' }
  } else if (status === loanStatus.waitStockAppr) {
    return { text: '卖股中', button_text: '卖股中' }
  } else if (status === loanStatus.waitPayoff) {
    return { text: '未还清', button_text: '未还清' }
  } else if (status === loanStatus.waitStock) {
    return { text: '等待发股', button_text: '待发股' }
  } else if (status === loanStatus.sendStock) {
    return { text: '已发股', button_text: '已发股' }
  } else if (status === loanStatus.csReject) {
    return { text: '修改资料', button_text: '待修改' }
  } else if (status >= loanStatus.csPmtReject && status <= loanStatus.gtjaPmtReject) {
    return { text: '申请未能通过', button_text: '未通过' }
  } else if (status === loanStatus.appExpired) {
    return { text: '申请已过期', button_text: '已过期' }
  } else if (status === loanStatus.clientCancel || status === loanStatus.syncClientCancel) {
    return { text: '申请已取消', button_text: '已取消' }
  } else {
    return { text: '', button_text: '' }
  }
}

// 申请结果详情页映射
export function getApplicationDetail (type, createTime, i) {
  let obj = ''
  switch (type) {
    case 'oneQuarter':
      obj = { text: '您已提交贷款申请，已进入审核阶段1/4。', pro: [{vPro: 100, vImage: 'fill'}, {vPro: 0, vImage: 'fill'}, {vPro: 0, vImage: 'unfill'}] }
      break
    case 'twoQuarter':
      obj = { text: '您的贷款申请已经进入审核阶段2/4。', pro: [{vPro: 100, vImage: 'fill'}, {vPro: 0, vImage: 'fill'}, {vPro: 0, vImage: 'unfill'}] }
      break
    case 'threeQuarter':
      obj = { text: '您的贷款申请已经进入审核阶段3/4。', pro: [{vPro: 100, vImage: 'fill'}, {vPro: 0, vImage: 'fill'}, {vPro: 0, vImage: 'unfill'}] }
      break
    case 'fourQuarter':
      obj = { text: '您的贷款申请已经进入审核阶段4/4。', pro: [{vPro: 100, vImage: 'fill'}, {vPro: 0, vImage: 'fill'}, {vPro: 0, vImage: 'unfill'}] }
      break
    case 'waitForClientConfirm':
      const time = new Date(createTime)
      time.setDate(time.getDate() + 4)
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      if (month < 10) month = '0' + month
      if (day < 10) day = '0' + day
      const dateText = `${year}年${month}月${day}日`
      let ConfirmText = ''
      if (i === 0) ConfirmText = '您的贷款申请将于' + dateText + '进入汇款阶段，在此之前，您可以<span style="color: #499EF0;font-weight: bold;">取消贷款</span>。'
      else ConfirmText = '您的贷款申请将于' + dateText + '进入汇款阶段，在此之前，您可以取消贷款。'
      obj = { text: ConfirmText, pro: [{vPro: 100, vImage: 'fill'}, {vPro: 50, vImage: 'fill'}, {vPro: 0, vImage: 'unfill'}], highLine: true }
      break
    case 'waitLoanRelease':
      obj = { text: '正在向您公司汇入行权成本。', pro: [{vPro: 100, vImage: 'fill'}, {vPro: 100, vImage: 'fill'}, {vPro: 0, vImage: 'fill'}] }
      break
    case 'clientCanceled':
      let CanceledText = ''
      if (i === 0) CanceledText = '您已取消贷款申请，如有疑问请<span style="color: #499EF0;font-weight: bold;">联系我们</span>。'
      else CanceledText = '您已取消贷款申请，如有疑问请联系我们。'
      obj = { text: CanceledText, pro: [], cancel: true }
      break
    case 'applicationExpired':
      let ExpiredText = ''
      if (i === 0) ExpiredText = '您的贷款申请已过期，如有疑问请<span style="color: #499EF0;font-weight: bold;">联系我们</span>。'
      else ExpiredText = '您的贷款申请已过期，如有疑问请联系我们。'
      obj = { text: ExpiredText, pro: [], expired: true }
      break
    case 'oneQuarterAgain':
      obj = { text: '您的贷款申请已再次回到审批阶段1/4，我们将会重新核对申请资料。', pro: [{vPro: 100, vImage: 'fill'}, {vPro: 0, vImage: 'fill'}, {vPro: 0, vImage: 'unfill'}], highLine: true }
      break
  }
  return obj
}

// 设置cookie
export function setCookie (name, value, expires, domain, path, secure) {
  let cookieText = ''
  cookieText += encodeURIComponent(name) + '=' + encodeURIComponent(value)
  if (expires instanceof Date) {
    cookieText += '; expires=' + expires.toGMTString()
  }
  if (path) {
    cookieText += '; path=' + path
  } else {
    cookieText += '; path=/'
  }
  if (domain) {
    cookieText += '; domain=' + domain
  }
  if (secure) {
    cookieText += '; secure'
  }
  document.cookie = cookieText
}

// 从cookie中获取数据
export function getCookie (name) {
  let arr = ''
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}

// 删除cookie
export function delCookie (name) {
  var expires = new Date()
  expires.setTime(expires.getTime() - 1)
  var value = getCookie(name)
  if (value !== null) {
    let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; expires=' + expires.toGMTString()
    document.cookie = cookieText
  }
}

// 16进制转2进制 字符串
export function hexToBin (value) {
  if (!value) {
    return value
  }
  return parseInt(value, 16).toString(2)
}

// 2进制转16进制 字符串
export function binToHex (value) {
  if (!value) {
    return value
  }
  return parseInt(value, 2).toString(16)
}

export function debounce (func, wait, immediate) {
  var timeout
  return function debFn (...args) {
    // console.log('>>>>>>debFn ' + +new Date());
    var context = this
    var later = function laterFn () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// 数字添加前缀[大于0：+,小于0： -]
export function numFix (num, toFixed = true, fixNum = 3) {
  if (!isNumber(num)) {
    return num
  }
  if (typeof num !== 'number') {
    num = Number(num)
  }
  if (num >= 0) {
    return '+' + toThousands(num, toFixed, fixNum)
  } else {
    return toThousands(num, toFixed, fixNum)
  }
}

/**
 * isNumber
 * 合理的数字，数字字符串
 * */
export function isNumber (n) {
  var reg = /^-?[0-9]+.?[0-9]*$/
  return reg.test(n)
}

/**
 * @数字千分符
 * n: 将被处理的值
 * isToFixed: 标记是否进行保留小数位处理(默认true)
 * limitNum: 保留的小数位(默认2位小数)
 * **/
export function toThousands (n, isToFixed = true, limitNum = 2) {
  if (!isNumber(n)) {
    return n
  }
  var flag = true
  if (Number(n) < 0) {
    flag = false
    n = Math.abs(n)
  }
  if (isToFixed) {
    n = numToFixed(n, limitNum)
  }
  var re = /\d{1,3}(?=(\d{3})+$)/g
  var n1 = (n || 0).toString().replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) { return s1.replace(re, '$&,') + s2 })
  return flag ? n1 : '-' + n1
}

// 保留两位小数
export function numToFixed (num, n) { // num：数字 n：保留的位数
  return toFixed(num, n)
}

/**
 * 四舍五入（解决toFixed的精度异常）
 * @param {Number} num 待处理的小数
 * @param {Number} s 保留小数位数
 * @returns {String} 返回字符串
 */
export function toFixed (num, s) {
  // 非数值类型
  if (!isNumber(num)) {
    return num
  }
  if (typeof s !== 'number') {
    return num
  }
  if (typeof num !== 'number') {
    num = Number(num)
  }

  // 保留小数位(0 至 100)
  if (s < 0 || s > 100) {
    return ''
  }

  // 取正
  let value = num < 0 ? -num : num
  // 取整
  s = Math.floor(s)

  var times = Math.pow(10, s)
  var des = (value * (times * 10) + 5) / 10
  des = parseInt(des, 10) / times
  if (num < 0) {
    return '-' + des.toFixed(s)
  }
  return des.toFixed(s)
}

/**
 * @日期格式转换fun
 * t: new Date(time)
 * f: '/' '-' '.' 连接符,可配 ['yyyy-MM-dd hh:mm:ss']
 * flag: true/false 表示是否转换为 'xxxx年xx月xx日'
 * 使用方式: selfDateFormat(new Date(t), 'yyyy/MM/dd hh:mm:ss', true)
 */
export function selfDateFormat (t, f, flag) {
  if (t.toString().indexOf('Invalid Date') > -1 || t instanceof (Date) === false) { // Invalid return
    return ''
  }
  var obj = {
    yyyy: t.getFullYear(),
    yy: ('' + t.getFullYear()).slice(-2),
    M: t.getMonth() + 1,
    MM: ('0' + (t.getMonth() + 1)).slice(-2),
    d: t.getDate(),
    dd: ('0' + t.getDate()).slice(-2),
    hh: ('0' + t.getHours()).slice(-2),
    h: t.getHours(),
    mm: ('0' + t.getMinutes()).slice(-2),
    m: t.getMinutes(),
    ss: ('0' + t.getSeconds()).slice(-2),
    s: t.getSeconds()
  }
  var tarResult = ''
  tarResult += f.replace(/([a-z]+)/ig, function (r) {
    return obj[r]
  })
  if (flag) {
    var mark = f.charAt(f.indexOf('M') - 1)
    var markArr = ['年', '月', '日']
    var _tarResult = ''
    tarResult = tarResult.split(' ')
    tarResult[0].split(mark).forEach((item, index) => {
      _tarResult += item + markArr[index]
    })
    if (tarResult.length > 2) { // hours min sec
      tarResult[1] = tarResult[tarResult.length - 1]
    } else if (tarResult.length === 1) { // no hour min sec
      tarResult[1] = ''
    }
    tarResult = _tarResult + ' ' + tarResult[1]
  }
  return tarResult
}

// 修改title
export function setTitleHack (t) {
  document.title = t
  let iframe = document.createElement('iframe')
  iframe.style.visibility = 'hidden'
  iframe.style.width = '1px'
  iframe.style.height = '1px'
  iframe.src = ''
  iframe.onload = function () {
    setTimeout(function () {
      iframe.remove()
    }, 10)
  }
  document.body.appendChild(iframe)
}

// 手机唤起app[weixin://, mqq://]
export function callApp (urlScheme, downloadUrl) { // urlScheme: app, downloadUrl: app下载地址
  var browser = {
    versions: (function () {
      var u = navigator.userAgent
      // var app = navigator.appVersion
      return {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, /* 苹果、谷歌内核 */
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, /* 火狐内核 */
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), /* 是否为移动终端 */
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /* ios终端 */
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, /* android终端或者uc浏览器 */
        iPhone: u.indexOf('iPhone') > -1, /* 是否为iPhone或者QQHD浏览器 */
        iPad: u.indexOf('iPad') > -1, /* 是否iPad */
        webApp: u.indexOf('Safari') === -1, /* 是否web应该程序，没有头部与底部 */
        souyue: u.indexOf('souyue') > -1,
        superapp: u.indexOf('superapp') > -1,
        weixin: u.toLowerCase().indexOf('micromessenger') > -1,
        Safari: u.indexOf('Safari') > -1
      }
    }()),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  if (browser.versions.ios) {
    window.location.href = urlScheme
    let t = Date.now()
    setTimeout(function () {
      if (Date.now() - t < 1000) { // 下载地址
        window.location.href = downloadUrl
        window.location.href = downloadUrl
      } else {
        window.close()
      }
    }, 1000)
  } else if (browser.versions.android) {
    let t = Date.now()
    window.location.href = urlScheme
    setTimeout(function () {
      if (Date.now() - t < 2000) {
        window.location.href = downloadUrl
      } else {
        window.close()
      }
    }, 1000)
  }
}

// 跳转app 应用市场
export function jumpToMarket (downloadUrl) {
  window.location = downloadUrl
}

// 空内容处理
export function nullContent (val) {
  if (val === '' || val === null || val === undefined) {
    return '--'
  }
  return val
}

/**
 *js获取一个元素的样式属性
 *obj: dom元素
 *attr: 样式属性(height,width)
 **/
export function getStyle (obj, attr) {
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {
    return getComputedStyle(obj, false)[attr]
  }
}

/**
 *控制元素滚动
 **/
export function touchMoveElement (el) {
  var translateStartY = 0
  var translateEndYTemp = 0
  var windowInnerHeight = window.innerHeight
  var elHeight = getStyle(el, 'height').slice(0, getStyle(el, 'height').indexOf('px'))
  // 每一次触发'复位'
  el.style.transform = 'translate(0, ' + 0 + 'px)'
  el.style.transition = 'all 0.1s ease'

  el.addEventListener('touchstart', (e) => {
    // 初始位置
    translateStartY = e.touches[0].pageY
  })

  el.addEventListener('touchmove', (e) => {
    e.preventDefault()
    // if (windowInnerHeight < elHeight + 20) {
    // 滑动间距
    translateEndYTemp = e.touches[0].pageY - translateStartY
    el.style.transform = 'translate(0, ' + translateEndYTemp + 'px)'
    el.style.transition = 'all 0.1s ease'
    // }
  })

  el.addEventListener('touchend', (e) => {
    // 防止无限滑动(复位)
    // if (translateEndYTemp < -60) {
    //   translateEndYTemp = -60
    // }
    if (translateEndYTemp < Number(windowInnerHeight - elHeight)) {
      translateEndYTemp = Number(windowInnerHeight - elHeight) - 50
    }
    if (translateEndYTemp > 0) {
      translateEndYTemp = 0
    }
    el.style.transform = 'translate(0, ' + translateEndYTemp + 'px)'
    el.style.transition = 'all 0.1s ease'
  })
}

// export function translateRule (dp) {
//   return dp * 750 / ( deviceWidth / scale );
// }

/**
 *针对weex的多端本地资源加载
 **/
export function getImageFile (imageName) {
  if (!weex || !weex.config || !weex.config.env) {
    return
  }
  let _dotPoint = (imageName + '').lastIndexOf('.')
  let _pureFileName = (imageName + '').slice(0, _dotPoint)
  // let _imageFormat = (imageName + '').slice(_dotPoint)
  // 平台信息
  let _platform = weex.config.env.platform
  if (_platform === 'android') {
    let _filePrefix = 'local:///'
    return _filePrefix + _pureFileName
  }
  if (_platform === 'iOS') {
    return ''
  }
  if (_platform === 'Web') {
    let _filePrefix = '../../src/assets/icons/'
    return _filePrefix + imageName
  }
}

/*
*针对路由的封装
* 在调用的时候要进行pc区分，应为path会有所不同
*/
export function goPageRoute (router, navigatorww, pathWebObj, pathNative) { // router: web,h5端的this.$router, navigation:原生weex 的navigation
  // const env = weex.config.env || WXEnvironment
  // var navigator = weex.requireModule('navigator')
  // navigatorww.push({url: pathNative, animated: 'true'})
  weex.config.env.platform === 'Web' ? router.push({...pathWebObj}) : (() => {
    var navigator = weex.requireModule('navigator')
    navigator.push({url: pathNative, animated: 'true'})
  })()
}
