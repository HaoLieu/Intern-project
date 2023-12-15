<template>
  <div class="union-news">
    <div class="title">
      <div class="line"></div>
      <h1>Tin Đảng - Đoàn</h1>
    </div>

    <div class="content">
      <UnionMainNews></UnionMainNews>
      <UnionSubNews></UnionSubNews>
      <div class="content-image">
        <img src="../../assets/news-content.png">
      </div>
    </div>
  </div>
</template>

<script>
import UnionMainNews from './UnionMainNews.vue'
import UnionSubNews from './UnionSubNews.vue'

export default {
  components: {
    UnionMainNews,
    UnionSubNews
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
