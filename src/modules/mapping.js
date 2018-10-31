/**
 * 此文件用于各种类型翻译(中文<--> 英文) (数字 <--> 汉字)
 * **/

// 证件类型
export const certificateMap = {
  '-1': {
    status: '',
    defineStaus: ''
  },
  0: {
    status: 'ID_TYPE_HIKD_PERM',
    defineStaus: '香港永久居民身份证'
  },
  1: {
    status: 'ID_TYPE_ID',
    defineStaus: '大陆身份证'
  },
  2: {
    status: 'ID_TYPE_PASSPORT',
    defineStaus: '护照'
  },
  3: {
    status: 'ID_TYPE_CERTIFICATE_OF_INCORPORATION',
    defineStaus: '公司注册证明书编号'
  },
  4: {
    status: 'ID_TYPE_BUSINESS_REGISTERATION',
    defineStaus: '商业登记证件号'
  },
  5: {
    status: 'ID_TYPE_HKID',
    defineStaus: '香港居民身份证'
  },
  6: {
    status: 'ID_TYPE_HKSRA_TRAVELLING_ID',
    defineStaus: '港澳通行证'
  },
  99: {
    status: 'ID_TYPE_OTHER',
    defineStaus: '其他'
  }
}

// 性别
export const sexDefine = {
  '-1': {
    name: ''
  },
  0: {
    name: '男'
  },
  1: {
    name: '女'
  }
}

// 年收入
export const annualIncome = [{'1': '小于10万'}, {'2': '10~30万'}, {'3': '大于30万'}]

// 职业类型
export const careerType = [{'1': '受雇'}, {'2': '自雇'}, {'5': '学生'}, {'6': '家庭主妇'}, {'7': '退休'}]

// 职业信息
export const industryTypeArr = [{'1': ' 金融/银行/保险'}, {'2': '法律/教育培训/医疗/通讯/公共服务/设计/广告传媒'}, {'3': '会计/农业/互联网/房产/工程/进出口贸易/物流/制造业/旅游业'}, {'4': '博彩业/货币兑换/能源及矿业/慈善机构/珠宝/休闲及娱乐业'}, {'5': '消费零售/网上零售及批发/餐饮业/建造业'}]

// 号码前缀
export const phonefix = {
  'CHN': {name: '中国大陆 +86', fix: '+86', id: 1},
  'HKG': {name: '中国香港 +852', fix: '+852', id: 2},
  'MAC': {name: '澳门 +853', fix: '+853', id: 3},
  'TWN': {name: '中国台湾 +886', fix: '+886', id: 4},
  'SGP': {name: '新加坡 +65', fix: '+65', id: 5},
  'MYS': {name: '马来西亚 +60', fix: '+60', id: 6},
  'IDN': {name: '印度尼西亚 +62', fix: '+62', id: 7}
}

// 获得region
export function getPhoneRegion (fix) {
  let _tmpValues = Object.values(phonefix)
  let _tmpKeys = Object.keys(phonefix)
  _tmpValues.forEach((item, index) => {
    if (item.fix === fix) {
      return _tmpKeys[index]
    }
  })
}

// 根据号码,获得region,phoneFix
export function getPhoneInfo (str) {
  var info = {
    fix: '',
    region: ''
  }
  if (str.indexOf('+86') === 0) {
    info.fix = '+86'
    info.region = 'CHN'
  } else if (str.indexOf('+852') === 0) {
    info.fix = '+852'
    info.region = 'HKG'
  } else if (str.indexOf('+853') === 0) {
    info.fix = '+853'
    info.region = 'MAC'
  } else if (str.indexOf('+886') === 0) {
    info.fix = '+886'
    info.region = 'TWN'
  } else if (str.indexOf('+65') === 0) {
    info.fix = '+65'
    info.region = 'SGP'
  } else if (str.indexOf('+60') === 0) {
    info.fix = '+60'
    info.region = 'MYS'
  } else if (str.indexOf('+62') === 0) {
    info.fix = '+62'
    info.region = 'IDN'
  }
  return info
}

// 邮箱后缀
export const emailPostFix = [
  '@qq.com', '@163.com', '@126.com', '@sina.com', '@hotmail.com', '@outlook.com', '@gmail.com'
]
