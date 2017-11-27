<template>
<div>
  <app-header></app-header>
  <app-output></app-output>
  <app-footer></app-footer>
  <div></div>
  

</div>
</template>

<script>
import header from './components/header.vue';
import footer from './components/footer.vue';
import showoutput from './components/showoutput.vue';


export default {
  components:{
    'app-header':header,
    'app-footer':footer,
    'app-output':showoutput
  },

  data () {
    return {   
      output:""
  }   
  }
}
</script>

<style>

</style>
