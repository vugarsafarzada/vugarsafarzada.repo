const jwt = require("jsonwebtoken");

const Methods = {
  creatToken: async function (userId) {
    const token = await fetch(
      `http://${process.env.HOST}:${process.env.API_PORT}/api/auth/${userId}/userId`
    ).then((res) => res.json());

    return token.token
  },

  verifyToken: function (token) {
    return jwt.verify(token, process.env.ADMIN);
  }
}

module.exports = Methods;
