var resources = Object.freeze({
  gather: function (creep) {
    var sources = creep.room.find(FIND_SOURCES);
    if (!sources || creep.carry.energy >= creep.carryCapacity) return;

    if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(sources[0]);
    }
  }
});

module.exports = resources;
