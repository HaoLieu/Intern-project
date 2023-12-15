<template>
  <NavbarView/>
  <HomeSection/>
  <ContainerSection/>
  <PackageSection/>
  <DestinationSection/>
  <FooterView/>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import HomeSection from '@/components/HomeSection.vue'
import ContainerSection from '@/components/ContainerSection.vue'
import PackageSection from '@/components/PackageSection.vue'
import DestinationSection from '@/components/DestinationSection.vue'
import FooterView from '@/components/FooterView.vue'
import '../css/style.css'

export default {
  components: {
    NavbarView,
    HomeSection,
    ContainerSection,
    PackageSection,
    DestinationSection,
    FooterView
  }
}
</script>
