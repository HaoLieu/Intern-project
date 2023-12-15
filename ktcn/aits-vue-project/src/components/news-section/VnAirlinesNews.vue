<template>
  <div class="vn-airlines-news">
    <div class="title">
      <div class="line"></div>
      <h1>Tin Vietnam Airlines</h1>
    </div>

    <div class="content">
      <VnAirlinesMainNews></VnAirlinesMainNews>
      <VnAirlinesSubNews></VnAirlinesSubNews>
      <div class="content-image">
        <img src="../../assets/news-content.png">
      </div>
    </div>
  </div>
</template>

<script>
import VnAirlinesMainNews from './VnAirlinesMainNews.vue'
import VnAirlinesSubNews from './VnAirlinesSubNews.vue'

export default {
  components: {
    VnAirlinesMainNews,
    VnAirlinesSubNews
  }
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  display: flex;
  border: none;
}

.line {
  width: 5px;
  height: 50px;
  background-color: orange;
  border-radius: 30px;
}

h1 {
  margin-left: 10px;
  margin-top: 8px;
  font-size: 25px;
  font-size: 30px;
  color: #374151;
}

.content {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}

.content-image {
  flex: 1;
}

.content-image img {
  width: 100%;
  height: 100%;
}
</style>
