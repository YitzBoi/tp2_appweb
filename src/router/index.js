import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mission from '../views/Mission.vue'
import Score from '../views/Score.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mission',
    name: 'Mission',
    component: Mission
  },
  {
    path: '/score',
    name: 'Score',
    component: Score
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
