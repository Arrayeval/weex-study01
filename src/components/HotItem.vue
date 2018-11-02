<template>
  <div class="main-container">
    <div class="content-wrapper">
      <ListHome/>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ListHome from '@/components/ListHome'
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
    ListHome
  },
  created () {
    this.$router.push({name: 'Recommend'})
  }
}
</script>
<style lang="scss" scoped>
</style>
