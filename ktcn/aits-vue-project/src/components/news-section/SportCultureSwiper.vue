<template>
  <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="sportCultureNew in sportCultureNews" :key="sportCultureNew.scId">
        <div class="title">
          <h1>{{ sportCultureNew.title }}</h1>
        </div>

        <router-link :to="{ name: 'SpCulNewsDetail', params: { id: sportCultureNew.scId } }">
          <img :src="require(`../../../ApiVuejs/ApiVuejs/photos/${sportCultureNew.img}`)">
        </router-link>

        <div class="overflow">
          {{ sportCultureNew.description }}
        </div>

        <div class="detail">
          <div class="view">
            <p>{{ sportCultureNew.dateUpload }}</p>
            <img src="../../assets/icon eye.png" id="icon">
            <p>{{ sportCultureNew.views + ' lượt xem' }} </p>
          </div>

          <router-link :to="{ name: 'SpCulNewsDetail', params: { id: sportCultureNew.scId } }">Đọc tiếp</router-link>
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
    sportCultureNews () {
      return this.$store.getters['sportCultureNews/sportCultureNewsData']
    }
  }
  // methods: {
  //   refreshedData () {
  //     this.$store.commit('sportCultureNews/refreshedData')
  //   }
  // },
  // mounted: function () {
  //   this.refreshedData()
  // }
}
</script>

<style scoped>
p {
  margin-bottom: 0px;
}

.swiper {
  width: 100%;
  height: 100%;
  margin-top: 20px
}

  .title {
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    color: #374151;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 7px;
    margin-bottom: 5px;
  }

  .overflow {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 120px;
    white-space: pre-wrap;
    line-height: 1.6;
    font-size: 15px;
    color: rgb(151, 151, 151);
  }

  #icon {
    width: 15px;
    height: 15px;
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 5px;
  }

  .detail {
    color: #808692;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }

  .view {
    display: flex;
  }

  a {
    color: #808692;
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

</style>
