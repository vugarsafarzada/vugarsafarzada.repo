<template xmlns="">
  <div class="beats main">
    <Header class="Header" />
    <div class="main-body">
      <Beatplayer :icons="icons" :beats="beats" class="shadow" />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  async fetch() {
    let Data = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/beats/x060621_andromeda`
    ).then((res) => res.json());
    this.beats = Data.data;
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons = icons[0];
  },
  name: "beats",
  data() {
    return {
      beats: {},
      icons: {},
    };
  },
};
</script>

<style>
</style>
