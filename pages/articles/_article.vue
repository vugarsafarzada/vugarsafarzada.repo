<template>
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <div class="sidebar-box">
        <Sidebar
          :title="articles.name"
          :path="articles.path"
          :icon="articles.icon"
          :data="articles.data"
          class="color1"/>
      </div>
      <Contents
        :content_title="page_id"
        class="bg4 color1 shadow"/>
    </div>
    <Footer class="bg1 color3 footer"/>
  </div>
</template>

<script>
  export default {
    name: "_article",
    methods: {
      detectPageId: function () {
        this.page_id = this.$nuxt._route.params.article;
      }
    },

    data() {
      return {
        page_id: '',
        articles: {
          name: "Digər məqalələr",
          path: "articles",
          icon: "bi bi-file-earmark-text-fill",
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

    mounted() {
      this.detectPageId()
    },
  }
</script>

<style>
</style>
