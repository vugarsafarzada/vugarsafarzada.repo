<template>
  <div class="main">
    <Header :data="introduce" class="Header" />
    <div class="main-body">
      <Contents :icons="icons" :path="path" />
      <div class="sidebar-box">
        <Sidebar
          v-for="s in sidebar"
          :key="s.title"
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
      `http://${process.env.HOST}:${process.env.API_PORT}/api/introduce`
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
      path: "main",
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
.content {
  width: 1000px !important;
  padding: 50px;
}

.sidebar-box {
  display: flex;
  flex-direction: column;
}
</style>
