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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const { data: speakerData , requestStatus , error , updateRecord  } = useRequestSpeakers(2000);\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"Error: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 18,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this);\n    }\n    // if (isLoading === true) return <div>Loading...</div>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        type: \"media\",\n        rows: 15,\n        className: \"speakerslist-placeholder\",\n        ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.STATUS.SUCCESS,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container speaker-list\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakerData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                        lineNumber: 38,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"dDquBnHUlTtVNqHZSqlH5zUXuqQ=\", true);\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDaUI7QUFDa0I7QUFDMUI7QUFFekMsU0FBU0ssWUFBWSxLQUFnQixFQUFFO1FBQWxCLEVBQUVDLGFBQVksRUFBRSxHQUFoQjs7SUFFakIsTUFBTSxFQUNGRixNQUFLRyxZQUFXLEVBQ2hCQyxjQUFhLEVBQ2JDLE1BQUssRUFDTEMsYUFBWSxFQUNmLEdBQUdDLG1CQUFtQjtJQUV2QixJQUFJSCxrQkFBa0JMLGtFQUFjLEVBQUU7UUFDbEMscUJBQ0ksOERBQUNVO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNqQiw4REFBQ0M7O3dCQUFFO3dCQUE2Qk47Ozs7Ozs7Ozs7Ozs7SUFHcEQsQ0FBQztJQUVELHdEQUF3RDtJQUV4RCxxQkFDSSw4REFBQ1IseURBQWdCQTtRQUNoQmUsTUFBSztRQUNMQyxNQUFNO1FBQ05ILFdBQVU7UUFDVkksT0FBT1Ysa0JBQWtCTCxrRUFBYztrQkFFcEMsNEVBQUNVO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUVQUCxZQUFZYSxHQUFHLENBQUMsU0FBVUMsT0FBTyxFQUFFO29CQUUvQixxQkFDSSw4REFBQ3JCLGdEQUFPQTt3QkFFSnFCLFNBQVNBO3dCQUNUZixjQUFjQTt3QkFDZGdCLGtCQUFrQixJQUFNOzRCQUNwQkEsaUJBQWlCRCxRQUFRRSxFQUFFO3dCQUMvQjt1QkFMS0YsUUFBUUUsRUFBRTs7Ozs7Z0JBTzNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBOUNTbEI7S0FBQUE7QUFnRFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckxpc3QuanM/ZmVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIGRhdGE6c3BlYWtlckRhdGEsXG4gICAgICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgICAgIGVycm9yLFxuICAgICAgICB1cGRhdGVSZWNvcmQsXG4gICAgfSA9IHVzZVJlcXVlc3RTcGVha2VycygyMDAwKTtcblxuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSBTVEFUVVMuRkFJTFVSRSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICBFcnJvcjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXIgXG4gICAgICAgICB0eXBlPVwibWVkaWFcIiBcbiAgICAgICAgIHJvd3M9ezE1fVxuICAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcbiAgICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBTVEFUVVMuU1VDQ0VTU31cbiAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXItbGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckxpc3Q7Il0sIm5hbWVzIjpbIlNwZWFrZXIiLCJSZWFjdFBsYWNlaG9sZGVyIiwidXNlUmVxdWVzdERlbGF5IiwiU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlckRhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJGQUlMVVJFIiwiZGl2IiwiY2xhc3NOYW1lIiwiYiIsInR5cGUiLCJyb3dzIiwicmVhZHkiLCJTVUNDRVNTIiwibWFwIiwic3BlYWtlciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});