/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let styleBuild = require('./style');

let PageController = require('./page');

let page = new PageController({
    element: document.getElementById('print-constructor')
});