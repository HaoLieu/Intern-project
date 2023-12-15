<template>
  <section class="home-section">

    <Swiper :slidesPerView="1" :loop="true" :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">

      <SwiperSlide>
        <img src="../../assets/aitsTrangChu.png" id='banner'>
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../assets/aitsTrangChu2.png" id='banner'>
      </SwiperSlide>

    </Swiper>

    <div class="animated-hi">
      <Transition name="toast" @before-enter="beforeEnter" @enter="enter" appear>
        <div class="animated-block"> </div>
      </Transition>
      <AnimatedCircle></AnimatedCircle>
    </div>
    <div class="animated-word"></div>
    <HomeAbout></HomeAbout>
    <HomeProducts></HomeProducts>
    <HomeBussinessPartner></HomeBussinessPartner>
    <HomeRecruitment></HomeRecruitment>
    <HomeNews></HomeNews>
    <!-- <Transition name="toast" @before-enter="beforeEnter" @enter="enter" appear>
      <div class="animated-block">
        <h1>Hi</h1>
        <div>
          <h2>Hi2</h2>
        </div>
        <h3>Hi</h3>
      </div>
    </Transition> -->
  </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCircle from './AnimatedCircle.vue'
import HomeAbout from './HomeAbout.vue'
import HomeProducts from './HomeProducts.vue'
import HomeBussinessPartner from './HomeBussinessPartner.vue'
import HomeRecruitment from './HomeRecruitment.vue'
import HomeNews from './HomeNews.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const beforeEnter = (el) => {
      console.log('before enter')
      el.style.transform = 'translateX(-100px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        x: 0,
        opacity: 1,
        duration: 3,
        ease: 'elastic.out(1,0.1)'
      })
    }
    return { beforeEnter, enter, modules: [Autoplay] }
  },
  components: {
    AnimatedCircle,
    HomeAbout,
    HomeProducts,
    HomeBussinessPartner,
    HomeRecruitment,
    HomeNews,
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

#banner{
  padding: 8px;
  height: 800px;
  width: 100%
}

.animated-block {
  width: 100%;
  background-color: #ffc529;
  display: block;
  height: 180px;
}

.animated-hi {
  position: relative;
}

.animated-word {
  width: 100%;
  height: 120px;
}

.swiper {
  width: 100%;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}
/* .toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-enter-active {
  transition: all 0.3s ease;
  animation: wobble 1s ease;
}

.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}

.toast-leave-active {
  transition: all 0.3s ease;
} */
</style>
