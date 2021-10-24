<template>
  <div v-if="path && comp">
    <div v-for="r in randomNums.slice(0, 2)" :key="r">
      <div class="main-body-box" :key="data[r].url">
        <component
          :icons="icons"
          :title="data[r].title"
          :content="data[r].content"
          :picture="data[r].picture"
          :date="data[r].date"
          :url="data[r].url"
          :is="comp"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RandomView",
    props: ["path", "icons", "comp"],
    async fetch() {
      let content = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/${this.path}`)
        .then(res => res.json())
      this.data = content.data;
      this.compNums(content.data.length)
    },
    data() {
      return {
        data: {},
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
