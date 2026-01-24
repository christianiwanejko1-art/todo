/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    font-family: "Roboto";
}

html {
    overflow-x: hidden;
}

#main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr;
    position: relative;
}

.hidden1{
    display: none;
}

#navBar {
    position: relative
}

#navSide {
    width: 100%;
}

#navUl {
    list-style-type: none;
}

#main {
    display: grid;
    grid-template-columns: 2fr 8fr;
}

#navSide {
    grid-column: 1;
    grid-row: 3 / 4;
}

#tasksContainer {
    display: grid;
    grid-column: 2;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 75px 75px 1fr 12fr;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
}

#tasksInner {
    background-color: white;
    width: 100%;
    height: 100%;
    display: grid;
    grid-column: 1 / 4;
    grid-row: 3 / -1;
    grid-template-columns: 1fr 10fr 1fr 10fr 1fr 10fr 1fr

}

.tasksInProgressWrapper {
    width: 100%;
    height: 100%;
    grid-column: 2 / 3;
    grid-row: 1 ;
}


.tasksInReviewWrapper {
    width: 100%;
    height: 100%;
    grid-column: 4 / 5;
    grid-row: 1 / 2;
}

.tasksCompletedWrapper {
    width: 100%;
    height: 100%;
    grid-column: 6 / 7;
    grid-row: 1 / 2;
}


.tasksinprogressH1, .tasksinreviewH1, .taskscompletedH1 {
    text-align: center;
    padding: 16px;
}

.taskContain {
    width: 100%;
    background-color: rgb(245, 245, 245);
    border-radius: 16px;
}

.card {
    background-color: white;
    border: 8px solid rgb(245, 245, 245);
    border-radius: 16px;
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    position: relative
}

.icon {
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    cursor: pointer;
}

.card > * {
    padding: 16px;
}

.card h1 {
    grid-row: 2;
}

.card p {
    grid-row: 3;
}


.title {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    grid-row: 1 / 3;
}

.addDiv {
    grid-column: 3;
    grid-row: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
}


.addBtn {
    width: 100px;
    height: 50px;
    background-color: white;
    border: none;
    background: #05691b;
    background: linear-gradient(0deg, rgba(5, 105, 27, 1) 0%, rgba(21, 176, 55, 1) 100%);
    color: white;
    cursor: pointer;
}

.navBar {
    width: 100%;
}

#logo {
    padding: 32px;
}

#navSide h1 {
    padding: 16px 16px 0 16px;
    font-size: 16px;
}

#navUl {
    padding: 16px;
}

#navUl li {
    padding: 8px 0;
}

#form {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 450px;
  background-color: rgb(219, 219, 219);
  padding: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 32px;

}

form {
    display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr 2fr 1fr 2fr 1fr 1fr 1fr;
}

input[type='submit'] {
    height: 48px;
}

form label {
    padding-top: 16px;
}

input[name='choice'] {
    margin-left: 8px;
}

/* Base */
body {
  margin: 0;
  font-family: sans-serif;

}

/* Blur effect */
.blur {
  filter: blur(6px);
  pointer-events: none; /* disable clicks behind modal */
}

/* Modal overlay */
.hidden {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.hiddenitem {
    display: none;
}

.icon {
    width: 24px;
    height: 24px;
    float: right;
}

#form2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 450px;
  background-color: rgb(219, 219, 219);
  padding: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 32px;

}

.form2 {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.hiddenitem2 {
    display: none;
}

.cardButton {
    grid-row: 4;
    border: none;
}

.tasksInprogressBTN {
    background-color: red;
}

.tasksInreviewBTN {
    background-color: orange;
}

.tasksCompletedBTN {
    background-color: green;
}

.hiddenitem2 { display: none; }

#form2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 450px;
  background-color: rgb(219, 219, 219);
  padding: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 32px;

}

.form2 {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

#mobileNavContainer{
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
}


@media (max-width: 1000px) {

  #tasksContainer {
    grid-template-columns: 1fr 1fr;
  }

  #tasksInner {
    grid-template-columns: 1fr 10fr 1fr 10fr 1fr;
  }

  .tasksInProgressWrapper {
    grid-column: 2 / 3;
    grid-row: 1;
  }

  .tasksInReviewWrapper {
    grid-column: 4 / 5;
    grid-row: 1;
  }

  .tasksCompletedWrapper {
    grid-column: 2 / 5;
    grid-row: 2;
  }
}

