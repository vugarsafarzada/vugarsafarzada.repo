<template>
  <form v-if="port && host" :action="`http://${host}:${port}/upload${to}`" method="post"
        enctype="multipart/form-data">
    <input type="file" name="avatar" accept="image/png, image/gif, image/jpeg, image/jpg"/>
    <button type="submit">save</button>
  </form>
</template>

<script>
  export default {
    name: "MediaUploader",
    props: ['to'],
    data() {
      return {
        host: process.env.HOST,
        port: process.env.API_PORT
      }
    }
  }
</script>

<style scoped>

</style>
