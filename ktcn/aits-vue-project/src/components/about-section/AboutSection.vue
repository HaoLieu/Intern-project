<template>
  <div class="about-section">
    <AboutBanner></AboutBanner>

    <div class="intro">
      <div class="intro-title">
        <div class="line"></div>
        <h1>Về chúng tôi - AITS</h1>
      </div>

      <p>Công ty Cổ phần Tin học - Viễn thông Hàng không (Aits) được thành lập ngày 11/11/2008, với tiền thân là Trung tâm Thống kê Tin học Hàng không,
          trực thuộc Tổng Công ty Hàng không Việt Nam. Tự hào nằm trong chuỗi dịch vụ vận tải Hàng không chất lượng 4 sao của Tổng Công ty Hàng không Việt Nam,
          Aits ngày càng khẳng định vị thế cạnh tranh với hai mảng sản phẩm dịch vụ trọng yếu: Dịch vụ Công nghệ thông tin - Viễn thông và Phân tích - Xử lý dữ liệu.</p>
    </div>

    <AboutDynamicContent></AboutDynamicContent>

    <VisionMissionGoals></VisionMissionGoals>

  </div>

</template>

<script>
import AboutBanner from './AboutBanner.vue'
import AboutDynamicContent from './AboutDynamicContent.vue'
import VisionMissionGoals from './VisionMissionGoals.vue'

export default {
  components: {
    AboutBanner,
    AboutDynamicContent,
    VisionMissionGoals
  }
}
</script>

<style scoped>
  .about-section {
    position: relative;
    margin-top: 20px;
  }

  .intro {
    margin-top: 10px;
  }

  .intro-title {
    display: flex;
  }

  .line {
    width: 8px;
    height: 50px;
    background-color: gray;
    border-radius: 30px;
    left: 0;
  }

  h1 {
    margin-left: 20px;
    margin-top: 8px;
    font-size: 30px;
    color: grey;
  }

  p {
    margin-top: 30px;
    color: grey;
    font-size: 19px;
    line-height: 1.6;
  }

</style>
