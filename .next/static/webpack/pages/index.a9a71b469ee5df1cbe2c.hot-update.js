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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Leg.module.css */ \"./styles/Leg.module.css\");\n/* harmony import */ var _styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/GraysonVenters/Desktop/Coding/full-stack-recruitment-test/components/Leg.js\",\n    _this = undefined;\n\n\n\nvar Leg = function Leg(_ref) {\n  var leg = _ref.leg;\n  var _leg$ = leg[0],\n      departure_airport = _leg$.departure_airport,\n      arrival_airport = _leg$.arrival_airport,\n      departure_time = _leg$.departure_time,\n      arrival_time = _leg$.arrival_time,\n      duration_mins = _leg$.duration_mins,\n      airline_id = _leg$.airline_id,\n      airline_name = _leg$.airline_name,\n      stops = _leg$.stops; // convert date and time to hours and minutes only\n\n  var timeConversion = function timeConversion(time) {\n    return new Date(time).toLocaleTimeString('it-IT', {\n      hour: '2-digit',\n      minute: '2-digit'\n    });\n  }; // convert minutes to hours and minutes\n\n\n  var durationConversion = function durationConversion(time) {\n    var hours = Math.floor(time / 60);\n    var minutes = time / 60 % 1 * 60 === 0 ? '00' : Math.floor(time / 60 % 1 * 60);\n    return \"\".concat(hours, \"h \").concat(minutes);\n  }; // handle stops conditons\n\n\n  var stopConditions = function stopConditions(stops) {\n    if (stops === 0) {\n      return 'Direct';\n    } else if (stops === 1) {\n      return '1 Stop';\n    } else if (stops > 1) {\n      return \"\".concat(stops, \" stops\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legRow),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().logoImg),\n      src: \"https://logos.skyscnr.com/images/airlines/favicon/\".concat(airline_id, \".png\"),\n      alt: \"\".concat(airline_name, \" logo\")\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: timeConversion(departure_time)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().airport),\n        children: departure_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().arrowIcon),\n        src: \"/right-arrow.png\",\n        alt: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: timeConversion(arrival_time)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().airport),\n        children: arrival_airport\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().legBox),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().duration),\n        children: durationConversion(duration_mins)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (_styles_Leg_module_css__WEBPACK_IMPORTED_MODULE_1___default().stopsRed),\n        children: stopConditions(stops)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Leg;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Leg); // \n\nvar _c;\n\n$RefreshReg$(_c, \"Leg\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWcuanM/ZjNiMCJdLCJuYW1lcyI6WyJMZWciLCJsZWciLCJkZXBhcnR1cmVfYWlycG9ydCIsImFycml2YWxfYWlycG9ydCIsImRlcGFydHVyZV90aW1lIiwiYXJyaXZhbF90aW1lIiwiZHVyYXRpb25fbWlucyIsImFpcmxpbmVfaWQiLCJhaXJsaW5lX25hbWUiLCJzdG9wcyIsInRpbWVDb252ZXJzaW9uIiwidGltZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwiZHVyYXRpb25Db252ZXJzaW9uIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic3RvcENvbmRpdGlvbnMiLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQUEsY0FDc0dBLEdBQUcsQ0FBQyxDQUFELENBRHpHO0FBQUEsTUFDZEMsaUJBRGMsU0FDZEEsaUJBRGM7QUFBQSxNQUNLQyxlQURMLFNBQ0tBLGVBREw7QUFBQSxNQUNzQkMsY0FEdEIsU0FDc0JBLGNBRHRCO0FBQUEsTUFDc0NDLFlBRHRDLFNBQ3NDQSxZQUR0QztBQUFBLE1BQ29EQyxhQURwRCxTQUNvREEsYUFEcEQ7QUFBQSxNQUNtRUMsVUFEbkUsU0FDbUVBLFVBRG5FO0FBQUEsTUFDK0VDLFlBRC9FLFNBQytFQSxZQUQvRTtBQUFBLE1BQzZGQyxLQUQ3RixTQUM2RkEsS0FEN0YsRUFHckI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFEO0FBQUEsV0FBVSxJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFBRUMsVUFBSSxFQUFFLFNBQVI7QUFBbUJDLFlBQU0sRUFBRTtBQUEzQixLQUEzQyxDQUFWO0FBQUEsR0FBdkIsQ0FKcUIsQ0FNckI7OztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0wsSUFBRCxFQUFVO0FBQ2pDLFFBQU1NLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFkO0FBQ0EsUUFBTVMsT0FBTyxHQUFLVCxJQUFJLEdBQUcsRUFBUixHQUFjLENBQWYsR0FBb0IsRUFBcEIsS0FBMkIsQ0FBM0IsR0FBK0IsSUFBL0IsR0FBc0NPLElBQUksQ0FBQ0MsS0FBTCxDQUFZUixJQUFJLEdBQUcsRUFBUixHQUFjLENBQWQsR0FBa0IsRUFBN0IsQ0FBdEQ7QUFFQSxxQkFBV00sS0FBWCxlQUFxQkcsT0FBckI7QUFDSCxHQUxELENBUHFCLENBY3JCOzs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNaLEtBQUQsRUFBVztBQUM5QixRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQU8sUUFBUDtBQUNILEtBRkQsTUFFTyxJQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUVwQixhQUFPLFFBQVA7QUFDSCxLQUhNLE1BR0EsSUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNsQix1QkFBVUEsS0FBVjtBQUNIO0FBQ0osR0FURDs7QUFXQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWEsc0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLHVFQUFoQjtBQUErQixTQUFHLDhEQUF1RGYsVUFBdkQsU0FBbEM7QUFBMkcsU0FBRyxZQUFLQyxZQUFMO0FBQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssZUFBUyxFQUFFYyxzRUFBaEI7QUFBQSw4QkFDSTtBQUFBLGtCQUFPWixjQUFjLENBQUNOLGNBQUQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFFa0IsdUVBQWpCO0FBQUEsa0JBQWlDcEI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVvQix5RUFBaEI7QUFBaUMsV0FBRyxFQUFDLGtCQUFyQztBQUF3RCxXQUFHLEVBQUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQVdJO0FBQUssZUFBUyxFQUFFQSxzRUFBaEI7QUFBQSw4QkFDSTtBQUFBLGtCQUFPWixjQUFjLENBQUNMLFlBQUQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFFaUIsdUVBQWpCO0FBQUEsa0JBQWlDbkI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKLGVBZUk7QUFBSyxlQUFTLEVBQUVtQixzRUFBaEI7QUFBQSw4QkFDSTtBQUFNLGlCQUFTLEVBQUVBLHdFQUFqQjtBQUFBLGtCQUFrQ04sa0JBQWtCLENBQUNWLGFBQUQ7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFFZ0Isd0VBQWpCO0FBQUEsa0JBQWtDRCxjQUFjLENBQUNaLEtBQUQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBakREOztLQUFNVCxHO0FBbUROLCtEQUFlQSxHQUFmLEUsQ0FHQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGVnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9MZWcubW9kdWxlLmNzcydcblxuY29uc3QgTGVnID0gKHsgbGVnIH0pID0+IHtcbiAgICBjb25zdCB7ZGVwYXJ0dXJlX2FpcnBvcnQsIGFycml2YWxfYWlycG9ydCwgZGVwYXJ0dXJlX3RpbWUsIGFycml2YWxfdGltZSwgZHVyYXRpb25fbWlucywgYWlybGluZV9pZCwgYWlybGluZV9uYW1lLCBzdG9wc30gPSBsZWdbMF07XG5cbiAgICAvLyBjb252ZXJ0IGRhdGUgYW5kIHRpbWUgdG8gaG91cnMgYW5kIG1pbnV0ZXMgb25seVxuICAgIGNvbnN0IHRpbWVDb252ZXJzaW9uID0gKHRpbWUpID0+IG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlVGltZVN0cmluZygnaXQtSVQnLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCd9KVxuXG4gICAgLy8gY29udmVydCBtaW51dGVzIHRvIGhvdXJzIGFuZCBtaW51dGVzXG4gICAgY29uc3QgZHVyYXRpb25Db252ZXJzaW9uID0gKHRpbWUpID0+IHtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSAoKHRpbWUgLyA2MCkgJSAxKSAqIDYwID09PSAwID8gJzAwJyA6IE1hdGguZmxvb3IoKHRpbWUgLyA2MCkgJSAxICogNjApXG5cbiAgICAgICAgcmV0dXJuIChgJHtob3Vyc31oICR7bWludXRlc31gKVxuICAgIH1cblxuICAgIC8vIGhhbmRsZSBzdG9wcyBjb25kaXRvbnNcbiAgICBjb25zdCBzdG9wQ29uZGl0aW9ucyA9IChzdG9wcykgPT4ge1xuICAgICAgICBpZiAoc3RvcHMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnRGlyZWN0J1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BzID09PSAxKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiAnMSBTdG9wJ1xuICAgICAgICB9IGVsc2UgaWYgKHN0b3BzID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3N0b3BzfSBzdG9wc2BcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWdSb3d9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmxvZ29JbWd9IHNyYz17YGh0dHBzOi8vbG9nb3Muc2t5c2Nuci5jb20vaW1hZ2VzL2FpcmxpbmVzL2Zhdmljb24vJHthaXJsaW5lX2lkfS5wbmdgfSBhbHQ9e2Ake2FpcmxpbmVfbmFtZX0gbG9nb2B9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubGVnQm94fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dGltZUNvbnZlcnNpb24oZGVwYXJ0dXJlX3RpbWUpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmFpcnBvcnR9PntkZXBhcnR1cmVfYWlycG9ydH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmFycm93SWNvbn0gc3JjPVwiL3JpZ2h0LWFycm93LnBuZ1wiIGFsdD1cIlwiLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZ0JveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RpbWVDb252ZXJzaW9uKGFycml2YWxfdGltZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYWlycG9ydH0+e2Fycml2YWxfYWlycG9ydH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sZWdCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuZHVyYXRpb259PntkdXJhdGlvbkNvbnZlcnNpb24oZHVyYXRpb25fbWlucyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuc3RvcHNSZWR9PntzdG9wQ29uZGl0aW9ucyhzdG9wcyl9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWdcblxuXG4vLyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Leg.js\n");

/***/ })

});