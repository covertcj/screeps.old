var harvesterRole = require('role.harvester'),
    upgraderRole  = require('role.upgrader')
    builderRole  = require('role.builder');

function cleanMemory() {
  for (var name in Memory.creeps) {
    if (Game.creeps[name]) continue;
    delete Memory.creeps[name];
    console.log('Deleted memory for dead creep: ' + name);
  }
}

function spawnAndProcess(role, minCreeps) {
  var creeps = role.get(Game.creeps);

  if (creeps.length < minCreeps) {
    role.spawn(Game.spawns.Spawn1);
  }

  _.each(creeps, role.loop);
}

var main = Object.freeze({
  loop: function () {
    cleanMemory();

    spawnAndProcess(harvesterRole, 2);
    spawnAndProcess(upgraderRole, 2);
    spawnAndProcess(builderRole, 2);
  }
});

module.exports = main;
