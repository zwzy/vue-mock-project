<template>
  <div class="page">
    <div class="progress bg">
      <div :class="{'current':true,'success-bg':success,'error-bg':error}" :style='currentStyle'></div>
      <div class="plan gray" :style='planStyle'></div>
    </div>
    <div class="text">{{currentStyle.width}}
      <span v-show='planProgress!==-1'>
        <span class="primary"> / </span> {{planStyle.width}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseProGress',
  props: {
    currentProgress: {
      type: [Number, String],
      default: 0
    },
    planProgress: {
      type: [Number, String],
      default: -1
    }
  },
  computed: {
    currentStyle () {
      return {
        width: this.currentProgress + '%'
      }
    },
    planStyle () {
      return {
        width: this.planProgress + '%'
      }
    },
    error () {
      return this.currentProgress < this.planProgress
    },
    success () {
      return this.currentProgress >= this.planProgress
    },
    primary () {
      return this.currentProgress === this.planProgress
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  display: flex;
  align-items: center;
}
.text {
  margin: 0 10px;
  text-align: center;
  font-size: 12px;
}
.gray {
  background: #ccc !important;
}
.progress {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  position: relative;
  border-radius: 100px;
  height: 10px;
}

.current {
  position: relative;
  height: 10px;
  z-index: 3;
  border-radius: 100px;
}

.plan {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100px;
  height: 10px;
  border-radius: 20px;
}
</style>
