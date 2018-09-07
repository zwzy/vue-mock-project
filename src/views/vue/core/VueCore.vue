<template>
  <div>
    <Alert show-icon>信息</Alert>
    <Button type='primary'>全局组件</Button>
    <Alert type="warning" show-icon>警告，注意</Alert>
    <Alert type="success" show-icon>正确的用法</Alert>
    <Alert type="error" show-icon>错误的用法</Alert>
    <BaseProgress :currentProgress='80' :planProgress='100'></BaseProgress>
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
