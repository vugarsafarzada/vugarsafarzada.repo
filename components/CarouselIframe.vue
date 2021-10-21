<template>
  <div v-show="data.embed">
    <iframe
      width="871"
      height="480"
      :src="data.embed"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
</template>

<script>
  export default {
    name: "CarouselIframe",
    props:["data"],
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>
