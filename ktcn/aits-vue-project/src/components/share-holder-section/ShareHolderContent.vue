<template>
  <div class="share-holder-content">
    <div class="title">
      <button @click="setSelectedComponent('abnormal-documents')">Tài liệu ĐHĐCĐ bất thường năm 2023</button>
      <button @click="setSelectedComponent('annual-documents')">Tài liệu ĐHĐCĐ thường niên năm 2023</button>
      <button @click="setSelectedComponent('share-holder-info')">Tin tức dành cho cổ đông</button>
      <div class="animated-line"
        :class="{
          animate1: animatedLine1,
          animate2: animatedLine2,
          animate3: animatedLine3,
          animate4: animatedLine4,
          animate5: animatedLine5  }">
      </div>
    </div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import AbnormalDocuments from './AbnormalDocuments.vue'
import AnnualDocuments from './AnnualDocuments.vue'
import ShareHolderInfo from './ShareHolderInfo.vue'

export default {
  components: {
    AbnormalDocuments,
    AnnualDocuments,
    ShareHolderInfo
  },
  data () {
    return {
      selectedComponent: 'abnormal-documents',
      animatedLine1: false,
      animatedLine2: false,
      animatedLine3: false,
      animatedLine4: false,
      animatedLine5: false,
      stage: false,
      stage2: false
    }
  },
  methods: {
    setSelectedComponent (cpn) {
      this.selectedComponent = cpn
      // Animated Line
      if (cpn === 'annual-documents') {
        if (this.stage2 === true) {
          this.stage = true
          this.animatedLine5 = true
          this.animatedLine2 = false
          this.animatedLine3 = false
          this.animatedLine4 = false
        }
        this.stage = true
        this.animatedLine1 = true
        this.animatedLine2 = false
        this.animatedLine3 = false
        this.animatedLine4 = false
      } else if (cpn === 'share-holder-info') {
        this.stage2 = true
        this.animatedLine2 = true
        this.animatedLine1 = false
        this.animatedLine3 = false
        this.animatedLine4 = false
        this.animatedLine5 = false
        this.stage = false
      } else if (cpn === 'abnormal-documents') {
        if (this.stage === true) {
          this.stage2 = false
          this.animatedLine4 = true
          this.animatedLine3 = false
          this.animatedLine2 = false
          this.animatedLine1 = false
          this.animatedLine5 = false
        } else {
          this.stage2 = false
          this.animatedLine3 = true
          this.animatedLine2 = false
          this.animatedLine1 = false
          this.animatedLine4 = false
          this.animatedLine5 = false
        }
      }
    }
  }
}

</script>

<style scoped>
  .share-holder-content{
    margin-top: 10px;
    margin-bottom: 100px;
    /* border-bottom: 2px solid #DDD; */
  }

  .title {
    width: 100%;
    display: inline-block;
    border-bottom: 2px solid #DDD;
  }

  .animated-line {
  position: absolute;
  background-color: orange;
  width: 350px;
  height:7px;
  }

  button {
    margin-right: 60px;
    padding-bottom: 5px;
    font-size: 18px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .animate1 {
  animation: slide-union 0.2s ease-out forwards;
}

@keyframes slide-union {
  0% {
    transform: translateX(0) scaleX(1);
  }

  100% {
    transform: translateX(408px) scaleX(1);
  }
}

.animate2 {
  animation: slide-vna 0.2s ease-out forwards;
}

@keyframes slide-vna {
  0% {
    transform: translateX(408px) scaleX(1);
  }

  100% {
    transform: translateX(760px) scaleX(0.7);
  }
}

.animate3 {
  animation: slide-aits 0.2s ease-out forwards;
}

@keyframes slide-aits {
  0% {
    transform: translateX(760px) scaleX(0.7);
  }

  100% {
    transform: translateX(0) scaleX(1);
  }
}

.animate4 {
  animation: slide-aits2 0.2s ease-out forwards;
}

@keyframes slide-aits2 {
  0% {
    transform: translateX(408px) scaleX(1);
  }

  100% {
    transform: translateX(0) scaleX(1);
  }
}

.animate5 {
  animation: slide-union2 0.2s ease-out forwards;
}

@keyframes slide-union2 {
  0% {
     transform: translateX(760px) scaleX(0.7);
  }

  100% {
    transform: translateX(408px) scaleX(1);
  }
}
</style>
