<template>
  <div class="articles" v-if="articles">
    <br>
    <div v-for="article in articles.slice(0, 5)" :key="article.url">
      <ArticleBox
        :icons="icons"
        :title="article.title"
        :content="article.content"
        :picture="article.picture"
        :date="article.date"
        :url="article.url"
      />
    </div>
  </div>
</template>

<script>
  export default {
    async fetch() {
      let articles = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/articles/`)
        .then(res => res.json())
      this.articles = articles.data.reverse();
    },
    name: "Articles",
    props: ["icons"],
    data() {
      return {
        articles: {}
      }
    }
  }
</script>

<style>

</style>
