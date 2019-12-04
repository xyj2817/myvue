<template>
  <div>
    <header>
      <img src='../assets/images/logo.png' class='logo'>
    </header>
    <nav>
      <router-link to='/index/home' active-class='active'>推荐</router-link> 
      <router-link to='/index/news' active-class='active'>热歌榜</router-link> 
      <router-link to='/index/food/123' active-class='active'>搜索</router-link> 
    </nav>
    <router-view/>
    
  </div>
</template>

<script>
// axios
export default {
  
}
</script> 

<style scoped>
header{
  width:100%; height:8.4rem; background:#d43c33;box-sizing:border-box; padding:0 2%;
}
.logo{ width:14.2rem; height:2.5rem; margin-top:3rem}
nav{ border-bottom:1px solid #ccc; display:flex;justify-content:space-around; height:6rem; line-height:6rem;}
nav a{ font-size:2rem; padding:0 1rem;line-height:6rem;}
.active{ color:#f00; border-bottom:1px solid red;}

</style>
