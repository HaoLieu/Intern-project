<template>
  <div class="notable-project">
    <div class="intro-title">
      <div class="line"></div>
      <h1>Dự án tiêu biểu</h1>
    </div>

    <div class="intro-content">
      <p>AITS đồng hành hợp tác chiến lược phát triển nhiều dự án quy mô cho các khách hàng . Chúng tôi tự hào góp phần mang lại những giá trị cho Doanh nghiệp của bạn !
      </p>
    </div>

    <NotableProjectSlider></NotableProjectSlider>
  </div>
</template>

<script>
import NotableProjectSlider from './NotableProjectSlider.vue'

export default {
  components: {
    NotableProjectSlider
  }
}
</script>

<style scoped>
  .notable-project {
    margin-top: 50px;
  }

  .intro-title {
    display: flex;
  }

  .line {
    width: 8px;
    height: 50px;
    background-color: #374151;
    border-radius: 30px;
    left: 0;
  }

  h1 {
    margin-left: 20px;
    margin-top: 8px;
    font-size: 30px;
    color: #374151;
  }

  .intro-content {
    margin-bottom: 30px;
  }

  p {
    padding: 0px 250px;
    text-align: center;
    margin-top: 30px;
    color: grey;
    font-size: 19px;
    line-height: 1.6;
  }

</style>
