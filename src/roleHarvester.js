var harvester = Object.freeze({
  loop: function (creep) {

  },

  get: function (creeps) {
    var harvesters = _.filter(Game.creeps, (c) => c.role === this.type);
  },

  type: 'harvester'
});

module.exports = harvester;
