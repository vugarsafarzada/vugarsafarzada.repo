<template xmlns="">
  <div class="main">
    <Header class="Header" />
    <div class="main-body">
      <About :data="introduce" :icons="icons" class="shadow" />
      <div class="sidebar-box">
        <Sidebar
          v-for="s in sidebar"
          :key="s.path"
          :icons="icons"
          :path="s.path"
          :title="s.title"
          class=""
        />
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  async fetch() {
    let Data = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/content/about_me`
    ).then((res) => res.json());
    this.introduce = Data.data[0];
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons = icons[0];
  },

  data() {
    return {
      introduce: {},
      icons: {},
      sidebar: [
        {
          path: "articles",
          title: "Məqalələrim",
        },
        {
          path: "articles",
          title: "Məqalələrim",
        },
      ],
    };
  },
};
</script>

<style>
.main-body .sidebar-box {
  display: flex;
  flex-direction: column;
}
</style>
