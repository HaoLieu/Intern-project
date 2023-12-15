<template>
  <!-- TIn AITS -->
  <div class="item-1">
    <div class="intro">
      <div class="intro-title">
        <div class="line"></div>
        <h1>Tin AITS</h1>
      </div>
      <router-link to="/news">Xem toàn bộ ></router-link>
    </div>

    <div v-for="aitsNew in  aitsNews.slice(0, 2) " :key="aitsNew.aitsId">
      <div class="news-box" >
        <div>
          <router-link :to="{ name: 'AitsNewsDetail', params: { id: aitsNew.aitsId } }">
            <img :src="require(`../../../ApiVuejs/ApiVuejs/photos/${aitsNew.img}`)" id="image">
          </router-link>
        </div>
        <div class="content">
          <router-link :to="{ name: 'AitsNewsDetail', params: { id:aitsNew.aitsId } }" id="title">{{ aitsNew.title }}</router-link>
          <div class="detail">
            <p>{{ aitsNew.dateUpload }}</p>
            <div class="views">
              <img src="../../assets/icon eye.png" id="icon">
              <p>{{ aitsNew.views }} lượt xem</p>
            </div>
          </div>
        </div>
      </div>

      <div class="dotline"></div>
    </div>
  </div>

  <!-- Tin VietName Airline -->
  <div class="item-2">
      <div class="intro">
        <div class="intro-title">
          <div class="line"></div>
          <h1>Tin VietNam Airlines</h1>
        </div>
        <router-link to="/news">Xem toàn bộ ></router-link>
      </div>

      <div v-for="vnaNew in  vnaNews.slice(0, 2) " :key="vnaNew.vnaId">
        <div class="news-box" >
          <div>
            <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: vnaNew.vnaId } }">
              <img :src="require(`../../../ApiVuejs/ApiVuejs/photos/${vnaNew.img}`)" id="image">
            </router-link>
          </div>
          <div class="content">
            <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: vnaNew.vnaId } }" id="title">{{ vnaNew.title }}</router-link>
            <div class="detail">
              <p>{{ vnaNew.dateUpload }}</p>
              <div class="views">
                <img src="../../assets/icon eye.png" id="icon">
                <p>{{ vnaNew.views }} lượt xem</p>
              </div>
            </div>
          </div>
        </div>

        <div class="dotline"></div>
      </div>
    </div>

  <div class="item-3">
    <NewsGalleryItem></NewsGalleryItem>
  </div>
</template>

<script>
import NewsGalleryItem from './NewsGalleryItem.vue'
export default {
  components: {
    NewsGalleryItem
  },
  computed: {
    aitsNews () {
      return this.$store.getters['aitsNews/aitsNewsData']
    },
    vnaNews () {
      return this.$store.getters['vnAirlinesNews/vnAirlinesNewsData']
    }
  }
}
</script>

<style scoped>

  .intro {
    height: 35px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
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

  a {
    margin-top: 14px;
    text-decoration: none;
  }

  .news-box {
    display: grid;
    grid-template-columns: 190px 1fr;
  }

  #image {
    width: 100%;
    height: 120px;
    border-radius: 7px;
  }

  .content {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #title {
    font-weight: bold;
    font-size: 14px;
    color: black;
    margin-top: 0;
    transition: color 0.2s ease-in;
  }

  #title:hover {
    color: #1E90FF;
  }

  p{
    color: #949397;
    margin-bottom: 0px;
  }

  .detail {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }

  .views {
    display: flex;
    margin-right: 20px;
  }

  #icon {
    width: 15px;
    height: 15px;
  }

  .views p {
    padding-left: 5px;
  }

  .dotline {
    margin: 5px 0px;
    border-top: 3px dotted silver;
  }

  .item-3 {
    display: flex;
    flex-direction: column;
  }

</style>
