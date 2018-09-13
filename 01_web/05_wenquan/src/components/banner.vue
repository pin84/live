<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="../assets/img/banner/banner1.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="../assets/img/banner/banner2.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="../assets/img/banner/banner3.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="../assets/img/banner/banner4.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="../assets/img/banner/banner5.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;">
          <img src="../assets/img/banner/banner6.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

}
</script>

<style lang="stylus" scoped>

.swiper-container
  width: 100%;
  height: 100%;
  .swiper-wrapper
    transition-duration:  2s
    .swiper-slide
      text-align: center;
      background: #fff;
      a
        display block
        img
          display block
          width 100%
</style>
