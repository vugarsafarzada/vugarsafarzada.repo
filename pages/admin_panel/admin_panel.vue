<template>
    <div class="panel">
      <h2>Admin panel</h2>
    </div>
</template>

<script>
  const api_port = process.env.API_PORT;
  const host = process.env.HOST;
    export default {
        name: "admin_panel",
        data(){
          return{
            userData:[]
          }
        },
        async fetch(){
          this.userData = await fetch(`http://${host}:${api_port}/api/auth/admin`).then(res=>res.json())
        }
    }
</script>

<style>

</style>
