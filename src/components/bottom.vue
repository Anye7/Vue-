<template>
  <div>
    <div class="bottom">
      <el-button type="warning" @click="changeaa()">我是子组件</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        aa :'tianhaoleng'
      }
    },
    methods:{
      changeaa(){
        this.$emit("titlechange",this.aa)
      }
    }
  }
</script>

<style>
  .bottom{
    width: 100%;
    height: 500px;
    background-color: #f99;
  }
</style>
