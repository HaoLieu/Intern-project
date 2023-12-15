<template>
  <swiper
    :slidesPerView="1"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide>
    <div class="container">
      <div class="customer">
        <img src="../../assets/Opinion/vna-circle.png">
        <span>Đại diện Vietnam Airlines:</span>
        <p>Đánh giá về Phần mềm hệ thống phân tích rủi ro cho TCT HKVN.</p>
      </div>
      <div class="opinion">
        <div>
          <span>"</span>
          Chúng tôi đánh giá cao những giá trị mà phần mềm hệ thống Phân tích rủi ro của AITS với nhiều tính năng quan trọng,
          phân tích chuyên sâu về các rủi ro trọng yếu giúp “Nâng cao hiệu quả” và “Tạo ra giá trị” đối với TCT HKVN.
          <span>"</span>
        </div>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="container">
        <div class="customer">
          <img src="../../assets/Opinion/viags-circle.png">
          <span>Đại diện của Công ty TNHH MTV Dịch vụ mặt đất sân bay Việt Nam - VIAGS</span>
          <p>Đánh giá về những dự án do AITS đã triển khai cho VIAGS:</p>
        </div>
        <div class="opinion">
          <div>
            <span>"</span>
            Bên cạnh vai trò là đơn vị cung cấp dịch vụ CNTT cho TCT HK, AITS luôn nỗ lực phát triển không ngừng để tiếp tục
            nâng cao năng lực doanh nghiệp để đáp ứng yêu cầu đa dạng không ngừng đối với các Doanh nghiệp có vốn góp của VNA
            <span>"</span>
          </div>
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
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation, Autoplay]
    }
  },
  computed: {
    projects () {
      return this.$store.getters['projects/projectData']
    }
  }
}
</script>

<style scoped>
  .swiper {
    flex: 1;
    height: 100%;
  }

  .container {
    padding: 0px 90px 0px 120px;
    display: flex;
    flex-direction: row;
    background-color: #fff9e8;
    border-radius: 0.75rem;
    height: 95%;
    margin-top: 10px;
  }

  .customer {
    width: 180px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  img {
    margin-left: 28px;
    height: 128px;
    width: 128px;
  }

  span {
    color: #1fa4c7;
    font-size: 17px;
    font-weight: bold;
  }

  p {
    margin-top: 7px;
    font-size: 17px;
    color: #b1b6bb;
  }

  .opinion {
    flex: 1;
    color: grey;
    line-height: 1.6;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25px;
  }

  .opinion span {
    color: grey;
    font-size: 20px;
  }

.swiper-button-next:after,
.swiper-button-prev:after  {
  content: '';
}

.swiper-button-next img,
.swiper-button-prev img{
  width: 42px;
  height: 42px;
  position: absolute;
}

.swiper-button-prev {
  left: -6px;
}
</style>
