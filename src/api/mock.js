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
var menu = Mock.mock('http://192.168.21.87:8080/user/menu', {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  // 属性 id 是一个自增数，起始值为 1，每次增 1
  'code': 0,
  'menuArray': [
    {
      'name': 'vue框架',
      'id': 1,
      'children': [
        {
          'name': 'vuex',
          'id': 2,
          'children': [
            {
              'name': 'state',
              'id': 17
            },
            {
              'name': 'getter',
              'id': 18
            }
          ]
        },
        {
          'name': 'vue-router',
          'id': 3
        },
        {
          'name': 'vue-axios',
          'id': 4
        },
        {
          'name': 'vue-vux',
          'id': 5
        },
        {
          'name': 'vue-webpack',
          'id': 6
        }
      ]
    },
    {
      'name': 'react框架',
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
      'name': 'react-native框架',
      'id': 13,
      'children': []
    },
    {
      'name': 'nodeJs',
      'id': 14
    },
    {
      'name': 'JS',
      'id': 15
    },
    {
      'name': 'UI框架',
      'id': 16
    }
  ]
})
// 输出结果
export { data, menu }
