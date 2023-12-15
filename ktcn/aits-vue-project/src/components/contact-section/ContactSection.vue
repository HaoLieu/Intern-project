<template>
    <div class="contact-section">
    <ContactBanner></ContactBanner>
    <div class="content">
        <div class="contact-address">
            <ContactInfo></ContactInfo>
            <div class="contact-address-block">
                <ul class="list-address">
                    <li class="address-item" v-for="contact in contacts" :key="contact.id">
                        <span class="address-info">
                            <div class="address-block">
                                <div class="address-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </div>
                                <div class="address-contact-text">
                                    <span>{{ contact.location }}</span>
                                    <span class="contact-address-info-text" :data-id="`${contact.toggle}`" @click="toggleBounce(`${contact.toggle}`)">{{ contact.address }}</span>
                                    <span class="contact-phone">
                                        {{ contact.phone }}
                                    </span>
                                </div>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="google-map">
            <div id="map"></div>
        </div>
    </div>
    </div>
</template>

<script>
/* eslint-disable no-undef */
import ContactBanner from './ContactBanner.vue'
import ContactInfo from './ContactInfo.vue'
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  components: {
    ContactBanner,
    ContactInfo
  },
  data () {
    return {
      map: null,
      markers: {},
      googleMapsApi: null,
      contacts: [
        {
          id: 1,
          location: 'Trụ sở chính - Hà Nội',
          address: 'Số 412 Nguyễn Văn Cừ, p.Bồ Đề, q.Long Biên, tp. Hà Nội',
          phone: 'Tel: +84 24 62526555',
          toggle: 'marker1'
        },
        {
          id: 2,
          location: 'Văn phòng Đà Nẵng',
          address: 'Tầng 2, Tòa nhà Trực thăng Miền Trung, sân bay Quốc tế Đà Nẵng, tp. Đà Nẵng',
          phone: 'Tel: +84 235 364607',
          toggle: 'marker2'
        },
        {
          id: 3,
          location: 'Văn phòng Hồ Chí Minh',
          address: 'Tầng 3, Tòa nhà VPCN Phía Nam - TCT HKVN, số 49 Trường Sơn, q. Tân Bình, tp. HCM',
          phone: 'Tel: +84 28 35471963',
          toggle: 'marker3'
        }
      ]
    }
  },
  async mounted () {
    try {
      // Load the Google Maps API
      this.googleMapsApi = await GoogleMapsApiLoader({
        apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg' // Replace with your actual API key
      })

      this.initMap()
    } catch (error) {
      console.error('Error loading Google Maps API: ', error)
    }
  },
  methods: {
    initMap () {
      this.map = new this.googleMapsApi.maps.Map(document.getElementById('map'), {
        center: { lat: 21.05140358062961, lng: 105.87589970495395 },
        zoom: 8
      })

      this.addMarker('marker1', { lat: 21.05140358062961, lng: 105.87589970495395 })
      this.addMarker('marker2', { lat: 16.082782567023603, lng: 108.21429443248654 })
      this.addMarker('marker3', { lat: 10.81154650109763, lng: 106.66234648682756 })
    },
    // ...other methods (addMarker, toggleBounce)
    addMarker (id, location) {
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        animation: google.maps.Animation.DROP
      })

      this.markers[id] = marker
    },
    toggleBounce (markerId) {
      Object.keys(this.markers).forEach(key => {
        this.markers[key].setAnimation(null)
      })

      const marker = this.markers[markerId]
      if (marker) {
        marker.setAnimation(google.maps.Animation.BOUNCE)
        this.map.panTo(marker.getPosition())
      }
    }
  }
}

</script>

<style scoped>
.contact-section {
    position: relative;
}
.content {
    display: flex;
    flex-direction: row;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 100%;
}
.google-map {
    background-color: rgb(246, 230, 140);
    flex: 1;
}
.contact-address {
    background-color: blue;
    width: 25%;
    background-color: rgba(229,231,235,1);
    min-height: 100vh;
    padding-bottom: 2.5rem;
    padding-top: 1rem;
}

ul {
    padding-left: 0;
    list-style-type: none;
}
.list-address {
    background-color: transparent!important;
    border-style: none!important;
    width: 100%!important;
}
.list-address .address-item {
    align-items: center;
    display: flex;
    margin-top: 4px;
    margin-bottom: 2px;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
}
.address-item:hover {
    cursor: pointer;
    background-color: #FBBF24;
    transition: 0.3s;
}
.address-contact-text:hover {
    color: #ffffff;
    transition: 0.3s;
}
.address-info {
    margin-left: 10px;
}
.address-item > .address-info {
    flex: auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
}
.address-block {
    display: flex;
    margin-bottom: -4px;
}
.address-icon {
    padding-top: 0rem;
}
.address-contact-text {
    line-height: 1rem;
    margin-left: 10px;
}
.address-contact-text > span {
    font-size: 0.875rem;
    display: block;
    font-weight: 500;
    margin-bottom: 0rem;
    text-align: justify;
    white-space: pre-line;
    padding: 0 ;
}
.contact-address-info-text {
    line-height: 1rem;
    width: 95%;
}

#map {
    height: 100%;
    width: 100%;
}

span {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 1.25rem;
    color: #374151;
}

</style>
