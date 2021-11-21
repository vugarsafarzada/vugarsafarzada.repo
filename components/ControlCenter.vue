<template>
  <div class="cc">
    <h2>Control Center</h2>
    <h4>ID: {{ user_id }}</h4>
    <div v-if="user_id" class="main-body">
      <h3>Main body</h3>
    </div>
  </div>
</template>

<script>
  const jwtmethods = require("../api/methods");

export default {
  name: "ControlCenter",
  async fetch() {
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons = icons[0];
  },

  methods: {
    verifyToken: function(token){
      const user_data = jwtmethods.verifyToken(localStorage.getItem("token"));
      this.user_id = user_data.user_id;
    }
  },

  mounted(){
    this.verifyToken(this.token)
  },

  data() {
    return {
      icons: null,
      path: "cc",
      user_id: "",
    };
  },
};
</script>

<style>
div.cc {
  color: var(--color5);
}
</style>
