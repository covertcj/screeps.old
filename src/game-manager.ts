import * as Builder from "./roles/builder";
import * as Harvester from "./roles/harvester";
import * as Upgrader from "./roles/upgrader";

/**
 * Singleton object.
 * Since singleton classes are considered anti-pattern in Typescript, we can effectively use namespaces.
 * Namespace's are like internal modules in your Typescript application. Since GameManager doesn't need multiple instances
 * we can use it as singleton.
 */
export namespace GameManager {
    // this is called once on the initial load of the code; however, the code in
    // screeps seems to reload quite frequently.  It could be useful to do some
    // sort of pre-caching here
    export function globalBootstrap() {
    }

    export function loop() {
        for (let name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log("Clearing memory for dead creep: " + name);
            }
        }

        let harvesters = Harvester.get(Game.creeps);
        let builders = Builder.get(Game.creeps);
        let upgrader = Upgrader.get(Game.creeps);

        _.each(harvesters, (c) => Harvester.loop(c));
        _.each(builders, (c) => Upgrader.loop(c));
        _.each(upgrader, (c) => Upgrader.loop(c));


        if (harvesters.length < 2) {
            Harvester.createCreep(Game.spawns['Spawn1']);
        } else if (builders.length < 2) {
            Builder.createCreep(Game.spawns['Spawn1']);
        } else if (upgrader.length < 2) {
            Upgrader.createCreep(Game.spawns['Spawn1']);
        }
    }
}
