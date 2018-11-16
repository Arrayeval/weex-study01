<template>
  <div class="container">
    <div class="title-nav">
      <wxc-minibar title="人物信息"
        background-color="#d43c33"
        text-color="#FFFFFF"
        right-text="更多"
        left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"
        :use-default-return = false
        @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
        @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      </wxc-minibar>
    </div>
    <!--主体内容-->
    <div class="content-container">
      <div class="top-info-view">
        <div class="img-icon">
          <image class="img" src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3579341405,2405851837&fm=173&app=25&f=JPEG?w=570&h=391&s=668003AD560338E04EBD599B0300D080"/>
          <!-- <ep-slider></ep-slider> -->
        </div>
        <div class="person-view">
          <div class="item-wrapper">
            <list class="list-wrapper">
              <cell class="list-item">
                <text class="item-lag">姓名：</text>
                <text class="item-content">邓紫棋</text>
              </cell>
              <cell class="list-item">
                <text class="item-lag">职业：</text>
                <text class="item-content">歌手，创作人，音乐人</text>
              </cell>
              <cell class="list-item">
                <text class="item-lag">专辑：</text>
                <text class="item-content">《喜欢你》、《泡沫》、《毒液》、《变形金刚》...</text>
              </cell>
              <cell class="list-item">
                <text class="item-lag">经历：</text>
                <text class="item-content">今日中国股价大跌，引起股民惊慌失措今日中国股价大跌，引起股民惊慌失措今日中国股价大跌，引起股民惊慌失措今日中国股价大跌，引起股民惊慌失措今日中国股价大跌，引起股民惊慌失措...</text>
              </cell>
            </list>
          </div>
        </div>
      </div>
      <div class="content-info-view">
      </div>
    </div>
  </div>
</template>
<script>
// import EpSlider from '@/BaseCompoents/EpSlider'
import { WxcMinibar } from 'weex-ui'
const modal = weex.requireModule('modal')
export default {
  components: {WxcMinibar},
  methods: {
    minibarLeftButtonClick () {
      this.$router.go(-1)
    },
    minibarRightButtonClick () {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 })
    }
  }
}
</script>
<style scoped lang="scss">
.container{
}
.title-nav{
  position: fixed;
  top:0;
  left:0;
  right:0;
}
.content-container{
  position: fixed;
  top:90px;
  left:0;
  right:0;
  bottom:0;
  padding-bottom:10px;
  padding-right:5px;
  padding-left:5px;
}
.top-info-view{
  // flex-direction: row;
}
.img-icon{
  width:740px;
  height:400px;
  // padding-left:10px;
}
.img{
  width:740px;
  height:400px;
}
.person-view{
  // margin-left:15px;
}
.list-wrapper{
  flex-direction: column;
}
.list-item{
  margin-bottom:15px;
  font-size:13px;
  flex-direction: row;

}
.item-lag{
  display: inline-block;
  width:100px;
  font-size:20px;
  font-weight:bold;
}
.item-content{
  display: inline-block;
  line-height: 40px;
  flex:1;
  font-size:20px;
}
</style>
