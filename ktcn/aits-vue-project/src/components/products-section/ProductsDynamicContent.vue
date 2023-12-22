<template>
  <div class="products-dynamic-content">
    <base-products-button @click="setSelectedComponent('tech-services')" v-if="techServicesAppearance">
      <img src="../../assets/icon-plus.png">
      <span>Dịch vụ công nghệ thông tin</span>
    </base-products-button>
    <TechServices
      v-if="selectedComponent === 'tech-services'"
      :close="closeComponent"
    ></TechServices>

    <base-products-button @click="setSelectedComponent('data-services')" v-if="dataServicesAppearance">
      <img src="../../assets/icon-plus.png">
      <span>Dịch vụ xử lý dữ liệu</span>
    </base-products-button>
    <DataServices
      v-if="selectedComponent === 'data-services'"
      :close="closeComponent"
    ></DataServices>

    <base-products-button @click="setSelectedComponent('tech-advices')" v-if="techAdvicesAppearance">
      <img src="../../assets/icon-plus.png">
      <span>Tư vấn chuyển giao công nghệ</span>
    </base-products-button>
    <TechAdvices
      v-if="selectedComponent === 'tech-advices'"
      :close="closeComponent"
    ></TechAdvices>
  </div>
</template>

<script>
import TechServices from './TechServices.vue'
import TechAdvices from './TechAdvices.vue'
import DataServices from './DataServices.vue'

export default {
  components: {
    TechAdvices,
    TechServices,
    DataServices
  },
  data () {
    return {
      selectedComponent: ''
    }
  },
  computed: {
    techServicesAppearance () {
      if (this.selectedComponent === 'tech-services') {
        return false
      }
      return true
    },
    dataServicesAppearance () {
      if (this.selectedComponent === 'data-services') {
        return false
      }
      return true
    },
    techAdvicesAppearance () {
      if (this.selectedComponent === 'tech-advices') {
        return false
      }
      return true
    }
  },
  methods: {
    setSelectedComponent (cpn) {
      this.selectedComponent = cpn
    },
    closeComponent () {
      this.selectedComponent = ''
    }
  }
}
</script>

<style scoped>
  .products-dynamic-content {
    margin-top: 50px;
  }

  img {
    height: 64px;
    width: 64px;
    position: relative;
    top:7px;
  }

  span {
    font-size: 30px;
    color: white;
    padding: 25px 15px;
  }
</style>
