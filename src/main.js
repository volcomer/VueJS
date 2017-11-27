import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'
import AppView from './App'

Vue.use(VueResource)

var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router: router,
  render: h => h(AppView)
})
