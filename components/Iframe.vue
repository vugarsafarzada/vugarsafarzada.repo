<template>
  <div v-if="src">
    <iframe
      width="700"
      height="400"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
  export default {
    name: "Iframe",
    props: ["src"]
  }
</script>

<style scoped>

</style>
