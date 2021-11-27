const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Methods = {
  creatToken: async function (userId) {
    const token = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/auth/${userId}/userId`
    ).then((res) => res.json());

    return token.token
  },

  verifyToken: function (token) {
    return jwt.verify(token, process.env.ADMIN);
  },

  checkTokenIsExist: function () {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  },

  logOut: function () {
    localStorage.removeItem("token");
    window.location.reload(false);
  },

  hashPassword: function (password) {
    return bcrypt.hashSync(password, 10);
  },

  checkPassword: function (password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = Methods;
