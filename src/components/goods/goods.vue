<template>
  <el-table
            :data="tableData"
    style="width: 100%">
    <!--<el-table-column-->
      <!--type="index"-->
      <!--index="">-->
    <!--</el-table-column>-->
    <el-table-column
      prop="id"
      label="ID"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.id }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="名字"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.name }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="pricen"
      label="价格"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.pricen }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="priceo"
      label="折扣价"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.priceo }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="desc1"
      label="描述1"
      width="180">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.desc1 }}</el-tag>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleClick(scope.row)">
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>
<script>
  export default{
    name: 'goods',
    data(){
      return {
        tableData: [

        ]
      }
    },
    created(){
      this.$http.get("/api/admin/goods").then(res=>{
        console.log(res);
        this.tableData=res.body;

      })
    },
    methods:{
      handleDelete(index,row) {
        this.$http.get(`/api/admin/goods/del?id=${row}`).then(response => {
          if(response.body){
            this.tableData.splice(index,1);
          }else{
            console.log('删除失败');
          }
        });
      },

      handleClick(row) {
        let id=row.id;
        this.$router.push(`/goodedit?id=${id}`);
      }

    }
  }
</script>
<style scoped lang='scss'>
</style>
