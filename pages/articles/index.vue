<template>
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <div class="sidebar-box">
        <Sidebar
          :title="articles.name"
          :path="articles.path"
          :icon="icons.articles"
          :data="articles.data"
          class="color1"/>
      </div>
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
          name: "Digər məqalələr",
          data: [
            "Niyə Vue daha yaxşıdı?",
            "React yoxsa Angular",
            "C dilləri öldümü?",
            "Texnologiya və Kompüter",
            "İlk proqramlaşdırma dilləri"
          ]
        },
      }
    },
  }
</script>

<style>
  .content{
    width: 1000px !important;
    padding: 50px;
  }
</style>
