<template>
  <div class="sidebar-box">
    <div class="sidebar bg4 shadow">
      <h2><i class="bi bi-journal-code"/> Dərslər</h2>
      <ol>
        <li v-for="l in lessons" :key="l"><a v-bind:href="convert_url('lessons',l)">{{l}}</a></li>
        <li><a href="/lessons">more...</a></li>
      </ol>
    </div>

    <div class="sidebar bg4 shadow">
      <h2><i class="bi bi-file-earmark-text-fill"/> Məqalələr</h2>
      <ol>
        <li v-for="a in articles" :key="a"><a v-bind:href="convert_url('articles',a)">{{a}}</a></li>
        <li><a href="/articles">more...</a></li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        lessons: ["Java & Java EE", "Python OOP", "ReactJS & NextJS", "Vue Vuex and NuxtJS", "MongoDB & Mongoose", "CSS & SCSS"],
        articles: ["Niyə Vue daha yaxşıdı?", "React yoxsa Angular", "C dilləri öldümü?", "Texnologiya və Kompüter", "İlk proqramlaşdırma dilləri"]
      }
    },
    methods: {
      convert_url: function (path, link) {
        var link1 = link?.split(" ").join("_").toLowerCase()

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
