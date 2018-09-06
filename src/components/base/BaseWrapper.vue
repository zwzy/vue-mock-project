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
.left-menu {
  position: fixed;
  top:65px;
  width: 200px!important;
  border-left: 1px solid #eee;
  box-sizing: border-box;
  border-radius:5px;
  overflow: hidden;
  bottom:2px;
  left:100px;
  .menu-titile{
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    border-radius:5px 5px 0 0;
    color:#fff;
  }
  .left-menu{
    position: absolute;
    border-left: 1px solid #eee;
    top:40px;
    left:0;
    right:0;
    bottom:0;
    width: 200px;
    overflow: auto;
  }
}

.right-content{
  border: 1px solid #eee;
  position: fixed;
  z-index: 1;
  left:305px;
  right:100px;
  top:65px;
  bottom:2px;
  border-radius:3px;
  background: #fff;
  padding:15px;
}
.bread-crumb{
  border-radius:4px;
  margin-bottom:15px;
}
</style>
