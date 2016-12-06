/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let template = `
    
`;

class PageLayers{
    constructor(options) {
        this._el = options.element;
    }

    _render(print) {
        let html = '<div class="layer-item">';

        html += `
            <button class="remove-button"></button>
            <figure><img alt="${print.id}" src="${print.imageUrl}"></figure>
            <div class="caption">
                <h6>${print.name}</h6>
            </div>
            <div class="controllers">
                <a href="#!/print-constructor/" class="rotate"></a>
                <a href="#!/print-constructor/" class="up"></a>
                <a href="#!/print-constructor/" class="down"></a>
            </div>
        `;

        html += '</div>';

        this._el.innerHTML += html;

        console.log( print );
    }
}

module.exports = PageLayers;