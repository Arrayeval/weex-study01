// http 错误状态码
export default {
  system_err: -1, // 系统错误
  common: 30000, // 通用错误
  wrong_parameter: 30001, // 参数错误
  db_err: 30005, // 数据库错误
  sessionExpired: 31005, // 登录失效
  pwd_err: 7003, // 密码错误
  user_unactivated: 7016, // 未开户的邮箱账号
  formbid_sell: 30031, // 卖股禁售
  order_volumne: 30029 // 超出最大卖股数
}
