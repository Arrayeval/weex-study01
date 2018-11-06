 <template>
  <div class="main-container">
    <div class="header-wrapper">
     <HomeHeader  @getLeftModal = "_getLeftModal"></HomeHeader>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import HomeHeader from '@/BaseCompoents/Header'
import ListHome from '@/components/ListHome'
import Modal from '@/BaseCompoents/Modal'
export default {
  name: 'Login',
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
    HomeHeader,
    Modal,
    ListHome
  }
}
</script>
<style lang="scss" scoped>
  @import '~/scss/minin.scss';
  .main-container{
    // display: flex;
    // flex-direction: column;
  }
  .header-wrapper{
    height:80px
  }
</style>
