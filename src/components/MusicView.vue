<template>
  <div class="container">
    <div class="title-nav">
      <wxc-minibar title="标题"
                   background-color="#d43c33"
                   text-color="#FFFFFF"
                   right-text="更多"
                   left-button="https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"
                   use-default-return = "false"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    </div>
  </div>
</template>

<script>
import { WxcMinibar } from 'weex-ui'
const modal = weex.requireModule('modal')

export default {
  components: { WxcMinibar },
  methods: {
    minibarLeftButtonClick () {
      alert('33')
    },
    minibarRightButtonClick () {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 })
    }
  }
}
</script>
<style scoped lang="scss">
.container{
}
.title-nav{
  position: fixed;
  top:0;
  left:0;
  right:0;
}
</style>
