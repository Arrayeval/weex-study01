<!--实现互动切换屏幕-->
<template>
  <div class="list-home-wrapper">
    <div class="list-nav-view">
      <text class="nav-item" @click="_goToItem('Recommend')" :class='[_activeClassSty("Recommend")]'>推荐</text>
      <text class="nav-item" @click="_goToItem('Friends')" :class='[_activeClassSty("Friends")]'>朋友</text>
      <text class="nav-item" @click="_goToItem('RadioStation')" :class='[_activeClassSty("RadioStation")]'>电台 {{object}}</text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListHome',
  data () {
    return {
      object: weex.config.env.platform, // 平台信息
      cutItem: 'Recommend'
    }
  },
  methods: {
    _goToItem (name) {
      if (!name) return
      this.cutItem = name
      this.$router.push({name})
    },

    // weex 不支持动态加载样式(vue的平常写法,故有此方法折中)
    _activeClassSty (tagName) {
      if (tagName === this.cutItem) {
        return 'nav-item-active'
      }
      return ''
    }
  }
}
</script>
<style scoped>
.list-home-wrapper{
  position: fixed;
  top:80px;
  left:0;
  width:750px;
  padding-bottom:20px;
}
.list-nav-view{
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #d43c33;
  height:80px;
  padding-bottom:5px;
}
.nav-item{
  height:60px;
  line-height: 60px;
  font-size:30px;
  color:#e6e1e1;
}
.nav-item-active{
  color:#ffffff;
  border-bottom-width: 4px;
  border-bottom-color: #ffffff
}
</style>
