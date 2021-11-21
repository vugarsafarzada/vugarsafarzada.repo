<template>
  <div class="header">
    <div class="title-box">
      <div class="title">
        <a href="/admin_panel" style="">
          <img src="../static/images/favicon (1).png" width="100" alt="LOGO" />
          <br />
          <span class="title-text">Vugar Safarzada</span>
        </a>
      </div>
    </div>
    <Navigator :data="data" />
  </div>
</template>

<script>
import Navigator from "./Navigator";

export default {
  props: ["data"],
  components: { Navigator },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px ridge var(--color6);
  background-color: var(--color2);
  color: var(--color5);
}

.header .title-box {
  display: inline;
  padding: 10px;
  text-align: center;
}

.header .title-box .title {
  display: inline;
}

.header .title-box .title a {
  text-decoration: none;
}

.header .title-box .title .title-text {
  font-family: "Audiowide", serif;
  font-size: 30px;
  color: var(--color5);
}
</style>
