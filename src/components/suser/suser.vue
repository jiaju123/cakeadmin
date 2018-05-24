<template>
    <div>
        <el-table
            :data="tableData4"
            style="width: 100%"
            max-height="255">
        <el-table-column fixed prop="id" label="ID"
                         width="255">
        </el-table-column>
            <el-table-column
                    prop="nickname"
                    label="昵称"
                    width="255">
            </el-table-column>
        <el-table-column
                prop="zhanghao"
                label="用户名"
                width="255">
        </el-table-column>
        <el-table-column
                prop="pass"
                label="密码"
                width="255">
        </el-table-column>

    </el-table>
    </div>

</template>
<script>
    export default{
        name: 'suser',
        data(){
            return {
                tableData4:[]
            }
        },
        created(){
           this.$http.get("/api/admin/user").then(res=>{
               this.tableData4=res.body;
               console.log(this.tableData4);
           })
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        }
    }
</script>
<style scoped lang='scss'>
</style> 