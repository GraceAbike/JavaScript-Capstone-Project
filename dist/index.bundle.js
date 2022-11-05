"use strict";
(self["webpackChunkjavascript_capstone_project"] = self["webpackChunkjavascript_capstone_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* modal */\r\n.modal-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 99999;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(18, 5, 65, 0.61);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.modal-container:target {\r\n  display: flex;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 38%;\r\n  height: 95%;\r\n  border-radius: 18px;\r\n  color: hsl(220, 50%, 90%);\r\n  background: linear-gradient(to right, hsl(244, 90%, 27%), hsl(336, 87%, 43%));\r\n  padding: 35px 45px;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n/* close Button */\r\n.close-btn {\r\n  align-self: flex-end;\r\n  position: absolute;\r\n  right: 1.5%;\r\n  top: 1.5%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.close-btn a {\r\n  position: sticky;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: inherit;\r\n  border: 1px solid hsla(0, 0%, 100%, 0.2);\r\n  border-radius: 100%;\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 0;\r\n  margin: 0;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-btn a::before {\r\n  content: 'x';\r\n  transform: translateY(-0.1rem);\r\n}\r\n\r\n.close-btn a:hover,\r\n.close-btn a:focus {\r\n  background: hsl(258, 92%, 24%);\r\n  border-color: hsl(351, 89%, 42%);\r\n  transform: translate(0.1rem, -0.2rem);\r\n}\r\n\r\n/* Card-content */\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.popup-image {\r\n  display: flex;\r\n  max-width: 100%;\r\n  max-height: 75%;\r\n  padding: 10px 5px;\r\n}\r\n\r\n.popup-img {\r\n  border-radius: 50px 50px 50px 50px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-details {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-details,\r\nh2,\r\nh3,\r\np,\r\nul,\r\nli,\r\nspan {\r\n  line-height: 1.5;\r\n  letter-spacing: 1px;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 10px 10px 5px;\r\n}\r\n\r\n.meal-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.comments-title {\r\n  align-self: center;\r\n  padding: 5px;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-title {\r\n  align-self: center;\r\n  padding: 20px 0 5px;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  padding: 15px 0 0;\r\n}\r\n\r\n.form-group input {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  min-height: 1.5rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.form-group textarea {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  padding: 10px 12px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uCAAuC;EACvC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,6EAA6E;EAC7E,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,wCAAwC;EACxC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;;EAEE,8BAA8B;EAC9B,gCAAgC;EAChC,qCAAqC;AACvC;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* modal */\r\n.modal-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 99999;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(18, 5, 65, 0.61);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.modal-container:target {\r\n  display: flex;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 38%;\r\n  height: 95%;\r\n  border-radius: 18px;\r\n  color: hsl(220, 50%, 90%);\r\n  background: linear-gradient(to right, hsl(244, 90%, 27%), hsl(336, 87%, 43%));\r\n  padding: 35px 45px;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n/* close Button */\r\n.close-btn {\r\n  align-self: flex-end;\r\n  position: absolute;\r\n  right: 1.5%;\r\n  top: 1.5%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.close-btn a {\r\n  position: sticky;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: inherit;\r\n  border: 1px solid hsla(0, 0%, 100%, 0.2);\r\n  border-radius: 100%;\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 0;\r\n  margin: 0;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-btn a::before {\r\n  content: 'x';\r\n  transform: translateY(-0.1rem);\r\n}\r\n\r\n.close-btn a:hover,\r\n.close-btn a:focus {\r\n  background: hsl(258, 92%, 24%);\r\n  border-color: hsl(351, 89%, 42%);\r\n  transform: translate(0.1rem, -0.2rem);\r\n}\r\n\r\n/* Card-content */\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.popup-image {\r\n  display: flex;\r\n  max-width: 100%;\r\n  max-height: 75%;\r\n  padding: 10px 5px;\r\n}\r\n\r\n.popup-img {\r\n  border-radius: 50px 50px 50px 50px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-details {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-details,\r\nh2,\r\nh3,\r\np,\r\nul,\r\nli,\r\nspan {\r\n  line-height: 1.5;\r\n  letter-spacing: 1px;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 10px 10px 5px;\r\n}\r\n\r\n.meal-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.comments-title {\r\n  align-self: center;\r\n  padding: 5px;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-title {\r\n  align-self: center;\r\n  padding: 20px 0 5px;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  padding: 15px 0 0;\r\n}\r\n\r\n.form-group input {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  min-height: 1.5rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.form-group textarea {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  padding: 10px 12px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font */\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --white: #fff;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background-color: darkblue;\r\n  color: var(--white);\r\n  font-weight: 600;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.nav-item {\r\n  width: max-content;\r\n}\r\n\r\n.name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n  margin: -10px 0 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n/* Page-Section Start */\r\n.page-section {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 120px 40px 20px;\r\n  min-height: 555px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.meals-count {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  padding: 0 50px;\r\n}\r\n\r\n.meals-count h2 {\r\n  font-size: 15px;\r\n  font-family: var(--open-sans);\r\n  color: palevioletred;\r\n  background: darkblue;\r\n  text-align: center;\r\n  border-radius: 25px;\r\n  border: 3px solid palevioletred;\r\n  padding: 15px;\r\n  margin: -50px 0 25px;\r\n}\r\n\r\n.page-content {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 25px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* Page-Section End */\r\n.card-section {\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  width: 320px;\r\n  border: 3px solid palevioletred;\r\n  border-radius: 27px;\r\n}\r\n\r\n.image-content,\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-content {\r\n  position: relative;\r\n  row-gap: 5px;\r\n  padding: 25px 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: darkblue;\r\n  border-radius: 25px 25px 0 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.overlay::before,\r\n.overlay::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -40px;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.overlay::after {\r\n  border-radius: 0 25px 0 0;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 250px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-image .card-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-section img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  z-index: 1;\r\n}\r\n\r\n/* The Like Button */\r\n.like-content {\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.heart-icon {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-count {\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  color: #9c9496;\r\n}\r\n\r\n.meal-name {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-align: center;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-btn {\r\n  font-family: var(--open-sans);\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  background-color: pink;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  height: 35px;\r\n  width: 110px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: palevioletred;\r\n}\r\n\r\n/* The footer start */\r\nfooter {\r\n  margin-top: auto;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: white;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.social-icons li a {\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\n.footer span,\r\n.footer b {\r\n  font-size: 1rem;\r\n}\r\n\r\n.creator {\r\n  font-weight: 400;\r\n  color: palevioletred;\r\n}\r\n\r\n/* Media Query Start */\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .social-icons,\r\n  .nav-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Google font */\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n@import url(\"./popup.css\");\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --white: #fff;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background-color: darkblue;\r\n  color: var(--white);\r\n  font-weight: 600;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.nav-item {\r\n  width: max-content;\r\n}\r\n\r\n.name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n  margin: -10px 0 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n/* Page-Section Start */\r\n.page-section {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 120px 40px 20px;\r\n  min-height: 555px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.meals-count {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  padding: 0 50px;\r\n}\r\n\r\n.meals-count h2 {\r\n  font-size: 15px;\r\n  font-family: var(--open-sans);\r\n  color: palevioletred;\r\n  background: darkblue;\r\n  text-align: center;\r\n  border-radius: 25px;\r\n  border: 3px solid palevioletred;\r\n  padding: 15px;\r\n  margin: -50px 0 25px;\r\n}\r\n\r\n.page-content {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 25px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* Page-Section End */\r\n.card-section {\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  width: 320px;\r\n  border: 3px solid palevioletred;\r\n  border-radius: 27px;\r\n}\r\n\r\n.image-content,\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-content {\r\n  position: relative;\r\n  row-gap: 5px;\r\n  padding: 25px 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: darkblue;\r\n  border-radius: 25px 25px 0 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.overlay::before,\r\n.overlay::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -40px;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.overlay::after {\r\n  border-radius: 0 25px 0 0;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 250px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-image .card-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-section img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  z-index: 1;\r\n}\r\n\r\n/* The Like Button */\r\n.like-content {\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.heart-icon {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n.like-count {\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  color: #9c9496;\r\n}\r\n\r\n.meal-name {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-align: center;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-btn {\r\n  font-family: var(--open-sans);\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  background-color: pink;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  height: 35px;\r\n  width: 110px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: palevioletred;\r\n}\r\n\r\n/* The footer start */\r\nfooter {\r\n  margin-top: auto;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: white;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.social-icons li a {\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\n.footer span,\r\n.footer b {\r\n  font-size: 1rem;\r\n}\r\n\r\n.creator {\r\n  font-weight: 400;\r\n  color: palevioletred;\r\n}\r\n\r\n/* Media Query Start */\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .social-icons,\r\n  .nav-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getMeals": () => (/* binding */ getMeals),
/* harmony export */   "setLikes": () => (/* binding */ setLikes)
/* harmony export */ });
/* harmony import */ var _api_urls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-urls.js */ "./src/api-urls.js");


