
let esopBase = location.protocol + '//' + location.hostname + ':8001/v1/loan/esop/'
// 检查邮箱
let ucBase = window.location.protocol + '//uc.reotest.com'
// 登录，登出，session校验
let ssoBase = window.location.protocol + '//sso.reotest.com'
// faq
let faqBase = window.location.protocol + '//faq.reotest.com'
const esopDomain = {
  dev: 'lending.reotest.com',
  qa: 'lending-qa.youyu.hk',
  stage: 'lending-stage.youyu.hk',
  production: 'lending.youyu.hk'
}
const ucDomain = {
  dev: 'uc.reotest.com',
  qa: 'uc-qa.youyu.hk',
  stage: 'uc-stage.youyu.hk',
  production: 'uc.youyu.hk'
}
const ssoDomain = {
  dev: 'sso.reotest.com',
  qa: 'sso-qa.youyu.hk',
  stage: 'sso-stage.youyu.hk',
  production: 'sso.youyu.hk'
}

const faqDomain = {
  dev: 'faq.reotest.com',
  qa: 'faq-qa.youyu.cn',
  stage: 'faq-stage.youyu.cn',
  production: 'faq.youyu.cn'
}

for (let key in esopDomain) {
  let domain = esopDomain[key]
  if (domain === window.location.host) {
    esopBase = location.protocol + '//' + domain + '/v1/loan/esop/'
    faqBase = location.protocol + '//' + faqDomain[key]
    ucBase = location.protocol + '//' + ucDomain[key]
    ssoBase = location.protocol + '//' + ssoDomain[key]
  }
}

const urlList = {
  demo: {
    getCompany: esopBase + 'company'
  },
  loan: {
    checkEmail: ucBase + '/v1/users/check',
    login: ssoBase + '/v1/services/login',
    getCaptcha: ssoBase + '/v1/users/captcha?type=2' + '&s=' + Math.random(),
    checkCaptcha: ssoBase + '/v1/users/verifyCaptcha?type=2',
    // 获取申请记录
    getApplicationRecord: esopBase + 'application/records/',
    // 获取申请记录审批详情
    getApplicationDetail: esopBase + 'application/records/detail/',
    // 获得查询贷款详情
    getLoanInfo: esopBase + 'application/',
    // 修改贷款状态(下一步)
    updateStatus: esopBase + 'application/',
    // 获取证件(image)
    getCertificateImage: esopBase + 'application/image/',
    // 获取贷款状态
    getLoanStatus: esopBase + 'application/status/',
    // 上传签名照、
    uploadLoanSign: esopBase + 'application/',
    // 登录成功,检测用户是否开户
    isClient: ucBase + '/v2/users/'
  },
  repay: {
    // 获取还款概览信息
    overviewInfo: esopBase + 'repayment/overview/:loanId',
    // 获取还款记录详情
    getRepayItemInfo: esopBase + 'repayment/detail/:requestId',
    // 上传现金还款凭证信息
    uploadCertificate: esopBase + 'repayment/image',
    // 提交现金贷款
    submitCashLoan: esopBase + 'repayment/submit/cash/:loanId',
    // 获取凭证
    getCertifiacte: esopBase + 'repayment/detail/image/',
    // 办理香港银行卡链接
    getHKBankCard: faqBase + '/zh-hans/esop/capital',
    // 获取短信验证码
    getVerificationCode: esopBase + 'repayment/sendmsg/:loanId',
    // 提交卖股还款
    submitStockLoan: esopBase + 'repayment/submit/stock/:loanId',
    // 获取股票信息
    getStockInfo: esopBase + 'loan/config/:loanId',
    // 获取最新股价
    getStockPrice: esopBase + 'stock/:stockCode',
    // 获取服务器时间
    getServiceTime: esopBase + 'loan/service/time',
    // 卖股撤单操作
    cancelDeal: esopBase + 'repayment/stock/cancel/:requestId'
  }
}

export default { esopBase, ucBase, urlList }
