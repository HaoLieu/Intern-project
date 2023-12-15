<template>
  <div class="recruitment-section">
    <div class="background">
      <img src="../../assets/cube.png">
      <div class="text">
        <div class="title">
          Cảm ơn bạn đã quan tâm đến Tuyển dụng AITS.
        </div>
        <div>
          Thông tin các vị trí tuyển dụng bạn vui lòng tham khảo tại Fanpage:
        </div>
        <div>
          <a href="https://www.facebook.com/career.aits">Tuyển dụng AITS - Công ty Cổ phần Tin học Viễn thông Hàng không</a>
        </div>
        <div>
          Email: career@aits.vn
        </div>
        <div>
          Tel: 0915 331 330 (Ms. Hạnh)
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .recruitment-section {
    position: relative;
    margin-top: 20px;
  }

  .background {
    background-color: #17758e;
    width: 100%;
    height: 800px;
  }

  img {
    width: 100%;
    height: 800px;
    object-fit: cover;
  }

  .text {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    color: white;
    font-size: 30px;
    line-height: 1.6;
  }

  .title {
    font-weight: bold;
  }

  a {
    color: white;
  }

</style>
