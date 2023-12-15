<template>
  <div class="gallery-poster">
    <img src="../../assets/gallery-poster.jpg">
    <div class="text-box">
      <p>CHÍNH SÁCH CHẤT LƯỢNG DỊCH VỤ VÀ AN NINH THÔNG TIN</p>
      <div class="infomation-icons">
        <div>2 ảnh</div>
        <div class="icons">
          <img src="../../assets/icon eye.png" id="icon">
          <span>14</span>

          <img src="../../assets/icon share.png" id="icon">
          <span>0</span>

          <img src="../../assets/icon download.png" id="icon">
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .gallery-poster {
    flex: 2;
  }

  img {
    width: 100%;
    height: 450px;
  }

  p {
    font-size: 20px;
    font-weight: bold;
    color: rgb(75,85,99);
  }

  .text-box {
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }

  .infomation-icons {
    display: flex;
    justify-content: space-between;
  }

  .icons {
    display: flex;
  }

  #icon {
    width: 15px;
    height: 15px;
    margin-left: 25px;
    margin-top: 2px;
  }

  span {
    margin-left: 7px;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }

</style>
