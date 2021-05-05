(function() {
var exports = {};
exports.id = 773;
exports.ids = [773];
exports.modules = {

/***/ 1596:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Meta; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Meta.js




const Meta = ({
  title,
  description
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    })]
  });
};

/* harmony default export */ var components_Meta = (Meta);

/***/ }),

/***/ 9529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./styles/ItinerarySelection.module.css
var ItinerarySelection_module = __webpack_require__(7480);
var ItinerarySelection_module_default = /*#__PURE__*/__webpack_require__.n(ItinerarySelection_module);
// EXTERNAL MODULE: ./components/Meta.js + 1 modules
var Meta = __webpack_require__(1596);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./pages/itinerary/[id].js






const itinerary = () => {
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ItinerarySelection_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Meta/* default */.Z, {
      title: "Flight Selection",
      description: "Flight Selected"
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: `Flight ID '${router.query.id}' Selected`
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: (ItinerarySelection_module_default()).button,
      onClick: () => router.back(),
      children: "Go Back"
    })]
  });
};

/* harmony default export */ var _id_ = (itinerary);

/***/ }),

/***/ 7480:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "ItinerarySelection_container__20le2",
	"button": "ItinerarySelection_button__3BUD6"
};


/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9529));
module.exports = __webpack_exports__;

})();