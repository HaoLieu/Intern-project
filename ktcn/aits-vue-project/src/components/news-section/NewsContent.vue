<template>
  <div class="news-content">
    <div class="title">
      <button @click="setSelectedComponent('aits-news')">Tin AITS</button>
      <button @click="setSelectedComponent('union-news')">Tin Đảng - Đoàn</button>
      <button @click="setSelectedComponent('vn-airlines-news')" class='no-margin'>Tin VietNam Airlines</button>
      <div class="animated-line"
        :class="{animate1 : animatedLine1,
          animate2 : animatedLine2,
          animate3: animatedLine3,
          animate4: animatedLine4,
          animate5: animatedLine5  }">
      </div>
    </div>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
import AitsNews from './AitsNews.vue'
import UnionNews from './UnionNews.vue'
import VnAirlinesNews from './VnAirlinesNews.vue'

export default {
  components: {
    AitsNews,
    UnionNews,
    VnAirlinesNews
  },
  data () {
    return {
      selectedComponent: 'aits-news',
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
      if (cpn === 'union-news') {
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
      } else if (cpn === 'vn-airlines-news') {
        this.stage2 = true
        this.animatedLine2 = true
        this.animatedLine1 = false
        this.animatedLine3 = false
        this.animatedLine4 = false
        this.animatedLine5 = false
        this.stage = false
      } else if (cpn === 'aits-news') {
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
.news-content {
  margin: 10px 0px 20px;
}

.title {
  display: inline-block;
  border-bottom: 2px solid #DDD;
}

.animated-line {
  position: absolute;
  background-color: orange;
  width: 78px;
  height: 7px;
}

button {
  margin-right: 60px;
  padding-bottom: 5px;
  font-size: 20px;
  border: none;
  background: none;
  cursor: pointer;
}

.no-margin {
  margin: 0
}

.animate1 {
  animation: slide-union 0.2s ease-out forwards;
}

@keyframes slide-union {
  0% {
    transform: translateX(0) scaleX(1);
  }

  100% {
    transform: translateX(190px) scaleX(2.2);
  }
}

.animate2 {
  animation: slide-vna 0.2s ease-out forwards;
}

@keyframes slide-vna {
  0% {
    transform: translateX(190px) scaleX(2.2);
  }

  100% {
    transform: translateX(435px) scaleX(2.7);
  }
}

.animate3 {
  animation: slide-aits 0.2s ease-out forwards;
}

@keyframes slide-aits {
  0% {
    transform: translateX(435px) scaleX(2.7);
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
     transform: translateX(190px) scaleX(2.2);
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
     transform: translateX(435px) scaleX(2.7);
  }

  100% {
    transform: translateX(190px) scaleX(2.2);
  }
}
</style>
