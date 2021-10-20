<template>
  <div class="articles">
    <br>
    <ArticleBox :icons="icons"/>
    <ArticleBox :icons="icons"/>
  </div>
</template>

<script>
  export default {
    name: "Articles",
    props: ["icons"]
  }
</script>

<style>

</style>
