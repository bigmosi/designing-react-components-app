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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{\n        try {\n            await delay(2000);\n            throw \"Had Error.\";\n            setIsLoading(false);\n            setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n        } catch (e) {\n            setIsLoading(false);\n            setHasError(true);\n            setError(e);\n        }\n    }, [\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    if (hasError === true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"Error: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 48,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this);\n    }\n    if (isLoading === true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 53,\n        columnNumber: 36\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container speaker-list\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakerData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: ()=>{\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                        lineNumber: 63,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"5yelwVqzGwMyMlZSBu0+CbTIcmk=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDRztBQUNLO0FBRWpELFNBQVNLLFlBQVksS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxhQUFZLEVBQUUsR0FBaEI7O0lBRWpCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxRQUFRLENBQUNDLEtBQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtJQUVuRWIsZ0RBQVNBLENBQ0wsVUFBVztRQUNWLElBQUk7WUFDRCxNQUFNWSxNQUFNO1lBQ1osTUFBTSxhQUFZO1lBQ2xCTCxhQUFhLEtBQUs7WUFDbEJGLGVBQWVQLDhDQUFJQTtRQUN0QixFQUFFLE9BQU9tQixHQUFHO1lBQ1RWLGFBQWEsS0FBSztZQUNsQkUsWUFBWSxJQUFJO1lBQ2hCRSxTQUFTTTtRQUNaO0lBQ0wsR0FBRztRQUFDbkIsOENBQUlBO0tBQUM7SUFFVCxNQUFNb0IsbUJBQW1CLENBQUNDLEtBQU87UUFDN0IsTUFBTUMsc0JBQXNCaEIsWUFBWWlCLElBQUksQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDeEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQTtRQUN0QjtRQUNBLE1BQU1JLG9CQUFvQjtZQUN0QixHQUFHSCxtQkFBbUI7WUFDdEJJLFVBQVUsQ0FBQ0osb0JBQW9CSSxRQUFRO1FBQzNDO1FBRUEsTUFBTUMsaUJBQWlCckIsWUFBWXNCLEdBQUcsQ0FBQyxTQUFVSixHQUFHLEVBQUU7WUFDbEQsT0FBT0EsSUFBSUgsRUFBRSxLQUFLQSxLQUFLSSxvQkFBb0JELEdBQUc7UUFDbEQ7UUFFQWpCLGVBQWVvQjtJQUNuQjtJQUVBLElBQUlqQixhQUFhLElBQUksRUFBRTtRQUNuQixxQkFDSSw4REFBQ21CO1lBQUlDLFdBQVU7O2dCQUFjOzhCQUNqQiw4REFBQ0M7O3dCQUFFO3dCQUE2Qm5COzs7Ozs7Ozs7Ozs7O0lBR3BELENBQUM7SUFFRCxJQUFJSixjQUFjLElBQUksRUFBRSxxQkFBTyw4REFBQ3FCO2tCQUFJOzs7Ozs7SUFFcEMscUJBQ0ksOERBQUMxQix5REFBZ0JBO1FBQUM2QixNQUFLO2tCQUNuQiw0RUFBQ0g7WUFBSUMsV0FBVTtzQkFDZiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRVB4QixZQUFZc0IsR0FBRyxDQUFDLFNBQVVLLE9BQU8sRUFBRTtvQkFFL0IscUJBQ0ksOERBQUNsQyxnREFBT0E7d0JBRUprQyxTQUFTQTt3QkFDVDVCLGNBQWNBO3dCQUNkZSxrQkFBa0IsSUFBTTs0QkFDcEJBLGlCQUFpQmEsUUFBUVosRUFBRTt3QkFDL0I7dUJBTEtZLFFBQVFaLEVBQUU7Ozs7O2dCQU8zQjs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQXZFU2pCO0tBQUFBO0FBeUVULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJMaXN0LmpzP2ZlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0UGxhY2Vob2xkZXIgZnJvbSBcInJlYWN0LXBsYWNlaG9sZGVyXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXJMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcblxuICAgIGNvbnN0IFtzcGVha2VyRGF0YSwgc2V0U3BlYWtlckRhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbiAgICB1c2VFZmZlY3QoXG4gICAgICAgIGFzeW5jKCkgPT4ge1xuICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgICAgICAgICAgdGhyb3cgXCJIYWQgRXJyb3IuXCJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRTcGVha2VyRGF0YShkYXRhKTtcbiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgICAgfVxuICAgIH0sIFtkYXRhXSk7XG5cbiAgICBjb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XG4gICAgICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxuICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3BlYWtlckRhdGFOZXcgPSBzcGVha2VyRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRTcGVha2VyRGF0YShzcGVha2VyRGF0YU5ldyk7XG4gICAgfVxuXG4gICAgaWYgKGhhc0Vycm9yID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgIEVycm9yOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3RQbGFjZWhvbGRlciB0eXBlPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcGVha2VyRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdFBsYWNlaG9sZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3RQbGFjZWhvbGRlciIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlckRhdGEiLCJzZXRTcGVha2VyRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2VyRGF0YU5ldyIsIm1hcCIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJ0eXBlIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});