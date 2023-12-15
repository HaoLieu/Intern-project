<template>
  <div class="bussiness-partner">
    <Transition @before-enter="beforeEnterBottom" @enter="enterBounce" appear>
      <div>
        <h1>Khách hàng - Đối tác</h1>
        <div class="center">
          <div class="line"></div>
        </div>
      </div>
    </Transition>
    <Transition @before-enter="beforeEnterBottom" @enter="enter" appear>
      <p>AITS nhiều năm qua luôn tự hào khi hợp tác cùng nhiều Hãng và Đối tác lớn trên thế giới.
        Điều này giúp khách hàng có những giải<br> pháp tổng thể thiết thực cho việc xây dựng một nền tảng hạ tầng CNTT an toàn,
        hiệu quả trong lĩnh vực Hàng không trong nước và<br> khu vực.
      </p>
    </Transition>

    <div class="auto-slide">
      <CustomerSlide></CustomerSlide>
      <PartnerSlide></PartnerSlide>
    </div>

  </div>
</template>

<script>
import PartnerSlide from './PartnerSlide.vue'
import CustomerSlide from './CustomerSlide.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const beforeEnterBottom = (el) => {
      el.style.transform = 'translateY(150px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5
      })
    }
    const enterBounce = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out'
      })
    }
    return { beforeEnterBottom, enterBounce, enter }
  },
  components: {
    PartnerSlide,
    CustomerSlide
  }
}
</script>

<style scoped>
  .bussiness-partner {
    margin-top: 10px;
  }

  h1 {
    text-align: center;
    font-size: 45px;
    color: #515151;
  }
  .line {
    background-color: #373737;
    width: 300px;
    height: 5px;
    margin-top: 5px;
    margin-right: 170px;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  p {
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: #525252;
  }

  .auto-slide {
    margin-top: 30px;
    width: 100%;
    padding: 0px 100px;
  }
</style>
