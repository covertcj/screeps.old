var builder = Object.freeze({
  build: function (role) {
    return {
      spawn: function (spawner, parts) {
        parts = parts || [MOVE, CARRY, WORK];

        if (spawner.canCreateCreep(parts) === OK) {
          var newHarvester = spawner.createCreep(parts, undefined, { role });
          console.log('Spawning a new ' + role + ': (' + spawner.name + ',' + newHarvester + ')');
        }

        return newHarvester;
      },

      get: function (creeps) {
        return _.filter(creeps, (c) => c.memory.role === role);
      }
    };
  }
});

module.exports = builder;
