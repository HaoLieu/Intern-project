<template>
  <section class="package" id="package">
      <div class="title">
        <h2>Upcoming <br> Tour Package</h2>
      </div>

      <div class="package-content">
        <div class="box" v-for="(tpk,index) in packages" :key="index">
          <div class="thum">
            <img :src="require(`../../ApiVuejs/ApiVuejs/photos/${tpk.PackagePic}`)">
            <h3>{{ '$' + tpk.PackagePrice }}</h3>
          </div>

            <div class="dest-content">
              <div class="location">
                <h4>{{ tpk.PackageName }}</h4>
                <p>{{ tpk.PackageLength }}</p>
              </div>

              <div class="stars">
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
                <a href="#"><i class="bx bxs-star"></i></a>
              </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      packages: []
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/tourpackages').then((response) => {
        this.packages = response.data
      })
    }
  },
  mounted: function () {
    this.refreshedData()
  }
}
</script>

<style scoped src="../css/style.css"></style>
