<template>
  <div>
    <div class="link">
      <router-link to="/news">Tin tức  ></router-link>
      <router-link to="/news"> {{ from }}  ></router-link>
      <router-link to="/news" v-if="sport"> Văn hóa văn nghệ  ></router-link>
      <span> {{ title }} </span>
    </div>

    <div class="detail">
      <h1>{{ title }}</h1>
      <div class="info">
        <div class="time">
          <img src="../../assets/icon time.png" id="icon">
          <p>{{ time }}</p>
        </div>
        <p>{{ author }}</p>
      </div>
      <div class="description">
        <p>
          <span>{{ description1 }}</span>
        </p>
        <div class="center">
            <img :src="require(`../../../ApiVuejs/ApiVuejs/photos/${img1}`)">
        </div>
        <p class="note">{{ note1 }}</p>

        <p>
          <span>{{ rest }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'from', 'title', 'time', 'author', 'description1', 'img1', 'note1', 'rest', 'sport']
}
</script>

<style scoped>
  .link {
    display: flex;
  }

  a {
    text-decoration: none;
    color: black;
    margin: 0;
    font-size: 17px;
    padding-right: 10px
  }

  .link span {
    font-size: 17px;
    margin: 0;
  }

  .detail {
    margin-top: 20px;
  }

  h1 {
    font-size: 25px;
  }

  .info {
    margin: 25px 0px;
    display: flex;
    font-size: 18px;
  }

  .time {
    display: flex;
    margin-right: 50px;
  }

  #icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    margin-top: 5px;
  }

  .description {
    font-size: 18px;
    line-height: 1.6;
  }
  span {
    margin-left: 50px;
  }

  .center {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  img {
    max-width: 700px;
  }

  .note {
    text-align: center;
    margin-bottom: 10px;
  }
</style>
