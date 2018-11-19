// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E8%B0%83%E7%94%A8%E5%89%8D%E9%A1%BB%E7%9F%A5
const _preFixLocal = 'http://www.mptab.cn:3001/'
const UrlList = {
  // 获取歌词
  getLyric: _preFixLocal + 'lyric',
  // 获取歌词列表
  getMusicList: _preFixLocal + 'artist/list'
}
module.exports = UrlList
