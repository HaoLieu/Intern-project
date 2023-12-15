<template>
  <div class="main-news">
    <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: 1 } }" id="img">
      <img src="../../assets/news-va/news1-va.jpg">
    </router-link>
    <div class="main">
      <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: 1 } }">Sẵn sàng cho cao điểm hè VNA mở lại 7 đường bay nội địa</router-link>
    </div>
    <p>
      Nhằm đáp ứng nhu cầu du lịch nội địa và tạo thêm sự thuận lợi cho hành khách, VNA tiếp tục
      nối lại 7 đường bay gồm: 6 đường bay kết nối Phú Quốc với Đà Nẵng, Vinh, Hải Phòng, Cần Thơ,
      Đà Lạt, Thanh Hóa và đường bay Đà Nẵng - Vinh.
    </p>
    <div class="dotline"></div>

    <ul>
      <li>
        <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: 2 } }">Tầm nhìn chuyển đổi số” và những thách thức của VNA</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'VnAirlinesNewsDetail', params: { id: 3 } }">VNA trở thành hãng hàng không Việt đầu tiên được cấp phép bay thẳng thường lệ đến Mỹ</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.main-news {
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
  text-decoration: none;
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

ul,
li,
a {
  position: relative;
  margin-top: 15px;
  margin-left: 6px;
  text-decoration: none;
  list-style: none;
  color: #374151;
  font-weight: bold;
}

ul {
  padding-left: 0;
}

li::before {
  content: '•';
  position: absolute;
  left: -15px;
  top: -3px;
  font-size: 20px;
}
</style>
