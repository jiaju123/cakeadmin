<template>
        <div>
            <el-table
                    :data="tableData2"
                    style="width: 100%"
                    row-class-name="">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="50">
                </el-table-column>
                <el-table-column
                        prop="zhanghao"
                        label="用户"
                        width="220">
                </el-table-column>
                <el-table-column
                        prop="nickname"
                        label="用户昵称"
                        width="220">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="订单名称"
                        width="220">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="订单价格"
                        width="220">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="订单状态"
                        width="100">
                </el-table-column>
            </el-table>
        </div>
</template>

<script>
    export default{
        name: 'orders',
        methods: {

        },
        data(){
            return {
                tableData2: []
            }
        },
        created(){
                this.$http.get('api/admin/orders').then(res=>{
                    console.log(res);
                    this.tableData2=res.body.sort(function (a,b) {
                       return a.id-b.id>0;
                    }) ;
                })
        }
    }
</script>
<style scoped lang='scss'>

</style> 