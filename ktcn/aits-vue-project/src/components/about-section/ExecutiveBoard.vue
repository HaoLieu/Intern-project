<template>
  <BaseContentBox class="box">
    <h1>Ban điều hành</h1>

    <swiper :navigation="true" :loop="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">
      <swiper-slide v-for="member in exclusiveBoard" :key="member.id">
        <div class="swiper-content">
          <div class="swiper-img">
            <img :src="require(`../../assets/ExclusiveBoard/${member.img}`)">
          </div>
          <div class="swiper-info">
            <h1>{{ member.name }}</h1>
            <p>{{ member.position }}</p>
            <span>{{ member.quote }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>

  </BaseContentBox>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Navigation]
    }
  },
  computed: {
    exclusiveBoard () {
      return this.$store.getters['exclusiveBoard/ExclusiveBoardData']
    }
  }
}
</script>

<style scoped>
  .box {
    padding-bottom: 30px;
  }

  h1 {
    font-size: 30px;
    padding: 20px 0px;
  }

  .swiper {
  width: 100%;
  height: 520px;
}

  .swiper-content {
    display: flex;
    flex-direction: row;
  }

  .swiper-img {
    width: 680px;
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .swiper-info {
    flex: 1;
    text-align: center;
    padding: 0px 70px;
    color: #6b6c6f;
  }

  .swiper-info h1{
    font-size: 25px;
    padding-top: 0px;
    padding-bottom: 13px;
    font-weight: bold;
    color: #3a4353;
  }

  p {
    font-size: 20px;
    margin-bottom: 50px;
  }

  span {
    line-height: 1.6;
    font-size: 22px;
  }
</style>
