// 贷款页面相关路由
import LoanApp from '@/components/Login'
export const loanRoute = [
  { // 默认页
    path: '*',
    redirect: to => {
      return '/'
    },
    meta: {
      status: false
    }
  },
  { // 登录页
    path: '/',
    name: 'LoanApp',
    component: LoanApp,
    meta: {
      status: false
    }
  }
]
