<template>
  <div id="login">
    <div class="top">欢迎登陆</div>
      <div class="form-login">
      <!--<form class="form-login" id="form" method="post" >-->
        <input type="text" class="text" name="zhanghao" id="user" placeholder="输入账号" v-model="input10">
        <input type="password" name="pass" id="pass" class="text" placeholder="输入密码" v-model="input11">
        <div class="yanzheng">
          <input type="password" name="code" id="passs"  placeholder="验证码" v-model="input12">
          <img src="/api/admin/login/code" alt=""
               onclick="this.src='/api/admin/login/code?'+Math.random()">
        </div>
        <input type="submit" class="submit" @click="check">
        <div class="login-social-link">

        </div>
      </div>
      <!--</form>/-->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                input10: '',
                input11: '',
                input12: ''
            }

        },
        methods: {
            check(){
                let obj = {};
                obj.zhanghao = this.input10;
                obj.pass = this.input11;
                obj.code = this.input12;
                this.$http.post('/api/admin/login/check', obj, {
                    headers: {
                        "content-type": 'application/json'
                    }
                }).then(res => {
//                console.log(res);
                    if (res.body!= 'ok') {
                        alert(res.body)
                    } else {
                        this.$router.push('/main')
                    }

                })
            }
        }
    }
</script>
<style scoped lang='scss'>
  body{
    width: 100%;
    height: 100%;
  }
  #login{
    width: 100%;
    height: 100%;
    background: url("../../assets/img/bg.jpg");

    .top{
      width: 100%;
      height: 34px;
      text-align: center;
      line-height: 34px;
      font-size: 34px;
      margin: auto;
      color: #000;
      padding-top: 100px;
      padding-bottom: 50px;
    }
    .form-login{
      width: 300px;
      height: 335px;
      padding: 0 10px;
      margin: 0 auto 100px;
      >input{
        width: 280px;
        height: 49px;
        margin: 10px;
        box-sizing: border-box;
        outline-style: none;
        border-radius: 5px;
        background: #f7f7f7;
        border:1px solid #7E838E;
      }
      input.text{
        padding-left: 20px;
      }
      .yanzheng{
        width: 280px;
        height: 49px;
        margin: 10px;
        display: flex;
        input{
          width: 135px;
          height: 100%;
          outline-style: none;
          box-sizing: border-box;
          margin-right: 5px;
          border-radius: 5px;
          border:1px solid #7E838E;
          padding-left: 20px;
          background: #f7f7f7;
        }
        img{
          width: 135px;
          padding-left: 5px;
          height: 100%;

        }
      }
    }
    input.submit{
      background: #0DDF93;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }
</style>
