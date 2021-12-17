<template>
  <div class="admin-main">
    <div v-if="sign_in" class="sign-in shadow">
      <h2>Admin panel</h2>
      <br/>
      <div v-if="errors.length" class="text-center pb-4">
        <span
          v-for="error in errors"
          class="error-messages d-block text-danger"
          :key="error"
        >{{ error }}</span
        >
      </div>
      <form @submit="checkForm" method="post" class="signin-form">
        <label>
          E-mail:
          <br/>
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Enter your e-mail"
          />
        </label>
        <label>
          Password:
          <br/>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Enter your password"
          />
        </label>
        <button class="btn mb-3 signin">Sign-in</button>
      </form>
    </div>
  </div>
</template>

<script>
  const methods = require("../../api/methods");
  export default {
    name: "index",
    data() {
      return {
        email: null,
        password: null,
        data: null,
        user_id: null,
        errors: [],
        control_center: false,
        sign_in: null,
      };
    },
    methods: {
      checkForm: function (e) {
        if (this.email && this.password && this.validEmail(this.email)) {
          this.checkAuth(this.email, this.password);
        }

        this.errors = [];

        if (!this.email) {
          this.errors.push("E-mail required!");
        }

        if (!this.password) {
          this.errors.push("Password required!");
        }

        if (!this.validEmail(this.email)) {
          this.errors.push("Invalid e-mail format!");
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        let re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },

      async checkAuth(email, password) {
        const getUser = await fetch(
          `http://${process.env.HOST}:${process.env.API_PORT}/api/auth/${email}/check`
        ).then((res) => res.json());
        if (getUser.data.length === 1) {
          const getUserPassword = getUser.data[0]?.password;
          if (methods.checkPassword(password, getUserPassword)) {
            const getUserId = getUser.data[0]._id;
            this.user_id = getUserId;
            methods.creatToken(getUserId)
              .then(function (result) {
                localStorage.setItem("token", result);
                if (methods.checkTokenIsExist()) {
                  window.location.replace(`${window.location.pathname}/control_center`);
                } else {
                  this.sign_in = true
                }
              });
          }else{
            alert("E-mail or Password is incorrect!");
            this.control_center = false;
          }
        }
        if (getUser.data.length === 0) {
          alert("E-mail or Password is incorrect!");
          this.control_center = false;
        }
      },
      checkLogin: function () {
        if (methods.checkTokenIsExist()) {
          window.location.replace(`${window.location.pathname}/control_center`);
        } else {
          this.sign_in = true
        }
      }
    },
    mounted() {
      this.checkLogin();
    },
  };
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
    background: var(--color5);
    color: var(--color2);
    width: 400px;
    padding: 10px;
    border-radius: 10px;
    margin: 10%;
  }

  .admin-main .sign-in form label input {
    width: 300px;
    margin-bottom: 25px;
    background-color: var(--color2);
    color: var(--color5);
  }

  .admin-main .sign-in .signin-form .signin {
    background-color: var(--color1);
    color: var(--color5);
  }

  .admin-main .sign-in form {
    display: flex;
    flex-direction: column;
  }

  .admin-main .sign-in ul .error-messages {
    list-style: none;
  }
</style>
