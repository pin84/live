import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import A from '../components/dujia/a.vue'
import B from '../components/dujia/b.vue'

export default new Router({
  // mode: 'history',
  // linkActiveClass:'acitve',
  routes: [
    {
      path:'/',
      redirect: '/a'
    },
    {
      path: '/a',
      component: A
    },
    {
      path: '/b',
      component: B
    }
   
  ]
})