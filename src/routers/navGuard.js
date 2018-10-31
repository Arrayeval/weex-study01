/**
 * @Desc: 导航守卫: 负责路由鉴权
 * @Author： Bob
 * @Date： 2018-06-06
 */
import { getCookie } from '@/utils/common'
import loanService from '@/service/loan/index'
import errCode from '@/modules/errCode'

export default (to, from, next) => {
  let toStatus = to.meta.status
  if (to.meta && toStatus && toStatus.length) {
    let loanId = getCookie('loanId')
    if (!loanId) {
      next('/')
    } else {
      loanService.getLoanStatus(loanId)
        .then(res => {
          if (res.data && res.data.code === 0) {
            let currStatus = Number(res.data.data.loan_status)
            if (toStatus.indexOf(currStatus) === -1) {
              // todo: 跳转至历史记录页
              next('/')
            } else {
              next()
            }
          } else {
            // 统一在 axios拦截器中处理 -- 登录失效31005
            if (res.data && res.data.code === errCode.sessionExpired) {
              next()
            } else {
              next('/')
            }
          }
        })
        .catch(() => {
          next('/')
        })
    }
  } else {
    next()
  }
}
