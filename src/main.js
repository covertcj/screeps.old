var harvesterRole = require('roleHarvester');

var main = Object.freeze({
  loop: function () {
    _.each(harvesterRole.get(Game.creeps), (h) => harvesterRole.loop(h));
  }
});

module.exports = main;
