<template>
  <el-container>
    <el-header>
      <div class="logo">
        <div class="txt">GHMALL</div>
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
      <div class="item">
        <div class="cart">
          <!-- <div class="icon"><i class="el-icon-shopping-cart-2"></i></div> -->
          <el-badge :value="0">
            <div class="icon"><i class="el-icon-shopping-cart-2"></i></div>
          </el-badge>
        </div>
      </div>
      <div class="auth">
        <div v-if="hasLogin == 0">
          <div class="avatar">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </div>
          <div class="login">登录</div>
        </div>
        <div v-else-if="hasLogin == 1">
          <div class="avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </div>
          <div class="mine">
            <el-dropdown>
              <span class="el-dropdown-link">
                XXXX昵称<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的订单</el-dropdown-item>
                <el-dropdown-item>账号设置</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
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
  }
}
</script>

<style scoped>
.logo {
  display: inline-block;
  vertical-align: middle;
  width: 15%;
}
.logo .txt {
  font-size: 40px;
  color: #409eff;
}
.search {
  display: inline-block;
  vertical-align: middle;
  width: 45%;
}
.item {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  width: 20%;
}

.item .cart {
  display: inline-block;
  border-radius: 2px;
}
.item .cart .icon {
  font-size: 28px;
  color: #f56c6c;
}
.auth {
  display: inline-block;
  vertical-align: middle;
}
.auth .avatar {
  display: inline-block;
  vertical-align: middle;
}
.auth .login {
  display: inline-block;
  vertical-align: middle;
}
.auth .mine {
  display: inline-block;
  vertical-align: middle;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
