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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setIsLoading] = se;\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{\n        await delay(2000);\n        setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    }, [\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speaker-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 40,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"NMmiC6HWgHPYXnFew2iPNymcTgQ=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDUztBQUNHO0FBRTVDLFNBQVNJLFlBQVksS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxhQUFZLEVBQUUsR0FBaEI7O0lBRWpCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHQztJQUVsQyxNQUFNQyxRQUFRLENBQUNDLEtBQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtJQUVuRVQsZ0RBQVNBLENBQUMsVUFBVztRQUNqQixNQUFNUSxNQUFNO1FBQ1pKLGVBQWVOLDhDQUFJQTtJQUN2QixHQUFHO1FBQUNBLDhDQUFJQTtLQUFDO0lBRVQsTUFBTWUsbUJBQW1CLENBQUNDLEtBQU87UUFDN0IsTUFBTUMsc0JBQXNCWixZQUFZYSxJQUFJLENBQUMsU0FBVUMsR0FBRyxFQUFFO1lBQ3hELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDdEI7UUFDQSxNQUFNSSxvQkFBb0I7WUFDdEIsR0FBR0gsbUJBQW1CO1lBQ3RCSSxVQUFVLENBQUNKLG9CQUFvQkksUUFBUTtRQUMzQztRQUVBLE1BQU1DLGlCQUFpQmpCLFlBQVlrQixHQUFHLENBQUMsU0FBVUosR0FBRyxFQUFFO1lBQ2xELE9BQU9BLElBQUlILEVBQUUsS0FBS0EsS0FBS0ksb0JBQW9CRCxHQUFHO1FBQ2xEO1FBRUFiLGVBQWVnQjtJQUNuQjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUVQcEIsWUFBWWtCLEdBQUcsQ0FBQyxTQUFVRyxPQUFPLEVBQUU7Z0JBRS9CLHFCQUNJLDhEQUFDM0IsZ0RBQU9BO29CQUVKMkIsU0FBU0E7b0JBQ1R0QixjQUFjQTtvQkFDZFcsa0JBQWtCLElBQU07d0JBQ3BCQSxpQkFBaUJXLFFBQVFWLEVBQUU7b0JBQy9CO21CQUxLVSxRQUFRVixFQUFFOzs7OztZQU8zQjs7Ozs7Ozs7Ozs7QUFLcEI7R0FoRFNiO0tBQUFBO0FBa0RULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJMaXN0LmpzP2ZlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBTcGVha2VyTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XG5cbiAgICBjb25zdCBbc3BlYWtlckRhdGEsIHNldFNwZWFrZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gc2VcblxuICAgIGNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG4gICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xuICAgICAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICAgICAgc2V0U3BlYWtlckRhdGEoZGF0YSk7XG4gICAgfSwgW2RhdGFdKTtcblxuICAgIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGUgPSAoaWQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgICAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzcGVha2VyRGF0YU5ldyA9IHNwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgICAgICB9KVxuXG4gICAgICAgIHNldFNwZWFrZXJEYXRhKHNwZWFrZXJEYXRhTmV3KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcGVha2VyRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlKHNwZWFrZXIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNwZWFrZXJMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlckRhdGEiLCJzZXRTcGVha2VyRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNlIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJEYXRhTmV3IiwibWFwIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});