<template>
  <div class="navigator">
    <ul>
      <li>
        <a href="/" class="nav-link"><i :class="icons.home"/> Home</a>
      </li>
      <li>
        <a href="/beats" class="nav-link"><i :class="icons.music_list"/> My Beats</a>
      </li>
      <li>
        <a href="/about" class="nav-link"><i :class="icons.info"/> About me</a>
      </li>
      <li>
        <a href="/" class="nav-link"><i :class="icons.lessons"/> Lessons</a>
      </li>
      <li>
        <a href="/Resume.pdf" class="nav-link" download=""><i :class="icons.cv"/>  Resume</a>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "Navigator",
    props: ["data"],
    async fetch() {
      let icons = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/icons`).then(res => res.json())
      this.icons = icons[0];
    },
    data() {
      return {
        icons: {}
      }
    }
  };
</script>

<style>
  .navigator ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px;
    /* border-right: 3px dashed #4d648d;
    border-left: 3px dashed #4d648d;
    border-bottom: 3px dashed #4d648d; */
  }

  ul li a.nav-link {
    text-decoration: none;
    color: #283655;
    background-color: #d0e1f9;
    border: 3px ridge #d0e1f9;
    padding: 5px;
    margin: 5px;
    border-radius: 7px;
  }

  ul li a.nav-link:hover {
    background-color: #fff;
    color: #4d648d;
    transition-duration: 0.5s;
  }

</style>
