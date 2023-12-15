<template>
  <div class="main-news">
    <router-link :to="{ name: 'AitsNewsDetail', params: { id: 1 } }" id="img">
      <img src="../../assets/news-aits/news1-aits.jpg">
    </router-link>

    <div class="main">
      <router-link :to="{ name: 'AitsNewsDetail', params: { id: 1 } }">Hội nghị đại biểu người lao động aits 2023</router-link>
    </div>
    <p>
      Ngày 28 tháng 06 năm 2023 tại Hà Nội, Công ty Cổ phần Tin học - Hàng không (AITS) đã tổ chức Hội nghị đại biểu
      Người lao động năm 2023. Hội nghị có sự tham dự của 77 Đại biểu đại diện cho hơn 300 người lao động Công ty
    </p>
    <div class="dotline"></div>

    <ul>
      <li>
        <router-link :to="{ name: 'AitsNewsDetail', params: { id: 2 } }">AITS TỔ CHỨC THÀNH CÔNG ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN 2023</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AitsNewsDetail', params: { id: 3 } }">GIỚI THIỆU CÔNG NGHỆ DOCKER</router-link>
      </li>
    </ul>
    </div>
</template>

<style scoped>
  .main-news{
    flex: 2;
  }

  img {
    width: 100%;
    height: 400px;
    border-radius: 8px;
  }

  #img {
  margin-left: 0;
}

  .main {
    margin: 15px 0px;
  }

  .main a {
    margin-left: 0px;
    padding-left: 0;
    text-transform: uppercase;
    font-size: 23px;
  }

  p {
    margin: 10px 0px;
    line-height: 1.6;
    color: #808692;
  }

  .dotline {
    margin: 5px 0px;
    border-top: 3px dotted silver;
  }

  ul,li,a {
    position: relative;
    margin-top: 15px;
    margin-left: 6px;
    text-decoration: none;
    list-style: none;
    color: #374151;
    font-weight: bold;
  }

  ul {
    padding-left: 0px;
  }

  li::before {
  content: '•';
  position: absolute;
  left: -15px;
  top: -3px;
  font-size: 20px;
}

</style>
