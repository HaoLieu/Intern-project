<template>
  <h1 class="d-flex justify-content-center">Welcome to Setting Page of</h1>
  <h1 class="d-flex justify-content-center">Demo FrontEnd</h1>
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

    </ul>
  </nav>
</template>

<style scoped>
.navbar a {
  color: blue;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
