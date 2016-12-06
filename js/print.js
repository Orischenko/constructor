/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let template = document.getElementById('constructor-prints-template').innerHTML;

class PagePrint{
    constructor(options) {

        this._compiledTemplate = _.template(template);

        this._el = options.element;

        this._prints = options.prints;

        this._el.addEventListener('click', (event) => {
            if(!event.target.closest('[data-tab-element="tabLink"]')) {
                return;
            }

            event.preventDefault();

            let tabLink = event.target.closest('[data-tab-element="tabLink"]');

            let customEvent = new CustomEvent('tabSelected', {
                detail: tabLink.dataset.tabId
            });

            this._el.dispatchEvent(customEvent);
        });
    }

    _setPrintImagesEvent() {
        let projects = this._el.querySelector('[data-element="printImages"]');

        projects.addEventListener('click', (event) => {
            if(!event.target.closest('[data-element="printLink"]')) {
                return;
            }

            event.preventDefault();

            let printContainer = event.target.closest('[data-element="printContainer"]');

            let customEvent = new CustomEvent('printSelected', {
                detail: printContainer.dataset.printId
            });

            this._el.dispatchEvent(customEvent);
        });
    }

    _render(prints) {
        this._el.innerHTML += this._compiledTemplate({
            prints: prints
        });
    }

    //---------------------

    _setButtonTabClass(tabId) {
        let allTabButtons = this._el.querySelectorAll('[data-tab-element="tabLink"]');

        let allTabButtonsArray = Array.prototype.slice.call(allTabButtons);

        allTabButtonsArray.forEach((button) => {
            button.classList.remove('active');
        });

        this._el.querySelector(`[data-tab-id=${tabId}]`).classList.add('active');
    }

    _setTabContent(tabId) {
        let allTabs = this._el.querySelectorAll('[data-tab-element="tab"]');

        let allTabsArray = Array.prototype.slice.call(allTabs);

        allTabsArray.forEach((tab) => {
            tab.style.display = 'none';
        });

        this._el.querySelector(`[data-content-id=${tabId}]`).style.display = 'block';
    }

    //---------------------

    _getPrintElements() {
        return this._prints;
    }

    _getElement() {
        return this._el;
    }
}

module.exports = PagePrint;