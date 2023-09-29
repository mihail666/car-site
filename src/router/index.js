import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Vechicles',
    name: 'Vechicles',
    meta: { layout: 'main' },
    component: () => import('../pages/Vechicles-page.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
    meta: { layout: 'main' },
    component: () => import('../pages/Setting-page.vue')
  },
  {
    path: '/',
    name: 'Profile',
    meta: { layout: 'main' },
    component: () => import('../pages/Profile-page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
