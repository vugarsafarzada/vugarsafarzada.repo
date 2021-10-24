<template xmlns="">
  <div class="main">
    <Header class="bg2 color1 Header"/>
    <div class="main-body">
      <About :data="introduce" :icons="icons" class="bg4 color1 shadow"/>
      <div v-for="s in sidebar" class="sidebar-box">
        <Sidebar
          :icons="icons"
          :path="s.path"
          :title="s.title"
          class="color1"
        />
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
        introduce: {},
        icons: {},
        sidebar: [
          {
            path: "articles",
            title: "Məqalələrim"
          },
        ]
      };
    },
  };
</script>

<style>

</style>
