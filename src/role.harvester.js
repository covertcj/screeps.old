var roleBuilder = require('roleBuilder'),
    resources = require('resources');

var harvester = roleBuilder.build('harvester');

harvester.loop = function (creep) {
  var spawn = Game.spawns.Spawn1;

  if (creep.carry.energy < creep.carryCapacity) {
    resources.gather(creep);
  } else if (spawn.energy < spawn.energyCapacity) {
    if (creep.transfer(spawn, RESOURCE_ENERGY) !== ERR_NOT_IN_RANGE) return;

    creep.moveTo(Game.spawns.Spawn1);
  }
};

module.exports = Object.freeze(harvester);
