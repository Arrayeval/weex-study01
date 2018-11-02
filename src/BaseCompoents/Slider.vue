<template>
  <div>
    <slider class="slider" interval="3000" auto-play="true" show-indicators="true"  scrollable ="true" :index="2">
      <div class="frame" v-for="(img, idx) in imageList" :key="idx">
        <image class="image" resize="strehch" :src="img.src"/>
        <text style="left:20px;top:20px;color:red;position:absolute">{{idx}}</text>
      </div>
    </slider>
  </div>
</template>

<style scoped>
.image {
  width: 700px;
  height: 200px;
}
.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height: 200px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.frame {
  width: 700px;
  height: 200px;
  position: relative;
}
</style>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
        },
        {
          src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
        },
        {
          src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
        }
      ]
    }
  }
}
</script>
