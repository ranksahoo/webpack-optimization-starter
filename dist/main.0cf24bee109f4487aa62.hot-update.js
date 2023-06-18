"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack_optimization_for_production"]("main",{

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearNewTodoInput\": function() { return /* binding */ clearNewTodoInput; },\n/* harmony export */   \"getTodoId\": function() { return /* binding */ getTodoId; },\n/* harmony export */   \"renderTodos\": function() { return /* binding */ renderTodos; }\n/* harmony export */ });\n/* harmony import */ var _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/notification.module.css */ \"./src/styles/notification.module.css\");\n/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ \"./node_modules/@emotion/css/dist/emotion-css.esm.js\");\n\r\n\r\n\r\nconst checkboxSize = \"30px\";\r\nconst realCheckboxClass = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`\r\n  width: ${checkboxSize};\r\n  height: ${checkboxSize};\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: -3px;\r\n  left: -5px;\r\n`;\r\n\r\nfunction renderTodos(todos) {\r\n  const renderedItemArray = todos.map(function (todo) {\r\n    const className = todo.completed ? \"completed\" : \"\";\r\n    const completionClass = todo.completed ? \"checked\" : \"\";\r\n    return `\r\n            <li data-id=\"${todo.id}\" class=\"${className}\">\r\n                <span class=\"custom-checkbox\">\r\n                    <img class=\"check\" src=\"../images/checkmark.svg\" width=\"22\" height=\"22\"></img>\r\n                    <input class=\"${realCheckboxClass}\" data-element=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\r\n                </span>\r\n                <label>${todo.text}</label>\r\n                <span class=\"delete\"></span>\r\n            </li>\r\n        `;\r\n  });\r\n  document.querySelector(\".todo-list\").innerHTML = renderedItemArray.join(\"\");\r\n}\r\n\r\nfunction clearNewTodoInput() {\r\n  document.querySelector(\".new-todo\").value = \"\";\r\n  showNotification();\r\n}\r\n\r\nfunction getTodoId(element) {\r\n  return parseInt(\r\n    element.dataset.id ||\r\n      element.parentNode.dataset.id ||\r\n      element.parentNode.parentNode.dataset.id,\r\n    10\r\n  );\r\n}\r\n\r\nfunction showNotification() {\r\n  const notificationElement = document.createElement(\"div\");\r\n  notificationElement.classList.add(\r\n    \"alert\",\r\n    \"alert-success\",\r\n    _styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification\r\n  );\r\n  notificationElement.setAttribute(\"role\", \"alert\");\r\n  notificationElement.innerHTML = \"Todo item added\";\r\n  document.body.appendChild(notificationElement);\r\n  // And we are going to remove this div after 2 seconds.\r\n  setTimeout(function () {\r\n    const notificationElement = document.querySelector(\r\n      `.${_styles_notification_module_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].notification}`\r\n    );\r\n    notificationElement.parentNode.removeChild(notificationElement);\r\n  }, 2000);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-optimization-for-production/./src/js/ui.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8fcfb600deafa716d28c"; }
/******/ }();
/******/ 
/******/ }
);