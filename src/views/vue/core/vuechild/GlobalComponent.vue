<template>
  <div>
    <div class="alert-box">
      <Divider>全局组件引入的方法</Divider>
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
          descrition: ' main.js 中用：',
          code: 'Vue.component( componentName, componentConfig.default || componentConfig )'
        }
      ],
      array2: [
        {
          descrition: '获取文件夹下vue的文件：',
          code: `require.context ( "文件路径", false, '/Base[A-Z]\w+\.(vue|js)$/')`
        },
        {
          descrition: '获得context的返回值，并将其遍历：',
          code: 'components.keys().forEach((fileName)=>{})'
        },
        {
          descrition: '获得某一组件的配置：',
          code: 'const componentConfig = requireComponent(fileName)'
        },
        {
          descrition: '去除./../前面或.后面的：',
          code: 'const name = camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1") )'
        },
        {
          descrition: '获得某一组件的组件名：',
          code: 'const componentName = upperFirst( name )'
        },
        {
          descrition: '在循环中注册：',
          code: 'Vue.component(componentName, componentConfig.default)'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
