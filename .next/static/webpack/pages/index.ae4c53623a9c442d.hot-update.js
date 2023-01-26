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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* harmony import */ var _contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerContext */ \"./src/contexts/SpeakerContext.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();\n\n\n\nfunction Session(param) {\n    let { title , room  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 8,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions() {\n    _s();\n    const { eventYear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    const { speaker  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const sessions = speaker.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: sessions.filter(function(session) {\n            return session.eventYear === eventYear;\n        }).map(function(session) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"session w-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, {\n                    ...session\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 27,\n                    columnNumber: 15\n                }, this)\n            }, session.id, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Sessions, \"Mbmdx4PcMD6cs0fOkUGItK70sHk=\");\n_c1 = Sessions;\nfunction SpeakerImage() {\n    _s1();\n    const { speaker: { id , first , last  }  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s1(SpeakerImage, \"vxs+9iOAK8XHBsDUUqnHnT95tPY=\");\n_c2 = SpeakerImage;\nfunction SpeakerFavorite() {\n    _s2();\n    const { speaker , updateRecord  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const [inTransition, setInTransition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function doneCallback() {\n        setInTransition(false);\n        console.log(\"In SpeakerFavorite:doneCallback    \".concat(new Date().getMilliseconds()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function() {\n                setInTransition(true);\n                updateRecord({\n                    ...speaker,\n                    favorite: !speaker.favorite\n                }, doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: speaker.favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s2(SpeakerFavorite, \"JYNF7jT9pd2MEJCpvqZnBM3xISU=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics() {\n    _s3();\n    const { speaker  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerContext);\n    const { first , last , bio , company , twitterHandle , favorite  } = speaker;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {}, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s3(SpeakerDemographics, \"+GLFQhMVC35zrtukZQzc41tR8Ok=\");\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    let { speaker , updateRecord , insert  } = param;\n    _s4();\n    const { id , first , last , sessions  } = speaker;\n    const { showSessions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerProvider, {\n        speaker: speaker,\n        updateRecord: updateRecord,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-height p-4 mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {}, void 0, false, {\n                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                            lineNumber: 132,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, {}, void 0, false, {\n                            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                            lineNumber: 133,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 131,\n                    columnNumber: 7\n                }, this),\n                showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {}, void 0, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n                    lineNumber: 135,\n                    columnNumber: 32\n                }, this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n            lineNumber: 130,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/Speaker.js\",\n        lineNumber: 129,\n        columnNumber: 6\n    }, this);\n}\n_s4(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQ0QsOERBQUNaOztrQ0FDQyw4REFBQzZCO3dCQUFFcEMsV0FBVTtrQ0FBb0JnQzs7Ozs7O2tDQUNqQyw4REFBQ3pCO3dCQUFJUCxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQUlQLFdBQVU7O2tEQUNiLDhEQUFDcUM7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7a0RBQUlMOzs7Ozs7Ozs7Ozs7MENBRVAsOERBQUMxQjtnQ0FBSVAsV0FBVTs7a0RBQ2IsOERBQUNxQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBSUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtJQXBDU0g7TUFBQUE7QUFzQ1QsU0FBU1EsUUFBUSxLQUFnQyxFQUFFO1FBQWxDLEVBQUVsQyxRQUFPLEVBQUVlLGFBQVksRUFBRW9CLE9BQU0sRUFBQyxHQUFoQzs7SUFDZixNQUFNLEVBQUU3QixHQUFFLEVBQUVFLE1BQUssRUFBRUMsS0FBSSxFQUFFUixTQUFRLEVBQUUsR0FBR0Q7SUFDdEMsTUFBTSxFQUFFb0MsYUFBWSxFQUFFLEdBQUdqRCxpREFBVUEsQ0FBQ0MsZ0ZBQW9CQTtJQUN4RCxxQkFDRyw4REFBQ0MscUVBQWVBO1FBQUNXLFNBQVNBO1FBQVNlLGNBQWNBO2tCQUNoRCw0RUFBQ2I7WUFBSVAsV0FBVTs7OEJBQ2YsOERBQUNPO29CQUFJUCxXQUFVOztzQ0FDYiw4REFBQ1k7Ozs7O3NDQUNELDhEQUFDbUI7Ozs7Ozs7Ozs7O2dCQUVGVSxpQkFBaUIsSUFBSSxpQkFBRyw4REFBQ3RDOzs7OzJCQUFlLElBQUk7Ozs7Ozs7Ozs7OztBQUluRDtJQWRTb0M7TUFBQUE7QUFnQlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcbmltcG9ydCB7IFNwZWFrZXJQcm92aWRlciwgU3BlYWtlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvU3BlYWtlckNvbnRleHRcIjtcblxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCI+XG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25zKCkge1xuICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIGNvbnN0IHsgc3BlYWtlciB9ID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgY29uc3Qgc2Vzc2lvbnMgPSBzcGVha2VyLnNlc3Npb25zO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XG4gICAgICB7c2Vzc2lvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2Vzc2lvbikge1xuICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChzZXNzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiIGtleT17c2Vzc2lvbi5pZH0+XG4gICAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9ufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSgpIHtcbiAgY29uc3Qge3NwZWFrZXI6IHtpZCwgZmlyc3QsIGxhc3R9fSA9IHVzZUNvbnRleHQoU3BlYWtlckNvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbWcgZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGgtMzAwXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcbiAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoKSB7XG4gIGNvbnN0IHsgc3BlYWtlciwgdXBkYXRlUmVjb3JkIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcblxuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XG4gICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBJbiBTcGVha2VyRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICR7bmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKX1gXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XG4gICAgICAgICAgdXBkYXRlUmVjb3JkKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5zcGVha2VyLCBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb25lQ2FsbGJhY2tcbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIHNwZWFrZXIuZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIEZhdm9yaXRle1wiIFwifVxuICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXJEZW1vZ3JhcGhpY3MoKSB7XG5cbiAgY29uc3QgeyBzcGVha2VyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJDb250ZXh0KTtcblxuICBjb25zdCB7IFxuICAgIGZpcnN0LFxuICAgIGxhc3QsXG4gICAgYmlvLFxuICAgIGNvbXBhbnksXG4gICAgdHdpdHRlckhhbmRsZSxcbiAgICBmYXZvcml0ZVxuICAgfSA9IHNwZWFrZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTcGVha2VyRmF2b3JpdGUgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj57YmlvfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cbiAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdpdHRlclwiPlxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxuICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCB1cGRhdGVSZWNvcmQsIGluc2VydH0pIHtcbiAgY29uc3QgeyBpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zIH0gPSBzcGVha2VyO1xuICBjb25zdCB7IHNob3dTZXNzaW9ucyB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgIDxTcGVha2VyUHJvdmlkZXIgc3BlYWtlcj17c3BlYWtlcn0gdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxuICAgICAgICA8U3BlYWtlckltYWdlICAvPlxuICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyAgLz4gOiBudWxsfVxuICAgIDwvZGl2PlxuICAgICA8L1NwZWFrZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlclByb3ZpZGVyIiwiU3BlYWtlckNvbnRleHQiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsImV2ZW50WWVhciIsInNwZWFrZXIiLCJzZXNzaW9ucyIsImRpdiIsImZpbHRlciIsInNlc3Npb24iLCJtYXAiLCJpZCIsIlNwZWFrZXJJbWFnZSIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwidXBkYXRlUmVjb3JkIiwiaW5UcmFuc2l0aW9uIiwic2V0SW5UcmFuc2l0aW9uIiwiZG9uZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJnZXRNaWxsaXNlY29uZHMiLCJvbkNsaWNrIiwiZmF2b3JpdGUiLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJpbnNlcnQiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n"));

/***/ })

});