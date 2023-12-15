<template>
  <div class="gallery-pictures">
    <div v-for="gallery in galleries" :key="gallery.id">
      <div>
        <img :src="require(`../../assets/img-gallery/${gallery.img}`)">
        <span>{{ gallery.name }}</span>
        <p>{{ gallery.quantity }} ảnh</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    galleries () {
      return this.$store.getters['galleries/galleryData']
    }
  }
}
</script>

<style scoped>
  .gallery-pictures {
    flex: 3.5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 290px 290px 290px;
    column-gap: 20px;
    row-gap: 50px;
    padding: 0px 20px;
    overflow: scroll;
    overflow-x: hidden;
  }

  img {
    width: 100%;
    height: 190px;
    border-radius: 8px;
    object-fit: cover;
  }

  span {
    margin-top: 5px;
    font-size: 15px;
    color: rgb(75,85,99);
    font-weight: bold;
  }

  p {
    margin-top: 3px;
    font-size: 15px;
    color: rgb(189,192,196)
  }
</style>
