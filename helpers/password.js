const bcrypt = require("bcryptjs");

const generatePassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  let hashed = bcrypt.hashSync(password, salt);

  return hashed;
};

const comparePassword = (password1, password2) => {
  return bcrypt.compareSync(password1, password2);
};

module.exports = {
  generatePassword,
  comparePassword,
};
