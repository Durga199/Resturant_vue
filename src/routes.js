import Home from './components/Home.vue'
import signup from './components/signup.vue'
import login from './components/login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import dashboard from './components/dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/Home'
    },
    {
        name: 'signup',
        component: signup,
        path: '/signup'
    },
    {
        name: 'login',
        component: login,
        path: '/login'
    },
    {
        name: 'Add',
        component: Add,
        path: '/Add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/Update/:id'
    },
    {
        name: 'dashboard',
        component: dashboard,
        path: '/'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router