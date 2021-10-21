<template>
  <div v-if="data" class="article_view">
    <div class="article-head">
      <h3>{{data.title}}</h3>
    </div>
    <div class="article-content">
      <div class="article-img">
        <img width="700" :src="require(`../static/images/${data.picture[0]}`)" :alt="data.title">
      </div>
      <div class="article-content-text">
        <p v-for="p in data.content.split('~$br~')">{{p}}</p>
      </div>
    </div>
    <div class="article-footer">
    </div>
  </div>
  <div v-else>
    <ErrorPage/>
  </div>
</template>

<script>
  export default {
    async fetch() {
      let article = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/articles/${this.page}`)
        .then(res => res.json())
      this.data = article.data[0];
    },
    name: "ArticleView",
    props: ["page", "icons"],
    data() {
      return {
        data: {}
      }
    }
  }
</script>

<style>
  .article_view
  .article-content
  .article-img {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .article_view
  .article-content
  .article-content-text {
  }

</style>
