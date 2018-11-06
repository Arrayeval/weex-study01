<template>
  <div class="main-wrapper">
    <div class="nav-item-wrapper" @click="_getLeftModal">
      <image resize="cover" class="nav-item" :src= "_getImageFile('nav.png')"/>
    </div>
    <div class="nav-wrapper">
      <div class="nav-item-wrapper">
        <image class="nav-item" resize="cover" @click="_goToItemPart('MusicItem')"  :class="[_activeClassSty('MusicItem')]"  :src = "_getImageFile('music.png')"/>
         <!-- :class="curItem === 'MusicItem' ? 'active-item' : ''"  -->
      </div>
      <div class="nav-item-wrapper">
        <image class="nav-item" resize="cover" @click="_goToItemPart('HotItem')"  :class="[_activeClassSty('HotItem')]" :src= "_getImageFile('hot_item.png')"/>
      </div>
      <div class="nav-item-wrapper">
        <image class="nav-item" resize="cover" @click="_goToItemPart('VideoItem')"  :class="[_activeClassSty('VideoItem')]"  :src= "_getImageFile('video.png')"/>
      </div>
    </div>
    <image  class="nav-item" resize="cover"   :src="_getImageFile('search.png')" />
    <Modal ref="modalPopup"></Modal>
  </div>
</template>
<script>
import Modal from '@/BaseCompoents/Modal.vue'
import {getImageFile} from '@/utils/common'
export default {
  name: 'Header',
  data () {
    return {
      showModal: false,
      curItem: 'HotItem'
    }
  },
  methods: {
    // 点击测弹框
    _getLeftModal () {
      // this.$emit('getLeftModal', {
      //   mark: 'Header'
      // })
      // this.showModal = true
      this.$refs.modalPopup.isBottomShow = true
    },

    _goToItemPart (name) {
      if (!name) {
        this.$router.push('/')
        return
      }
      this.curItem = name
      this.$router.push({name})
    },

     // weex 不支持动态加载样式(vue的平常写法,故有此方法折中)
    _activeClassSty (tagName) {
      if (tagName === this.curItem) {
        return 'nav-item-active'
      }
      return ''
    },

    // 获取image 路径
    _getImageFile (ImageName) {
      return getImageFile(ImageName)
    }
  },
  components: {
    Modal
  }
}
</script>
<style lang="scss" scoped>
.main-wrapper{
  height:80px;
  position:fixed;
  top:0;
  left:0;
  right:0;
  background-color: rgb(212,60,51);
  padding-left:10px;
  padding-right:20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav-item-wrapper{
  width:60px;
  padding-top:20px;
  padding-bottom:20px;
  padding-right:20px;
  padding-left:20px;
}
.nav-wrapper{
  flex-direction: row;
  width:400px;
  justify-content: space-around
}
.nav-item{
  width:40px;
  height:40px;
  transform: scale(1);
}
.nav-item-active{
  transform: scale(1.2);
}
</style>