/* Fetch the meals list from MealsDB-API */
const getMeals = async () => {
  const response = await fetch(_api_urls_js__WEBPACK_IMPORTED_MODULE_0__.APImealsURL);
  const data = await response.json();
  return data;
};

// Adds a new like for an item in the likes-API
const setLikes = async (idMeal) => {
  await fetch(`${_api_urls_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: idMeal,
    }),
  });
};

// Gets all items from the likes-API
const getLikes = async () => {
  const response = await fetch(`${_api_urls_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}likes/`);
  const data = await response.json();
  return data;
};



/***/ }),

/***/ "./src/api-urls.js":
/*!*************************!*\
  !*** ./src/api-urls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APImealsURL": () => (/* binding */ APImealsURL),
/* harmony export */   "involvementURL": () => (/* binding */ involvementURL)
/* harmony export */ });
const APImealsURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=American';
const involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fZEB2tpIC45iiUMRjYli/';




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

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayPopup = async (meal) => {
  const {
    strMeal, strMealThumb,
  } = meal;
  const popup = document.createElement('div');
  popup.classList.add('modal-container');
  popup.setAttribute('id', 'modal-container');
  popup.innerHTML = `
    <div class="modal">
    <div id="close-btn" class="close-btn"><a href="#"></a></div>
    <div class="popup-content">
      <div class="popup-image">
        <img id="popup-img" class="popup-img" src="${strMealThumb}" alt="${strMeal} Image">
      </div>
      <div class="card-details">
        <div class="name">
          <h2 class="dish-name">${strMeal}</h2>
        </div>
      </div>
      <div class="meal-comments">
        <h2 class="comments-title">Comments 10</h2>
        <ul class="comments-list">
        <li>
          <div class="comment-section">
            <span class="comment-header">01/12/2022: GraceAbike</span>
            <p class="comment-body">I'd love to buy it</p>
          </div>
          </li>
        </ul>
        <div class="comment-form">
        <h3 class="form-title">Add Your Comment</h3>
        <form action="#">
          <div class="form-group">
            <label for="author" hidden="">Your name</label>
            <input type="text" id="author" placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="comment" hidden="">Your comment</label>
            <textarea name="comment" id="comment" rows="10" placeholder="Your comment"></textarea>
          </div>
          <div class="form-group">
            <button class="card-btn" type="submit">Comment</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
      `;
  document.querySelector('#page-section').appendChild(popup);
  popup.querySelector('#close-btn').addEventListener('click', () => {
    popup.remove();
    document.body.style.overflow = 'auto';
  });
  // popup.querySelector('#comment_form').addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const commenterName = popup.querySelector('#commenter_name').value;
  //     const commentText = popup.querySelector('#comment_text').value;
  //     const comment = document.createElement('div');
  //     comment.classList.add('comment');
  //     comment.innerHTML = `
  //     <div class="comment-header">
  //         <h3>${commenterName}</h3>
  //         <span class="comment-date">Date</span>
  //     </div>
  //     <p class="comment-text">${commentText}</p>
  //     `;
  //     popup.querySelector('.comments-content').appendChild(comment);
  //     popup.querySelector('#comment_form').reset();
  // });
  document.body.style.overflow = 'hidden';
};
  // displayPopup(meal){
  // }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);

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
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");



const setMealsCount = async (count) => {
  const mealsCount = await document.querySelector('#meals-count');
  mealsCount.innerHTML = await `${count} Meals`;
  return mealsCount;
};

const displayMeals = async () => {
  try {
    const { meals } = await (0,_API_utils_js__WEBPACK_IMPORTED_MODULE_0__.getMeals)();
    const mealsLikes = await (0,_API_utils_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();
    setMealsCount(meals.length);
    const pageContent = document.querySelector('#page-content');
    meals.map((meal) => {
      const {
        idMeal, strMeal, strMealThumb,
      } = meal;
      const likes = mealsLikes.filter((like) => like.item_id === idMeal);
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
              <span id="like-count" class="like-count">${likes.length > 0 ? likes[0].likes : 0} Likes</span>
            </div>
          </div>
          <div class="card-buttons">
            <button id="comment-btn" class="card-btn">Comments</button>
            <button id="reservation-btn" class="card-btn">Reservations</button>
          </div>
        </div>
      </div>`;
      mealCard.querySelector('#comment-btn').addEventListener('click', () => {
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meal);
      });
      mealCard.querySelector('#reservation-btn').addEventListener('click', () => {
      });
      mealCard.querySelector('#heart-icon').addEventListener('click', (e) => {
        const likeCount = e.target.parentElement.querySelector('#like-count');
        (0,_API_utils_js__WEBPACK_IMPORTED_MODULE_0__.setLikes)(idMeal);
        likeCount.innerHTML = `${likes[0].likes + 1} Likes`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGtFQUFrRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLHlDQUF5QyxzQkFBc0IsYUFBYSxjQUFjLHFCQUFxQixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLDhDQUE4QyxpQ0FBaUMsS0FBSyxpQ0FBaUMsb0JBQW9CLEtBQUssZ0JBQWdCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixpQkFBaUIsa0JBQWtCLDBCQUEwQixnQ0FBZ0Msb0ZBQW9GLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHlCQUF5QixLQUFLLDBDQUEwQywyQkFBMkIseUJBQXlCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixLQUFLLHNCQUFzQix1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDRCQUE0Qix5QkFBeUIscUJBQXFCLCtDQUErQywwQkFBMEIsa0JBQWtCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixLQUFLLDhCQUE4QixtQkFBbUIscUNBQXFDLEtBQUssbURBQW1ELHFDQUFxQyx1Q0FBdUMsNENBQTRDLEtBQUssOENBQThDLG9CQUFvQiw2QkFBNkIsbUJBQW1CLGtCQUFrQixpQkFBaUIsZ0JBQWdCLEtBQUssc0JBQXNCLG9CQUFvQixzQkFBc0Isc0JBQXNCLHdCQUF3QixLQUFLLG9CQUFvQix5Q0FBeUMsd0JBQXdCLDhCQUE4QixrQkFBa0IsbUJBQW1CLEtBQUssdUJBQXVCLGtCQUFrQixvQkFBb0IsNkJBQTZCLEtBQUssa0VBQWtFLHVCQUF1QiwwQkFBMEIsdUJBQXVCLDRCQUE0QixpQkFBaUIsZ0JBQWdCLEtBQUssZUFBZSxvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsNkJBQTZCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDhCQUE4QixnQkFBZ0Isb0JBQW9CLGdCQUFnQixLQUFLLHlCQUF5Qix5QkFBeUIsbUJBQW1CLEtBQUssMEJBQTBCLG9CQUFvQixrQ0FBa0MsOEJBQThCLHNCQUFzQixnQ0FBZ0MsS0FBSyx3QkFBd0Isb0JBQW9CLDZCQUE2QixlQUFlLEtBQUssdUJBQXVCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEtBQUsscUJBQXFCLHlCQUF5QiwwQkFBMEIsS0FBSyxxQkFBcUIsb0JBQW9CLHdCQUF3QixLQUFLLDJCQUEyQixrQkFBa0IseUJBQXlCLHlCQUF5Qix3QkFBd0IsS0FBSyw4QkFBOEIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsS0FBSyxXQUFXLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsa0RBQWtELGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUsseUNBQXlDLHNCQUFzQixhQUFhLGNBQWMscUJBQXFCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsOENBQThDLGlDQUFpQyxLQUFLLGlDQUFpQyxvQkFBb0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlCQUFpQixrQkFBa0IsMEJBQTBCLGdDQUFnQyxvRkFBb0YseUJBQXlCLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssMENBQTBDLDJCQUEyQix5QkFBeUIsa0JBQWtCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLEtBQUssc0JBQXNCLHVCQUF1QixvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsNEJBQTRCLHlCQUF5QixxQkFBcUIsK0NBQStDLDBCQUEwQixrQkFBa0IsbUJBQW1CLGlCQUFpQixnQkFBZ0IsdUJBQXVCLEtBQUssOEJBQThCLG1CQUFtQixxQ0FBcUMsS0FBSyxtREFBbUQscUNBQXFDLHVDQUF1Qyw0Q0FBNEMsS0FBSyw4Q0FBOEMsb0JBQW9CLDZCQUE2QixtQkFBbUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsS0FBSyxzQkFBc0Isb0JBQW9CLHNCQUFzQixzQkFBc0Isd0JBQXdCLEtBQUssb0JBQW9CLHlDQUF5Qyx3QkFBd0IsOEJBQThCLGtCQUFrQixtQkFBbUIsS0FBSyx1QkFBdUIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsS0FBSyxrRUFBa0UsdUJBQXVCLDBCQUEwQix1QkFBdUIsNEJBQTRCLGlCQUFpQixnQkFBZ0IsS0FBSyxlQUFlLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5Qiw2QkFBNkIsS0FBSyx3QkFBd0Isb0JBQW9CLDZCQUE2QixrQ0FBa0MsOEJBQThCLGdCQUFnQixvQkFBb0IsZ0JBQWdCLEtBQUsseUJBQXlCLHlCQUF5QixtQkFBbUIsS0FBSywwQkFBMEIsb0JBQW9CLGtDQUFrQyw4QkFBOEIsc0JBQXNCLGdDQUFnQyxLQUFLLHdCQUF3QixvQkFBb0IsNkJBQTZCLGVBQWUsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsS0FBSyxxQkFBcUIseUJBQXlCLDBCQUEwQixLQUFLLHFCQUFxQixvQkFBb0Isd0JBQXdCLEtBQUssMkJBQTJCLGtCQUFrQix5QkFBeUIseUJBQXlCLHdCQUF3QixLQUFLLDhCQUE4QixrQkFBa0IseUJBQXlCLHlCQUF5QixLQUFLLHVCQUF1QjtBQUN6dFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDWTtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBIQUEwSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFDQUFxQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNuWCx5R0FBeUc7QUFDekcsMEJBQTBCLHNGQUFpQztBQUMzRDtBQUNBLDRIQUE0SCxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGVBQWUsNENBQTRDLG9CQUFvQiw2Q0FBNkMsNkNBQTZDLDRDQUE0QyxnREFBZ0QsS0FBSyxjQUFjLDhCQUE4QixLQUFLLGNBQWMseUNBQXlDLHdCQUF3QixLQUFLLGNBQWMsa0JBQWtCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLEtBQUssb0JBQW9CLG9DQUFvQyx5QkFBeUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQixLQUFLLHNCQUFzQixvQkFBb0IsNkJBQTZCLEtBQUssYUFBYSxvQkFBb0IsNkJBQTZCLGtCQUFrQixpQ0FBaUMsMEJBQTBCLHVCQUF1QiwwQkFBMEIsdUNBQXVDLHNCQUFzQixrQkFBa0IsaUJBQWlCLEtBQUssb0NBQW9DLDJEQUEyRCwwQkFBMEIseUJBQXlCLHNCQUFzQixxQkFBcUIsNkJBQTZCLDJCQUEyQiw0QkFBNEIsMEJBQTBCLHdCQUF3QixxQkFBcUIsMENBQTBDLEtBQUssbUJBQW1CLHlCQUF5QixLQUFLLGlCQUFpQix3QkFBd0IsS0FBSyxtQkFBbUIsb0JBQW9CLDBCQUEwQixrQ0FBa0MsMEJBQTBCLGdCQUFnQix3QkFBd0Isd0JBQXdCLEtBQUssWUFBWSx1QkFBdUIsS0FBSyxzQkFBc0Isc0JBQXNCLDJDQUEyQywwQ0FBMEMsS0FBSyw0QkFBNEIsc0JBQXNCLG9DQUFvQyxLQUFLLFdBQVcsNEJBQTRCLDBCQUEwQixLQUFLLG1EQUFtRCx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHNCQUFzQiwrQkFBK0Isd0JBQXdCLG1CQUFtQixrQkFBa0IsS0FBSyxzQkFBc0Isb0JBQW9CLGtDQUFrQywwQkFBMEIsd0JBQXdCLGtCQUFrQixzQkFBc0IsS0FBSyx5QkFBeUIsc0JBQXNCLG9DQUFvQywyQkFBMkIsMkJBQTJCLHlCQUF5QiwwQkFBMEIsc0NBQXNDLG9CQUFvQiwyQkFBMkIsS0FBSyx1QkFBdUIseUJBQXlCLG9CQUFvQixvQ0FBb0MsMEJBQTBCLHNCQUFzQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixLQUFLLGlEQUFpRCxvQkFBb0Isa0JBQWtCLEtBQUssZUFBZSxtQkFBbUIsc0NBQXNDLDBCQUEwQixLQUFLLDBDQUEwQyxvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IseUJBQXlCLG1CQUFtQixzQkFBc0IsS0FBSyxrQkFBa0IseUJBQXlCLGNBQWMsYUFBYSxtQkFBbUIsa0JBQWtCLGlDQUFpQyxzQ0FBc0Msb0JBQW9CLEtBQUssOENBQThDLGtCQUFrQix5QkFBeUIsZUFBZSxvQkFBb0IsbUJBQW1CLGtCQUFrQixpQ0FBaUMsS0FBSyx5QkFBeUIsZ0NBQWdDLG1DQUFtQyxLQUFLLHFCQUFxQix5QkFBeUIsb0JBQW9CLG1CQUFtQix5QkFBeUIsS0FBSywrQkFBK0IsbUJBQW1CLGtCQUFrQix3QkFBd0IseUJBQXlCLEtBQUssMkJBQTJCLG1CQUFtQixvQkFBb0IsS0FBSyxnQkFBZ0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsMEJBQTBCLGtCQUFrQixzQkFBc0IsaUJBQWlCLEtBQUssZ0RBQWdELHNCQUFzQixvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIsbUJBQW1CLEtBQUsscUJBQXFCLGlCQUFpQixzQkFBc0IsS0FBSyxxQkFBcUIsOEJBQThCLHNCQUFzQixxQkFBcUIsS0FBSyxvQkFBb0Isc0JBQXNCLHVCQUF1QixrQkFBa0IsS0FBSyxzQkFBc0Isc0JBQXNCLHFCQUFxQix5QkFBeUIsS0FBSyx1QkFBdUIsb0JBQW9CLDBCQUEwQixvQ0FBb0MsMEJBQTBCLGtCQUFrQixzQkFBc0IsS0FBSyxtQkFBbUIsb0NBQW9DLHNCQUFzQixtQkFBbUIsNkJBQTZCLG1CQUFtQix5QkFBeUIsc0JBQXNCLG1CQUFtQixtQkFBbUIsdUNBQXVDLEtBQUsseUJBQXlCLHNDQUFzQyxLQUFLLDBDQUEwQyx1QkFBdUIsOEJBQThCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLG1CQUFtQix3QkFBd0IsS0FBSyx1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLGdCQUFnQixrQkFBa0Isb0JBQW9CLEtBQUssNEJBQTRCLDRCQUE0QixzQkFBc0IsdUJBQXVCLG9CQUFvQixLQUFLLGtDQUFrQyxtQ0FBbUMsaUJBQWlCLEtBQUssb0NBQW9DLHNCQUFzQixLQUFLLGtCQUFrQix1QkFBdUIsMkJBQTJCLEtBQUssOEVBQThFLFlBQVksMkJBQTJCLE9BQU8sZUFBZSxzQkFBc0IsNEJBQTRCLHVDQUF1QywyQkFBMkIseUJBQXlCLHFCQUFxQixPQUFPLHlDQUF5QyxzQkFBc0IsNEJBQTRCLGtCQUFrQixPQUFPLEtBQUssV0FBVyx3RkFBd0YsYUFBYSxRQUFRLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSywrSEFBK0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQ0FBcUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0s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QUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSx1REFBdUQsYUFBYSxTQUFTLFNBQVM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCx1Q0FBdUM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBWTtBQUNwQixPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsdURBQVE7QUFDaEIsaUNBQWlDLG9CQUFvQjtBQUNyRCxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL0FQSS11dGlscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvYXBpLXVybHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIG1vZGFsICovXFxyXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogOTk5OTk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4LCA1LCA2NSwgMC42MSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRhaW5lcjp0YXJnZXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM4JTtcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXHJcXG4gIGNvbG9yOiBoc2woMjIwLCA1MCUsIDkwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGhzbCgyNDQsIDkwJSwgMjclKSwgaHNsKDMzNiwgODclLCA0MyUpKTtcXHJcXG4gIHBhZGRpbmc6IDM1cHggNDVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDEuNSU7XFxyXFxuICB0b3A6IDEuNSU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGEge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biBhOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ3gnO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGE6aG92ZXIsXFxyXFxuLmNsb3NlLWJ0biBhOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IGhzbCgyNTgsIDkyJSwgMjQlKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogaHNsKDM1MSwgODklLCA0MiUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4xcmVtLCAtMC4ycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2FyZC1jb250ZW50ICovXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNzUlO1xcclxcbiAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGV0YWlscyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXRhaWxzLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbnAsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuc3BhbiB7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10aXRsZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTVweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWluLWhlaWdodDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDZFQUE2RTtFQUM3RSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxxQ0FBcUM7QUFDdkM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7Ozs7RUFPRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbW9kYWwgKi9cXHJcXG4ubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiA5OTk5OTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDUsIDY1LCAwLjYxKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGFpbmVyOnRhcmdldCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzglO1xcclxcbiAgaGVpZ2h0OiA5NSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xcclxcbiAgY29sb3I6IGhzbCgyMjAsIDUwJSwgOTAlKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgaHNsKDI0NCwgOTAlLCAyNyUpLCBoc2woMzM2LCA4NyUsIDQzJSkpO1xcclxcbiAgcGFkZGluZzogMzVweCA0NXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIGNsb3NlIEJ1dHRvbiAqL1xcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMS41JTtcXHJcXG4gIHRvcDogMS41JTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4gYSB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMTAwJSwgMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGE6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAneCc7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMXJlbSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4gYTpob3ZlcixcXHJcXG4uY2xvc2UtYnRuIGE6Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZDogaHNsKDI1OCwgOTIlLCAyNCUpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBoc2woMzUxLCA4OSUsIDQyJSk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjFyZW0sIC0wLjJyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDYXJkLWNvbnRlbnQgKi9cXHJcXG4ucG9wdXAtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA3NSU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggNTBweCA1MHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1kZXRhaWxzIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWRldGFpbHMsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxucCxcXHJcXG51bCxcXHJcXG5saSxcXHJcXG5zcGFuIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLXRpdGxlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRpdGxlIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fucyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdvb2dsZSBmb250ICovXFxyXFxuXFxyXFxuLyogcGFnZSByZXNldCBzdHlsZXMgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1mb250LW1vbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLW9wZW4tc2FuczogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXZlcmRhbmE6IHZlcmRhbmEsIHRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tVGFob21hOiB0YWhvbWEsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXNhbnMtc2VyaWY6IHNhbnMtc2VyaWYsIHZlcmRhbmEsIHRhaG9tYTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuLXNhbnMpO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWNvbHVtbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxyXFxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIFN5bWJvbHMgT3V0bGluZWQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcclxcbiAgZGlyZWN0aW9uOiBsdHI7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUgYiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgbWFyZ2luOiAtMTBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tZW51IGxpOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBwaW5rO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi8qIFBhZ2UtU2VjdGlvbiBTdGFydCAqL1xcclxcbi5wYWdlLXNlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBwYWRkaW5nOiAxMjBweCA0MHB4IDIwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1NTVweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY291bnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY291bnQgaDIge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBjb2xvcjogcGFsZXZpb2xldHJlZDtcXHJcXG4gIGJhY2tncm91bmQ6IGRhcmtibHVlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgbWFyZ2luOiAtNTBweCAwIDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWNvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYWdlLVNlY3Rpb24gRW5kICovXFxyXFxuLmNhcmQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIHdpZHRoOiAzMjBweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGVudCxcXHJcXG4uY2FyZC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbiAgcGFkZGluZzogMjVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDI1cHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheTo6YmVmb3JlLFxcclxcbi5vdmVybGF5OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAtNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5OjphZnRlciB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UgLmNhcmQtaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gaW1nIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBMaWtlIEJ1dHRvbiAqL1xcclxcbi5saWtlLWNvbnRlbnQge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbiB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1jb3VudCB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGNvbG9yOiAjOWM5NDk2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjNzA3MDcwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ0biB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBmb290ZXIgc3RhcnQgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMgbGkgYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyBsaSBhOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHNwYW4sXFxyXFxuLmZvb3RlciBiIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvY2lhbC1pY29ucyxcXHJcXG4gIC5uYXYtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7O0FBS2hCLHNCQUFzQjtBQUN0Qjs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxzQ0FBc0M7RUFDdEMscUNBQXFDO0VBQ3JDLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxp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aEIsb0JBQW9CO0FBQ3RCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHb29nbGUgZm9udCAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucycpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCIuL3BvcHVwLmNzc1xcXCIpO1xcclxcblxcclxcbi8qIHBhZ2UgcmVzZXQgc3R5bGVzICovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1tb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1vcGVuLXNhbnM6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgLS12ZXJkYW5hOiB2ZXJkYW5hLCB0YWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLVRhaG9tYTogdGFob21hLCB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1zYW5zLXNlcmlmOiBzYW5zLXNlcmlmLCB2ZXJkYW5hLCB0YWhvbWE7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIGIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIG1hcmdpbjogLTEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUgbGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSBsaTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcGluaztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYWdlLVNlY3Rpb24gU3RhcnQgKi9cXHJcXG4ucGFnZS1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcGFkZGluZzogMTIwcHggNDBweCAyMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTU1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWNvdW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWNvdW50IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuLXNhbnMpO1xcclxcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIG1hcmdpbjogLTUwcHggMCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUGFnZS1TZWN0aW9uIEVuZCAqL1xcclxcbi5jYXJkLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICB3aWR0aDogMzIwcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRlbnQsXFxyXFxuLmNhcmQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJvdy1nYXA6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAyNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXk6OmJlZm9yZSxcXHJcXG4ub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogLTQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIC5jYXJkLWltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIGltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgTGlrZSBCdXR0b24gKi9cXHJcXG4ubGlrZS1jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LWljb24ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY291bnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogIzljOTQ5NjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzcwNzA3MDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idG4ge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgd2lkdGg6IDExMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgZm9vdGVyIHN0YXJ0ICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIGxpIGEge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBzcGFuLFxcclxcbi5mb290ZXIgYiB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdG9yIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogcGFsZXZpb2xldHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgUXVlcnkgU3RhcnQgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBib2R5IHtcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zb2NpYWwtaWNvbnMsXFxyXFxuICAubmF2LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQVBJbWVhbHNVUkwsIGludm9sdmVtZW50VVJMIH0gZnJvbSAnLi9hcGktdXJscy5qcyc7XG5cbi8qIEZldGNoIHRoZSBtZWFscyBsaXN0IGZyb20gTWVhbHNEQi1BUEkgKi9cbmNvbnN0IGdldE1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSW1lYWxzVVJMKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBBZGRzIGEgbmV3IGxpa2UgZm9yIGFuIGl0ZW0gaW4gdGhlIGxpa2VzLUFQSVxuY29uc3Qgc2V0TGlrZXMgPSBhc3luYyAoaWRNZWFsKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAke2ludm9sdmVtZW50VVJMfWxpa2VzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWRNZWFsLFxuICAgIH0pLFxuICB9KTtcbn07XG5cbi8vIEdldHMgYWxsIGl0ZW1zIGZyb20gdGhlIGxpa2VzLUFQSVxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRVUkx9bGlrZXMvYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IHsgZ2V0TWVhbHMsIGdldExpa2VzLCBzZXRMaWtlcyB9OyIsImNvbnN0IEFQSW1lYWxzVVJMID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2E9QW1lcmljYW4nO1xuY29uc3QgaW52b2x2ZW1lbnRVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZlpFQjJ0cElDNDVpaVVNUmpZbGkvJztcblxuZXhwb3J0IHsgQVBJbWVhbHNVUkwsIGludm9sdmVtZW50VVJMIH07XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5TWVhbHMgZnJvbSAnLi91dGlscy5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGRpc3BsYXlNZWFscygpO1xufTtcbiIsImNvbnN0IGRpc3BsYXlQb3B1cCA9IGFzeW5jIChtZWFsKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzdHJNZWFsLCBzdHJNZWFsVGh1bWIsXG4gIH0gPSBtZWFsO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb250YWluZXInKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1jb250YWluZXInKTtcbiAgcG9wdXAuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxuICAgIDxkaXYgaWQ9XCJjbG9zZS1idG5cIiBjbGFzcz1cImNsb3NlLWJ0blwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaW1hZ2VcIj5cbiAgICAgICAgPGltZyBpZD1cInBvcHVwLWltZ1wiIGNsYXNzPVwicG9wdXAtaW1nXCIgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiJHtzdHJNZWFsfSBJbWFnZVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwiZGlzaC1uYW1lXCI+JHtzdHJNZWFsfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWVhbC1jb21tZW50c1wiPlxuICAgICAgICA8aDIgY2xhc3M9XCJjb21tZW50cy10aXRsZVwiPkNvbW1lbnRzIDEwPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtc2VjdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50LWhlYWRlclwiPjAxLzEyLzIwMjI6IEdyYWNlQWJpa2U8L3NwYW4+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbW1lbnQtYm9keVwiPkknZCBsb3ZlIHRvIGJ1eSBpdDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cImZvcm0tdGl0bGVcIj5BZGQgWW91ciBDb21tZW50PC9oMz5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYXV0aG9yXCIgaGlkZGVuPVwiXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYXV0aG9yXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbW1lbnRcIiBoaWRkZW49XCJcIj5Zb3VyIGNvbW1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC1idG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2Utc2VjdGlvbicpLmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgcG9wdXAucXVlcnlTZWxlY3RvcignI2Nsb3NlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG4gIH0pO1xuICAvLyBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudF9mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICAgIGNvbnN0IGNvbW1lbnRlck5hbWUgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudGVyX25hbWUnKS52YWx1ZTtcbiAgLy8gICAgIGNvbnN0IGNvbW1lbnRUZXh0ID0gcG9wdXAucXVlcnlTZWxlY3RvcignI2NvbW1lbnRfdGV4dCcpLnZhbHVlO1xuICAvLyAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgICAgY29tbWVudC5jbGFzc0xpc3QuYWRkKCdjb21tZW50Jyk7XG4gIC8vICAgICBjb21tZW50LmlubmVySFRNTCA9IGBcbiAgLy8gICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWhlYWRlclwiPlxuICAvLyAgICAgICAgIDxoMz4ke2NvbW1lbnRlck5hbWV9PC9oMz5cbiAgLy8gICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPkRhdGU8L3NwYW4+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gICAgIDxwIGNsYXNzPVwiY29tbWVudC10ZXh0XCI+JHtjb21tZW50VGV4dH08L3A+XG4gIC8vICAgICBgO1xuICAvLyAgICAgcG9wdXAucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjb21tZW50KTtcbiAgLy8gICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50X2Zvcm0nKS5yZXNldCgpO1xuICAvLyB9KTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcbiAgLy8gZGlzcGxheVBvcHVwKG1lYWwpe1xuICAvLyB9XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UG9wdXA7IiwiaW1wb3J0IHsgZ2V0TWVhbHMsIGdldExpa2VzLCBzZXRMaWtlcyB9IGZyb20gJy4vQVBJLXV0aWxzLmpzJztcbmltcG9ydCBkaXNwbGF5UG9wdXAgZnJvbSAnLi9wb3B1cC5qcyc7XG5cbmNvbnN0IHNldE1lYWxzQ291bnQgPSBhc3luYyAoY291bnQpID0+IHtcbiAgY29uc3QgbWVhbHNDb3VudCA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFscy1jb3VudCcpO1xuICBtZWFsc0NvdW50LmlubmVySFRNTCA9IGF3YWl0IGAke2NvdW50fSBNZWFsc2A7XG4gIHJldHVybiBtZWFsc0NvdW50O1xufTtcblxuY29uc3QgZGlzcGxheU1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IGdldE1lYWxzKCk7XG4gICAgY29uc3QgbWVhbHNMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gICAgc2V0TWVhbHNDb3VudChtZWFscy5sZW5ndGgpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtY29udGVudCcpO1xuICAgIG1lYWxzLm1hcCgobWVhbCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZE1lYWwsIHN0ck1lYWwsIHN0ck1lYWxUaHVtYixcbiAgICAgIH0gPSBtZWFsO1xuICAgICAgY29uc3QgbGlrZXMgPSBtZWFsc0xpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBpZE1lYWwpO1xuICAgICAgY29uc3QgbWVhbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1lYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQtc2VjdGlvbicpO1xuICAgICAgbWVhbENhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBtZWFsLWlkPVwiJHtpZE1lYWx9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250ZW50XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJvdmVybGF5XCI+PC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwiY2FyZC1pbWdcIiBjbGFzcz1cImNhcmQtaW1nXCIgc3JjPVwiJHtzdHJNZWFsVGh1bWJ9XCIgYWx0PVwiJHtzdHJNZWFsfSBJbWFnZVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWVhbC1uYW1lXCI+JHtzdHJNZWFsfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImhlYXJ0LWljb25cIiBjbGFzcz1cImhlYXJ0LWljb25cIiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8c3BhbiBpZD1cImxpa2UtY291bnRcIiBjbGFzcz1cImxpa2UtY291bnRcIj4ke2xpa2VzLmxlbmd0aCA+IDAgPyBsaWtlc1swXS5saWtlcyA6IDB9IExpa2VzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbW1lbnQtYnRuXCIgY2xhc3M9XCJjYXJkLWJ0blwiPkNvbW1lbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXJ2YXRpb24tYnRuXCIgY2xhc3M9XCJjYXJkLWJ0blwiPlJlc2VydmF0aW9uczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gICAgICBtZWFsQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzcGxheVBvcHVwKG1lYWwpO1xuICAgICAgfSk7XG4gICAgICBtZWFsQ2FyZC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2YXRpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICAgIG1lYWxDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNoZWFydC1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBsaWtlQ291bnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWtlLWNvdW50Jyk7XG4gICAgICAgIHNldExpa2VzKGlkTWVhbCk7XG4gICAgICAgIGxpa2VDb3VudC5pbm5lckhUTUwgPSBgJHtsaWtlc1swXS5saWtlcyArIDF9IExpa2VzYDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVhbENhcmQpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvck1zZykge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1zZyk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVhbHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9