<template>
  <section class="container">
      <div class="text">
        <h2>Start Your Vacation <br>with A Lot Of Services !</h2>
      </div>

      <div class="row-items" >
        <div class="container-box" v-for="(con, index) in container " :key="index">
            <div class="container-img" >
              <img :src="require(`../../ApiVuejs/ApiVuejs/photos/${con.ContainerIcon}`)">
            </div>
            <h4>{{con.ContainerTitle}}</h4>
            <p>{{ con.ContainerProperties + ' Properties' }} </p>
          </div>

      </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      container: []
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/container').then((response) => {
        this.container = response.data
      })
    }
  },
  mounted: function () {
    this.refreshedData()
  }
}
</script>

<style scoped src="../css/style.css"></style>
