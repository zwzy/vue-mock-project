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
        },
        {
          descrition: '事件绑定的三种方式：',
          code: '1、this.handleClick = this.handleClick.bind(this)； 2、handleClick=()=>{}； 3、(e) => this.handleClick(e)}'
        }

      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
