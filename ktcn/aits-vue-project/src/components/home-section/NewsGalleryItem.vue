<template>
  <div class="intro">
    <div class="intro-title">
      <div class="line"></div>
      <h1>Thư viện hình ảnh</h1>
    </div>
  </div>
  <div class="gallery-slide">
    <swiper
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :modules="modules" class="mySwiper">
      <swiper-slide v-for="newsGalleryItem in newsGalleryItems" :key="newsGalleryItem.id">
        <div class="swiper-content">
          <div class="swiper-img">
            <img :src="require(`../../assets/img-gallery/${newsGalleryItem.img}`)">
          </div>
          <div class="swiper-title">
            <p>{{ newsGalleryItem.title }}</p>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev">
        <img src="../../assets/arrow-left.png">
      </div>
      <div class="swiper-button-next">
        <img src="../../assets/arrow-right.png">
      </div>
    </swiper>
    <div class="gallery-detail">
      <img src="../../assets/icon eye.png" id="icon">
      <p>1456</p>
      <img src="../../assets//icon share.png" id="icon">
      <p>80</p>
      <img src="../../assets//icon download.png" id="icon">
      <router-link to="/">
        Xem chi tiết
      </router-link>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation]
    }
  },
  data () {
    return {
      newsGalleryItems: [
        {
          id: 1,
          img: 'gallery-poster.jpg',
          title: 'CHÍNH SÁCH CHẤT LƯỢNG DỊCH VỤ VÀ AN NINH THÔNG TIN'
        },
        {
          id: 2,
          img: 'img-gallery1.jpg',
          title: 'CHÀO MỪNG 14 NĂM THÀNH AITS - VỮNG BƯỚC VƯƠN XA'
        },
        {
          id: 3,
          img: 'img-gallery2.jpg',
          title: 'AITS : Ký ức vui vẻ 2022 và Đồng hành kiến tạo trong tương lai'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .intro {
    height: 45px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .intro-title {
    display: flex;
  }

  .line {
    width: 5px;
    height: 50px;
    background-color: #ffc529;
    border-radius: 30px;
  }

  h1 {
    margin-left: 10px;
    margin-top: 8px;
    font-size: 25px;
  }

  .gallery-slide {
    width: 410px;
    height: 420px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 4px rgba(0,0,0,.25);
    border-radius: 0.75rem;
  }

  .swiper {
  width: 100%;
  height: 100%;
  flex: 1;
}

.swiper-slide img {
  width: 100%;
  height: 280px
}

#poster {
  height: 50%;
}
.swiper-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.swiper-img {
  height: 300px;
}

.swiper-title {
  flex: 1;
}

 p {
  color: #949397;
 }

.swiper-title p {
  margin: 5px 10px;
  font-size: 20px;
  font-weight: bold
}

.gallery-detail {
  margin-top: 20px;
  height: 50px;
  display: flex;
  align-items: flex-end;
  position: relative;
}

#icon {
  width: 20px;
  height: 20px;
  margin: 10px 10px;
}

p {
  margin: 10px 0px;
}

a {
  position: absolute;
  right: 0;
  padding: 15px 50px;
  font-size: 20px;
  border-radius: 20px 0 10px;
  border-width: 1px;
  background-color: #ffc529;
  border-color: #ffc529;
  border-bottom: 0px;
  border-right: 0px;
  color: white;
  text-decoration: none;
}

.swiper-button-next:after,
.swiper-button-prev:after  {
  content: '';
}

.swiper-button-next img,
.swiper-button-prev img{
  width: 42px;
  height: 42px;
}

</style>
