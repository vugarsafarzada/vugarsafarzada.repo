<template>
  <div class="sidebar bg4 shadow">
    <h3><i :class="icons.articles" v-if="icons"/> {{title}}</h3>
    <div>
      <p></p>
    </div>
    <ol>
      <li v-if="a.url !== check"  v-for="a in sidebar_data" :key="a">
        <a :href="`/${path}/${a.url}`">{{a.title}}</a>
      </li>
      <li v-if="path">
        <a :href="'/' + path">more...</a>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    async fetch() {
      let articles = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/${this.path}/`)
        .then(res => res.json())
      this.sidebar_data = articles.data.reverse();
    },
    props: [
      "title",
      "path",
      "icons",
      "check"
    ],
    data() {
      return {
        sidebar_data:{}
      }
    },
  }
</script>

<style>
  .sidebar-box {
    width: 350px;
    height: 100%;
  }

  .sidebar {
    padding: 30px;
    margin: 20px;
    border-radius: 20px;
  }

  .sidebar-box .sidebar ol li a {
    text-decoration: none;
    color: #283655;
  }

  .sidebar-box .sidebar ol li a:hover {
    text-decoration: none;
    color: #4b85e3;
  }

  .sidebar-box .sidebar ol li:last-child a {
    text-decoration: none;
    color: #4b85e3;
  }

  .sidebar-box .sidebar ol li:last-child {
    list-style: none;
    position: relative;
    right: 20px;
  }

</style>
