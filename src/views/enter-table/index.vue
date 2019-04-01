<template>
    <div class="app-container01">
      <div class="filter-container01" >

        <h2><span>企业自评表</span></h2>

        <el-form :inline="true">

          <el-form-item label="业务员" size="small" >
            <el-select placeholder="业务员" filterable allow-create>
              <el-option-group label="业务部">
                <el-option label="陆小凤" value="shanghai"></el-option>
                <el-option label="陆小芬" value="beijing"></el-option>
              </el-option-group>

            </el-select>
          </el-form-item>

          <el-form-item label="跟单员" size="small" >
            <el-select  placeholder="跟单员" filterable >
              <el-option-group label="业务部">
                <el-option label="luxaifo" value="shanghai"></el-option>
                <el-option label="dasd" value="beijing"></el-option>
              </el-option-group>
            </el-select>
          </el-form-item>

          <el-form-item label="技术员" size="small" >
            <el-select  placeholder="技术员" filterable >
              <el-option-group label="技术部">
                <el-option label="sadadasd" value="shanghai"></el-option>
                <el-option label="adfsdfdf" value="beijing"></el-option>
              </el-option-group>

            </el-select>
          </el-form-item>
        </el-form>

        <el-form :inline="true">
          <h3><span>企业基本情况</span></h3>

          <el-form-item label="企业名称" size="small">
            <el-input placeholder="企业名称"></el-input>
          </el-form-item>

          <el-form-item label="成立时间" size="small">
            <el-date-picker type="date" placeholder="成立时间" ></el-date-picker>
          </el-form-item>
          <el-form-item label="注册资本" size="small">
            <el-input placeholder="注册资本"></el-input>
          </el-form-item>
        </el-form>

        <el-form :inline="true">
          <el-form-item label="注册地址" size="small">
            <el-input placeholder="注册地址"></el-input>
          </el-form-item>
          <el-form-item label="企业网址" size="small">
            <el-input placeholder="企业网址"></el-input>
          </el-form-item>
          <el-form-item label="主导产品" size="small">
            <el-input placeholder="主导产品"></el-input>
          </el-form-item>
        </el-form>

        <el-form>
          <el-form-item label="企业简介" size="small" >
            <el-input placeholder="企业简介" type="textarea"></el-input>
          </el-form-item>
        </el-form>




        <el-table :data="tableData">
        <!--<el-table-column>
            <el-button type="primary" icon="el-icon-plus" circle></el-button>
          </el-table-column>-->
            <el-table-column label="企业人员情况" align="center">

            <el-table-column label="年" align="center" prop="date">
              <template scope="scope">
                  <el-input v-model="scope.row.date"></el-input>

              </template>
            </el-table-column>

            <el-table-column label="员工总数" align="center" prop="count">
              <template scope="scope">
                <el-input v-model="scope.row.count"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="购买社保人数" align="center" prop="seccount">
              <template scope="scope">
                <el-input v-model="scope.row.seccount"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="申报个税人数" align="center" prop="incount">
              <template scope="scope">
                <el-input v-model="scope.row.incount"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="研发人数" align="center" prop="develop">
              <template scope="scope">
                <el-input v-model="scope.row.develop"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="大专以上研发人员数" align="center" prop="devecoll">
              <template scope="scope">
                <el-input v-model="scope.row.devecoll"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="高级职称" align="center" prop="senpost">
              <template scope="scope">
                <el-input v-model="scope.row.senpost"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="中级职称" align="center" prop="medpost">
              <template scope="scope">
                <el-input v-model="scope.row.medpost"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="初级职称" align="center" prop="pripost">
              <template scope="scope">
                <el-input v-model="scope.row.pripost"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="博士" align="center" prop="doctor">
              <template scope="scope">
                <el-input v-model="scope.row.doctor"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="硕士" align="center" prop="master">
              <template scope="scope">
                <el-input v-model="scope.row.master"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="本科" align="center" prop="regular">
              <template scope="scope">
                <el-input v-model="scope.row.regular"></el-input>
              </template>
            </el-table-column>

            <el-table-column label="大专" align="center" prop="college">
              <template scope="scope">
                <el-input v-model="scope.row.college"></el-input>
              </template>
            </el-table-column>

              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button @click.native.prevent="deleteRowStaffs(scope.$index,tableData)" type="danger" plain>删除</el-button>
                </template>
              </el-table-column>


            </el-table-column>


          </el-table>
        <el-button icon="el-icon-plus" circle type="primary" @click="addRowStaffs(tableData)"></el-button>

        <el-table>
            <el-table-column label="(近三年)知识产权情况" align="center">
            <el-table-column label="知识产权数量（个）" align="center"> </el-table-column>
            <el-table-column label="发明专利" align="center">
            <template scope="scope">
              <el-input />
            </template>
            </el-table-column>

            <el-table-column label="实用新型专利" align="center">
              <template scope="scope">
                <el-input />
              </template>
            </el-table-column>

            <el-table-column label="软件著作权" align="center">
              <template scope="scope">
                <el-input />
              </template>
            </el-table-column>

            <el-table-column label="集成电路图" align="center">
              <template scope="scope">
                <el-input />
              </template>
            </el-table-column>

          </el-table-column>

        </el-table>



        <el-table :data="financelist">
         <el-table-column label="近三年对税局的财务情况" align="center">

           <el-table-column label="时间（近三年）" align="center" prop="year">
             <template scope="scope">
               <el-input v-model="scope.row.year" />
             </template>
           </el-table-column>

           <el-table-column label="总资产" align="center" prop="totalass">
             <template scope="scope" >
               <el-input v-model="scope.row.totalass"/>
             </template>
           </el-table-column>

           <el-table-column label="净资产" align="center" prop="networth">
             <template scope="scope">
               <el-input v-model="scope.row.networth"/>
             </template>
           </el-table-column>

           <el-table-column label="营业收入" align="center" prop="operin">
             <template scope="scope">
               <el-input v-model="scope.row.operin"/>
             </template>
           </el-table-column>

           <el-table-column label="总收入" align="center" prop="income">
             <template scope="scope">
               <el-input  v-model="scope.row.income"/>
             </template>
           </el-table-column>

           <el-table-column label="净利润" align="center" prop="profits">
             <template scope="scope">
               <el-input v-model="scope.row.profits"/>
             </template>
           </el-table-column>

           <el-table-column label="纳税总额" align="center" prop="totaltax">
             <template scope="scope">
               <el-input v-model="scope.row.totaltax"/>
             </template>
           </el-table-column>

           <el-table-column label="固定资产原值" align="center" prop="fixass">
             <template scope="scope">
               <el-input v-model="scope.row.fixass"/>
             </template>
           </el-table-column>

           <el-table-column label="研发费用" align="center" prop="developcost">
             <template scope="scope">
               <el-input v-model="scope.row.developcost"/>
             </template>
           </el-table-column>

           <el-table-column label="产品是否出口" align="center" prop="product">
             <template scope="scope">
               <el-input v-model="scope.row.product"/>
             </template>
           </el-table-column>

           <el-table-column label="备注" align="center" prop="remark">
             <template scope="scope">
               <el-input v-model="scope.row.remark"/>
             </template>
           </el-table-column>

           <el-table-column label="操作" align="center" >
             <template scope="scope">
               <el-button @click.native.prevent="deleteRowfinance(scope.$index,financelist)" type="danger" plain>删除</el-button>
             </template>
           </el-table-column>

         </el-table-column>
        </el-table>

        <el-button icon="el-icon-plus" circle type="primary" @click="addRowfinance(financelist)"></el-button>

        <el-table>
          <el-table-column label="企业联系方式" align="center">

            <el-table-column label="法人代表/企业负责人" align="center">
              <el-table-column label="姓名">
                <template scope="scope">
                  <el-input />
                </template>
              </el-table-column>

              <el-table-column label="手机">
                <template scope="scope">
                  <el-input />
                </template>
              </el-table-column>

              <el-table-column label="QQ">
                <template scope="scope">
                  <el-input />
                </template>
              </el-table-column>

            </el-table-column>

            <el-table-column label="联系人" align="center">
              <el-table-column label="姓名">

              </el-table-column>
              <el-table-column label="手机">

              </el-table-column>
              <el-table-column label="QQ">

              </el-table-column>
            </el-table-column>

            <el-table-column label="财务负责人" align="center">
              <el-table-column label="姓名"></el-table-column>
              <el-table-column label="手机"></el-table-column>
              <el-table-column label="QQ"></el-table-column>
            </el-table-column>

            <el-table-column label="技术负责人" align="center">
              <el-table-column label="姓名"></el-table-column>
              <el-table-column label="手机"></el-table-column>
              <el-table-column label="QQ"></el-table-column>
            </el-table-column>

          </el-table-column>
        </el-table>


        <el-table>
          <el-table-column label="企业承担过国家、省、市、区科技项目情况" align="center">
            <el-table-column label="年份+证书或获奖名" align="center">
              <template scope="scope">
                <el-input />
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>

        <el-table>
          <el-table-column label="企业资质情况（企业荣誉证书和获奖情况）" align="center">
            <el-table-column label="年份+项目名" align="center">
              <template scope="scope">
                <el-input />
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>

        <el-button type="primary">保存并查看列表</el-button>
        <el-button type="primary">保存并继续添加</el-button>


      </div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            tableData:[{
             /* date:'1994.30.2',
              name:'萧峰',
              num:'123'*/
            }
            ],
            financelist:[]

          }
      },
      methods:{
          deleteRowStaffs(index,rows){
            rows.splice(index,1);
          },
          addRowStaffs(tableData,event){
            tableData.push({
              date:'',
              count:'',
              seccount:'',
              incount:'',
              develop:'',
              devecoll:'',
              senpost:'',
              pripost:'',
              doctor:'',
              master:'',
              regular:'',
              college:'',
            })
          },
        deleteRowfinance(index,rows){
          rows.splice(index,1);
        },
        addRowfinance(tableData,event){
          tableData.push({
            year:'',
            totalass:'',
            networth:'',
            operin:'',
            income:'',
            profits:'',
            totaltax:'',
            fixass:'',
            developcost:'',
            product:'',
            remark:'',

          })
        },

      }

      }

</script>

<style scoped>
  .app-container01 {
    padding: 20px;
  }

  .filter-container01 {
    padding-bottom: 10px;
    text-align: center;

  }


</style>
