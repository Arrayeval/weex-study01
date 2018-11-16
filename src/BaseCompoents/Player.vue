<template>
  <div class="player-wrapper-container" >
    <div class="player-outer" >
      <div class="music-icon" ref="musicIcon" @click="_goMusicPlay">
        <image class="img-icon" src="http://img5.imgtn.bdimg.com/it/u=1371276359,139579824&fm=200&gp=0.jpg"/>
      </div>
      <div class="music-info">
        <text class="music-title" @click="_goView">喜欢你</text>
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
import {getImageFile} from '@/utils/common'
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')
const animation = weex.requireModule('animation')
export default {
  name: 'Player',
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
      return getImageFile(ImageName)
    },

    // 跳转至详情
    _goView () {
      this.$router.push({name: 'MusicView'})
    },
    _goMusicPlay () {
      this.$router.push({name: 'MusicPlay'})
    },
    jump (event) {
      // console.log('will jump',  weex.config.bundleUrl)
      // const toUrl = 'http://127.0.0.1:8080/dist/Demo.js'
      console.log('navitgato')
      navigator.push({
        url: 'http://10.9.8.123:8081/dist/MusicView.js',
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