@media (max-width: 768px) {
    .tasksInProgressWrapper {
    grid-column: 2 / 5;
    grid-row: 1;
  }

  .tasksInReviewWrapper {
    grid-column: 2 / 5;
    grid-row: 2;
  }

  .tasksCompletedWrapper {
    grid-column: 2 / 5;
    grid-row: 3;
  }

  #main {
    grid-template-columns: repeat(1, 1fr);
  }

  .navBar {
    display: none;
  }

    #mobileNavContainer{
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
    }

  #tasksContainer {
    grid-column: 1 / 2;
  }

  #mobileNav {
    background-color: black;
    color: white;
    padding: 16px;
  }

  #mobileNav li {
    list-style-type: none;
    padding: 8px;
  }

  #svgBurger {
    width: 40px;
    height: auto;
  }


}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: \"Roboto\";\r\n}\r\n\r\nhtml {\r\n    overflow-x: hidden;\r\n}\r\n\r\n#main {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;\r\n    position: relative;\r\n}\r\n\r\n.hidden1{\r\n    display: none;\r\n}\r\n\r\n#navBar {\r\n    position: relative\r\n}\r\n\r\n#navSide {\r\n    width: 100%;\r\n}\r\n\r\n#navUl {\r\n    list-style-type: none;\r\n}\r\n\r\n#main {\r\n    display: grid;\r\n    grid-template-columns: 2fr 8fr;\r\n}\r\n\r\n#navSide {\r\n    grid-column: 1;\r\n    grid-row: 3 / 4;\r\n}\r\n\r\n#tasksContainer {\r\n    display: grid;\r\n    grid-column: 2;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 75px 75px 1fr 12fr;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n#tasksInner {\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-column: 1 / 4;\r\n    grid-row: 3 / -1;\r\n    grid-template-columns: 1fr 10fr 1fr 10fr 1fr 10fr 1fr\r\n\r\n}\r\n\r\n.tasksInProgressWrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 ;\r\n}\r\n\r\n\r\n.tasksInReviewWrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-column: 4 / 5;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.tasksCompletedWrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-column: 6 / 7;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n.tasksinprogressH1, .tasksinreviewH1, .taskscompletedH1 {\r\n    text-align: center;\r\n    padding: 16px;\r\n}\r\n\r\n.taskContain {\r\n    width: 100%;\r\n    background-color: rgb(245, 245, 245);\r\n    border-radius: 16px;\r\n}\r\n\r\n.card {\r\n    background-color: white;\r\n    border: 8px solid rgb(245, 245, 245);\r\n    border-radius: 16px;\r\n    display: grid;\r\n    grid-template-rows: 1fr 2fr 2fr;\r\n    position: relative\r\n}\r\n\r\n.icon {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    right: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.card > * {\r\n    padding: 16px;\r\n}\r\n\r\n.card h1 {\r\n    grid-row: 2;\r\n}\r\n\r\n.card p {\r\n    grid-row: 3;\r\n}\r\n\r\n\r\n.title {\r\n    display: flex;\r\n    align-items: center;\r\n    /* justify-content: center; */\r\n    grid-row: 1 / 3;\r\n}\r\n\r\n.addDiv {\r\n    grid-column: 3;\r\n    grid-row: 1 / 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.addBtn {\r\n    width: 100px;\r\n    height: 50px;\r\n    background-color: white;\r\n    border: none;\r\n    background: #05691b;\r\n    background: linear-gradient(0deg, rgba(5, 105, 27, 1) 0%, rgba(21, 176, 55, 1) 100%);\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.navBar {\r\n    width: 100%;\r\n}\r\n\r\n#logo {\r\n    padding: 32px;\r\n}\r\n\r\n#navSide h1 {\r\n    padding: 16px 16px 0 16px;\r\n    font-size: 16px;\r\n}\r\n\r\n#navUl {\r\n    padding: 16px;\r\n}\r\n\r\n#navUl li {\r\n    padding: 8px 0;\r\n}\r\n\r\n#form {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 300px;\r\n  height: 450px;\r\n  background-color: rgb(219, 219, 219);\r\n  padding: 32px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 32px;\r\n\r\n}\r\n\r\nform {\r\n    display: grid;\r\n  width: 100%;\r\n  height: 100%;\r\n  grid-template-rows: 1fr 1fr 2fr 1fr 2fr 1fr 1fr 1fr;\r\n}\r\n\r\ninput[type='submit'] {\r\n    height: 48px;\r\n}\r\n\r\nform label {\r\n    padding-top: 16px;\r\n}\r\n\r\ninput[name='choice'] {\r\n    margin-left: 8px;\r\n}\r\n\r\n/* Base */\r\nbody {\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n\r\n}\r\n\r\n/* Blur effect */\r\n.blur {\r\n  filter: blur(6px);\r\n  pointer-events: none; /* disable clicks behind modal */\r\n}\r\n\r\n/* Modal overlay */\r\n.hidden {\r\n  position: fixed;\r\n  inset: 0;\r\n  display: grid;\r\n  place-items: center;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  z-index: 1000;\r\n}\r\n\r\n.hiddenitem {\r\n    display: none;\r\n}\r\n\r\n.icon {\r\n    width: 24px;\r\n    height: 24px;\r\n    float: right;\r\n}\r\n\r\n#form2 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 300px;\r\n  height: 450px;\r\n  background-color: rgb(219, 219, 219);\r\n  padding: 32px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 32px;\r\n\r\n}\r\n\r\n.form2 {\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.hiddenitem2 {\r\n    display: none;\r\n}\r\n\r\n.cardButton {\r\n    grid-row: 4;\r\n    border: none;\r\n}\r\n\r\n.tasksInprogressBTN {\r\n    background-color: red;\r\n}\r\n\r\n.tasksInreviewBTN {\r\n    background-color: orange;\r\n}\r\n\r\n.tasksCompletedBTN {\r\n    background-color: green;\r\n}\r\n\r\n.hiddenitem2 { display: none; }\r\n\r\n#form2 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 300px;\r\n  height: 450px;\r\n  background-color: rgb(219, 219, 219);\r\n  padding: 32px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 32px;\r\n\r\n}\r\n\r\n.form2 {\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100%;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n#mobileNavContainer{\r\n    width: 100%;\r\n    height: auto;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n\r\n@media (max-width: 1000px) {\r\n\r\n  #tasksContainer {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  #tasksInner {\r\n    grid-template-columns: 1fr 10fr 1fr 10fr 1fr;\r\n  }\r\n\r\n  .tasksInProgressWrapper {\r\n    grid-column: 2 / 3;\r\n    grid-row: 1;\r\n  }\r\n\r\n  .tasksInReviewWrapper {\r\n    grid-column: 4 / 5;\r\n    grid-row: 1;\r\n  }\r\n\r\n  .tasksCompletedWrapper {\r\n    grid-column: 2 / 5;\r\n    grid-row: 2;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .tasksInProgressWrapper {\r\n    grid-column: 2 / 5;\r\n    grid-row: 1;\r\n  }\r\n\r\n  .tasksInReviewWrapper {\r\n    grid-column: 2 / 5;\r\n    grid-row: 2;\r\n  }\r\n\r\n  .tasksCompletedWrapper {\r\n    grid-column: 2 / 5;\r\n    grid-row: 3;\r\n  }\r\n\r\n  #main {\r\n    grid-template-columns: repeat(1, 1fr);\r\n  }\r\n\r\n  .navBar {\r\n    display: none;\r\n  }\r\n\r\n    #mobileNavContainer{\r\n        width: 100%;\r\n        height: auto;\r\n        position: absolute;\r\n        top: 0;\r\n    }\r\n\r\n  #tasksContainer {\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  #mobileNav {\r\n    background-color: black;\r\n    color: white;\r\n    padding: 16px;\r\n  }\r\n\r\n  #mobileNav li {\r\n    list-style-type: none;\r\n    padding: 8px;\r\n  }\r\n\r\n  #svgBurger {\r\n    width: 40px;\r\n    height: auto;\r\n  }\r\n\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(module) {



