// 主要用于还款流程字段,弹框,页面内容的配置

// 现金还款提交失败错误信息
export const cashSubmitErrMsg = {
  'aheadTime': `当前贷款处于不可提前还款阶段，如有疑问请联系我们。
  <p>(该贷款最新状态非待还款或者贷款已到期)</p>`,
  'otherWay': `我们正在审核您的还款申请，在审核完成前您暂时无法再提交现金还款申请，如有疑问请联系我们。`,
  'defaultMsg': `提前还款失败，如有疑问请联系我们。`
}

// 卖股还款提交失败错误信息
export const stockSubmitErrMsg = {
  'aheadTime': `当前贷款处于不可提前还款阶段，如有疑问请联系我们。`,
  'exceedStock': `提交失败，预估卖出股数超过当前剩余最大可卖股数，如有疑问请联系我们。`,
  'otherWay': `正在处理您的还款申请，无法再提交卖股还款申请。如有疑问请联系我们。`,
  'exceedAmount': `很抱歉，贵司当前累计待处理卖股还款订单的总股数已超单日最大可卖股数，您无法进行卖股还款，请选择现金还款。如需卖股还款请在明天提交申请（若当前非交易日，则请于最近交易日的第二天提交申请）。如有疑问请联系我们。`,
  'defaultMsg': `提前还款失败，如有疑问请联系我们。`
}

// 卖股还款禁售期
export function lockupData (date) {
  const text = `很抱歉，您当前正处于禁售期，无法进行卖股还款。如需在解禁日前进行还款，请选择现金还款。如有疑问请联系我们。
  <p style="margin-top: 0.15rem;">解禁日：${date}</p>`
  return text
}

// 股票非正常状态文案提示
export function getStockStatusNote (stockStatus) {
  let stockStatusDes = ''
  switch (stockStatus) {
    case 'U':
      stockStatusDes = `该股票处于待上市状态，无法计算卖出股数，请在股票上市后再进行计算`
      break
    case 'S':
      stockStatusDes = `该股票处于停牌状态，无法计算卖出股数，请在股票恢复交易时再进行计算`
      break
    case 'D':
      stockStatusDes = `该股票已退市，无法计算卖出股数，请在股票恢复交易时再进行计算`
      break
    case 'Z':
      stockStatusDes = `该股票暂停上市，无法计算卖出股数，请在股票恢复交易时再进行计算`
      break
  }
  return {
    contentDes: stockStatusDes,
    btnNote: `我知道了`
  }
}

// 股票状态处理
export function dealStockStatus (stockStatus) {
  if (stockStatus === '') {
    return ''
  } else if (stockStatus === 'D') {
    return '退市'
  } else if (stockStatus === 'S') {
    return '停牌'
  } else if (stockStatus === 'U') {
    return '待上市'
  } else if (stockStatus === 'Z') {
    return '暂停上市'
  }
}

// 概念定义
export const conceptionDefine = {
  sellCount: {
    definition: '卖出数量',
    des: `<p>卖出数量=还清应还总额并扣除交易费用及税项的最小卖出手数对应的股数</p>`,
    subDes: `另外，卖出股票还清贷款并扣除交易费用及税项后，如仍有多余的钱，将会和股票一起存入您的账户`
  }
}

// 还款银行信息
export const bankDetail = {
  intro: `请使用网银或于柜台自行汇款至以下账户`,
  waitPayInfo: {
    count: {name: '待还金额', val: 'amountPayAble', preFix: 'HKD '},
    des: `需留意跨行转账银行可能会收取手续费，请确保到账金额等于或大于待还总额。如实际到账金额大于应还总额，我们将在发股阶段将多余金额存入您的股票账户。`
  },
  bankInfo: [
    {name: '收款银行', key: '汇丰银行'},
    {name: '账户名(中)', key: '云锋证券有限公司'},
    {name: '账户名(英)', key: 'Yunfeng Securities Limited'},
    {name: '账户号码', key: '848-472957-001'},
    {name: 'SWIFT CODE', key: 'HSBCHKHH'},
    {name: '银行地址(中)', key: '香港中环皇后大道中 1 号'},
    {name: '银行地址(英)', key: '1 QUEEN’S ROAD, CENTRAL, HONG KONG'},
    {name: '通讯地址', key: 'Suites 3201-3204, One Exchange Square, 8 Connaught Place, Central, Hong Kong'}
  ],
  noteWord: {
    title: `温馨提示：`,
    content: [
      `1.  请不要使用他人银行账户汇款，汇款人与贷款申请人必须是同一人。`,
      `2. 请保留汇款凭证（网银转账请截图，柜台转账请保留凭证)，汇款后请上传凭证。`,
      `3.汇款时，若您的银行系统已提供银行编号供您选择，输入账户号码时无须输入银行编号XXX，如未提供则需输入（具体内容请见下方柜台存入指引）。`
    ]
  },
  // 弹框温馨提示
  alertModalContent: {
    title: '温馨提示',
    cotent: `鉴于最近有大量客户反映通过大陆地区银行汇款被退回几率倍增，请留意汇款被退回可能会产生手续费及汇兑损失。如发生资金退回情况，请及时联络银行处理。我司恕不负责任何银行向客户所收取任何形式的手续费或额外收费及任何汇兑损失。如您近期有还款需求，建议提前办理香港银行卡。`,
    quesTitle: '如何办理香港银行卡？',
    sureBtn: '确定'
  },
  // 存入柜台
  depInCounter: {
    partNav: '柜台存入指引'
  },
  // 下一步
  nextBtn: {
    btnDes: '下一步，上传汇款凭证'
  }
}

