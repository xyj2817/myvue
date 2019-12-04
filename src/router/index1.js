import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Food from '@/components/Food'
Vue.use(Router)
//alias  别名
export default new Router({
  routes: [
    {
      path: '/',
      components:{
        default:Home,
        a:News,
        b:Food
      },
    }
  ]
})

