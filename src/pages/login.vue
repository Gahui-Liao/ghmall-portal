<template>
  <div class="login">
    <div class="li">
      <h3>欢迎登录</h3>
      <el-form>
        <el-form-item>
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-user"
            v-model="accountName"
          >
          </el-input>
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="password"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button
          type="success"
          @click="login"
          round
        >登录</el-button>
        <el-button
          type="danger"
          @click="register"
          round
        >注册</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      accountName: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.accountName === '') {
        this.$message.error('请输入账号')
        return
      }
      if (this.password === '') {
        this.$message.error('请输入密码')
        return
      }
      this.$get(this.$URL.login, {}).then((response) => {
        console.log(response)
        return response.data
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>
<style scoped>
.login {
  text-align: center;
}
.login .li {
  overflow: hidden;
  display: inline-block;
  width: 300px;
}
</style>
