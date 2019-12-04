<template>
    <div  class='box' style='font-size:30px'>
        美食
        <span @click='go'>跳转</span>
        {{this.$route.params}}
        <hr>
        <!-- filter 管道  过滤   | --> 
        {{msg | upper}}
        {{msg | lower}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'asdQWE'
        }
    },
    methods: {
        go(){
            this.$router.push('/index/food/234')
        }
    },
    filters:{
        upper(val){
            return val.toUpperCase()
        },
        lower(val){
            // return val.toLowerCase()
            // return val.substr(0,1).toUpperCase()+val.substring(1).toLowerCase() 
            return  'hello'
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     console.log(to)
    //     console.log(from)
    //     next()
   
    // },
    //  在路由动态变化的时候触发的
    beforeRouterUpdate(to, from, next) {
        console.log(to)
        console.log(from)
        next()
    },
    // beforeRouteLeave (to, from, next) {
    //     console.log(to)
    //     console.log(from)
    //     next()
    // }
}
</script>
<style>
    
</style>