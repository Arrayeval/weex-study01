<template>
  <div class="main-wrapper">
    <div class="slider-outer-wrapper">
      <div class="slider-wrapper">
        <slider-com ></slider-com>
      </div>
    </div>
    <div class="content-wrapper">
      this is contnet
    </div>
  </div>
</template>
<script>
import SliderCom from '@/BaseCompoents/Slider'
export default {
  name: 'Recommend',
  components: {
    SliderCom
  }
}
</script>
<style scoped lang="scss">
  .main-wrapper{
    position: fixed;
    top:150px;
    left:0;
    right:0
  }
  .slider-outer-wrapper{
    background: #d43c33;
    height: 150px
  }
  .slider-wrapper{
    position: absolute;
    left:0
  }
  .content-wrapper{
    margin-top:100px;
    padding-left:10px;
    padding-right:10px;
  }
</style>
