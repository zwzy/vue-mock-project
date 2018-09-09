<template>
  <div>
    <Alert show-icon :type='$GetType(index)' v-for="(item,index) in syntaxArray" :key='index'>
       <span :class="'bold '+$GetType(index, 1)">{{index+1}}、</span>{{item.descrition}}
       <span class="error">{{item.code}}</span>
    </Alert>
  </div>
</template>
<script>
export default {
  data () {
    return {
      syntaxArray: [
        {
          descrition: '这样的变量，可以不在state中定义：',
          code: 'this.timer = setInterval(()=>{})'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
