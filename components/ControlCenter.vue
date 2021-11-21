<template>
  <div class="cc">
    <h2>Control Center</h2>
    <h4>ID: {{ user_id }}</h4>
    <h6>TOKEN: {{ token }}</h6>
    <div class="main-body"></div>
  </div>
</template>

<script>
const jwt = require("jsonwebtoken");

export default {
  name: "ControlCenter",
  props: ["user_id"],
  async fetch() {
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    let token = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/auth/${this.user_id}/userId`
    ).then((res) => res.json());
    this.icons = icons[0];
    jwt.verify(token.token, process.env.ADMIN, function (err, decoded) {
      console.log(token.token);
      console.log(decoded);
    });
  },
  data() {
    return {
      icons: null,
      path: "cc",
      token: "",
    };
  },
};
</script>

<style>
div.cc {
  color: var(--color5);
}
</style>
