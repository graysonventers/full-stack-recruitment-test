/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/flights/[id]";
exports.ids = ["pages/api/flights/[id]"];
exports.modules = {

/***/ "./flights.json":
/*!**********************!*\
  !*** ./flights.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"itineraries":[{"id":"it_1","legs":["leg_1","leg_4"],"price":"£35","agent":"Wizzair.com","agent_rating":9.1},{"id":"it_2","legs":["leg_2","leg_5"],"price":"£115","agent":"British Airways","agent_rating":9.3},{"id":"it_3","legs":["leg_3","leg_6"],"price":"£90","agent":"Lufthansa","agent_rating":8.9},{"id":"it_4","legs":["leg_1","leg_5"],"price":"£105","agent":"Trip.com","agent_rating":9.5},{"id":"it_5","legs":["leg_1","leg_6"],"price":"£195","agent":"Trip.com","agent_rating":9.5},{"id":"it_6","legs":["leg_2","leg_4"],"price":"£93","agent":"Kiwi.com","agent_rating":8},{"id":"it_7","legs":["leg_3","leg_4"],"price":"£42","agent":"CheapFligths","agent_rating":10}],"legs":[{"id":"leg_1","departure_airport":"BUD","arrival_airport":"LTN","departure_time":"2020-10-31T15:35","arrival_time":"2020-10-31T17:00","stops":0,"airline_name":"Wizz Air","airline_id":"WZ","duration_mins":145},{"id":"leg_2","departure_airport":"BUD","arrival_airport":"LHR","departure_time":"2020-10-31T12:05","arrival_time":"2020-10-31T17:00","stops":1,"airline_name":"British Airways","airline_id":"BA","duration_mins":190},{"id":"leg_3","departure_airport":"BUD","arrival_airport":"LGW","departure_time":"2020-10-31T22:35","arrival_time":"2020-11-01T00:10","stops":0,"airline_name":"Lufthansa","airline_id":"LH","duration_mins":155},{"id":"leg_4","departure_airport":"LTN","arrival_airport":"BUD","departure_time":"2020-11-11T19:45","arrival_time":"2020-11-11T21:10","stops":0,"airline_name":"Wizz Air","airline_id":"WZ","duration_mins":145},{"id":"leg_5","departure_airport":"LHR","arrival_airport":"BUD","departure_time":"2020-11-11T11:25","arrival_time":"2020-11-11T19:10","stops":1,"airline_name":"British Airways","airline_id":"BA","duration_mins":190},{"id":"leg_6","departure_airport":"LGW","arrival_airport":"BUD","departure_time":"2020-11-11T08:10","arrival_time":"2020-11-11T11:40","stops":0,"airline_name":"Lufthansa","airline_id":"LH","duration_mins":150}]}');

/***/ }),

/***/ "./pages/api/flights/[id].js":
/*!***********************************!*\
  !*** ./pages/api/flights/[id].js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _flights_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../flights.json */ \"./flights.json\");\n // get single flight itinerary\n\nfunction handler(req, res) {\n  const filteredFlights = _flights_json__WEBPACK_IMPORTED_MODULE_0__.itineraries.filter(flight => flight.id === req.query.id);\n\n  if (filteredFlights.length > 0) {\n    res.status(200).json(filteredFlights[0]);\n  } else {\n    res.status(404).json({\n      message: `Itinerary with id of ${req.query.id} not found`\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdWxsLXN0YWNrLXJlY3J1aXRtZW50LXRlc3QvLi9wYWdlcy9hcGkvZmxpZ2h0cy9baWRdLmpzPzBhZGIiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbHRlcmVkRmxpZ2h0cyIsImZsaWdodHMiLCJmbGlnaHQiLCJpZCIsInF1ZXJ5IiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O0NBRUE7O0FBQ2UsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBRXRDLFFBQU1DLGVBQWUsR0FBR0MsNkRBQUEsQ0FBMkJDLE1BQU0sSUFBSUEsTUFBTSxDQUFDQyxFQUFQLEtBQWNMLEdBQUcsQ0FBQ00sS0FBSixDQUFVRCxFQUE3RCxDQUF4Qjs7QUFFQSxNQUFJSCxlQUFlLENBQUNLLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzVCTixPQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlAsZUFBZSxDQUFDLENBQUQsQ0FBcEM7QUFDSCxHQUZELE1BRU87QUFDSEQsT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFHLHdCQUF1QlYsR0FBRyxDQUFDTSxLQUFKLENBQVVELEVBQUc7QUFBaEQsS0FBckI7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2ZsaWdodHMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZsaWdodHMgZnJvbSAnLi4vLi4vLi4vZmxpZ2h0cy5qc29uJ1xuXG4vLyBnZXQgc2luZ2xlIGZsaWdodCBpdGluZXJhcnlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBcbiAgICBjb25zdCBmaWx0ZXJlZEZsaWdodHMgPSBmbGlnaHRzLml0aW5lcmFyaWVzLmZpbHRlcihmbGlnaHQgPT4gZmxpZ2h0LmlkID09PSByZXEucXVlcnkuaWQpXG5cbiAgICBpZiAoZmlsdGVyZWRGbGlnaHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZmlsdGVyZWRGbGlnaHRzWzBdKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogYEl0aW5lcmFyeSB3aXRoIGlkIG9mICR7cmVxLnF1ZXJ5LmlkfSBub3QgZm91bmRgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/flights/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/flights/[id].js"));
module.exports = __webpack_exports__;

})();