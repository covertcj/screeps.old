var roleBuilder = require('roleBuilder'),
    resources = require('resources');

var builder = roleBuilder.build('builder');

builder.loop = function (creep) {
  if (creep.memory.building && creep.carry.energy === 0) {
    creep.memory.building = false;
  }

  if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
    creep.memory.building = true;
  }

  if (creep.memory.building) {
    var targets = creep.room.find(FIND_CONSTRUCTION_SITES, { filter: s => s.structureType !== STRUCTURE_ROAD });
    if (!targets.length) {
      targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (!targets.length) return;
    }

    if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(targets[0]);
    }
  } else {
    resources.gather(creep);
  }
};

module.exports = builder;
