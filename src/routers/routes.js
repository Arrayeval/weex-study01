/**
 * @Desc: 路由配置
 * @Author： Bob
 * @Date： 2018-06-06
 */
import {loanRoute} from '@/routers/loanRouter'
// import {wxcDemo} from '@/routers/wxcDemoRoute'
/**
 * 路由配置
 * mode: 历史模式
 * meta: 用于路由鉴权, status为当前路由的状态
 */
export default {
  mode: 'abstract',
  routes: [
    ...loanRoute
    // ...wxcDemo
    // ...repayRoute
  ],
  scrollBehavior (to, from, savedPosition) {
    // 每一次新开组件都回到顶部（默认：记住滚动位置）
    return { x: 0, y: 0 }
  }
}
