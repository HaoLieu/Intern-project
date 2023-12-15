<template>
  <div class="sport-culture">
    <div class="title">
      <div class="line"></div>
      <h1>Góc thể thao - văn hóa</h1>
    </div>

    <SportCultureSwiper></SportCultureSwiper>
  </div>
</template>

<script>
import SportCultureSwiper from './SportCultureSwiper.vue'

export default {
  components: {
    SportCultureSwiper
  }
}
</script>

<style scoped>
  .sport-culture {
    margin-top: 60px;
    width: 100%;
    background-color: #f3f4f6;
    padding: 20px;
  }

  .title{
    display: flex;
  }

  .line {
    width: 5px;
    height: 40px;
    background-color: orange;
    border-radius: 30px;
  }

  h1 {
    margin-left: 10px;
    margin-top: 8px;
    font-size: 18px;
    color: #374151;
    text-transform: uppercase;
  }
</style>
