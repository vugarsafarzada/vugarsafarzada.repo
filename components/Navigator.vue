<template>
  <div class="navigator">
    <ul>
      <li>
        <a href="/" class="nav-link"><i class="bi bi-house-fill"/> Ana səhifə</a>
      </li>
      <li>
        <a href="/" class="nav-link"><i class="bi bi-journal-code"/> Dərslər</a>
      </li>
      <li>
        <a href="/" class="nav-link"><i class="bi bi-file-earmark-text-fill"/> Məqalələr</a>
      </li>
      <li>
        <a href="/" class="nav-link"><i class="bi bi-file-earmark-person-fill"/> CV</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Navigator",
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
