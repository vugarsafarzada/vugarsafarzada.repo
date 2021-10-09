<template>
  <div class="header">
    <div class="title-box">
      <h2 class="title">
        <a href="/" style="">
          <img
            src="../static/images/light-apple-touch-icon.png"
            width="100"
            alt="LOGO"
          />
        </a>
      </h2>
    </div>
    <Navigator />
  </div>
</template>

<script>
import Navigator from "./Navigator";
export default {
  components: { Navigator },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  border-bottom: 4px ridge #fff;
}

.header .title-box {
  display: inline;
  padding: 10px;
}

.header .title-box .title {
  display: inline;
}

.header .title-box .title a {
  text-decoration: none;
}
</style>
