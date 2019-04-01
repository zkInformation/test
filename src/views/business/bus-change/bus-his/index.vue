<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="dialogVisible = true">新增用户组</el-button>
    </div>

    <el-table
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>

      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column align="center" label="序号" width="95">
        <template ><!--{{ scope.$index }} slot-scope="scope"-->
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="部门名称" align="center">
        <template >
          {{scope.row.name}}<!--{{ scope.row.title }} slot-scope="scope"-->
        </template>
      </el-table-column>
      <el-table-column label="创建人" width="150" align="center">
        <template >
          {{scope.row.follow}}<!--<span>{{ scope.row.author }}</span> slot-scope="scope"-->
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="150" align="center">
        <template >
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span> slot-scope="scope"-->
        </template>
      </el-table-column>

      <el-table-column label="操作" width="230" align="center">
        <template >
          <!-- {{ scope.row.pageviews }} slot-scope="scope"-->
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

    <div class="block04">
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

    <el-dialog
      title="新增用户组"
      :visible.sync="dialogVisible"
      width="30%"
    ><!--:before-close="handleClose"-->
      <el-form label-width="80px" label-position="left">
        <el-form-item label="部门流水">
          <el-input />
        </el-form-item>

        <el-form-item label="部门名称">
          <el-input />
        </el-form-item>

      </el-form>

      <div style="text-align: right">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>

    </el-dialog>

  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.block04{
  float: right;
  padding-top: 20px;
}
</style>
