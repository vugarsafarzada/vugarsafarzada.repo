<template>
  <div v-show="data.carousel.active" class="carousel-box">
    <VueSlickCarousel
      :autoplay="data.carousel.settings.autoplay"
      :autoplaySpeed="data.carousel.settings.autoplaySpeed * 1000"
      :arrows="data.carousel.settings.arrows"
      :dots="data.carousel.settings.dots"
    >
      <div
        v-for="page in data.carousel.pages"
        :key="page"
        class="carousel-items"
      >
        <div v-if="page">
          <components :is="page" :data="data.carousel" />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  name: "Carousel",
  props: ["icons", "data"],
};
</script>

<style>
.carousel-box {
  width: 99%;
  margin-bottom: 50px;
  border-radius: 20px;
}

.carousel-box .carousel-items {
  width: 500px;
  height: 500px;
  padding: 10px;
}
</style>
