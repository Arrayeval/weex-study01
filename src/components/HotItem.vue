<template>
  <div class="main-container">
    <div class="content-wrapper">
      <ListHome/>
    </div>
    <router-view></router-view>
    <div class="player-wrapper">
      <Player/>
    </div>
  </div>
</template>
<script>
import ListHome from '@/components/ListHome'
import Player from '@/BaseCompoents/Player'
export default {
  name: 'MusicItem',
  data () {
    return {
      data: [1, 3, 4]
    }
  },
  methods: {
    goWexDemo () {
      this.$router.push({name: 'WexDemo'})
    },
    _getLeftModal () {
      // this.$router.push({name: 'WexDemo'})
      this.$refs.Modal.openBottomPopup()
    }
  },
  components: {
    ListHome,
    Player
  },
  created () {
    this.$router.push({name: 'Recommend'})
  }
}
</script>
<style lang="scss" scoped>
.content-wrapper{
  margin-bottom:20px
}
.player-wrapper{
  position: fixed;
  bottom:0;
  left:0;
  right:0;
}
</style>
