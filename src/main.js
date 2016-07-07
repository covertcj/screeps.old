var harvesterRole = require('role.harvester');

var main = Object.freeze({
  loop: function () {
    var harvesters = harvesterRole.get(Game.creeps);

    if (harvesters.length < 2) {
      var newHarvester = Game.spawns.Spawn1.createCreep([MOVE, CARRY, WORK], undefined, { role: 'harvester' });
      console.log('Creating a new harvester: ' + newHarvester);
    }

    _.each(harvester, harvesterRole.loop);
  }
});

module.exports = main;
