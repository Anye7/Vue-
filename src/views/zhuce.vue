<template>
  <div class="aa">
    <!-- <div class="bb"> -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="bb">
      <h3 style="text-align: center;">用户注册</h3>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" class="cc"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" class="cc"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" class="cc"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" class="cc"></el-input>
      </el-form-item>
      <el-form-item label="nn" prop="user">
        <el-input v-model="ruleForm.user" class="cc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="24">
            <div class="dd">
              <el-button type="primary" style="width:100% ;" @click="submitForm('ruleForm')">提交</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div>
              <el-link type="success" @click="toLogin">用户登录</el-link>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-link type="success">忘记密码</el-link>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <!-- </div> -->

  </div>

</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          pwd: '',
          user: '',
          email: '',
          phone: '',
        },
        rules: {
          name: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]{4,16}$/,
              message: '中文、英文、数字包括下划线,4-16位',
              trigger: 'blur'
            }
          ],
          phone: [{
              required: true,
              message: '请输入手机号',
              trigger: 'blur'
            },
            {
              pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
              message: '输入错误',
              trigger: 'blur'
            }
          ],
          email: [{
              required: true,
              message: '请输入邮箱',
              trigger: 'blur'
            },
            {
              pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
              message: '格式错误',
              trigger: 'blur'
            }
          ],
          user: [{
              required: true,
              message: '请输入账号',
              trigger: 'blur'
            },
            {
              pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
              message: '字母开头,4-16位',
              trigger: 'blur'
            }
          ],
          pwd: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,
              message: '必须包含大小写字母和数字,6-18位',
              trigger: 'blur'
            }
          ],
        }
      };
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/nd/page/register', {
              username: this.ruleForm.user,
              password: this.ruleForm.pwd,
              email: this.ruleForm.email,
              phone: this.ruleForm.phone,
              name: this.ruleForm.name
            }).then(res => {
              console.log(res)
            })
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
      toLogin() {
        this.$router.push({
          path: '/login'
        });
      },

    }
  }
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
      height: 500px;
      margin-top: 10%;
      margin-right: 35%;
      background-color: rgba(250, 250, 250, 0.5);

      .cc {
        width: 85%;
      }

      .dd {
        width: 85%;
      }
    }
  }
</style>
