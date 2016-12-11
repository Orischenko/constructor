/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let compiledTemplate = require('./../templates/constructor-layers-template.hbs');

class PageLayers{
    constructor(options) {
        this._el = options.element;

        this._el.addEventListener('click', this._onLayerRemoveClick.bind(this));
        this._el.addEventListener('click', this._onLayerRotateClick.bind(this));
        this._el.addEventListener('click', this._onLayerUpClick.bind(this));
    }

    _onLayerUpClick() {
        let path = '[data-element="up"]';

        this._controllerService(path, {
            event: 'upButtonSelected',

            success: () => {
                let layerArray = Array.from( this._el.querySelectorAll('[data-element="layerContainer"]') );

                let parentElement = event.target.parentElement.parentElement.parentElement;

                layerArray.forEach((layer) => {
                    layer.style.order = '0';
                });

                parentElement.style.order = '3';
            }
        });
    }

    _onLayerRotateClick() {
        let path = '[data-element="rotate"]';

        this._controllerService(path, {
            event: 'rotateButtonSelected'
        });
    }

    _onLayerRemoveClick(event) {
        let path = '[data-element="remove-button"]';

        this._controllerService(path, {
            event: 'removeButtonSelected',

            success: () => {
                let parentElement = event.target.parentElement.parentElement;

                parentElement.remove('[data-element="layerContainer"]');
            }
        });
    }

    //a general method for controller buttons
    _controllerService(path, options) {
        if(!event.target.closest(path)) return;

        event.preventDefault();

        let layerContainer = event.target.closest('[data-element="layerContainer"]');

        if(options.success) {
            options.success();
        }

        let customEvent = new CustomEvent(options.event, {
            detail: layerContainer.dataset.layerId
        });

        this._el.dispatchEvent(customEvent);
    }

    _render(print) {
        this._el.innerHTML += compiledTemplate({
            print: print
        });
    }

    _getElement() {
        return this._el;
    }
}

module.exports = PageLayers;