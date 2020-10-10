const User = require('../models/user');

// CREATE USER
const createUser = async (username, password) => {
  try {
    const user = {
      username: username,
      password: password,
    };

    return await User.create(user);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createUser,
};