// 贷款详情信息
export function getLoanViewInfo (loanStatus) { // loanStatus:表示贷款状态
  let status = require('@/modules/status.js')
  var loanInfo = [
    {name: '贷款编号', key: 'exercise_id', preFix: '', afterFix: ''},
    {name: '提交申请日', key: 'submit_date', preFix: '', afterFix: ''},
    { name: '贷款金额',
      key: 'loan_payable',
      preFix: 'HKD ',
      afterFix: '',
      subInfo: [
        {name: '行权成本', key: 'exercise_cost', preFix: 'HKD ', afterFix: ''},
        {name: '税费', key: 'tax', preFix: 'HKD ', afterFix: ''}
      ]
    },
    {name: '年利率', key: 'interest_rate', preFix: '', afterFix: '%'},
    {name: '贷款期', key: 'duration', preFix: '', afterFix: '个月'},
    {name: '总利息', key: 'amount_interest', preFix: 'HKD ', afterFix: ''},
    {name: '计息日', key: 'interest_start_date', preFix: '', afterFix: ''},
    {name: '应还金额', key: 'amount_payable', preFix: 'HKD ', afterFix: ''},
    {name: '实际到账金额', key: 'payed_amount', preFix: 'HKD ', afterFix: ''},
    {name: '还清日', key: 'repay_date', preFix: '', afterFix: ''},
    {name: '剩余应还金额', key: 'surplus_play_amount', preFix: 'HKD ', afterFix: ''}
  ]
  if (Number(loanStatus) === status.default.loanStatus.sendStock || Number(loanStatus) === status.default.loanStatus.waitStock) { // sendStock :已发股（已还清）待发股
    loanInfo.pop()
  } else { // （未还清）
    loanInfo.splice(loanInfo.length - 2, 1)
  }
  return loanInfo
}

export const hk = [
  {
    title: '汇款金额',
    emptyTip: '请输入汇款金额',
    errTip: '请输入正确的汇款金额',
    value: '',
    isShowIcon: false,
    isEmpty: false,
    isError: false,
    isHk: false
  },
  {
    title: '银行',
    emptyTip: '请选择银行',
    errTip: '请输入正确的银行名称(如:中国银行)',
    value: '',
    isShowIcon: false,
    isEmpty: false,
    isError: false,
    isHk: true
  },
  {
    title: '银行账号',
    emptyTip: '请输入银行账号',
    errTip: '请输入正确的银行账号',
    value: '',
    isShowIcon: false,
    isEmpty: false,
    isError: false,
    isHk: false
  }
]

export const cn = [
  {
    title: '汇款金额',
    emptyTip: '请输入汇款金额',
    errTip: '请输入正确的汇款金额',
    value: '',
    isShowIcon: false,
    isEmpty: false,
    isError: false,
    isHk: false
  },
  {
    title: '银行',
    emptyTip: '请输入银行名称(如:中国银行)',
    errTip: '请输入正确的银行名称(如:中国银行)',
    value: '',
    isShowIcon: false,
    isEmpty: false,
    isError: false,
    isHk: false
  },
  {
    title: '银行账号',
    emptyTip: '请输入银行账号',
    errTip: '请输入正确的银行账号',
    value: '',
    isShowIcon: false,
    isEmpty: false,
    isError: false,
    isHk: false
  }
]

