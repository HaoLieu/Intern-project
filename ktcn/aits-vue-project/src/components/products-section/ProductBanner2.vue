<template>
  <div class="products-banner">
    <img src="../../assets/banner-products-2.png">

    <div class="content">
      <p>Hệ sinh thái sắp ra mắt</p>
      <span>mAITS</span>
      <div class="note">Nghĩ lớn - làm lớn, chủ động sáng tạo, tốc độ hiệu quả</div>
    </div>
  </div>
</template>

<style scoped>
  .products-banner {
    margin-top: 50px;
    position: relative;
  }

    img {
    width: 100%;
    height: 430px;
    filter: brightness(35%);
  }

  .content {
    position: absolute;
    top: 0;
    padding-top: 64px;
  }

  p {
    color: white;
    font-size: 40px;
    margin-bottom: 0px;
  }

  span {
    color: white;
    font-size: 100px;
    font-weight: bold;
    padding-left: 50px;
  }

  .note {
    color: #FBBF24;
    padding-left: 2px;
  }
</style>
