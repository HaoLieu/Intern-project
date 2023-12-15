<template>
  <Transition name="toast" @before-enter="beforeEnter" @enter="enterTitle" appear>
    <div class="about-boxx">
      <div v-for="about in aboutBox" :key="about.id">
        <div class="box">
          <div class="header">
            <img :src="require(`../../assets/${about.icon}`)">
            <h1>{{ about.title }}</h1>
          </div>
          <p>{{ about.description }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
  img {
    height: 50px;
    width: 50px;
    margin-right: 20px;
  }

  h1 {
    font-size: 30px;
  }

  p{
    font-size: 18px;
    line-height: 2;
  }

  .box{
    margin: 0 50px;
  }

  .header {
    display: flex;
  }

  .about-boxx {
    padding-top: 20px;
    justify-content: center;
    display: flex;
  }
</style>

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
    const enterTitle = (el) => {
      console.log('start to enter')
      gsap.to(el, {
        scrollTrigger: el,
        y: 0,
        opacity: 1,
        duration: 2
        // ease: 'bounce.out'
      })
    }
    return { beforeEnter, enterTitle }
  },
  data () {
    return {
      aboutBox: [
        {
          id: '1',
          icon: 'icon tam nhin.jpg',
          title: 'Tầm nhìn',
          description: 'Là doanh nghiệp dẫn đầu về cung cấp các sản phẩm, dịch vụ công nghệ số trong lĩnh vực Hàng không, Du lịch và Lữ hành trong Khu vực.'
        },
        {
          id: '2',
          icon: 'icon su menh.jpg',
          title: 'Sứ mệnh',
          description: 'Cung cấp các sản phẩm, dịch vụ số, công nghệ thông tin, viễn thông, xử lý dữ liệu tốt nhất cho khách hàng.Đồng hành trở thành đối tác tin cậy và phát triển bền vững.'
        },
        {
          id: '3',
          icon: 'icon muc tieu.jpg',
          title: 'Mục tiêu',
          description: 'Xác định tiên phong, dẫn đầu thị trường cung cấp sản phẩm dịch vụ Công nghệ thông tin - Viễn thông, Xử lý dữ liệu trong lĩnh vực Hàng không.'
        }
      ]
    }
  }
}
</script>
