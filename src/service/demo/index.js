import axios from '../index'
import webApi from '../webApi'

const demo = {}

// 获取公司
demo.getCompany = () => {
  console.log('webApi.urlList', webApi)
  let url = webApi.urlList.demo.getCompany
  return axios.get(url)
}

export default demo
