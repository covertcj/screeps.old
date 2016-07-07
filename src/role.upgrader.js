var roleBuilder = require('roleBuilder'),
    resources = require('resources');

var upgrader = roleBuilder.build('upgrader');

upgrader.loop = function (creep) {
    if (creep.carry.energy < creep.carryCapacity) {
      resources.gather(creep);
    } else {
      var controller = creep.room.controller;
      if (creep.transfer(controller, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns.Spawn1);
      }
    }
}

module.exports = upgrader;
