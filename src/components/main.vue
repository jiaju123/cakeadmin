<template>
    <div class="main">
        <div class="head">
            <el-container>
                <el-header>
                    <span style="color: #fff">欢迎登陆后台</span>
                    <el-dropdown style="float: right">
                        <span style="margin-right: 15px">{{zhanghao}}</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-button type="text" @click="exit" class="name">退出登录</el-button>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
            </el-container>
        </div>
        <el-container style="height: 550px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-edit"></i>
                            <router-link to="/suser">修改密码</router-link>
                        </template>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-document"></i>
                            <router-link to="/category">栏目管理</router-link>
                        </template>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-goods"></i>
                            <router-link to="/goods">产品管理</router-link>
                        </template>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-menu"></i>
                            <router-link to="/car">购物车管理</router-link>
                        </template>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-edit-outline"></i>
                            <router-link to="/orders">订单管理</router-link>
                        </template>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-location"></i>
                            <router-link to="/address">地址管理</router-link>
                        </template>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-view"></i>
                            <router-link to="/user">用户管理</router-link>
                        </template>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default{
        name: 'my-main',
        data(){
            return {
                zhanghao:"",
            }
        },
        methods:{
            exit(){
                this.$confirm('是否退出本系统', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                   this.$http.get("/api/admin/main/exit").then(res=>{
                       if(res.body=='edit'){
                           this.$router.push('/')
                       }
                   });
                    this.$message({
                       type:'success',
                        message:'退出登录',
                        showClose:true,
                    })
                });

            },
        },
        beforeRouteEnter(to, from, next){
            next(vm=>{
                vm.$http.get('/api/admin/main/us').then(res => {
                    if(res.body=='no'){
                        vm.$message.error('请先登录')
                        vm.$router.push('/')
                    }else{
                        vm.zhanghao=res.body
                    }
                })
            })
        }
    }
</script>
<style scoped lang='scss'>
    .main{
        width: 100%;
        height: 100%;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }
    .el-button{
        display: block;
        width: auto;
        height: 36px;
        padding:0 20px;
    }
    .el-aside {
        color: #333;
    }

    .el-submenu__title a{
        color: #909399;
        display: inline-block;
        height: 100%;
        width: auto;
        text-decoration: none;
    }
</style>