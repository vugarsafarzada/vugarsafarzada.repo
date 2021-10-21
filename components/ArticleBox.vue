<template>
  <div class="article-box bg6 color2 shadow-sm">
    <div class="article-head">
      <h3>
        <i :class="icons.paperclip"/>
        <a :href="`/articles/` + url" class="text-decoration-none color1">{{title}}</a>
      </h3>
    </div>
    <hr>
    <div class="article-content">
      <div class="content-img">
        <img width="170" height="170" :src="require(`../static/images/${picture[0]}`)" alt="">
      </div>
      <div class="content-paragraph">
        <p>
          {{content.substr(0, 450)}}. . .
          <br>
          <a :href="`/articles/` + url" class="color1 opacity-50">Davamını oxu</a>
        </p>
      </div>
    </div>
    <hr>
    <div class="article-footer">
      <div class="evaluate d-inline">
        <i :class="icons.emoji.like"/> 10
        <i :class="icons.emoji.dislike"/> 9
        <i :class="icons.chat_text"/> 2
      </div>
      <div class="float-end d-inline fs-6">
        <span class="article-date text-secondary">{{date.split('GMT')[0]}} <i :class="icons.calendar"/></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleBox",
    props: [
      "icons",
      "title",
      "content",
      "picture",
      "date",
      "url"
    ],
    data() {
      return {
        text: 'Nice example Jolly. I updated your version which limits the character length as opposed to the number of words. I also added setting the title to the real original innerHTML , so users can hover and see what is truncated. you give it your html element in the first line and then it takes the whole text, replaces urls with 10 character long versions and returns it to you. This seems a little strange to only have 3 of the url characters so I would recommend this if possible. The KMP algorithm searches for a length-m substring in a length-n string in worst-case O(n+m) time, compared to a worst-case of O(n⋅m) for the naive algorithm, so using KMP may be reasonable if you care about worst-case time complexity.'
      }
    }
  }
</script>

<style>
  .article-box {
    margin-bottom: 30px;
    padding: 30px;
    opacity: 80%;
    border-left: 6px solid #4d648d;
  }

  .article-box
  .article-content {
    display: flex;
  }

  .article-box
  .article-content
  .content-img {
    margin-right: 25px;
    padding: 5px;
  }

  .article-footer .article-date {
    font-size: 12px;
  }

  .article-box
  .article-content
  .content-paragraph {
    padding: 5px;
  }

</style>
