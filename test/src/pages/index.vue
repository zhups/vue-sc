<template>
    <div class="wid">
      <div>
          <index-top></index-top>
      </div>
      <banner :listImg="listImg"></banner>
      <div style="overflow:hidden">
        <div class="din fl" style="width:50%">
          <img src="../assets/y_img/抵用券_u86.png" />
          <p>领抵用券</p>
        </div>
        <div class="din fl" style="width:50%">
          <img  src="../assets/y_img/抵用券_u86.png" />
          <p>买主要求</p>
        </div>
      </div>
      <div style="overflow:hidden">
        <div class="din fl">推荐</div>
        <div class="din fr">更多>></div>
      </div>
      <div style="text-align:cneter">
        --食品食材--
      </div>
      <div>
        <ul>
          <li >冰冻海鲜</li>
          <li>冰冻肉类</li>
          <li> </li>
          <li></li>
        </ul>
      </div>
    </div>
</template>
<script>
import Banner from '../components/Banner.vue'
import IndexTop from '../components/indexTop.vue'
export default {
  name: 'index',
  data () {
    return {
      listImg: [{
        url: 'http://ovdz7tbo3.bkt.clouddn.com/banner1.png'
      }, {
        url: 'http://ovdz7tbo3.bkt.clouddn.com/banner1.png'
      }, {
        url: 'http://ovdz7tbo3.bkt.clouddn.com/banner1.png'
      }, {
        url: 'http://ovdz7tbo3.bkt.clouddn.com/banner1.png'
      }, {
        url: 'http://ovdz7tbo3.bkt.clouddn.com/banner1.png'
      }]
    }
  },
  components: {
    Banner,
    IndexTop
  }
}
</script>
<style lang="less" type="text/less">
</style>
