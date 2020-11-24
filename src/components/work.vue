<template>
  <div>
    <h1>
      <font color="red">我是work组件</font>
    </h1>
    <h2><font color="yellowgreen">参数是：{{road}}</font> </h2>
    <button @click="go()">我要去haha组件</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        road:'',
        name:"zhangguangjie",
        age:100
      }
    },
    mounted() {
      console.log(this.$route);
      this.road = this.$route.params.id
    },
    methods:{
      go(){
        this.$router.push({
          path:"/haha",
          query:{
            name:"张光杰",
            age:100
          }
        });
      }
    }
  }
</script>

<style>
</style>
