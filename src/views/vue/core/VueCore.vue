<template>
  <div>
     <div class="qus-box inner-btn">
       <Button v-for='(item,index) in qusArray' :key='index' :type='$GetType(index)'
      @click="openDrawer(index)">{{qusArray[index].title}}</Button>
    </div>
    <Drawer :title="activeData.title||''"
      :closable="false"
      v-model="drawerShow"
      width="640">
    <GlobalComponent v-if='activeData.title==="全局组件"'></GlobalComponent>
    <LifeCycle v-if='activeData.title==="生命周期"'></LifeCycle>
    <ComputedAttribute v-if='activeData.title==="计算属性"'></ComputedAttribute>
    </Drawer>
  </div>
</template>
<script>
import GlobalComponent from './vuechild/GlobalComponent'
import LifeCycle from './vuechild/LifeCycle'
import ComputedAttribute from './vuechild/ComputedAttribute'
export default {
  components: {
    GlobalComponent, LifeCycle, ComputedAttribute
  },
  data () {
    return {
      activeData: null,
      drawerShow: false,
      qusArray: [
        {title: '全局组件', isShow: false},
        {title: '生命周期', isShow: false},
        {title: '计算属性', isShow: false}
      ]
    }
  },
  created () {
    this.activeData = this.qusArray[0] // 在create中null值就不会报错了。因为在挂载之前就进行赋值了
  },
  mounted () {
  },
  methods: {
    openDrawer (index) {
      this.activeData = this.qusArray[index]
      this.drawerShow = !this.drawerShow
      this.$set(this.qusArray[index], 'isShow', this.drawerShow)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
