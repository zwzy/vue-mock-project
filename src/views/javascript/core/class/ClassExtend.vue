<template>
  <div>
    <Alert show-icon :type='$GetType(index)' v-for="(item,index) in funvClassArray" :key='index'>
       <span :class="'bold '+$GetType(index, 1)">{{index+1}}、{{item.descrition}}：</span>
       <span class="error"><code><pre>{{item.code}}</pre></code></span>
    </Alert>
    <div>
    <Alert>
      注意点： 组件名称必须大写开头
    </Alert>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      funvClassArray: [
        {
          descrition: 'class可以通过extends关键字来继承',
          code: `
          class Point {
          }
          ===>
          class ColorPoint extends Point {
            constructor(x, y, color) {
              super(x, y);//调用了父类的constructor
              this.color = color;
            }
          }
           `
        },
        {
          descrition: '类案例',
          code: `class Welcome extends React.Component {
            render() {
              return <h1>Hello, {this.props.name}</h1>;
            }
          }`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
