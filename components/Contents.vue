<template>
  <div class="content bg4 color1 shadow">
    <h4 v-if="content_data">Page: {{content_data.lesson_title}}</h4>
    <Carousel />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dolor, exercitationem libero nemo nulla
      provident quae quaerat repellat sit suscipit tempore? Debitis, inventore molestiae nam officia porro quam quia! A
      ab accusamus adipisci animi, architecto asperiores assumenda blanditiis consectetur consequatur culpa distinctio
      dolorum, ducimus ea earum eligendi enim esse est fuga fugit harum illo, in itaque laboriosam laborum magnam
      molestias mollitia necessitatibus omnis perspiciatis porro quam quo repudiandae saepe sapiente similique
      voluptatem voluptates. Amet commodi consectetur corporis cum dolor ea error hic maxime non, obcaecati quas
      quibusdam repellat sapiente? Ab animi consequatur eaque ipsa natus obcaecati odio possimus vero.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dolor, exercitationem libero nemo nulla
      provident quae quaerat repellat sit suscipit tempore? Debitis, inventore molestiae nam officia porro quam quia! A
      ab accusamus adipisci animi, architecto asperiores assumenda blanditiis consectetur consequatur culpa distinctio
      dolorum, ducimus ea earum eligendi enim esse est fuga fugit harum illo, in itaque laboriosam laborum magnam
      molestias mollitia necessitatibus omnis perspiciatis porro quam quo repudiandae saepe sapiente similique
      voluptatem voluptates. Amet commodi consectetur corporis cum dolor ea error hic maxime non, obcaecati quas
      quibusdam repellat sapiente? Ab animi consequatur eaque ipsa natus obcaecati odio possimus vero.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque dolor, exercitationem libero nemo nulla
      provident quae quaerat repellat sit suscipit tempore? Debitis, inventore molestiae nam officia porro quam quia! A
      ab accusamus adipisci animi, architecto asperiores assumenda blanditiis consectetur consequatur culpa distinctio
      dolorum, ducimus ea earum eligendi enim esse est fuga fugit harum illo, in itaque laboriosam laborum magnam
      molestias mollitia necessitatibus omnis perspiciatis porro quam quo repudiandae saepe sapiente similique
      voluptatem voluptates. Amet commodi consectetur corporis cum dolor ea error hic maxime non, obcaecati quas
      quibusdam repellat sapiente? Ab animi consequatur eaque ipsa natus obcaecati odio possimus vero.
    </p>
  </div>
</template>

<script>
  export default {
    name: "Content",
    props:["content_data", "carousel"],
    data(){
      return{

      }
    }
  }
</script>

<style>
  .content{
    margin: 20px;
    border-radius: 20px;
  }
  .slick-prev:before, .slick-next:before{
    color: #283655;
  }

</style>
