<template>
  <div class="home-products">
    <Transition @before-enter="beforeEnter" @enter="enter" appear>
      <div class="products-container">
        <h1>Sản phẩm - Dịch vụ</h1>
        <Transition @before-enter="beforeEnterBottom" @enter="enterLine" appear>
          <div class="line"></div>
        </Transition>

        <img src="../../assets/cube.png" id="picture">
        <div class="floating-box">
          <Transition @before-enter="beforeEnterBottom" @enter="enterBottom" appear>
            <div class="btn-products-float btn1">Dịch vụ Công nghệ Thông tin</div>
          </Transition>

          <Transition @before-enter="beforeEnterBottom" @enter="enterBottom" appear>
            <div class="btn-products-float btn2">Tư vấn đào tạo chuyển giao Công nghệ</div>
          </Transition>

          <Transition @before-enter="beforeEnterBottom" @enter="enterBottom" appear>
            <div class="btn-products-float btn3">Dịch vụ Xử lý dữ liệu</div>
          </Transition>
        </div>

        <Transition @before-enter="beforeEnterBottom" @enter="enterBottom" appear>
          <div>
            <p>Phương châm “ Dịch vụ tạo giá trị <br>”AITS tập trung 3 nhóm chủ lực : Dịch vụ Công nghệ Thông tin,
              <br>Dịch vụ Xử lý dữ liệu và Tư vấn đào tạo chuyển giao Công nghệ  </p>
          </div>
        </Transition>

        <Transition @before-enter="beforeEnterBottom" @enter="enterBottom" appear>
          <div class="btn-products">
            <div class="center">
              <router-link to="products">
                Khám phá về dịch vụ của chúng tôi
              </router-link>
              <img src="../../assets/small-arrow.png" >
            </div>
          </div>
        </Transition>

        <AnimatedProductsBoxes></AnimatedProductsBoxes>
      </div>
    </Transition>

    <SloganProducts></SloganProducts>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedProductsBoxes from './AnimatedProductsBoxes.vue'
import SloganProducts from './SloganProducts.vue'
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
        y: 0,
        opacity: 1,
        duration: 2
        // ease: 'bounce.out'
      })
    }
    const beforeEnterBottom = (el) => {
      console.log('before enter')
      el.style.transform = 'translateY(100px)'
      el.style.opacity = 0
    }
    const enterLine = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'bounce.out'
      })
    }
    const enterBottom = (el) => {
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.0
      })
    }
    return { beforeEnter, enter, beforeEnterBottom, enterLine, enterBottom }
  },
  components: {
    AnimatedProductsBoxes,
    SloganProducts
  }
}
</script>

<style scoped>
  .products-container {
    background-color: #17758e;
    height: 800px;
    width: 100%;
    position: relative;
  }

  #picture {
    position: absolute;
    top: 0;
    right: 0;
    height: 600px;
  }

  .home-products {
    margin-top: 10px;
  }

  h1 {
    color: white;
    font-size: 40px;
    padding: 15px 0;
  }
  .line {
    height: 5px;
    width: 25%;
    background-color: white;
  }

  p {
    margin: 60px 0;
    font-size: 22px;
    color: #44d2f9;
  }

  .btn-products {
    width: 280px;
    height: 50px;
    background-color: #1fa4c7;
    border-radius: 30px;
  }

  .center {
    display: flex;
    padding: 15px 12px;
  }

  a{
    text-decoration: none;
    padding-right: 10px;
    color: white;
    font-size: 12px;
  }

  .btn-products-float {
    background-color: #0f84a4;
    border-radius: 30px;
  }

  .btn1 {
    text-align: center;
    padding: 15px 30px;
    color: white;
    font-size: 20px;
    position: absolute;
    right: 250px;
  }

  .btn2 {
    text-align: center;
    padding: 15px 30px;
    color: white;
    font-size: 20px;
    position: absolute;
    right: 0px;
    top: 320px;
  }

  .btn3 {
    text-align: center;
    padding: 15px 30px;
    color: white;
    font-size: 20px;
    position: absolute;
    right: 290px;
    top: 465px;
  }

</style>
