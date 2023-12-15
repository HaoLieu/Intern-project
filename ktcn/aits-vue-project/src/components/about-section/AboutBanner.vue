<template>
  <img src="../../assets/banner-about-us.png">

  <div class="banner-content">
    <span class="banner-title">
      Vững bước khẳng định vị thế Aits
    </span>
    <span class="banner-text">
      15 năm xây dựng và phát triển chúng tôi luôn nỗ lực kiến tạo công
    </span>
    <span class="banner-text-2">
       nghệ - giải pháp tối ưu và hiệu quả nhất.
    </span>
  </div>

</template>

<style scoped>
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .banner-content {
    position: absolute;
    top: 20px;
    height: 300px;
    padding: 70px 170px;
  }

  .banner-title {
    background-color: white;
    border-radius: 80px;
    padding: 20px 50px;
    display: block;
    text-align: center;
    font-size: 33px;
    color: #1fa4c7;
    text-transform: uppercase;
    font-weight: bold;
  }

  .banner-text {
    margin-top: 10px;
    padding: 5px 35px 0;
    display: block;
    color: white;
    font-size: 22px;
  }

  .banner-text-2 {
    padding-left: 35px;
    font-size: 22px;
    color: white;
  }

  ::selection {
  color: white;
  background: yellow;
}
</style>
