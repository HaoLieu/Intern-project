<template>
  <the-header></the-header>

  <div class="location">
    <div class="position">
      <router-link to="/news" id="chosen"> Tin AITS</router-link>
      <router-link to="/news"> Tin Đảng - Đoàn</router-link>
      <router-link to="/news"> Tin Vietnam Airlines</router-link>
    </div>
  </div>

  <div class="content">
    <div class="description">
      <DetailInfo
      :from="selectedAits.origin"
      :title="selectedAits.title"
      :time="selectedAits.dateTimeUpload"
      :author="selectedAits.author"
      :description1="selectedAits.description"
      :img1="selectedAits.img"
      :note1="selectedAits.note"
      :rest="selectedAits.rest"
      ></DetailInfo>
    </div>
    <div class="floating-nav">
      <ul>
        <FloatingNav
          v-for="latestAitsNew in aitsNews"
          :key="latestAitsNew.aitsId"
          :url="latestAitsNew.url"
          :id="latestAitsNew.aitsId"
          :title="latestAitsNew.title"
        ></FloatingNav>
      </ul>
    </div>
  </div>

  <the-footer></the-footer>
</template>

<script>
import DetailInfo from './DetailInfo.vue'
import FloatingNav from './FloatingNav.vue'

export default {
  components: {
    DetailInfo,
    FloatingNav
  },
  props: ['id'],
  data () {
    return {
      aits: [],
      detail: false
    }
  },
  computed: {
    aitsNews () {
      return this.$store.getters['aitsNews/aitsNewsData']
    },
    selectedAits () {
      return this.aitsNews.find(d => d.aitsId === Number(this.id))
    }
  }
  // methods: {
  //   refreshedData () {
  //     console.log('axios')
  //     axios.get('http://localhost:9513/api/aitsNews').then((response) => {
  //       this.aits = response.data
  //     })
  //     const that = this
  //     setTimeout(function () {
  //       that.detail = true
  //     }, 500)
  //   }
  // },
  // mounted () {
  //   this.refreshedData()
  // }
}
</script>

<style scoped>
  .location {
    margin-top: 20px;
    background-color: #fbbf24;
    padding: 5px 0px;
    position: relative;
    height: 40px;
  }

  .position {
    position: absolute;
  }

  a {
  text-decoration: none;
  color: white;
  font-size: 21px;
  transition: ease .40s;
  margin-right: 50px;
  padding: 6px 0px;
  }

  #chosen {
    background-color: #e2a500;
  }

  .content {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .description {
    flex: 1;
    padding-right: 20px;
  }

  .floating-nav {
    width: 250px;
    height: 440px;
    background-color: #f3f4f6;
    position: sticky;
    top: 0;
    overflow: hidden;
  }

   ul {
    padding-right: 10px;
    padding-left: 10px;
  }

</style>
