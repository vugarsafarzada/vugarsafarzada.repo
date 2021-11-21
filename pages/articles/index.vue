<template>
  <div class="main">
    <Header class="Header" />
    <div class="main-body">
      <Contents :path="path" :icons="icons" class="shadow" />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  name: "Article",
  async fetch() {
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons = icons[0];
  },
  data() {
    return {
      icons: {},
      path: "articles",
      articles: {},
    };
  },
};
</script>

<style scoped>
.content {
  width: 1200px;
  padding: 30px;
}
</style>
