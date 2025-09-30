<template>
  <div class="outbox">
    <swiper
    loop="true"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="inbox"
  >
    <swiper-slide><img src="/cat/Cat (1).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (2).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (3).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (4).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (5).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (6).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (7).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (8).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (9).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (10).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (11).jpg" /></swiper-slide>
    <swiper-slide><img src="/cat/Cat (12).jpg" /></swiper-slide>
  </swiper>
 

  </div>
        <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" slot="button-prev" @click='swiperPrev'></div>
    <div class="swiper-button-next" slot="button-next" @click='swiperNext'></div>

</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
    methods: {
  swiperNext() {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.slideNext();
  },
  swiperPrev() {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.slidePrev();
  },
}
  };
</script>
<style>
.outbox{
  position: relative;
  width: 80%;
  height: 500px;
  background-color: antiquewhite;
  border-radius: 20px;
}
.inbox{
  width: 60%;
  height: 100%;
  border-radius: 20px;
}

.swiper-slide {
  text-align: center;
  color: black;
  background: #fff;
  
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

img{
    height: 90%;
    border-radius: 20px;
}
</style>