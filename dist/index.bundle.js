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
___CSS_LOADER_EXPORT___.push([module.id, "*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* modal */\r\n.modal-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 99999;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(18, 5, 65, 0.61);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.modal-container:target {\r\n  display: flex;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 95%;\r\n  border-radius: 18px;\r\n  color: hsl(220, 50%, 90%);\r\n  background: linear-gradient(to right, hsl(244, 90%, 27%), hsl(336, 87%, 43%));\r\n  padding: 35px 45px;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n/* close Button */\r\n.close-btn {\r\n  align-self: flex-end;\r\n  position: absolute;\r\n  right: 1.5%;\r\n  top: 1.5%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.close-btn a {\r\n  position: sticky;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: inherit;\r\n  border: 1px solid hsla(0, 0%, 100%, 0.2);\r\n  border-radius: 100%;\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 0;\r\n  margin: 0;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-btn a::before {\r\n  content: 'x';\r\n  transform: translateY(-0.1rem);\r\n}\r\n\r\n.close-btn a:hover,\r\n.close-btn a:focus {\r\n  background: hsl(258, 92%, 24%);\r\n  border-color: hsl(351, 89%, 42%);\r\n  transform: translate(0.1rem, -0.2rem);\r\n}\r\n\r\n/* Card-content */\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.popup-image {\r\n  display: flex;\r\n  max-width: 100%;\r\n  max-height: 75%;\r\n  padding: 10px 5px;\r\n}\r\n\r\n.popup-img {\r\n  border-radius: 50px 50px 50px 50px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-details {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n​ .card-details,\r\nh2,\r\nh3,\r\np,\r\nul,\r\nli,\r\nspan {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif;\r\n  line-height: 1.5;\r\n  letter-spacing: 1px;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 10px 10px 5px;\r\n}\r\n\r\n.meal-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.comments-title {\r\n  align-self: center;\r\n  padding: 5px;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-title {\r\n  align-self: center;\r\n  padding: 20px 0 5px;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  padding: 15px 0 0;\r\n}\r\n\r\n.form-group input {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  min-height: 1.5rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.form-group textarea {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  padding: 10px 12px;\r\n}", "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,UAAU;AACV;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,uCAAuC;EACvC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,6EAA6E;EAC7E,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,UAAU;EACV,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,wCAAwC;EACxC,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;;EAEE,8BAA8B;EAC9B,gCAAgC;EAChC,qCAAqC;AACvC;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,uBAAuB;EACvB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;;;;;EAOE,mFAAmF;EACnF,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,SAAS;EACT,aAAa;EACb,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;AACpB","sourcesContent":["*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* modal */\r\n.modal-container {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 99999;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(18, 5, 65, 0.61);\r\n  backdrop-filter: blur(5px);\r\n}\r\n\r\n.modal-container:target {\r\n  display: flex;\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 95%;\r\n  border-radius: 18px;\r\n  color: hsl(220, 50%, 90%);\r\n  background: linear-gradient(to right, hsl(244, 90%, 27%), hsl(336, 87%, 43%));\r\n  padding: 35px 45px;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n\r\n/* close Button */\r\n.close-btn {\r\n  align-self: flex-end;\r\n  position: absolute;\r\n  right: 1.5%;\r\n  top: 1.5%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.close-btn a {\r\n  position: sticky;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2rem;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: inherit;\r\n  border: 1px solid hsla(0, 0%, 100%, 0.2);\r\n  border-radius: 100%;\r\n  width: 32px;\r\n  height: 32px;\r\n  padding: 0;\r\n  margin: 0;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-btn a::before {\r\n  content: 'x';\r\n  transform: translateY(-0.1rem);\r\n}\r\n\r\n.close-btn a:hover,\r\n.close-btn a:focus {\r\n  background: hsl(258, 92%, 24%);\r\n  border-color: hsl(351, 89%, 42%);\r\n  transform: translate(0.1rem, -0.2rem);\r\n}\r\n\r\n/* Card-content */\r\n.popup-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.popup-image {\r\n  display: flex;\r\n  max-width: 100%;\r\n  max-height: 75%;\r\n  padding: 10px 5px;\r\n}\r\n\r\n.popup-img {\r\n  border-radius: 50px 50px 50px 50px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.card-details {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n​ .card-details,\r\nh2,\r\nh3,\r\np,\r\nul,\r\nli,\r\nspan {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif;\r\n  line-height: 1.5;\r\n  letter-spacing: 1px;\r\n  list-style: none;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 10px 10px 5px;\r\n}\r\n\r\n.meal-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.comments-title {\r\n  align-self: center;\r\n  padding: 5px;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  overflow-wrap: break-word;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.comment-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-title {\r\n  align-self: center;\r\n  padding: 20px 0 5px;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n  padding: 15px 0 0;\r\n}\r\n\r\n.form-group input {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  min-height: 1.5rem;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.form-group textarea {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  padding: 10px 12px;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font */\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --white: #fff;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.title h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background-color: darkblue;\r\n  color: var(--white);\r\n  font-weight: 600;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.nav-item {\r\n  width: max-content;\r\n}\r\n\r\n.name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n  margin: -10px 0 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n/* Page-Section Start */\r\n.page-section {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 120px 40px 20px;\r\n  min-height: 555px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.meals-count {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  padding: 0 50px;\r\n}\r\n.meals-count h2 {\r\n  font-size: 15px;\r\n  font-family: var(--open-sans);\r\n  color: palevioletred;\r\n  background: darkblue;\r\n  text-align: center;\r\n  border-radius: 25px;\r\n  border: 3px solid palevioletred;\r\n  padding: 15px;\r\n  margin: -50px 0 25px;\r\n}\r\n\r\n.page-content {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 25px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* Page-Section End */\r\n.card-section {\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  width: 320px;\r\n  border: 3px solid palevioletred;\r\n  border-radius: 27px;\r\n}\r\n\r\n.image-content,\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-content {\r\n  position: relative;\r\n  row-gap: 5px;\r\n  padding: 25px 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: darkblue;\r\n  border-radius: 25px 25px 0 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.overlay::before,\r\n.overlay::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -40px;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.overlay::after {\r\n  border-radius: 0 25px 0 0;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 250px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-image .card-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-section img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  z-index: 1;\r\n}\r\n\r\n/* The Like Button */\r\n.like-content {\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n.heart-icon {\r\n  color: red;\r\n}\r\n\r\n.like-count::before {\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  content: '100 Likes';\r\n  color: #9c9496;\r\n}\r\n\r\n.meal-name {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-align: center;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-btn {\r\n  font-family: var(--open-sans);\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  background-color: pink;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  height: 35px;\r\n  width: 110px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: palevioletred;\r\n}\r\n\r\n/* The footer start */\r\nfooter {\r\n  margin-top: auto;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: white;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.social-icons li a {\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\n.footer span,\r\n.footer b {\r\n  font-size: 1rem;\r\n}\r\n\r\n.creator {\r\n  font-weight: 400;\r\n  color: palevioletred;\r\n}\r\n\r\n/* Media Query Start */\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .social-icons,\r\n  .nav-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Google font */\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans');\r\n@import url(\"./popup.css\");\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --white: #fff;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n  --verdana: verdana, tahoma, sans-serif;\r\n  --Tahoma: tahoma, verdana, sans-serif;\r\n  --sans-serif: sans-serif, verdana, tahoma;\r\n  --open-sans: \"Open Sans\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  font-family: var(--open-sans);\r\n  font-style: normal;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.title h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  background-color: darkblue;\r\n  color: var(--white);\r\n  font-weight: 600;\r\n  align-items: center;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-family: 'Material Symbols Outlined', sans-serif;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.nav-item {\r\n  width: max-content;\r\n}\r\n\r\n.name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  flex-wrap: nowrap;\r\n  margin: -10px 0 0;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav-menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid pink;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--white);\r\n}\r\n\r\n/* Page-Section Start */\r\n.page-section {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 120px 40px 20px;\r\n  min-height: 555px;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.meals-count {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  width: 100%;\r\n  padding: 0 50px;\r\n}\r\n.meals-count h2 {\r\n  font-size: 15px;\r\n  font-family: var(--open-sans);\r\n  color: palevioletred;\r\n  background: darkblue;\r\n  text-align: center;\r\n  border-radius: 25px;\r\n  border: 3px solid palevioletred;\r\n  padding: 15px;\r\n  margin: -50px 0 25px;\r\n}\r\n\r\n.page-content {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 25px;\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* Page-Section End */\r\n.card-section {\r\n  display: flex;\r\n  width: auto;\r\n}\r\n\r\n.card {\r\n  width: 320px;\r\n  border: 3px solid palevioletred;\r\n  border-radius: 27px;\r\n}\r\n\r\n.image-content,\r\n.card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 10px 14px;\r\n}\r\n\r\n.image-content {\r\n  position: relative;\r\n  row-gap: 5px;\r\n  padding: 25px 0;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: darkblue;\r\n  border-radius: 25px 25px 0 25px;\r\n  padding: 10px;\r\n}\r\n\r\n.overlay::before,\r\n.overlay::after {\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -40px;\r\n  height: 40px;\r\n  width: 40px;\r\n  background-color: darkblue;\r\n}\r\n\r\n.overlay::after {\r\n  border-radius: 0 25px 0 0;\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.card-image {\r\n  position: relative;\r\n  height: 250px;\r\n  width: 250px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-image .card-img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-section img {\r\n  width: 300px;\r\n  height: 300px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n  z-index: 1;\r\n}\r\n\r\n/* The Like Button */\r\n.like-content {\r\n  font-size: 18px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  padding: 5px;\r\n}\r\n\r\n.heart-icon {\r\n  color: red;\r\n}\r\n\r\n.like-count::before {\r\n  font-family: sans-serif;\r\n  font-size: 15px;\r\n  content: '100 Likes';\r\n  color: #9c9496;\r\n}\r\n\r\n.meal-name {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #333;\r\n}\r\n\r\n.description {\r\n  font-size: 14px;\r\n  color: #707070;\r\n  text-align: center;\r\n}\r\n\r\n.card-buttons {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-btn {\r\n  font-family: var(--open-sans);\r\n  font-size: 15px;\r\n  padding: 8px;\r\n  background-color: pink;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  height: 35px;\r\n  width: 110px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.card-btn:hover {\r\n  background-color: palevioletred;\r\n}\r\n\r\n/* The footer start */\r\nfooter {\r\n  margin-top: auto;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  color: white;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.social-icons li a {\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  transition: 0.5s;\r\n  opacity: 0.75;\r\n}\r\n\r\n.social-icons li a:hover {\r\n  transform: translateY(-10px);\r\n  opacity: 1;\r\n}\r\n\r\n.footer span,\r\n.footer b {\r\n  font-size: 1rem;\r\n}\r\n\r\n.creator {\r\n  font-weight: 400;\r\n  color: palevioletred;\r\n}\r\n\r\n/* Media Query Start */\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .social-icons,\r\n  .nav-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n}"],"sourceRoot":""}]);
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



