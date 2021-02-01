<template>
<el-container>
  <el-header>
    <div class="head">
      <div class="logo">
        GHMALL
      </div>
      <div class="drowdown">
        <el-dropdown class="drop">
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账户设置</el-dropdown-item>
            <el-dropdown-item>订单中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="avatar">
        <div class="pic">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
      </div>
      <div class="search">
        <el-input
          placeholder="搜索全部商品"
          v-model="searchInput"
          class="input"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
      </div>
    </div>
  </el-header>
  <el-main>
    <!-- 显示的主要内容 -->
    <router-view></router-view>
  </el-main>
  <el-footer>
      <div class="footer">
        <div>
          <span>关于本站</span>
          <el-divider direction="vertical"></el-divider>
          <span>联系作者</span>
        </div>
        <div>以前觉得工作最累，现在发现原来不开心才是最累的~</div>
      </div>
    </el-footer>
</el-container>
</template>

<script>
export default {
  // 页面标识，需要指明
  name: 'ghmall',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
/* header begin */
.head {
  height: 10%;
  width: 100%;
}
.head .logo {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #409eff;
  float: left;
}
.head .avatar {
  float: right;
  padding: 5px;
}
.head .avatar .pic {
  margin-top: 5px;
}
.head .drowdown {
  float: right;
}
.head .drowdown .drop {
  margin-top: 20px;
}
.head .search {
  margin-left: 20px;
  float: left;
  padding: 5px;
}

.head .search .input {
  width: 500px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/* header end */

/* main begin */
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.main {
  height: auto;
  width: 100%;
}
.main .carousel {
  width: 100%;
  margin: auto;
}
.main .hotGoods {
  widows: 80%;
}

.main .hotGoods .text {
  padding: 20px;
  font-size: 30px;
}
/* main end */
/* footer begin */
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}
.footer {
  width: 100%;
  text-align: center;
  padding: 10px;
}
/* footer end */
</style>
