import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Project from '@/components/Project'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  linkActiveClass: `active`,
  mode: 'history',
  // 滾動行為 (https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html)
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: "*",
      redirect: "/"
    },
    // 重新導向舊作品路由
    {
      path: '/work/:name',
      redirect: '/project/:name'
    },
    {
      path: '/project/:name',
      name: 'Project',
      component: Project
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
