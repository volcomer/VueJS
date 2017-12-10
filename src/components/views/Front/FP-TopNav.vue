<template>
       <nav :class="{'navbar':true, 'navbar-default':true, 'navbar-fixed-top':true, 'top-nav-collapse':collapsed }">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"href="/"><img src="/src/assets/images/front/Kenor_Logo_2018_transp_white_200_50.png" class="d-inline-block align-left" alt="" /></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-right" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">

                        <li class="active"><a href="#home"> Home</a></li>
                        <li><a href="#about"> About</a></li>
                        <li><a href="#project"> Portfolios</a></li>
                        <li><a href="#team"> Team</a></li>
                        <li><a href="/safari"> Dream</a></li>
                        <li><a href="#contact"> Contact</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
</template>

<script>

export default {
    data () {
      return {
        collapsed: false
      }
    },
   methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 0;
    if (window.scrollY > 200){
      this.collapsed = true
    }
  }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}


</script>

<style>
</style>
