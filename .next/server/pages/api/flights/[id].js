(function() {
var exports = {};
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 4598:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"itineraries":[{"id":"it_1","legs":["leg_1","leg_4"],"price":"£35","agent":"Wizzair.com","agent_rating":9.1},{"id":"it_2","legs":["leg_2","leg_5"],"price":"£115","agent":"British Airways","agent_rating":9.3},{"id":"it_3","legs":["leg_3","leg_6"],"price":"£90","agent":"Lufthansa","agent_rating":8.9},{"id":"it_4","legs":["leg_1","leg_5"],"price":"£105","agent":"Trip.com","agent_rating":9.5},{"id":"it_5","legs":["leg_1","leg_6"],"price":"£195","agent":"Trip.com","agent_rating":9.5},{"id":"it_6","legs":["leg_2","leg_4"],"price":"£93","agent":"Kiwi.com","agent_rating":8},{"id":"it_7","legs":["leg_3","leg_4"],"price":"£42","agent":"CheapFligths","agent_rating":10}],"legs":[{"id":"leg_1","departure_airport":"BUD","arrival_airport":"LTN","departure_time":"2020-10-31T15:35","arrival_time":"2020-10-31T17:00","stops":0,"airline_name":"Wizz Air","airline_id":"WZ","duration_mins":145},{"id":"leg_2","departure_airport":"BUD","arrival_airport":"LHR","departure_time":"2020-10-31T12:05","arrival_time":"2020-10-31T17:00","stops":1,"airline_name":"British Airways","airline_id":"BA","duration_mins":190},{"id":"leg_3","departure_airport":"BUD","arrival_airport":"LGW","departure_time":"2020-10-31T22:35","arrival_time":"2020-11-01T00:10","stops":0,"airline_name":"Lufthansa","airline_id":"LH","duration_mins":155},{"id":"leg_4","departure_airport":"LTN","arrival_airport":"BUD","departure_time":"2020-11-11T19:45","arrival_time":"2020-11-11T21:10","stops":0,"airline_name":"Wizz Air","airline_id":"WZ","duration_mins":145},{"id":"leg_5","departure_airport":"LHR","arrival_airport":"BUD","departure_time":"2020-11-11T11:25","arrival_time":"2020-11-11T19:10","stops":1,"airline_name":"British Airways","airline_id":"BA","duration_mins":190},{"id":"leg_6","departure_airport":"LGW","arrival_airport":"BUD","departure_time":"2020-11-11T08:10","arrival_time":"2020-11-11T11:40","stops":0,"airline_name":"Lufthansa","airline_id":"LH","duration_mins":150}]}');

/***/ }),

/***/ 1524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var _flights_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4598);
 // get single flight itinerary

function handler(req, res) {
  const filteredFlights = _flights_json__WEBPACK_IMPORTED_MODULE_0__.itineraries.filter(flight => flight.id === req.query.id);

  if (filteredFlights.length > 0) {
    res.status(200).json(filteredFlights[0]);
  } else {
    res.status(404).json({
      message: `Itinerary with id of ${req.query.id} not found`
    });
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1524));
module.exports = __webpack_exports__;

})();