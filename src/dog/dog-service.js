'use strict';
const dogs = require('./dogs.json');
const DogService = {
  getDog() {
    return dogs;
  }
};

module.exports = DogService;
