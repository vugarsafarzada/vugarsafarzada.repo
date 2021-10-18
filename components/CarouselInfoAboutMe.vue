<template>
  <div class="carousel-info">
    <div class="picture">
      <img height="410" src="../static/images/picture1.jpg" alt="">
    </div>
    <div v-if="icons" class="info-box">
      <ul>
        <li>
          <h5 class="color5 bg2 text-center">Info</h5>
        </li>
        <li class="color2">
          <i :class="icons.info"/>
          <a href="/about"> Haqqımda məlumat</a>
        </li>
        <li v-if="data" class="color2">
          <i :class="icons.cv"/>
          <a :href="data.resume">Mənim CV / Resume</a>
        </li>
        <li class="color2">
          <i :class="icons.folder"/>
          <a href="/portfolio">Mənim portfolio</a>
        </li>
      </ul>
      <ul v-if="data.social">
        <li>
          <h5 class="color5 bg2 text-center">Sosial Media</h5>
        </li>
        <li class="color2">
          <i :class="icons.linkedin"/>
          <a :href="data.social.linkedin" target="_blank">Linkedin / Vüqar Səfərzadə</a>
        </li>
        <li class="color2">
          <i :class="icons.instagram"/>
          <a :href="data.social.instagram" target="_blank">Instagram / {{data.social.instagram.split("/")[3]}}</a>
        </li>
        <li class="color2">
          <i :class="icons.github"/>
          <a :href="data.social.github" target="_blank">GitHub / {{data.social.github.split("/")[3]}}</a>
        </li>
      </ul>
      <ul v-if="data">
        <li>
          <h5 class="color5 bg2 text-center">Əlaqə:</h5>
        </li>
        <li class="color2">
          <i :class="icons.email"/>
          <a class="color2 text-decoration-none" :href="`mailto:${data.email}`">{{data.email}}</a>
        </li>
        <li class="color2">
          <i :class="icons.whatsapp"/>
          <a class="color2 text-decoration-none" target="_blank"
             :href="`https://wa.me/${data.phone[0].split(' ').join('')}`">+{{data.phone[0]}}</a>
        </li>
        <li class="color2">
          <i :class="icons.telephone"/>
          <a class="color2 text-decoration-none" :href="`tel:${data.phone[1]}`">{{data.phone[1]}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from "vue-slick-carousel";

  export default {
    async fetch() {
      let Data = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/introduce`).then(res => res.json())
      this.data = Data.data[0];
      let icons = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/icons`).then(res => res.json())
      this.icons = icons[0];
    },
    name: "CarouselInfoAboutMe",
    components: {VueSlickCarousel},
    data(){
      return{
        icons:{},
        data:{}
      }
    }
  }
</script>

<style>

  .carousel-box
  .carousel-items
  .carousel-info
  .picture {
    border: 5px ridge #4d648d;
    display: inline-block;
    padding: 0;
    margin: 30px 0px 30px 30px;
  }

  .carousel-box
  .carousel-items
  .carousel-info {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .carousel-box
  .carousel-items
  .carousel-info
  .info-box {
    padding: 0;
    margin: 40px 30px 30px 15px
  }

  .carousel-box
  .carousel-items
  .carousel-info
  .info-box
  ul li {
    list-style: none;
    font-size: 20px;
  }

  .carousel-box
  .carousel-items
  .carousel-info
  .info-box
  ul li a {
    text-decoration: none;
    color: #4d648d;
    font-weight: bold;
  }

  .carousel-box
  .carousel-items
  .carousel-info
  .info-box
  ul li a:hover {
    color: #4b85e3;
  }
</style>
