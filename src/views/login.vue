<template>
  <div class="aa">
    <div class="bb">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" class="cc"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="mima">
          <el-input type="password" v-model="ruleForm.mima" class="cc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="dd">立即登录</el-button>
          <el-button @click="resetForm('ruleForm')" class="dd">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        ruleForm: {
          name: "",
          mima: ""
        },
        rules: {
          phone: [{
              required: true,
              message: "用户名不能为空",
              trigger: "blur"
            },
            {
              pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
              message: "格式错误",
              trigger: "blur"
            },
          ],
          mima: [{
              required: true,
              message: "密码不能为空",
              trigger: "blur"
            },
            {
              pattern: /^[a-zA-Z]\w{5,17}$/,
              message: "格式错误",
              trigger: "blur"
            },
          ],
        },
      };
    },
    methods: {
      ...mapMutations({
        changLogin:'changLogin'
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/nd/page/login', {
              username: this.ruleForm.name,
              password: this.ruleForm.mima,
            }).then(res => {
              console.log(res)
              if (res.data.code === 0) {
                this.$message.success("登陆成功~");
                localStorage.setItem('userToken',res.data.token);
                this.changLogin({
                  logintolen:res.data.token
                })
               }else {
                alert(res.data.msg)
              }
            })
            // this.$http.post('/nd/page/login', this.ruleForm).then(res => {
              // console.log(res)
              // if (res.data.state === 0) {
              //   this.$message.success("登陆成功~");
              //   localStorage.setItem('usertoken',res.data.token);
              //   this.changLogin({
              //     logintolen:res.data.token
              //   })
              // }
            // })
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$router.push({
          path: '/zhuce',
        })
      },
    },
  };
</script>

<style scoped lang="scss">
  .aa {
    width: 100%;
    height: 900px;
    background-image: url(../../static/f6246a06b3c6db8359fd5a60bc062e58.jpeg);
    background-repeat: no-repeat;
    background-size: cover;

    .bb {
      float: right;
      padding-top: 20px;
      width: 30%;
      height: 260px;
      margin-top: 10%;
      margin-right: 35%;
      background-color: rgba(250, 250, 250, 0.5);

      .cc {
        width: 85%;
      }

      .dd {
        width: 40%;
      }
    }
  }
</style>
