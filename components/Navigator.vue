<template>
  <div class="navigator">
    <ul>
      <li>
        <a href="/"><i class="fas fa-home"></i> Ana səhifə</a>
      </li>
      <li>
        <a href="/"><i class="fas fa-book"></i> Dərslər</a>
      </li>
      <li>
        <a href="/"><i class="fas fa-scroll"></i> Məqalələr</a>
      </li>
      <li>
        <a href="/"><i class="far fa-file-alt"></i> CV</a>
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
