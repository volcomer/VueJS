<template>
  <div id="app">
    <wrapper-top></wrapper-top>
      <router-view></router-view>
      <wrapper-bottom></wrapper-bottom>
  </div>
</template>

<script>
import WrapperTop from './views/WrapperTop.vue'
import WrapperBottom from './views/WrapperBottom.vue'
  export default {
    name: 'App',
    data () {
      return {
      }
    },
    components:{
      'wrapper-top': WrapperTop,
      'wrapper-bottom': WrapperBottom
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
