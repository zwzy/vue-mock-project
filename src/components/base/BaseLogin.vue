
<template>
<Form ref="formInline" class="login-form" :model="formInline" :rules="ruleInline">
  <FormItem prop="username">
    <Input type="text" size='large' v-model="formInline.username" placeholder="Username">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
    </Input>
  </FormItem>
  <FormItem prop="password">
    <Input type="password" size='large' v-model="formInline.password" placeholder="Password">
      <Icon type="ios-lock-outline" slot="prepend"></Icon>
    </Input>
  </FormItem>
  <FormItem>
    <Button type="primary" long  @click="handleSubmit('formInline')">登录</Button>
  </FormItem>
</Form>
</template>
<script>
import {
  Form,
  Input,
  FormItem,
  Icon
} from 'iview'
import {
  login
} from '../../api/user.js'
export default {
  components: {
    Form,
    Input,
    FormItem,
    Icon
  },
  data () {
    return {
      formInline: {
        username: '',
        password: '',
        code: 'a'
      },
      ruleInline: {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 5,
            message: '至少5位数',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          login(this.formInline).then(res => {
            console.log(res)
            if (res.data.code === 0) {
              this.$Message.success(res.data.msg)
              sessionStorage.setItem('isLogin', 'true')
              sessionStorage.setItem('token', res.data.data.token)
              this.$router.push('/')
            }
          }).catch(() => {
            this.$Message.error('接口报错：(/user/login)')
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  h1 {
    text-align: center;
  }
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
