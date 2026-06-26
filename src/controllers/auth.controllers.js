const express = require('express');

const register = (req, res) => {
  console.log('register')
  res.send('register')
}

const login = (req, res) => {
  console.log('login')
  res.send('login')
}

module.exports = { login, register }