<template>
  <div class="intro">
    <div class="intro-title">
      <div class="line"></div>
      <h1>Tin Đảng - Đoàn</h1>
    </div>
    <router-link to="/news">Xem toàn bộ ></router-link>
  </div>

  <div class="news-container-2">
    <div v-for="unionNew in  unionNews.slice(0, 2) " :key="unionNew.unionId">
        <div class="news-box" >
          <div>
            <router-link :to="{ name: 'UnionNewsDetail', params: { id: unionNew.unionId } }">
              <img :src="require(`../../../ApiVuejs/ApiVuejs/photos/${unionNew.img}`)" id="image">
            </router-link>
          </div>
          <div class="content">
            <div>
              <p>Xã hội</p>
              <router-link :to="{ name: 'UnionNewsDetail', params: { id: unionNew.unionId } }" id="title">{{ unionNew.title }}</router-link>
            </div>
            <div class="detail">
              <p>{{ unionNew.dateUpload }}</p>
              <div class="views">
                <img src="../../assets/icon eye.png" id="icon">
                <p>{{ unionNew.views }} lượt xem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    unionNews () {
      return this.$store.getters['unionNews/UnionNewsData']
    }
  }
}
</script>

<style scoped>
  .news-container-2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
  }

  .intro {
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

  a {
    margin-top: 14px;
    text-decoration: none;
  }

  .news-box {
    display: grid;
    grid-template-columns: 190px 1fr;
    /* border: 1px solid black; */
  }

  #image {
    width: 100%;
    height: 120px;
    border-radius: 7px;
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
    color: silver;
    margin-bottom: 0px;
  }

  .content {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
</style>
