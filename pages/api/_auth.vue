<template>
  <div><h2>{{page_id}}</h2></div>
</template>

<script>
  export default {
    name: "_auth",
    data() {
      return {
        page_id: this.$nuxt._route.params.article,
      }
    }
  }
</script>

<style scoped>

</style>
