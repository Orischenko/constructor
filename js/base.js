/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let template = document.getElementById('constructor-base-template').innerHTML;

class PageBase{
    constructor(options) {
        this._compiletTemplate = _.template(template);

        this._el = options.element;

        this._render(options.baseItems);

        this._el.addEventListener('click', (event) => {
            if(!event.target.closest('[data-element="baseLink"]')) {
                return;
            }

            event.preventDefault();

            let baseContainer = event.target.closest('[data-element="baseContainer"]');

            this._getBaseItems();

            baseContainer.classList.add('active');

            let customEvent = new CustomEvent('baseSelected', {
                detail: {
                    id: baseContainer.dataset.baseId
                }
            });

            this._el.dispatchEvent(customEvent);
        });
    }

    _getBaseItems() {
        let baseItems = this._el.querySelectorAll('[data-element="baseContainer"]');

        let baseItemsArray = Array.prototype.slice.call(baseItems);

        baseItemsArray.forEach((li) => {
            li.classList.remove('active');
        });
    }

    _render(baseItems) {
        this._el.innerHTML += this._compiletTemplate({
            baseItems: baseItems
        });
    }

    _getElement() {
        return this._el;
    }
}

module.exports = PageBase;