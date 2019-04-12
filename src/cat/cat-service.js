'use strict';
const cats = require('./cats.json');

const CatService = {
  getCat() {
    return cats;
  }
};

module.exports = CatService;
