<template>
  <div>
     <div class="alert-box">
      <Divider>这是个计算属性</Divider>
      <Alert :type='$GetType(0)'>
       <span :class="'bold '+$GetType(0, 1)">{{1}}、</span>计算属性：sumNum: {{sumNum}}
      </Alert>
      <Alert :type='$GetType(1)'>
        <span :class="'bold '+$GetType(1, 1)">{{2}}、</span>firstNum: {{firstNum}}
      </Alert>
      <Alert :type='$GetType(2)'>
       <span :class="'bold '+$GetType(2, 1)">{{3}}、</span>lastNum: {{lastNum}}
      </Alert>
      <Alert :type='$GetType(3)'>
       <div><span :class="'bold '+$GetType(3, 1)">{{4}}、</span>通过计算属性改变与其绑定的值：</div>
      <Input v-model="sumNum"></Input>
      </Alert>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      firstNum: 2,
      lastNum: 3
    }
  },
  computed: {
    sumNum: {
      set (val) {
        if (val < 10) { return }
        this.firstNum = Math.floor(val / 10)
        this.lastNum = val % 10
      },
      get () {
        return this.firstNum * 10 + this.lastNum
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
