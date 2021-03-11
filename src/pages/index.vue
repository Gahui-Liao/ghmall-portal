<template>
  <el-container>
    <el-header>
      <div class="header">
        <div class="li">
          <div class="logo">
            GHMALL
          </div>
          <div class="search">
            <el-input
              placeholder="请输入内容"
              v-model="searchInput"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </div>
          <div class="auth">
            <div v-if="hasLogin == 0">
              <div class="avatar">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
              <div class="login">请登录</div>
            </div>
            <div v-else-if="hasLogin == 1">
              <div class="avatar">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
              <div class="mine">
                <el-dropdown @command="handleDropdownCommand">
                  <div class="text">
                    <span class="el-dropdown-link">
                      XXXX昵称<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="cart">购物车</el-dropdown-item>
                    <el-dropdown-item command="order">我的订单</el-dropdown-item>
                    <el-dropdown-item command="account">账号设置</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      <!-- 默认显示商品推荐 -->
      <router-view></router-view>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  // 页面标识，需要指明
  name: 'index',
  data () {
    return {
      searchInput: '',
      hasLogin: 1,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // 处理下拉菜单逻辑
    handleDropdownCommand (command) {
      this.$router.push({path: '/' + command, query: {accountId: 1}})
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  width: 100%;
}
.header .li {
  overflow: hidden;
  display: inline-block;
}
.logo {
  float: left;
  font-size: 30px;
  font-weight: bolder;
  color: #409eff;
  width: fit-content;
}
.search {
  float: left;
  padding-left: 20px;
  padding-right: 20px;
  width: 500px;
}
.auth {
  float: left;
  width: fit-content;
}

.auth .avatar {
  float: left;
  margin-right: 10px;
}
.auth .login {
  float: left;
  margin-top: 10px;
}
.auth .mine {
  float: left;
  margin-top: 10px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
