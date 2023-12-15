<template>
  <base-products-card>
    <div class='card'>
      <div class="card-header">
        <div class="title">
          <div class="dash"></div>
          <h1>Dịch vụ công nghệ thông tin</h1>
        </div>

        <button @click="close"><img src="../../assets/icon-close.png"></button>
      </div>

      <div class="card-content">
        <img src="../../assets/products-dvcn.png" >

        <div class="content">
          <span>AITS cung cấp, vận hành trên 200 hệ thống phần mềm nghiệp vụ trong các lĩnh vực hoạt động như hệ thống kế hoạch,
            hệ thống tài chính kế toán, hệ thống quản trị thông tin, hệ thống khai thác, các hệ thống phục vụ văn phòng,
            văn thư lưu trữ, quản lý công việc.</span>

            <ul>
              <li>Sản phẩm, dịch vụ phần mềm (Kế toán quản trị, Quản lý hợp đồng, Hóa đơn điện tử, Quản lý tài sản, Quản lý nhân sự, ...)</li>
              <li>Các hệ thống lõi của ngành hàng không</li>
              <li>Dịch vụ trung tâm dữ liệu</li>
              <li>Dịch vụ an ninh thông tin</li>
              <li>Dịch vụ hỗ trợ công nghệ thông tin</li>
              <li>Trung tâm chăm sóc khách hàng</li>
              <li>Cho thuê trang thiết bị công nghê thông tin</li>
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
    padding: 0px 70px;
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
    content: '•'; /* Bullet symbol */
    position: absolute;
    left: -20px;
    top: -23px;
    font-size: 50px; /* Set the size of the bullet */
  }

</style>
