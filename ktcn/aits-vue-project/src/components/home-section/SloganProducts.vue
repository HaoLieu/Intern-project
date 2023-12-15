<template>
  <div class="slogan">
    <Transition @before-enter="beforeEnterTop" @enter="enterLine" appear>
      <img src="../../assets/product-slogan.png">
    </Transition>
    <Transition @before-enter="beforeEnterBottom" @enter="enterLine" appear>
      <div class="center">
        <p id="icon1">“</p>
        <p style="padding-top:18px ;">Với phương châm "Chất lượng dịch vụ là danh dự của Aits", chúng tôi <br>  cam kết mang đến Sản phẩm - Dịch vụ tối ưu nhất tới khách hàng.</p>
        <p id="icon2">”</p>
      </div>
    </Transition>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const beforeEnterBottom = (el) => {
      el.style.transform = 'translateY(120px)'
      el.style.opacity = 0
    }
    const beforeEnterTop = (el) => {
      el.style.transform = 'translateY(-300px)'
      el.style.opacity = 0
    }
    const enterLine = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5
      })
    }
    return { beforeEnterBottom, beforeEnterTop, enterLine }
  }
}
</script>

<style scoped>
  .slogan {
    margin: 290px 0 50px;
    position: relative;
  }

  img {
    width: 100%;
  }

  .center {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 30px;
    color: #fc601f;
    margin-bottom: 0px;
    font-weight: bold;
  }

  #icon1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 6rem;
    color: #fc601f;
    position: absolute;
    top: -35px;
    left: 135px;
    font-weight: bold;
  }

  #icon2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 5rem;
    color: #fc601f;
    position: absolute;
    bottom: -65px;
    right: 150px;
    font-weight: bold;
  }
</style>
