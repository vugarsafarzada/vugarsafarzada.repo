<template>
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <Main :data="introduce" class="bg4 color1 shadow"/>
      <div class="sidebar-box">
        <Sidebar
          :title="lessons.name"
          :path="lessons.path"
          :data="lessons.data"
          :icon="lessons.icon"
          class="color1"/>
        <Sidebar
          :title="articles.name"
          :path="articles.path"
          :icon="articles.icon"
          :data="articles.data"
          class="color1"/>
      </div>

    </div>
    <Footer class="bg1 color3 footer"/>
  </div>
</template>

<script>
  export default {
    async fetch() {
      let Data = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/introduce`).then(res => res.json())
      this.introduce = Data.data[0];
    },
    data() {
      return {
        introduce:{},
        articles: {
          name: "Məqalələr",
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
        lessons: {
          name: "Dərslər",
          path: "lessons",
          icon: "bi bi-journal-code",
          data: [
            "Java & Java EE",
            "Python OOP",
            "ReactJS & NextJS",
            "Vue Vuex and NuxtJS",
            "MongoDB & Mongoose",
            "CSS & SCSS"
          ],
        }
      };
    },
  };
</script>

<style>

</style>
