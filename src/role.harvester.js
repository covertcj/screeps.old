var harvester = Object.freeze({
  loop: function (creep) {
    var sources = creep.room.find(FIND_SOURCES);
    if (!sources) return;

    if (creep.carry.energy < creep.carryCapacity) {
      if (creep.harvest(sources[0]) !== ERR_NOT_IN_RANGE) return;

      creep.moveTo(sources[0]);
    } else if (Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
      if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) !== ERR_NOT_IN_RANGE) return;

      creep.moveTo(Game.spawns.Spawn1);
    }
  },

  create: function (spawn) {
    console.log('Creating a new harvester: (' + spawn.name + ',' + newHarvester + ')');
    var newHarvester = spawn.createCreep([MOVE, CARRY, WORK], undefined, { role: 'harvester' });
  },

  get: function (creeps) {
    return _.filter(Game.creeps, (c) => c.memory.role === this.type);
  },

  type: 'harvester'
});

module.exports = harvester;
