
/* global Vue */
import Router from 'vue-router'
// import navGuard from '@/routers/navGuard'
import routes from '@/routers/routes'
Vue.use(Router)
// 加载路由
module.exports = new Router(routes)

// 导航守卫
// router.beforeEach(navGuard)

// export default router
