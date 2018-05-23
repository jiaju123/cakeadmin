<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column label="ID" prop="id" width="60">
        </el-table-column>
        <el-table-column
                label="名称"
                width="180">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini">
                    <router-link to="/api/admin/cateedit">
                        编辑
                    </router-link>
                </el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">
                    <router-link to="/api/admin/catedel">删除</router-link>
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    export default{
        name: 'category',
        data(){
            return {
                tableData: []
            }
        },
        created(){
            this.$http.get('/api/admin/category').then(res=>{
                this.tableData = res.body;
            })
        },
        methods: {
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
<style scoped lang='scss'>
</style> 