<template>
  <div>
    <f-p-nav></f-p-nav>
    <f-p-header></f-p-header>
    <f-p-content></f-p-content>
    <f-p-footer></f-p-footer>
  </div>
</template>

<script>
import FPNav from './views/Front/FP-TopNav'
import FPFooter from './views/Front/FP-Footer'
import FPHeader from './views/Front/FP-LeadHeader'
import FPContent from './views/Front/FP-Content'


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
