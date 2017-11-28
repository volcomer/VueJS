/* eslint-disable */

// import Statics
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views
import FPview from './components/views/FrontPage/FPContentWrapper'


// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: FPview,
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
