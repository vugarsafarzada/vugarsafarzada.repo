<template>
  <div v-if="data" class="article_view">
    <div class="article_head">
      <h3>
        <i :class="icons.paperclip" />
        {{ data.title }}
      </h3>
    </div>
    <div class="article_content">
      <div v-if="data.video" class="article_video">
        <Iframe :src="data.video" />
      </div>
      <br />
      <div
        v-for="(p, index) in data.content.split('~$br~')"
        class="article_content_text"
        :key="index"
      >
        <article>
          <TextEditor :text="p" />
        </article>
        <br />
        <div v-if="data.picture[index]" class="article_img">
          <img
            :width="data.pictureSettings.width"
            :height="data.pictureSettings.height"
            :src="require(`../static/images/${data.picture[index]}`)"
            :alt="data.title"
          />
        </div>
        <br />
      </div>
      <hr />
    </div>
    <div class="article-footer">
      <div class="author">
        <span v-for="ath in data.author" :key="ath"> {{ ath }}, </span>
        <span>
          <sub>{{ data.date.split("GMT")[0] }}</sub>
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <ErrorPage />
  </div>
</template>

<script>
import Article from "../pages/articles/index";

export default {
  components: { Article },
  async fetch() {
    let article = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/articles/${this.page}`
    ).then((res) => res.json());
    this.data = article.data[0];
  },
  name: "ArticleView",
  props: ["page", "icons"],
  data() {
    return {
      data: {},
    };
  },
};
</script>

<style>
.article_view .article_content .article_img {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.article_view .article_content article {
  color: var(--color4);
}

.article_view .article_content {
  border-top: 1px solid var(--color4);
  padding: 10px;
}

.article_view .article_head h3 {
  color: var(--color5);
}

.article_view hr {
  background-color: var(--color4);
}

.article_view .article_content .article_video {
  padding: 10px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color4);
}

.article_view .article-footer .author {
  text-align: right;
}

.article_view .article-footer .author span {
  color: var(--color5);
  display: block;
  font-style: italic;
}
</style>
