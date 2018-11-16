 <template>
  <div>
      <wxc-tab-page
        class="main-wrapper"
        ref="wxc-tab-page"
        :tab-titles="tabTitles"
        :tab-styles="tabStyles"
        title-type="text"
        :need-slider= true
        :tab-page-height="tabPageHeight"
        @wxcTabPageCurrentTabSelected="getCurrentTabSelected">
        <!--最热门-->
        <list
            class="item-container"
            :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
          <!-- <cell class="border-cell"></cell> -->
          <cell class="top-cell-icon">
            <image resize="cover" class="image-icon" src="http://img1.imgtn.bdimg.com/it/u=4269449836,3142709149&fm=200&gp=0.jpg"/>
          </cell>
          <cell v-for="(item,key) in demoList"
                class="cell"
                :key="key">
              <div class="content">
                <div class="item-index">
                  <text class="item-index-num">{{key}}</text>
                </div>
                <div class="item-info-wrapper">
                  <div class="item-info-view">
                    <text class="item-title">{{item.title}}</text>
                    <text class="item-singer">{{item.source}}</text>
                  </div>
                  <div class="item-play">
                    <image class="item-img" :src = "_getImageFile('player.png')"/>
                  </div>
                </div>
            </div>
            <!-- <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                @wxcPanItemPan="wxcPanItemPan">
            </wxc-pan-item> -->
          </cell>
        </list>
        <!--青春校友-->
      </wxc-tab-page>
      <image resize="cover" class="image-icon" src="http://img2.imgtn.bdimg.com/it/u=3679679032,1668832370&fm=26&gp=0.jpg"/>
  </div>
</template>
<style scoped>
  .main-wrapper{
    justify-content: center;
  }
  .item-container {
    width: 750px;
    padding-bottom:100px;
    background-color: #ffffff;
    /* justify-content: center; */
  }
  .border-cell {
    background-color: rgb(212, 60, 51);
    width: 750px;
    height: 10px;
    margin-bottom:10px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }
  .top-cell-icon{
    height:200px;
    width:750px;
  }
  .image-icon{
    width:750px;
    height:200px;
  }
  .cell {
    background-color: #ffffff;
    padding-left:5px;
    padding-right:5px;
  }
  .content{
    width:740px;
    height:130px;
    /* border-bottom-width:1px; */
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
  }
  .item-index{
    justify-content: center;
    align-items: center;
    width:100px;
    height:120px;
  }
  .item-info-wrapper{
    flex-direction: row;
    align-items: center;
    width: 640px;
    border-bottom-color:rgb(241, 232, 232);
    border-bottom-width: 1px;
    /* padding-top:20px;
    padding-bottom:20px; */
    /* border-top-width: 1px; */
  }
  .item-info-view{
    width:550px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-index-num{
    font-size:35px;
    color:#999;
  }
  .item-title{
    font-size:35px;
    margin-bottom:10px;
  }
  .item-singer{
    width:550px;
    font-size:25px;
    color:#888;
  }
  .item-play{
    width:100px;
    height:120px;
    justify-content: center;
    align-items: center;
  }
  .item-img{
    width:70px;
    height:70px;
  }
</style>
<script>
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'
import Config from '../modules/config'
import {getImageFile} from '@/utils/common'
// const dom = weex.requireModule('dom')
export default {
  components: { WxcTabPage, WxcPanItem },
  data: () => ({
    _index: '',
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    tabList: [],
    demoList: Config.hotMuisic,
    tabPageHeight: 1334
  }),
  created () {
    this.tabPageHeight = Utils.env.getPageHeight()
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
    this.$set(this.tabList, 0, this.demoList)
  },
  methods: {
    _getImageFile (ImageName) {
      return getImageFile(ImageName)
      // console.log(getImageFile(ImageName))
    },
    // 选择tab
    getCurrentTabSelected (e) {
      const self = this
      const index = e.page
      /* Unloaded tab analog data request */
      if (!Utils.isNonEmptyArray(self.tabList[index])) {
        setTimeout(() => {
          this.$set(self.tabList, index, self.demoList)
        }, 100)
      }
    },
    // 点击item
    wxcPanItemPan (e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element)
      }
    }
  }
}
</script>
