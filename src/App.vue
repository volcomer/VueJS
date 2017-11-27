<template>
  <div>
    <wrapper-top></wrapper-top>
    <router-view></router-view>

  </div>
</template>

<script>
import WrapperTop from './components/views/WrapperTop.vue'
import WrapperBottom from './components/views/WrapperBottom.vue'
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
