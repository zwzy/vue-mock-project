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
      'id': 1,
      'children': [
        {
          'name': 'vue全家桶',
          'id': 2,
          'children': [
            {
              'name': 'vue',
              'id': 17
            },
            {
              'name': 'vuex',
              'id': 18
            },
            {
              'name': 'vue-router',
              'id': 19
            }
          ]
        },
        {
          'name': 'vue-ui',
          'id': 3,
          'children': [
            {
              'name': 'iview',
              'id': 20
            },
            {
              'name': 'element-ui',
              'id': 21
            },
            {
              'name': 'vux',
              'id': 22
            }
          ]
        },
        {
          'name': 'vue-plugin',
          'id': 4,
          'children': [
            {
              'name': 'vue-axios',
              'id': 21
            },
            {
              'name': 'vue-webpack',
              'id': 6
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
          'name': 'redux',
          'id': 8
        },
        {
          'name': 'react-router',
          'id': 9
        },
        {
          'name': 'react-axios',
          'id': 10
        },
        {
          'name': 'react-ui',
          'id': 11
        },
        {
          'name': 'react-webpack',
          'id': 12
        }
      ]
    },
    {
      'name': 'React-Native框架',
      'id': 13,
      'class': 'icon-download_react-native',
      'children': []
    },
    {
      'name': 'NodeJs',
      'class': 'icon-nodejs',
      'id': 14
    },
    {
      'name': 'JavaScript',
      'class': 'icon-socialjavascript',
      'id': 15
    }
  ]
})
// 输出结果
