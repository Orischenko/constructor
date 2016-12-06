/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let template = document.getElementById('constructor-viewer-template').innerHTML;

class PageView{
    constructor(options) {
        this._compiledTemplate = _.template(template);

        this._el = options.element;
    }

    _render(item) {
        this._el.innerHTML = this._compiledTemplate({
            item: item
        });
    }
}

module.exports = PageView;