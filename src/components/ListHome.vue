<!--实现互动切换屏幕-->
<template>
  <div class="list-home-wrapper">
    <div class="list-nav-view">
      <text class="nav-item  nav-item-active" @click="_goToItem('Recommend')">推荐</text>
      <text class="nav-item" @click="_goToItem('Friends')">朋友</text>
      <text class="nav-item" @click="_goToItem('RadioStation')">电台</text>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListHome',
  methods: {
    _goToItem (name) {
      this.$router.push({name})
    }
  }
}
</script>
<style>
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
  color:#e6e1e1;
}
.nav-item-active{
  color:#fff;
  border-bottom-width: 4px;
  border-bottom-color: #fff
}
</style>
