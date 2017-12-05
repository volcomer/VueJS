import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'
import AppView from './App'
import BootstrapVue from 'bootstrap-vue'

// Touch Carousel - Non configurable
// import VueCarousel from 'vue-carousel'
// Vue.use(VueCarousel)

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

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
