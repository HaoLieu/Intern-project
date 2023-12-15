<template>
  <base-products-card>
    <div class='card'>
      <div class="card-header">
        <div class="title">
          <div class="dash"></div>
          <h1>Dịch vụ xử lý dữ liệu</h1>
        </div>

        <button @click="close"><img src="../../assets/icon-close.png"></button>
      </div>

      <div class="card-content">
        <img src="../../assets/products-dvxldl.jpg">

        <div class="content">
          <span>Cập nhật, xử lý chứng từ, dữ liệu vận tải hàng không theo yêu cầu: Tổ chức thu nhận, xử lý báo cáo,
             luân chuyển và xử lý chứng từ, dữ liệu vận tải hàng không phục vụ cho công tác quản lý, dự báo, quản trị,
              điều hành của Vietnam Airlines và các hãng hàng không quốc tế và khu vực.</span>

          <ul>
            <li>Dịch vụ xử lý dữ liệu hàng không</li>
            <li>Dịch vụ xử lý dữ liệu hóa đơn, kế toán</li>
            <li>Dịch vụ xử lý dữ liệu thuế, kế toán thuế</li>
            <li>Dịch vụ xử lý dữ liệu thống kê, điều tra thị trường</li>
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
  z-index: 1;
  border: none;
}

.card-content {
  margin: 0px 50px;
  display: flex;
}

.card-content img {
  width: 630px;
  height: 410px;
  z-index: 1;
  border-radius: 10px;
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
}</style>
