<template>
  <Transition name="toast" @before-enter="beforeEnter" @enter="enter" appear>
  <div class="animated-circles">
    <div class="box" v-for="circleContent in circleContents" :key="circleContent.id">
      <img src="../../assets/circle.png" class="img-margin">
        <div class="animated-words">
          <p class="number">{{ circleContent.number }}</p>
          <p class="sub">{{ circleContent.sub }}</p>
        </div>
      <p>{{ circleContent.rest }}</p>
    </div>
  </div>
  </Transition>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const beforeEnter = (el) => {
      console.log('before enter')
      el.style.opacity = 0
    }
    const enter = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power1.out'
      })
    }
    return { beforeEnter, enter }
  },
  data () {
    return {
      circleContents: [
        {
          id: 1,
          number: 15,
          sub: 'Năm',
          rest: 'Thành lập - Phát triển'
        },
        {
          id: 2,
          number: 3,
          sub: 'Trụ sở',
          rest: 'Trải 3 miền'
        },
        {
          id: 1,
          number: 3,
          sub: 'Nhóm',
          rest: 'Sản phẩm chủ lực'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .animated-circles {
    display: flex;
    justify-content: center;
    padding: 8px;
    position: absolute;
    left: 0;
    right: 0;
    top: 12px
  }

  .box {
    position: relative;
  }

  .img-margin {
    margin: 0 50px;
  }

  .animated-words {
    position: absolute;
    top: 30px;
    left:0;
    right:0;
  }

  .number {
    color: #02386f;
    font-size: 45px;
    font-weight: bold;
    margin-bottom: 0;
  }

  .sub {
    color: #02386f;
    font-size: 35px;
  }

  p {
    text-align: center;
    color: #02386f;
    font-size: 19px;
    font-weight: bold;
  }

</style>
