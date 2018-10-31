import Vue from 'vue'
import Router from 'vue-router'
import navGuard from './navGuard'
import routes from './routes'
Vue.use(Router)

// 加载路由
let router = new Router(routes)

// 导航守卫
router.beforeEach(navGuard)

export default router
