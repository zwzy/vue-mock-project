<template>
  <div>
    <div class="qus-box">
       <Button v-for='(item,index) in qusArray' :key='index' :type='getButtonType(index)'
      @click="openDrawer(index)">{{qusArray[index].title}}</Button>
    </div>
    <Drawer :title="qusArray[activeIndex].title"
      :closable="false"
      v-model="drawerShow"
      width="640">
    <JsxSyntax v-if='qusArray[0].isShow'></JsxSyntax>
    </Drawer>
  </div>
</template>
<script>
import JsxSyntax from './reactchild/JsxSyntax'
export default {
  components: {
    JsxSyntax
  },
  data () {
    return {
      drawerShow: false,
      activeIndex: 0,
      qusArray: [{title: 'jsx 语法', isShow: false}]
    }
  },
  computed: {
    getButtonType () {
      return function (val) {
        const array = ['primary', 'error', 'warning', 'success']
        const index = val % 4
        return array[index]
      }
    }
  },
  methods: {
    openDrawer (index) {
      this.drawerShow = !this.drawerShow
      this.activeIndex = index
      this.$set(this.qusArray[index], 'isShow', this.drawerShow)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
