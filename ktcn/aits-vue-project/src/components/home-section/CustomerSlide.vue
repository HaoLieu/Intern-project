<template>
  <div class="intro-title">
    <Transition @before-enter="beforeEnterTop" @enter="enterTitle" appear>
      <div class="line"></div>
    </Transition>
    <Transition @before-enter="beforeEnterBottom" @enter="enterTitle" appear>
      <h1>KHÁCH HÀNG</h1>
    </Transition>
  </div>

  <Transition @before-enter="beforeEnter" @enter="enter" appear>
    <Swiper :slidesPerView="5" :spaceBetween="50" :loop="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">

      <SwiperSlide v-for="customer in customers" :key="customer.id">
        <img :src="require(`../../assets/Customer/${customer.img}`)">
      </SwiperSlide>
    </Swiper>
  </Transition>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const beforeEnter = (el) => {
      el.style.transform = 'translateX(-600px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out'
      })
    }
    const beforeEnterBottom = (el) => {
      el.style.transform = 'translateY(150px)'
      el.style.opacity = 0
    }
    const beforeEnterTop = (el) => {
      el.style.transform = 'translateY(-300px)'
      el.style.opacity = 0
    }
    const enterTitle = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out'
      })
    }
    return { beforeEnter, enter, beforeEnterBottom, beforeEnterTop, enterTitle, modules: [Autoplay] }
  },
  computed: {
    customers () {
      return this.$store.getters['customers/customerData']
    }
  }
}
</script>

<style scoped>
.intro-title {
  display: flex;
  margin-bottom: 20px;
}

.line {
  width: 8px;
  height: 50px;
  background-color: #747474;
  border-radius: 30px;
  left: 0;
  font-weight: bold;
}

h1 {
  margin-left: 20px;
  margin-top: 8px;
  font-size: 30px;
  color: #747474;
}

.swiper {
  width: 100%;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}
</style>
