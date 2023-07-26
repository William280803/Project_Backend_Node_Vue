import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Login from '../views/login.vue'
import Event from '../views/Event.vue'
import Dashboard from '../components/CourseTaked.vue'
import Course from '../views/CourseList.vue'
import Profile from '../views/profile.vue'
import Register from '../views/Register'
import AddCourse from '../views/AddCourse.vue'
import CourseFull from '../views/CourseFull.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/course',
    name: 'course',
    component: Course
  },
  {
    path:"/Event",
    name: "Event",
    component: Event
  },
  {
    path:"/Dashboard",
    name:"Dashboard",
    component: Dashboard
  },
  {
    path:"/Profile",
    name:"Profile",
    component: Profile
  },
  {
    path:"/Register",
    name:"Register",
    component: Register
  },
  {
    path:"/AddCourse",
    name:"AddCourse",
    component: AddCourse
  },
  {
    path:"/CourseFull",
    name:"CourseFull",
    component: CourseFull

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
