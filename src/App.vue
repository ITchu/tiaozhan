<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding:0;
  text-decoration: none;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
  background: #ffffff;
  max-width:540px;
  margin: 0 auto;
}
</style>
