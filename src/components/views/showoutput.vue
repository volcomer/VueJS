<template>
<div id="output">
    <div v-for="title in output" :key="title.id">
        <h3><strong> Title:</strong> {{title.title}}</h3>
        <p> <strong>Content:</strong> {{title.body}} </p>
    </div>
</div>
</template>
<script>

export default {
  data () {
    return {
      output: []
    }
  },
  methods: {
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
      this.output = data.body
    })
  }
}

</script>

<style>

</style>
// eslint-disable-line
