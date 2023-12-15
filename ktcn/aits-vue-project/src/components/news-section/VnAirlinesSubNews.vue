<template>
  <div class="sub-news">
    <div class="vertical-flex">
      <div v-for="vnAirSubNew in vnAirSubNews.slice(0,6)" :key="vnAirSubNew.vnaId">
        <div class="sub">
          <div>
            <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: vnAirSubNew.vnaId } }">
              <img :src="require(`../../../ApiVuejs/ApiVuejs/photos/${vnAirSubNew.img}`)">
            </router-link>
          </div>
          <div class="content">
            <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: vnAirSubNew.vnaId } }">{{ vnAirSubNew.title}}</router-link>
            <div class="detail">
              <p>{{ vnAirSubNew.dateUpload }}</p>
              <div class="views">
                <img src="../../assets/icon eye.png" id="icon">
                <p>{{ vnAirSubNew.views }} lượt xem</p>
              </div>
            </div>
          </div>
        </div>

        <div class="dotline"></div>
      </div>

      <!-- <div class="sub-5">5</div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    vnAirSubNews () {
      return this.$store.getters['vnAirlinesNews/vnAirlinesNewsData']
    }
  }
}
</script>

<style scoped>
.sub-news {
  flex: 1;
  margin: 0px 20px;
}

.vertical-flex {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sub img {
  width: 100%;
  height: 120px;
  border-radius: 8px;
}

.dotline {
  margin: 5px 0px 15px;
  border-top: 3px dotted silver;
}

.sub {
  flex: 1;
  display: grid;
  grid-template-columns: 150px 1fr;
  padding-bottom: 10px;
}

.content {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: #374151;
}

.detail {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #808692;
}

.detail p {
    margin-bottom: 0px;
  }

  #icon {
    width: 15px;
    height: 15px;
    margin-top: 3px;
    margin-right: 2px;
  }

.views {
  display: flex;
  margin-right: 10px;
}

.views p {
  padding-left: 2px;
}

.sub-5 {
  background-color: orange;
  height: 80px;
}
</style>
