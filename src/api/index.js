import UrlList from './urlList'
var stream = weex.requireModule('stream')

function commonFetch (obj) {
  stream.fetch({
    method: obj.methods || 'GET',
    url: obj.url,
    type: 'jsonp'
  }, function (res) {
    obj.succFun(res)
  }, function (err) {
    obj.errFun(err)
  })
}

export const FetchFun = {
  // 获取歌词
  getLyric (obj) {
    let _url = UrlList.getLyric
    commonFetch({...obj, _url})
  }
}
