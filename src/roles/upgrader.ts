const roleName = 'upgrader';

export function loop(creep: Creep) {
    if (creep.memory.upgrading && creep.carry.energy === 0) {
        creep.memory.upgrading = false;
    }

    if (!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity) {
        creep.memory.upgrading = true;
    }

    if (creep.memory.upgrading) {
        let controller = creep.room.controller;
        if (creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
            creep.moveTo(controller);
        }
    } else {
        let source = <Source>creep.pos.findClosestByPath(FIND_SOURCES);
        if (!source) return;

        if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    }
}

export function createCreep(spawn: Spawn, bodyParts: string[] = [WORK, CARRY, MOVE]) : Creep {
    let creep : Creep;

    if (spawn.canCreateCreep(bodyParts) === OK) {
        const name = <string>spawn.createCreep(bodyParts, undefined, { role: roleName });
        creep = Game.creeps[name];
    }

    return creep;
}

export function get(creeps: {[name: string]: Creep}) : Creep[] {
    return _.filter(creeps, (c) => c.memory.role === roleName);
}