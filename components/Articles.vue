<template>
  <div class="articles" v-if="articles">
    <div v-if="data.random_article">
      <RandomView :comp="`ArticleBox`" :icons="icons" :path="`articles`"/>
    </div>
    <div v-else>
      <div class="main-body-box" v-for="article in articles.slice(0, 5)" :key="article.url">
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
    props: ["icons", "data"],
    data() {
      return {
        articles: {}
      }
    }
  }
</script>

<style>
  .main-body-box{
    padding: 0 10px 0 10px;
  }
</style>
