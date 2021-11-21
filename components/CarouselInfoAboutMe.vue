<template>
  <div class="carousel-info">
    <div class="picture">
      <img height="410" src="../static/images/picture1.jpg" alt="" />
    </div>
    <div v-if="icons" class="info-box">
      <ul>
        <li>
          <h5 class="text-center title-info">Info</h5>
        </li>
        <li class="">
          <i :class="icons.info" />
          <a href="/about"> Haqqımda məlumat</a>
        </li>
        <li v-if="data" class="">
          <i :class="icons.cv" />
          <a :href="data.resume">Mənim CV / Resume</a>
        </li>
        <li class="">
          <i :class="icons.folder" />
          <a href="/portfolio">Mənim portfolio</a>
        </li>
      </ul>
      <ul v-if="data.social">
        <li>
          <h5 class="text-center title-info">Sosial Media</h5>
        </li>
        <li class="">
          <i :class="icons.linkedin" />
          <a :href="data.social.linkedin" target="_blank"
            >Linkedin / Vüqar Səfərzadə</a
          >
        </li>
        <li class="">
          <i :class="icons.instagram" />
          <a :href="data.social.instagram" target="_blank"
            >Instagram / {{ data.social.instagram.split("/")[3] }}</a
          >
        </li>
        <li class="">
          <i :class="icons.github" />
          <a :href="data.social.github" target="_blank"
            >GitHub / {{ data.social.github.split("/")[3] }}</a
          >
        </li>
      </ul>
      <ul v-if="data">
        <li>
          <h5 class="text-center title-info">Əlaqə</h5>
        </li>
        <li class="">
          <i :class="icons.email" />
          <a class="text-decoration-none" :href="`mailto:${data.email}`">{{
            data.email
          }}</a>
        </li>
        <li class="">
          <i :class="icons.whatsapp" />
          <a
            class="text-decoration-none"
            target="_blank"
            :href="`https://wa.me/${data.phone[0].split(' ').join('')}`"
            >+{{ data.phone[0] }}</a
          >
        </li>
        <li class="">
          <i :class="icons.telephone" />
          <a class="text-decoration-none" :href="`tel:${data.phone[1]}`">{{
            data.phone[1]
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  async fetch() {
    let Data = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/introduce`
    ).then((res) => res.json());
    this.data = Data.data[0];
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons = icons[0];
  },
  name: "CarouselInfoAboutMe",
  components: { VueSlickCarousel },
  data() {
    return {
      icons: {},
      data: {},
    };
  },
};
</script>

<style>
.carousel-box .carousel-items .carousel-info .picture {
  display: inline-block;
  padding: 30px;
}

.carousel-box .carousel-items .carousel-info {
  display: flex;
  flex-wrap: nowrap;
  border-radius: 15px;
  background-color: var(--color1);
}

.carousel-box .carousel-items .carousel-info .info-box {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 16px;
}

.carousel-box .carousel-items .carousel-info .info-box ul li {
  list-style: none;
  font-size: 20px;
}

.carousel-box .carousel-items .carousel-info .info-box .title-info {
  color: var(--color4);
  background-color: var(--color2);
}

.carousel-box .carousel-items .carousel-info .info-box ul li i {
  color: var(--color4);
}
</style>
