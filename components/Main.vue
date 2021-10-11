<template>
  <div class="main-content">
    <h2 class="main-title color2"><i class="bi bi-info-circle-fill"/> About Me</h2>

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
    </div>
  </div>
</template>

<script>
  export default {
    name: "Main",
    props:["data"],
    data(){
      return{
      }
    }
  }
</script>

<style>
  .main-content{
    width: 1000px;
    padding: 30px;
    margin: 20px;
    border-radius: 20px;
  }

  .main-content .my-picture{
    width: 300px;
    margin: 15px 15px 0 15px;
    float: left;
    border: 4px dashed #4d648d;
    border-radius: 15px;
    background: #4d648d;
    overflow: visible;
  }

  .main-content .main-title{
    display: inline-block;
    padding: 10px;
  }

  .main-content .main-content-box{
    padding: 10px 0 10px 0;
    border-top: 1.5px dashed #4d648d;
  }

  .main-content .main-content-box .about-me{
    padding: 15px;
  }
</style>
