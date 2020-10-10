const userService = require('../../services/user');

const { createUser } = userService;

const signUp = async (req, res, next) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    return await createUser(username, password);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  signUp,
};
