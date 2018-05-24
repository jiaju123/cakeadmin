<template>
<div>
    <router-link to="/cateadd" class="cateaddbox">新增+</router-link>

    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="ID" prop="id" width="60"></el-table-column>
        <el-table-column label="名称" width="180">
            <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleClick(scope.row)">
                        编辑
                </el-button>
                <el-button size="mini" type="text" @click="open2">
                    删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
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
            open2() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                })
            },
            handleClick(row) {
                let id=row.id;
                this.$router.push("/cateedit/"+id);
            }
        }
    }
</script>
<style scoped lang='scss'>
    .cateaddbox{
        display: block;
        width:80px;
        height:30px;
        background: #B3C0D1;
        text-align: center;
        line-height: 30px;
    }
</style> 