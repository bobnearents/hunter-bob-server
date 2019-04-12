'use strict';
const DogService = require('./dog-service');

const express = require('express');

const DogRouter = express.Router();

DogRouter.route('/').get((req, res, next) => {
  res.json(DogService.getDog());
});

module.exports = DogRouter;
