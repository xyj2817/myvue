<template>
    <div class='box'>
         <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='item in imglist'><img :src='item.imageUrl'></div>

    </div>
    <div class="swiper-pagination"></div>
  </div>

  <p v-for='item in msg'>{{item.title}}</p>
    </div>
</template>
<script>
import '../../node_modules/swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
    data(){
        return {
          msg:[],
            imglist:[
            //     {
            //     url:'http://p1.music.126.net/VXu9gKsTBqudPjGd2WwT8Q==/109951164486800028.jpg?imageView&quality=89'
            // },
            // {
            //     url:'http://p1.music.126.net/Y_RuhbHABjvAMvDfm2YjaQ==/109951164487121836.jpg?imageView&quality=89'
            // },
            // {
            //     url:'http://p1.music.126.net/GTMtR4x0PD4JhWpUVl7CZQ==/109951164486809664.jpg?imageView&quality=89'
            // },
            // {
            //     url:'http://p1.music.126.net/o2zdvNKgH2g6wTeR9oXuaQ==/109951164486809767.jpg?imageView&quality=89'
            // }
            ]
        }
    },
    mounted() {
      this.$http({
        url:'http://localhost:3000/banner',
      }).then(res=>{
        console.log(res.data.banners)
        this.imglist = res.data.banners
        this.$nextTick(()=>{
              var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true
        });
        })
      })
      /*setTimeout(()=>{
        var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true
    });
      },0)*/
         
    //  this.$http({
    //     url:'http://jsonplaceholder.typicode.com/posts',
    //     method:'get'
    //   }).then((res)=>{
    //     console.log(res)
    //     this.msg = res.data
    //   })
    },
}
</script>
<style scoped>
    html, body {
      position: relative;
      height: 100%;
    }
  
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
    }
    img{ width:100%;}
</style>
