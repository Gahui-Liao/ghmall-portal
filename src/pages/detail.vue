<template>
  <div class="detail">
    <div class="carousel">
      <div class="title">
        <i class="el-icon-document"></i>
        {{name}}
      </div>
      <!-- 使用走马灯展示商品图片 -->
      <el-carousel
        :interval="4000"
        type="card"
        height="250px"
      >
        <el-carousel-item
          v-for="item in pictures"
          :key="item"
        >
          <!-- 开启图片预览 -->
          <el-image
            :src="item"
            fit="fill"
            :preview-src-list="pictures"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <el-tag
        class="tag"
        size="small"
      >测试标签</el-tag>
      <div class="info">
        {{info}}
      </div>
      <div class="price">
        <span class="rmb">RMB:</span>
        <span class="final">{{finalPrice}}元</span>
        <span
          class="original"
          v-if="originalPrice > finalPrice"
        >{{originalPrice}}元</span>
      </div>
      <div class="btn">
        <div class="li">
          <div class="buy">
            <el-button
              type="primary"
              icon="el-icon-present"
              round
            >立即购买</el-button>
          </div>
          <div class="like">
            <el-button
              type="warning"
              icon="el-icon-shopping-cart-2"
              round
            >加购物车</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 页面标识，需要指明
  name: 'detail_1',
  data () {
    return {
      goodsId: this.$route.query.index,
      name: '测试商品',
      info: '房东房客还是分开就分开就很烦返回数据粉红色客还是分开就分开就很烦返回数据粉红色客还是分开就分开就很烦返回数据粉红色客还是分开就分开就',
      finalPrice: '66.66',
      originalPrice: '99.99',
      pictures: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://iconfont.alicdn.com/t/57f909ab-6a6f-493d-b7e1-efc283abdd41.png',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
      ]
    }
  },
  methods: {
    init () {
      console.log(this.$route.query.goodsId)
    }
  },
  mounted () {
    console.log('详情页面初始化')
    this.init()
  }
}
</script>
<style scoped>
.detail {
  padding-left: 20%;
  padding-right: 20%;
}

.detail .title {
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: rgb(242, 247, 252);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.detail .content {
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.detail .content .tag {
  font-size: 15px;
  font-weight: bold;
}
.detail .content .info {
  margin-top: 10px;
  font-size: 15px;
  color: #606266;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.detail .content .price {
  margin-top: 10px;
}
.detail .content .price .rmb {
  font-size: xx-small;
  font-weight: bold;
}
.detail .content .price .final {
  font-weight: bold;
  font-size: 20px;
  color: #fd6334;
}

.detail .content .price .original {
  margin-left: 5px;
  color: #c0c4cc;
  font-size: small;
  text-decoration: line-through;
}
.detail .content .btn {
  padding: 10px;
  height: 40px;
  text-align: center;
}
.detail .content .btn .li {
  overflow: hidden;
  display: inline-block;
}
.detail .content .btn .buy {
  float: left;
}
.detail .content .btn .like {
  margin-left: 20px;
  float: left;
}
</style>
