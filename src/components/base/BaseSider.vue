<template>
    <Menu active-name="1-2" :theme="leftThemeType" :open-names="['1']">
        <Submenu :name="item.id" v-for='item in menuArray' :key='item.id'>
            <template slot="title">
                <span class="icon-vuejs iconfont  ivu-icon"></span>
                {{item.name}}
            </template>
            <MenuGroup :title="child.name" v-for='child in item.children' :key='child.id'>
                <MenuItem :name="children.id" v-for='children in child.children' :key='children.id'>{{children.name}}
                </MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu>
</template>
<script>
import { mapState } from 'vuex'
import { getMenu } from '@/api/user.js'
export default {
  data () {
    return {
      menuArray: []
    }
  },
  computed: {
    ...mapState('settings',
      {leftThemeType: state => state.leftThemeType}
    )
  },
  mounted () {
    this.initMenu()
  },
  methods: {
    async initMenu () {
      const { data } = await getMenu()
      this.menuArray = data.menuArray
      console.log('menu', this.menuArray)
    }
  }
}
</script>
<style lang="scss" scoped>
.iconfont{
    font-size: 12px;
    margin-right:10px;
}
</style>
