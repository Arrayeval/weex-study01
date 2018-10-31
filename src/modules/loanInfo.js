// 基本信息页面字段配置
export function getBasicInfoWord (type) {
  if (type === '1') { // 大陆身份证
    return [
      { key: '姓名', value: 'chinese_name' },
      { key: '拼音姓', value: 'last_name' },
      { key: '拼音名', value: 'first_name' },
      { key: '性别', value: 'gender_name' },
      { key: '出生日期', value: 'birthday' },
      { key: '证件类型', value: 'id_type_name' },
      { key: '证件号码', value: 'id_number' },
      { key: '证件到期日', value: 'expirty_date' },
      { key: '出生国家/地区', value: 'birthday_country' },
      { key: '国籍', value: 'nationality' }
      // { key: '税务国家/地区', value: 'tax_country' },
      // { key: '税务编号', value: 'tax_number' }
    ]
  } else if (type === '0' || type === '2') { // 香港永久居民身份证 ,护照
    return [
      { key: '中文姓名', value: 'chinese_name' },
      { key: '英文姓', value: 'last_name' },
      { key: '英文名', value: 'first_name' },
      { key: '性别', value: 'gender_name' },
      { key: '出生日期', value: 'birthday' },
      { key: '证件类型', value: 'id_type_name' },
      { key: '证件号码', value: 'id_number' },
      { key: '出生国家/地区', value: 'birthday_country' },
      { key: '国籍', value: 'nationality' }
      // { key: '税务国家/地区', value: 'tax_country' },
      // { key: '税务编号', value: 'tax_number' }
    ]
  } else if (type === '5') { // 香港居民身份证,大陆身份证(A-4) --- 香港居民身份证,护照(A-3) --- 香港居民身份证,港澳通行证(A-5)
    return [
      { key: '中文姓名', value: 'chinese_name' },
      { key: '英文姓', value: 'last_name' },
      { key: '英文名', value: 'first_name' },
      { key: '性别', value: 'gender_name' },
      { key: '出生日期', value: 'birthday' },
      { key: '证件类型', value: 'id_type_name' },
      { key: '证件号码', value: 'id_number' },
      { key: '补充证件类型', value: 'id_type_assist_name' },
      { key: '补充证件号码', value: 'id_number_assist' },
      { key: '补充证件到期日', value: 'expirty_date_assist' },
      { key: '出生国家/地区', value: 'birthday_country' },
      { key: '国籍', value: 'nationality' }
      // { key: '税务国家/地区', value: 'tax_country' },
      // { key: '税务编号', value: 'tax_number' }
    ]
  }
}

// 基本信息编辑页面字段配置
export function getBasicInfoEditWord (type) {
  return [
    { key: '手机号码', value: 'mobile' },
    { key: '电子邮件', value: 'email' },
    { key: '居住地区(国家及城市)', value: 'addressCountry' },
    { key: '详细地址', value: 'addressDetail' },
    { key: '职业信息', value: 'jobStatus' }
  ]
}

// 编辑页面"资金来源"字段配置
/**
 * 从低位到高位分别是：1.营业收入；2.工资收入；3.劳务报酬；4.家人赠予；5.退休金；6.租金；7.其他收入；8.投资收益；
 *  如果全选的16进制字符是"7f"，即2^0 + 2^1 + 2^2 + 2^3 + 2^4 + 2^5 + 2^6 + 2^7 */
/**
 * "1": 受雇 “2”：自雇 “3”：自由投资者 “4-其他“ ：其他工作状态，其他是用户自己输入的，"5-学生", "6-家庭主妇”，“7-退休”(5,6,7 v3版本之后才有)
*/
export function getFundingSource (careerType) {
  var _tmpArr = [
    {
      label: '工资或奖金',
      value: '2'
    },
    {
      label: '投资回报',
      value: '8'
    },
    {
      label: '劳务报酬',
      value: '3'
    },
    {
      label: '租金收入',
      value: '6'
    },
    {
      label: '家人给予',
      value: '4'
    },
    {
      label: '其他 (请说明)',
      value: '7'
    }
  ]
  if (careerType === '1') { // 受雇
    return _tmpArr
  } else if (careerType === '2') { // 自雇
    let _obj = {label: '营业收入', value: '1'}
    _tmpArr.splice(0, 1, _obj)
  } else if (careerType === '5') { // 学生
    _tmpArr.splice(0, 1)
  } else if (careerType === '6') { // 家庭主妇
    _tmpArr.splice(0, 1)
  } else if (careerType === '7') { // 退休
    let _obj = {label: '退休金', value: '5'}
    _tmpArr.splice(0, 1, _obj)
  }
  return _tmpArr
}

// 基本信息编辑页面字段配置
export const basicInfoConfig = {
  // 请选择职业信息
  careerType: {
    partNav: '请选择职业信息',
    wordConfig: [
      {name: '受雇', subName: '如就职于某公司、单位等', val: '1'},
      {name: '自雇 (自营)', subName: '如自由职业者、小卖铺店主等', val: '2'},
      {name: '学生', subName: '', val: '5'},
      {name: '家庭主妇', subName: '', val: '6'},
      {name: '退休', subName: '', val: '7'}
    ]
  },
  // 行业领域选择
  careerFileSelect: {
    partNav: '请选择所在行业',
    wordConfig: [
      {name: '金融/银行/保险', val: '1'},
      {name: '法律/教育培训/医疗/通讯/公共服务/设计/广告传媒', val: '2'},
      {name: '会计/农业/互联网/房产/工程/进出口贸易/物流/制造业/旅游业', val: '3'},
      {name: '博彩业/货币兑换/能源及矿业/慈善机构/珠宝/休闲及娱乐业', val: '4'},
      {name: '消费零售/网上零售及批发/餐饮业/建造业', val: '5'}
    ]
  },
  // 年收入
  annulIncome: {
    partNav: '请选择年收入',
    wordConfig: [
      {name: '小于10万', val: '1'},
      {name: '10万-30万', val: '2'},
      {name: '大于30万', val: '3'}
    ]
  }
}
