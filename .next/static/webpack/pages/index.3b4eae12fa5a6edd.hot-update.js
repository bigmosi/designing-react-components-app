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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerContext */ \"./src/contexts/SpeakerContext.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 8,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    let { sessions  } = param;\n    _s();\n    const { eventYear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: sessions.filter(function(session) {\n            return session.eventYear === eventYear;\n        }).map(function(session) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"session w-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                    ...session\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 24,\n                    columnNumber: 15\n                }, this)\n            }, session.id, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Sessions, \"RA+HVAm2dNZ/ys9ifFFCpZo7nFg=\");\n_c1 = Sessions;\nfunction SpeakerImage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    let { favorite , onFavoriteToggle: onFavoriteToggle1  } = param;\n    _s1();\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        setInTransition(false);\n        console.log(\"In SpeakerFavorite:doneCallback    \".concat(new Date().getMilliseconds()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                setInTransition(true);\n                return onFavoriteToggle1(doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s1(SpeakerFavorite, \"gfuw24RZcQ1VLKTCbiMf9MKfd+I=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    let { first: first1 , last: last1 , bio , company , twitterHandle , favorite , onFavoriteToggle: onFavoriteToggle1  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first1,\n                        \" \",\n                        last1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle1\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 104,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_c4 = SpeakerDemographics;\nfunction Speaker() {\n    _s2();\n    const { id: id1 , first: first1 , last: last1 , sessions  } = speaker;\n    const { speaker , updateRecord  } = _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext;\n    const { showSessions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerProvider, {\n        speaker: speaker,\n        updateRecord: updateRecord,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-height p-4 mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                            lineNumber: 121,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {\n                            ...speaker,\n                            onFavoriteToggle: onFavoriteToggle\n                        }, void 0, false, {\n                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                            lineNumber: 122,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, this),\n                showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                    sessions: sessions\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 124,\n                    columnNumber: 32\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 118,\n        columnNumber: 6\n    }, this);\n}\n_s2(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7TUFuQ1NIO0FBcUNULFNBQVNRLFVBQVU7O0lBQ2pCLE1BQU0sRUFBRTVCLElBQUFBLElBQUUsRUFBRU8sT0FBQUEsT0FBSyxFQUFFRCxNQUFBQSxNQUFJLEVBQUVaLFNBQVEsRUFBRSxHQUFHbUM7SUFDdEMsTUFBTSxFQUFDQSxRQUFPLEVBQUVDLGFBQVksRUFBQyxHQUFHN0Msb0VBQWNBO0lBQzlDLE1BQU0sRUFBRThDLGFBQVksRUFBRSxHQUFHakQsaURBQVVBLENBQUNDLGdGQUFvQkE7SUFDeEQscUJBQ0csOERBQUNDLHFFQUFlQTtRQUFDNkMsU0FBU0E7UUFBU0MsY0FBY0E7a0JBQ2hELDRFQUFDbEM7WUFBSU4sV0FBVTs7OEJBQ2YsOERBQUNNO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ1c7Ozs7O3NDQUNELDhEQUFDbUI7NEJBQXFCLEdBQUdTLE9BQU87NEJBQUVuQixrQkFBa0JBOzs7Ozs7Ozs7Ozs7Z0JBRXJEcUIsaUJBQWlCLElBQUksaUJBQUcsOERBQUN0QztvQkFBU0MsVUFBVUE7Ozs7OzJCQUFlLElBQUk7Ozs7Ozs7Ozs7OztBQUl0RTtJQWZTa0M7TUFBQUE7QUFpQlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IFNwZWFrZXJQcm92aWRlciwgU3BlYWtlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xuICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cbiAgICAgIHtzZXNzaW9uc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlc3Npb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cbiAgICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckltYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoeyBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpIHtcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgb25DbGljaz17ZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcbiAgICAgICAgICByZXR1cm4gb25GYXZvcml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aVxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBmYXZvcml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XG4gICAgICAgIHtpblRyYW5zaXRpb24gPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlckRlbW9ncmFwaGljcyh7XG4gIGZpcnN0LFxuICBsYXN0LFxuICBiaW8sXG4gIGNvbXBhbnksXG4gIHR3aXR0ZXJIYW5kbGUsXG4gIGZhdm9yaXRlLFxuICBvbkZhdm9yaXRlVG9nZ2xlLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XG4gICAgICAgICAge2ZpcnN0fSB7bGFzdH1cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNwZWFrZXJGYXZvcml0ZVxuICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XG4gICAgICAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxuICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxuICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XG4gICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XG4gICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU3BlYWtlcigpIHtcbiAgY29uc3QgeyBpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zIH0gPSBzcGVha2VyO1xuICBjb25zdCB7c3BlYWtlciwgdXBkYXRlUmVjb3JkfSA9IFNwZWFrZXJDb250ZXh0O1xuICBjb25zdCB7IHNob3dTZXNzaW9ucyB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgIDxTcGVha2VyUHJvdmlkZXIgc3BlYWtlcj17c3BlYWtlcn0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICA8U3BlYWtlckltYWdlICAvPlxuICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgICAgPC9TcGVha2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJQcm92aWRlciIsIlNwZWFrZXJDb250ZXh0IiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImV2ZW50WWVhciIsImRpdiIsImZpbHRlciIsInNlc3Npb24iLCJtYXAiLCJpZCIsIlNwZWFrZXJJbWFnZSIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwibGFzdCIsImZpcnN0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJvbkNsaWNrIiwiaSIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJiaW8iLCJjb21wYW55IiwidHdpdHRlckhhbmRsZSIsImgzIiwicCIsImg1IiwiaDYiLCJTcGVha2VyIiwic3BlYWtlciIsInVwZGF0ZVJlY29yZCIsInNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});