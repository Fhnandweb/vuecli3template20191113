<template>
  <div class="test">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'testWorld',
  data () {
    return {
      msg: 'test.vue0000'
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less">
@import "~@/assets/css/global.less"; //全局css存放的文件
</style>
