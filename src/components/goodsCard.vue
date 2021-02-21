<template>
  <div>
    <el-card shadow="hover">
      <div class="img">
        <img
          :src="icon"
          class="image"
        >
      </div>
      <div class="desc">
        <div class="name">{{name}}</div>
        <div class="info">{{info}}</div>
        <div class="price">
          <span class="rmb">RMB:</span>
          <span class="final">{{finalPrice}}元</span>
          <span class="original" v-if="originalPrice > finalPrice">{{originalPrice}}元</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  // 页面标识，需要指明
  name: 'goodsCard',
  props: [
    'goods'
  ],
  data () {
    return {
      icon: '',
      name: '',
      info: '',
      finalPrice: '',
      originalPrice: ''
    }
  },
  methods: {
    init () {
      console.log('init')
      this.icon = this.goods.icon
      this.name = this.goods.name
      this.info = this.goods.info
      this.finalPrice = this.goods.finalPrice
      this.originalPrice = this.goods.originalPrice
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped>

.desc {
  padding: 5px;
  text-align: center;
}
.desc .name {
  padding: 5px;
  color: #303133;
}
.desc .info {
  padding: 5px;
  color: #909399;
  font-size: small;
}

.desc .price .rmb {
  font-size: xx-small;
  font-weight: bold;
}
.desc .price .final {
  color: #F56C6C;
}

.desc .price .original {
  margin-left: 5px;
  color: #C0C4CC;
  font-size: small;
  text-decoration: line-through;
}
</style>
