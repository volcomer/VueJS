<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {

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

<style>

</style>

