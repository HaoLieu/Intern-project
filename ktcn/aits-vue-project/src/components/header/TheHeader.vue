<template>
  <header>
    <page-line></page-line>
    <nav>
      <router-link to="/">
        <img src="../../assets//logoAits.png">
      </router-link>

      <ul class="navbar">
        <the-navbar v-for="navItem in $store.state.navItems" :key="navItem.id" :name="navItem.name" :link="navItem.link">
        </the-navbar>
        <dull-navbar></dull-navbar>
      </ul>
    </nav>
  </header>
</template>

<script>
// import axios from 'axios'
import PageLine from './PageLine.vue'
import TheNavbar from './TheNavbar.vue'
import DullNavbar from './DullNavbar.vue'

export default {
  components: {
    TheNavbar,
    DullNavbar,
    PageLine
  }
  // vuex

  // methods: {
  //   refreshedData () {
  //     this.$store.commit('refreshedData')
  //   }
  // },
  // mounted: function () {
  //   this.refreshedData()
  // }
}
</script>

<style scoped>
nav {
  height: 80px;
  width: 100%;
  background-color: white;
}

ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style-type: none;
  float: right;
  margin-right: 20px;
}

.navbar {
  display: flex;
}

img {
  max-width: 100%;
  max-height: 100%;
  margin-top: 10px;
}
</style>
