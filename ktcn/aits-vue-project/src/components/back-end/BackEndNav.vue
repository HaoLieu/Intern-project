<template>
  <h1 class="d-flex justify-content-center">Welcome to Setting Page of</h1>
  <h1 class="d-flex justify-content-center">Aits FrontEnd</h1>
  <nav class="navbar navbar-expand-sm bg-light navbar-dark">
    <ul class="navbar-nav">
      <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary" to="menu">
          Menu
        </router-link>
      </li>
      <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary" to="aits">
          Aits
        </router-link>
      </li>
      <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary" to="union">
          Union
        </router-link>
      </li>
      <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary" to="vnairlines">
          VnAirlines
        </router-link>
      </li>
      <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary" to="sportCultureBackEnd">
          SportCulture
        </router-link>
      </li>
      <li class="nav-item m-1">
        <router-link class="btn btn-light btn-outline-primary" to="gallery">
          Gallery
        </router-link>
      </li>
    </ul>
    <router-link class="btn btn-light btn-outline-primary" @click='logOut' to="/login">
      Log out
    </router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut () {
      this.$store.state.loginRouteGuard = false
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
