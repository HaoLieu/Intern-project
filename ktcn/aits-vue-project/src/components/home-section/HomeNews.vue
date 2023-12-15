<template>
  <div class="home-news">
    <Transition @before-enter="beforeEnterBottom" @enter="enterTitle" appear>
      <div>
        <h1>Tin tức</h1>
        <div class="line"></div>
      </div>
    </Transition>
    <Transition @before-enter="beforeEnter" @enter="enter" appear>
      <div class="dotline"></div>
    </Transition>

    <div class="news-container">
      <NewsGridItems></NewsGridItems>
    </div>
    <NewsGridItem></NewsGridItem>
  </div>
</template>

<script>
import NewsGridItems from './NewsGridItems.vue'
import NewsGridItem from './NewsGridItem.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
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
      el.style.transform = 'translateY(300px)'
      el.style.opacity = 0
    }
    const enterTitle = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'bounce.out'
      })
    }
    return { beforeEnter, enter, beforeEnterBottom, enterTitle }
  },
  components: {
    NewsGridItems,
    NewsGridItem
  }
}
</script>

<style scoped>
  .home-news {
    margin-top: 40px;
    padding: 100px;
  }

  h1 {
    font-size: 40px;
  }

  .line {
    background-color: #515151;
    width: 230px;
    height: 5px;
    margin-top: 5px;
  }

  .dotline {
    margin: 25px 0px;
    border-top: 3px dotted silver;
  }

  .news-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    margin-bottom: 50px;
    /* grid-template-rows: 100px,100px,100px; */
  }

</style>
