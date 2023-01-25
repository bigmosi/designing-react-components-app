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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{\n        try {\n            await delay(2000);\n            throw \"Had Error.\";\n            setIsLoading(false);\n            setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n        } catch (e) {\n            setIsLoading(false);\n            setHasError(true);\n            setError(e);\n        }\n    }, [\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    if (hasError === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"Error: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 48,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this);\n    }\n    if (isLoading === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 53,\n        columnNumber: 36\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"media\",\n        rows: 15,\n        className: \"speakerslist-placeholder\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container speaker-list\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakerData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                        lineNumber: 68,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"5yelwVqzGwMyMlZSBu0+CbTIcmk=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDRztBQUNLO0FBRWpELFNBQVNLLFlBQVksS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxhQUFZLEVBQUUsR0FBaEI7O0lBRWpCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxRQUFRLENBQUNDLEtBQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtJQUVuRWIsZ0RBQVNBLENBQ0wsVUFBVztRQUNWLElBQUk7WUFDRCxNQUFNWSxNQUFNO1lBQ1osTUFBTSxhQUFZO1lBQ2xCTCxhQUFhLEtBQUs7WUFDbEJGLGVBQWVQLDhDQUFJQTtRQUN0QixFQUFFLE9BQU9tQixHQUFHO1lBQ1RWLGFBQWEsS0FBSztZQUNsQkUsWUFBWSxJQUFJO1lBQ2hCRSxTQUFTTTtRQUNaO0lBQ0wsR0FBRztRQUFDbkIsOENBQUlBO0tBQUM7SUFFVCxNQUFNb0IsbUJBQW1CLENBQUNDLEtBQU87UUFDN0IsTUFBTUMsc0JBQXNCaEIsWUFBWWlCLElBQUksQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDeEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUN0QjtRQUNBLE1BQU1JLG9CQUFvQjtZQUN0QixHQUFHSCxtQkFBbUI7WUFDdEJJLFVBQVUsQ0FBQ0osb0JBQW9CSSxRQUFRO1FBQzNDO1FBRUEsTUFBTUMsaUJBQWlCckIsWUFBWXNCLEdBQUcsQ0FBQyxTQUFVSixHQUFHLEVBQUU7WUFDbEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQSxLQUFLSSxvQkFBb0JELEdBQUc7UUFDbEQ7UUFFQWpCLGVBQWVvQjtJQUNuQjtJQUVBLElBQUlqQixhQUFhLElBQUksRUFBRTtRQUNuQixxQkFDSSw4REFBQ21CO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNqQiw4REFBQ0M7O3dCQUFFO3dCQUE2Qm5COzs7Ozs7Ozs7Ozs7O0lBR3BELENBQUM7SUFFRCxJQUFJSixjQUFjLElBQUksRUFBRSxxQkFBTyw4REFBQ3FCO2tCQUFJOzs7Ozs7SUFFcEMscUJBQ0ksOERBQUMxQix5REFBZ0JBO1FBQ2hCNkIsTUFBSztRQUNMQyxNQUFNO1FBQ05ILFdBQVU7a0JBR1AsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUVQeEIsWUFBWXNCLEdBQUcsQ0FBQyxTQUFVTSxPQUFPLEVBQUU7b0JBRS9CLHFCQUNJLDhEQUFDbkMsZ0RBQU9BO3dCQUVKbUMsU0FBU0E7d0JBQ1Q3QixjQUFjQTt3QkFDZGUsa0JBQWtCLElBQU07NEJBQ3BCQSxpQkFBaUJjLFFBQVFiLEVBQUU7d0JBQy9CO3VCQUxLYSxRQUFRYixFQUFFOzs7OztnQkFPM0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0E1RVNqQjtLQUFBQTtBQThFVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcz9mZWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2VyIGZyb20gXCIuL1NwZWFrZXJcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xuXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG5cbiAgICBjb25zdCBbc3BlYWtlckRhdGEsIHNldFNwZWFrZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG4gICAgdXNlRWZmZWN0KFxuICAgICAgICBhc3luYygpID0+IHtcbiAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgICAgICAgIHRocm93IFwiSGFkIEVycm9yLlwiXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U3BlYWtlckRhdGEoZGF0YSk7XG4gICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuXG4gICAgY29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlckRhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcbiAgICAgICAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNwZWFrZXJEYXRhTmV3ID0gc3BlYWtlckRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0U3BlYWtlckRhdGEoc3BlYWtlckRhdGFOZXcpO1xuICAgIH1cblxuICAgIGlmIChoYXNFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICBFcnJvcjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0UGxhY2Vob2xkZXIgXG4gICAgICAgICB0eXBlPVwibWVkaWFcIiBcbiAgICAgICAgIHJvd3M9ezE1fVxuICAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNsaXN0LXBsYWNlaG9sZGVyXCJcbiAgICAgICAgIFxuICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlci1saXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlckRhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0UGxhY2Vob2xkZXIiLCJTcGVha2VyTGlzdCIsInNob3dTZXNzaW9ucyIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJlIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlckRhdGFOZXciLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwidHlwZSIsInJvd3MiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});