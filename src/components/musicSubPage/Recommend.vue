<template>
  <list class="main-wrapper">
    <cell class="slider-outer-wrapper">
      <!-- <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <text class="indicator-text">Refreshing ...</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh> -->
      <div class="bg-col"></div>
      <div class="slider-wrapper">
        <slider-com ></slider-com>
      </div>
    </cell>
    <cell class="content-wrapper">
      <div class="nav-list-wrapper">
        <div class="nav-item">
          <div class="item-icon">
            <image class="item-img"  :src = "_getImageFile('fm.png')"/>
          </div>
          <text class="icon-text">私人FM</text>
        </div>
        <div class="nav-item">
          <div class="item-icon">
              <image class="item-img" :src = "_getImageFile('calendar.png')"/>
          </div>
          <text class="icon-text">每日推荐</text>
        </div>
        <div class="nav-item">
          <div class="item-icon">
            <image class="item-img" :src = "_getImageFile('music_list.png')"/>
          </div>
          <text class="icon-text">歌单</text>
        </div>
        <div class="nav-item">
          <div class="item-icon">
            <!-- <image class="item-img"  src="local:///ranking_sponsor_post"/> -->
            <image class="item-img" :src = "_getImageFile('ranking_sponsor_post.png')"/>
          </div>
          <text class="icon-text">排行榜</text>
        </div>
      </div>
      <div class="content-part">
        <div class="part-item-wrapper">
            <div class="title-nav">
              <text class="title-text">推荐歌单</text>
            </div>
            <div class="part-list">
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
            </div>
            <div class="title-nav">
              <text class="title-text">推荐歌单</text>
            </div>
            <div class="part-list">
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://h.hiphotos.baidu.com/image/h%3D300/sign=5573dd5fbede9c82b965ff8f5c8180d2/d1160924ab18972b132c39acebcd7b899e510a45.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://h.hiphotos.baidu.com/image/h%3D300/sign=5573dd5fbede9c82b965ff8f5c8180d2/d1160924ab18972b132c39acebcd7b899e510a45.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://h.hiphotos.baidu.com/image/h%3D300/sign=5573dd5fbede9c82b965ff8f5c8180d2/d1160924ab18972b132c39acebcd7b899e510a45.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
            </div>
              <div class="title-nav">
              <text class="title-text">推荐歌单</text>
            </div>
            <div class="part-list">
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
            </div>
              <div class="title-nav">
              <text class="title-text">推荐歌单</text>
            </div>
            <div class="part-list">
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
            </div>
              <div class="title-nav">
              <text class="title-text">推荐歌单</text>
            </div>
            <div class="part-list">
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img2.imgtn.bdimg.com/it/u=1300026058,3690059792&fm=200&gp=0.jpgg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img2.imgtn.bdimg.com/it/u=1300026058,3690059792&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
            </div>
              <div class="title-nav">
              <text class="title-text">推荐歌单</text>
            </div>
            <div class="part-list">
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
              <div class="part-item">
                <div class="part-item-icon-wrapper">
                  <image class="content-item-img" resize="cover" src="http://img2.imgtn.bdimg.com/it/u=1300026058,3690059792&fm=200&gp=0.jpg"/>
                </div>
                <text class="content-item-bottom-text">[星空的旋律]拦下整个星空的纯音乐</text>
              </div>
            </div>
        </div>
      </div>
    </cell>
  </list>
</template>
<script>
import SliderCom from '@/BaseCompoents/Slider'
import {getImageFile} from '@/utils/common'
export default {
  name: 'Recommend',
  data () {
    return {
      refreshing: false,
      lists: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    _getImageFile (ImageName) {
      return getImageFile(ImageName)
      // console.log(getImageFile(ImageName))
    }
    // onpullingdown (event) {
    // },
    // onrefresh (event) {
    //   modal.toast({ message: 'Refreshing', duration: 1 })
    //   this.refreshing = true
    //   setTimeout(() => {
    //     this.refreshing = false
    //   }, 2000)
    // },
  },
  components: {
    SliderCom
  }
}
</script>
<style scoped lang="scss">
 .refresh {
    width: 750;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top:300px;
  }
  .indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: blue;
  }
  .main-wrapper{
    position: fixed;
    top:160px;
    left:0;
    right:0;
    bottom:100px;
  }
  .slider-outer-wrapper{
    background-color: #d43c33;
    height: 220px;
    padding-top:150px;
  }
  .slider-wrapper{
    position: absolute;
    left:0;
    top:0;
    right:0;
    height:220px;
    // background-color: #d43c33;
  }
  .bg-col{
    width:750px;
    height:70px;
    background-color: #ffffff;
  }
  .content-wrapper{
    margin-top:50px;
    padding-left:10px;
    padding-right:10px;
    // min-height:140px;
  }
  .nav-list-wrapper{
    height:150px;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }
  .nav-item{
    flex:1;
    height: 120px;
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
    font-size:20px;
  }
  .item-img{
    width:70px;
    height:70px;
  }
  .content-part{
    margin-top:20px;
    // padding-left:5px;
    // padding-right:5px;
  }
  .part-item-wrapper{
    // overflow: scroll;
  }
  .title-text{
    font-size:27px;
    font-weight: bold
  }
  .part-list{
    flex-direction: row;
    justify-content: space-around;
  }
  .part-item{
    margin-top:20px;
    margin-bottom:40px;
    // flex-direction: column;
    align-items: center;
    justify-content:space-around;
    // text-align: left;
    width:200px;;
  }
  .part-item-icon-wrapper{
    width:200px;
    height:200px;
  }
  .content-item-img{
    width:200px;
    height:200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .content-item-bottom-text{
    width:200px;
    font-size:23px;
    height:70px;
    line-height: 35px;
    // text-align: left;
    padding-top:5px;
    text-overflow: ellipsis;
    color:rgb(170,170,170)
  }
</style>
