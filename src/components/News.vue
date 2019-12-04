<template>
    <div class='box'>
        News<br>
        <router-link to='/play'>点击播放</router-link>
        <h1>天气预报<br>
        <input type='text' v-model='city'> <button @click='seach()'>搜索</button></h1>
        <div v-if='flag'>
            当前所在的城市：{{city}} -- {{weatch.date}}<br>
            <ul>
                <li v-for='item in weatch.results[0].weather_data'>
                {{item.date}}<br>
                <img :src='item.dayPictureUrl'><br>
                <img :src='item.nightPictureUrl'><br>
                {{item.temperature}}<br>
                {{item.weather}}<br>
                {{item.wind}}
                </li>
            </ul>
            <ul>
                <li v-for='item in weatch.results[0].index'>{{item.tipt}}:{{item.zs}}<br>{{item.title}}:{{item.des}}</li>
            </ul>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:false,
            city:'',
            weatch:{}

        }
    },
    methods: {
        seach(){
            this.$http({
                url:'/api/api/baiduWeather.php',
                params:{
                    city:this.city
                }
            }).then((res)=>{
                console.log(res.data)
                this.weatch = res.data
                this.flag=true
            })
        }
    },
}
</script>
<style scoped>
    h1{ text-align:center; font-size:2rem}
    input{ width:20rem; height:3rem; border:1px solid #000;}
    button{ width:5rem;height:3rem;}
    div{ font-size:30px}
    ul{ display:flex}
    li{ padding:10px}
</style>