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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Leg.module.css */ \"./styles/Leg.module.css\");\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/GraysonVenters/Desktop/Coding/full-stack-recruitment-test/components/Leg.js\",\n    _this = undefined;\n\n\n\nvar Leg = function Leg(_ref) {\n  var leg = _ref.leg;\n  var _leg$ = leg[0],\n      departure_airport = _leg$.departure_airport,\n      arrival_airport = _leg$.arrival_airport,\n      departure_time = _leg$.departure_time,\n      arrival_time = _leg$.arrival_time,\n      duration_mins = _leg$.duration_mins,\n      airline_id = _leg$.airline_id,\n      airline_name = _leg$.airline_name,\n      stops = _leg$.stops; // const timeConversion = (time) => {\n  // }\n\n  var durationConversion = function durationConversion(time) {\n    var hours = Math.floor(duration_mins / 60);\n    var minutes = duration_mins / 60 % 1 * 60 === 0 ? '00' : Math.floor(duration_mins / 60 % 1 * 60);\n    return hours + 'h' + ' ' + minutes;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legRow),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().img),\n      src: \"https://logos.skyscnr.com/images/airlines/favicon/\".concat(airline_id, \".png\"),\n      alt: \"\".concat(airline_name, \" logo\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_time\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_time\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: departure_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: durationConversion(duration_mins)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: stops\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Leg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leg); // \n\nvar _c;\n\n$RefreshReg$(_c, \"Leg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWcuanM/ZjNiMCJdLCJuYW1lcyI6WyJMZWciLCJsZWciLCJkZXBhcnR1cmVfYWlycG9ydCIsImFycml2YWxfYWlycG9ydCIsImRlcGFydHVyZV90aW1lIiwiYXJyaXZhbF90aW1lIiwiZHVyYXRpb25fbWlucyIsImFpcmxpbmVfaWQiLCJhaXJsaW5lX25hbWUiLCJzdG9wcyIsImR1cmF0aW9uQ29udmVyc2lvbiIsInRpbWUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQUEsY0FDc0dBLEdBQUcsQ0FBQyxDQUFELENBRHpHO0FBQUEsTUFDZEMsaUJBRGMsU0FDZEEsaUJBRGM7QUFBQSxNQUNLQyxlQURMLFNBQ0tBLGVBREw7QUFBQSxNQUNzQkMsY0FEdEIsU0FDc0JBLGNBRHRCO0FBQUEsTUFDc0NDLFlBRHRDLFNBQ3NDQSxZQUR0QztBQUFBLE1BQ29EQyxhQURwRCxTQUNvREEsYUFEcEQ7QUFBQSxNQUNtRUMsVUFEbkUsU0FDbUVBLFVBRG5FO0FBQUEsTUFDK0VDLFlBRC9FLFNBQytFQSxZQUQvRTtBQUFBLE1BQzZGQyxLQUQ3RixTQUM2RkEsS0FEN0YsRUFHckI7QUFFQTs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQsRUFBVTtBQUNqQyxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixhQUFhLEdBQUcsRUFBM0IsQ0FBZDtBQUNBLFFBQU1TLE9BQU8sR0FBS1QsYUFBYSxHQUFHLEVBQWpCLEdBQXVCLENBQXhCLEdBQTZCLEVBQTdCLEtBQW9DLENBQXBDLEdBQXdDLElBQXhDLEdBQStDTyxJQUFJLENBQUNDLEtBQUwsQ0FBWVIsYUFBYSxHQUFHLEVBQWpCLEdBQXVCLENBQXZCLEdBQTJCLEVBQXRDLENBQS9EO0FBRUEsV0FBUU0sS0FBSyxHQUFHLEdBQVIsR0FBYyxHQUFkLEdBQW9CRyxPQUE1QjtBQUNILEdBTEQ7O0FBT0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLHNFQUFoQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFQSxtRUFBaEI7QUFBMkIsU0FBRyw4REFBdURULFVBQXZELFNBQTlCO0FBQXVHLFNBQUcsWUFBS0MsWUFBTDtBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLGVBQVMsRUFBRVEsc0VBQWhCO0FBQUEsOEJBQ0k7QUFBQSxrQkFBT1o7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLGtCQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU1JO0FBQUssZUFBUyxFQUFFYyxzRUFBaEI7QUFBQSw4QkFDSTtBQUFBLGtCQUFPWjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsa0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBVUk7QUFBSyxlQUFTLEVBQUVjLHNFQUFoQjtBQUFBLDhCQUNJO0FBQUEsa0JBQU9OLGtCQUFrQixDQUFDSixhQUFEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsa0JBQU9HO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBaENEOztLQUFNVCxHO0FBa0NOLCtEQUFlQSxHQUFmLEUsQ0FHQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGVnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9MZWcubW9kdWxlLmNzcydcblxuY29uc3QgTGVnID0gKHsgbGVnIH0pID0+IHtcbiAgICBjb25zdCB7ZGVwYXJ0dXJlX2FpcnBvcnQsIGFycml2YWxfYWlycG9ydCwgZGVwYXJ0dXJlX3RpbWUsIGFycml2YWxfdGltZSwgZHVyYXRpb25fbWlucywgYWlybGluZV9pZCwgYWlybGluZV9uYW1lLCBzdG9wc30gPSBsZWdbMF07XG5cbiAgICAvLyBjb25zdCB0aW1lQ29udmVyc2lvbiA9ICh0aW1lKSA9PiB7XG5cbiAgICAvLyB9XG5cbiAgICBjb25zdCBkdXJhdGlvbkNvbnZlcnNpb24gPSAodGltZSkgPT4ge1xuICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZHVyYXRpb25fbWlucyAvIDYwKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9ICgoZHVyYXRpb25fbWlucyAvIDYwKSAlIDEpICogNjAgPT09IDAgPyAnMDAnIDogTWF0aC5mbG9vcigoZHVyYXRpb25fbWlucyAvIDYwKSAlIDEgKiA2MClcblxuICAgICAgICByZXR1cm4gKGhvdXJzICsgJ2gnICsgJyAnICsgbWludXRlcylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVnUm93fT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5pbWd9IHNyYz17YGh0dHBzOi8vbG9nb3Muc2t5c2Nuci5jb20vaW1hZ2VzL2FpcmxpbmVzL2Zhdmljb24vJHthaXJsaW5lX2lkfS5wbmdgfSBhbHQ9e2Ake2FpcmxpbmVfbmFtZX0gbG9nb2B9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVnQm94fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZGVwYXJ0dXJlX3RpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPntkZXBhcnR1cmVfYWlycG9ydH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWdCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuPntkZXBhcnR1cmVfdGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2RlcGFydHVyZV9haXJwb3J0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZ0JveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2R1cmF0aW9uQ29udmVyc2lvbihkdXJhdGlvbl9taW5zKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3N0b3BzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVnXG5cblxuLy8gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Leg.js\n");

/***/ })

});