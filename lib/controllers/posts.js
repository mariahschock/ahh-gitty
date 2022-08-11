const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const { Post } = require('../models/Post');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const getPosts = await Post.getAll();
      res.json(getPosts);
    } catch (e) {
      next(e);
    }
  });
