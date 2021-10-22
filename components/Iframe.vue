<template>
  <iframe
    :width="width"
    :height="height"
    :src="src"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script>
  export default {
    name: "Iframe"
  }
</script>

<style scoped>

</style>
