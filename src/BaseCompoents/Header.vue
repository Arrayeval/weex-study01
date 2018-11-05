<template>
  <div class="main-wrapper">
    <image resize="cover" class="nav-item"  src="../../src/assets/icons/nav.png" @click="_getLeftModal"/>
    <div class="nav-wrapper">
      <image class="nav-item" resize="cover" @click="_goToItemPart('MusicItem')"  src="../../src/assets/icons/music.png"/>
      <image class="nav-item" resize="cover" @click="_goToItemPart('HotItem')"  src="../../src/assets/icons/hotItem.png"/>
      <image class="nav-item" resize="cover" @click="_goToItemPart('VideoItem')"  src="../../src/assets/icons/video.png"/>
    </div>
    <image  class="nav-item" resize="cover" src="../../src/assets/icons/search.png"/>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    // 点击测弹框
    _getLeftModal () {
      this.$emit('getLeftModal', {
        mark: 'Header'
      })
    },

    _goToItemPart (name) {
      if (!name) {
        this.$router.push('/')
        return
      }
      this.$router.push({name})
    }
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
.nav-wrapper{
  flex-direction: row;
  width:400px;
  justify-content: space-around
}
.nav-item{
  width:40px;
  height:40px;
}
</style>
