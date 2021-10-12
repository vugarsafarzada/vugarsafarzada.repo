<template>
  <div class="main-content">
    <h2 class="main-title color2"><i :class="icons.info"/> About Me</h2>
    <div class="main-content-box">
      <img class="my-picture" :src="require(`../static/images/${data.picture}`)" alt="picture">
      <div class="about-me">
        <span class="color2 fw-bold">Who is Vugar?</span>
        <p class="description color1">{{data.description}}</p>
        <hr>
        <span class="color2 fw-bold">Software history:</span>
        <p class="description color1">{{data.description1}}</p>
        <hr>
        <br>
        <p class="description color1">{{data.description2}}</p>
      </div>
      <div class="programming-skills">
      </div>
    </div>
    <h2 class="main-title color2"><i :class="icons.code"/> Programming Skills</h2>
    <div class="main-content-box container">
      <ul class="p-skills p-3 row">
        <li class="skill col" v-if="data" v-for="d in data.programming_skills" :key="d.skill">
          <span>
            {{d.skill}}
            <i :class="setLevel(d.level).emojis"/>
          </span>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated bg2"
              role="progressbar"
              :style="setLevel(d.level).styles"
              :aria-valuenow="d.level"
              aria-valuemin="0"
              aria-valuemax="100">
              {{d.level}}%
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Main",
    props: ["data", "icons"],
    methods: {
      setLevel: function (p) {
        var emojis;
        if (p <= 10) {
          emojis = this.icons.emoji.angry
        }
        if (p > 10 && p <= 30) {
          emojis = this.icons.emoji.frown
        }
        if (p <= 50 && p > 30) {
          emojis = this.icons.emoji.neutral
        }
        if (p <= 70 && p > 50) {
          emojis = this.icons.emoji.smile
        }
        if (p <= 90 && p > 70) {
          emojis = this.icons.emoji.laughing
        }
        if (p <= 100 && p > 90) {
          emojis = this.icons.emoji.sunglasses
        }
        return {styles: `width: ${p}%`, emojis}
      },

      showIcons: function () {
      }
    },

    data() {
      return {}
    }

  }
</script>

<style>
  .main-content {
    width: 1000px;
    padding: 30px;
    margin: 20px;
    border-radius: 20px;
  }

  .main-content .my-picture {
    width: 300px;
    margin: 15px 15px 0 15px;
    float: left;
    border: 4px dashed #4d648d;
    border-radius: 15px;
    background: #4d648d;
    overflow: visible;
  }

  .main-content .main-title {
    display: inline-block;
    padding: 10px;
  }

  .main-content .main-content-box {
    padding: 10px 0 10px 0;
    border-top: 1.5px dashed #4d648d;
  }

  .main-content .main-content-box .about-me {
    padding: 15px;
  }

  .p-skills .progress {
    width: 200px;
    height: 20px;
  }

  .p-skills .skill {
    margin-bottom: 20px;
    list-style: none;
  }

  .p-skills .skill span {
    text-align: center;
  }
</style>
