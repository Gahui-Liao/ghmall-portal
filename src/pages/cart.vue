<template>
  <div class="cart">
    <div class="header">
      <i class="el-icon-shopping-cart-full"></i>
      我的购物车
    </div>
    <div class="main">
      <div class="items">
        <el-table
          ref="multipleTable"
          :data="carts"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
            label="全选"
          >
          </el-table-column>
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
          <el-table-column
            label="操作"
            width="120"
          >
            <template slot-scope="scope">
              <el-button
                @click="deleteRow(scope.$index, carts)"
                type="text"
                size="small"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="footer">
        <span>合计:</span>
        <div
          style="float: right; padding: 3px 0"
          class="totalPrice"
        >{{totalPrice}}元</div>
      </div>
      <div class="btn">
        <el-button type="primary" class="submit">立即结算</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      carts: [
        {
          goods: {
            goodsId: 1001,
            goodsIcon: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            goodsName: '测试商品'
          },
          price: 0.01,
          goodsCount: 3
        },
        {
          goods: {
            goodsId: 1002,
            goodsIcon: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            goodsName: '测试商品'
          },
          price: 0.02,
          goodsCount: 6
        }
      ],
      totalPrice: 0,
      multipleSelection: []
    }
  },
  // 监听数据变化，这里主要是监听选中
  watch: {
    multipleSelection (val) {
      var temp = 0
      for (var row of this.multipleSelection) {
        console.log(row)
        temp += row.price * row.goodsCount * 100
      }
      this.totalPrice = temp / 100
    }
  },
  methods: {
    handleSelectionChange (val) {
      // 这里的val其实就是选中了的数据
      this.multipleSelection = val
    },
    // 移除某行数据
    deleteRow (index, carts) {
      console.log('删除第' + index + '行数据')
      carts.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.cart {
  padding-left: 20%;
  padding-right: 20%;
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

.btn {
  margin-top: 30px;
  padding-left: 150px;
  padding-right: 150px;
  text-align: center;
}
.btn .submit {
  width: 90%;
  font-size: 15px;
  font-weight: bolder;
}
</style>
