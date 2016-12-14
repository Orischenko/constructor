/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let compiledTemplate = require('./../templates/constructor-prints-template.hbs');

class PagePrint{
    constructor(options) {
        this._el = options.element;

        this._prints = options.prints;

        this._el.addEventListener('click', this._onTabLinkClick.bind(this));
    }

    _onTabLinkClick(event) {
        if(!event.target.closest('[data-tab-element="tabLink"]')) {
            return;
        }

        event.preventDefault();

        let tabLink = event.target.closest('[data-tab-element="tabLink"]');

        let customEvent = new CustomEvent('tabSelected', {
            detail: tabLink.dataset.tabId
        });

        this._el.dispatchEvent(customEvent);
    }

    _setPrintImagesEvent() {
        let projects = this._el.querySelector('[data-element="printImages"]');

        projects.addEventListener('click', (event) => {
            if(!event.target.closest('[data-element="printLink"]')) {
                return;
            }

            event.preventDefault();

            let printContainer = event.target.closest('[data-element="printContainer"]');

            printContainer.classList.add('active');

            let customEvent = new CustomEvent('printSelected', {
                detail: printContainer.dataset.printId
            });

            this._el.dispatchEvent(customEvent);
        });
    }

    _render(prints) {
        this._el.innerHTML += compiledTemplate({
            prints: prints
        });
    }

    _setButtonTabClass(tabId) {
        this._tabService(tabId, {
            element: this._el.querySelectorAll('[data-tab-element="tabLink"]'),

            success: (tabElementArray) => {
                tabElementArray.forEach((button) => {
                    button.classList.remove('active');
                });

                this._el.querySelector(`[data-tab-id=${tabId}]`).classList.add('active');
            }
        });
    }

    _setTabContent(tabId) {
        this._tabService(tabId, {
            element: this._el.querySelectorAll('[data-tab-element="tab"]'),

            success: (tabElementArray) => {
                tabElementArray.forEach((tab) => {
                    tab.style.display = 'none';
                });

                this._el.querySelector(`[data-content-id=${tabId}]`).style.display = 'block';
            }
        });
    }

    //a general method for creating tabs
    _tabService(tabId, options) {
        let tabElement = options.element;

        let tabElementArray = Array.from(tabElement);

        options.success(tabElementArray);
    }

    _getInputValue() {
        let field = this._el.querySelector('[data-element="field"]');

        return field.value;
    }

    _getPrintElements() {
        return this._prints;
    }

    _getElement() {
        return this._el;
    }
}

module.exports = PagePrint;