export const hkBankList = [
  '中国银行(香港)有限公司', '交通银行', '东亚银行有限公司', '中信银行国际有限公司',
  '中国建设银行香港分行', '集友银行有限公司', '创兴银行有限公司', '花旗银行(香港)有限公司',
  '大新银行有限公司', '星展银行(香港)有限公司', '富邦银行(香港)有限公司', '恒生银行有限公司',
  '香港上海汇丰银行有限公司', '中国工商银行(亚洲)有限公司', '中国工商银行香港分行', '南洋商业银行有限公司',
  '华侨银行有限公司', '大众银行(香港)有限公司', '上海商业银行有限公司', '渣打银行(香港)有限公司',
  '大生银行有限公司', '大有银行有限公司', '永隆银行有限公司', '招商银行香港分行', '民生银行'
]

// 现金还款记录详情字段配置
export const repayRecordViewConfig = {
  completeInfo: [
    {name: '实际到账日期', key: 'update_time', preFix: ''},
    {name: '实际到账金额', key: 'actual_amount', preFix: 'HKD '}
  ],
  baseInfo: [
    {name: '提交日期', key: 'request_time', preFix: ''},
    {name: '汇款币种', key: '', defaultKey: '港币'},
    {name: '汇款金额', key: 'amount', preFix: 'HKD '},
    {name: '银行', key: 'from_bank_name', preFix: ''},
    {name: '银行账号', key: 'from_bank_number', preFix: ''}
  ],
  uploadCertificate: {
    partNav: '上传凭证'
  },
  alertInfo: {
    actualCash: ' *如实际到账金额大于应还总额，我们将在发股阶段将多余金额存入您的股票账户中'
  }
}

export const bankType = {
  cn: 'China MainLand Bank',
  hk: 'Hong Kong Bank',
  other: 'Other Bank'
}

export const bankTypeEnum = {
  'China MainLand Bank': '1',
  'Hong Kong Bank': '2',
  'Other Bank': '3'
}

// 卖股还款记录详情字段
export const sRepayRecordViewConfig = {
  title: '详情',
  recordViewTitle (statusFlag) {
    let detailTitle = ''
    switch (statusFlag) {
      case 'finishDeal':
        detailTitle = '详情(已结算)'
        break
      case 'processing':
        detailTitle = '详情(卖股中)'
        break
      case 'cancelDeal':
        detailTitle = '详情(已撤单)'
        break
      default:
        detailTitle = ''
    }
    return detailTitle
  },
  cancelDealModal: {
    contentText: '是否确认撤销订单',
    cancelText: '取消',
    sureText: '确认撤销'
  },
  cancelInfo: [
    {name: '撤单时间', key: 'update_time'}
  ],
  completeInfo: [
    {name: '结算日期', key: 'tx_date'},
    {name: '实际到账金额', key: 'actual_amount', preFix: 'HKD', isNum: true, isFix: true},
    {name: '每股成交均价', key: 'final_price', preFix: 'HKD', isNum: false, isFix: false},
    {name: '最终成交量', key: 'actual_volume', afterFix: '股', isNum: true, isFix: true, limitNum: 4},
    {name: '实际成交金额', key: 'actual_total_price', preFix: 'HKD', isNum: true, isFix: true},
    {name: '实际扣除股数', key: 'final_volume', afterFix: '股', disappearItem: false, isNum: true, isFix: false},
    {name: '预扣股数', key: 'withholding_volume', afterFix: '股', disappearItem: false, isNum: true, isFix: true, limitNum: 4},
    {name: '实际交易费用及税项', key: 'final_fees_and_taxes', noteMark: true, preFix: 'HKD', showKey: 'feesAndTaxes', isNum: true, isFix: true}
  ],
  baseInfo: [
    {name: '提交时间', key: 'request_time'},
    {name: '订单类型', key: 'order_type', defaultVal: '市价成交'},
    {name: '预估卖出数量', key: 'order_volume', afterFix: '股', isNum: true, isFix: false},
    {name: '预估订单总金额', key: 'order_total_price', preFix: 'HKD', isNum: true, isFix: true},
    {name: '预估交易费用及税项', key: 'order_fees_and_taxes', preFix: 'HKD', noteMark: true, showKey: 'feesAndTaxes', isNum: true, isFix: true}
  ],
  alertInfo: {
    actualCash: ' *如实际到账金额大于应还总额，我们将在发股阶段将多余金额存入您的股票账户中'
  },
  btnText (flag) {
    if (flag) {
      return '可撤单'
    } else {
      return '已超过可撤单时间'
    }
  },
  explainText: '名词解释'
}

