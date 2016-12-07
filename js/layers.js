/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let template = document.getElementById('constructor-layers-template').innerHTML;

class PageLayers{
    constructor(options) {
        this._compiledTemplate = _.template(template);

        this._el = options.element;
    }

    _render(print) {
        this._el.innerHTML += this._compiledTemplate({
            print: print
        });
    }
}

module.exports = PageLayers;