<template>
  <div>
    <FPNav></FPNav>
    <FPHeader></FPHeader>
    <FPContent></FPContent>
    <FPFooter></FPFooter>
  </div>
</template>

<script>
import FPNav from './views/FrontPage/WrapperNav'
import FPFooter from './views/FrontPage/WrapperFooter'
import FPHeader from './views/FrontPage/FP-Header'
import FPContent from './views/FrontPage/FP-Content'


  export default {
    name: 'App',
    components: {
      'FPHeader':FPHeader,
      'FPContent':FPContent,
      'FPNav':FPNav,
      'FPFooter':FPFooter
     },
    data () {
      return {
      }
    },
  }
</script>
<style>

</style>