// 卖股订单字段
export const sStockOrderConfing = {
  introOrder: '根据待还金额与股票现价估算卖出股数',
  introReview: '请确认订单信息',
  refreshNotice: '*行情存在15分钟延迟，请手动刷新查看实时行情',
  getInfoErrMsg: '行情刷新失败，请稍后再试',
  waitPayInfo: {
    count: {name: '待还金额', val: 'amountPayAble', preFix: 'HKD '},
    des: `需留意卖股还款无法完全相等于待还金额，我们将以市价交易的方式卖出尽量少的股票进行还款。如实际成交金额扣除交易费用及税项后大于应还总金额，我们将在发股阶段将多余金额存入您的股票账户。`
  },
  baseInfo: [
    {name: '股票名称', key: 'stockName', noteMark: false},
    {name: '订单类型', key: 'orderType', defaultVal: '市价成交', noteMark: true},
    {name: '预估卖出数量', key: 'orderNum', noteMark: true, afterFix: '股', preFix: '', isNum: true, isFix: false},
    {name: '预估订单总金额', key: 'orderAmount', noteMark: true, preFix: 'HKD', afterFix: '', isNum: true, isFix: true},
    {name: '预估交易费用及税项', key: 'feesAndTaxes', noteMark: true, preFix: 'HKD', afterFix: '', isNum: true, isFix: true}
  ],
  timeDifNote (timeFlag) {
    let timeStart = ''
    let timeEnd = ''
    if (timeFlag >= '08:45' && timeFlag < '12:45') {
      timeStart = `最近交易日下午1:00`; timeEnd = `最近交易日中午12:45前`
    } else if (timeFlag < '08:45' && timeFlag >= '00:00') {
      timeStart = `最近交易日上午9:00`; timeEnd = `最近交易日上午8:45前`
    } else if (timeFlag >= '12:45' && timeFlag < '24:00') {
      timeStart = `最近交易日上午9:00`; timeEnd = `最近交易日上午8:45前`
    }
    return {
      des: `*若今天非交易日，我们将在下一个最近的交易日进行卖出交易，您可以在当天早上8:45前撤销订单`,
      timeStartConfig: {
        time: timeStart,
        name: '卖股时间：'
      },
      timeEndConfig: {
        time: timeEnd,
        name: '可撤单时间：'
      }
    }
  },
  // dealTimeTip: `*若今天非交易日，我们将在下一个最近的交易日进行卖出交易`,
  sincereTip: `*预估卖出数量与预估订单总金额仅供参考，实际交易将产生成交均价、成交量、交易费用及税项，请以最终实际成交的结果为准。卖出股票还清贷款并扣除交易费用及税费后多出的金额将在发股阶段将存入您的股票账户。`,
  modalNote: {
    title: '注意',
    noteContent: [
      `1.终止交易：为了保护用户，若卖出交易日当天股价下跌至前一个交易日收盘价的95%时，我们将停止任何的卖出交易；当股价高于前一个交易日收盘价的95%时，我们将持续以市价卖出对应的股票数`,
      `2.最终成交价为当天以市价成交的方式卖出贵司的总成交金额除以总成交股数所得，即最终成交价为成交均价。同一天市价成交的用户为同一成交价。`
    ]
  },
  btnText: ['取消', '确认', '确认提交', '下一步，确认订单信息', '帮我计算卖出股数']
}

// 定义卖股还款
export const sStockRepaymentDefinition = {
  title: '什么是卖股还款',
  desPart: {
    marketPriceDeal: {
      imgLogo: require('@/assets/LoanRepay/market_order.svg'),
      title: '市价成交',
      key: 'market-price',
      contentDes: '开盘前收集用户交易指示，开盘后按照交易时市场买入价执行交易。如实际成交金额扣除交易费用及税项后大于应还总金额，我们将在发股阶段将多余金额存入您的有鱼股票账户中。'
    },
    dealTime: {
      imgLogo: require('@/assets/LoanRepay/deal_time.svg'),
      title: '交易时间',
      key: 'deal-timer',
      contentDes: [
        {timer: '早上8:45前提交', dealDes: '早上开盘后开始交易'},
        {timer: '早上8:45至中午12:45提交', dealDes: '下午开盘后开始交易'},
        {timer: '中午12:45后提交', dealDes: '下个交易日早上开盘后开始交易'}
      ],
      dealNote: '*非交易日提交则在下个交易日早上开盘后开始交易'
    },
    dealFinish: {
      imgLogo: require('@/assets/LoanRepay/deal_result.svg'),
      title: '交易结果',
      key: 'close-deal',
      contentDes: '我们将于每个交易日收盘后进行结算，交易结果将以邮件和短信的形式通知到您。'
    }
  },
  btnText: ['开始卖股还款']
}

