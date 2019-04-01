<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="企业项目搜索" style="width:200px" class="filter-item" clearable ></el-input>
      <el-button class="filter-item" type="primary" icon="el-icon-search">搜索</el-button>
      <el-button class="filter-item"  type="primary" icon="el-icon-edit" @click="dialogVisible = true">添加业务通知</el-button>

    </div>

    <el-table

      element-loading-text="Loading"
      border
      fit
      highlight-current-row

    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope"><!--{{ scope.$index }}-->
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="企业名称" align="center" width="180">
        <template slot-scope="scope">
          {{scope.row.name}}<!--{{ scope.row.title }}-->
        </template>
      </el-table-column>
      <el-table-column label="企业项目" width="180" align="center">
        <template slot-scope="scope">
          {{scope.row.follow}}<!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="预计企业收款" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="业务员" width="100" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>
      <el-table-column label="跟单员" width="100" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>

      <el-table-column label="编辑时间" width="120" align="center">
        <template slot-scope="scope">
          {{scope.row.date}} <!--<span>{{ scope.row.author }}</span>-->
        </template>
      </el-table-column>

      <el-table-column label="操作"  align="center">
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

    <div  class="block03">
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
      title="业务通知"
      :visible.sync="dialogVisible"
      width="30%"
    ><!--:before-close="handleClose"-->
      <el-form label-width="80px" label-position="left">

        <el-form-item label="企业名称">
          <el-input />
        </el-form-item>

        <el-form-item label="企业项目">
          <el-select  allow-create  filterable></el-select><!---->
        </el-form-item>

        <el-form-item label="项目收款">
          <el-input placeholder="项目收款（万）"/>
        </el-form-item>

        <el-form-item label="业务员">
          <el-select ></el-select>
        </el-form-item>

        <el-form-item label="跟单员">
          <el-select ></el-select>
        </el-form-item>

        <el-form-item label="备注">
          <el-input type="textarea" placeholder="备注内容..."/>
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
        name: "index",
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
.block03{
  float: right;
  padding-top: 20px;
}
</style>
