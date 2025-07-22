import FormConsulta from '@/views/FormConsulta.vue'
import Landing from '@/views/Landing.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: FormConsulta,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return false //
      }
    }
    return { top: 0 }
  },
})
export default router
