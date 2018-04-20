<template>
    <div class="swiperBox">
       <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="items in listImg" :key="items"><img :src="items.url" alt=""></swiper-slide>
        <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['listImg'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: 3000,
        notNextTick: true,
        pagination: '.swiper-pagination',
        touchRatio: 0.4,
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
      }
    }
  }
}
</script>

<style lang="less">
.swiper-slide {
  margin-right:0;
}
.swiper-slide img {
  width:100%;
  height:100%;
}
</style>
