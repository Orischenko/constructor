/**
 * Plugin Name: Print Constructor
 * Type plugin: single page application
 * Author: Orischenko Alexander
 */

'use strict';

let PageBase = require('./base');
let PagePrint = require('./print');
let PageColor = require('./color');
let PageView = require('./view');
let PageLayers = require('./layers');

let defaultProjects = [
    {
        "age": 0,
        "id": "white-t-shirt",
        "imageUrl": "img/base/white-t-shirt.png",
        "name": "White T-Shirt"
    },
    {
        "age": 1,
        "id": "white-cup",
        "imageUrl": "img/base/white-cup.jpg",
        "name": "White Cup"
    }
];
let defaultPrints = [
    {
        "age": 0,
        "id": "print-birds",
        "imageUrl": "img/prints/print-birds.png",
        "name": "Print Birds"
    },
    {
        "age": 1,
        "id": "print-pagoda",
        "imageUrl": "img/prints/print-pagoda.png",
        "name": "Print Pagoda"
    },
    {
        "age": 2,
        "id": "print-tourist-area",
        "imageUrl": "img/prints/print-tourist-area.png",
        "name": "Print Tourist Area"
    },
    {
        "age": 3,
        "id": "print-waterfall",
        "imageUrl": "img/prints/print-waterfall.png",
        "name": "Print Waterfall"
    },
    {
        "age": 4,
        "id": "print-ta-dung",
        "imageUrl": "img/prints/print-ta-dung.png",
        "name": "Print Ta Dung"
    },
    {
        "age": 5,
        "id": "print-lake",
        "imageUrl": "img/prints/print-lake.png",
        "name": "Print Lake"
    }
];


class PageController{
    constructor(options) {
        this._el = options.element;

        this._base = new PageBase({
            element: this._el.querySelector('[data-component="chooseBase"]'),
            baseItems: defaultProjects
        });

        this._print = new PagePrint({
            element: this._el.querySelector('[data-component="choosePrint"]'),
            prints: defaultPrints
        });

        this._loadPrints();

        this._color = new PageColor({
            element: this._el.querySelector('[data-component="chooseColor"]')
        });

        this._view = new PageView({
            element: this._el.querySelector('[data-component="viewContainer"]')
        });

        this._layers = new PageLayers({
            element: this._el.querySelector('[data-component="layersContainer"]')
        });

        this._base._getElement().addEventListener('baseSelected', this._onBaseSelected.bind(this));
        this._print._getElement().addEventListener('tabSelected', this._onTabSelected.bind(this));
        this._print._getElement().addEventListener('printSelected', this._onPrintSelected.bind(this));
    }

    _onPrintSelected(event) {
        let printId = event.detail;

        let printDetails = this._getPrintById(printId);

        this._layers._render(printDetails);

        console.log( printId );
    }

    _getPrintById(printId) {
        return defaultPrints.filter((print) => {
            return print.id === printId;
        })[0];
    }

    _loadPrints() {
        let prints = this._print._getPrintElements();

        this._print._render(prints);

        this._print._setPrintImagesEvent();
    }

    _onTabSelected(event) {
        let tabId = event.detail;

        //---------------------
        this._print._setTabContent(tabId);
        this._print._setButtonTabClass(tabId);
        //---------------------
    }

    _onBaseSelected(event) {
        let baseId = event.detail.id;

        let baseDetails = this._getBaseById(baseId);

        this._view._render(baseDetails);
    }

    _getBaseById(baseId) {
        return defaultProjects.filter((item) => {
            return item.id === baseId;
        })[0];
    }
}

module.exports = PageController;

