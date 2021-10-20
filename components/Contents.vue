<template>
  <div class="content bg4 color1 shadow">
    <div v-for="c in data.content_data.components" :key="c">
      <components class="pb-3" :icons="icons" :data="data.content_data" :is="c"/>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch() {
      let content = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/content/${this.path}`)
        .then(res => res.json())
      this.data = content.data[0];
    },
    name: "Content",
    props: ["icons", "path"],
    data() {
      return {
        data: {},
      }
    },

  }
</script>

<style>
  .content {
    margin: 20px;
    border-radius: 20px;
  }

  .slick-prev:before, .slick-next:before {
    color: #283655;
  }

</style>
