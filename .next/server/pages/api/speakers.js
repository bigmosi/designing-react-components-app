"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import { data } from '../../../SpeakerData';\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    });\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"GET /api/speakers status: 200\");\n        }\n    } catch (e) {\n        console.log(\"/api/speakers error\", e);\n        res.status(404).send(\"File Not Found on server\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDdEI7QUFDSjtBQUVwQixNQUFNLEVBQUVFLFVBQVMsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQyxrQkFBTTtBQUNwQyxNQUFNQyxXQUFXRixVQUFVRCxvREFBVztBQUN0QyxNQUFNSSxRQUFRLENBQUNDLEtBQ2IsSUFBSUMsUUFBUSxDQUFDQyxVQUFZO1FBQ3ZCQyxXQUFXRCxTQUFTRjtJQUN0QjtBQUVhLGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLHNEQUFzRDtJQUV0RCxNQUFNQyxXQUFXYixtREFBWSxDQUFDLE1BQU07SUFDcEMsSUFBSTtRQUNGLE1BQU1jLGVBQWUsTUFBTVYsU0FBU1M7UUFDcEMsTUFBTVIsTUFBTTtRQUNaLE1BQU1VLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0gsY0FBY0MsUUFBUTtRQUNsRCxJQUFJQSxVQUFVO1lBQ1pILElBQUlNLFNBQVMsQ0FBQyxnQkFBZ0I7WUFDOUJOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKLEtBQUtLLFNBQVMsQ0FBQ04sVUFBVSxJQUFJLEVBQUU7WUFDcERPLFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSCxFQUFFLE9BQU9DLEdBQUc7UUFDVkYsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkM7UUFDbkNaLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7SUFDdkI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduaW5nLXJlYWN0LWNvbXBvbmVudHMvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanM/N2Q5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi8uLi9TcGVha2VyRGF0YSc7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZShcInV0aWxcIik7XG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XG5jb25zdCBkZWxheSA9IChtcykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XG5cbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xuICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xuICAgIGlmIChzcGVha2Vycykge1xuICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShzcGVha2VycywgbnVsbCwgMikpO1xuICAgICAgY29uc29sZS5sb2coXCJHRVQgL2FwaS9zcGVha2VycyBzdGF0dXM6IDIwMFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIi9hcGkvc3BlYWtlcnMgZXJyb3JcIiwgZSk7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJGaWxlIE5vdCBGb3VuZCBvbiBzZXJ2ZXJcIik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25GaWxlIiwicmVhZEZpbGVEYXRhIiwic3BlYWtlcnMiLCJKU09OIiwicGFyc2UiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJzZW5kIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();