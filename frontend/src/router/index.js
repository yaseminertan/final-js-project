import Vue from 'vue'
import VueRouter from 'vue-router'
import Issue from '../views/Issue.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/issue/:id',
    name: 'issue',
    component: Issue
  },
  
  {
    path: '/issues/all/json',
    name: 'issues',
    component: Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
