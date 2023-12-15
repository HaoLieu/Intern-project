<template>
  <div class="main-news">
    <router-link :to="{ name: 'UnionNewsDetail', params: { id: 1 } }" id="img">
      <img src="../../assets/news-dd/news1-dd.jpg">
    </router-link>
    <div class="main">
      <router-link :to="{ name: 'UnionNewsDetail', params: { id: 1 } }">Người Việt tin dùng hàng Việt: Động lực thúc đẩy phát triển kinh tế</router-link>
    </div>
    <p>
      Nghiên cứu gần đây của Nielsen cho biết có 76% người tiêu dùng Việt Nam chuộng hàng nội địa,
      đặc biệt là những sản phẩm có thương hiệu, bảo đảm chất lượng và tốt cho sức khỏe.
    </p>
    <div class="dotline"></div>

    <ul>
      <li>
        <router-link :to="{ name: 'UnionNewsDetail', params: { id: 2 } }">Cục Hàng không đề xuất mở lại đường bay nội địa</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'UnionNewsDetail', params: { id: 3 } }">Hà Nội tiếp tục giãn cách xã hội tại vùng có dịch, sau ngày 6/9</router-link>
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
