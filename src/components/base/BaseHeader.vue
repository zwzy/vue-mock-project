<template>
<Header :style='{padding:"0",height:"60px","line-height":"60px"}'>
  <Menu mode="horizontal" class="kns-menu" :theme="headThemeType" active-name="1" @on-select='selectMenu'>
    <div class="layout-logo"><span class="icon-zhishikuguanli iconfont rt-icon"></span>知识梳理系统</div>
    <div class="rt">
      <div class="layout-nav clearfix lf">
          <Submenu name="1">
            <template slot="title">
               <span class="icon-zhuti1 iconfont"></span><span>主题菜单</span>
            </template>
            <MenuGroup title="头部">
                <MenuItem name="head-dark">dark</MenuItem>
                <MenuItem name="head-light">light</MenuItem>
            </MenuGroup>
            <MenuGroup title="左侧">
                <MenuItem name="left-dark">dark</MenuItem>
                <MenuItem name="left-light">light</MenuItem>
            </MenuGroup>
        </Submenu>
      </div>
      <div class="lf user-icon">
        <span class="iconfont rt-icon icon-user_login"></span>登录
      </div>
    </div>
  </Menu>
</Header>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    ...mapState('settings',
      {headThemeType: state => state.headThemeType}
    )
  },
  methods: {
    ...mapMutations('settings', {
      changeTheme: 'changeThemeType'
    }),
    selectMenu (menu) {
      const position = menu.slice(0, 4)
      const themeType = menu.slice(5)
      if (position === 'head') {
        sessionStorage.setItem('headTheme', themeType)
        this.changeTheme({type: themeType, pos: position})
        this.theme1 = themeType
      } else if (position === 'left') {
        sessionStorage.setItem('leftTheme', themeType)
        this.changeTheme({type: themeType, pos: position})
      }
    }
  }
}
</script>
<style>
  .layout-nav .ivu-icon{
    vertical-align: -1px;
  }
  .kns-menu.ivu-menu-dark{
    background: #515a6e;
    padding:0 30px;
  }
  .kns-menu.ivu-menu-light{
    background: #fff;
    padding:0 30px;
  }
  .ivu-menu-light .layout-logo,.ivu-menu-light .user-icon{
    color:#515a6e;
  }
  .ivu-menu-dark .layout-logo,.ivu-menu-dark .user-icon{
    color:#fff;
  }
</style>
<style lang="scss" scoped>
.layout-logo{
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    border-radius: 3px;
    position: relative;
    float: left;
    width: 130px;
    top: 15px;
}

.layout-nav{
    margin-right: 20px;
    .iconfont{
      vertical-align: -2px;
      margin-right:5px;
    }
}
.user-icon{
  height: 60px;
}
.layout-footer-center{
    text-align: center;
}
</style>
