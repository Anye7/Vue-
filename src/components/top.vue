<template>
  <div>
    <div class="topbox">
      <img src="../assets/微信图片_20201028201714.jpg">
      <ul class="topul">
        <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    props:{
      datalist:{
         type:Array,
         requred:true
      }
    }
  }
</script>

<style scoped lang="scss">
  .topbox {
    width: 80%;
    height: px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50px;
    }

    .topul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .topul li {
      width: 5rem;
      height: 60px;
      border-radius: 5px;
      margin-left: 20px;
      background-color: #FF9999;
      color: white;
      text-align: center;
      line-height: 60px;
      font-size: 15px;

      &:hover {
        background-color: blue;
      }
    }
  }

  // .topul{
  // display: flex;
  // justify-content: flex-start;
  // align-items: center;
  // }
  // .topul li{
  // width: 5rem;
  // height: 60px;
  // border-radius: 5px;
  // margin-left: 20px;
  // background-color: #FF9999;
  // color: white;
  // text-align: center;
  // line-height: 60px;
  // font-size: 15px;

  // }
</style>
