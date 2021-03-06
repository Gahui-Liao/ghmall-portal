<template>
  <el-container>
    <div class="main">
      <!-- 左侧商品轮播图 -->
      <div class="left">
        <el-carousel
          height="500px"
          v-if="pictures.length>1"
        >
          <el-carousel-item
            v-for="item in pictures"
            :key="item"
          >
            <el-image
              style="width: 100%; height: 500px"
              :src="item"
              fit="cover"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
        <div v-if="pictures.length==1">
          <img
            style="height:500px;width:100%;"
            :src="pictures[0]"
          />
        </div>
      </div>
      <!-- 左侧商品轮播图END -->
      <div class="right">
        <div class="content">
          <div class="name">
            <el-tag size="small">测试商品</el-tag>{{name}}
          </div>
          <div class="info">
            <div class="desc">{{info}}</div>
          </div>
          <div class="price">
            <span class="rmb">RMB:</span>
            <span class="final">{{finalPrice}}元</span>
            <span
              class="original"
              v-if="originalPrice > finalPrice"
            >{{originalPrice}}元</span>
          </div>
        </div>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  // 页面标识，需要指明
  name: 'recommend',
  data () {
    return {
      goodsId: this.$route.query.index,
      name: '测试商品',
      info: '房东房客还是分开就分开就很烦返回数据粉红色客还是分开就分开就很烦返回数据粉红色客还是分开就分开就很烦返回数据粉红色客还是分开就分开就很烦返回数据粉红色空间划分伤口缝合伤口返回顺丰航',
      finalPrice: '66.66',
      originalPrice: '99.99',
      pictures: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
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
.main {
  width: 100%;
  /* display: table-cell; */
  /* vertical-align: middle; */
  /* text-align: center; */
  padding-left: 100px;
  padding-right: 100px;
  background-color: blueviolet;
}
.main .left {
  width: 50%;
  height: 500px;
  /* display: inline-block; */
  float: left;
  background-color: blue;
}
.main .right {
  width: 50%;
  height: 500px;
  float: left;
  /* display: inline-block; */
  background-color: aqua;
}
.main .right .content {
  padding: 10px;
}
.main .right .content .name {
  font-size: 20px;
  font-weight: bold;
}
.main .right .content .info {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #606266;
}
.main .right .content .info .desc {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.main .right .content .price .rmb {
  font-size: xx-small;
  font-weight: bold;
}
.main .right .content .price .final {
  color: #F56C6C;
}

.main .right .content .price .original {
  margin-left: 5px;
  color: #C0C4CC;
  font-size: small;
  text-decoration: line-through;
}
</style>
