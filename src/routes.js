import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views
import Output from './components/views/showoutput'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: Output

  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
