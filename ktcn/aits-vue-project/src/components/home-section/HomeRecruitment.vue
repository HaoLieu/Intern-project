<template>
  <div class="home-recruitment">
    <img src="../../assets/banner-tuyen-dung.png">

    <div class="contain">
      <Transition @before-enter="beforeEnter" @enter="enterTitle" appear>
        <h1>Cơ hội nghề nghiệp</h1>
      </Transition>
      <Transition @before-enter="beforeEnter" @enter="enterLine" appear>
        <div class="line"></div>
      </Transition>
      <Transition @before-enter="beforeEnter" @enter="enterBtt" appear>
        <p>AITS - môi trường chuyên nghiệp, năng động, sáng tạo luôn chào đón bạn - Những <br>ứng viên mong muốn làm việc trong lĩnh vực công nghệ.</p>
      </Transition>
      <Transition @before-enter="beforeEnterLink" @enter="enterBtt" appear>
        <div class="btn-apply">
          <RouterLink to="/tuyendung">Ứng tuyển ngay</RouterLink>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const beforeEnter = (el) => {
      console.log('before enter')
      el.style.transform = 'translateY(100px)'
      el.style.opacity = 0
    }
    const beforeEnterLink = (el) => {
      console.log('before enter')
      el.style.opacity = 0
    }
    const enterTitle = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out'
      })
    }
    const enterBtt = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5
      })
    }
    const enterLine = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'bounce.out'
      })
    }
    return { beforeEnter, enterTitle, enterLine, enterBtt, beforeEnterLink }
  }
}
</script>

<style scoped>
  .home-recruitment {
    margin-top: 50px;
    position: relative;

  }

  img {
    padding: 0;
    width: 100%;
  }

  .contain {
    position: absolute;
    top: 0;
    margin: 35px 100px

  }

  h1 {
    color: #ffd564;
    font-size: 55px;
  }

  .line {
    width: 250px;
    height: 5px;
    background-color: #ffd564;
    margin-top: 5px;
  }

  p {
    font-size:25px;
    margin-top: 40px;
    color: white;
  }

  .btn-apply {
    margin-top: 60px;
  }

  a {
    padding: 15px 60px;
    background-color: #1fa4c7;
    text-decoration: none;
    color: white;
    border-radius: 30px;
    font-weight: bold;
    font-size: 20px;
  }
</style>