function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var content = document.getElementById('app');
var remove = document.getElementById('modal2');
var taskId;
var form2 = document.getElementById('form2');
form2.addEventListener('submit', function (e) {
  console.log('SUBMITTED FORM:', e.target, 'id=', e.target.id, 'class=', e.target.className);
  e.preventDefault();
  console.log('fired');
  var card = document.querySelector("[data-id=\"".concat(taskId, "\"]"));
  if (!card) return;
  var checkedEl = document.querySelector('input[name="choice2"]:checked');
  if (!checkedEl) return;
  var clone = card;
  //   clone.dataset.id = crypto.randomUUID();

  if (checkedEl.value === 'In progress') {
    document.querySelector('.tasksInprogress2').appendChild(clone);
  } else if (checkedEl.value === 'In review') {
    document.querySelector('.tasksInreview2').appendChild(clone);
  } else {
    document.querySelector('.tasksCompleted2').appendChild(clone);
  }
  remove.classList.add('hiddenitem2');
}, true);
var createHome = function createHome() {
  content.innerHTML = '';
  var main = document.createElement('div');
  main.id = 'main';
  var navBar = document.createElement('div');
  navBar.classList.add('navBar');
  var ul = document.createElement('ul');
  ul.id = 'navUl';
  var arr = ['Dashboard', 'Tasks', 'Notes', 'Email', 'Calender', 'Reports', 'Contacts', 'Invite Team'];
  var logo = document.createElement('div');
  logo.id = 'logo';
  var logoH1 = document.createElement('h1');
  logoH1.textContent = 'To do List';
  logo.appendChild(logoH1);
  var navSide = document.createElement('div');
  navSide.id = 'navSide';
  var h1Mainmenu = document.createElement('h1');
  h1Mainmenu.textContent = 'Main Menu';
  for (var i = 0; i < 8; i++) {
    var li = document.createElement('li');
    li.textContent = arr[i];
    ul.appendChild(li);
  }
  navSide.append(h1Mainmenu, ul);
  navBar.append(logo, navSide);
  main.appendChild(navBar);
  var tasksContainer = document.createElement('div');
  tasksContainer.id = 'tasksContainer';
  var addDiv = document.createElement('div');
  addDiv.classList.add('addDiv');
  var addBtn = document.createElement('button');
  addBtn.classList.add('addBtn');
  addBtn.textContent = 'Add Task';
  addDiv.appendChild(addBtn);
  var title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Tasks List';
  var tasksInprogress = document.createElement('div');
  tasksInprogress.classList.add('tasksInprogress2');
  var tasksinprogressH1 = document.createElement('h1');
  tasksinprogressH1.classList.add('tasksinprogressH1');
  tasksinprogressH1.textContent = 'In Progress';
  tasksInprogress.appendChild(tasksinprogressH1);
  var tasksInProgressWrapper = document.createElement('div');
  tasksInProgressWrapper.classList.add('tasksInProgressWrapper');
  tasksInProgressWrapper.append(tasksInprogress);
  var tasksInreview = document.createElement('div');
  tasksInreview.classList.add('tasksInreview2');
  var tasksinreviewH1 = document.createElement('h1');
  tasksinreviewH1.classList.add('tasksinreviewH1');
  tasksinreviewH1.textContent = 'In Review';
  tasksInreview.appendChild(tasksinreviewH1);
  var tasksInReviewWrapper = document.createElement('div');
  tasksInReviewWrapper.classList.add('tasksInReviewWrapper');
  tasksInReviewWrapper.append(tasksInreview);
  var tasksCompleted = document.createElement('div');
  tasksCompleted.classList.add('tasksCompleted2');
  var taskscompletedH1 = document.createElement('h1');
  taskscompletedH1.classList.add('taskscompletedH1');
  taskscompletedH1.textContent = 'Completed';
  tasksCompleted.appendChild(taskscompletedH1);
  var tasksCompletedWrapper = document.createElement('div');
  tasksCompletedWrapper.classList.add('tasksCompletedWrapper');
  tasksCompletedWrapper.append(tasksCompleted);
  tasksInprogress.classList.add('taskContain');
  tasksInreview.classList.add('taskContain');
  tasksCompleted.classList.add('taskContain');
  var tasksInner = document.createElement('div');
  tasksInner.id = 'tasksInner';
  tasksInner.append(tasksInProgressWrapper, tasksInReviewWrapper, tasksCompletedWrapper);
  tasksContainer.append(tasksInner, title, addDiv);
  main.appendChild(tasksContainer);
  content.append(main);
};
var activeCard = null;
function addCardProgress(title, summary, progress, randomId) {
  var form2 = document.getElementById('form2');
  var progress1 = document.querySelector('.tasksInprogress2'); // default
  if (progress == 'In review') {
    progress1 = document.querySelector('.tasksInreview2');
  } else if (progress == 'Completed') {
    progress1 = document.querySelector('.tasksCompleted2');
  }
  var NS = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.classList.add("icon", "icon-close"); // 👈 add class(es)

  var path = document.createElementNS(NS, "path");
  path.setAttribute("d", "M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z");
  svg.appendChild(path);
  var cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.dataset.id = randomId;
  var cardH1 = document.createElement('h1');
  cardH1.textContent = title;
  var cardP = document.createElement('p');
  cardP.textContent = summary;
  svg.addEventListener('click', function (x) {
    x.currentTarget.parentElement.remove();
  });
  activeCard = cardDiv; // ✅ remember WHICH card
  cardDiv.append(svg, cardH1, cardP);
  cardDiv.addEventListener('click', function (e) {
    var current = 'tasksInprogress';
    if (e.target.closest('.icon')) return;
    var card = e.target.closest('.card');
    taskId = card.dataset.id;
    if (!card) return;
    e.stopPropagation();
    current = _toConsumableArray(cardDiv.parentElement.classList).find(function (c) {
      return ['tasksInprogress2', 'tasksInreview2', 'tasksCompleted2'].includes(c);
    });
    console.log(current);
    remove.classList.remove('hiddenitem2');
    if (current == 'tasksInreview') {
      current = 'review';
    } else if (current == 'tasksCompleted') {
      current = 'completed';
    } else {
      current = 'progress';
    }
  });
  progress1.appendChild(cardDiv);
}
module.exports = {
  createHome: createHome,
  addCardProgress: addCardProgress
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


__webpack_require__(/*! ./styles.css */ "./src/styles.css");
var _home = __webpack_require__(/*! ./home.js */ "./src/home.js");
console.log('js loaded');
var states = {
  progress: [],
  review: [],
  complete: []
};
document.addEventListener("DOMContentLoaded", function () {
  (0, _home.createHome)();
  // addCardProgress('Wireframing','Creating wireframes based on user research');

  var addBtn = document.querySelector('.addBtn');
  addBtn.addEventListener('click', function () {
    document.querySelectorAll(".hiddenitem").forEach(function (el) {
      el.classList.remove("hiddenitem");
    });
  });
  var overlay = document.querySelector('.hidden');
  var modal = document.getElementById('form');
  overlay.addEventListener("click", function (e) {
    if (!modal.contains(e.target)) {
      overlay.classList.add("hiddenitem");
    }
  });
  var form1 = document.querySelector('.form1');
  var form2 = document.getElementById('form2');
  form1.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.querySelector('[id="title"]').value;
    var summary = document.querySelector('[id="summary"]').value;
    var choice = document.querySelector('input[name="choice"]:checked').value;
    var type;
    console.log(choice);
    if (choice === 'In progress') {
      type = 'progress';
    } else if (choice === 'In review') {
      type = 'review';
    } else {
      type = 'complete';
    }
    var randomId = crypto.randomUUID();
    // states[type].push({'type': type, 'id':randomId})
    (0, _home.addCardProgress)(title, summary, choice, randomId);
  });
  var el = document.getElementById('mobileNavContainer');
  var bg = document.getElementById('mobileNav');
  var svg1 = document.getElementById('svgBurger');
  svg1.addEventListener('click', function () {
    if (bg.classList.contains('hidden1')) {
      bg.classList.remove('hidden1');
    } else {
      bg.classList.add('hidden1');
    }
  });
  function handleResize() {
    if (window.innerWidth < 768) {
      svg1.classList.remove('hidden1');
      el.classList.remove('hidden1');
    } else {
      svg1.classList.add('hidden1');
      el.classList.add('hidden1');
    }
  }
  window.addEventListener('resize', handleResize);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLHlCQUF5QixPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxxQkFBcUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZ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QUFDQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7RUFDeEQsSUFBTTZGLEVBQUUsR0FBRzlGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUMvQyxJQUFNOEYsSUFBSSxHQUFHL0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBRWpEOEYsSUFBSSxDQUFDMUYsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFlBQUk7SUFDaEMsSUFBSXlGLEVBQUUsQ0FBQzFFLFNBQVMsQ0FBQ29FLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQztNQUNuQ00sRUFBRSxDQUFDMUUsU0FBUyxDQUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDLE1BQU07TUFDTDRGLEVBQUUsQ0FBQzFFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM3QjtFQUNGLENBQUMsQ0FBQztFQUNGLFNBQVMyRSxZQUFZQSxDQUFBLEVBQUc7SUFDdEIsSUFBSUMsTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRyxFQUFFO01BQzNCSCxJQUFJLENBQUMzRSxTQUFTLENBQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2hDbUYsRUFBRSxDQUFDakUsU0FBUyxDQUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUVoQyxDQUFDLE1BQU07TUFDTDZGLElBQUksQ0FBQzNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUM3QmdFLEVBQUUsQ0FBQ2pFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM3QjtFQUNGO0VBR0E0RSxNQUFNLENBQUM1RixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUyRixZQUFZLENBQUM7QUFRL0MsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuI21haW4ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oaWRkZW4xe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI25hdkJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuI25hdlNpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNuYXZVbCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbiNtYWluIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA4ZnI7XHJcbn1cclxuXHJcbiNuYXZTaWRlIHtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xyXG59XHJcblxyXG4jdGFza3NDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzVweCA3NXB4IDFmciAxMmZyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbiN0YXNrc0lubmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xyXG4gICAgZ3JpZC1yb3c6IDMgLyAtMTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyIDEwZnIgMWZyIDEwZnIgMWZyXHJcblxyXG59XHJcblxyXG4udGFza3NJblByb2dyZXNzV3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICAgIGdyaWQtcm93OiAxIDtcclxufVxyXG5cclxuXHJcbi50YXNrc0luUmV2aWV3V3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcclxuICAgIGdyaWQtcm93OiAxIC8gMjtcclxufVxyXG5cclxuLnRhc2tzQ29tcGxldGVkV3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtY29sdW1uOiA2IC8gNztcclxuICAgIGdyaWQtcm93OiAxIC8gMjtcclxufVxyXG5cclxuXHJcbi50YXNrc2lucHJvZ3Jlc3NIMSwgLnRhc2tzaW5yZXZpZXdIMSwgLnRhc2tzY29tcGxldGVkSDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLnRhc2tDb250YWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAyZnI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQgPiAqIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkIGgxIHtcclxuICAgIGdyaWQtcm93OiAyO1xyXG59XHJcblxyXG4uY2FyZCBwIHtcclxuICAgIGdyaWQtcm93OiAzO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICBncmlkLXJvdzogMSAvIDM7XHJcbn1cclxuXHJcbi5hZGREaXYge1xyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgICBncmlkLXJvdzogMSAvIDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmFkZEJ0biB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMwNTY5MWI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1LCAxMDUsIDI3LCAxKSAwJSwgcmdiYSgyMSwgMTc2LCA1NSwgMSkgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZCYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIHBhZGRpbmc6IDMycHg7XHJcbn1cclxuXHJcbiNuYXZTaWRlIGgxIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNuYXZVbCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4jbmF2VWwgbGkge1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbn1cclxuXHJcbiNmb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG5cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMmZyIDFmciAyZnIgMWZyIDFmciAxZnI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3N1Ym1pdCddIHtcclxuICAgIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuZm9ybSBsYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuaW5wdXRbbmFtZT0nY2hvaWNlJ10ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLyogQmFzZSAqL1xyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4vKiBCbHVyIGVmZmVjdCAqL1xyXG4uYmx1ciB7XHJcbiAgZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIGRpc2FibGUgY2xpY2tzIGJlaGluZCBtb2RhbCAqL1xyXG59XHJcblxyXG4vKiBNb2RhbCBvdmVybGF5ICovXHJcbi5oaWRkZW4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5oaWRkZW5pdGVtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jZm9ybTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcblxyXG59XHJcblxyXG4uZm9ybTIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG4uaGlkZGVuaXRlbTIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmRCdXR0b24ge1xyXG4gICAgZ3JpZC1yb3c6IDQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi50YXNrc0lucHJvZ3Jlc3NCVE4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udGFza3NJbnJldmlld0JUTiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi50YXNrc0NvbXBsZXRlZEJUTiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmhpZGRlbml0ZW0yIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuI2Zvcm0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG5cclxufVxyXG5cclxuLmZvcm0yIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxufVxyXG5cclxuI21vYmlsZU5hdkNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuICAjdGFza3NDb250YWluZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxuXHJcbiAgI3Rhc2tzSW5uZXIge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnIgMTBmciAxZnI7XHJcbiAgfVxyXG5cclxuICAudGFza3NJblByb2dyZXNzV3JhcHBlciB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICB9XHJcblxyXG4gIC50YXNrc0luUmV2aWV3V3JhcHBlciB7XHJcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICB9XHJcblxyXG4gIC50YXNrc0NvbXBsZXRlZFdyYXBwZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA1O1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC50YXNrc0luUHJvZ3Jlc3NXcmFwcGVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gNTtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRhc2tzSW5SZXZpZXdXcmFwcGVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gNTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gIH1cclxuXHJcbiAgLnRhc2tzQ29tcGxldGVkV3JhcHBlciB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDU7XHJcbiAgICBncmlkLXJvdzogMztcclxuICB9XHJcblxyXG4gICNtYWluIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgfVxyXG5cclxuICAubmF2QmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAgICNtb2JpbGVOYXZDb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICN0YXNrc0NvbnRhaW5lciB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAjbW9iaWxlTmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gICNtb2JpbGVOYXYgbGkge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbiAgI3N2Z0J1cmdlciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG5cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjs7QUFFSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7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a0I7SUFDbEIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7SUFDSTtJQUNBLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7SUFFRTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLE1BQU07SUFDVjs7RUFFRjtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7OztBQUdGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuMXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdkJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbn1cXHJcXG5cXHJcXG4jbmF2U2lkZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2VWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOGZyO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2U2lkZSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggNzVweCAxZnIgMTJmcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NJbm5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAzIC8gLTE7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyIDEwZnIgMWZyIDEwZnIgMWZyXFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50YXNrc0luUHJvZ3Jlc3NXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICBncmlkLXJvdzogMSA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrc0luUmV2aWV3V3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3NDb21wbGV0ZWRXcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDYgLyA3O1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YXNrc2lucHJvZ3Jlc3NIMSwgLnRhc2tzaW5yZXZpZXdIMSwgLnRhc2tzY29tcGxldGVkSDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrQ29udGFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHJnYigyNDUsIDI0NSwgMjQ1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDJmcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMSB7XFxyXFxuICAgIGdyaWQtcm93OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBwIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgICBncmlkLXJvdzogMSAvIDM7XFxyXFxufVxcclxcblxcclxcbi5hZGREaXYge1xcclxcbiAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDU2OTFiO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg1LCAxMDUsIDI3LCAxKSAwJSwgcmdiYSgyMSwgMTc2LCA1NSwgMSkgMTAwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QmFyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gICAgcGFkZGluZzogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdlNpZGUgaDEge1xcclxcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZVbCB7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZVbCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAyZnIgMWZyIDJmciAxZnIgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gbGFiZWwge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbbmFtZT0nY2hvaWNlJ10ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCYXNlICovXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogQmx1ciBlZmZlY3QgKi9cXHJcXG4uYmx1ciB7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNnB4KTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBkaXNhYmxlIGNsaWNrcyBiZWhpbmQgbW9kYWwgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWwgb3ZlcmxheSAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW5pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbiNmb3JtMiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0yIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuaXRlbTIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtcm93OiA0O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrc0lucHJvZ3Jlc3NCVE4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrc0lucmV2aWV3QlROIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3NDb21wbGV0ZWRCVE4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbml0ZW0yIHsgZGlzcGxheTogbm9uZTsgfVxcclxcblxcclxcbiNmb3JtMiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcXHJcXG4gIHBhZGRpbmc6IDMycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0yIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlTmF2Q29udGFpbmVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcblxcclxcbiAgI3Rhc2tzQ29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Rhc2tzSW5uZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmciAxMGZyIDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrc0luUHJvZ3Jlc3NXcmFwcGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrc0luUmV2aWV3V3JhcHBlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1yb3c6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFza3NDb21wbGV0ZWRXcmFwcGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA1O1xcclxcbiAgICBncmlkLXJvdzogMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC50YXNrc0luUHJvZ3Jlc3NXcmFwcGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA1O1xcclxcbiAgICBncmlkLXJvdzogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YXNrc0luUmV2aWV3V3JhcHBlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNTtcXHJcXG4gICAgZ3JpZC1yb3c6IDI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGFza3NDb21wbGV0ZWRXcmFwcGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA1O1xcclxcbiAgICBncmlkLXJvdzogMztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtYWluIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZCYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgICAjbW9iaWxlTmF2Q29udGFpbmVye1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICN0YXNrc0NvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNtb2JpbGVOYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI21vYmlsZU5hdiBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3N2Z0J1cmdlciB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwyJyk7XHJcbmxldCB0YXNrSWRcclxuY29uc3QgZm9ybTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybTInKTtcclxuZm9ybTIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBjb25zb2xlLmxvZygnU1VCTUlUVEVEIEZPUk06JywgZS50YXJnZXQsICdpZD0nLCBlLnRhcmdldC5pZCwgJ2NsYXNzPScsIGUudGFyZ2V0LmNsYXNzTmFtZSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5jb25zb2xlLmxvZygnZmlyZWQnKTtcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Rhc2tJZH1cIl1gKTtcclxuICBpZiAoIWNhcmQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgY2hlY2tlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNob2ljZTJcIl06Y2hlY2tlZCcpO1xyXG4gIGlmICghY2hlY2tlZEVsKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGNsb25lID0gY2FyZFxyXG4vLyAgIGNsb25lLmRhdGFzZXQuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG5cclxuICBpZiAoY2hlY2tlZEVsLnZhbHVlID09PSAnSW4gcHJvZ3Jlc3MnKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NJbnByb2dyZXNzMicpLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICB9IGVsc2UgaWYgKGNoZWNrZWRFbC52YWx1ZSA9PT0gJ0luIHJldmlldycpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lucmV2aWV3MicpLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29tcGxldGVkMicpLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW5pdGVtMicpO1xyXG59LCB0cnVlKTtcclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuXHJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdkJhcicpO1xyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdWwuaWQgPSAnbmF2VWwnO1xyXG4gICAgbGV0IGFyciA9IFsnRGFzaGJvYXJkJywnVGFza3MnLCdOb3RlcycsJ0VtYWlsJywnQ2FsZW5kZXInLCdSZXBvcnRzJywnQ29udGFjdHMnLCdJbnZpdGUgVGVhbSddO1xyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9nby5pZCA9ICdsb2dvJztcclxuICAgIGNvbnN0IGxvZ29IMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBsb2dvSDEudGV4dENvbnRlbnQgPSAnVG8gZG8gTGlzdCc7XHJcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29IMSk7XHJcbiAgICBjb25zdCBuYXZTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZTaWRlLmlkID0gJ25hdlNpZGUnO1xyXG4gICAgY29uc3QgaDFNYWlubWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoMU1haW5tZW51LnRleHRDb250ZW50ID0gJ01haW4gTWVudSc7XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCA4OyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGFycltpXVxyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZTaWRlLmFwcGVuZChoMU1haW5tZW51LCB1bClcclxuICAgIG5hdkJhci5hcHBlbmQobG9nbywgbmF2U2lkZSlcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmF2QmFyKTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NDb250YWluZXIuaWQgPSAndGFza3NDb250YWluZXInO1xyXG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhZGREaXYuY2xhc3NMaXN0LmFkZCgnYWRkRGl2Jyk7XHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRCdG4nKTtcclxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcclxuICAgIGFkZERpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1Rhc2tzIExpc3QnO1xyXG4gICAgY29uc3QgdGFza3NJbnByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrc0lucHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZCgndGFza3NJbnByb2dyZXNzMicpO1xyXG4gICAgY29uc3QgdGFza3NpbnByb2dyZXNzSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGFza3NpbnByb2dyZXNzSDEuY2xhc3NMaXN0LmFkZCgndGFza3NpbnByb2dyZXNzSDEnKTtcclxuICAgIHRhc2tzaW5wcm9ncmVzc0gxLnRleHRDb250ZW50ID0gJ0luIFByb2dyZXNzJztcclxuICAgIHRhc2tzSW5wcm9ncmVzcy5hcHBlbmRDaGlsZCh0YXNrc2lucHJvZ3Jlc3NIMSk7XHJcbiAgICBjb25zdCB0YXNrc0luUHJvZ3Jlc3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRhc2tzSW5Qcm9ncmVzc1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFza3NJblByb2dyZXNzV3JhcHBlcicpXHJcbiAgICB0YXNrc0luUHJvZ3Jlc3NXcmFwcGVyLmFwcGVuZCh0YXNrc0lucHJvZ3Jlc3MpXHJcblxyXG4gICAgY29uc3QgdGFza3NJbnJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NJbnJldmlldy5jbGFzc0xpc3QuYWRkKCd0YXNrc0lucmV2aWV3MicpO1xyXG4gICAgY29uc3QgdGFza3NpbnJldmlld0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRhc2tzaW5yZXZpZXdIMS5jbGFzc0xpc3QuYWRkKCd0YXNrc2lucmV2aWV3SDEnKTtcclxuICAgIHRhc2tzaW5yZXZpZXdIMS50ZXh0Q29udGVudCA9ICdJbiBSZXZpZXcnO1xyXG4gICAgdGFza3NJbnJldmlldy5hcHBlbmRDaGlsZCh0YXNrc2lucmV2aWV3SDEpO1xyXG4gICAgY29uc3QgdGFza3NJblJldmlld1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza3NJblJldmlld1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFza3NJblJldmlld1dyYXBwZXInKVxyXG4gICAgdGFza3NJblJldmlld1dyYXBwZXIuYXBwZW5kKHRhc2tzSW5yZXZpZXcpXHJcblxyXG4gICAgY29uc3QgdGFza3NDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tzQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzQ29tcGxldGVkMicpO1xyXG4gICAgY29uc3QgdGFza3Njb21wbGV0ZWRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0YXNrc2NvbXBsZXRlZEgxLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzY29tcGxldGVkSDEnKTtcclxuICAgIHRhc2tzY29tcGxldGVkSDEudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICAgIHRhc2tzQ29tcGxldGVkLmFwcGVuZENoaWxkKHRhc2tzY29tcGxldGVkSDEpO1xyXG4gICAgY29uc3QgdGFza3NDb21wbGV0ZWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRhc2tzQ29tcGxldGVkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0YXNrc0NvbXBsZXRlZFdyYXBwZXInKVxyXG4gICAgdGFza3NDb21wbGV0ZWRXcmFwcGVyLmFwcGVuZCh0YXNrc0NvbXBsZXRlZClcclxuXHJcbiAgICB0YXNrc0lucHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW4nKTtcclxuICAgIHRhc2tzSW5yZXZpZXcuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRhaW4nKTtcclxuICAgIHRhc2tzQ29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluJyk7XHJcblxyXG4gICAgY29uc3QgdGFza3NJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NJbm5lci5pZCA9ICd0YXNrc0lubmVyJztcclxuXHJcbiAgICB0YXNrc0lubmVyLmFwcGVuZCh0YXNrc0luUHJvZ3Jlc3NXcmFwcGVyLCB0YXNrc0luUmV2aWV3V3JhcHBlciwgdGFza3NDb21wbGV0ZWRXcmFwcGVyKVxyXG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kKHRhc2tzSW5uZXIsdGl0bGUsYWRkRGl2KVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xyXG59O1xyXG5cclxubGV0IGFjdGl2ZUNhcmQgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZENhcmRQcm9ncmVzcyh0aXRsZSwgc3VtbWFyeSwgcHJvZ3Jlc3MsIHJhbmRvbUlkKSB7XHJcbiAgICBjb25zdCBmb3JtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtMicpO1xyXG4gICAgbGV0IHByb2dyZXNzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lucHJvZ3Jlc3MyJyk7IC8vIGRlZmF1bHRcclxuICAgIGlmIChwcm9ncmVzcyA9PSAnSW4gcmV2aWV3Jykge1xyXG4gICAgICAgIHByb2dyZXNzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0lucmV2aWV3MicpXHJcbiAgICB9IGVsc2UgaWYgKHByb2dyZXNzID09ICdDb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgcHJvZ3Jlc3MxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzQ29tcGxldGVkMicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBcInN2Z1wiKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG4gICAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIsIFwiaWNvbi1jbG9zZVwiKTsgLy8g8J+RiCBhZGQgY2xhc3MoZXMpXHJcblxyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOUywgXCJwYXRoXCIpO1xyXG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICBcImRcIixcclxuICAgIFwiTTksN0wxMSwxMkw5LDE3SDExTDEyLDE0LjVMMTMsMTdIMTVMMTMsMTJMMTUsN0gxM0wxMiw5LjVMMTEsN0g5TTUsM0gxOUEyLDIgMCAwLDEgMjEsNVYxOUEyLDIgMCAwLDEgMTksMjFINUEyLDIgMCAwLDEgMywxOVY1QTIsMiAwIDAsMSA1LDNaXCJcclxuICAgICk7XHJcblxyXG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xyXG5cclxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgY2FyZERpdi5kYXRhc2V0LmlkID0gcmFuZG9tSWQ7XHJcbiAgICBjb25zdCBjYXJkSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY2FyZEgxLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICBjb25zdCBjYXJkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNhcmRQLnRleHRDb250ZW50ID0gc3VtbWFyeTtcclxuXHJcbiAgICBzdmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoeCkgPT4ge1xyXG4gICAgICAgIHguY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBhY3RpdmVDYXJkID0gY2FyZERpdjsgLy8g4pyFIHJlbWVtYmVyIFdISUNIIGNhcmRcclxuICAgIGNhcmREaXYuYXBwZW5kKHN2ZywgY2FyZEgxLCBjYXJkUCk7XHJcbiAgICBjYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSAndGFza3NJbnByb2dyZXNzJztcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmljb24nKSkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2FyZCcpO1xyXG4gICAgICAgIHRhc2tJZCA9IGNhcmQuZGF0YXNldC5pZDtcclxuICAgICAgICBpZiAoIWNhcmQpIHJldHVybjtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY3VycmVudCA9IFsuLi5jYXJkRGl2LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0XS5maW5kKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsndGFza3NJbnByb2dyZXNzMicsICd0YXNrc0lucmV2aWV3MicsICd0YXNrc0NvbXBsZXRlZDInXS5pbmNsdWRlcyhjKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcclxuICAgICAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbml0ZW0yJylcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQgPT0gJ3Rhc2tzSW5yZXZpZXcnKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAncmV2aWV3JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID09ICd0YXNrc0NvbXBsZXRlZCcpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICdjb21wbGV0ZWQnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICdwcm9ncmVzcyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICBwcm9ncmVzczEuYXBwZW5kQ2hpbGQoY2FyZERpdik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgY3JlYXRlSG9tZSwgYWRkQ2FyZFByb2dyZXNzIH0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lLCBhZGRDYXJkUHJvZ3Jlc3MgfSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcblxyXG5jb25zb2xlLmxvZygnanMgbG9hZGVkJylcclxuXHJcbmxldCBzdGF0ZXMgPSB7XHJcbiAgcHJvZ3Jlc3M6IFtdLFxyXG4gIHJldmlldzogW10sXHJcbiAgY29tcGxldGU6IFtdXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNyZWF0ZUhvbWUoKVxyXG4gICAgLy8gYWRkQ2FyZFByb2dyZXNzKCdXaXJlZnJhbWluZycsJ0NyZWF0aW5nIHdpcmVmcmFtZXMgYmFzZWQgb24gdXNlciByZXNlYXJjaCcpO1xyXG5cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdG4nKTtcclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhpZGRlbml0ZW1cIikuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlbml0ZW1cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4nKVxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xyXG4gICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuaXRlbVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZm9ybTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybTEnKVxyXG4gIGNvbnN0IGZvcm0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0yJylcclxuXHJcbiAgZm9ybTEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cInRpdGxlXCJdJykudmFsdWU7XHJcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkPVwic3VtbWFyeVwiXScpLnZhbHVlO1xyXG4gICAgY29uc3QgY2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNob2ljZVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICBsZXQgdHlwZTtcclxuICAgIGNvbnNvbGUubG9nKGNob2ljZSlcclxuICAgIGlmIChjaG9pY2UgPT09ICdJbiBwcm9ncmVzcycpe1xyXG4gICAgICB0eXBlID0gJ3Byb2dyZXNzJztcclxuICAgIH0gZWxzZSBpZiAoY2hvaWNlID09PSAnSW4gcmV2aWV3Jyl7XHJcbiAgICAgIHR5cGUgPSAncmV2aWV3JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHR5cGUgPSAnY29tcGxldGUnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmFuZG9tSWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgLy8gc3RhdGVzW3R5cGVdLnB1c2goeyd0eXBlJzogdHlwZSwgJ2lkJzpyYW5kb21JZH0pXHJcbiAgYWRkQ2FyZFByb2dyZXNzKHRpdGxlLCBzdW1tYXJ5LCBjaG9pY2UsIHJhbmRvbUlkKVxyXG4gIFxyXG5cclxufSk7XHJcblxyXG5jb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVOYXZDb250YWluZXInKTtcclxuY29uc3QgYmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlTmF2Jyk7XHJcbmNvbnN0IHN2ZzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnQnVyZ2VyJyk7XHJcblxyXG5zdmcxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gIGlmIChiZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbjEnKSl7XHJcbiAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4xJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbjEnKTtcclxuICB9XHJcbn0pXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgIHN2ZzEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuMScpXHJcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4xJyk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdmcxLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbjEnKVxyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuMScpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsInRhc2tJZCIsImZvcm0yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaWQiLCJjbGFzc05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImNhcmQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiY2hlY2tlZEVsIiwiY2xvbmUiLCJ2YWx1ZSIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlSG9tZSIsImlubmVySFRNTCIsIm1haW4iLCJjcmVhdGVFbGVtZW50IiwibmF2QmFyIiwidWwiLCJhcnIiLCJsb2dvIiwibG9nb0gxIiwidGV4dENvbnRlbnQiLCJuYXZTaWRlIiwiaDFNYWlubWVudSIsImkiLCJsaSIsImFwcGVuZCIsInRhc2tzQ29udGFpbmVyIiwiYWRkRGl2IiwiYWRkQnRuIiwidGl0bGUiLCJ0YXNrc0lucHJvZ3Jlc3MiLCJ0YXNrc2lucHJvZ3Jlc3NIMSIsInRhc2tzSW5Qcm9ncmVzc1dyYXBwZXIiLCJ0YXNrc0lucmV2aWV3IiwidGFza3NpbnJldmlld0gxIiwidGFza3NJblJldmlld1dyYXBwZXIiLCJ0YXNrc0NvbXBsZXRlZCIsInRhc2tzY29tcGxldGVkSDEiLCJ0YXNrc0NvbXBsZXRlZFdyYXBwZXIiLCJ0YXNrc0lubmVyIiwiYWN0aXZlQ2FyZCIsImFkZENhcmRQcm9ncmVzcyIsInN1bW1hcnkiLCJwcm9ncmVzcyIsInJhbmRvbUlkIiwicHJvZ3Jlc3MxIiwiTlMiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJzZXRBdHRyaWJ1dGUiLCJwYXRoIiwiY2FyZERpdiIsImRhdGFzZXQiLCJjYXJkSDEiLCJjYXJkUCIsIngiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImN1cnJlbnQiLCJjbG9zZXN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZmluZCIsImMiLCJpbmNsdWRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX2hvbWUiLCJzdGF0ZXMiLCJyZXZpZXciLCJjb21wbGV0ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJvdmVybGF5IiwibW9kYWwiLCJjb250YWlucyIsImZvcm0xIiwiY2hvaWNlIiwidHlwZSIsImNyeXB0byIsInJhbmRvbVVVSUQiLCJiZyIsInN2ZzEiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=