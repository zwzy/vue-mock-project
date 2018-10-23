<template>
  <div>
    <div class="qus-box inner-btn">
       <Button v-for='(item,index) in qusArray' :key='index' :type='$GetType(index)'
      @click="openDrawer(index)">{{qusArray[index].title}}</Button>
    </div>
    <Drawer :title="qusArray[activeIndex].title"
      :closable="false"
      v-model="drawerShow"
      width="640">
      <component :is='activeComponent'></component>
    </Drawer>
  </div>
</template>
<script>
import JsxSyntax from './reactchild/JsxSyntax'
import FunAndClass from './reactchild/FunAndClass'
import LifeCycle from './reactchild/LifeCycle'
export default {
  components: {
    JsxSyntax, FunAndClass, LifeCycle
  },
  data () {
    return {
      activeComponent: '',
      drawerShow: false,
      activeIndex: 0,
      qusArray: [
        {title: 'jsx 语法', name: 'JsxSyntax'},
        {title: '函数与类区别', name: 'FunAndClass'},
        {title: 'react生命周期', name: 'LifeCycle'}
      ]
    }
  },
  created () {
    this.activeComponent = this.qusArray[0].name
  },
  computed: {
  },
  methods: {
    openDrawer (index) {
      this.drawerShow = !this.drawerShow
      this.activeIndex = index
      this.activeComponent = this.qusArray[index].name
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
