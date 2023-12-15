<template>
  <header>
    <div class="left-menu">
      <img src="../assets/img/fav.png" style="padding-bottom: 18px;">
      <a href="#" class="logo">Karma</a>
    </div>
    <div class="bx bx-menu" id="menu-icon" @click="toggleMenu"></div>

    <ul class="navbar">
      <li class="menu-item"><a href="#home">Home</a></li>
      <li><a href="#package">Package</a></li>
      <li><a href="#destination">Destination</a></li>
      <li><a href="#contact">Contact Us</a></li>
      <li><a href="http://localhost:8080/login">Login</a></li>
    </ul>
  </header>
</template>

<script>
import mitt from 'mitt'

const emitter = mitt()
export default {
  mounted () {
    emitter.on('scroll', this.handleScroll)
    window.addEventListener('scroll', () => {
      emitter.emit('scroll', window.scrollY)
    })

    window.addEventListener('scroll', () => {
      this.$el.querySelector('#menu-icon').classList.remove('bx-x')
      this.$el.querySelector('.navbar').classList.remove('open')
    })
  },
  beforeUnmount () {
    emitter.off('scroll', this.handleScroll)
    window.removeEventListener('scroll', () => {
      emitter.emit('scroll', window.scrollY)
    })
  },
  methods: {
    handleScroll (scrollY) {
      this.$el.classList.toggle('sticky', scrollY > 0)
    },
    toggleMenu () {
      this.$el.querySelector('#menu-icon').classList.toggle('bx-x')
      this.$el.querySelector('.navbar').classList.toggle('open')
    }
  }
}
</script>

<style scoped src="../css/style.css">
</style>
