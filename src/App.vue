<template>
  <div>
  <wrapper-Nav></wrapper-Nav>
  <router-view></router-view>
  <wrapper-Footer></wrapper-Footer>
  </div>
</template>

<script>
import WrapperNav from './components/views/WrapperNav.vue'
import WrapperFooter from './components/views/WrapperFooter.vue'




  export default {
    name: 'App',
    components: {
      'wrapper-Nav':WrapperNav,
      'wrapper-Footer':WrapperFooter,



     },
    data () {
      return {
      }
    },
    methods: {
      logout () {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)

        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }

        this.$router.push('/login')
      }
    }
  }
</script>
