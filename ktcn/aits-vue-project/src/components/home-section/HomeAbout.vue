<template>
  <div class="home-about">
    <Transition name="toast" @before-enter="beforeEnter" @enter="enterTitle" appear>
      <h1>Về chúng tôi - AITS</h1>
    </Transition>
    <Transition name="toast" @before-enter="beforeEnter" @enter="enterLine" appear>
      <div class="line"></div>
    </Transition>

    <Transition name="toast" @before-enter="beforeEnter" @enter="enterBtt" appear>
      <div class="about-text">
        <div class="title">
          <p id="icon1">“</p>
          <p>Tiên phong chuyển đổi số <br>Trong lĩnh vực hàng không</p>
          <p id="icon2">”</p>
        </div>
        <div class="contain">
          <p>Công ty Cổ phần Tin học - Viễn thông Hàng không (Aits) được thành lập ngày 11/11/2008, với tiền thân là Trung tâm Thống kê Tin học
            Hàng không, trực thuộc Tổng Công ty Hàng không Việt Nam. Tự hào nằm trong chuỗi dịch vụ vận tải Hàng không chất lượng 4 sao
            của Tổng Công ty Hàng không Việt Nam, Aits ngày càng khẳng định vị thế cạnh tranh với hai mảng sản phẩm dịch vụ trọng yếu:
            Dịch vụ Công nghệ thông tin - Viễn thông và Phân tích - Xử lý dữ liệu.</p>
        </div>
      </div>
    </Transition>

    <div class="about-background">
        <AnimatedAboutBoxes></AnimatedAboutBoxes>

      <Transition name="toast" @before-enter="beforeEnter" @enter="enterBtt" appear>
        <div class="about-link">
          <router-link to="about">Tìm hiểu thêm</router-link>
          <img src="../../assets/arrow.png">
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import AnimatedAboutBoxes from './AnimatedAboutBoxes.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const beforeEnter = (el) => {
      console.log('before enter')
      el.style.transform = 'translateY(300px)'
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
        duration: 1.2
        // ease: 'bounce.out'
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
    return { beforeEnter, enterTitle, enterLine, enterBtt }
  },
  components: {
    AnimatedAboutBoxes
  }
}
</script>

<style scoped>
  .home-about {
    padding-top: 20px;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  .line {
    height: 5px;
    width: 15%;
    background-color: black;
  }

  .title {
    padding-top: 30px;
    text-transform: uppercase;
    font-size: 30px;
    display: flex;
    justify-content: center;
  }

  #icon1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 5rem;
    color: #d2d2d2;
    position: absolute;
    top: -15px;
    left: 460px;
    font-weight: bold;
  }

  #icon2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 5rem;
    color: #d2d2d2;
    position: absolute;
    bottom: 48px;
    right: 460px;
    font-weight: bold;
  }

  .contain {
    margin-top: 15px;
    text-align: center;
    font-size: 18px;
    line-height: 2;
  }

  .about-background {
    background-color: #fffaf3;
    width: 100%;
  }

  .about-boxes {
    padding-top: 20px;
    justify-content: center;
    display: flex;
  }

  a{
    text-decoration: none;
    color: black;
    font-size: 20px;
    margin-right: 10px;
  }

  .about-link {
    font-weight: bold;
    padding: 20px 50px;
  }
</style>
