<template>
  <div class="customer-opinion">
    <div class="title">
      <h1>Khách hàng đã nói gì về chúng tôi</h1>
      <div class="line"></div>
    </div>

    <div class="opinion-info">
      <div class="figure">
        <div class="center">
          <span id="strong">98</span>
          <span>%</span>
        </div>
        <div class="detail">
          Khách hàng hài lòng với giải pháp - dịch vụ - sản phẩm mà chúng tôi mang lại. Danh sách khách hàng tăng và sự hợp tác lâu dài là minh chứng.
        </div>
      </div>
      <OpinionSlider></OpinionSlider>
    </div>

  </div>

</template>

<script>
import OpinionSlider from './OpinionSlider.vue'

export default {
  components: {
    OpinionSlider
  }
}
</script>

<style scoped>
  .customer-opinion {
    margin-top: 50px;
  }

  .title {
    display: flex;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 33px;
    color: #374151;
    width: 60%;
  }

  .line {
    border-bottom: 4px dashed #d8d8d8;
    width: 100%;
    max-height: 100%;
  }

  .opinion-info {
    width: 100%;
    height: 350px;
    margin: 30px 0px;
    display: flex;
    flex-direction: row;
  }

  .figure {
    width: 500px;
    height: 100%;
    background-color: #fbbf24;
    padding: 30px 40px 30px;
    border-radius: 0.75rem;
  }

  .center {
    text-align: center;
  }

  #strong{
    font-size: 100px;
    text-shadow:rgba(0, 0, 0, 0.25) 0px 4px 4px;
  }

  span {
    color: white;
    font-size: 50px;
  }
  .detail {
    color: #374151;
    line-height: 1.6;
    font-size: 17px;
  }

</style>
