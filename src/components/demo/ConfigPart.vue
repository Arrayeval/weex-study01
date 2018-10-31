<template>
  <wxc-button text="确定" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
</template>
<script>
import { WxcButton } from 'weex-ui'
export default {
  components: { WxcButton },
  methods: {
    wxcButtonClicked (e) {
      console.log(e)
    }
  }
}
</script>
