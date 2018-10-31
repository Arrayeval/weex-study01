const loanStatus = {
  syncEsopBefore: 10000, // 初始状态同步esop前
  syncEsopAfter: 11000, // 初始状态同步esop后
  sendEmail: 20000, // 发送邮件后
  authorize: 20100, // 授权后
  checkBaseInfoOne: 20200, // 确认基本信息1后
  checkBaseInfoTwo: 20300, // 确认基本信息2后
  checkBaseInfoThree: 20400, // 确认基本信息3后
  checkLoanInfo: 20500, // 确认贷款信息
  agreeProtocol: 20600, // 确认贷款协议
  csReject: 25000, // cs 拒绝
  submitSignature: 30000, // 提交电子签名&提交申请完成
  syncLoanSystem: 31000, // 同步至loan system 后
  waitCompanyAppr: 40000, // cs通过待公司审核
  waitRiskAppr: 50000, // 公司通过待Risk审核
  waitGTJAAppr: 60000, // Risk通过待GTJA审核
  waitClientCfm: 70000, // GTJA通过待客户确认
  waitOpsAppr: 80000, // 客户确认待Ops审核
  syncwaitOpsAppr: 81000, // 已同步待Ops审核
  waitFinanceAppr: 90000, // Ops通过待财务审核
  waitLoanRelease: 95000, // 后台自动确认，进入放款状态
  waitRepay: 100000, // Detail 邮件已发送, 待付款
  waitRepayAppr: 101000, // 还款审核中,
  waitStockAppr: 101100, // 卖股中
  waitPayoff: 102000, // 未还清
  waitStock: 110000, // 待发股
  sendStock: 200000, // 已发股
  appExpired: 201000, // 申请过期
  clientCancel: 202000, // 客户放弃贷款, 待同步
  syncClientCancel: 202100, // 客户放弃贷款, 已同步
  csPmtReject: 203000, // cs永久拒绝
  riskPmtReject: 204000, // risk永久拒绝
  financePmtReject: 205000, // 财务永久拒绝
  companyReject: 206000, // 公司拒绝
  gtjaReject: 207000, // GTJA拒绝
  gtjaPmtReject: 208000, // GTJA永久拒绝
  noAccount: 7016, // 限制户未开户,
  cancelRefused: 30033, // 撤单失败
  cancelSucc: 31500 // 撤单成功(前端自定义,可改)
}
// 还款详情状态
const repayStatus = {
  auditing: 1000, // 正在审核
  traded: 1200, // 正在交易中
  canceled: 1500, // 已撤单
  canceledSys: 1600, // 已撤单(已同步)
  succeed: 2000, // 审核通过
  failed: 3000 // 审核失败
}

const repayTitle = {
  waitRepay: '待还款',
  waitRepayAppr: '还款审核中',
  waitStockAppr: '卖股中',
  waitPayoff: '未还清',
  waitStock: '待发股',
  sendStock: '已发股'
}

const repayType = {
  sellStockPrepayment: 1,
  expiredForcedRepayment: 2,
  cashPrepayment: 3
}

const repayMode = {
  sellStockPrepayment: '卖股还款',
  expiredForcedRepayment: '强制还款',
  cashPrepayment: '现金还款'
}

// 可修改状态
const editStatus = [
  loanStatus.sendEmail,
  loanStatus.authorize,
  loanStatus.checkBaseInfoOne,
  loanStatus.checkBaseInfoTwo,
  loanStatus.checkBaseInfoThree,
  loanStatus.checkLoanInfo,
  loanStatus.agreeProtocol,
  loanStatus.csReject
]

// 申请结果状态
const resultStatus = [
  loanStatus.csReject,
  loanStatus.csPmtReject,
  loanStatus.riskPmtReject,
  loanStatus.gtjaReject,
  loanStatus.gtjaPmtReject,
  loanStatus.companyReject
]

