/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var styleBuild = __webpack_require__(1);
	
	var PageController = __webpack_require__(6);
	
	var page = new PageController({
	  element: document.getElementById('print-constructor')
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var style = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,900italic,900,700italic,700,500italic,500,400italic,300italic,300,100italic,100);", ""]);
	
	// module
	exports.push([module.id, "body {\n  font: 300 14px/1.5em Roboto;\n  letter-spacing: .1px;\n  color: #888;\n  background: #eee;\n  margin: 0; }\n\na, a:hover, a:focus {\n  text-decoration: none; }\n\na, button {\n  -webkit-transition: all .35s ease;\n  -o-transition: all .35s ease;\n  transition: all .35s ease; }\n\nh2 {\n  font-size: 42px;\n  font-weight: 500;\n  margin: 0 0 30px; }\n\nh6 {\n  margin: 0 0 30px; }\n\nh2, h3, h4, h5, h6 {\n  color: #0d0d0d; }\n\n#content {\n  padding: 30px 0; }\n\n.box {\n  background: #fff;\n  border-radius: 2px;\n  padding: 25px 15px;\n  margin: 0 0 30px;\n  box-sizing: border-box;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3); }\n\n#print-catalogue {\n  padding: 30px 0; }\n\n.content figure img {\n  width: 100%; }\n\n.content .box {\n  height: 630px; }\n\n.sidebar-right .box {\n  max-height: 630px;\n  overflow-x: auto; }\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  ul li figure {\n    padding: 0; }\n    ul li figure img {\n      width: 100%; }\n  ul li a {\n    display: inline-block; }\n\n.base-items {\n  display: flex;\n  justify-content: center; }\n  .base-items li {\n    border: 1px solid #fff;\n    width: 70px;\n    margin: 0 20px; }\n    .base-items li.active {\n      border: 1px solid #00bcd4; }\n\n.tabs {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #eee; }\n  .tabs a {\n    color: #00bcd4;\n    background: #fff;\n    padding: 5px 10px; }\n    .tabs a:hover, .tabs a.active {\n      color: #fff;\n      background: #00bcd4; }\n\n.all_tabs {\n  padding-top: 30px; }\n  .all_tabs > div {\n    display: none; }\n    .all_tabs > div:first-child {\n      display: block; }\n\n.prints {\n  column-count: 3; }\n  .prints li {\n    margin: 0 0 10px; }\n    .prints li a {\n      border: 1px solid transparent;\n      border-radius: 50%;\n      padding: 2px; }\n    .prints li img {\n      border-radius: 50%; }\n    .prints li.active a {\n      border-color: #00bcd4; }\n\n.layer-item {\n  overflow: hidden;\n  margin: 0 0 5px;\n  border: 1px solid #eee;\n  padding: 10px 30px 10px 10px;\n  position: relative; }\n  .layer-item:last-child {\n    margin-bottom: 0; }\n  .layer-item figure {\n    width: 30%;\n    float: left;\n    margin-right: 10px;\n    border-radius: 50%; }\n    .layer-item figure img {\n      width: 100%; }\n  .layer-item .remove-button {\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    padding: 0;\n    border: none;\n    box-shadow: none;\n    background: none;\n    line-height: 1em;\n    color: #ccc; }\n    .layer-item .remove-button:focus {\n      outline: none; }\n    .layer-item .remove-button:before {\n      content: '\\E5CD';\n      font-family: 'Material Icons';\n      font-size: 16px;\n      color: inherit; }\n    .layer-item .remove-button:hover {\n      color: red; }\n  .layer-item .caption {\n    overflow: hidden; }\n  .layer-item .controllers {\n    display: flex;\n    justify-content: flex-end;\n    transform: translateX(25px); }\n    .layer-item .controllers a {\n      color: #00bcd4;\n      margin-left: 10px; }\n      .layer-item .controllers a:before {\n        font-family: 'Material Icons';\n        font-size: 16px;\n        color: inherit; }\n      .layer-item .controllers a.rotate:before {\n        content: '\\E41A'; }\n      .layer-item .controllers a.up:before {\n        content: '\\E25A'; }\n      .layer-item .controllers a.down:before {\n        content: '\\E258'; }\n      .layer-item .controllers a:hover {\n        color: red; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageBase = __webpack_require__(7);
	var PagePrint = __webpack_require__(8);
	var PageColor = __webpack_require__(9);
	var PageView = __webpack_require__(10);
	var PageLayers = __webpack_require__(11);
	
	var defaultProjects = [{
	    "age": 0,
	    "id": "white-t-shirt",
	    "imageUrl": "img/base/white-t-shirt.png",
	    "name": "White T-Shirt"
	}, {
	    "age": 1,
	    "id": "white-cup",
	    "imageUrl": "img/base/white-cup.jpg",
	    "name": "White Cup"
	}];
	var defaultPrints = [{
	    "age": 0,
	    "id": "print-birds",
	    "imageUrl": "img/prints/print-birds.png",
	    "name": "Print Birds"
	}, {
	    "age": 1,
	    "id": "print-pagoda",
	    "imageUrl": "img/prints/print-pagoda.png",
	    "name": "Print Pagoda"
	}, {
	    "age": 2,
	    "id": "print-tourist-area",
	    "imageUrl": "img/prints/print-tourist-area.png",
	    "name": "Print Tourist Area"
	}, {
	    "age": 3,
	    "id": "print-waterfall",
	    "imageUrl": "img/prints/print-waterfall.png",
	    "name": "Print Waterfall"
	}, {
	    "age": 4,
	    "id": "print-ta-dung",
	    "imageUrl": "img/prints/print-ta-dung.png",
	    "name": "Print Ta Dung"
	}, {
	    "age": 5,
	    "id": "print-lake",
	    "imageUrl": "img/prints/print-lake.png",
	    "name": "Print Lake"
	}];
	
	var PageController = function () {
	    function PageController(options) {
	        _classCallCheck(this, PageController);
	
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
	
	    _createClass(PageController, [{
	        key: '_onPrintSelected',
	        value: function _onPrintSelected(event) {
	            var printId = event.detail;
	
	            var printDetails = this._getPrintById(printId);
	
	            this._layers._render(printDetails);
	
	            console.log(printId);
	        }
	    }, {
	        key: '_getPrintById',
	        value: function _getPrintById(printId) {
	            return defaultPrints.filter(function (print) {
	                return print.id === printId;
	            })[0];
	        }
	    }, {
	        key: '_loadPrints',
	        value: function _loadPrints() {
	            var prints = this._print._getPrintElements();
	
	            this._print._render(prints);
	
	            this._print._setPrintImagesEvent();
	        }
	    }, {
	        key: '_onTabSelected',
	        value: function _onTabSelected(event) {
	            var tabId = event.detail;
	
	            //---------------------
	            this._print._setTabContent(tabId);
	            this._print._setButtonTabClass(tabId);
	            //---------------------
	        }
	    }, {
	        key: '_onBaseSelected',
	        value: function _onBaseSelected(event) {
	            var baseId = event.detail.id;
	
	            var baseDetails = this._getBaseById(baseId);
	
	            this._view._render(baseDetails);
	        }
	    }, {
	        key: '_getBaseById',
	        value: function _getBaseById(baseId) {
	            return defaultProjects.filter(function (item) {
	                return item.id === baseId;
	            })[0];
	        }
	    }]);
	
	    return PageController;
	}();
	
	module.exports = PageController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = document.getElementById('constructor-base-template').innerHTML;
	
	var PageBase = function () {
	    function PageBase(options) {
	        var _this = this;
	
	        _classCallCheck(this, PageBase);
	
	        this._compiletTemplate = _.template(template);
	
	        this._el = options.element;
	
	        this._render(options.baseItems);
	
	        this._el.addEventListener('click', function (event) {
	            if (!event.target.closest('[data-element="baseLink"]')) {
	                return;
	            }
	
	            event.preventDefault();
	
	            var baseContainer = event.target.closest('[data-element="baseContainer"]');
	
	            _this._getBaseItems();
	
	            baseContainer.classList.add('active');
	
	            var customEvent = new CustomEvent('baseSelected', {
	                detail: {
	                    id: baseContainer.dataset.baseId
	                }
	            });
	
	            _this._el.dispatchEvent(customEvent);
	        });
	    }
	
	    _createClass(PageBase, [{
	        key: '_getBaseItems',
	        value: function _getBaseItems() {
	            var baseItems = this._el.querySelectorAll('[data-element="baseContainer"]');
	
	            var baseItemsArray = Array.prototype.slice.call(baseItems);
	
	            baseItemsArray.forEach(function (li) {
	                li.classList.remove('active');
	            });
	        }
	    }, {
	        key: '_render',
	        value: function _render(baseItems) {
	            this._el.innerHTML += this._compiletTemplate({
	                baseItems: baseItems
	            });
	        }
	    }, {
	        key: '_getElement',
	        value: function _getElement() {
	            return this._el;
	        }
	    }]);
	
	    return PageBase;
	}();
	
	module.exports = PageBase;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = document.getElementById('constructor-prints-template').innerHTML;
	
	var PagePrint = function () {
	    function PagePrint(options) {
	        var _this = this;
	
	        _classCallCheck(this, PagePrint);
	
	        this._compiledTemplate = _.template(template);
	
	        this._el = options.element;
	
	        this._prints = options.prints;
	
	        this._el.addEventListener('click', function (event) {
	            if (!event.target.closest('[data-tab-element="tabLink"]')) {
	                return;
	            }
	
	            event.preventDefault();
	
	            var tabLink = event.target.closest('[data-tab-element="tabLink"]');
	
	            var customEvent = new CustomEvent('tabSelected', {
	                detail: tabLink.dataset.tabId
	            });
	
	            _this._el.dispatchEvent(customEvent);
	        });
	    }
	
	    _createClass(PagePrint, [{
	        key: '_setPrintImagesEvent',
	        value: function _setPrintImagesEvent() {
	            var _this2 = this;
	
	            var projects = this._el.querySelector('[data-element="printImages"]');
	
	            projects.addEventListener('click', function (event) {
	                if (!event.target.closest('[data-element="printLink"]')) {
	                    return;
	                }
	
	                event.preventDefault();
	
	                var printContainer = event.target.closest('[data-element="printContainer"]');
	
	                var customEvent = new CustomEvent('printSelected', {
	                    detail: printContainer.dataset.printId
	                });
	
	                _this2._el.dispatchEvent(customEvent);
	            });
	        }
	    }, {
	        key: '_render',
	        value: function _render(prints) {
	            this._el.innerHTML += this._compiledTemplate({
	                prints: prints
	            });
	        }
	
	        //---------------------
	
	    }, {
	        key: '_setButtonTabClass',
	        value: function _setButtonTabClass(tabId) {
	            var allTabButtons = this._el.querySelectorAll('[data-tab-element="tabLink"]');
	
	            var allTabButtonsArray = Array.prototype.slice.call(allTabButtons);
	
	            allTabButtonsArray.forEach(function (button) {
	                button.classList.remove('active');
	            });
	
	            this._el.querySelector('[data-tab-id=' + tabId + ']').classList.add('active');
	        }
	    }, {
	        key: '_setTabContent',
	        value: function _setTabContent(tabId) {
	            var allTabs = this._el.querySelectorAll('[data-tab-element="tab"]');
	
	            var allTabsArray = Array.prototype.slice.call(allTabs);
	
	            allTabsArray.forEach(function (tab) {
	                tab.style.display = 'none';
	            });
	
	            this._el.querySelector('[data-content-id=' + tabId + ']').style.display = 'block';
	        }
	
	        //---------------------
	
	    }, {
	        key: '_getPrintElements',
	        value: function _getPrintElements() {
	            return this._prints;
	        }
	    }, {
	        key: '_getElement',
	        value: function _getElement() {
	            return this._el;
	        }
	    }]);
	
	    return PagePrint;
	}();
	
	module.exports = PagePrint;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageColor = function PageColor(options) {
	    _classCallCheck(this, PageColor);
	
	    this._el = options.element;
	};
	
	module.exports = PageColor;

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = document.getElementById('constructor-viewer-template').innerHTML;
	
	var PageView = function () {
	    function PageView(options) {
	        _classCallCheck(this, PageView);
	
	        this._compiledTemplate = _.template(template);
	
	        this._el = options.element;
	    }
	
	    _createClass(PageView, [{
	        key: '_render',
	        value: function _render(item) {
	            this._el.innerHTML = this._compiledTemplate({
	                item: item
	            });
	        }
	    }]);
	
	    return PageView;
	}();
	
	module.exports = PageView;

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Plugin Name: Print Constructor
	 * Type plugin: single page application
	 * Author: Orischenko Alexander
	 */
	
	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n    \n';
	
	var PageLayers = function () {
	    function PageLayers(options) {
	        _classCallCheck(this, PageLayers);
	
	        this._el = options.element;
	    }
	
	    _createClass(PageLayers, [{
	        key: '_render',
	        value: function _render(print) {
	            var html = '<div class="layer-item">';
	
	            html += '\n            <button class="remove-button"></button>\n            <figure><img alt="' + print.id + '" src="' + print.imageUrl + '"></figure>\n            <div class="caption">\n                <h6>' + print.name + '</h6>\n            </div>\n            <div class="controllers">\n                <a href="#!/print-constructor/" class="rotate"></a>\n                <a href="#!/print-constructor/" class="up"></a>\n                <a href="#!/print-constructor/" class="down"></a>\n            </div>\n        ';
	
	            html += '</div>';
	
	            this._el.innerHTML += html;
	
	            console.log(print);
	        }
	    }]);
	
	    return PageLayers;
	}();
	
	module.exports = PageLayers;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map