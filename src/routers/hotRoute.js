
import HotItem from '@/components/HotItem'

import Recommend from '@/components/musicSubPage/Recommend'
import Friends from '@/components/musicSubPage/Friends'
import RadioStation from '@/components/musicSubPage/RadioStation'
export const HotItemRoute = [
  { // 热门模块
    path: '/',
    name: 'HotItem',
    component: HotItem,
    children: [
      {
        path: '/',
        name: 'Recommend',
        component: Recommend
      },
      {
        path: '/Friends',
        name: 'Friends',
        component: Friends
      },
      {
        path: '/RadioStation',
        name: 'RadioStation',
        component: RadioStation
      }
    ]
  }
]
