<template>
  <div>
      <div class="alert-box">
      <Divider>生命周期有哪几个？</Divider>
      <Alert show-icon :type='$GetType(index)' v-for='(item,index) in array1' :key='index'>
        <span :class="'bold '+$GetType(index, 1)">{{index+1}}、</span>{{item.descrition}}
        <span class="error">{{item.code}}</span>
      </Alert>
    </div>
    <div class="alert-box">
      <Divider>引用某个文件夹下面的作为全局组件</Divider>
      <Alert show-icon v-for='(item,index) in array2' :key='index' :type='$GetType(index)'>
      <span :class="'bold '+$GetType(index, 1)">{{index+1}}、</span>{{item.descrition}}
        <span class="error">{{item.code}}</span>
      </Alert>
      <Divider>案例如下</Divider>
      <BaseProgress :currentProgress='80'
        :planProgress='100'></BaseProgress>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      array1: [
        {
          descrition: '创建前',
          code: 'beforeCreate'
        },
        {
          descrition: '创建后',
          code: 'created'
        },
        {
          descrition: '挂载前',
          code: 'beforeMount'
        },
        {
          descrition: '挂载后',
          code: 'mounted'
        },
        {
          descrition: '更新前',
          code: 'beforeUpdate'
        },
        {
          descrition: '更新后',
          code: 'updated'
        },
        {
          descrition: '销毁前',
          code: 'beforeDestory'
        },
        {
          descrition: '销毁后',
          code: 'destoryed'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
