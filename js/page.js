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

let defaultBases = [
    {
        "age": 0,
        "id": "white-t-shirt",
        "imageUrl": "img/base/white-t-shirt.png",
        "name": "White T-Shirt"
    },
    {
        "age": 1,
        "id": "white-cup",
        "imageUrl": "img/base/white-cup.png",
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
            baseItems: defaultBases
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

        //render 1st bases element
        this._view._render(defaultBases[0]);

        this._layers = new PageLayers({
            element: this._el.querySelector('[data-component="layersContainer"]')
        });

        this._base._getElement().addEventListener('baseSelected', this._onBaseSelected.bind(this));
        this._print._getElement().addEventListener('tabSelected', this._onTabSelected.bind(this));
        this._print._getElement().addEventListener('printSelected', this._onPrintSelected.bind(this));
        this._layers._getElement().addEventListener('removeButtonSelected', this._onRemoveButtonSelected.bind(this));
        this._layers._getElement().addEventListener('rotateButtonSelected', this._onRotateButtonSelected.bind(this));
        this._layers._getElement().addEventListener('upButtonSelected', this._onUpButtonSelected.bind(this));
    }

    _onUpButtonSelected(event) {
        let layerId = event.detail;

        let layerArray = Array.from( this._view._getElement().querySelectorAll('[data-element="viewContainer"]') );

        layerArray.forEach((layer) => {
            layer.style.zIndex = '0';
        });

        this._getViewByIdOnClickController(layerId).style.zIndex = '9999';
    }

    _onRotateButtonSelected(event) {
        let layerId = event.detail;

        let degrees = 45;

        this._getViewByIdOnClickController(layerId).style.WebkitTransform += `rotate(${degrees}deg)`;
    }

    _onRemoveButtonSelected(event) {
        let layerId = event.detail;

        this._getPrintByIdOnRemove(layerId).classList.remove('active');

        this._getViewByIdOnClickController(layerId).remove('[data-element="viewContainer"]');
    }

    _getPrintByIdOnRemove(layerId) {
        let printArray = Array.from( this._print._getElement().querySelectorAll('[data-element="printContainer"]') );

        return printArray.filter((print) => {
            return print.dataset.printId === layerId;
        })[0];
    }

    _getViewByIdOnClickController(layerId) {
        let layerArray = Array.from( this._view._getElement().querySelectorAll('[data-element="viewContainer"]') );

        return layerArray.filter((layer) => {
            return layer.dataset.viewId === layerId;
        })[0];
    }

    _onPrintSelected(event) {
        let printId = event.detail;

        let printDetails = this._getPrintById(printId);

        this._layers._render(printDetails);

        this._view._renderDrug(printDetails);
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

        this._print._setTabContent(tabId);

        this._print._setButtonTabClass(tabId);
    }

    _onBaseSelected(event) {
        let baseId = event.detail.id;

        let baseDetails = this._getBaseById(baseId);

        this._view._render(baseDetails);
    }

    _getBaseById(baseId) {
        return defaultBases.filter((item) => {
            return item.id === baseId;
        })[0];
    }
}

module.exports = PageController;

