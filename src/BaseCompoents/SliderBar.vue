 <template>
  <wxc-slider-bar v-bind="sliderBarCfg"></wxc-slider-bar>
</template>
<script>
import { WxcSliderBar } from 'weex-ui'
export default {
  components: { WxcSliderBar },
  data: () => ({
    sliderBarCfg: {
      length: 400,
      range: false,
      min: 0,
      max: 100,
      value: 50,
      defaultValue: 50,
      disabled: false
    }
  })
}
</script>
