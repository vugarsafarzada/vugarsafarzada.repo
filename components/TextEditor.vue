<template>
  <div>
    {{text}}
  </div>
</template>

<script>
    export default {
        name: "TextEditor",
        props: ["text", "settings"],
        methods: {
          textEditor: function(text){
            let proccess1 = this.listing(text, text.length);
            return proccess1;
          },
          listing: function (text, len) {
            console.log(text.substr(10, 20))
          }

        }
    }
</script>

<style>

</style>