// 卖股确认须知
export const sStockNotice = {
  title: '确认须知',
  subTitle: '在提交订单前您需要知道：',
  desPart: {
    cancelDeal: {
      imgLogo: require('@/assets/LoanRepay/stop_trade.svg'),
      title: '终止交易',
      contentDes: `为了保护您的权益，若卖股交易日当天股价跌幅超过5%，我们将停止所有卖出交易。`
    },
    dealTime: {
      imgLogo: require('@/assets/LoanRepay/fianl_price.svg'),
      title: '每股成交均价',
      contentDes: `将贵司当天所有卖股还款申请的实际成交金额除以实际成交股数后得出，即最终每股成交价为成交均价。同一交易日卖股的用户对应每股成交均价相同。`
    },
    dealFinish: {
      imgLogo: require('@/assets/LoanRepay/final_deal.svg'),
      title: '最终成交量',
      contentDes: `将当天实际总成交量，按照单个用户的提交订单对应卖出股数占同公司所有当天处理的提交订单对应卖出股数的比重进行分配。`
    }
  },
  btnText: ['确认，提交订单']
}

// 卖股相关字段解释说明
export function getStockDesPhrase (wordKey) {
  let wordObj = {
    orderType: {
      title: '市价成交',
      contentDes: [
        `市价成交是客户在不需要设定价格的前提下把交易指示送出市场。买卖盘按处理指示时的市场买入/沽出价执行交易，直至将交易指示的卖出数量全数成交。`,
        `由于市况波动，投资者必须注意最终成交价有可能一定幅度偏离客户发出交易指令时的市场价，特别是流通量较少的股票。`,
        `为了保护您的权益，若卖股交易日当天股价跌幅超过5%，我们将停止所有卖出交易。`,
        `每股成交均价按照贵司当天所有卖股还款申请的实际成交金额除以实际成交股数后得出。`
      ]
    },
    orderAmount: {
      title: '订单总金额',
      contentDes: [`订单总金额=卖出数量*当前页面展示的股价`]
    },
    orderNum: {
      title: '卖出数量',
      contentDes: [`卖出数量是根据当前页面展示的最新股价，计算出还清待还金额并扣除交易费用及税项的最小股数，卖出数量需比最小股数多卖5%且同时为每手股数的整数倍。（多卖5%的股数以尽量满足在股价波动下，将卖股所得扣除交易费用及税项后能还清待还总额）`]
    },
    feesAndTaxes: {
      title: '交易费用及税项',
      contentDes: [`交易费用及税项=交易佣金+印花税+交易征费+交易费+中央结算系统股份交收费`],
      subContentDes: [
        {itemTitle: '交易佣金', itemContent: `订单金额*0.1%，最低港币$50`},
        {itemTitle: '印花税', itemContent: `订单金额*0.1%，最低港币$1；不足$1港币部分按照港币$1计入，结果为整数。`},
        {itemTitle: '交易征费', itemContent: `订单金额*0.0027%`},
        {itemTitle: '交易费', itemContent: `订单金额*0.005%+港币$0.5`},
        {itemTitle: '中央结算系统股份交收费', itemContent: `订单金额*0.005%，最低港币$5.5`}
      ],
      noteMark: `*实际成交后将产生成交均价、成交量、交易费用及税项，请以最终实际成交的结果为准。`
    }
  }
  let btnText = '我知道了'
  return {
    wordContent: wordObj[wordKey],
    btnText
  }
}

// 名称解释
export const sStockWordExplain = {
  title: '名词解释',
  wordExplain: [
    `实际到账金额：实际成交金额减去实际交易费用及税项的差值。`,
    `每股成交均价：将贵司当天所有卖股还款申请的实际总成交金额除以总成交股数后，结果保留4位小数而得。同一天交易的订单，每股成交均价相同。`,
    `最终成交量：将当天实际总成交量，按照单个用户的提交订单对应卖出股数占同公司所有当天处理的提交订单对应卖出股数的比重进行分配，分配结果保留4位小数。`,
    `实际成交金额：每股成交均价乘以最终成交量的乘积，结果保留2位小数。`,
    `实际扣除股数：因为扣除股数必须为整数，所以需将最终成交量进一取整。为该笔还款实际应扣股数。`,
    `预扣股数：实际扣除股数减去最终成交量的差值，我们将在贵司整个贷款周期结束后统一卖出对应股票，并将卖出所得金额按照单个用户预扣股数占同公司总预扣数的比重进行分配，返还每个用户预扣股数对应的金额。`,
    `实际交易费用及税项：将当天实际总交易费用及税项，根据单个用户最终成交量占同公司当天总成交量的比重进行分配，结果保留2位小数。`
  ],
  getExplaintion (hasBudget = false) {
    if (!hasBudget) {
      this.wordExplain.splice(4, 2)
    }
    return this.wordExplain
  }
}
