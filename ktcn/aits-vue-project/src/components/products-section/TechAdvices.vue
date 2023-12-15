<template>
  <base-products-card>
    <div class='card'>
      <div class="card-header">
        <div class="title">
          <div class="dash"></div>
          <h1>Tư vấn chuyển giao công nghệ</h1>
        </div>

        <button @click="close"><img src="../../assets/icon-close.png"></button>
      </div>

      <div class="card-content">
        <img src="../../assets/products-tv.jpg">

        <div class="content">
          <span>AITS tư vấn chiến lược phát triển cho khách hàng cá nhân và doanh nghiệp trong kỷ nguyên chuyển đổi số.</span>

          <ul>
            <li>Tư vấn quản trị sản xuất kinh doanh và chiến lược phát triển CNTT tổng thể cho doanh nghiệp</li>
            <li>Tư vấn phân tích và Quản trị rủi ro doanh nghiệp</li>
            <li>Tư vấn tái cấu trúc doanh nghiệp</li>
            <li>Tư vấn chuyển đổi số doanh nghiệp</li>
            <li>Tư vấn xây dựng, triển khai dự án</li>
          </ul>
        </div>
      </div>
    </div>
  </base-products-card>
</template>

<script>
export default {
  props: ['close']
}
</script>

<style scoped>
.card {
  position: absolute;
  width: 100%;
  top: 0;
  padding: 25px 70px;
}

.card-header {
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  border: none;
}

.title {
  display: flex;
  padding-top: 25px;
  z-index: 1;
}

.dash {
  width: 80px;
  height: 2px;
  background-color: white;
  position: relative;
  top: 30px;
}

h1 {
  padding-left: 5px;
  color: white;
  font-size: 35px;
  text-transform: uppercase;
}

button {
  width: 64px;
  height: 64px;
  background-color: transparent;
  border: none;
  z-index: 1;
}

.card-content {
  margin: 0px 50px;
  display: flex;
}

.card-content img {
  width: 630px;
  height: 410px;
  border-radius: 10px;
  z-index: 1;
}

span {
  line-height: 1.6;
}

.content {
  margin-left: 30px;
  padding: 0px 10px;
  color: white;
  font-size: 20px;
  z-index: 1;
}

ul {
  margin-top: 30px;
  margin-left: 20px;
  line-height: 1.6;
}

li {
  list-style: none;
  padding-left: 20px;
  position: relative;
}

li::before {
  content: '•';
  /* Bullet symbol */
  position: absolute;
  left: -20px;
  top: -23px;
  font-size: 50px;
  /* Set the size of the bullet */
}
</style>
