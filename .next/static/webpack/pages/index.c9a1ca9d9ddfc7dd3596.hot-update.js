/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Leg.js":
/*!***************************!*\
  !*** ./components/Leg.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Leg.module.css */ \"./styles/Leg.module.css\");\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/GraysonVenters/Desktop/Coding/full-stack-recruitment-test/components/Leg.js\",\n    _this = undefined;\n\n\n\nvar Leg = function Leg(_ref) {\n  var leg = _ref.leg;\n  var _leg$ = leg[0],\n      departure_airport = _leg$.departure_airport,\n      arrival_airport = _leg$.arrival_airport,\n      departure_time = _leg$.departure_time,\n      arrival_time = _leg$.arrival_time,\n      duration_mins = _leg$.duration_mins,\n      airline_id = _leg$.airline_id,\n      airline_name = _leg$.airline_name,\n      stops = _leg$.stops;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legRow),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"https://logos.skyscnr.com/images/airlines/favicon/\".concat(airline_id, \".png\"),\n      alt: \"\".concat(airline_name, \" logo\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"legBox\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_time\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"legBox\",\n      children: [arrival_time, arrival_airport]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Leg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leg); // \n\nvar _c;\n\n$RefreshReg$(_c, \"Leg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWcuanM/ZjNiMCJdLCJuYW1lcyI6WyJMZWciLCJsZWciLCJkZXBhcnR1cmVfYWlycG9ydCIsImFycml2YWxfYWlycG9ydCIsImRlcGFydHVyZV90aW1lIiwiYXJyaXZhbF90aW1lIiwiZHVyYXRpb25fbWlucyIsImFpcmxpbmVfaWQiLCJhaXJsaW5lX25hbWUiLCJzdG9wcyIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWE7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFBQSxjQUNzR0EsR0FBRyxDQUFDLENBQUQsQ0FEekc7QUFBQSxNQUNkQyxpQkFEYyxTQUNkQSxpQkFEYztBQUFBLE1BQ0tDLGVBREwsU0FDS0EsZUFETDtBQUFBLE1BQ3NCQyxjQUR0QixTQUNzQkEsY0FEdEI7QUFBQSxNQUNzQ0MsWUFEdEMsU0FDc0NBLFlBRHRDO0FBQUEsTUFDb0RDLGFBRHBELFNBQ29EQSxhQURwRDtBQUFBLE1BQ21FQyxVQURuRSxTQUNtRUEsVUFEbkU7QUFBQSxNQUMrRUMsWUFEL0UsU0FDK0VBLFlBRC9FO0FBQUEsTUFDNkZDLEtBRDdGLFNBQzZGQSxLQUQ3RjtBQUtyQixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsc0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLDhEQUF1REgsVUFBdkQsU0FBUjtBQUFpRixTQUFHLFlBQUtDLFlBQUw7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNJO0FBQUEsa0JBQU9KO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFRSTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsaUJBQ0tHLFlBREwsRUFFS0YsZUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdCSCxDQXJCRDs7S0FBTUgsRztBQXVCTiwrREFBZUEsR0FBZixFLENBR0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xlZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZSBmcm9tICcuLi9zdHlsZXMvTGVnLm1vZHVsZS5jc3MnXG5cbmNvbnN0IExlZyA9ICh7IGxlZyB9KSA9PiB7XG4gICAgY29uc3Qge2RlcGFydHVyZV9haXJwb3J0LCBhcnJpdmFsX2FpcnBvcnQsIGRlcGFydHVyZV90aW1lLCBhcnJpdmFsX3RpbWUsIGR1cmF0aW9uX21pbnMsIGFpcmxpbmVfaWQsIGFpcmxpbmVfbmFtZSwgc3RvcHN9ID0gbGVnWzBdO1xuXG4gIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZ1Jvd30+XG4gICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vbG9nb3Muc2t5c2Nuci5jb20vaW1hZ2VzL2FpcmxpbmVzL2Zhdmljb24vJHthaXJsaW5lX2lkfS5wbmdgfSBhbHQ9e2Ake2FpcmxpbmVfbmFtZX0gbG9nb2B9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ0JveFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntkZXBhcnR1cmVfdGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2RlcGFydHVyZV9haXJwb3J0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGluc2VydCBsb2dvIGhlcmUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZ0JveFwiPlxuICAgICAgICAgICAgICAgIHthcnJpdmFsX3RpbWV9XG4gICAgICAgICAgICAgICAge2Fycml2YWxfYWlycG9ydH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVnXG5cblxuLy8gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Leg.js\n");

/***/ })

});