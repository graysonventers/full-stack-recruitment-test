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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Leg.module.css */ \"./styles/Leg.module.css\");\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/GraysonVenters/Desktop/Coding/full-stack-recruitment-test/components/Leg.js\",\n    _this = undefined;\n\n\n\nvar Leg = function Leg(_ref) {\n  var leg = _ref.leg;\n  var _leg$ = leg[0],\n      departure_airport = _leg$.departure_airport,\n      arrival_airport = _leg$.arrival_airport,\n      departure_time = _leg$.departure_time,\n      arrival_time = _leg$.arrival_time,\n      duration_mins = _leg$.duration_mins,\n      airline_id = _leg$.airline_id,\n      airline_name = _leg$.airline_name,\n      stops = _leg$.stops; // const timeConversion = (time) => {\n  // }\n\n  var durationConversion = function durationConversion(time) {\n    var hours = Math.floor(duration_mins / 60);\n    var minutes = duration_mins / 60 % 1 === 0 ? '00' : duration_mins / 60 % 1;\n    console.log(time);\n    console.log(minutes);\n    return hours + 'h' + ' ' + minutes + 'm';\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legRow),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),\n      src: \"https://logos.skyscnr.com/images/airlines/favicon/\".concat(airline_id, \".png\"),\n      alt: \"\".concat(airline_name, \" logo\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_time\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_time\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: durationConversion(duration_mins)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: stops\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Leg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leg); // \n\nvar _c;\n\n$RefreshReg$(_c, \"Leg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWcuanM/ZjNiMCJdLCJuYW1lcyI6WyJMZWciLCJsZWciLCJkZXBhcnR1cmVfYWlycG9ydCIsImFycml2YWxfYWlycG9ydCIsImRlcGFydHVyZV90aW1lIiwiYXJyaXZhbF90aW1lIiwiZHVyYXRpb25fbWlucyIsImFpcmxpbmVfaWQiLCJhaXJsaW5lX25hbWUiLCJzdG9wcyIsImR1cmF0aW9uQ29udmVyc2lvbiIsInRpbWUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBYTtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUFBLGNBQ3NHQSxHQUFHLENBQUMsQ0FBRCxDQUR6RztBQUFBLE1BQ2RDLGlCQURjLFNBQ2RBLGlCQURjO0FBQUEsTUFDS0MsZUFETCxTQUNLQSxlQURMO0FBQUEsTUFDc0JDLGNBRHRCLFNBQ3NCQSxjQUR0QjtBQUFBLE1BQ3NDQyxZQUR0QyxTQUNzQ0EsWUFEdEM7QUFBQSxNQUNvREMsYUFEcEQsU0FDb0RBLGFBRHBEO0FBQUEsTUFDbUVDLFVBRG5FLFNBQ21FQSxVQURuRTtBQUFBLE1BQytFQyxZQUQvRSxTQUMrRUEsWUFEL0U7QUFBQSxNQUM2RkMsS0FEN0YsU0FDNkZBLEtBRDdGLEVBR3JCO0FBRUE7O0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDakMsUUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsYUFBYSxHQUFHLEVBQTNCLENBQWQ7QUFDQSxRQUFNUyxPQUFPLEdBQUlULGFBQWEsR0FBRyxFQUFqQixHQUF1QixDQUF2QixLQUE2QixDQUE3QixHQUFpQyxJQUFqQyxHQUF5Q0EsYUFBYSxHQUFHLEVBQWpCLEdBQXVCLENBQS9FO0FBRUFVLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBRUFLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBRUEsV0FBUUgsS0FBSyxHQUFHLEdBQVIsR0FBYyxHQUFkLEdBQW9CRyxPQUFwQixHQUE4QixHQUF0QztBQUNILEdBVEQ7O0FBV0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVHLHNFQUFoQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQSxtRUFBaEI7QUFBMkIsU0FBRyw4REFBdURYLFVBQXZELFNBQTlCO0FBQXVHLFNBQUcsWUFBS0MsWUFBTDtBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBRVUsc0VBQWhCO0FBQUEsOEJBQ0k7QUFBQSxrQkFBT2Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLGtCQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU1JO0FBQUssZUFBUyxFQUFFZ0Isc0VBQWhCO0FBQUEsOEJBQ0k7QUFBQSxrQkFBT2Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLGtCQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQVVJO0FBQUssZUFBUyxFQUFFZ0Isc0VBQWhCO0FBQUEsOEJBQ0k7QUFBQSxrQkFBT1Isa0JBQWtCLENBQUNKLGFBQUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBT0c7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FwQ0Q7O0tBQU1ULEc7QUFzQ04sK0RBQWVBLEdBQWYsRSxDQUdBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MZWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL0xlZy5tb2R1bGUuY3NzJ1xuXG5jb25zdCBMZWcgPSAoeyBsZWcgfSkgPT4ge1xuICAgIGNvbnN0IHtkZXBhcnR1cmVfYWlycG9ydCwgYXJyaXZhbF9haXJwb3J0LCBkZXBhcnR1cmVfdGltZSwgYXJyaXZhbF90aW1lLCBkdXJhdGlvbl9taW5zLCBhaXJsaW5lX2lkLCBhaXJsaW5lX25hbWUsIHN0b3BzfSA9IGxlZ1swXTtcblxuICAgIC8vIGNvbnN0IHRpbWVDb252ZXJzaW9uID0gKHRpbWUpID0+IHtcblxuICAgIC8vIH1cblxuICAgIGNvbnN0IGR1cmF0aW9uQ29udmVyc2lvbiA9ICh0aW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihkdXJhdGlvbl9taW5zIC8gNjApO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gKGR1cmF0aW9uX21pbnMgLyA2MCkgJSAxID09PSAwID8gJzAwJyA6IChkdXJhdGlvbl9taW5zIC8gNjApICUgMVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWUpXG5cbiAgICAgICAgY29uc29sZS5sb2cobWludXRlcylcblxuICAgICAgICByZXR1cm4gKGhvdXJzICsgJ2gnICsgJyAnICsgbWludXRlcyArICdtJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVnUm93fT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5pbWd9IHNyYz17YGh0dHBzOi8vbG9nb3Muc2t5c2Nuci5jb20vaW1hZ2VzL2FpcmxpbmVzL2Zhdmljb24vJHthaXJsaW5lX2lkfS5wbmdgfSBhbHQ9e2Ake2FpcmxpbmVfbmFtZX0gbG9nb2B9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVnQm94fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZGVwYXJ0dXJlX3RpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntkZXBhcnR1cmVfYWlycG9ydH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWdCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntkZXBhcnR1cmVfdGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2RlcGFydHVyZV9haXJwb3J0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZ0JveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2R1cmF0aW9uQ29udmVyc2lvbihkdXJhdGlvbl9taW5zKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3N0b3BzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVnXG5cblxuLy8gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Leg.js\n");

/***/ })

});