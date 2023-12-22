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
        :from="selectedSpCul.origin"
        :title="selectedSpCul.title"
        :sport="selectedSpCul.sport"
        :time="selectedSpCul.dateTimeUpload"
        :author="selectedSpCul.author"
        :description1="selectedSpCul.description"
        :img1="selectedSpCul.img"
        :note1="selectedSpCul.note"
        :rest="selectedSpCul.rest"
      ></DetailInfo>
      </div>
    <div class="floating-nav">
      <ul>
        <div class="nav-item">
          <li>
          <router-link :to="{ name: 'SpCulNewsDetail', params: { id: 1 } }">THỂ DỤC THỂ THAO - NÂNG CAO SỨC KHỎE VÀ GẮN KẾT TÌNH THÂN</router-link>
          <img src="../../assets/img-sc/img-sc1.png">
          <div class="overflow">
            <p>Lãnh đạo phòng KD CNTTMN xác định khi đời sống vật chất bảo đảm, đời sống tinh thần được quan tâm đúng mức thì người lao động
               mới yên tâm gắn bó lâu dài và tích cực tham gia lao động sản xuất, góp phần phát triển sản xuất kinh doanh hiệu quả cho doanh nghiệp.
                Đồng thời, Lãnh đạo phòng cũng muốn nơi làm việc mà còn là “ngôi nhà thứ hai” để mọi người có thể thoải mái chia sẻ không chỉ trong
                công việc mà còn cả trong cuộc sống hàng ngày và thêm gắn bó với Công ty. </p>
          </div>
          </li>
        </div>
        <FloatingNav v-for="latestSportCulNew in latestSportCulNews" :key="latestSportCulNew.id" :id="latestSportCulNew.id"
          :url="latestSportCulNew.url" :title="latestSportCulNew.title"></FloatingNav>
      </ul>
    </div>
  </div>

  <the-footer></the-footer>
</template>

<script>
import DetailInfo from './DetailInfo.vue'
import FloatingNav from './FloatingNav.vue'
import latestSportCulNews from '../../latestSportCulNews.json'

export default {
  components: {
    DetailInfo,
    FloatingNav
  },
  props: ['id'],
  data () {
    return {
      latestSportCulNews: latestSportCulNews,
      spCul: [],
      detail: false
    }
  },
  computed: {
    sportCultureNews () {
      return this.$store.getters['sportCultureNews/sportCultureNewsData']
    },
    selectedSpCul () {
      return this.sportCultureNews.find(d => d.scId === Number(this.id))
    }
  }
  // methods: {
  //   refreshedData () {
  //     console.log('axios')
  //     axios.get('http://localhost:9513/api/sportCultureNews').then((response) => {
  //       this.spCul = response.data
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
  height: 525px;
  background-color: #f3f4f6;
  position: sticky;
  top: 0;
  overflow: hidden;
}

.nav-item a{
  color: #374151;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
}

img {
  width: 100%;
}

.overflow {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 26px;
    white-space: pre-wrap;
    line-height: 1;
    font-size: 13px;
    color: rgb(151, 151, 151);
  }

ul {
  padding-right: 10px;
  padding-left: 10px;
}

</style>
