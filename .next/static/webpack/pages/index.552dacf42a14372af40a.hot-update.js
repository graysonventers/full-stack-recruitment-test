/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Itineraries.js":
/*!***********************************!*\
  !*** ./components/Itineraries.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Itineraries.module.css */ \"./styles/Itineraries.module.css\");\n/* harmony import */ var _styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Leg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Leg */ \"./components/Leg.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/GraysonVenters/Desktop/Coding/full-stack-recruitment-test/components/Itineraries.js\",\n    _this = undefined;\n\n\n\n\n\nvar Itineraries = function Itineraries(_ref) {\n  var itinerary = _ref.itinerary,\n      legs = _ref.legs;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n    children: [itinerary.legs.map(function (legItem) {\n      return console.log(legItem.id) // <Leg key={legItem.id} leg={legs.filter(item => item.id === legItem)} />\n      ;\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default().bottomRowInfo),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default().priceAndName),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: (_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default().price),\n          children: itinerary.price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: (_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default().airline),\n          children: itinerary.agent\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Itineraries_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/itinerary/\".concat(itinerary.id),\n          children: \"Select\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 50\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Itineraries;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Itineraries);\n\nvar _c;\n\n$RefreshReg$(_c, \"Itineraries\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JdGluZXJhcmllcy5qcz81OTI0Il0sIm5hbWVzIjpbIkl0aW5lcmFyaWVzIiwiaXRpbmVyYXJ5IiwibGVncyIsInN0eWxlIiwibWFwIiwibGVnSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInByaWNlIiwiYWdlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXlCO0FBQUEsTUFBdEJDLFNBQXNCLFFBQXRCQSxTQUFzQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUV6QyxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsZUFFS0YsU0FBUyxDQUFDQyxJQUFWLENBQWVFLEdBQWYsQ0FBbUIsVUFBQUMsT0FBTztBQUFBLGFBQ3ZCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBTyxDQUFDRyxFQUFwQixDQUR1QixDQUV2QjtBQUZ1QjtBQUFBLEtBQTFCLENBRkwsZUFRSTtBQUFLLGVBQVMsRUFBRUwscUZBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSxvRkFBaEI7QUFBQSxnQ0FDSTtBQUFNLG1CQUFTLEVBQUVBLDZFQUFqQjtBQUFBLG9CQUErQkYsU0FBUyxDQUFDUTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxtQkFBUyxFQUFFTiwrRUFBakI7QUFBQSxvQkFBaUNGLFNBQVMsQ0FBQ1M7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUtJO0FBQVEsaUJBQVMsRUFBRVAsOEVBQW5CO0FBQUEsK0JBQWlDLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSx1QkFBZ0JGLFNBQVMsQ0FBQ08sRUFBMUIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrQkgsQ0FwQkQ7O0tBQU1SLFc7QUFzQk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0l0aW5lcmFyaWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9JdGluZXJhcmllcy5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGVnIGZyb20gJy4vTGVnJ1xuXG5jb25zdCBJdGluZXJhcmllcyA9ICh7IGl0aW5lcmFyeSwgbGVncyB9KSA9PiB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7aXRpbmVyYXJ5LmxlZ3MubWFwKGxlZ0l0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlZ0l0ZW0uaWQpXG4gICAgICAgICAgICAgICAgLy8gPExlZyBrZXk9e2xlZ0l0ZW0uaWR9IGxlZz17bGVncy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBsZWdJdGVtKX0gLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm90dG9tUm93SW5mb30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByaWNlQW5kTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUucHJpY2V9PntpdGluZXJhcnkucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlLmFpcmxpbmV9PntpdGluZXJhcnkuYWdlbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259PjxMaW5rIGhyZWY9e2AvaXRpbmVyYXJ5LyR7aXRpbmVyYXJ5LmlkfWB9PlNlbGVjdDwvTGluaz48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0aW5lcmFyaWVzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Itineraries.js\n");

/***/ })

});