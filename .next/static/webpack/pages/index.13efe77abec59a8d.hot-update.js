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

/***/ "./src/components/SpeakerList.js":
/*!***************************************!*\
  !*** ./src/components/SpeakerList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speaker-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 23,\n                    columnNumber: 24\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"H6iwNyI6LbdP6Bc83xMKmQmcdfE=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDTztBQUNOO0FBRWpDLFNBQVNHLFlBQVksS0FBYyxFQUFFO1FBQWhCLEVBQUNDLGFBQVksRUFBQyxHQUFkOztJQUVqQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUNELDhDQUFJQTtJQUVuRCxNQUFNTSxtQkFBbUIsQ0FBQ0MsS0FBTztRQUM3QixNQUFNQyxzQkFBdUJKLFlBQVlLLElBQUksQ0FBQyxTQUFTQyxHQUFHLEVBQUU7WUFDeEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUN0QjtJQUVKO0lBRUEscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNEO1lBQUlDLFdBQVU7c0JBRVRSLFlBQVlTLEdBQUcsQ0FBQyxTQUFTQyxPQUFPLEVBQUU7Z0JBRTlCLHFCQUNLLDhEQUFDZixnREFBT0E7b0JBRVJlLFNBQVNBO29CQUNUWCxjQUFjQTtvQkFDZEcsa0JBQWtCLElBQU07d0JBQ3ZCQSxpQkFBaUJRLFFBQVFQLEVBQUU7b0JBQzVCO21CQUxLTyxRQUFRUCxFQUFFOzs7OztZQU94Qjs7Ozs7Ozs7Ozs7QUFLZDtHQS9CU0w7S0FBQUE7QUFpQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckxpc3QuanM/ZmVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3BlYWtlckxpc3Qoe3Nob3dTZXNzaW9uc30pIHtcblxuICAgIGNvbnN0IFtzcGVha2VyRGF0YSwgc2V0U3BlYWtlckRhdGFdID0gdXNlU3RhdGUoZGF0YSlcblxuICAgIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGUgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyAgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXItbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3BlYWtlckRhdGEubWFwKGZ1bmN0aW9uKHNwZWFrZXIpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBcbiAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn0gXG4gICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfSBcbiAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlU3RhdGUiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNwZWFrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});