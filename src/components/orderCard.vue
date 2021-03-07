<template>
  <div class="order-card">
    <el-card>
      <div slot="header">
        <span>订单编号：{{orderCode}}</span>
        <div style="font-size: 10px;float: right; padding: 3px 0">下单时间：{{createTime}}</div>
      </div>
      <el-table :data="orderItems">
        <el-table-column
          prop="goods"
          label="商品"
        >
          <template slot-scope="scope">
            <div class="goods">
              <div class="icon">
                <el-image
                  :src="scope.row.goods.goodsIcon"
                  style="width: 50px; height: 50px"
                ></el-image>
              </div>
              <div class="name">{{scope.row.goods.goodsName}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
        >
        </el-table-column>
        <el-table-column
          prop="goodsCount"
          label="数量"
        >
        </el-table-column>
      </el-table>
      <div class="footer">
        <span>合计:</span>
        <div
          style="float: right; padding: 3px 0"
          class="totalPrice"
        >{{totalPrice}}元</div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  // 页面标识，需要指明
  name: 'orderCard',
  props: [
    'order'
  ],
  data () {
    return {
      orderCode: '',
      createTime: '',
      orderItems: [],
      totalPrice: 0
    }
  },
  methods: {
    init () {
      console.log('init')
      this.orderCode = this.order.orderCode
      this.createTime = this.order.createTime
      this.orderItems = this.order.orderItems
      this.totalPrice = this.order.totalPrice
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped>
.order-card {
  margin-top: 10px;
}
.goods .icon {
  float: left;
}
.goods .name {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
}
.footer {
  padding-top: 10px;
}
.footer .totalPrice {
  font-size: 30px;
  color: #409eff;
}
</style>
