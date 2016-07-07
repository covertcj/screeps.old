var roleBuilder = require('roleBuilder'),
    resources = require('resources');

var upgrader = roleBuilder.build('upgrader');

upgrader.loop = function (creep) {
  if (creep.memory.upgrading && creep.carry.energy === 0) {
    creep.memory.upgrading = false;
  }

  if (!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
    creep.memory.upgrading = true;
  }

  if (creep.memory.upgrading) {
    var controller = creep.room.controller;
    if (creep.upgradeController(controller, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(controller);
    }
  }
  else {
    resources.gather(creep);
  }
}

module.exports = upgrader;
