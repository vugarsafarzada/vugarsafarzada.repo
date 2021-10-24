<template>
  <div>
    <div v-for="r in randomNums.slice(0, 2)" :key="r">
      <div class="main-body-box" :key="articles[r].url">
        <ArticleBox
          :icons="icons"
          :title="articles[r].title"
          :content="articles[r].content"
          :picture="articles[r].picture"
          :date="articles[r].date"
          :url="articles[r].url"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RandomView",
    props: ["path", "icons"],
    async fetch() {
      let content = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/${this.path}`)
        .then(res => res.json())
      this.articles = content.data;
      this.compNums(content.data.length)
    },
    data() {
      return {
        articles: {},
        num: [],
        randomNums: [],
      }
    },
    methods: {
      compNums: function (data) {
        for (let i = 0; i < data; i++) {
          this.num.push(i);
        }
        this.randomData();
      },
      randomData: function () {
        var nums = this.num,
          ranNums = [],
          i = nums.length,
          j = 0;

        while (i--) {
          j = Math.floor(Math.random() * (i + 1));
          ranNums.push(nums[j]);
          nums.splice(j, 1);
        }
        this.randomNums = ranNums;

      }
    }
  }
</script>

<style scoped>

</style>
