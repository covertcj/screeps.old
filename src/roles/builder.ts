const roleName = 'builder';

export function loop(creep: Creep) {
    if (creep.memory.building && creep.carry.energy === 0) {
        creep.memory.building = false;
    }

    if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
        creep.memory.building = true;
    }

    if (creep.memory.building) {
        // try to find construction sites, prioritizing non-roads
        let targets = <ConstructionSite[]>creep.room.find(FIND_CONSTRUCTION_SITES, { filter: (s: any) => s.structureType !== STRUCTURE_ROAD });
        if (!targets.length) {
            targets = <ConstructionSite[]>creep.room.find(FIND_CONSTRUCTION_SITES);
        }

        // build the found target or repair if no targets are found
        if (targets.length) {
            let target = targets[0];
            if (creep.build(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        } else {
            // TODO: Deprioritize roads.
            let repairTarget = <Structure>creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: (s: Structure) => s.hits < s.hitsMax * .65 });
            if (!repairTarget) return;

            if (creep.repair(repairTarget) === ERR_NOT_IN_RANGE) {
                creep.moveTo(repairTarget);
            }
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