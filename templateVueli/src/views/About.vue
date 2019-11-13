<template>
  <div class="about">
    <h1 id="mm">{{msg}}</h1>
    <button @click="changeColor">click</button>
  </div>
</template>
<script>
// @ is an alias to /src
import $ from 'jquery'
export default {
  name: 'about',
  data () {
    return {
      msg: this.$store.state.msg
    }
  },
  created () {
    console.log(this.cookies.get('testdata'))
  },
  methods: {
    changeColor: function () {
      $('#mm').css('color', '#f00')
    }
  }
}
</script>
