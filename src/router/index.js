import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/mine',
        name: 'mine',
        component: () =>
            import ('../views/mine/mine.vue')
    },
    {
        path: '/plan',
        name: 'plan',
        component: () =>
            import ('../views/plan/plan.vue')
    },
    {
        path: '/community',
        name: 'community',
        component: () =>
            import ('../views/community/community.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component: () =>
            import ('../views/shop/shop.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/home/home.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router