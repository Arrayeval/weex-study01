/**
 *针对weex的多端本地资源加载
 **/
module.exports = {
  getImageFile: function (imageName) {
    if (!weex || !weex.config || !weex.config.env) {
      return
    }
    let _dotPoint = (imageName + '').lastIndexOf('.')
    let _pureFileName = (imageName + '').slice(0, _dotPoint)
    // let _imageFormat = (imageName + '').slice(_dotPoint)
    // 平台信息
    let _platform = weex.config.env.platform
    if (_platform === 'android') {
      let _filePrefix = 'local:///'
      return _filePrefix + _pureFileName
    }
    if (_platform === 'iOS') {
      let _filePrefix = 'local://'
      return _filePrefix + _pureFileName
    }
    if (_platform === 'Web') {
      let _filePrefix = '../../src/assets/icons/'
      return _filePrefix + imageName
    }
  },
  /*
  *针对路由的封装
  * 在调用的时候要进行pc区分，应为path会有所不同
  */
  goPageRoute: function (router, navigator, pathWebObj) { // router: web,h5端的this.$router, navigation:原生weex 的navigation
    var _platform = weex.config.env.platform
    var bundleUrl = weex.config.bundleUrl
    var actionToRoute = {
      'Web': {
        nativeBase: pathWebObj.name
      },
      'android': {
        nativeBase: 'file://assets/dist/components/' + pathWebObj.name + '.js'
      },
      'ios': {
        nativeBase: bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + pathWebObj.name + '.js'
      }
    }
    if (_platform === 'Web') {
      router.push({...pathWebObj})
    } else { // android,ios
      navigator.push({url: actionToRoute[_platform], animated: 'true'})
    }
  }
}
// export function getImageFile (imageName) {
//   if (!weex || !weex.config || !weex.config.env) {
//     return
//   }
//   let _dotPoint = (imageName + '').lastIndexOf('.')
//   let _pureFileName = (imageName + '').slice(0, _dotPoint)
//   // let _imageFormat = (imageName + '').slice(_dotPoint)
//   // 平台信息
//   let _platform = weex.config.env.platform
//   if (_platform === 'android') {
//     let _filePrefix = 'local:///'
//     return _filePrefix + _pureFileName
//   }
//   if (_platform === 'iOS') {
//     return ''
//   }
//   if (_platform === 'Web') {
//     let _filePrefix = '../../src/assets/icons/'
//     return _filePrefix + imageName
//   }
// }

// /*
// *针对路由的封装
// * 在调用的时候要进行pc区分，应为path会有所不同
// */
// export function goPageRoute (router, navigator, pathWebObj) { // router: web,h5端的this.$router, navigation:原生weex 的navigation
//   var _platform = weex.config.env.platform
//   var bundleUrl = weex.config.bundleUrl
//   var actionToRoute = {
//     'Web': {
//       nativeBase: pathWebObj.name
//     },
//     'android': {
//       nativeBase: 'file://assets/dist/components/' + pathWebObj.name + '.js'
//     },
//     'ios': {
//       nativeBase: bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + pathWebObj.name + '.js'
//     }
//   }
//   if (_platform === 'Web') {
//     router.push({...pathWebObj})
//   } else { // android,ios
//     navigator.push({url: actionToRoute[_platform], animated: 'true'})
//   }
// }
