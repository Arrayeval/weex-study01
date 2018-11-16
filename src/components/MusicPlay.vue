<template>
  <div class="main-container">
     <div class="header-top">
       <div class="back-icon" @click="_backRoute">
        <image class="back-img" :src = "_getImageFile('left.png')"/>
       </div>
      <div class="title-name-wrapper">
        <text class="text-sty">喜欢你</text>
      </div>
      <div class="title-action ">
        <text class="text-sty">分享</text>
      </div>
     </div>
     <!--pic-->
     <div class="radius-platform">
       <div class="border-outer-wrapper">
         <div class="border-inner-wrapper">
           <div class="music-icon-wrapper">
             <image class="music-icon-img"  resize="cover" src="http://h.hiphotos.baidu.com/baike/pic/item/d1a20cf431adcbef011db9bba6af2edda3cc9f66.jpg"/>
           </div>
         </div>
       </div>
     </div>
     <!--歌词部分-->
     <div class="word-container">
       <div class="word-text-wrapper">
         <scroller class="word-slider">
          <list class="word-outer-wrapper">
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句这是第一句这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这这是第一句这是第一句是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句这是第一句这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句这是第一句这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这这是第一句这是第一句是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
            <cell class="word-inner-wrapper"><text class="word-sty">这是第一句</text></cell>
          </list>
         </scroller>
       </div>
       <div class="action-btn">
         <!-- 向上的滑动按钮 -->
         <image class="top-slider-icon" :src = "_getImageFile('top.png')"/>
       </div>
     </div>
     <!-- <slider-bar  ></slider-bar> -->
  </div>
</template>
<script>
// import SliderBar from '@/BaseCompoents/SliderBar'
import {getImageFile} from '@/utils/common'
export default {
  name: 'MusicPlay',
  // components: {
  //   SliderBar
  // },
  methods: {
    // 获取图片
    _getImageFile (ImageName) {
      return getImageFile(ImageName)
    },
    // 返回上一层
    _backRoute () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss">
.main-container{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  align-items: center;
}
.header-top{
  height:100px;
  width:750px;
  background-color:#d43c33;
  flex-direction: row;
  align-items: center;
  padding-right:10px;
  padding-left:10px;
}
.back-icon{
  width:100px;
}
.back-img{
  width:50px;
  height:50px;
}
// .header-item{
//   width:300px;
//   align-items: center;
// }
.title-action{
  position: absolute;
  right:30px;
}
.title-name-wrapper{
  width:500px;
  height:40px;
  align-items: center;
}
.text-sty{
  color:#ffffff;
  font-size:30px;
}
.radius-platform{
  width:600px;
  height:600px;
  margin-top:50px;
}
.border-outer-wrapper{
  width:600px;
  height:600px;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
  border-bottom-right-radius: 300px;
  border-bottom-left-radius: 300px;
  background-color: rgb(94,81,75);
  align-items: center;
  justify-content: center;
}
.border-inner-wrapper{
  width:540px;
  height:540px;
  border-top-left-radius: 270px;
  border-top-right-radius: 270px;
  border-bottom-right-radius: 270px;
  border-bottom-left-radius: 270px;
  background-color: rgb(28,28,28);
  align-items: center;
  justify-content: center;
}
.music-icon-wrapper{
  width:440px;
  height:440px;
  align-items: center;
  justify-content: center;
}
.music-icon-img{
  width:400px;
  height:400px;
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
  border-bottom-right-radius: 200px;
  border-bottom-left-radius: 200px;
}
.word-container{
  width:750px;
  margin-top:30px;
  align-items: center;
}
.word-slider{
  height:300px;
}
.word-sty{
  margin-bottom:15px;
  font-size:30px;
  color:rgb(108,108,108);
  align-items: center;
}
.action-btn{
  width:250px;
  height:100px;
  align-items: center;
  justify-content: center;
}
.word-inner-wrapper{
  align-items: center;
  justify-content: center;
}
.top-slider-icon{
  width:50px;
  height:50px;
}
</style>
