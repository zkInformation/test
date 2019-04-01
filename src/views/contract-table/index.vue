<template>
  <div class="app-container">
    <div class="filter-container02" >
      <el-form>

          <el-form-item label="承接企业名称">
            <el-input placeholder="承接企业名称"></el-input>
          </el-form-item>

          <el-form-item label="交接单填写日期">
            <el-date-picker type="date" placeholder="填写日期" ></el-date-picker>
          </el-form-item>

          <el-form-item label="业务交接单编号">
            <el-input placeholder="业务交接单编号"></el-input>
          </el-form-item>

          <el-form-item label="合同编号">
            <el-input placeholder="合同编号"></el-input>
          </el-form-item>

        <el-form-item label="客户名称">
          <el-input placeholder="客户名称"></el-input>
        </el-form-item>
        <el-form-item label="第一次合作年度">
          <el-input placeholder="第一次合作年度"></el-input>
        </el-form-item>
        <el-form-item label="区域">
          <el-input placeholder="区域"></el-input>
        </el-form-item>
        <el-form-item label="科技类别">
          <el-input placeholder="科技类别"></el-input>
        </el-form-item>
        <el-form-item label="项目类别">
          <el-input placeholder="项目类别"></el-input>
        </el-form-item>
        <el-form-item label="服务专题">
          <el-input placeholder="服务专题"></el-input>
        </el-form-item>
        <el-form-item label="服务内容">
          <el-input placeholder="服务内容"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" >
          <el-select placeholder="项目名称"></el-select>
        </el-form-item>
        <el-form-item label="项目申请资助金额（万）">
          <el-input placeholder="项目申请资助金额（万）"></el-input>
        </el-form-item>
        <el-form-item label="预计项目收入（万）">
          <el-input placeholder="预计项目收入（万）"></el-input>
        </el-form-item>
        <el-form-item label="项服务费率（万）">
          <el-input placeholder="项服务费率（万）"></el-input>
        </el-form-item>
        <el-form-item label="定额服务费（万）">
          <el-input placeholder="定额服务费（万）"></el-input>
        </el-form-item>
        <el-form-item label="签约日期">
          <el-date-picker type="date" placeholder="签约日期" ></el-date-picker>
        </el-form-item>

          <el-form-item label="业务开发人">
            <el-input placeholder="业务开发人"></el-input>
          </el-form-item>

          <el-form-item label="服务比例">
            <el-input placeholder="服务比例"></el-input>
          </el-form-item>

        <el-form-item label="跟单员">
          <el-input placeholder="跟单员"></el-input>
        </el-form-item>

        <el-form-item label="技术员">
          <el-input placeholder="技术员"></el-input>
        </el-form-item>

        <el-form-item label="申报年限">
          <el-input placeholder="申报年限"></el-input>
        </el-form-item>
        <el-form-item label="申报日期">
          <el-input placeholder="申报日期"></el-input>
        </el-form-item>
        <el-form-item label="项目状态">
          <el-input placeholder="项目状态"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input placeholder="原因" type="textarea"></el-input>
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
