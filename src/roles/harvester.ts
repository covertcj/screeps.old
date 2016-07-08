const roleName = 'harvester';

export function loop(creep: Creep) {
    if (creep.carry.energy < creep.carryCapacity) {
        let source = <Source>creep.pos.findClosestByPath(FIND_SOURCES);
        if (!source) return;

        if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    } else {
        let targets = <Structure[]>creep.room.find(FIND_STRUCTURES, {
            filter: (s: any) => (s.structureType === STRUCTURE_EXTENSION || s.structureType === STRUCTURE_SPAWN) &&
                s.energy < s.energyCapacity
        });

        if (targets.length > 0) {
            let target = targets[0];
            if (creep.transfer(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
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