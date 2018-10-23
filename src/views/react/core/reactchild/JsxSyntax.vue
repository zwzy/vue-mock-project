<template>
  <div>
    <Alert show-icon :type='$GetType(index)' v-for="(item,index) in syntaxArray" :key='index'>
       <span :class="'bold '+$GetType(index, 1)">{{index+1}}、</span>{{item.descrition}}
       <span class="error"><code><pre>{{item.code}}</pre></code></span>
    </Alert>
  </div>
</template>
<script>
export default {
  data () {
    return {
      syntaxArray: [
        {
          descrition: '这样的变量，可以不在state中定义：',
          code: 'this.timer = setInterval(()=>{})'
        },
        {
          descrition: '事件绑定的三种方式：',
          code: '1、this.handleClick = this.handleClick.bind(this)； 2、handleClick=()=>{}； 3、(e) => this.handleClick(e)}'
        }, {
          descrition: `JSX 转化为 JS 语法糖 ：`,
          code:
              `
              <MyButton color='blue' shadowSize={2}>
                click Me 
              </MyButton>

              React.createElement(
                MyButton, 
                {color: 'blue', shadowSize: 2}, 
                'click Me'
              )`
        }, {
          descrition: `"."点的用法`,
          code:
              `
              const MyComponents = {
                DatePicker: function DatePicker(props) {
                  return  <div> Image a {props.color} datepicker here </div>
                }
              }
              ====>
              functon BlueDatePicker() {
                return <MyComponents.DatePicker color='blue />
              }
              `
        }, {
          descrition: `正确的变量标签运用`,
          code:
              `   
              function Story(props) {//错误  
                return <component[props.storyType] story = {props.story}>
              }
              ====>
              function Story(props) {
                const SpecificStory = components[props.storyType]
                return <SpecificStory story = {props.story} />
              }
              `
        }, {
          descrition: `JSX中if的用法`,
          code:
              `
              function Part(props) {
                if(props.isLogin){
                  return <div>登录</div>
                }else{
                  return <div>未登录</div>
                }
              }
              ====>
              ReactDom.render(
                <Part isLogin = {false}></Part>
              )
              `
        }, {
          descrition: `JSX中for循环的用法`,
          code:
              `   
              render(){
                this.state.map((item)=>{
                  return <div><span class='bold'>{item}<span></div>
                })
              }
              `
        }, {
          descrition: `...扩展操作符在jsx中的用法`,
          code:
              `   
              function App1() {
                return <Greeting firstName='Ben' lastName='Hector'/> 
              }
              function App2() {
                const props = {firstName:'Ben', lastName:'Hector'}
                return <Greeting {...props}/>
              }
              `
        }, {
          descrition: `null,undefined的处理下列表达式是等价的`,
          code:
              `   
              <div></div>
              <div />
              <div>{false}</div>
              <div>{null}</div>
              <div>{undefined}</div>
              <div>{true}</div>
              用法：
              <div>
                {showHeader && <Header />}//将不渲染Header树
              </div>
              <div>
                {this.state.array.length && <Message/>}
                // 这里的length为0时还是会渲染的，只有用>0
              </div>
              `
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
