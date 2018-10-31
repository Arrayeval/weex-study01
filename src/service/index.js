/**
 *  @Desc: api 服务层
 *  @Date: 2018-05-23
 */
import axios from 'axios'
import router from '@/router'
import errCode from '@/modules/errCode'
// 携带cookie
axios.defaults.withCredentials = true
// axios.defaults.timeout = 100
// request 拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前
  return config
}, function (error) {
  // 对请求错误
  return Promise.reject(error)
})

// response 拦截器
axios.interceptors.response.use(res => {
  // 登录失效,同一设备多账号登陆
  if (res && res.data && (res.data.code === errCode.sessionExpired || res.data.code === errCode.wrong_parameter)) {
    router.replace('/')
  }
  return res
}, err => {
  return Promise.reject(err)
})

export default axios
