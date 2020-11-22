import Vue from 'vue'
import VueRouter from 'vue-router'
import Issues from '../views/Issues.vue'
import Home from '../views/Home.vue'
import Teams from '../views/Teams.vue'
import People from '../views/People.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/people',
    name: 'people',
    component: People
  },
  
  {
    path: '/issues',
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
