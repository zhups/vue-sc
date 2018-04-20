<template>
    <div class="wid">
      <div>
          <index-top></index-top>
      </div>
      <banner :listImg="listImg"></banner>
      <router-link :to="{name:'productInfo'}" >按钮</router-link>
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
