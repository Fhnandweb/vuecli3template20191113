<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@import "~@/assets/css/global.less"; //全局css存放的文件
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
