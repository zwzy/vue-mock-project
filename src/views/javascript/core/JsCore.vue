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
    <components :is='activeComponentName'></components>
    </Drawer>
  </div>
</template>
<script>
import ClassExtend from './class/ClassExtend'
export default {
  components: {
    ClassExtend
  },
  data () {
    return {
      activeComponentName: '',
      activeIndex: 0,
      drawerShow: false,
      qusArray: [{title: 'class的继承', name: 'ClassExtend'}
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
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
