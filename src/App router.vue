<template>
  <div id="app">
   <!-- 
   <router-link to='/'>首页</router-link> 
    <router-link to='/news'>新闻</router-link> 
    <router-link to='/food'>Food</router-link> 
    -->
    <router-view/>
    <router-view name='a'/>
    <router-view name='b'/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
