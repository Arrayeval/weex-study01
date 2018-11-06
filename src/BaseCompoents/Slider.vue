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
  width: 680px;
  height: 180px;
}
.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height:200px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.image{
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.frame {
  width: 700px;
  height: 200px;
  /* position: relative; */
  align-items: center;
}
</style>

<script>
export default {
  data () {
    return {
      imageList: [
        {
          src: 'http://a.hiphotos.baidu.com/image/h%3D300/sign=b18b23079522720e64cee4fa4bca0a3a/4a36acaf2edda3ccc4a53e450ce93901213f9216.jpg'
        },
        {
          src: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=6f4318466e2762d09f3ea2bf90ed0849/5243fbf2b211931376d158d568380cd790238dc1.jpg'
        },
        {
          src: 'http://e.hiphotos.baidu.com/image/h%3D300/sign=c7020a599f45d688bc02b4a494c37dab/4b90f603738da9773ded4541bd51f8198718e39e.jpg'
        }
      ]
    }
  }
}
</script>
