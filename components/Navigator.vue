<template>
  <div class="navigator">
    <ul>
      <li v-for="nav in nav_url" :key="nav.url">
        <a
          :href="nav.url"
          :class="`nav-link ${nav.disabled ? 'disabled' : ''}
          ${nav.url.split('/')[1] === location ? 'actived' : ''}`"
        >
          <i v-if="icons[`${nav.icon}`]" :class="icons[`${nav.icon}`]" />
          {{ nav.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  props: ["data"],
  async fetch() {
    let icons = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
    ).then((res) => res.json());
    this.icons = icons[0];
  },
  data() {
    return {
      icons: {},
      location: this.$nuxt._route.path.split("/")[1],
      nav_url: [
        {
          url: "/",
          title: "Home",
          disabled: false,
          icon: "home",
        },
        {
          url: "/beats",
          title: "My Beats",
          disabled: false,
          icon: "music_list",
        },
        {
          url: "/about",
          title: "About me",
          disabled: false,
          icon: "info",
        },
        {
          url: "/lessons",
          title: "Lessons",
          disabled: true,
          icon: "lessons",
        },
        {
          url: "/Resume.pdf",
          title: "Resume",
          disabled: false,
          icon: "cv",
        },
        // {
        //   url: "/articles",
        //   title: "Məqalələr",
        //   disabled: false,
        //   icon: "pen",
        // },
      ],
    };
  },
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
  /* border-right: 3px dashed #878C91;
    border-left: 3px dashed #878C91;
    border-bottom: 3px dashed #878C91; */
}

ul li a.nav-link {
  text-decoration: none;
  color: var(--color5);
  background-color: var(--color1);
  padding: 10px;
  margin: 5px;
  border-radius: 7px;
}

ul li a.nav-link:hover {
  background-color: var(--color4);
  color: var(--color1);
  transition-duration: 0.4s;
}

ul li a.actived {
  color: var(--color1);
  background-color: var(--color5);
}
</style>
