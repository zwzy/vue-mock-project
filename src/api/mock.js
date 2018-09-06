var Mock = require('mockjs')
const Random = Mock.Random
var data = Mock.mock('http://192.168.21.87:8080/user/login', 'post', function (options) {
  const data = JSON.parse(options.body)
  if (data.username === 'zuowang') {
    return {
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'code': 0,
      'token': Random.guid(),
      'name': Random.cname(),
      'userId': Random.integer(0, 100),
      'age': Random.integer(1, 100),
      'avator': Random.image('125x125', '#5cadff', '青春'),
      'msg': '登录成功'
    }
  } else {
    return {
      'code': 1,
      'msg': '用户名密码错误'
    }
  }
})
var menu = Mock.mock('http://192.168.21.87:8080/menu', {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  // 属性 id 是一个自增数，起始值为 1，每次增 1
  'menuArray': [
    {
      'name': 'vue框架',
      'children': [
        {
          'name': 'vuex'
        },
        {
          'name': 'vue-router'
        },
        {
          'name': 'vue-axios'
        },
        {
          'name': 'vue-vux'
        },
        {
          'name': 'vue-webpack'
        }
      ]
    },
    {
      'name': 'react框架',
      'children': [
        {
          'name': 'redux'
        },
        {
          'name': 'react-router'
        },
        {
          'name': 'react-axios'
        },
        {
          'name': 'react-ui'
        },
        {
          'name': 'react-webpack'
        }
      ]
    },
    {
      'name': 'react-native框架',
      'children': []
    },
    {
      'name': 'nodeJs'
    },
    {
      'name': 'JS'
    },
    {
      'name': 'UI框架'
    }
  ]
})
// 输出结果
export { data, menu }
