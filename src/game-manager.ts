import Harvester from "./roles/harvester";

/**
 * Singleton object.
 * Since singleton classes are considered anti-pattern in Typescript, we can effectively use namespaces.
 * Namespace's are like internal modules in your Typescript application. Since GameManager doesn't need multiple instances
 * we can use it as singleton.
 */
export namespace GameManager {
    export function globalBootstrap() {
        console.log("Bootstrapping AI...");
        console.log("AI bootstrap complete.");
    }

    export function loop() {
        for (let name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log("Clearing memory for dead creep: " + name);
            }
        }

        let harvesters = Harvester.get(Game.creeps);
        if (harvesters.length < 2) {
            Harvester.createCreep(Game.spawns['Spawn1']);
        }

        _.each(harvesters, (h) => Harvester.loop(h));
    }
}
