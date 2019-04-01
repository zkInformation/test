<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="收款名称搜索" style="width:200px" class="filter-item" clearable :disabled="true"></el-input>
      <el-button class="filter-item" type="primary" icon="el-icon-search">搜索</el-button>
      <el-button class="filter-item"  type="primary" icon="el-icon-edit" >添加</el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-download" disabled>导出</el-button>

    </div>
    <el-table

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
      <el-table-column label="企业汇款" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.follow}}<!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="回款年月" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="业务员" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="跟单员" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="操作" width="230" align="center">
        <template slot-scope="scope">
          <!-- {{ scope.row.pageviews }}-->
          <el-button
            size="mini"
            type="primary"
            plain
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            plain
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>

    <div class="block02">
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
        name: "index"
    }
</script>

<style scoped>
.block02{
  float: right;
  padding-top: 20px;
}
</style>
