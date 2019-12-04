<template>
    <div class='box'>
        <!--<input type='text' v-model='name'>-->
        <div> 账号：<input type='text' v-model='info.user'></div>
      <div>  密码：<input type='password' v-model='info.pass'></div>
        <div><button @click='go()'>登录</button></div>
    </div>
</template>
<script>
import qs from 'qs'
export default {
    data(){
        return {
            name:'',
           info:{
               user:'',
               pass:''
           }
        }
    },
    methods: {
       
        go(){
            // this.$router.push({
            //     path:'/index/home',
            //     query:{
            //         name:this.name
            //     }
            // })
        //1.  谷歌支持  其他不支持  兼容性不好
        // var params = new URLSearchParams()
        //     params.append('user',this.info.user)
        //     params.append('pass',this.info.pass)
        this.$http({
            url:'/api/api/form2.php',
            method:'post',
            // data:params
            data:qs.stringify(this.info)
        }).then(res=>{
            console.log(res)
            if(res.data=='登陆成功'){
                this.$router.push('/index/home')
            }
        })
    },
   
}
}
</script>
<style scoped>
    .box>div{ text-align:center; font-size:30px; padding:10px 0}
    input{ width:200px; height:40px;}
    button{ width:70px; height:40px;}
</style>