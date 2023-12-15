<template>
  <section class="destination" id="destination">
      <div class="title">
        <h2>Our Most Popular <br> Destination !</h2>
      </div>

      <div class="destination-content" >
        <div class="col-content" v-for="(dtn,index) in destinations" :key="index">
            <img :src="require(`../../ApiVuejs/ApiVuejs/photos/${dtn.DestinationPic}`)">
            <h5>{{ dtn.DestinationName }}</h5>
            <p>{{ dtn.DestinationCountry }}</p>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      destinations: []
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/destination').then((response) => {
        this.destinations = response.data
      })
    }
  },
  mounted: function () {
    this.refreshedData()
  }

}
</script>

<style scoped src="../css/style.css"></style>
