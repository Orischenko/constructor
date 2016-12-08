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

        //this._removeButton = this._el.querySelector('[data-element="remove-button"]');

        this._el.addEventListener('click', (event) => {
            if(!event.target.closest('[data-element="remove-button"]')) return;

            let layerContainer = event.target.closest('[data-element="layerContainer"]');

            let parentElement = event.target.parentElement.parentElement;

            //parentElement.innerHTML = '';
            parentElement.remove('[data-element="layerContainer"]');

            let customEvent = new CustomEvent('removeButtonSelected', {
                detail: layerContainer.dataset.layerId
            });

            this._el.dispatchEvent(customEvent);
        });
    }

    _render(print) {
        this._el.innerHTML += this._compiledTemplate({
            print: print
        });
    }

    _getElement() {
        return this._el;
    }
}

module.exports = PageLayers;