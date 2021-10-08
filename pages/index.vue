<template>
  <div class="main">
    <Header class="bg3 color1 Header" />
    <Contents class="bg4 color1 w-75" />
    <Sidebar class="bg4 color1 w-25"/>
    <Footer class="bg1 color3 footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
    },
};
</script>

<style>
@font-face {
  font-family: "Inconsolata";
  src: url("../static/fonts/Inconsolata-VariableFont_wdth,wght.ttf");
}
@font-face {
  font-family: "BalsamiqSans";
  src: url("../static/fonts/BalsamiqSans-Regular.ttf");
}
@font-face {
  font-family: "Caveat";
  src: url("../static/fonts/Caveat-VariableFont_wght.ttf");
}
@font-face {
  font-family: "ChakraPetch";
  src: url("../static/fonts/ChakraPetch-Medium.ttf");
}

@font-face {
  font-family: "Audiowide";
  src: url("../static/fonts/Audiowide-Regular.ttf");
}
body {
  background: #4d648d;
  color: #d0e1f9;
  margin: 0 auto;
  padding: 0;
  font-family: "ChakraPetch",serif;
  /* FOR CAN'T SELECT TEXT*/
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
}

.footer{
  margin: auto 0 0 0;
}

ul li a {
  text-decoration: none;
  color: #d0e1f9;
  background: #4d648d;
  border: 3px ridge #d0e1f9;
  padding: 5px;
  margin: 5px;
  border-radius: 7px;
}

ul li a:hover {
  background: #283655;
  color: #fff;
  border: 3px ridge #4d648d;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Default Color Settings */
.color0 {
  color: #1e1f26;
}
.color1 {
  color: #283655;
}
.color2 {
  color: #646a74;
}
.color3 {
  color: #d0e1f9;
}

.bg0 {
  background-color: #1e1f26;
}
.bg1 {
  background-color: #283655;
}
.bg2 {
  background-color: #4d648d;
}
.bg3 {
  background-color: #d0e1f9;
}
.bg4 {
  background-color: #fff;
}
</style>
