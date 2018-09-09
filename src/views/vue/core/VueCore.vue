<template>
  <div>
     <div class="qus-box">
       <Button v-for='(item,index) in qusArray' :key='index' :type='$GetType(index)'
      @click="openDrawer(0)">{{qusArray[0].title}}</Button>
    </div>
    <Drawer :title="qusArray[0].title"
      :closable="false"
      v-model="drawerShow"
      width="640">
    <GlobalComponent v-if='qusArray[0]'></GlobalComponent>
    </Drawer>
  </div>
</template>
<script>
import GlobalComponent from './vuechild/GlobalComponent'
export default {
  components: {
    GlobalComponent
  },
  data () {
    return {
      drawerShow: false,
      qusArray: [{title: '全局组件', isShow: false}]
    }
  },
  mounted () {
  },
  methods: {
    openDrawer (index) {
      this.drawerShow = !this.drawerShow
      this.$set(this.qusArray[index], 'isShow', this.drawerShow)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
