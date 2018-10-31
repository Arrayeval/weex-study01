import axios from '../index'
import webApi from '../webApi'

const loan = {}

// 获取公司
loan.getCompany = () => {
  // console.log('webApi.urlList', webApi)
  let url = webApi.urlList.demo.getCompany
  return axios.get(url)
}

// checkEmail
loan.emailCheck = (obj) => {
  let url = webApi.urlList.loan.checkEmail
  return axios.post(url, obj)
}

// login
loan.login = (obj) => {
  let url = webApi.urlList.loan.login
  return axios.post(url, obj)
}

loan.getCaptcha = () => {
  let url = webApi.urlList.loan.getCaptcha
  return axios.get(url)
}
// 校验验证码
loan.checkCaptcha = (obj) => {
  let url = webApi.urlList.loan.checkCaptcha
  return axios.post(url, obj)
}

// 申请记录
loan.getApplicationRecord = (obj) => {
  let url = webApi.urlList.loan.getApplicationRecord + obj.email
  return axios.get(url)
}

// 查询申请记录审批详情
loan.getApplicationDetail = (obj) => {
  let url = webApi.urlList.loan.getApplicationDetail + obj.loanId
  return axios.get(url)
}

// 获取贷款详情信息
loan.getLoanInfo = (obj) => { // loanId
  let url = webApi.urlList.loan.getLoanInfo + obj.loanId
  return axios.get(url)
}

// 修改贷款状态 (下一步)
loan.updateStatus = (obj) => {
  let url = webApi.urlList.loan.updateStatus + obj.loanId
  delete obj.loanId
  return axios.put(url, obj)
}

// 获取证件image
loan.getCertificateImage = (obj) => {
  let url = webApi.urlList.loan.getCertificateImage + obj.category + '/' + obj.oid
  return axios.get(url)
}

// 获取状态
loan.getLoanStatus = (loanId) => {
  let url = webApi.urlList.loan.getLoanStatus + loanId
  return axios.get(url)
}

// 上传电子签名
loan.uploadLoanSign = (obj) => {
  let url = webApi.urlList.loan.uploadLoanSign + obj.loanId
  delete obj.loanId
  return axios.post(url, obj)
}

// 检测用户是否开户
loan.isClient = (obj) => {
  let url = webApi.urlList.loan.isClient + obj.uin + '/client/esop'
  return axios.get(url)
}
export default loan
