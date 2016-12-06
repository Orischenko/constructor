/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

class PageColor{
    constructor(options) {
        this._el = options.element;
    }
}

module.exports = PageColor;