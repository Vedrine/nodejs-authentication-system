const sql = require('../loaders/db');

// CONSTRUCTOR
const User = function (user) {
  this.email = customer.email;
  this.name = customer.name;
  this.active = customer.active;
};

User.create = (newUser, result) => {
  sql.query('INSERT INTO user SET ?', newUser, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created user: ', { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

module.exports = User;
