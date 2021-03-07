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
          :data="tableData"
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
                @click="deleteRow(scope.$index, tableData)"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
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
</style>
