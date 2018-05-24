<template>
    <div>
        <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px;"></div>
        <el-form ref="formLabelAlign" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="英文名字">
                <el-input v-model="formLabelAlign.ename"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="check">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        name: 'cateedit',
        data(){
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    ename: ''
                },
                arr:{}
            }
        },
        created(){
          let id=this.$route.params.id;
          this.$http.get('/api/admin/category/edit?id='+id).then(res=>{
              console.log(res);
          })
        },
        methods: {
            check(){
                let obj = this.formLabelAlign;
                this.$http.post('/api/admin/category/edit',obj,{headers:{"content-type":'application/json'}}).then(res=>{
                    console.log(res);
                    if(res.body=='ok'){
                        this.$message.success('添加成功');
                    }else{
                        this.$message.error('添加失败');
                    }
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
</style> 