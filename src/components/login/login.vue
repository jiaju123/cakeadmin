<template>
  <div id="login">

    <div class="top">欢迎登陆</div>
    <form class="form-login" action="" id="form" method="post" >
      <input type="text" class="text" name="zhanghao" id="user" placeholder="输入账号">
      <input type="password" name="pass" id="pass" class="text" placeholder="输入密码">
      <div class="yanzheng">
        <input type="password" name="code" id="passs"  placeholder="验证码">
        <img src="" alt="" class="img" id="code" onclick="">
      </div>
      <input type="submit" class="submit">
      <div class="login-social-link">
      </div>
    </form>
    </div>


</template>

<script>
    export default{
        name: 'login',
        data(){
            return {


            }

        },
      created(){

      }
    }
</script>
<style scoped lang='scss'>
  body{
    width: 100%;
    height: auto;
  }
  #login{
    width: 100%;
    height: auto;
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
      margin: 0 auto;
      >input{
        width: 280px;
        height: 49px;
        margin: 10px;
        border: none;
        box-sizing: border-box;
        outline-style: none;
        border-radius: 5px;
        background: #262729;
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
          border: none;
          padding-left: 20px;
          background: #262729;
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
