<template>
  <div class="login">
    <h3>欢迎登录</h3>
    <el-form>
      <el-form-item>
        <el-input
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
          v-model="account"
        >
        </el-input>
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="password"
        >
        </el-input>
        <el-button
          type="primary"
          @click="login"
        >登录</el-button>
        <el-button type="warning">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('login now')
      this.$get('/login', {}).then((response) => {
        console.log(response)
        return response.data
      }).catch((err) => { console.log(err) })
    }
  }
}
</script>
<style scoped>
.login {
  padding-left: 300px;
  padding-right: 300px;
}
</style>
