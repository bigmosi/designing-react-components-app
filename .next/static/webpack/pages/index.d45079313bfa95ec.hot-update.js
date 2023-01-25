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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\nvar _s = $RefreshSig$();\n\n\nconst STATUS = {\n    LOADING: \"LOADING\",\n    SUCCESS: \"SUCCESS\",\n    FAILURE: \"FAILURE\"\n};\nfunction useRequestSpeakers() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async ()=>{\n        try {\n            await delay(delayTime);\n            // throw \"Had Error.\"\n            setRequestStatus(STATUS.LOADING);\n            setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data);\n        } catch (e) {\n            setIsLoading(false);\n            setHasError(true);\n            setError(e);\n        }\n    }, [\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    return {\n        speakerData,\n        isLoading,\n        hasError,\n        error,\n        onFavoriteToggle\n    };\n}\n_s(useRequestSpeakers, \"OFtQ4CTRTDi+ZOIERwQqjRb5Waw=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestSpeakers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQ0g7QUFFekMsTUFBTUcsU0FBUztJQUNYQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNiO0FBRUEsU0FBU0MscUJBQXFDO1FBQWxCQyxZQUFBQSxpRUFBWSxJQUFJOztJQUU1QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQ0csT0FBT0MsT0FBTztJQUNqRSxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWUsUUFBUSxDQUFDQyxLQUFPLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFFbkVmLGdEQUFTQSxDQUNMLFVBQVc7UUFDVixJQUFJO1lBQ0QsTUFBTWMsTUFBTVA7WUFDWixxQkFBcUI7WUFDckJJLGlCQUFpQlQsT0FBT0MsT0FBTztZQUMvQk0sZUFBZVIsOENBQUlBO1FBQ3RCLEVBQUUsT0FBT2tCLEdBQUc7WUFDVEMsYUFBYSxLQUFLO1lBQ2xCQyxZQUFZLElBQUk7WUFDaEJSLFNBQVNNO1FBQ1o7SUFDTCxHQUFHO1FBQUNsQiw4Q0FBSUE7S0FBQztJQUVULE1BQU1xQixtQkFBbUIsQ0FBQ0MsS0FBTztRQUM3QixNQUFNQyxzQkFBc0JoQixZQUFZaUIsSUFBSSxDQUFDLFNBQVVDLEdBQUcsRUFBRTtZQUN4RCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBO1FBQ3RCO1FBQ0EsTUFBTUksb0JBQW9CO1lBQ3RCLEdBQUdILG1CQUFtQjtZQUN0QkksVUFBVSxDQUFDSixvQkFBb0JJLFFBQVE7UUFDM0M7UUFFQSxNQUFNQyxpQkFBaUJyQixZQUFZc0IsR0FBRyxDQUFDLFNBQVVKLEdBQUcsRUFBRTtZQUNsRCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBLEtBQUtJLG9CQUFvQkQsR0FBRztRQUNsRDtRQUVBakIsZUFBZW9CO0lBQ25CO0lBRUEsT0FBTztRQUNIckI7UUFBYXVCO1FBQVdDO1FBQVVwQjtRQUFPVTtJQUM3QztBQUNBO0dBekNTaEI7QUEyQ1QsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzPzAxY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuXG5jb25zdCBTVEFUVVMgPSB7XG4gICAgTE9BRElORzogXCJMT0FESU5HXCIsXG4gICAgU1VDQ0VTUzogXCJTVUNDRVNTXCIsXG4gICAgRkFJTFVSRTogXCJGQUlMVVJFXCJcbn1cblxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZSA9IDEwMDApIHtcblxuY29uc3QgW3NwZWFrZXJEYXRhLCBzZXRTcGVha2VyRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5jb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShTVEFUVVMuTE9BRElORyk7XG5jb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblxudXNlRWZmZWN0KFxuICAgIGFzeW5jKCkgPT4ge1xuICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICAvLyB0aHJvdyBcIkhhZCBFcnJvci5cIlxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFNUQVRVUy5MT0FESU5HKVxuICAgICAgICBzZXRTcGVha2VyRGF0YShkYXRhKTtcbiAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgIH1cbn0sIFtkYXRhXSk7XG5cbmNvbnN0IG9uRmF2b3JpdGVUb2dnbGUgPSAoaWQpID0+IHtcbiAgICBjb25zdCBzcGVha2Vyc1JlY1ByZXZpb3VzID0gc3BlYWtlckRhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XG4gICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xuICAgIH0pO1xuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxuICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGVcbiAgICB9O1xuXG4gICAgY29uc3Qgc3BlYWtlckRhdGFOZXcgPSBzcGVha2VyRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgIH0pXG5cbiAgICBzZXRTcGVha2VyRGF0YShzcGVha2VyRGF0YU5ldyk7XG59XG5cbnJldHVybiB7XG4gICAgc3BlYWtlckRhdGEsIGlzTG9hZGluZywgaGFzRXJyb3IsIGVycm9yLCBvbkZhdm9yaXRlVG9nZ2xlXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RTcGVha2VycztcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGF0YSIsIlNUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3RTcGVha2VycyIsImRlbGF5VGltZSIsInNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckRhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZSIsInNldElzTG9hZGluZyIsInNldEhhc0Vycm9yIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlckRhdGFOZXciLCJtYXAiLCJpc0xvYWRpbmciLCJoYXNFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useRequestSpeakers.js\n"));

/***/ })

});