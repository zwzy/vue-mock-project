<template>
    <Menu  :theme="leftThemeType"  ref='leftSlider' accordion @on-select='selectMenu' :open-names="activeSubmenu"  @on-open-change='changeSubmenu' :active-name='routerMenu'>
        <Submenu :name="item.name" v-for='(item, index) in menuArray' :key='index'>
            <template slot="title">
                <span class="icon-vuejs iconfont  ivu-icon"></span>
                {{item.name}}
            </template>
            <MenuGroup :title="child.name" v-for='(child, childIndex) in item.children' :key='childIndex'>
                <MenuItem :name="children.name" v-for='(children, childrenIndex) in child.children' :key='childrenIndex'>{{children.name}}
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
      menuArray: [],
      activeSubmenu: [],
      routerMenu: this.$route.path.slice(1)
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
      this.activeSubmenu.push(sessionStorage.getItem('SubmenuName'))
      const { data } = await getMenu()
      this.menuArray = data.menuArray
      this.$nextTick(() => {//改变他的值时，必须在后面加上这两个函数才行
        this.$refs.leftSlider.updateOpened()
        this.$refs.leftSlider.updateActiveName()
      })
    },
    changeSubmenu (name) {
      sessionStorage.setItem('SubmenuName', name[0])
    },
    selectMenu (name) {
      this.$router.push('/' + name)
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
