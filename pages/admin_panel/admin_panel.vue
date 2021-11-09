<template>
    <div class="panel">
      <h2>Admin panel</h2>
      <h6 v-if="userData">{{userData[0].title}}</h6>
      <img v-if="userData" :src="userData[0].image" alt="">
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
