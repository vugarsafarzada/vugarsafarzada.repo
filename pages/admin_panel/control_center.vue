<template>
  <div class="panel" v-if="actived && user_id">
    <div class="cc_head">
      <h2 class="header_title">
        <span>Control</span><span>Center</span>
      </h2>
      <button class="logout btn" @click="logOut">
        <i :class="icons.logout"/>
      </button>
    </div>
    <div class="cc_body">
      <Contents :icons="icons" :path="path"/>
    </div>
  </div>
</template>

<script>
  const methods = require("../../api/methods");
  export default {
    name: "admin_panel",
    async fetch() {
      let icons = await fetch(
        `http://${process.env.HOST}:${process.env.API_PORT}/api/icons`
      ).then((res) => res.json());
      this.icons = icons[0];
    },
    data() {
      return {
        userData: [],
        actived: false,
        user_id: null,
        icons: [],
        path:"cc_page"
      }
    },

    methods: {
      verifyToken: function () {
        const user_data = methods.verifyToken(localStorage.getItem("token"));
        this.user_id = user_data?.user_id;
      },
      logOut: function () {
        methods.logOut();
      }
    },
    mounted() {
      if (methods.checkTokenIsExist()) {
        this.actived = true;
        this.verifyToken();
      } else {
        window.location.replace("/admin_panel");
      }
    }
  }
</script>

<style>
  .panel{
    display: flex;
    flex-direction: column;
  }

  .panel .cc_head {
    background-color: var(--color2);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 15px;
    justify-content: space-between;
  }

  .panel .cc_head .logout:hover {
    background-color: var(--color5);
    color: var(--color0);
  }

  .panel .cc_head .header_title span{
    padding: 5px;
  }

 .panel .cc_head .header_title{
    margin: 5px;
  }

  .panel .cc_head .header_title span:first-child {
    color: var(--color1);
    background-color: var(--color5);
  }

  .panel .cc_head .header_title span:last-child {
    color: var(--color5);
    background-color: var(--color0);
  }

  .panel .cc_head .logout {
    background-color: var(--color1);
    color: var(--color5);
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .panel .cc_body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
</style>
