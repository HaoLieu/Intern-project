<template>
  <div class="share-holder-section">
    <ShareHolderBanner></ShareHolderBanner>

    <ShareHolderContent></ShareHolderContent>
  </div>
</template>

<script>
import ShareHolderBanner from './ShareHolderBanner.vue'
import ShareHolderContent from './ShareHolderContent.vue'

export default {
  components: {
    ShareHolderBanner,
    ShareHolderContent
  }
}
</script>

<style scoped>
  .share-holder-section {
    position: relative;
    margin-top: 20px;
  }
</style>
