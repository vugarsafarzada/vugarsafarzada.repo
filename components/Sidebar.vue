<template>
  <div class="sidebar shadow">
    <h3><i :class="icons.articles" v-if="icons" /> {{ title }}</h3>
    <div>
      <p></p>
    </div>
    <ol>
      <li v-if="a.url !== check" v-for="a in sidebar_data" :key="a.url">
        <a :href="`/${path}/${a.url}`">{{ a.title }}</a>
      </li>
      <li v-if="a.url !== check" v-for="a in sidebar_data" :key="a.url">
        <a :href="`/${path}/${a.url}`">{{ a.title }}</a>
      </li>
      <li v-if="a.url !== check" v-for="a in sidebar_data" :key="a.url">
        <a :href="`/${path}/${a.url}`">{{ a.title }}</a>
      </li>
      <li v-if="path">
        <a :href="'/' + path" class="more">more...</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  async fetch() {
    let articles = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/${this.path}/`
    ).then((res) => res.json());
    this.sidebar_data = articles.data.reverse();
  },
  props: ["title", "path", "icons", "check"],
  data() {
    return {
      sidebar_data: {},
    };
  },
};
</script>

<style>
.sidebar-box {
  width: 370px;
  height: 100%;
}

.sidebar {
  padding: 30px;
  margin: 20px;
  border-radius: 20px;
  background-color: var(--color2);
}

.sidebar h3 {
  color: var(--color4);
}

.sidebar-box .sidebar ol li {
  text-decoration: none;
  color: var(--color4);
}

.sidebar-box .sidebar ol li:last-child {
  list-style: none;
  position: relative;
  right: 20px;
}

.sidebar-box .sidebar .more {
  color: var(--color3);
}

.sidebar-box .sidebar .more:hover {
  color: var(--color5);
}
</style>
