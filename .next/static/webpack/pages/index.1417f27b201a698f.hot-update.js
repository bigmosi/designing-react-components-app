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

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\nvar _s = $RefreshSig$();\n\n\nconst STATUS = {\n    LOADING: \"LOADING\"\n};\nfunction useRequestSpeakers() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async ()=>{\n        try {\n            await delay(delayTime);\n            // throw \"Had Error.\"\n            setIsLoading(false);\n            setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data);\n        } catch (e) {\n            setIsLoading(false);\n            setHasError(true);\n            setError(e);\n        }\n    }, [\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    return {\n        speakerData,\n        isLoading,\n        hasError,\n        error,\n        onFavoriteToggle\n    };\n}\n_s(useRequestSpeakers, \"5yelwVqzGwMyMlZSBu0+CbTIcmk=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestSpeakers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQ0g7QUFFekMsTUFBTUcsU0FBUztJQUNYQyxTQUFTO0FBRWI7QUFFQSxTQUFTQyxxQkFBcUM7UUFBbEJDLFlBQUFBLGlFQUFZLElBQUk7O0lBRTVDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZSxRQUFRLENBQUNDLEtBQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtJQUVuRWYsZ0RBQVNBLENBQ0wsVUFBVztRQUNWLElBQUk7WUFDRCxNQUFNYyxNQUFNVDtZQUNaLHFCQUFxQjtZQUNyQkksYUFBYSxLQUFLO1lBQ2xCRixlQUFlTiw4Q0FBSUE7UUFDdEIsRUFBRSxPQUFPa0IsR0FBRztZQUNUVixhQUFhLEtBQUs7WUFDbEJFLFlBQVksSUFBSTtZQUNoQkUsU0FBU007UUFDWjtJQUNMLEdBQUc7UUFBQ2xCLDhDQUFJQTtLQUFDO0lBRVQsTUFBTW1CLG1CQUFtQixDQUFDQyxLQUFPO1FBQzdCLE1BQU1DLHNCQUFzQmhCLFlBQVlpQixJQUFJLENBQUMsU0FBVUMsR0FBRyxFQUFFO1lBQ3hELE9BQU9BLElBQUlILEVBQUUsS0FBS0E7UUFDdEI7UUFDQSxNQUFNSSxvQkFBb0I7WUFDdEIsR0FBR0gsbUJBQW1CO1lBQ3RCSSxVQUFVLENBQUNKLG9CQUFvQkksUUFBUTtRQUMzQztRQUVBLE1BQU1DLGlCQUFpQnJCLFlBQVlzQixHQUFHLENBQUMsU0FBVUosR0FBRyxFQUFFO1lBQ2xELE9BQU9BLElBQUlILEVBQUUsS0FBS0EsS0FBS0ksb0JBQW9CRCxHQUFHO1FBQ2xEO1FBRUFqQixlQUFlb0I7SUFDbkI7SUFFQSxPQUFPO1FBQ0hyQjtRQUFhRTtRQUFXRTtRQUFVRTtRQUFPUTtJQUM3QztBQUNBO0dBMUNTaEI7QUE0Q1QsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzPzAxY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuXG5jb25zdCBTVEFUVVMgPSB7XG4gICAgTE9BRElORzogXCJMT0FESU5HXCIsXG5cbn1cblxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZSA9IDEwMDApIHtcblxuY29uc3QgW3NwZWFrZXJEYXRhLCBzZXRTcGVha2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5jb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5jb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbmNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG51c2VFZmZlY3QoXG4gICAgYXN5bmMoKSA9PiB7XG4gICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIC8vIHRocm93IFwiSGFkIEVycm9yLlwiXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFNwZWFrZXJEYXRhKGRhdGEpO1xuICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldEhhc0Vycm9yKHRydWUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgfVxufSwgW2RhdGFdKTtcblxuY29uc3Qgb25GYXZvcml0ZVRvZ2dsZSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2VyRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQ7XG4gICAgfSk7XG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XG4gICAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZVxuICAgIH07XG5cbiAgICBjb25zdCBzcGVha2VyRGF0YU5ldyA9IHNwZWFrZXJEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkID8gc3BlYWtlclJlY1VwZGF0ZWQgOiByZWM7XG4gICAgfSlcblxuICAgIHNldFNwZWFrZXJEYXRhKHNwZWFrZXJEYXRhTmV3KTtcbn1cblxucmV0dXJuIHtcbiAgICBzcGVha2VyRGF0YSwgaXNMb2FkaW5nLCBoYXNFcnJvciwgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFNwZWFrZXJzO1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiU1RBVFVTIiwiTE9BRElORyIsInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJlIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlckRhdGFOZXciLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestSpeakers.js\n"));

/***/ })

});