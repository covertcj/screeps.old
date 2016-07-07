var harvesterRole = require('role.harvester'),
    upgraderRole  = require('role.upgrader')
    builderRole  = require('role.builder');

function spawnAndProcess(role, minCreeps) {
  var creeps = role.get(Game.creeps);

  if (creeps.length < minCreeps) {
    role.spawn(Game.spawns.Spawn1);
  }

  _.each(creeps, role.loop);
}

var main = Object.freeze({
  loop: function () {
    spawnAndProcess(harvesterRole, 2);
    spawnAndProcess(upgraderRole, 1);
    spawnAndProcess(builderRole, 1);
  }
});

module.exports = main;
