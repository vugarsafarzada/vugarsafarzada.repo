<template>
  <div class="sidebar bg4 shadow">
    <h3><i :class="icon" v-if="icon"/> {{title}}</h3>
    <ol>
      <li v-for="a in data" :key="a"><a v-bind:href="convert_url(`${path}`, a)">{{a}}</a></li>
      <li>
        <NuxtLink :to="'/' + path">more...</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    props: [
      "title",
      "data",
      "path",
      "icon"
    ],
    data() {
      return {
      }
    },
    methods: {
      convert_url: function (path, link) {
        var link1 = link?.split(" ").join("_");
        return `/${path}/${this.convertString(link1)}`
      },
      convertString: function (phrase) {
        var maxLength = 50;

        var returnString = phrase.toLowerCase();
        //Convert Characters
        returnString = returnString.replace(/ö/g, 'o');
        returnString = returnString.replace(/ç/g, 'c');
        returnString = returnString.replace(/ş/g, 's');
        returnString = returnString.replace(/ı/g, 'i');
        returnString = returnString.replace(/ğ/g, 'g');
        returnString = returnString.replace(/ü/g, 'u');
        returnString = returnString.replace(/ə/g, 'e');
        returnString = returnString.replace(/_/g, '-');
        returnString = returnString.replace(/&/g, 'and');

        // if there are other invalid chars, convert them into blank spaces
        returnString = returnString.replace(/[^a-z0-9\s-]/g, "");
        // convert multiple spaces and hyphens into one space
        returnString = returnString.replace(/[\s-]+/g, " ");
        // trims current string
        returnString = returnString.replace(/^\s+|\s+$/g, "");
        // cuts string (if too long)
        if (returnString.length > maxLength)
          returnString = returnString.substring(0, maxLength);
        // add hyphens
        returnString = returnString.replace(/\s/g, "-");

        return returnString;
      }
    }
  }
</script>

<style>
  .sidebar-box {
    width: 350px;
    height: 100%;
  }

  .sidebar {
    padding: 30px;
    margin: 20px;
    border-radius: 20px;
  }

  .sidebar-box .sidebar ol li a {
    text-decoration: none;
    color: #283655;
  }

  .sidebar-box .sidebar ol li a:hover {
    text-decoration: none;
    color: #4b85e3;
  }

  .sidebar-box .sidebar ol li:last-child a {
    text-decoration: none;
    color: #4b85e3;
  }

  .sidebar-box .sidebar ol li:last-child {
    list-style: none;
    position: relative;
    right: 20px;
  }

</style>
