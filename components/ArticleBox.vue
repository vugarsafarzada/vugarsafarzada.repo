<template>
  <div class="article-box bg5 color2">
    <div class="article-head">
      <h3>
        <i :class="icons.paperclip"/>
        <a href="/" class="text-decoration-none color1">Lorem ipsum dolor</a>
      </h3>
    </div>
    <hr>
    <div class="article-content">
      <div class="content-img">
        <img width="170" height="170" src="../static/images/giphy.gif" alt="">
      </div>
      <div class="content-paragraph">
        <p>
          {{text.substr(0, 450)}}. . .
          <br>
          <a href="/" class="color1 opacity-50">Davamını oxu</a>
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
        <span>10/08/2021</span>
        <i :class="icons.calendar"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleBox",
    props: ["icons"],
    data() {
      return {
        text: 'Nice example Jolly. I updated your version which limits the character length as opposed to the number of words. I also added setting the title to the real original innerHTML , so users can hover and see what is truncated. you give it your html element in the first line and then it takes the whole text, replaces urls with 10 character long versions and returns it to you. This seems a little strange to only have 3 of the url characters so I would recommend this if possible. The KMP algorithm searches for a length-m substring in a length-n string in worst-case O(n+m) time, compared to a worst-case of O(n⋅m) for the naive algorithm, so using KMP may be reasonable if you care about worst-case time complexity.'
      }
    }
  }
</script>

<style>
  .article-box {
    margin-bottom: 20px;
    padding: 30px;
    opacity: 80%;
  }

  .article-box
  .article-content{
    display: flex;
  }

  .article-box
  .article-content
  .content-img{
    margin-right: 25px;
    padding: 5px;
  }

  .article-box
  .article-content
  .content-paragraph{
    padding: 5px;
  }

</style>
