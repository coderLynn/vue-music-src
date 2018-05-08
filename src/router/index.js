import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: Recommend
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Recommend
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Recommend
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Recommend
    }
  ]
})
