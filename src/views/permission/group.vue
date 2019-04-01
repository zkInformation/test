<template>
  <div class="app-container">
    <div class="filter-container">

      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="dialogVisible = true">新增用户组</el-button>
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
        <el-table-column label="部门名称" align="center">
          <template slot-scope="scope">
            {{scope.row.name}}<!--{{ scope.row.title }}-->
          </template>
        </el-table-column>
        <el-table-column label="创建人" width="150" align="center">
          <template slot-scope="scope">
            {{scope.row.follow}}<!--<span>{{ scope.row.author }}</span>-->
          </template>
        </el-table-column>
        <el-table-column label="创建时间" width="150" align="center">
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
        name: "group",
      data(){
          return{
            dialogVisible:false
          }
      },
      methods:{
        handleClose(done){
          this.$confirm('确认关闭？')
            .then(_=>{
              done();
            })
            .catch(_ => {});
        }
      }
    }
</script>

<style scoped>

</style>
