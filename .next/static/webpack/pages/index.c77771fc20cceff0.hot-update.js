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

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction SpeakersToolbar() {\n    _s();\n    const [showSessions, setShowSessions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [theme, setTheme] = use;\n    const handleChange = (e)=>{\n        setShowSessions(e.target.checked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: handleChange\n                                        }, void 0, false, {\n                                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                            lineNumber: 20,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                            lineNumber: 21,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                            lineNumber: 17,\n                            columnNumber: 22\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: \"light\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                            lineNumber: 24,\n                            columnNumber: 22\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                    lineNumber: 16,\n                    columnNumber: 20\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersToolbar.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakersToolbar, \"FKZ6CCav1kfTsi33tzw+1vxR964=\");\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUNqQyxTQUFTQyxrQkFBa0I7O0lBRXZCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQSxDQUFDLElBQUk7SUFDckQsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdDO0lBRTNCLE1BQU1DLGVBQWUsQ0FBQ0MsSUFBTTtRQUN2QkwsZ0JBQ0dLLEVBQUVDLE1BQU0sQ0FBQ0MsT0FBTztJQUV2QjtJQUNBLHFCQUNJLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNYLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWiw0RUFBQ0U7b0JBQUdGLFdBQVU7O3NDQUNaLDhEQUFDRzs0QkFBR0gsV0FBVTs7OENBQ1gsOERBQUNJOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUFNTCxXQUFVOztzREFDYiw4REFBQ007NENBQU1DLE1BQUs7NENBQVdULFNBQVNSOzRDQUFja0IsVUFBVWI7Ozs7OztzREFDeEQsOERBQUNjOzRDQUFLVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3ZCLDhEQUFDRzs0QkFBR0gsV0FBVTs7OENBQ1gsOERBQUNVOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNMO29DQUFNTCxXQUFVOzhDQUNiLDRFQUFDVzt3Q0FBT1gsV0FBVTt3Q0FBcUJZLE9BQU07OzBEQUN6Qyw4REFBQ0M7Z0RBQU9ELE9BQU07MERBQVE7Ozs7OzswREFDdEIsOERBQUNDO2dEQUFPRCxPQUFNOzBEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNyRDtHQXBDU3ZCO0tBQUFBO0FBc0NULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzVG9vbGJhci5qcz8xZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5mdW5jdGlvbiBTcGVha2Vyc1Rvb2xiYXIoKSB7XG5cbiAgICBjb25zdCBbc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VcbiAgICBcbiAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFNob3dTZXNzaW9ucyhcbiAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCBcbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b29sYmFyIGRhcmstdGhlbWUtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNob3cgU2Vzc2lvbnMmbmJzcDsmbmJzcDs8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Nob3dTZXNzaW9uc30gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzd2l0Y2hcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB0aGVtZVwiIHZhbHVlPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj5EYXJrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNwZWFrZXJzVG9vbGJhciIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ1bCIsImxpIiwiYiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJzcGFuIiwic3Ryb25nIiwic2VsZWN0IiwidmFsdWUiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n"));

/***/ })

});