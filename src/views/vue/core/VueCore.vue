<template>
  <div>
    <Alert show-icon>
      <span>全局组件：require.context 获取某个文件夹中所有的符合正则文件，返回的keys() </span>
      <BaseProgress :currentProgress='80' :planProgress='100'></BaseProgress>
    </Alert>
    <Button type='primary'>全局组件</Button>
    <Alert type="warning" show-icon>警告，注意</Alert>
    <Alert type="success" show-icon>正确的用法</Alert>
    <Alert type="error" show-icon>错误的用法</Alert>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
