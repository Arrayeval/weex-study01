 <template>
  <div class="main-container">
    <div class="header-wrapper">
     <HomeHeader  @getLeftModal = "_getLeftModal"></HomeHeader>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
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
    height:80px;
    position: fixed;
    top:0;
    left:0;
    right:0
  }
  .content-wrapper{
    position: fixed;
    top:80px;
    left:0;
    right:0
  }
</style>
