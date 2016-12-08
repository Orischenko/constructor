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
        this._renderService(item, {
            element: this._el.querySelector('[data-element="base-print-container"]'),

            success: (el) => {
                el.innerHTML = this._compiledTemplate({
                    item: item
                });
            }
        });
    }

    _renderDrug(item) {
        this._renderService(item, {
            element: this._el.querySelector('[data-element="drop-print-container"]'),

            success: (el) => {
                el.innerHTML += this._compiledTemplate({
                    item: item
                });
            }
        });
    }

    //a general method for creating viewer dom
    _renderService(item, options) {
        let el = options.element;

        options.success(el);
    }

    _getElement() {
        return this._el;
    }
}

module.exports = PageView;