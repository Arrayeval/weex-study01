/**
 * 还款流程页面路由
 * **/
import WaitRepay from '@/components/Repay/waitRepay/waitRepay'
import StockView from '@/components/Repay/StockView/StockView'
import BankCard from '@/components/Repay/BankCard/BankCard'
import BankDetail from '@/components/Repay/BankDetail/BankDetail'
import CertificateView from '@/components/Repay/CertificateView/CertificateView'
import RepayRecordView from '@/components/Repay/RepayRecordView/RepayRecordView'
import VerificationCode from '@/components/Repay/VerificationCode/VerificationCode'
import ViewInstance from '@/components/Repay/ViewInstance/ViewInstance'
import loanStatusData from '@/modules/status'
// 卖股还款组件
import SellStockOrder from '@/components/Repay/SellStockOrder/SellStockOrder'
import ReviewStockOrder from '@/components/Repay/ReviewStockOrder/ReviewStockOrder'
import SellStockRepayRecordView from '@/components/Repay/SellStockRepayRecordView/SellStockRepayRecordView'
import DesSellStock from '@/components/Repay/DesSellStock/DesSellStock'
import SellStockSureInfo from '@/components/Repay/SellStockSureInfo/SellStockSureInfo'
import WordExplain from '@/components/Repay/WordExplain/WordExplain'

const loanStatus = loanStatusData.loanStatus

export const repayRoute = [
  {
    // 待还款
    path: '/WaitRepay/:loanId',
    name: 'WaitRepay',
    component: WaitRepay,
    meta: {
      status: [loanStatus.waitRepay]
    }
  },
  {
    // 股票详情
    path: '/StockView/:loanId',
    name: 'StockView',
    component: StockView,
    meta: {
      status: [loanStatus.waitStock, loanStatus.sendStock]
    }
  },
  {
    // 银行卡选择
    path: '/BankCard',
    name: 'BankCard',
    component: BankCard,
    meta: {
      status: [loanStatus.waitRepay]
    }
  },
  { // 银行还款详情
    path: '/BankDetail/:type',
    name: 'BankDetail',
    component: BankDetail,
    meta: {
      status: false
    }
  },
  {
    // 上传汇款凭证
    path: '/RepayCertificateView/:type',
    name: 'RepayCertificateView',
    component: CertificateView,
    meta: {
      status: [loanStatus.waitRepay],
      keepAlive: true
    }
  },
  { // 查看范例
    path: '/ViewInstance',
    name: 'ViewInstance',
    component: ViewInstance,
    meta: {
      status: false
    }
  },
  {
    // 现金还款记录详情
    path: '/RepayRecordView/:type',
    name: 'RepayRecordView',
    component: RepayRecordView,
    meta: {
      status: false,
      keepAlive: true
    }
  },
  { // 定义卖股
    path: '/DesSellStock',
    name: 'DesSellStock',
    component: DesSellStock,
    meta: {
      status: false
    }
  },
  { // 卖股还款订单页
    path: '/SellStockOrder',
    name: 'SellStockOrder',
    component: SellStockOrder,
    meta: {
      status: false
    }
  },
  { // 确认卖股订单
    path: '/ReviewStockOrder',
    name: 'ReviewStockOrder',
    component: ReviewStockOrder,
    meta: {
      status: false
    }
  },
  { // 确认须知
    path: '/SellStockSureInfo',
    name: 'SellStockSureInfo',
    component: SellStockSureInfo,
    meta: {
      status: false
    }
  },
  { // WordExplain
    path: '/WordExplain',
    name: 'WordExplain',
    component: WordExplain,
    meta: {
      status: false
    }
  },
  {
    // 卖股还款记录详情
    path: '/SellStockRepayRecordView/:id',
    name: 'SellStockRepayRecordView',
    component: SellStockRepayRecordView,
    meta: {
      status: false,
      keepAlive: false
    }
  },
  { // 短信验证
    path: '/VerificationCode',
    name: 'VerificationCode',
    component: VerificationCode,
    meta: {
      status: [loanStatus.waitRepay]
    }
  }
]
