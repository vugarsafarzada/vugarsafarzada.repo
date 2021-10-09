<template>
<div class="sidebar-box">
  <div class="sidebar bg4 shadow">
    <h2><i class="bi bi-journal-code" /> Dərslər</h2>
    <ol>
      <li>Lorem ipsum.</li>
      <li>Hic, reiciendis.</li>
      <li>Numquam, obcaecati?</li>
      <li>Alias, totam!</li>
      <li>Hic, sapiente!</li>
      <li>Cumque, ex!</li>
      <li>Incidunt, ollam?</li>
      <li>Eligendi, placeat?</li>
      <li><a href="">more...</a></li>
    </ol>
  </div>

  <div class="sidebar bg4 shadow">
    <h2><i class="bi bi-file-earmark-text-fill"/> Məqalələr</h2>
    <ol>
      <li>Lorem ipsum.</li>
      <li>Hic, reiciendis.</li>
      <li>Hic, sapiente!</li>
      <li>Cumque, ex!</li>
      <li>Incidunt, ollam?</li>
      <li>Eligendi, placeat?</li>
      <li><a href="">more...</a></li>
    </ol>
  </div>
</div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style>
  .sidebar-box{
    width: 350px;
    height: 100%;
  }

  .sidebar{
    padding: 30px;
    margin: 20px;
    border-radius: 20px;
  }

  .sidebar-box .sidebar ol li{
  }

  .sidebar-box .sidebar ol li:last-child{
    list-style: none;
    position: relative;
    right: 20px;
  }
</style>
