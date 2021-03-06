<template>
  <div>
    <div class="header">
      <i class="el-icon-s-order"></i>
      我的订单
    </div>
    <div class="main">
      <div
        v-for="(item, index) in orders"
        :key="index"
      >
        <order-card :order='item'></order-card>
      </div>
    </div>
  </div>
</template>
<script>
import orderCard from '../components/orderCard.vue'
export default {
  components: { orderCard },
  name: 'order',
  data () {
    return {
      orders: [
        {
          orderCode: 'GH20210304101001',
          createTime: '2021-03-04 10:10:01',
          orderItems: [
            {
              goods: {
                goodsId: 1001,
                goodsIcon: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                goodsName: '测试商品'
              },
              goodsCount: 3,
              price: 33.33
            }
          ],
          totalPrice: 99.99
        },
        {
          orderCode: 'GH20210304101001',
          createTime: '2021-03-04 10:10:01',
          orderItems: [
            {
              goods: {
                goodsId: 1001,
                goodsIcon: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                goodsName: '测试商品'
              },
              goodsCount: 3,
              price: 33.33
            }
          ],
          totalPrice: 99.99
        }
      ]
    }
  }
}
</script>
