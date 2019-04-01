<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input placeholder="企业名称搜索" style="width:200px" class="filter-item" clearable></el-input>
      <el-button class="filter-item" type="primary" icon="el-icon-search" >搜索</el-button><!--v-waves -->


      <router-link to="/enterprise/enter-table">
        <el-button class="filter-item"  type="primary" icon="el-icon-edit" >添加</el-button>
      </router-link>

      <el-button class="filter-item" type="primary" icon="el-icon-download" disabled>导出</el-button><!--v-waves :loading="downloadLoading"-->
    </div>
    <!--v-loading="listLoading"-->
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row

    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope"><!--{{ scope.$index }}-->
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="企业名称" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}<!--{{ scope.row.title }}-->
        </template>
      </el-table-column>
      <el-table-column label="录入人员" width="120" align="center">
        <template slot-scope="scope">
          {{scope.row.follow}}<!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="录入时间" width="150" align="center">
        <template slot-scope="scope">
         {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="操作" width="230" align="center">
        <template slot-scope="scope">
         <!-- {{ scope.row.pageviews }}-->
          <el-button
            size="mini"
            type="success"
            plain
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <router-link :to="'/enterprise/enter-table'+scope.row.id">
            <el-button
              size="mini"
              type="primary"
              plain
              >编辑</el-button><!--plain:朴素按钮（样式设置） @click="handleEdit(scope.$index, scope.row)"-->
          </router-link>

          <el-button
            size="mini"
            type="danger"
            plain
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

    </div>


</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          list:[{
            id:'1',
            name:'广州政客科技有限公司',
            follow:'陆小凤',
            date:'2018.02.03'
          },{
            id:'2',
            name:'广州正科服务有限公司',
            follow:'郑克爽',
            date:'2018.12.05'
          },{
            id:'3',
            name:'广州哇哈哈哈有限公司',
            follow:'郑克爽',
            date:'2018.10.1'
          },{
            id:'4',
            name:'广州好笑小有限公司',
            follow:'郑克爽',
            date:'2018.12.06'
          },{
            id:'5',
            name:'广州好笑小有限公司',
            follow:'郑克爽',
            date:'2018.12.06'
          }],
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4

        }

      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        add(){

        }
      }

    }
</script>

<style scoped>
.block{
  float: right;
  padding-top: 20px;
}
</style>
