"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useSpeakerFilter(startingShowSessions, startingEventYear) {\n    _s();\n    const [showSessions, setShowSessions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowSessions);\n    const [eventYear, setEventYear] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingEventYear);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const EVENT_YEARS = [\n        \"2008\",\n        \"2009\"\n    ];\n    return {\n        showSessions,\n        setShowSessions,\n        eventYear,\n        setEventYear\n    };\n}\n_s(useSpeakerFilter, \"s7xerjiBef46YnbrO596fuDPwmU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSpeakerFilter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU3BlYWtlckZpbHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWlDO0FBRWpDLFNBQVNDLGlCQUFpQkMsb0JBQW9CLEVBQUVDLGlCQUFpQixFQUFFOztJQUMvRCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQ0U7SUFDakQsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDRztJQUMzQyxNQUFNLENBQUNLLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVUsY0FBYztRQUNoQjtRQUNBO0tBQ0g7SUFFRCxPQUFPO1FBQ0hOO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0o7QUFDSjtHQWhCU047QUFrQlQsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlU3BlYWtlckZpbHRlci5qcz83NDcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHVzZVNwZWFrZXJGaWx0ZXIoc3RhcnRpbmdTaG93U2Vzc2lvbnMsIHN0YXJ0aW5nRXZlbnRZZWFyKSB7XG4gICAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHN0YXJ0aW5nU2hvd1Nlc3Npb25zKTtcbiAgICBjb25zdCBbZXZlbnRZZWFyLCBzZXRFdmVudFllYXJdID0gdXNlU3RhdGUoc3RhcnRpbmdFdmVudFllYXIpO1xuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBFVkVOVF9ZRUFSUyA9IFtcbiAgICAgICAgXCIyMDA4XCIsXG4gICAgICAgIFwiMjAwOVwiXG4gICAgXVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd1Nlc3Npb25zLFxuICAgICAgICBzZXRTaG93U2Vzc2lvbnMsXG4gICAgICAgIGV2ZW50WWVhcixcbiAgICAgICAgc2V0RXZlbnRZZWFyLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJGaWx0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU3BlYWtlckZpbHRlciIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic3RhcnRpbmdFdmVudFllYXIiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJldmVudFllYXIiLCJzZXRFdmVudFllYXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useSpeakerFilter.js\n"));

/***/ })

});