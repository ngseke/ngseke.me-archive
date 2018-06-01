import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Work from '@/components/Work'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  linkActiveClass: `active`,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/work/:name',
      name: 'Work',
      component: Work
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
