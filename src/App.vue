<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!-- <router-link to="/" exact>首页</router-link>
    <router-link to="/haha" active-class="gohome">haha</router-link>
    <router-link to="/work" >work</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.router-link-active{
  color: #f99;
}
.gohome {
  color: blue;
  font-size: 20px;
}
</style>
