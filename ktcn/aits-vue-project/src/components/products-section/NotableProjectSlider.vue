<template>
  <div class="notable-project-slider">
    <div class="caption-container">
      <div class="caption">
          <span id="company">AITS</span>
          <span>  đã</span>
          <br>
          <span>đồng hành cùng</span>
          <br>
          <span id="quantities">hơn 100 </span>
          <span>doanh nghiệp</span>
      </div>
    </div>
    <div>
      <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :navigation="{
            nextEl: '.swiper-button-next',
          }"
          :loop="true"
          :modules="modules"
          class="mySwiper"
        >

        <swiper-slide v-for="project in projects" :key="project.id">
          <img :src="require(`../../assets/Project/${project.img}`)">
          <div class="background"></div>
          <div class="card-content">
            <div class="title">
              <div class="line"></div>
              <h1>{{ project.title }}</h1>
            </div>
            <div class="content">
              {{ project.content }}
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-button-next">
          <img src="../../assets/arrow-right.png">
        </div>
        </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

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
  computed: {
    projects () {
      return this.$store.getters['projects/projectData']
    }
  }
}
</script>

<style scoped>
  .notable-project-slider {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .caption-container {
    width: 375px;
    height: 100%;
  }

  .caption {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  span {
    font-size: 40px;
    color: orange;
    line-height: 1.6;
    word-spacing: 5px;
  }

  #company {
    color: #5bc0de;
    font-size: 50px;
    font-weight: bold;
  }

  #quantities {
    font-weight: bold;
  }

  .swiper {
    position: relative;
    right: 0;
    width: 915px;
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 0.75rem;
  }

  .swiper-slide {
    height: 100%;
    width: 100%;
    position: relative;
}

.swiper-button-next:after {
  content: '';
}

.swiper-button-next img {
  width: 30px;
  height: 30px;
  right: 5px;
}

.background {
  background-color: rgba(0,81,102,1);
  border-bottom-right-radius: 1rem;
  border-top-left-radius: 0.75rem;
  opacity: 0.6;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
}

.card-content {
  position: absolute;
  top: 0;
  width: 100%;
}

.title {
  padding-top: 57px;
  width: 100%;
  display: flex;
}

.line {
  border-bottom: 2px solid white;
  width: 50px;
  max-height: 100%;
  margin-bottom: 11px;
  margin-left: 5px;
}

h1 {
  color: white;
  font-size: 22px;
  font-weight: bold;
  padding-left: 5px;
}

.content {
  position: absolute;
  color: white;
  font-size: 20px;
  padding: 0px 20px 0px 15px ;
  text-transform: uppercase;
}

</style>
