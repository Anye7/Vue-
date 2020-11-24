<template>
  <div>
    <top :datalist="navList" />
    </top>
    <div class="box">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
        <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
      </ul>
    </div>
    <bot @titlechange="getdata($event)"></bot>
  </div>

</template>

<script>
  import top from "../components/top"
  import bot from "../components/bottom"
  export default {
    components: {
      top,
      bot
    },
    data() {
      return {
        count: 0,
        navList: [{
            name: "导航一",
            age: 18
          },
          {
            name: "导航二",
            age: 18
          },
          {
            name: "导航三",
            age: 18
          },
          {
            name: "导航四",
            age: 18
          },
          {
            name: "导航五",
            age: 18
          },
        ]
      }
    },
    methods: {
      load() {
        this.count += 2
      },
      getdata(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    width: 100%;
    height: 500px;
    text-align: center;
    background-color: red;

    ul {
      width: 100%;
      height: 300px;
    }
  }
</style>
