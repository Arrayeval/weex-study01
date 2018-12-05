'use strict'
const mkdirp = require('mkdirp')
const filecopy = require('filecopy')
// google play上上架
/**
* https://www.sunzhongwei.com/weex-android-ios-loaded-local-pictures
*google play会根据不同的手机density来打不同的apk包（举个栗子，如果是hdpi的机器，下载下来的就只有hdpi的资源）
*如果是在国内的市场话。建议只放一套（h或者xhpdi），因为国内市场是没有上面那种机制的，放多套资源会导致安装包变得很大。
*此外： Android在没有找到相应dpi的图片时，会用其他density的图片进行缩放处理。
*/

// 获取命令行参数
let paltformDefine = process.argv.slice(2)[0]
let filePath = 'src/assets/icons/*.png'
let androidIconPlatform = ['drawable-hdpi', 'drawable-mdpi', 'drawable-xhdpi', 'drawable-xxhdpi']

if (paltformDefine === 'android') {
  let androidPath = 'platforms/android/app/src/main/res/'
  mkdirFile(androidPath).then(res => {
    androidIconPlatform.forEach((item, index) => {
      copyIcon(`${androidPath}` + `${item}`)
    })
  }).catch(err => {
    return err
  })
} else if (paltformDefine === 'ios') {
  let iosPath = 'platforms/ios/images/'
  mkdirFile(iosPath).then(res => {
    copyIcon(iosPath)
  }).catch(err => {
    return err
  })
}

function copyIcon (fileDestPath) {
  filecopy(filePath, fileDestPath, {
    mkdirp: true
  }).then(() => {
    return ''
  }).catch(() => {
    console.log('file copy fail')
  })
}

function mkdirFile (fileName) {
  return new Promise((resolve, reject) => {
    mkdirp(fileName, function (err) {
      if (err) {
        return reject(err)
      }
      return resolve(true)
    })
  })
}
