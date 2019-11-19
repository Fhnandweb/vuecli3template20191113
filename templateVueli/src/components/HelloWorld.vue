<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <h1>测试颜色</h1>
    <h3>test颜色</h3>
    <h4>{{ mtime | upper }}</h4>
    <h4>{{ mkk | lower }}</h4>
    <!-- <img v-lazy="" alt=""> -->
    <test />
  </div>
</template>

<script>
import { test } from '@/api/test'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'hellow.vue',
      mtime: 'abcdef',
      mkk: 'ABCD'
    }
  },
  created() {
    //全局变量
    console.log(this.gv.globalAA)
    //全局方法
    this.exMethod()
    //
    console.log(this.$store.state.msg)
    //发起请求，单个数据
    let data = 'a=1&b=2'
    test(data).then(res => {
      console.log('ss', res)
    })
    //发起请求，对象数据
    let obj = {}
    obj.a = 'jj'
    obj.b = 'll'
    test(this.qs.stringify(obj)).then(res => {
      console.log('ss', res)
    })
  },
  mounted() {
    this.cookies.set('testdata', '123456789')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less">
@import '~@/assets/css/global.less'; //全局css存放的文件
</style>
