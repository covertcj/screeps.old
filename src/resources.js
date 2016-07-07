var resources = Object.freeze({
  gather: function (creep) {
    //var sources = creep.room.find(FIND_SOURCES);
    var source = creep.pos.findClosestByPath(FIND_SOURCES);
    if (!source || creep.carry.energy >= creep.carryCapacity) return;

    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source);
    }
  }
});

module.exports = resources;
