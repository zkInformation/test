<template>
  <div class="login-container">
    <div class="ms-login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">政科业务管理系统</h3>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>

        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="请输入用户名" /><!--class="userinfo"-->

      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>

        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="请输入密码"
          @keyup.enter.native="handleLogin" /><!--class="userinfo",-->

        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-checkbox v-model="remember" class="tips">
        记住我
      </el-checkbox>
      <el-button class="tips" style="margin-left:307px" type="text" @click="dialogVisible = true">修改密码</el-button>
      <!-- <a class="tips" style="float: right" type="text" @click="dialogVisible = true">修改密码？</a>-->
      <!--<el-button class="tips" style="text-align: right" type="text" @click="dialogVisible = true">修改密码？</el-button>-->

      <el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
        登 录
      </el-button>
      </el-form-item>
      <!--<div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div>-->
    </el-form>


    </div>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%"

    ><!--:before-close="handleClose"-->
      <el-input placeholder="请输入新的密码" class="in"/>
      <el-input placeholder="重复输入密码" class="in"/>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      remember:false,
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  /*background-image:url("../../assets/siyecao.jpg") ;//引用图片
  background-size: cover;//图片自适应*/


  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    /*.userinfo{
      background: transparent;//背景透明
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;//圆角边框
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }*/


   /* input {
      background: transparent;//背景透明
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;//圆角边框
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }*/
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  /*position: fixed;*/ //原用于定位；现在登录界面用作遮罩层 由于弹窗功能在<div>里，导致遮罩层挡住了弹窗输入框 （为什么在整体做一个遮罩层？？）
  height: 100%;
  width: 100%;
  background-color: $bg;
}
  .login-form {
    position: absolute;//位置：绝对
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #fff;/*$light_gray*/
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

</style>
