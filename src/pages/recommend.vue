<template>
  <el-container>
    <div class="recommend" @click="toDetail">
      <goods-card :goods="goods"></goods-card>
    </div>
  </el-container>
</template>
<script>
import goodsCard from '../components/goodsCard.vue'
export default {
  components: { goodsCard },
  // 页面标识，需要指明
  name: 'recommend',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      goods: {
        id: 1,
        icon: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        name: '测试商品',
        info: '多快好省 | 简单测试',
        finalPrice: '66.66',
        originalPrice: '99.99'
      }
    }
  },
  methods: {
    toDetail () {
      console.log('跳转到详情页面')
      this.$router.push({path: '/detail', query: {goodsId: 1}})
    }
  }

}
</script>
<style scoped>
.recommend {
  padding-left: 20%;
  padding-right: 20%;
}
</style>
