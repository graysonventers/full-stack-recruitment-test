/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_FlightsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FlightsContainer */ \"./components/FlightsContainer.js\");\n/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ \"./components/Meta.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/GraysonVenters/Desktop/Coding/full-stack-recruitment-test/pages/index.js\";\n\n\n\n // import data\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var flightData = _ref.flightData;\n  var itineraries = flightData.itineraries,\n      legs = flightData.legs;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_2__.default, {\n      title: \"Skyscanner\",\n      description: \"Full Stack Recruitment Test\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n      src: \"/skyscannerLogo.png\",\n      alt: \"Skyscanner\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FlightsContainer__WEBPACK_IMPORTED_MODULE_1__.default, {\n      itineraries: itineraries,\n      legs: legs\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n} // Unable to resolve issues with fetching from local API\n// export async function getStaticProps (context) {\n//   try {\n//     const res = await fetch(`${server}/api/flights`)\n//     const flightData = await res.json();\n//     return {\n//       props: { \n//         flightData: flightData\n//       }\n//   }\n//   } catch (err) {\n//     console.error(err);\n//     return {\n//       props: {}\n//     }\n//   }\n// }\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZmxpZ2h0RGF0YSIsIml0aW5lcmFyaWVzIiwibGVncyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7OztBQUllLFNBQVNBLElBQVQsT0FBOEI7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFBQSxNQUNwQ0MsV0FEb0MsR0FDZkQsVUFEZSxDQUNwQ0MsV0FEb0M7QUFBQSxNQUN2QkMsSUFEdUIsR0FDZkYsVUFEZSxDQUN2QkUsSUFEdUI7QUFHM0Msc0JBRUU7QUFBSyxhQUFTLEVBQUVDLDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDLFlBQVo7QUFBeUIsaUJBQVcsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBRUEscUVBQWhCO0FBQTZCLFNBQUcsRUFBQyxxQkFBakM7QUFBdUQsU0FBRyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLGlFQUFEO0FBQWtCLGlCQUFXLEVBQUVGLFdBQS9CO0FBQTRDLFVBQUksRUFBRUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBUUQsQyxDQWdCQztBQUVGO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQTlDd0JILEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBGbGlnaHRzQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvRmxpZ2h0c0NvbnRhaW5lcidcbmltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCB7IHNlcnZlciB9IGZyb20gJy4uL2NvbmZpZydcblxuLy8gaW1wb3J0IGRhdGFcbmltcG9ydCBmbGlnaHRzIGZyb20gJy4uL2ZsaWdodHMuanNvbidcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZmxpZ2h0RGF0YSB9KSB7XG4gIGNvbnN0IHtpdGluZXJhcmllcywgbGVnc30gPSBmbGlnaHREYXRhO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8TWV0YSB0aXRsZT1cIlNreXNjYW5uZXJcIiBkZXNjcmlwdGlvbj1cIkZ1bGwgU3RhY2sgUmVjcnVpdG1lbnQgVGVzdFwiLz5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL3NreXNjYW5uZXJMb2dvLnBuZ1wiIGFsdD1cIlNreXNjYW5uZXJcIiAvPlxuICAgICAgPEZsaWdodHNDb250YWluZXIgaXRpbmVyYXJpZXM9e2l0aW5lcmFyaWVzfSBsZWdzPXtsZWdzfS8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBmbGlnaHRzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGZsaWdodERhdGE6IGZsaWdodHNcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gIH1cbn1cblxuICAvLyBVbmFibGUgdG8gcmVzb2x2ZSBpc3N1ZXMgd2l0aCBmZXRjaGluZyBmcm9tIGxvY2FsIEFQSVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKGNvbnRleHQpIHtcbi8vICAgdHJ5IHtcblxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlcn0vYXBpL2ZsaWdodHNgKVxuLy8gICAgIGNvbnN0IGZsaWdodERhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzOiB7IFxuLy8gICAgICAgICBmbGlnaHREYXRhOiBmbGlnaHREYXRhXG4vLyAgICAgICB9XG4vLyAgIH1cbi8vICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wczoge31cbi8vICAgICB9XG4vLyAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});