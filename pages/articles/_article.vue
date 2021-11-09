<template>
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <div v-for="s in sidebar" class="sidebar-box">
        <Sidebar
          :icons="icons"
          :path="s.path"
          :title="s.title"
          :check="page_id"
          class="color1"
        />
      </div>
      <Contents
        :path="path"
        :page="page_id"
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
      let articles = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/articles/`)
        .then(res => res.json())
      this.articles.data = articles.data.reverse();
    },
    data() {
      return {
        page_id: this.$nuxt._route.params.article,
        icons:{},
        path: "article_view",
        sidebar: [
          {
            path: "articles",
            title: "Məqalələrim"
          },
        ]
      }
    },

  }
</script>

<style>
  .content{
    width: 1000px;
    padding: 50px;
  }
</style>
