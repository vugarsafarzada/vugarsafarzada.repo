<template>
  <div class="carousel-box ">
    <VueSlickCarousel :autoplay="true" :arrows="true" :dots="true">
      <div class="bg5 carousel-items">
        <h2>Vüqar Kimdi?</h2>
      </div>
      <div class="bg5 carousel-items">
        <h2>Ən yeni məqalələr:</h2>
      </div>
      <div class="bg5 carousel-items">
        <h2>Proqramlaşdırma dərsləri:</h2>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components: {VueSlickCarousel},
    name: "Carousel"
  }
</script>

<style>
  .carousel-box{
    width: 99%;
    margin-bottom: 50px;
  }

  .carousel-box .carousel-items{
    width: 500px;
    height: 500px;
    padding: 20px;
    font-style: italic;

  }

</style>
