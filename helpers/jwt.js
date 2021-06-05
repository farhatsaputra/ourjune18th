const jwt = require("jsonwebtoken");

const signToken = (object) => {
  return jwt.sign(object, "testtesttest");
};

const verifyToken = (access_token) => {
  return jwt.verify(access_token, "testtesttest");
};

module.exports = {
  signToken,
  verifyToken,
};
