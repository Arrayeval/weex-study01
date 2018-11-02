/**
 * @Desc: 路由配置
 * @Author： Bob
 * @Date： 2018-06-06
 */

// 音乐模块
import {MusicRoute} from '@/routers/musicRoute'

// 热门模块
import {HotItemRoute} from '@/routers/hotRoute'

// 视频模块
import {ViewItemRoute} from '@/routers/videoRoute'

// import {ConfigPartRoute} from '@/routers/wxcDemoRoute'
/**
 * 路由配置
 * mode: 历史模式
 * meta: 用于路由鉴权, status为当前路由的状态
 */
import Start from '@/components/Start'
export default {
  mode: 'abstract',
  routes: [
    // {
    //   // 默认页
    //   path: '*',
    //   redirect: to => {
    //     return '/'
    //   },
    //   meta: {
    //     status: false
    //   }
    // },
    { // 登录页
      path: '/',
      name: 'Start',
      component: Start,
      children: [
        ...MusicRoute,
        ...HotItemRoute,
        ...ViewItemRoute
      ]
    }
    // ...ConfigPartRoute
  ],
  scrollBehavior (to, from, savedPosition) {
    // 每一次新开组件都回到顶部（默认：记住滚动位置）
    return { x: 0, y: 0 }
  }
}
