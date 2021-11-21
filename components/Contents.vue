<template>
  <div class="content shadow" v-if="data">
    <div v-for="component in data.content_data.components" :key="component">
      <components
        class="pb-3"
        :page="page"
        :icons="icons"
        :data="data.content_data"
        :is="component"
      />
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    let content = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/content/${this.path}`
    ).then((res) => res.json());
    this.data = content.data[0];
  },
  name: "Content",
  props: ["icons", "path", "page"],
  data() {
    return {
      data: {},
    };
  },
};
</script>

<style>
.content {
  margin: 20px;
  border-radius: 20px;
  background-color: var(--color2);
}

.slick-prev:before,
.slick-next:before {
  color: #283655;
}
</style>
