<template>
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <Contents
        :path="path"
        :icons="icons"
        class="bg4 color1 shadow"/>
    </div>
    <Footer class="bg1 color3 footer"/>
  </div>
</template>

<script>
  export default {
    name: "Article",
    async fetch() {
      let icons = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/icons`).then(res => res.json())
      this.icons = icons[0];
    },
    data() {
      return {
        icons:{},
        path: "articles",
        articles: {
        },
      }
    },
  }
</script>

<style>
  .content{
    width: 1200px;
    padding: 30px;
  }
  .main-body{
    border-top: 1.5px dashed #4d648d;
  }
</style>
