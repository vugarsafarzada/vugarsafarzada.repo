<template>
  <div class="content">
    <h2>Content <i class="bi bi-arrow-left-circle-fill"></i></h2>
    <h4 v-if="content_title">Page: {{content_title}}</h4>
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
    props:["content_title"],
    data(){
      return{

      }
    }
  }
</script>

<style>
  .content{
    width: 1000px;
    padding: 30px;
    margin: 20px;
    border-radius: 20px;
  }

</style>
