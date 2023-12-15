<template>
   <div class="news-section">
      <NewsBanner></NewsBanner>

      <NewsContent></NewsContent>
      <div class="line"></div>
      <NewsGallery></NewsGallery>

      <NewsSportCulture></NewsSportCulture>

   </div>
</template>

<script>
import NewsBanner from './NewsBanner.vue'
import NewsContent from './NewsContent.vue'
import NewsGallery from './NewsGallery.vue'
import NewsSportCulture from './NewsSportCulture.vue'

export default {
  components: {
    NewsBanner,
    NewsContent,
    NewsGallery,
    NewsSportCulture
  }
}
</script>

<style scoped>
   .news-section {
      margin: 20px 0px;
      position: relative;
   }

   .line {
      height: 1px;
      background-color: grey;
   }

</style>
