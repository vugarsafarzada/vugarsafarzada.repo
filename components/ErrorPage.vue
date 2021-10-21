<template>
    <div class="error">
      <h2>Xəta</h2>
      <h4 class="text-danger">Belə bir səhifə mövcud deyil!</h4>
    </div>
</template>

<script>
    export default {
        name: "ErrorPage"
    }
</script>

<style>
 .error{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 20px;
 }
</style>
