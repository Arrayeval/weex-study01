<template>
  <div class="player-wrapper-container" >
    <div class="player-outer" >
      <div class="music-icon" ref="musicIcon" >
        <image class="img-icon" @click="_goMusicPlay" src="http://img5.imgtn.bdimg.com/it/u=1371276359,139579824&fm=200&gp=0.jpg"/>
      </div>
      <div class="music-info">
        <text class="music-title" @click="_goView">喜欢你{{testData}}</text>
        <text class="music-info">邓紫棋</text>
      </div>
      <div class="music-action">
        <div class="music-start" @click="_playMusic">
          <image class="player-icon" :src="_getImageFile('player.png')"/>
        </div>
        <div class="music-list-icon">
          <image class="list-icon" :src="_getImageFile('list_alt.png')"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {getImageFile, goPageRoute} from '@/utils/common'
const commonFun = require('@/utils/common')
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')
const animation = weex.requireModule('animation')
export default {
  name: 'Player',
  data () {
    return {
      testData: ''
    }
  },
  methods: {
    _playMusic () {
      let musicIcon = this.$refs.musicIcon
      animation.transition(musicIcon, {
        styles: {
          transform: 'rotate(10000deg)',
          transformOrigin: 'center center'
        },
        duration: 100000,
        timingFunction: 'linear',
        delay: 0
      })
    },
    // 获取image 路径
    _getImageFile (ImageName) {
      return commonFun.getImageFile(ImageName)
    },

    // 跳转至详情
    _goView () {
      // this.$router.push({name: 'MusicView'})
      commonFun.goPageRoute(this.$router, {name: 'MusicView'})
    },

    _goMusicPlay () {
      var navigator = weex.requireModule('navigator')
      commonFun.goPageRoute(this.$router, navigator, {name: 'MusicView'})
      /*
      var navigator = weex.requireModule('navigator')
      var bundleUrl = weex.config.bundleUrl
      var nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
      var url = nativeBase + 'dist/components/' + 'MusicPlay.js'
      navigator.push({url, animated: 'true'}, event => {
        const modal = weex.requireModule('modal')
        modal.toast({ message: url })
      })
      */
    },

    jump (event) {
      navigator.push({
        url: 'https://www.baidu.com/s?wd=weex&rsv_spt=1&rsv_iqid=0xcd9e7d2500004b54&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=4&rsv_sug1=4&rsv_sug7=100&rsv_t=40d4oQDSTevq2AjxHS427r81f8jbliy7cptJWa8k8ofDJ0bo4PjzpRASG4OvsFLx21gF&rsv_sug2=0&inputT=1242&rsv_sug4=1242&rsv_sug=2',
        animated: 'true'
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    }
  }
}
</script>
<style scoped>
  .player-wrapper-container{
    padding-left:10px;
    height:100px;
    width:750px;
    /* align-items: center; */
    justify-content: center;
    border-top-color: #f3f0f0;
    border-top-width:1px;
    /* box-shadow: 1px 0 2px 2px #dddddd; */
  }
  .player-outer{
    flex-direction: row;
    align-items: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  .music-icon{
    width:80px;
    height:80px;
    /* border-radius: 50%; */
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    margin-right:15px;
    background-color: #dddddd;
  }
  .music-info{
    padding-top:12px;
  }
  .img-icon{
    width:80px;
    height:80px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    /* border-radius: 50%; */
  }
  .music-title{
    font-size:22px;
    color:#A5A2A2;
  }
  .music-info{
    padding-top:5px;
    font-size:22px;
    color:#BFBFBF;
  }
  .music-action{
    flex-direction: row;
    justify-content: center;
    position: absolute;
    right:10px;
    padding-top:5px;
  }
  .music-start{
    padding-right:20px;
  }
  .player-icon{
    width:70px;
    height:70px;
  }
  .list-icon{
    width:70px;
    height:70px;
  }
</style>
