<template>
  <Transition @before-enter="beforeEnter" @enter="enter" appear>
    <div class="products-boxes">
       <div v-for="product in productsBox" :key="product.id">
        <div class="box">
          <img :src="require(`../../assets/${product.icon}`)">
          <div class="title">
            <h1>{{ product.title }}</h1>
          </div>
          <div class="text">
            <p>{{ product.description }}</p>
          </div>
        </div>
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
      el.style.transform = 'translateY(200px)'
      el.style.opacity = 0
    }
    const enter = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'bounce.out'
      })
    }
    return { beforeEnter, enter }
  },
  data () {
    return {
      productsBox: [
        {
          id: 1,
          icon: 'icon may tinh.png',
          title: 'Dịch vụ Công nghệ thông tin',
          description: 'Các dịch vụ phần mềm nghiệp vụ, cho thuê Trang thiết bị CNTT và hệ thống hạ tầng luôn sẵn sàng đóng gói và triển khai theo yêu cầu.'
        },
        {
          id: 2,
          icon: 'icon dich vu.png',
          title: 'Dịch vụ Xử lý dữ liệu',
          description: 'Xử lý chứng từ, dữ liệu vận tải hàng không phục vụ cho công tác quản lý, dự báo, quản trị, điều hành của Vietnam Airlines và các hãng hàng không quốc tế và khu vực.'
        },
        {
          id: 3,
          icon: 'icon tu van.png',
          title: 'Tư vấn đào tạo chuyển giao Công nghệ',
          description: 'Tư vấn, đào tạo, chuyển giao công nghệ sẽ xây dựng và triển khai chiến lược phát triển tổng thể cho doanh nghiệp.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.products-boxes {
    display: flex;
    justify-content: center;
  }
  .box {
    margin-top: 245px;
    width: 400px;
    height: 390px;
    background-color: white;
    margin-right: 50px;
    margin-left: 50px;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 1px 3px 5px grey ;
  }

  img {
    margin-bottom: 20px;
    height: 72px;
    width: 73px;

  }

  h1 {
    font-size: 24px;
    color: #007c9d;
  }

  .title {
    height: 60px;
  }

  p {
    margin-top: 15px;
    font-size: 18px;
  }

</style>