const apyResult = {
  // 没有申请记录
  noApy: {navTitle: '很抱歉，您暂无申请贷款资格', content: '如有疑问请<span style="color: #499EF0;">联系我们。</span>'},
  csReturn: {navTitle: '很抱歉，您的贷款申请暂未通过', content: '您需要修改资料后重新提交，如有疑问请<span style="color: #499EF0;">联系我们。</span>', canEdit: true},
  // CS Reject , Risk Reject ,GTJA Reject , GTJA Returned
  crgcg: {navTitle: '很抱歉，您的贷款申请未通过', content: '经内部审核后，您无法使用贷款方式进行行权，请选择其他方式。如有疑问请<span style="color: #499EF0;">联系我们。</span>'},
  //  Company Returned , 未开户
  cR: {navTitle: '很抱歉，您的申请未通过公司的审核', content: '如有疑问，请联系您公司的人事部或请<span style="color: #499EF0;">联系我们。</span>'},
  // 无申请记录
  noApply: {navTitle: '很抱歉，您暂时无法申请贷款', content: '我们还未开放贷款申请或您未选择贷款作为行权成本的支付方式，如您已选择贷款作为行权成本的支付方式，我们将在1个工作日内开放贷款申请，请耐心等候邮件通知。如有疑问，请<span style="color: #499EF0;">联系我们。</span>'},
  // 限制户未开户
  noAccount: {navTitle: '很抱歉，您暂时无法申请贷款', content: '您需要先开通有鱼股票账户，您可以<span style="color: #499EF0;">联系我们</span>了解如何开通有鱼股票账户。', button: '我知道了'}
}

const agreeResult = {
  // 贷款申请成功
  success: {navTitle: '贷款申请提交成功', content: '之后您可以再次扫描二维码或使用链接打开网页，登录后可查看贷款审批进度。审批通过后我们将以邮件的形式通知您，同时您还需要再次确认贷款条款和协议。', button: '查看贷款审批进度'},
  // 贷款确认
  confirm: {navTitle: '贷款已确认', content: '之后您可以再次扫描二维码或使用链接打开网页，登录后可查看汇款进度。', button: '确认'},
  // 贷款放弃
  fail: {navTitle: '贷款已放弃', content: '如你需要更改决定，可以<span style="color: #499EF0;">联系我们。</span>', button: '确认'},
  // 现金还款申请成功
  cashCheck: {navTitle: '提交成功', content: '我们将会对您的提前还款申请进行审核，审核结果将以短信及邮件的形式通知到您。如实际到账金额大于应还总额，我们将在发股阶段将多余金额存入您的股票账户。', button: '确认'},
  // 卖股还款申请成功
  stockCheck: {navTitle: '提交成功', content: '我们将在收盘后进行交易结算，结算完成后会以邮件及短信的形式告知您成交结果。', button: '确认'},
  // 撤单失败
  cancelRefused: {navTitle: '无法撤单', content: '该笔订单已超过可撤单时间', subContent: '该笔订单已超过可撤单时间', button: '确认'},
  // 撤单成功
  cancelSucc: {navTitle: '已撤单', content: '', subContent: '', button: '确认'}
}

function statusToResult (status) {
  if (status === loanStatus.csReject) {
    // CS Return
    return apyResult.csReturn
  } else if (status === loanStatus.csPmtReject || status === loanStatus.riskPmtReject || status === loanStatus.gtjaReject || status === loanStatus.gtjaPmtReject) {
    // CS Reject , Risk Reject ,GTJA Reject , GTJA Returned
    return apyResult.crgcg
  } else if (status === loanStatus.companyReject) {
    //  Company Returned , 未开户
    return apyResult.cR
  } else if (status === loanStatus.noAccount) {
    // 限制户未开户
    return apyResult.noAccount
  }
}

function statusToAgree (status) {
  if (status === loanStatus.submitSignature) {
    // 贷款申请成功
    return agreeResult.success
  } else if (status === loanStatus.waitOpsAppr) {
    // 贷款已确认
    return agreeResult.confirm
  } else if (status === loanStatus.clientCancel || status === loanStatus.syncClientCancel) {
    // 贷款已放弃
    return agreeResult.fail
  } else if (status === loanStatus.waitRepayAppr) {
    // 现金还款申请成功
    return agreeResult.cashCheck
  } else if (status === loanStatus.waitStockAppr) {
    // 卖股还款申请成功
    return agreeResult.stockCheck
  } else if (status === loanStatus.cancelRefused) {
    // 撤单失败
    return agreeResult.cancelRefused
  } else if (status === loanStatus.cancelSucc) {
    // 撤单成功
    return agreeResult.cancelSucc
  }
}

export default {loanStatus, repayStatus, repayTitle, repayType, repayMode, apyResult, agreeResult, statusToResult, statusToAgree, editStatus, resultStatus}
