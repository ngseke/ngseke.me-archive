import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import i18n from '@/i18n'

Vue.use(VueRouter)

const children = [
  {
    path: '',
    component: () => import('@/views/Index'),
  },
  {
    path: 'project/:name',
    component: () => import('@/views/Project'),
  },
  {
    path: 'project',
    component: () => import('@/views/Projects'),
  },
  {
    path: 'about',
    component: () => import('@/views/About'),
  },
  { path: 'projects', redirect: 'project' },
  { path: 'work/:name', redirect: 'project/:name' }, // 重新導向舊作品路由
]

const routes = [
  {
    path: '/',
    component: {
      render: h => h('router-view'),
    },
    children,
  },
  {
    path: '/:locale',
    component: {
      render: h => h('router-view'),
    },
    children,
  },
  { path: '*', redirect: '' }, // 找不到路由時導向至首頁
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => savedPosition ?? { x: 0, y: 0 },
  base: process.env.BASE_URL,
  routes,

})

router.beforeEach((to, from, next) => {
  NProgress.configure({ showSpinner: false }).start()
  const { locale } = to.params

  if (['en'].includes(locale)) {
    i18n.locale = locale
    return next()
  } else if (!locale) {
    i18n.locale = 'zh-tw'
    return next()
  } else {
    i18n.locale = 'zh-tw'
    return next('')
  }
})

router.afterEach(() => setTimeout(NProgress.done, 300))

export default router
