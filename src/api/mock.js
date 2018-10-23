var Mock = require('mockjs')
const Random = Mock.Random
Mock.setup({
  timeout: '200-800'
})
Mock.mock('http://192.168.21.87:8080/user/login', 'post', function (options) {
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
Mock.mock('http://192.168.21.87:8080/user/menu', {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  // 属性 id 是一个自增数，起始值为 1，每次增 1
  'code': 0,
  'menuArray': [
    {
      'name': 'Vue',
      'class': 'icon-vuejs',
      'children': [
        {
          'name': 'vue全家桶',
          'children': [
            {
              'name': 'vue'
            },
            {
              'name': 'vuex'
            },
            {
              'name': 'vue-router'
            }
          ]
        },
        {
          'name': 'vue-ui',
          'children': [
            {
              'name': 'iview'
            },
            {
              'name': 'element-ui'
            },
            {
              'name': 'vux'
            }
          ]
        },
        {
          'name': 'vue-plugin',
          'children': [
            {
              'name': 'vue-axios'
            },
            {
              'name': 'vue-webpack'
            }
          ]
        }
      ]
    },
    {
      'name': 'React',
      'class': 'icon-react',
      'id': 7,
      'children': [
        {
          'name': 'react全家桶',
          'children': [
            {
              'name': 'react'
            },
            {
              'name': 'react-redux'
            },
            {
              'name': 'react-router'
            }
          ]
        },
        {
          'name': 'react-ui',
          'children': [
            {
              'name': 'ant-design'
            },
            {
              'name': 'ant-mobile-design'
            }
          ]
        },
        {
          'name': 'react-plugin',
          'children': [
            {
              'name': 'react-axios'
            },
            {
              'name': 'react-webpack'
            }
          ]
        }
      ]
    },
    {
      'name': 'React-Native框架',
      'class': 'icon-download_react-native',
      'children': []
    },
    {
      'name': 'NodeJs',
      'class': 'icon-nodejs'
    },
    {
      'name': 'JavaScript',
      'class': 'icon-socialjavascript',
      'children': [
        {
          'name': 'js核心部分',
          'children': [
            {
              'name': 'js'
            }
          ]
        }
      ]
    }
  ]
})
// 输出结果
