<template>
  <el-form ref="form" :model="form" label-width="80px">

    <el-form-item label="产品名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="产品口味1" >
      <el-input v-model="form.taste1"></el-input>

      <el-upload
        class="upload-demo"
        prop="desc1"
        action="/api/admin/goods/upload"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
        :file-list="form.desc1"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

    </el-form-item>


    <el-form-item label="产品口味2">
      <el-input v-model="form.taste2"></el-input>
      <!--图片-->

      <el-upload
        class="upload-demo"
        prop="desc2"
        action="/api/admin/goods/upload"
        :on-success="handleSuccess2"
        :on-remove="handleRemove2"
        :file-list="form.desc2"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>


    </el-form-item>


    <el-form-item label="产品口味3">
      <el-input v-model="form.taste3"></el-input>

      <el-upload
        class="upload-demo"
        prop="desc3"
        action="/api/admin/goods/upload"
        :on-success="handleSuccess3"
        :on-remove="handleRemove3"
        :file-list="form.desc3"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

    </el-form-item>



    <el-form-item label="产品口味4">
      <el-input v-model="form.taste4"></el-input>

      <el-upload
        class="upload-demo"
        prop="desc4"
        action="/api/admin/goods/upload"
        :on-success="handleSuccess4"
        :on-remove="handleRemove4"
        :file-list="form.desc4"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

    </el-form-item>

    <el-form-item label="产品详情">
      <el-upload
        class="upload-demo"
        prop="xiangqing"
        action="/api/admin/goods/upload"
        :on-success="handleSuccess5"
        :on-remove="handleRemove5"
        :file-list="form.xiangqing"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>



    </el-form-item>




    <el-form-item label="原价">
      <el-input v-model="form.pricen"></el-input>
    </el-form-item>

    <el-form-item label="折扣价">
      <el-input v-model="form.priceo"></el-input>
    </el-form-item>
    <el-form-item label="标题1">
      <el-input v-model="form.title1"></el-input>
    </el-form-item>
    <el-form-item label="标题2">
      <el-input v-model="form.title2"></el-input>
    </el-form-item>
    <el-form-item label="标题3">
      <el-input v-model="form.title3"></el-input>
    </el-form-item>
    <el-form-item label="标题4">
      <el-input v-model="form.title4"></el-input>
    </el-form-item>


    <el-form-item label="cid">
      <el-input v-model="form.cid"></el-input>
    </el-form-item>


    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'goodedit',

    data() {
      return {
        labelPosition: 'right',
        form: {
          name: '',
          desc1: [],
          desc2: [],
          desc3: [],
          desc4: [],
          pricen:'',
          priceo:'',
          taste1: '',
          taste2: '',
          taste3: '',
          taste4: '',
          title1:'',
          title2:'',
          title3:'',
          title4:'',
          cid: '',
          xiangqing: []
        },
      };

    },


    created(){
      let id  = this.$route.query.id;
      this.$http.get(`/api/admin/goods/edit?id=${id}` ).then(res=>{
        this.form.id = res.body[0].id;
        this.form.name = res.body[0].name;
        this.form.pricen = res.body[0].pricen;
        this.form.priceo = res.body[0].priceo;
        this.form.taste1 = res.body[0].taste1;
        this.form.taste2 = res.body[0].taste2;
        this.form.taste3 = res.body[0].taste3;
        this.form.taste4 = res.body[0].taste4;

        this.form.title1 = res.body[0].title1;
        this.form.title2 = res.body[0].title2;
        this.form.title3 = res.body[0].title3;
        this.form.title4 = res.body[0].title4;

        this.form.cid = res.body[0].cid;
        this.form.desc1 = JSON.parse( res.body[0].desc1 );
        this.form.desc2 = JSON.parse( res.body[0].desc2 );
        this.form.desc3 = JSON.parse( res.body[0].desc3 );
        this.form.desc4 = JSON.parse( res.body[0].desc4 );
        this.form.xiangqing = JSON.parse( res.body[0].xiangqing );

      });
    },

    methods: {

      handleRemove(file, desc1) {
        this.form.desc1=desc1;
      },
      handleSuccess(response,file,desc1) {
        this.form.desc1=desc1;
      },
      handleRemove2(file, desc2) {
        this.form.desc1=desc2;
      },
      handleSuccess2(response,file,desc2) {
        this.form.desc2=desc2;
      },
      handleRemove3(file, desc3) {
        this.form.desc3=desc3;
      },
      handleSuccess3(response,file,desc3) {
        this.form.desc3=desc3;
      },
      handleRemove4(file, desc4) {
        this.form.desc4=desc4;
      },
      handleSuccess4(response,file,desc4) {
        this.form.desc4=desc4;
      },
      handleRemove5(file, desc5) {
        this.form.xiangqing=desc5;
      },
      handleSuccess5(response,file,desc5) {
        this.form.xiangqing=desc5;
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let obj = Object.assign({},this.form);
            obj.desc1=JSON.stringify(obj.desc1);
            obj.desc2=JSON.stringify(obj.desc2);
            obj.desc3=JSON.stringify(obj.desc3);
            obj.desc4=JSON.stringify(obj.desc4);
            obj.xiangqing=JSON.stringify(obj.xiangqing);
            this.$http.post('/api/admin/goods/up',obj,{
              headers:{
                "content-type":"application/json"
              }
            }).then(response => {
              if (response.body){
                this.$message('修改成功！');
                setTimeout(()=>{
                  this.$router.push("/goods");
                },1000);
              }else{
                this.$message('修改失败！');
              }
            });
          } else {
            this.$message('操作失败！');
            return false;
          }
        });
      },
    }
  }
</script>
<style scoped lang='scss'>
</style>
