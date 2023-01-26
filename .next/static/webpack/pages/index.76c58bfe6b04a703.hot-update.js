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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SpeakersList() {\n    _s();\n    const { data: speakersData , requestStatus , error , updateRecord  } = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data);\n    const { searchQuery , eventYear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersList.js\",\n                    lineNumber: 21,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersList.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this);\n    }\n    //if (isLoading === true) return <div>Loading...</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakersData.filter(function(speaker) {\n                    return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n                }).filter(function(speaker) {\n                    return speaker.sessions.find((session)=>{\n                        return session.eventYear === eventYear;\n                    });\n                }).map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speaker: speaker,\n                        updateRecord: updateRecord\n                    }, speaker.id, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersList.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersList.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersList.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakersList.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"xS/SBjQi//TGzXt1d9kMjfDXSx8=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ0g7QUFDaUI7QUFDMEI7QUFDbEM7QUFDK0I7QUFFeEUsU0FBU08sZUFBZTs7SUFDdEIsTUFBTSxFQUNKRixNQUFNRyxhQUFZLEVBQ2xCQyxjQUFhLEVBQ2JDLE1BQUssRUFDTEMsYUFBWSxFQUNiLEdBQUdSLGtFQUFlQSxDQUFDLE1BQU1FLDhDQUFJQTtJQUU5QixNQUFNLEVBQUVPLFlBQVcsRUFBRUMsVUFBUyxFQUFFLEdBQUdiLGlEQUFVQSxDQUFDTSxnRkFBb0JBO0lBRWxFLElBQUlHLGtCQUFrQkwsMEVBQXNCLEVBQUU7UUFDNUMscUJBQ0UsOERBQUNXO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNwQiw4REFBQ0M7O3dCQUFFO3dCQUE2QlA7Ozs7Ozs7Ozs7Ozs7SUFHN0MsQ0FBQztJQUVELHNEQUFzRDtJQUV0RCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2QseURBQWdCQTtZQUNmZ0IsTUFBSztZQUNMQyxNQUFNO1lBQ05ILFdBQVU7WUFDVkksT0FBT1gsa0JBQWtCTCwwRUFBc0I7c0JBRS9DLDRFQUFDVztnQkFBSUMsV0FBVTswQkFDWlIsYUFDRWMsTUFBTSxDQUFDLFNBQVVDLE9BQU8sRUFBRTtvQkFDekIsT0FDRUEsUUFBUUMsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsZ0JBQ3JDVyxRQUFRSSxJQUFJLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDZDtnQkFFeEMsR0FDQ1UsTUFBTSxDQUFDLFNBQVVDLE9BQU8sRUFBRTtvQkFDekIsT0FBT0EsUUFBUUssUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsVUFBWTt3QkFDeEMsT0FBT0EsUUFBUWpCLFNBQVMsS0FBS0E7b0JBQy9CO2dCQUNGLEdBQ0NrQixHQUFHLENBQUMsU0FBVVIsT0FBTyxFQUFFO29CQUN0QixxQkFDRSw4REFBQ3RCLGdEQUFPQTt3QkFFTnNCLFNBQVNBO3dCQUNUWixjQUFjQTt1QkFGVFksUUFBUVMsRUFBRTs7Ozs7Z0JBS3JCOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1o7R0F0RFN6Qjs7UUFNSEosOERBQWVBOzs7S0FOWkk7QUF3RFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IFJlYWN0UGxhY2VIb2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KCkge1xuICBjb25zdCB7XG4gICAgZGF0YTogc3BlYWtlcnNEYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICB9ID0gdXNlUmVxdWVzdERlbGF5KDIwMDAsIGRhdGEpO1xuXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLy9pZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8UmVhY3RQbGFjZUhvbGRlclxuICAgICAgICB0eXBlPVwibWVkaWFcIlxuICAgICAgICByb3dzPXsxNX1cbiAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge3NwZWFrZXJzRGF0YVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHNwZWFrZXIuZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcbiAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzcGVha2VyLnNlc3Npb25zLmZpbmQoKHNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3RQbGFjZUhvbGRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJTcGVha2VyIiwiUmVhY3RQbGFjZUhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwic2VhcmNoUXVlcnkiLCJldmVudFllYXIiLCJGQUlMVVJFIiwiZGl2IiwiY2xhc3NOYW1lIiwiYiIsInR5cGUiLCJyb3dzIiwicmVhZHkiLCJTVUNDRVNTIiwiZmlsdGVyIiwic3BlYWtlciIsImZpcnN0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxhc3QiLCJzZXNzaW9ucyIsImZpbmQiLCJzZXNzaW9uIiwibWFwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});