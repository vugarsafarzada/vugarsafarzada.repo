<template>
  <div class="main">
    <Header class="Header" />
    <div class="main-body">
      <div class="sidebar-box">
        <Sidebar
          :title="lessons.name"
          :path="lessons.path"
          :icon="lessons.icon"
          :data="lessons.data"
          class=""
        />
      </div>
      <Contents :content_data="lessonsData" class="shadow" />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
const api_port = process.env.API_PORT;
const host = process.env.HOST;
export default {
  name: "lesson",
  methods: {
    detectPageId: function () {
      this.page_id = this.$nuxt._route.params.lesson;
    },
  },

  data() {
    return {
      page_id: "",
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
          "CSS & SCSS",
        ],
      },
      lessonsData: { description: "none" },
    };
  },

  mounted() {
    this.detectPageId();
  },
  async fetch() {
    let Data = await fetch(
      `http://${host}:${api_port}/api/content/lessons/${this.$nuxt._route.params.lesson}`
    ).then((res) => res.json());
    this.lessonsData = Data.data[0];
  },
};
</script>

<style>
</style>
