const { Router } = require('express');
// const jwt = require('jsonwebtoken');

// const { exchangeCodeForToken } = require('../services/github');

// const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

module.exports = Router()
  .get('/login', async (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}&scope=user&redirect_uri=${process.env.GH_REDIRECCT_URI}`);
  });
