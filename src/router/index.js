import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import Food from '@/components/Food'
import Index from '@/components/Index'
import Play from '@/components/Play'
import Login from '@/components/Login'

Vue.use(Router)
//alias  别名
export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          // beforeEnter(to,from,next){
          //   console.log(to)
          //   if(to.query.name=='offcn'){
          //     next()
          //   }else{
          //     alert('前往注册页面')
          //   }
          // },
          
        },
        {
          path: 'news',
          name: 'News',
          component: News,
          beforeEnter(to,from,next){
            // console.log('to',to)
            // console.log('from',from)
            // if(from.path=='/index/home'){
            //   next()
            // }
            next()
          }
        },
        {
          path: 'food/:id',
          name: 'Food',
          component: Food,
        },
      ]
    },
    {
      path: '/play',
      component: Play,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

