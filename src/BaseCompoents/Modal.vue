 <template>
  <div class="wrapper">
    <!-- <div class="btn yellow  btn-margin" @click="openBottomPopup">
    </div> -->
    <wxc-popup popup-color="rgb(92, 184, 92)"
               :show="isBottomShow"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="left"
               popupColor = "#fff"
               width="600"
               height="400">
      <div class="demo-content">
        <slot></slot>
      </div>
    </wxc-popup>
  </div>
</template>

<script>
import { WxcPopup } from 'weex-ui'
export default {
  name: 'Modal',
  components: { WxcPopup },
  data: () => ({
    isBottomShow: false,
    height: 400
  }),
  methods: {
    openBottomPopup () {
      this.isBottomShow = true
    },
    // 非状态组件，需要在这里关闭
    popupOverlayBottomClick () {
      this.isBottomShow = false
    }
  }
}
</script>
