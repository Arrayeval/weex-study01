
import MusicItem from '@/components/MusicItem'
export const MusicRoute = [
  // { // 默认页
  //   path: '*',
  //   redirect: to => {
  //     return '/'
  //   },
  //   meta: {
  //     status: false
  //   }
  // },
  { // 登录页
    path: '/MusicItem',
    name: 'MusicItem',
    component: MusicItem,
    meta: {
      status: false
    }
  }
]
