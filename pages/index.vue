<template>
  <div class="main">
    <Header :data="introduce" class="bg2 color1 Header"/>
    <div class="main-body">
      <Contents
        :data="introduce"
        :icons="icons"
        :carousel="introduce"
        class=""/>
      <div class="sidebar-box">
        <Sidebar
          :title="lessons.name"
          :path="lessons.path"
          :data="lessons.data"
          :icon="icons.lessons"
          class="color1"/>
        <Sidebar
          :title="articles.name"
          :path="articles.path"
          :icon="icons.articles"
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
      let icons = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/icons`).then(res => res.json())
      this.icons = icons[0];
    },

    data() {
      return {
        introduce:{},
        icons: {},
        articles: {
          name: "Məqalələr",
          path: "articles",
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
          data: [
            "Java & Java EE",
            "Python OOP",
            "ReactJS & NextJS",
            "Vue Vuex and NuxtJS",
            "MongoDB & Mongoose",
            "Java & Java EE",
            "Python OOP",
            "ReactJS & NextJS",
            "Vue Vuex and NuxtJS",
            "MongoDB & Mongoose",
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
  .content{
    width: 1000px !important;
    padding: 50px;
  }

</style>
