import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('@/components/Index')
    },
    {
      path: '/project/:name',
      name: 'Project',
      component: () => import('@/components/Project')
    },
    {
      path: '/project/',
      name: 'Project',
      component: () => import('@/components/Projects')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/About')
    },
    {
      path: '/work/:name',
      redirect: '/project/:name'  // 重新導向舊作品路由
    },
    {
      path: '*',
      redirect: '*'   // 找不到路由時導向至首頁
    },
  ]
})
