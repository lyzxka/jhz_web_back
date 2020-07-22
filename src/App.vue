<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>

import Index from './page/index'

export default {
  name: 'App',
  components:{
    Index
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /*.el-aside {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 10px;
    overflow-y: scroll;
  }*/
  a {
    text-decoration: none;
    color: black;
  }

</style>
