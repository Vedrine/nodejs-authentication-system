const express = require('express');
const routes = require('express').Router();
const userController = require('../controllers/user');

routes.get('/signup', function (req, res) {
  // SIGN UP PAGE
  res.render('pages/signup');
});

// SIGN UP
routes.post('/signup', userController.signUp);

module.exports = routes;
