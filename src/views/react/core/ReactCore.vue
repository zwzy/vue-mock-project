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
export default {
  components: {
    JsxSyntax, FunAndClass
  },
  data () {
    return {
      activeComponent: '',
      drawerShow: false,
      activeIndex: 0,
      qusArray: [
        {title: 'jsx 语法', isShow: false, name: 'JsxSyntax'},
        {title: '函数与类区别', isShow: false, name: 'FunAndClass'}
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
