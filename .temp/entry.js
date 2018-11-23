import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */

weex.init(Vue)
/* weex initialized here, please do not move this line */
// import {IsPC} from '@/utils/common'
// import router from './router'
const router = require('./router')
// const App = require('@/index.vue')
/* eslint-disable no-new */
// new Vue(Vue.util.extend({el: '#root', router}, App))
// router.push('/')

// if (IsPC) {
//   const App = require('@/index.vue')
//   new Vue(Vue.util.extend({el: '#root', router}, App))
//   router.push('/')
// } else {
//   weex.init(Vue)
// }
const App = require('@/index.vue')
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
