<template>
  <div class="news-gallery">
    <div class="title">
      <div class="line"></div>
      <h1>Thư viện hình ảnh</h1>
    </div>

    <div class="gallery-flexbox">
      <GalleryPoster></GalleryPoster>
      <GalleryPictures></GalleryPictures>
    </div>

  </div>
</template>

<script>
import GalleryPictures from './GalleryPictures.vue'
import GalleryPoster from './GalleryPoster.vue'

export default {
  components: {
    GalleryPictures,
    GalleryPoster
  }
}
</script>

<style scoped>
  .title{
    margin: 25px 0px;
    display: flex;
  }

  .line {
    width: 5px;
    height: 50px;
    background-color: orange;
    border-radius: 30px;
  }

  h1 {
    margin-left: 10px;
    margin-top: 8px;
    font-size: 25px;
    font-size: 30px;
    color: #374151;
  }

  .gallery-flexbox {
    display: flex;
    flex-direction: row;
    height: 600px;
  }
</style>
