<template>
  <div class="main-wrapper">
    <div class="slider-outer-wrapper">
      <div class="slider-wrapper">
        <slider-com ></slider-com>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="nav-list-wrapper">
        <div class="nav-item">
          <div class="item-icon">
            <image class="item-img" src="/src/assets/icons/fm.png"/>
          </div>
          <text class="icon-text">私人FM</text>
        </div>
        <div class="nav-item">
          <div class="item-icon">
              <image class="item-img" src="/src/assets/icons/calendar.png"/>
          </div>
          <text class="icon-text">每日推荐</text>
        </div>
        <div class="nav-item">
          <div class="item-icon">
            <image class="item-img" src="/src/assets/icons/music-list.png"/>
          </div>
          <text class="icon-text">歌单</text>
        </div>
        <div class="nav-item">
          <div class="item-icon">
            <image class="item-img" src="/src/assets/icons/ranking_sponsor_post.png"/>
          </div>
          <text class="icon-text">排行榜</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SliderCom from '@/BaseCompoents/Slider'
export default {
  name: 'Recommend',
  components: {
    SliderCom
  }
}
</script>
<style scoped lang="scss">
  .main-wrapper{
    position: fixed;
    top:150px;
    left:0;
    right:0
  }
  .slider-outer-wrapper{
    background: #d43c33;
    height: 150px;
  }
  .slider-wrapper{
    position: absolute;
    left:0;
  }
  .content-wrapper{
    margin-top:90px;
    padding-left:10px;
    padding-right:10px;
    height:140px;
  }
  .nav-list-wrapper{
    height:140px;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }
  .nav-item{
    flex:1;
    height: 100px;
    align-items: center;
    justify-content: center
  }
  .item-icon{
    width: 80px;
    height:80px;
    background-color:#d43c33;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    justify-content: center;
    align-items: center
  }
  .icon-text{
    text-align: center;
    margin-top:10px;
    font-size:10px;
  }
  .item-img{
    width:70px;
    height:70px;
  }
</style>
