<template>
  <div class="products-section">
    <ProductsBanner></ProductsBanner>

    <div class="intro">
      <div class="intro-title">
        <div class="line"></div>
        <h1>Sản phẩm</h1>
      </div>

      <div class="intro-content">
        <p>Phát triển các sản phẩm dịch vụ theo xu thế và chuẩn hóa. Đảm bảo chất lượng và bảo mật theo các
          tiêu chuẩn quốc tế như ITSM/ITIL, CMMi và các tiêu chuẩn bắt buộc của Hàng không (ICAO, IATA)
          <a href="https://aits.vn/public/PL_01_Danh%20muc%20dich%20vu%20AITS.pdf" target="_blank">(Click vào để xem danh mục dịch vụ Aits)</a>
        </p>
      </div>
    </div>

    <ProductsDynamicContent></ProductsDynamicContent>

    <ProductNotableProject></ProductNotableProject>

    <ProductCustomerOpinion></ProductCustomerOpinion>

    <ProductBanner2></ProductBanner2>
  </div>
</template>

<script>
import ProductsBanner from './ProductsBanner.vue'
import ProductsDynamicContent from './ProductsDynamicContent.vue'
import ProductNotableProject from './ProductNotableProject.vue'
import ProductCustomerOpinion from './ProductCustomerOpinion.vue'
import ProductBanner2 from './ProductBanner2.vue'

export default {
  components: {
    ProductsBanner,
    ProductsDynamicContent,
    ProductNotableProject,
    ProductCustomerOpinion,
    ProductBanner2
  }
}
</script>

<style scoped>
  .products-section {
    position: relative;
    margin-top: 20px;
  }

  .intro {
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

  p {
    padding: 0px 250px;
    text-align: center;
    margin-top: 30px;
    color: grey;
    font-size: 19px;
    line-height: 1.6;
  }

  a {
    color: rgb(31,164,199);
    font-style: italic;
    font-weight: 500;
    line-height: 1.6;
    text-decoration: underline;
  }

</style>
