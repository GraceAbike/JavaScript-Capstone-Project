"use strict";
(self["webpackChunkjavascript_capstone_project"] = self["webpackChunkjavascript_capstone_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font */\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --white: #fff;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background-color: darkblue;\r\n  color: var(--white);\r\n  font-weight: 600;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.nav-item {\r\n  width: max-content;\r\n}\r\n\r\n.name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n  margin: -10px 0 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n/* Page-Section Start */\r\n.page-section {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 120px 40px 20px;\r\n  min-height: 555px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.page-content {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 25px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* Page-Section End */\r\n.card-section {\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  width: 320px;\r\n  border: 3px solid palevioletred;\r\n  border-radius: 27px;\r\n}\r\n\r\n.image-content,\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-content {\r\n  position: relative;\r\n  row-gap: 5px;\r\n  padding: 25px 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: darkblue;\r\n  border-radius: 25px 25px 0 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.overlay::before,\r\n.overlay::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -40px;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.overlay::after {\r\n  border-radius: 0 25px 0 0;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 250px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-image .card-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-section img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  z-index: 1;\r\n}\r\n\r\n/* The Like Button */\r\n.like-content {\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n.heart-icon {\r\n  color: red;\r\n}\r\n\r\n.like-count::before {\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  content: '100 Likes';\r\n  color: #9c9496;\r\n}\r\n\r\n.meal-name {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-align: center;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-btn {\r\n  font-family: var(--open-sans);\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  background-color: pink;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  height: 35px;\r\n  width: 110px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: palevioletred;\r\n}\r\n\r\n/* The footer start */\r\nfooter {\r\n  margin-top: auto;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: white;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.social-icons li a {\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\n.footer span,\r\n.footer b {\r\n  font-size: 1rem;\r\n}\r\n\r\n.creator {\r\n  font-weight: 400;\r\n  color: palevioletred;\r\n}\r\n\r\n/* Media Query Start */\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .social-icons,\r\n  .nav-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Google font */\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --white: #fff;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background-color: darkblue;\r\n  color: var(--white);\r\n  font-weight: 600;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.nav-item {\r\n  width: max-content;\r\n}\r\n\r\n.name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n  margin: -10px 0 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n/* Page-Section Start */\r\n.page-section {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 120px 40px 20px;\r\n  min-height: 555px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.page-content {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 25px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* Page-Section End */\r\n.card-section {\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  width: 320px;\r\n  border: 3px solid palevioletred;\r\n  border-radius: 27px;\r\n}\r\n\r\n.image-content,\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-content {\r\n  position: relative;\r\n  row-gap: 5px;\r\n  padding: 25px 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: darkblue;\r\n  border-radius: 25px 25px 0 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.overlay::before,\r\n.overlay::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -40px;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.overlay::after {\r\n  border-radius: 0 25px 0 0;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 250px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-image .card-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-section img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  z-index: 1;\r\n}\r\n\r\n/* The Like Button */\r\n.like-content {\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n.heart-icon {\r\n  color: red;\r\n}\r\n\r\n.like-count::before {\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  content: '100 Likes';\r\n  color: #9c9496;\r\n}\r\n\r\n.meal-name {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-align: center;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-btn {\r\n  font-family: var(--open-sans);\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  background-color: pink;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  height: 35px;\r\n  width: 110px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: palevioletred;\r\n}\r\n\r\n/* The footer start */\r\nfooter {\r\n  margin-top: auto;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: white;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.social-icons li a {\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\n.footer span,\r\n.footer b {\r\n  font-size: 1rem;\r\n}\r\n\r\n.creator {\r\n  font-weight: 400;\r\n  color: palevioletred;\r\n}\r\n\r\n/* Media Query Start */\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .social-icons,\r\n  .nav-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/API-utils.js":
/*!**************************!*\
  !*** ./src/API-utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const APImealsURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APImealsURL);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");



window.onload = () => {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _API_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API-utils.js */ "./src/API-utils.js");


const displayMeals = async () => {
  try {
    // Fetching the meals from the API
    const fetchedMeals = await fetch(_API_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    const { meals } = await fetchedMeals.json();
    // Get the Page-Content element to insert meal cards
    const pageContent = document.querySelector('#page-content');

    meals.map((meal) => {
      const {
        idMeal, strMeal, strMealThumb,
      } = meal;
      const mealCard = document.createElement('div');
      mealCard.classList.add('card-section');
      mealCard.innerHTML = `
      <div class="card" meal-id="${idMeal}">
          <div class="image-content">
              <span class="overlay"></span>
              <div class="card-image">
                  <img id="card-img" class="card-img" src="${strMealThumb}" alt="${strMeal} Image">
              </div>
          </div>
          <div class="card-content">
              <div class="title">
                  <div class="name">
                      <h2 class="meal-name">${strMeal}</h2>
                  </div> 
                  <div class="like-content">
                      <ion-icon id="heart-icon" class="heart-icon" name="heart"></ion-icon>
                      <span id="like-count" class="like-count"></span>
                  </div>
              </div>
              <div class="card-buttons">
                  <button id="comment-btn" class="card-btn">Comments</button>
                  <button id="reservation-btn" class="card-btn">Reservations</button>
              </div>
          </div>
      </div>
      `;
      // Setting the comment button event listener
      mealCard.querySelector('#comment-btn').addEventListener('click', () => {
      });

      // Setting the reservation button event listener
      mealCard.querySelector('#reservation-btn').addEventListener('click', () => {
      });

      // Setting the like button event listener
      mealCard.querySelector('#heart-icon').addEventListener('click', () => {
      });

      return pageContent.appendChild(mealCard);
    });
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDRk47QUFDaUI7O0FBRXRDO0FBQ0EsRUFBRSxxREFBWTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscURBQVc7QUFDaEQsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxhQUFhLFNBQVMsU0FBUztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvQVBJLXV0aWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHb29nbGUgZm9udCAqL1xcclxcblxcclxcbi8qIHBhZ2UgcmVzZXQgc3R5bGVzICovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1tb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1vcGVuLXNhbnM6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSBiIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBtYXJnaW46IC0xMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tZW51IGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUgbGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHBpbms7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUGFnZS1TZWN0aW9uIFN0YXJ0ICovXFxyXFxuLnBhZ2Utc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBhZGRpbmc6IDEyMHB4IDQwcHggMjBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDU1NXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYWdlLVNlY3Rpb24gRW5kICovXFxyXFxuLmNhcmQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHdpZHRoOiAzMjBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGVudCxcXHJcXG4uY2FyZC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbiAgcGFkZGluZzogMjVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDI1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheTo6YmVmb3JlLFxcclxcbi5vdmVybGF5OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAtNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5OjphZnRlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UgLmNhcmQtaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBMaWtlIEJ1dHRvbiAqL1xcclxcbi5saWtlLWNvbnRlbnQge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbiB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb3VudDo6YmVmb3JlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29udGVudDogJzEwMCBMaWtlcyc7XFxyXFxuICBjb2xvcjogIzljOTQ5NjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzcwNzA3MDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgd2lkdGg6IDExMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgZm9vdGVyIHN0YXJ0ICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIGxpIGEge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBzcGFuLFxcclxcbi5mb290ZXIgYiB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogcGFsZXZpb2xldHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcnkgU3RhcnQgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zb2NpYWwtaWNvbnMsXFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUloQixzQkFBc0I7QUFDdEI7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztB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J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJyk7XFxyXFxuXFxyXFxuLyogcGFnZSByZXNldCBzdHlsZXMgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1mb250LW1vbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLW9wZW4tc2FuczogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIGIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIG1hcmdpbjogLTEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUgbGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSBsaTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcGluaztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYWdlLVNlY3Rpb24gU3RhcnQgKi9cXHJcXG4ucGFnZS1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcGFkZGluZzogMTIwcHggNDBweCAyMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTU1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFBhZ2UtU2VjdGlvbiBFbmQgKi9cXHJcXG4uY2FyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgcGFsZXZpb2xldHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250ZW50LFxcclxcbi5jYXJkLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByb3ctZ2FwOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMjVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5OjpiZWZvcmUsXFxyXFxuLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IC00MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSAuY2FyZC1pbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIExpa2UgQnV0dG9uICovXFxyXFxuLmxpa2UtY29udGVudCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50OjpiZWZvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb250ZW50OiAnMTAwIExpa2VzJztcXHJcXG4gIGNvbG9yOiAjOWM5NDk2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjNzA3MDcwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ0biB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBmb290ZXIgc3RhcnQgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMgbGkgYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyBsaSBhOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHNwYW4sXFxyXFxuLmZvb3RlciBiIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvY2lhbC1pY29ucyxcXHJcXG4gIC5uYXYtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBBUEltZWFsc1VSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9hPUFtZXJpY2FuJztcblxuZXhwb3J0IGRlZmF1bHQgQVBJbWVhbHNVUkw7XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5TWVhbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRpc3BsYXlNZWFscygpO1xufTtcbiIsImltcG9ydCBBUEltZWFsc1VSTCBmcm9tICcuL0FQSS11dGlscy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICAvLyBGZXRjaGluZyB0aGUgbWVhbHMgZnJvbSB0aGUgQVBJXG4gICAgY29uc3QgZmV0Y2hlZE1lYWxzID0gYXdhaXQgZmV0Y2goQVBJbWVhbHNVUkwpO1xuICAgIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IGZldGNoZWRNZWFscy5qc29uKCk7XG4gICAgLy8gR2V0IHRoZSBQYWdlLUNvbnRlbnQgZWxlbWVudCB0byBpbnNlcnQgbWVhbCBjYXJkc1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtY29udGVudCcpO1xuXG4gICAgbWVhbHMubWFwKChtZWFsKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlkTWVhbCwgc3RyTWVhbCwgc3RyTWVhbFRodW1iLFxuICAgICAgfSA9IG1lYWw7XG4gICAgICBjb25zdCBtZWFsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbWVhbENhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1zZWN0aW9uJyk7XG4gICAgICBtZWFsQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIG1lYWwtaWQ9XCIke2lkTWVhbH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm92ZXJsYXlcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiY2FyZC1pbWdcIiBjbGFzcz1cImNhcmQtaW1nXCIgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiJHtzdHJNZWFsfSBJbWFnZVwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZWFsLW5hbWVcIj4ke3N0ck1lYWx9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gaWQ9XCJoZWFydC1pY29uXCIgY2xhc3M9XCJoZWFydC1pY29uXCIgbmFtZT1cImhlYXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxpa2UtY291bnRcIiBjbGFzcz1cImxpa2UtY291bnRcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb21tZW50LWJ0blwiIGNsYXNzPVwiY2FyZC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlc2VydmF0aW9uLWJ0blwiIGNsYXNzPVwiY2FyZC1idG5cIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICAvLyBTZXR0aW5nIHRoZSBjb21tZW50IGJ1dHRvbiBldmVudCBsaXN0ZW5lclxuICAgICAgbWVhbENhcmQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0dGluZyB0aGUgcmVzZXJ2YXRpb24gYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG4gICAgICBtZWFsQ2FyZC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2YXRpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB9KTtcblxuICAgICAgLy8gU2V0dGluZyB0aGUgbGlrZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcbiAgICAgIG1lYWxDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNoZWFydC1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lYWxDYXJkKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3JNc2cpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2cpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==