// const setHeaderLogo = () => {
//   document.querySelector('#header_logo').src = logo;
// };
const setMealsCount = async (meals) => {
  const countElement = document.querySelector('#meals-count');
  const counter = await meals.length;
  countElement.innerHTML = `Number of Meals: (${counter})`;
  return counter;
};

const displayMeals = async () => {
  try {
    // Fetching the meals from the API
    const fetchedMeals = await fetch(_API_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    const { meals } = await fetchedMeals.json();
    // Setting the meals count
    setMealsCount(meals);
    // Get the Page-Content element to insert meal cards
    const pageContent = document.querySelector('#page-content');
    // Looping through the meals
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
        /* here you should invoke the showComments(idMeal) function
                and pass the idMeal as an argument
                */
        console.log('comment button clicked');
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meal);
        //  const modal = document.querySelector('#modal_container');
        //  modal.style.display = 'flex';
        //  modal.querySelector('#card_img').src = strMealThumb;
      });

      // Setting the reservation button event listener
      mealCard.querySelector('#reservation-btn').addEventListener('click', () => {
        /* here you should invoke the showReservations(idMeal) function
                and pass the idMeal as an argument
                */
      });

      // Setting the like button event listener
      // const likeCount = mealCard.querySelector('#like_count');
      mealCard.querySelector('#heart-icon').addEventListener('click', () => {
        /* here you should invoke the addLike(idMeal, likeCount) function
                and pass the { idMeal, likeCount } as arguments
                */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssK0hBQStILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvcG9wdXAuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvQVBJLXV0aWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXByb2plY3QvLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCAqL1xcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgNSwgNjUsIDAuNjEpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXI6dGFyZ2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXHJcXG4gIGNvbG9yOiBoc2woMjIwLCA1MCUsIDkwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGhzbCgyNDQsIDkwJSwgMjclKSwgaHNsKDMzNiwgODclLCA0MyUpKTtcXHJcXG4gIHBhZGRpbmc6IDM1cHggNDVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDEuNSU7XFxyXFxuICB0b3A6IDEuNSU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGEge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biBhOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ3gnO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGE6aG92ZXIsXFxyXFxuLmNsb3NlLWJ0biBhOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IGhzbCgyNTgsIDkyJSwgMjQlKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogaHNsKDM1MSwgODklLCA0MiUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4xcmVtLCAtMC4ycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2FyZC1jb250ZW50ICovXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNzUlO1xcclxcbiAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGV0YWlscyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG7igIsgLmNhcmQtZGV0YWlscyxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5wLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbnNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10aXRsZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTVweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWluLWhlaWdodDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLFVBQVU7QUFDVjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNkVBQTZFO0VBQzdFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLHFDQUFxQztBQUN2Qzs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7OztFQU9FLG1GQUFtRjtFQUNuRixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCAqL1xcclxcbi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDk5OTk5O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOCwgNSwgNjUsIDAuNjEpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250YWluZXI6dGFyZ2V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOTUlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXHJcXG4gIGNvbG9yOiBoc2woMjIwLCA1MCUsIDkwJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGhzbCgyNDQsIDkwJSwgMjclKSwgaHNsKDMzNiwgODclLCA0MyUpKTtcXHJcXG4gIHBhZGRpbmc6IDM1cHggNDVweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjbG9zZSBCdXR0b24gKi9cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDEuNSU7XFxyXFxuICB0b3A6IDEuNSU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGEge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDEwMCUsIDAuMik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biBhOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJ3gnO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjFyZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIGE6aG92ZXIsXFxyXFxuLmNsb3NlLWJ0biBhOmZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQ6IGhzbCgyNTgsIDkyJSwgMjQlKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogaHNsKDM1MSwgODklLCA0MiUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4xcmVtLCAtMC4ycmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2FyZC1jb250ZW50ICovXFxyXFxuLnBvcHVwLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LWhlaWdodDogNzUlO1xcclxcbiAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZGV0YWlscyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG7igIsgLmNhcmQtZGV0YWlscyxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5wLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbnNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4ubmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy10aXRsZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTVweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWluLWhlaWdodDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHb29nbGUgZm9udCAqL1xcclxcblxcclxcbi8qIHBhZ2UgcmVzZXQgc3R5bGVzICovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1tb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1vcGVuLXNhbnM6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgLS12ZXJkYW5hOiB2ZXJkYW5hLCB0YWhvbWEsIHNhbnMtc2VyaWY7XFxyXFxuICAtLVRhaG9tYTogdGFob21hLCB2ZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1zYW5zLXNlcmlmOiBzYW5zLXNlcmlmLCB2ZXJkYW5hLCB0YWhvbWE7XFxyXFxuICAtLW9wZW4tc2FuczogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBoMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIGIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIG1hcmdpbjogLTEwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUgbGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbWVudSBsaTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcGluaztcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQYWdlLVNlY3Rpb24gU3RhcnQgKi9cXHJcXG4ucGFnZS1zZWN0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcGFkZGluZzogMTIwcHggNDBweCAyMHB4O1xcclxcbiAgbWluLWhlaWdodDogNTU1cHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWNvdW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNTBweDtcXHJcXG59XFxyXFxuLm1lYWxzLWNvdW50IGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuLXNhbnMpO1xcclxcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIG1hcmdpbjogLTUwcHggMCAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUGFnZS1TZWN0aW9uIEVuZCAqL1xcclxcbi5jYXJkLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICB3aWR0aDogMzIwcHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWNvbnRlbnQsXFxyXFxuLmNhcmQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJvdy1nYXA6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAyNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXk6OmJlZm9yZSxcXHJcXG4ub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogLTQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheTo6YWZ0ZXIge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDAgMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIC5jYXJkLWltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1zZWN0aW9uIGltZyB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgTGlrZSBCdXR0b24gKi9cXHJcXG4ubGlrZS1jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LWljb24ge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY291bnQ6OmJlZm9yZSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGNvbnRlbnQ6ICcxMDAgTGlrZXMnO1xcclxcbiAgY29sb3I6ICM5Yzk0OTY7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICM3MDcwNzA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnRuIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1vcGVuLXNhbnMpO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHdpZHRoOiAxMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIGZvb3RlciBzdGFydCAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyBsaSBhIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICBvcGFjaXR5OiAwLjc1O1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgc3BhbixcXHJcXG4uZm9vdGVyIGIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRvciB7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJ5IFN0YXJ0ICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc29jaWFsLWljb25zLFxcclxcbiAgLm5hdi1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6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QUE2QjtFQUM3QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBOztJQUVFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztFQUNYO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR29vZ2xlIGZvbnQgKi9cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMnKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiLi9wb3B1cC5jc3NcXFwiKTtcXHJcXG5cXHJcXG4vKiBwYWdlIHJlc2V0IHN0eWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWZvbnQtbW9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS13aGl0ZTogI2ZmZjtcXHJcXG4gIC0tb3Blbi1zYW5zOiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tdmVyZGFuYTogdmVyZGFuYSwgdGFob21hLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1UYWhvbWE6IHRhaG9tYSwgdmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tc2Fucy1zZXJpZjogc2Fucy1zZXJpZiwgdmVyZGFuYSwgdGFob21hO1xcclxcbiAgLS1vcGVuLXNhbnM6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW9wZW4tc2Fucyk7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5mbGV4LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgU3ltYm9scyBPdXRsaW5lZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZSBiIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBtYXJnaW46IC0xMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1tZW51IGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW1lbnUgbGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHBpbms7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUGFnZS1TZWN0aW9uIFN0YXJ0ICovXFxyXFxuLnBhZ2Utc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHBhZGRpbmc6IDEyMHB4IDQwcHggMjBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDU1NXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFscy1jb3VudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxufVxcclxcbi5tZWFscy1jb3VudCBoMiB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbiAgYmFja2dyb3VuZDogZGFya2JsdWU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgcGFsZXZpb2xldHJlZDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXJnaW46IC01MHB4IDAgMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFBhZ2UtU2VjdGlvbiBFbmQgKi9cXHJcXG4uY2FyZC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgd2lkdGg6IDMyMHB4O1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgcGFsZXZpb2xldHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI3cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZS1jb250ZW50LFxcclxcbi5jYXJkLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByb3ctZ2FwOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMjVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5OjpiZWZvcmUsXFxyXFxuLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IC00MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXk6OmFmdGVyIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAwIDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSAuY2FyZC1pbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIExpa2UgQnV0dG9uICovXFxyXFxuLmxpa2UtY29udGVudCB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvdW50OjpiZWZvcmUge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb250ZW50OiAnMTAwIExpa2VzJztcXHJcXG4gIGNvbG9yOiAjOWM5NDk2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjNzA3MDcwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ0biB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tb3Blbi1zYW5zKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBmb290ZXIgc3RhcnQgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMgbGkgYSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgb3BhY2l0eTogMC43NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyBsaSBhOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHNwYW4sXFxyXFxuLmZvb3RlciBiIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0b3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBRdWVyeSBTdGFydCAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvY2lhbC1pY29ucyxcXHJcXG4gIC5uYXYtbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBBUEltZWFsc1VSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9hPUFtZXJpY2FuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSW1lYWxzVVJMO1xyXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGRpc3BsYXlNZWFscyBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgZGlzcGxheU1lYWxzKCk7XHJcbn07XHJcbiIsImNvbnN0IGRpc3BsYXlQb3B1cCA9IGFzeW5jIChtZWFsKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHN0ck1lYWwsIHN0ck1lYWxUaHVtYixcclxuICAgIH0gPSBtZWFsO1xyXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdpZCcsICdtb2RhbC1jb250YWluZXInKTtcclxuICAgIHBvcHVwLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgPGRpdiBpZD1cImNsb3NlLWJ0blwiIGNsYXNzPVwiY2xvc2UtYnRuXCI+PGEgaHJlZj1cIiNcIj48L2E+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIGlkPVwicG9wdXAtaW1nXCIgY2xhc3M9XCJwb3B1cC1pbWdcIiBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCIke3N0ck1lYWx9IEltYWdlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1kZXRhaWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cImRpc2gtbmFtZVwiPiR7c3RyTWVhbH08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtY29tbWVudHNcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjb21tZW50cy10aXRsZVwiPkNvbW1lbnRzIDEwPC9oMj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50cy1saXN0XCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnQtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnQtaGVhZGVyXCI+MDEvMTIvMjAyMjogR3JhY2VBYmlrZTwvc3Bhbj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb21tZW50LWJvZHlcIj5JJ2QgbG92ZSB0byBidXkgaXQ8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiZm9ybS10aXRsZVwiPkFkZCBZb3VyIENvbW1lbnQ8L2gzPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhdXRob3JcIiBoaWRkZW49XCJcIj5Zb3VyIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImF1dGhvclwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZW50XCIgaGlkZGVuPVwiXCI+WW91ciBjb21tZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC1idG5cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2Utc2VjdGlvbicpLmFwcGVuZENoaWxkKHBvcHVwKTtcclxuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcG9wdXAucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICB9KTtcclxuICAgIC8vIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50X2Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICAgICBjb25zdCBjb21tZW50ZXJOYW1lID0gcG9wdXAucXVlcnlTZWxlY3RvcignI2NvbW1lbnRlcl9uYW1lJykudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc3QgY29tbWVudFRleHQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudF90ZXh0JykudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgLy8gICAgIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xyXG4gICAgLy8gICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWhlYWRlclwiPlxyXG4gICAgLy8gICAgICAgICA8aDM+JHtjb21tZW50ZXJOYW1lfTwvaDM+XHJcbiAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzPVwiY29tbWVudC1kYXRlXCI+RGF0ZTwvc3Bhbj5cclxuICAgIC8vICAgICA8L2Rpdj5cclxuICAgIC8vICAgICA8cCBjbGFzcz1cImNvbW1lbnQtdGV4dFwiPiR7Y29tbWVudFRleHR9PC9wPlxyXG4gICAgLy8gICAgIGA7XHJcbiAgICAvLyAgICAgcG9wdXAucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWNvbnRlbnQnKS5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICAgIC8vICAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudF9mb3JtJykucmVzZXQoKTtcclxuICAgIC8vIH0pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIH07XHJcbiAgLy8gZGlzcGxheVBvcHVwKG1lYWwpe1xyXG4gIC8vIH1cclxuICBleHBvcnQgZGVmYXVsdCBkaXNwbGF5UG9wdXA7IiwiaW1wb3J0IG1lYWxzVVJMIGZyb20gJy4vQVBJLXV0aWxzLmpzJztcclxuaW1wb3J0IGRpc3BsYXlQb3B1cCBmcm9tICcuL3BvcHVwLmpzJztcclxuXHJcbi8vIGNvbnN0IHNldEhlYWRlckxvZ28gPSAoKSA9PiB7XHJcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcl9sb2dvJykuc3JjID0gbG9nbztcclxuLy8gfTtcclxuY29uc3Qgc2V0TWVhbHNDb3VudCA9IGFzeW5jIChtZWFscykgPT4ge1xyXG4gIGNvbnN0IGNvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZWFscy1jb3VudCcpO1xyXG4gIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCBtZWFscy5sZW5ndGg7XHJcbiAgY291bnRFbGVtZW50LmlubmVySFRNTCA9IGBOdW1iZXIgb2YgTWVhbHM6ICgke2NvdW50ZXJ9KWA7XHJcbiAgcmV0dXJuIGNvdW50ZXI7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5TWVhbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIEZldGNoaW5nIHRoZSBtZWFscyBmcm9tIHRoZSBBUElcclxuICAgIGNvbnN0IGZldGNoZWRNZWFscyA9IGF3YWl0IGZldGNoKG1lYWxzVVJMKTtcclxuICAgIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IGZldGNoZWRNZWFscy5qc29uKCk7XHJcbiAgICAvLyBTZXR0aW5nIHRoZSBtZWFscyBjb3VudFxyXG4gICAgc2V0TWVhbHNDb3VudChtZWFscyk7XHJcbiAgICAvLyBHZXQgdGhlIFBhZ2UtQ29udGVudCBlbGVtZW50IHRvIGluc2VydCBtZWFsIGNhcmRzXHJcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlLWNvbnRlbnQnKTtcclxuICAgIC8vIExvb3BpbmcgdGhyb3VnaCB0aGUgbWVhbHNcclxuICAgIG1lYWxzLm1hcCgobWVhbCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgaWRNZWFsLCBzdHJNZWFsLCBzdHJNZWFsVGh1bWIsXHJcbiAgICAgIH0gPSBtZWFsO1xyXG4gICAgICBjb25zdCBtZWFsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBtZWFsQ2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLXNlY3Rpb24nKTtcclxuICAgICAgbWVhbENhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIG1lYWwtaWQ9XCIke2lkTWVhbH1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJvdmVybGF5XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJjYXJkLWltZ1wiIGNsYXNzPVwiY2FyZC1pbWdcIiBzcmM9XCIke3N0ck1lYWxUaHVtYn1cIiBhbHQ9XCIke3N0ck1lYWx9IEltYWdlXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1lYWwtbmFtZVwiPiR7c3RyTWVhbH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpb24taWNvbiBpZD1cImhlYXJ0LWljb25cIiBjbGFzcz1cImhlYXJ0LWljb25cIiBuYW1lPVwiaGVhcnRcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsaWtlLWNvdW50XCIgY2xhc3M9XCJsaWtlLWNvdW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb21tZW50LWJ0blwiIGNsYXNzPVwiY2FyZC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXJ2YXRpb24tYnRuXCIgY2xhc3M9XCJjYXJkLWJ0blwiPlJlc2VydmF0aW9uczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgLy8gU2V0dGluZyB0aGUgY29tbWVudCBidXR0b24gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgbWVhbENhcmQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLyogaGVyZSB5b3Ugc2hvdWxkIGludm9rZSB0aGUgc2hvd0NvbW1lbnRzKGlkTWVhbCkgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIGFuZCBwYXNzIHRoZSBpZE1lYWwgYXMgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgYnV0dG9uIGNsaWNrZWQnKTtcclxuICAgICAgICBkaXNwbGF5UG9wdXAobWVhbCk7XHJcbiAgICAgICAgLy8gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIC8vICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIC8vICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2FyZF9pbWcnKS5zcmMgPSBzdHJNZWFsVGh1bWI7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2V0dGluZyB0aGUgcmVzZXJ2YXRpb24gYnV0dG9uIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgIG1lYWxDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZhdGlvbi1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvKiBoZXJlIHlvdSBzaG91bGQgaW52b2tlIHRoZSBzaG93UmVzZXJ2YXRpb25zKGlkTWVhbCkgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgIGFuZCBwYXNzIHRoZSBpZE1lYWwgYXMgYW4gYXJndW1lbnRcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU2V0dGluZyB0aGUgbGlrZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgLy8gY29uc3QgbGlrZUNvdW50ID0gbWVhbENhcmQucXVlcnlTZWxlY3RvcignI2xpa2VfY291bnQnKTtcclxuICAgICAgbWVhbENhcmQucXVlcnlTZWxlY3RvcignI2hlYXJ0LWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvKiBoZXJlIHlvdSBzaG91bGQgaW52b2tlIHRoZSBhZGRMaWtlKGlkTWVhbCwgbGlrZUNvdW50KSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgYW5kIHBhc3MgdGhlIHsgaWRNZWFsLCBsaWtlQ291bnQgfSBhcyBhcmd1bWVudHNcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKG1lYWxDYXJkKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yTXNnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==