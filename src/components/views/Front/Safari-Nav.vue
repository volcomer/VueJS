<template>
  <aside class="main-sidebar">

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './Safari-Menu'

export default {
  name: 'Sidebar',
  components: {
    SidebarMenu
    },
    data () {
      return {
      }
    },
    methods: {

    }
}
</script>
<style>
  .user-panel .image img {
    border-radius: 50%;
  }
</style>
