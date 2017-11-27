/* eslint-disable */

// import Statics
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views
import ShowOutput from './components/views/showoutput.vue'


// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: ShowOutput,
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
