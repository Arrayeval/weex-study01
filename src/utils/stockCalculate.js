/**
 * @Desc:   卖股交易数量，交易费用，佣金等计算
 * @Author: Bob
 * @Date:   2018-09-04
 */

import { toFixed } from './common.js'

/**
 * @description 获取卖股计算结果
 * @param {Object} options 股票配置
 * {
 *  price: 市场价
 *  shouldPayed: 剩余应还总额
 *  sharesNumber: 每手股数
 *  cmsRate: 佣金比例
 *  highestCms: 最高佣金
 *  minimumCms: 最低佣金
 *  moreRate: 多卖比例 （非必填，默认1.05）
 * }
 */
export function getCalculateResults (options, debug = false) {
  // 返回值
  let results = {
    orderNum: 0, // 预估卖出数量
    orderAmount: 0, // 预估订单总金额
    feesAndTaxes: 0 // 预估交易佣金及税费
  }

  // 校验参数
  let keys = ['price', 'shouldPayed', 'sharesNumber', 'cmsRate', 'highestCms', 'minimumCms']
  for (let k of keys) {
    // 无效参数，直接返回
    if (options[k] === void 0 || isNaN(options[k])) {
      return results
    }
    // 转成数字
    options[k] = Number(options[k])
  }

  // 每手股数必须大于0
  if (options.sharesNumber <= 0 || options.price <= 0) {
    return results
  }

  // 设置多卖比例默认值
  options.moreRate = options.moreRate || 1.05
  options.price = Number(toFixed(options.price, 3))

  // 初始订单数量 = 剩余应还总额/市场价
  let orderNum = Math.floor(options.shouldPayed / options.price)
  // 订单价格
  let orderAmount = Number(toFixed(orderNum * options.price, 2))
  // 获取税费
  let feesAndTaxes = getFeesAndTaxes(orderAmount, options)

  // 尝试次数
  let count = 1000
  // 接近订单数量
  orderNum = orderNum + Math.floor(feesAndTaxes / options.price)
  if (debug) console.log('接近订单数：', orderNum)

  // 逐步
  for (let i = 0; i < count; i++) {
    orderNum = orderNum + 1
    orderAmount = Number(toFixed(orderNum * options.price, 2))
    feesAndTaxes = getFeesAndTaxes(orderAmount, options)
    // 剩余应还+税费<订单金额
    if (options.shouldPayed + feesAndTaxes <= orderAmount) {
      if (debug) console.log('实际订单数：', orderNum)
      break
    }
  }

  // 每首股数的整数倍
  orderNum = Math.ceil(orderNum * options.moreRate / options.sharesNumber) * options.sharesNumber
  orderAmount = Number(toFixed(orderNum * options.price, 2))
  feesAndTaxes = getFeesAndTaxes(orderAmount, options)
  // 计算结果
  results.orderNum = orderNum
  results.orderAmount = orderAmount
  results.feesAndTaxes = feesAndTaxes
  if (debug) {
    console.log('最终订单数：', orderNum)
    console.log('最终返回值：', results)
  }
  return results
}

/**
 * @description 获取税费
 * @param {Number} orderAmount 订单金额
 * @param {Object} options 股票配置
 * @returns {Number} 返回各项税费之和
 * */
export function getFeesAndTaxes (orderAmount, options, debug = false) {
  // 交易佣金 = 订单金额*佣金比例
  let fees = orderAmount * options.cmsRate / 100
  // 最低佣金
  fees = Math.max(fees, options.minimumCms)
  // 最高佣金
  if (options.highestCms) {
    fees = Math.min(fees, options.highestCms)
  }

  // 交易佣金
  fees = Number(toFixed(fees, 2))

  // 印花税
  let stampTax = Math.ceil(Math.max(orderAmount * 0.001, 1))

  // 交易征费
  let tradeLevy = Number(toFixed(orderAmount * 0.000027, 2))

  // 交易费
  let tradeFee = Number(toFixed(orderAmount * 0.00005 + 0.5, 2))

  // 中央结算系统股份交收费
  let centerFee = Number(toFixed(Math.max(orderAmount * 0.00005, 5.5), 2))

  if (debug) {
    console.log(`交易佣金: ${fees}`)
    console.log(`印花税: ${stampTax}`)
    console.log(`交易征费: ${tradeLevy}`)
    console.log(`交易费: ${tradeFee}`)
    console.log(`中央结算系统股份交收费: ${centerFee}`)
    console.log(`费用合计: ${Number(toFixed(fees + stampTax + tradeLevy + tradeFee + centerFee, 2))}`)
  }

  // 订单交易费用及税项 = 交易佣金+印花税+交易征费+交易费+中央结算系统股份交收费
  return Number(toFixed(fees + stampTax + tradeLevy + tradeFee + centerFee, 2))
}
