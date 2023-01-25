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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SpeakerList(param) {\n    let { showSessions  } = param;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speaker-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakerData.map(function(speaker) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: ()=>{\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n                    lineNumber: 36,\n                    columnNumber: 24\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/amos/Desktop/Onen/designing-react/src/components/SpeakerList.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(SpeakerList, \"o4ZCCMk1OWCmNZjBuvb0paEj6vs=\");\n_c = SpeakerList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerList);\nvar _c;\n$RefreshReg$(_c, \"SpeakerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDTztBQUNLO0FBRTVDLFNBQVNJLFlBQVksS0FBYyxFQUFFO1FBQWhCLEVBQUNDLGFBQVksRUFBQyxHQUFkOztJQUVqQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7UUFBQ0QsOENBQUlBO0tBQUM7SUFFckQsTUFBTU8sbUJBQW1CLENBQUNDLEtBQU87UUFDN0IsTUFBTUMsc0JBQXVCSixZQUFZSyxJQUFJLENBQUMsU0FBU0MsR0FBRyxFQUFFO1lBQ3hELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDdEI7UUFDQSxNQUFNSSxvQkFBb0I7WUFDdEIsR0FBR0gsbUJBQW1CO1lBQ3RCSSxVQUFVLENBQUNKLG9CQUFvQkksUUFBUTtRQUMzQztRQUVBLE1BQU1DLGlCQUFpQlQsWUFBWVUsR0FBRyxDQUFDLFNBQVNKLEdBQUcsRUFBRTtZQUNqRCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBLEtBQUtJLG9CQUFvQkQsR0FBRztRQUNsRDtRQUVBTCxlQUFlUTtJQUNuQjtJQUVBWixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pJLGVBQWVOLDhDQUFJQTtJQUN2QjtJQUVBLHFCQUNJLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDZiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFFVFosWUFBWVUsR0FBRyxDQUFDLFNBQVNHLE9BQU8sRUFBRTtnQkFFOUIscUJBQ0ssOERBQUNuQixnREFBT0E7b0JBRVJtQixTQUFTQTtvQkFDVGQsY0FBY0E7b0JBQ2RHLGtCQUFrQixJQUFNO3dCQUN2QkEsaUJBQWlCVyxRQUFRVixFQUFFO29CQUM1QjttQkFMS1UsUUFBUVYsRUFBRTs7Ozs7WUFPeEI7Ozs7Ozs7Ozs7O0FBS2Q7R0E1Q1NMO0tBQUFBO0FBOENULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJMaXN0LmpzP2ZlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHtkYXRhfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3BlYWtlckxpc3Qoe3Nob3dTZXNzaW9uc30pIHtcblxuICAgIGNvbnN0IFtzcGVha2VyRGF0YSwgc2V0U3BlYWtlckRhdGFdID0gdXNlU3RhdGUoW2RhdGFdKVxuXG4gICAgY29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzICA9IHNwZWFrZXJEYXRhLmZpbmQoZnVuY3Rpb24ocmVjKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcbiAgICAgICAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHNwZWFrZXJEYXRhTmV3ID0gc3BlYWtlckRhdGEubWFwKGZ1bmN0aW9uKHJlYykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcbiAgICAgICAgfSlcblxuICAgICAgICBzZXRTcGVha2VyRGF0YShzcGVha2VyRGF0YU5ldyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U3BlYWtlckRhdGEoZGF0YSlcbiAgICB9KVxuICAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2VyLWxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNwZWFrZXJEYXRhLm1hcChmdW5jdGlvbihzcGVha2VyKSB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIgXG4gICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc30gXG4gICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJMaXN0OyJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3BlYWtlckxpc3QiLCJzaG93U2Vzc2lvbnMiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlckRhdGFOZXciLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGVha2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakerList.js\n"));

/***/ })

});