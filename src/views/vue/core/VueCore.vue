<template>
  <div>
     <div class="qus-box inner-btn">
       <Button v-for='(item,index) in qusArray' :key='index' :type='$GetType(index)'
      @click="openDrawer(index)">{{qusArray[index].title}}</Button>
    </div>
    <Drawer :title="qusArray[activeIndex].title||''"
      :closable="false"
      v-model="drawerShow"
      width="640">
    <component :is='activeComponentName'></component>
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
      activeComponentName: '',
      activeIndex: 0,
      drawerShow: false,
      qusArray: [
        {title: '全局组件', name: 'GlobalComponent'},
        {title: '生命周期', name: 'LifeCycle'},
        {title: '计算属性', name: 'ComputedAttribute'}
      ]
    }
  },
  created () {
    this.activeComponentName = this.qusArray[0].name
  },
  mounted () {
  },
  methods: {
    openDrawer (index) {
      this.drawerShow = !this.drawerShow
      this.activeIndex = index
      this.activeComponentName = this.qusArray[index].name
      console.log(this.activeIndex, this.activeComponentName)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
