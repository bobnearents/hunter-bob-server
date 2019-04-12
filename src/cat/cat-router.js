'use strict';
const CatService = require('./cat-service');

const express = require('express');

const CatRouter = express.Router();

CatRouter.route('/').get((req, res, next) => {
  res.json(CatService.getCat());
});

module.exports = CatRouter;
