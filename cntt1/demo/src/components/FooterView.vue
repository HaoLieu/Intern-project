<template>
  <section id="contact">
      <div class="footer">
        <div class="main">
          <div class="list">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Tour</a></li>
            </ul>
          </div>

          <div class="list">
            <h4>Contact Info</h4>
            <ul v-for="(cnt,index) in contacts" :key="index">
              <li><a href="#">{{cnt.AddressInfo}}</a></li>
              <li><a href="#">{{ cnt.Email }}</a></li>
              <li><a href="#">{{ cnt.PhoneNum }}</a></li>
            </ul>
          </div>

          <div class="list">
            <h4>Connect</h4>
            <div class="social">
              <a href="#"><i class='bx bxl-facebook'></i></a>
              <a href="#"><i class='bx bxl-instagram-alt'></i></a>
              <a href="#"><i class='bx bxl-twitter'></i></a>
              <a href="#"><i class='bx bxl-linkedin'></i></a>
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
      contacts: []
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/contact').then((response) => {
        this.contacts = response.data
      })
    }
  },
  mounted: function () {
    this.refreshedData()
  }

}
</script>

<style scoped src="../css/style.css"></style>
