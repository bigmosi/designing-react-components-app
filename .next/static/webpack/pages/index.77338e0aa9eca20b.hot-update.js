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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const { speakerData , requestStatus , error , onFavoriteToggle  } = useRequestSpeakers(2000);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"Error: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 17,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this);\n    }\n    // if (isLoading === true) return <div>Loading...</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"media\",\n        rows: 15,\n        className: \"speakerslist-placeholder\",\n        ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.STATUS.SUCCESS,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container speaker-list\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakerData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                        lineNumber: 37,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"vL1Dk8Q1yNv51J4tBWa9n/sqZQs=\", true);\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNpQjtBQUNhO0FBRTlELFNBQVNJLFlBQVksS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxhQUFZLEVBQUUsR0FBaEI7O0lBRWpCLE1BQU0sRUFDRkMsWUFBVyxFQUNYQyxjQUFhLEVBQ2JDLE1BQUssRUFDTEMsaUJBQWdCLEVBQ25CLEdBQUdDLG1CQUFtQjtJQUV2QixJQUFJSCxrQkFBa0JKLGtFQUFjLEVBQUU7UUFDbEMscUJBQ0ksOERBQUNTO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNqQiw4REFBQ0M7O3dCQUFFO3dCQUE2Qk47Ozs7Ozs7Ozs7Ozs7SUFHcEQsQ0FBQztJQUVELHdEQUF3RDtJQUV4RCxxQkFDSSw4REFBQ1AseURBQWdCQTtRQUNoQmMsTUFBSztRQUNMQyxNQUFNO1FBQ05ILFdBQVU7UUFDVkksT0FBT1Ysa0JBQWtCSixrRUFBYztrQkFFcEMsNEVBQUNTO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUVQUCxZQUFZYSxHQUFHLENBQUMsU0FBVUMsT0FBTyxFQUFFO29CQUUvQixxQkFDSSw4REFBQ3BCLGdEQUFPQTt3QkFFSm9CLFNBQVNBO3dCQUNUZixjQUFjQTt3QkFDZEksa0JBQWtCLElBQU07NEJBQ3BCQSxpQkFBaUJXLFFBQVFDLEVBQUU7d0JBQy9CO3VCQUxLRCxRQUFRQyxFQUFFOzs7OztnQkFPM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0E5Q1NqQjtLQUFBQTtBQWdEVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcz9mZWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xuaW1wb3J0IHVzZVJlcXVlc3QsIHsgU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIHNwZWFrZXJEYXRhLFxuICAgICAgICByZXF1ZXN0U3RhdHVzLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZVxuICAgIH0gPSB1c2VSZXF1ZXN0U3BlYWtlcnMoMjAwMCk7XG5cbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gU1RBVFVTLkZBSUxVUkUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgRXJyb3I6IDxiPmxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gaWYgKGlzTG9hZGluZyA9PT0gdHJ1ZSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdFBsYWNlaG9sZGVyIFxuICAgICAgICAgdHlwZT1cIm1lZGlhXCIgXG4gICAgICAgICByb3dzPXsxNX1cbiAgICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXG4gICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gU1RBVFVTLlNVQ0NFU1N9XG4gICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcGVha2VyRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3QiLCJTVEFUVVMiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwib25GYXZvcml0ZVRvZ2dsZSIsInVzZVJlcXVlc3RTcGVha2VycyIsIkZBSUxVUkUiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwidHlwZSIsInJvd3MiLCJyZWFkeSIsIlNVQ0NFU1MiLCJtYXAiLCJzcGVha2VyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});