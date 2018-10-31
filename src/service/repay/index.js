import axios from '../index'
import webApi from '../webApi'

const repay = {}

// 获取还款概览信息
repay.getOverviewInfo = (obj) => {
  const url = webApi.urlList.repay.overviewInfo.replace(/:loanId/ig, obj.loanId)
  return axios.get(url)
}

// 上传现金还款凭证信息
repay.uploadCertificate = (obj) => {
  const url = webApi.urlList.repay.uploadCertificate
  return axios.post(url, obj)
}

// 获取还款记录详情
repay.getRepayItemInfo = (obj) => {
  const url = webApi.urlList.repay.getRepayItemInfo.replace(/:requestId/ig, obj.requireId)
  return axios.get(url)
}

// 提交现金贷款
repay.submitCashLoan = (obj) => {
  const url = webApi.urlList.repay.submitCashLoan.replace(/:loanId/ig, obj.loanId)
  return axios.post(url, obj.data)
}

// 获得图片凭证
repay.getCertificate = (obj) => {
  const url = webApi.urlList.repay.getCertifiacte + obj.category
  return axios.post(url, obj)
}

// 办理香港银行卡
repay.getHKBankCard = () => {
  const url = webApi.urlList.repay.getHKBankCard
  return url
}

// 获取短信验证码
repay.getVerificationCode = (obj) => {
  const url = webApi.urlList.repay.getVerificationCode.replace(/:loanId/ig, obj.loanId)
  return axios.get(url)
}

// 提交卖股还款
repay.submitStockLoan = (obj) => {
  const url = webApi.urlList.repay.submitStockLoan.replace(/:loanId/ig, obj.loanId)
  return axios.post(url, obj.data)
}

// 获取股票代码
repay.getStockInfo = (obj) => {
  const url = webApi.urlList.repay.getStockInfo.replace(/:loanId/ig, obj.loanId)
  return axios.get(url)
}

// 获取最新股价
repay.getStockPrice = (obj) => {
  const url = webApi.urlList.repay.getStockPrice.replace(/:stockCode/ig, obj.stockCode)
  return axios.get(url)
}

// 获取服务器时间
repay.getServiceTime = () => {
  const url = webApi.urlList.repay.getServiceTime
  return axios.get(url)
}

// 卖股撤单操作
repay.cancelDeal = (obj) => {
  const url = webApi.urlList.repay.cancelDeal.replace(/:requestId/ig, obj.requestId)
  return axios.get(url)
}
export default repay
