/* eslint-disable */

// import Statics
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views
import FPview from './components/FP-LandingWrapper'
import AdminView from './components/Admin-Dash'
import SafariView from './components/FP-SafariWrapper'


// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: FPview,
  },
  {
    path: '/safari',
    component: SafariView,
  },
  {
    // admin
    path: '/admin',
    component: AdminView
  },
  {
    // not found handler
    path: '*',
    component: NotFoundView
  },
]

export default routes
