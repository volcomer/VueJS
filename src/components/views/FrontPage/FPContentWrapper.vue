<template>
  <div>
    <FPHeader></FPHeader>
    <FPContent></FPContent>
  </div>
</template>

<script>
import FPHeader from './FP-Header'
import FPContent from './FP-Content'

  export default {
    name: 'App',
    components: {
      'FPHeader':FPHeader,
      'FPContent':FPContent
     },
    data () {
      return {
      }
    },
  }
</script>
