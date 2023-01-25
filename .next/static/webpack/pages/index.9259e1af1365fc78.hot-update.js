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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n            ...sessions[0]\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 7\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    let { id , first , last  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite , onFavoriteToggle  } = param;\n    _s();\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        console.log(\"In SpeakerFavorite:doneCallback \".concat(new Date().getMilliseconds()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: function() {\n                    setInTransition(true);\n                    return onFavoriteToggle(doneCallback);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            \" \",\n            \"Favorite\",\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, this);\n}\n_s(SpeakerFavorite, \"gfuw24RZcQ1VLKTCbiMf9MKfd+I=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first , last , bio , company , twitterHandle , favorite , onFavoriteToggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 64,\n        columnNumber: 7\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker , showSessions , onFavoriteToggle  } = param;\n    const { id , first , last , sessions  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                        ...speaker,\n                        onFavoriteToggle: onFavoriteToggle\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 96,\n                columnNumber: 36\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 91,\n        columnNumber: 7\n    }, this);\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNLO2dCQUFJTCxXQUFVOztrQ0FDYiw4REFBQ007d0JBQWFDLElBQUlBO3dCQUFJQyxPQUFPQTt3QkFBT0MsTUFBTUE7Ozs7OztrQ0FDMUMsOERBQUNpQjt3QkFBcUIsR0FBR1MsT0FBTzt3QkFBRW5CLGtCQUFrQkE7Ozs7Ozs7Ozs7OztZQUVyRG9CLGlCQUFpQixJQUFJLGlCQUFLLDhEQUFDakM7Z0JBQVNDLFVBQVVBOzs7Ozt1QkFBZSxJQUFJOzs7Ozs7O0FBSXhFO01BWlM4QjtBQWNULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxuICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG4gIFxuICBmdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gU3BlYWtlckltYWdlKHsgaWQsIGZpcnN0LCBsYXN0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgICB3aWR0aD1cIjMwMFwiXG4gICAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gU3BlYWtlckZhdm9yaXRlKHtmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZX0pIHtcblxuICAgIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSW4gU3BlYWtlckZhdm9yaXRlOmRvbmVDYWxsYmFjayAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcbiAgICAgICAgfX0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGZhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJcbiAgICAgICAgICB9IC8+XG4gICAgICAgIDwvc3Bhbj57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcyh7XG4gICAgZmlyc3QsXG4gICAgbGFzdCxcbiAgICBiaW8sXG4gICAgY29tcGFueSxcbiAgICB0d2l0dGVySGFuZGxlLFxuICAgIGZhdm9yaXRlLFxuICAgIG9uRmF2b3JpdGVUb2dnbGVcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cbiAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTcGVha2VyRmF2b3JpdGUgZmF2b3JpdGU9e2Zhdm9yaXRlfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfSAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XG4gICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XG4gICAgICAgICAgICAgIDxoNj57dHdpdHRlckhhbmRsZX08L2g2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHNob3dTZXNzaW9ucywgb25GYXZvcml0ZVRvZ2dsZX0pIHtcbiAgICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XG4gICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGwgfVxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});