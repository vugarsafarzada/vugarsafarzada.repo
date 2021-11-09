<template>
  <div class="admin-main">
    <div class="sign-in shadow">
      <h2>Admin panel</h2>
      <br>
      <div v-if="errors.length" class="text-center pb-4">
        <span v-for="error in errors" class="error-messages d-block text-danger">{{ error }}</span>
      </div>
      <form
        @submit="checkForm"
        method="post">
        <label>
          E-mail:
          <br>
          <input type="email" name="email" v-model="email" placeholder="Enter your e-mail">
        </label>
        <label>
          Password:
          <br>
          <input type="password" name="password" v-model="password" placeholder="Enter your password">
        </label>
        <button class="btn bg2 color3 mb-3">
          Sign-in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  const bcrypt = require('bcryptjs');

  export default {
    name: "index",
    data() {
      return {
        email: null,
        password: null,
        data: null,
        user_hash: null,
        errors: [],
      }
    },
    async fetch() {
      const data = await fetch(`http://${process.env.HOST}:${process.env.API_PORT}/api/auth/`).then(res => res.json());
      let getAllData = data.data[0];
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(`${getAllData.email}+${getAllData.password}`, salt);
      let admin_id = bcrypt.hashSync(getAllData._id, salt);
      this.user_hash = `${hash}${process.env.ADMIN}${getAllData._id}`;
    },

    methods: {
      checkForm: function (e) {
        if (this.email && this.password && this.validEmail(this.email)) {
          this.checkAuth(this.email, this.password);
        }

        this.errors = [];

        if (!this.email) {
          this.errors.push('E-mail required!');
        }

        if (!this.password) {
          this.errors.push('Password required!');
        }

        if (!this.validEmail(this.email)) {
          this.errors.push('Invalid e-mail format!');
        }
        e.preventDefault();
      },
      validEmail: function (email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      checkAuth(email, password) {
        const check = bcrypt.compareSync(`${email}+${password}`, this.user_hash.split(process.env.ADMIN)[0]);
        if(check){
          const admin_id = this.user_hash.split(process.env.ADMIN)[1]
          console.log("SUCCESS")
          console.log(admin_id)
        }else{
          alert('E-mail or Password is incorrect!');
        }
      }
    }
  }
</script>

<style>
  .admin-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .admin-main .sign-in {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #F5F5F5;
    width: 400px;
    padding: 10px;
    border-radius: 10px;
    margin: 10%;
  }

  .admin-main
  .sign-in
  form
  label
  input {
    width: 300px;
    margin-bottom: 25px;
  }

  .admin-main .sign-in form {
    display: flex;
    flex-direction: column;

  }

  .admin-main .sign-in ul .error-messages {
    list-style: none;
  }


</style>
