<template>
  <the-header></the-header>

  <div class="location">
    <div class="position">
      <router-link to="/news"> Tin AITS</router-link>
      <router-link to="/news" id="chosen"> Tin Đảng - Đoàn</router-link>
      <router-link to="/news"> Tin Vietnam Airlines</router-link>
    </div>
  </div>

  <div class="content">
    <div class="description">
        <DetailInfo
          :from="selectedUnion.origin"
          :title="selectedUnion.title"
          :time="selectedUnion.dateTimeUpload"
          :author="selectedUnion.author"
          :description1="selectedUnion.description"
          :img1="selectedUnion.img"
          :note1="selectedUnion.note"
          :rest="selectedUnion.rest"
        ></DetailInfo>
      </div>
    <div class="floating-nav">
      <ul>
        <FloatingNav
          v-for="latestUnionNew in unionNews"
          :key="latestUnionNew.unionId"
          :url="latestUnionNew.url"
          :id="latestUnionNew.unionId"
          :title="latestUnionNew.title"
        ></FloatingNav>
      </ul>
    </div>
  </div>

  <the-footer></the-footer>
</template>
<!-- News -->
<script>
import DetailInfo from './DetailInfo.vue'
import FloatingNav from './FloatingNav.vue'
import axios from 'axios'

export default {
  components: {
    DetailInfo,
    FloatingNav
  },
  props: ['id'],
  data () {
    return {
      unions: []
    }
  },
  computed: {
    unionNews () {
      return this.$store.getters['unionNews/UnionNewsData']
    },
    selectedUnion () {
      return this.unionNews.find(d => d.unionId === Number(this.id))
    }
  },
  methods: {
    refreshedData () {
      console.log('axios')
      axios.get('http://localhost:9513/api/unionNews').then((response) => {
        this.unions = response.data
      })
    }
  }
  // created () {
  //   console.log('created')
  //   console.log(this.destinations)
  //   console.log(this.des)
  //   this.refreshedData()
  //   console.log('created1')
  //   console.log(this.destinations)
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
  font-size: 20px;
  transition: ease .40s;
  margin-right: 50px;
  padding: 5px 0px;
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
