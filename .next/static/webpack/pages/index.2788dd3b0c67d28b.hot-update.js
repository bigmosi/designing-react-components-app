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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\nvar _s = $RefreshSig$();\n\n\nconst STATUS = {};\nfunction useRequestSpeakers() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n    _s();\n    const [speakerData, setSpeakerData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async ()=>{\n        try {\n            await delay(delayTime);\n            // throw \"Had Error.\"\n            setIsLoading(false);\n            setSpeakerData(_SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data);\n        } catch (e) {\n            setIsLoading(false);\n            setHasError(true);\n            setError(e);\n        }\n    }, [\n        _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data\n    ]);\n    const onFavoriteToggle = (id)=>{\n        const speakersRecPrevious = speakerData.find(function(rec) {\n            return rec.id === id;\n        });\n        const speakerRecUpdated = {\n            ...speakersRecPrevious,\n            favorite: !speakersRecPrevious.favorite\n        };\n        const speakerDataNew = speakerData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakerData(speakerDataNew);\n    };\n    return {\n        speakerData,\n        isLoading,\n        hasError,\n        error,\n        onFavoriteToggle\n    };\n}\n_s(useRequestSpeakers, \"5yelwVqzGwMyMlZSBu0+CbTIcmk=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestSpeakers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdFNwZWFrZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDO0FBQ0g7QUFFekMsTUFBTUcsU0FBUyxDQUVmO0FBRUEsU0FBU0MscUJBQXFDO1FBQWxCQyxZQUFBQSxpRUFBWSxJQUFJOztJQUU1QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUMvQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWMsUUFBUSxDQUFDQyxLQUFPLElBQUlDLFFBQVEsQ0FBQ0MsVUFBWUMsV0FBV0QsU0FBU0Y7SUFFbkVkLGdEQUFTQSxDQUNMLFVBQVc7UUFDVixJQUFJO1lBQ0QsTUFBTWEsTUFBTVQ7WUFDWixxQkFBcUI7WUFDckJJLGFBQWEsS0FBSztZQUNsQkYsZUFBZUwsOENBQUlBO1FBQ3RCLEVBQUUsT0FBT2lCLEdBQUc7WUFDVFYsYUFBYSxLQUFLO1lBQ2xCRSxZQUFZLElBQUk7WUFDaEJFLFNBQVNNO1FBQ1o7SUFDTCxHQUFHO1FBQUNqQiw4Q0FBSUE7S0FBQztJQUVULE1BQU1rQixtQkFBbUIsQ0FBQ0MsS0FBTztRQUM3QixNQUFNQyxzQkFBc0JoQixZQUFZaUIsSUFBSSxDQUFDLFNBQVVDLEdBQUcsRUFBRTtZQUN4RCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBO1FBQ3RCO1FBQ0EsTUFBTUksb0JBQW9CO1lBQ3RCLEdBQUdILG1CQUFtQjtZQUN0QkksVUFBVSxDQUFDSixvQkFBb0JJLFFBQVE7UUFDM0M7UUFFQSxNQUFNQyxpQkFBaUJyQixZQUFZc0IsR0FBRyxDQUFDLFNBQVVKLEdBQUcsRUFBRTtZQUNsRCxPQUFPQSxJQUFJSCxFQUFFLEtBQUtBLEtBQUtJLG9CQUFvQkQsR0FBRztRQUNsRDtRQUVBakIsZUFBZW9CO0lBQ25CO0lBRUEsT0FBTztRQUNIckI7UUFBYUU7UUFBV0U7UUFBVUU7UUFBT1E7SUFDN0M7QUFDQTtHQTFDU2hCO0FBNENULCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycy5qcz8wMWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcblxuY29uc3QgU1RBVFVTID0ge1xuICAgIFxufVxuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0U3BlYWtlcnMoZGVsYXlUaW1lID0gMTAwMCkge1xuXG5jb25zdCBbc3BlYWtlckRhdGEsIHNldFNwZWFrZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbmNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbmNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbnVzZUVmZmVjdChcbiAgICBhc3luYygpID0+IHtcbiAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcbiAgICAgICAgLy8gdGhyb3cgXCJIYWQgRXJyb3IuXCJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0U3BlYWtlckRhdGEoZGF0YSk7XG4gICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XG4gICAgICAgIHNldEVycm9yKGUpO1xuICAgICB9XG59LCBbZGF0YV0pO1xuXG5jb25zdCBvbkZhdm9yaXRlVG9nZ2xlID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJEYXRhLmZpbmQoZnVuY3Rpb24gKHJlYykge1xuICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZDtcbiAgICB9KTtcbiAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcbiAgICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcbiAgICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlXG4gICAgfTtcblxuICAgIGNvbnN0IHNwZWFrZXJEYXRhTmV3ID0gc3BlYWtlckRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcbiAgICB9KVxuXG4gICAgc2V0U3BlYWtlckRhdGEoc3BlYWtlckRhdGFOZXcpO1xufVxuXG5yZXR1cm4ge1xuICAgIHNwZWFrZXJEYXRhLCBpc0xvYWRpbmcsIGhhc0Vycm9yLCBlcnJvciwgb25GYXZvcml0ZVRvZ2dsZVxufVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0U3BlYWtlcnM7XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGEiLCJTVEFUVVMiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJkZWxheVRpbWUiLCJzcGVha2VyRGF0YSIsInNldFNwZWFrZXJEYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZSIsIm9uRmF2b3JpdGVUb2dnbGUiLCJpZCIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJmYXZvcml0ZSIsInNwZWFrZXJEYXRhTmV3IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRequestSpeakers.js\n"));

/***/ })

});