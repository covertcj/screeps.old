var harvesterRole = require('role.harvester'),
    upgraderRole  = require('role.upgrader');

var main = Object.freeze({
  loop: function () {
    var harvesters = harvesterRole.get(Game.creeps);
    if (harvesters.length < 2) {
      harvesterRole.spawn(Game.spawns.Spawn1);
    }

    _.each(harvesters, harvesterRole.loop);

    var upgraders = upgraderRole.get(Game.creeps);
    if (upgraders < 1) {
      upgraderRole.spawn(Game.spawns.Spawn1);
    }

    _.each(upgraders, upgraderRole.loop);
  }
});

module.exports = main;
