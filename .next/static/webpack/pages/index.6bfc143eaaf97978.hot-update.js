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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite , onFavoriteToggle  } = param;\n    function doneCallback() {\n        console.log(\"In SpeakerFavorite:doneCallback \".concat(new Date().getMillisec));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: onFavoriteToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            \" \",\n            \"Favorite\",\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, this);\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first , last , bio , company , twitterHandle , favorite , onFavoriteToggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 57,\n        columnNumber: 7\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker , showSessions , onFavoriteToggle  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 89,\n                columnNumber: 36\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 84,\n        columnNumber: 7\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztZQUVyRGtCLGlCQUFpQixJQUFJLGlCQUFLLDhEQUFDL0I7Z0JBQVNDLFVBQVVBOzs7Ozt1QkFBZSxJQUFJOzs7Ozs7O0FBSXhFO01BWlM0QjtBQWNULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTZXNzaW9uKHsgdGl0bGUsIHJvb20gfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxuICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBmdW5jdGlvbiBTcGVha2VySW1hZ2UoeyBpZCwgZmlyc3QsIGxhc3QgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoe2Zhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlfSkge1xuXG4gICAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xuICAgICAgY29uc29sZS5sb2coYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2VjfWApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxuICAgICAgICA8c3BhbiBvbkNsaWNrPXtvbkZhdm9yaXRlVG9nZ2xlfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH0gLz5cbiAgICAgICAgPC9zcGFuPntcIiBcIn1cbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBmdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtcbiAgICBmaXJzdCxcbiAgICBsYXN0LFxuICAgIGJpbyxcbiAgICBjb21wYW55LFxuICAgIHR3aXR0ZXJIYW5kbGUsXG4gICAgZmF2b3JpdGUsXG4gICAgb25GYXZvcml0ZVRvZ2dsZVxuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNwZWFrZXJGYXZvcml0ZSBmYXZvcml0ZT17ZmF2b3JpdGV9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxuICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cbiAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBmdW5jdGlvbiBTcGVha2VyKHsgc3BlYWtlciwgc2hvd1Nlc3Npb25zLCBvbkZhdm9yaXRlVG9nZ2xlfSkge1xuICAgIGNvbnN0IHsgaWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cbiAgICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyAgIDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbCB9XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlYyIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});