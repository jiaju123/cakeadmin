<template>
        <div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="id"
                        label="ID"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="收货人姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="省市区"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="tel"
                        label="电话"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zipcode"
                        label="邮编"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="nickname"
                        label="用户名"
                        width="120">
                </el-table-column>
            </el-table>
        </div>
</template>
<script>
    export default{
        name: 'add',
        data(){
            return {
                tableData:[]
            }
        },
        created(){
            this.$http.get("/api/admin/address").then(res=>{
                console.log(res);
                this.tableData=res.body;
            })
        }
    }
</script>
<style scoped lang='scss'>

</style> 