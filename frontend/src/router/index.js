import Vue from 'vue'
import VueRouter from 'vue-router'
import Issue from '../views/Issue.vue'
import Issues from '../views/Issues.vue'
//import Home from '../views/Home.vue'
import Teams from '../views/Teams.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  {
    path: '/issue/:id',
    name: 'issue',
    component: Issue
  },
  
  {
    path: '/',
    name: 'issues',
    component: Issues
  },
  {
    path: '/teams',
    name: 'teams',
    component: Teams
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
