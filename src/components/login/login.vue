<template>
</template>
<script>
    export default{
        name: 'login',
        data(){
            return {
              arr:[]
            }
        },
        mounted(){
            this.$http.get('/api/text').then(res=>{
                console.log(res);
            })
        }
    }
</script>
<style scoped lang='scss'>

</style>
