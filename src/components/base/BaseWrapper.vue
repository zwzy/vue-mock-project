<template>
  <div>
    <base-header></base-header>
    <base-sider class="left-menu"></base-sider>
    <div class="right-content">
      <div class="bread-crumb">
        <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Card>
        <div class="content">
          <router-view/>
        </div>
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
  z-index: 1;
  left:200px;
  right:1px;
  top:60px;
  bottom:1px;
  border-radius:3px;
  background: #fff;
}
.bread-crumb{
  padding:20px;
  border-radius:4px;
}
.content{

}
</style>
