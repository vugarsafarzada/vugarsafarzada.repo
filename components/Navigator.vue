<template>
  <div class="navigator">
    <ul>
      <li>
        <a href="/" class="nav-link" ><i class="bi bi-house-fill"/> Ana səhifə</a>
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
</style>
