<template>
  <the-header></the-header>

  <div class="location">
    <div class="position">
      <router-link to="/news"> Tin AITS</router-link>
      <router-link to="/news"> Tin Đảng - Đoàn</router-link>
      <router-link to="/news" id="chosen"> Tin Vietnam Airlines</router-link>
    </div>
  </div>

  <div class="content">
    <div class="description">
        <DetailInfo
        :from="selectedVna.origin"
        :title="selectedVna.title"
        :time="selectedVna.dateTimeUpload"
        :author="selectedVna.author"
        :description1="selectedVna.description"
        :img1="selectedVna.img"
        :note1="selectedVna.note"
        :rest="selectedVna.rest"
        ></DetailInfo>
      </div>
    <div class="floating-nav">
      <ul>
        <FloatingNav v-for="latestAitsNew in vnaNews" :key="latestAitsNew.vnaId" :url="latestAitsNew.url"
          :id="latestAitsNew.vnaId" :title="latestAitsNew.title"></FloatingNav>
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
      vnas: [],
      detail: false
    }
  },
  computed: {
    vnaNews () {
      return this.$store.getters['vnAirlinesNews/vnAirlinesNewsData']
    },
    selectedVna () {
      return this.vnaNews.find(d => d.vnaId === Number(this.id))
    }
  }
  // methods: {
  //   refreshedData () {
  //     console.log('axios')
  //     axios.get('http://localhost:9513/api/vnAirlinesNews').then((response) => {
  //       this.vnas = response.data
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
  height: 500px;
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
