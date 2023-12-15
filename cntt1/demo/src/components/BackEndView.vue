<template>
  <h1 class="d-flex justify-content-center">Welcome to Setting Page of</h1>
    <h1 class="d-flex justify-content-center">Demo FrontEnd</h1>
    <nav class="navbar navbar-expand-sm bg-light navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/container">
            Container
          </router-link>
        </li>
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/tourpakages">
            Tour Packages
          </router-link>
        </li>
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/destination">
            Destination
          </router-link>
        </li>
        <li class="nav-item m-1">
          <router-link class="btn btn-light btn-outline-primary" to="/contact">
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
  .navbar a{
    color: blue;
  }

  nav a.router-link-exact-active {
  color: red;
}
</style>
