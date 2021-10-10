<template>
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <div class="sidebar-box">
        <Sidebar
          :title="lessons.name"
          :path="lessons.path"
          :icon="lessons.icon"
          :data="lessons.data"
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
    name: "_lesson",
    methods: {
      detectPageId: function () {
        this.page_id = this.$nuxt._route.params.lesson;
      }
    },

    data() {
      return {
        page_id: '',
        lessons: {
          name: "Digər dərslər",
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
