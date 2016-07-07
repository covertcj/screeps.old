var harvesterRole = require('role.harvester');

var main = Object.freeze({
  loop: function () {
    var harvesters = harvesterRole.get(Game.creeps);
    if (harvesters.length < 2) {
      harvesterRole.spawn(Game.spawns.Spawn1);
    }

    _.each(harvesters, harvesterRole.loop);
  }
});

module.exports = main;
