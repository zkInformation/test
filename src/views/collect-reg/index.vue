<template>
  <div class="app-container">
    <div class="filter-container03" >
      <el-form>
        <el-form-item label="企业名称">
          <el-input placeholder="企业名称"></el-input>
        </el-form-item>
        <el-form-item label="企业汇款">
          <el-date-picker type="date" placeholder="企业汇款" ></el-date-picker>
        </el-form-item>
        <el-form-item label="申请官费">
          <el-input placeholder="申请官费"></el-input>
        </el-form-item>
        <el-form-item label="减缓官费">
          <el-input placeholder="减缓官费"></el-input>
        </el-form-item>
        <el-form-item label="外包费">
          <el-input placeholder="外包费"></el-input>
        </el-form-item>
        <el-form-item label="净收入">
          <el-input placeholder="净收入"></el-input>
        </el-form-item>
        <el-form-item label="汇款年月">
          <el-date-picker type="date" placeholder="汇款年月" ></el-date-picker>
        </el-form-item>
        <el-form-item label="项目名">
          <el-input placeholder="项目名"></el-input>
        </el-form-item>
        <el-form-item label="业务员">
          <el-input placeholder="业务员"></el-input>
        </el-form-item>
        <el-form-item label="跟单员">
          <el-input placeholder="跟单员"></el-input>
        </el-form-item>

      </el-form>

      <el-button type="primary">保存并查看列表</el-button>
      <el-button type="primary">保存并继续添加</el-button>


    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  .filter-container02{
    padding-bottom: 10px;
  }
</style>
