<template>
  <div>
    <base-header></base-header>
    <base-sider class="left-menu"></base-sider>
    <div class="right-content">
       <Card>
          首页
       </Card>
    </div>
  </div>
</template>
<script>
import BaseSider from '@/components/base/BaseSider'
import BaseHeader from '@/components/base/BaseHeader'
export default {
  components: {
    BaseSider, BaseHeader
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.left-menu{
  position: fixed;
  left:0;
  width: 200px!important;
  top:60px;
  bottom:0;
  overflow: auto;
}
.right-content{
  position: fixed;
  left:200px;
  right:0;
  top:60px;
  bottom:0;
}
</style>
