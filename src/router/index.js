import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }, */
    {
      path: '/about',
      name: 'about',
      component: () => import('../modules/about/components/About.vue'),
    }, 
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../modules/contact/components/Contact.vue'),
    }, 
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../modules/inicio/components/Inicio.vue'),
    }, 
  ],
})

export default router
