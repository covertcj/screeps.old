/* global module:true */

import { loop as mainLoop } from './gameManager.js';

module.exports.loop = function() {
    mainLoop();
};