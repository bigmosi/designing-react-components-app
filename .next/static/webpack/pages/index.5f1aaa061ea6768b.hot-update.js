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

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATUS\": function() { return /* binding */ STATUS; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst STATUS = {\n    LOADING: \"LOADING\",\n    SUCCESS: \"SUCCESS\",\n    FAILURE: \"FAILURE\"\n};\nfunction useRequestDelay() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialData);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async ()=>{\n        try {\n            await delay(delayTime);\n            // throw \"Had Error.\"\n            setRequestStatus(STATUS.SUCCESS);\n            setData(data);\n        } catch (e) {\n            setRequestStatus(STATUS.FAILURE);\n            setHasError(true);\n            setError(e);\n        }\n    }, [\n        data\n    ]);\n    function updateRecord(recordUpdated) {\n        const newRecord = data.map;\n    }\n    return {\n        speakerData,\n        requestStatus,\n        error,\n        onFavoriteToggle\n    };\n}\n_s(useRequestDelay, \"UH27ZboPbiWuoX8WpiA99bQccmk=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsU0FBUztJQUNsQkMsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLFNBQVM7QUFDYixFQUFDO0FBRUQsU0FBU0Msa0JBQWtEO1FBQWxDQyxZQUFBQSxpRUFBWSxJQUFJLEVBQUVDLGNBQUFBLGlFQUFZLEVBQUU7O0lBRXpELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQ1E7SUFDakMsTUFBTSxDQUFDRyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUNFLE9BQU9DLE9BQU87SUFDakUsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1lLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBRW5FZixnREFBU0EsQ0FDTCxVQUFXO1FBQ1YsSUFBSTtZQUNELE1BQU1jLE1BQU1SO1lBQ1oscUJBQXFCO1lBQ3JCSyxpQkFBaUJWLE9BQU9FLE9BQU87WUFDL0JNLFFBQVFEO1FBQ1gsRUFBRSxPQUFPVyxHQUFHO1lBQ1RSLGlCQUFpQlYsT0FBT0csT0FBTztZQUMvQmdCLFlBQVksSUFBSTtZQUNoQlAsU0FBU007UUFDWjtJQUNMLEdBQUc7UUFBQ1g7S0FBSztJQUVULFNBQVNhLGFBQWFDLGFBQWEsRUFBRTtRQUNuQyxNQUFNQyxZQUFZZixLQUFLZ0IsR0FBRztJQUM1QjtJQUVBLE9BQU87UUFDSEM7UUFBYWY7UUFBZUU7UUFBT2M7SUFDdkM7QUFDQTtHQTdCU3JCO0FBK0JULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanM/OGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTVEFUVVMgPSB7XG4gICAgTE9BRElORzogXCJMT0FESU5HXCIsXG4gICAgU1VDQ0VTUzogXCJTVUNDRVNTXCIsXG4gICAgRkFJTFVSRTogXCJGQUlMVVJFXCJcbn1cblxuZnVuY3Rpb24gdXNlUmVxdWVzdERlbGF5KGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhPVtdKSB7XG5cbmNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbmNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFNUQVRVUy5MT0FESU5HKTtcbmNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuXG51c2VFZmZlY3QoXG4gICAgYXN5bmMoKSA9PiB7XG4gICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIC8vIHRocm93IFwiSGFkIEVycm9yLlwiXG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoU1RBVFVTLkZBSUxVUkUpXG4gICAgICAgIHNldEhhc0Vycm9yKHRydWUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgfVxufSwgW2RhdGFdKTtcblxuZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQpIHtcbiAgY29uc3QgbmV3UmVjb3JkID0gZGF0YS5tYXBcbn1cblxucmV0dXJuIHtcbiAgICBzcGVha2VyRGF0YSwgcmVxdWVzdFN0YXR1cywgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJkZWxheVRpbWUiLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImUiLCJzZXRIYXNFcnJvciIsInVwZGF0ZVJlY29yZCIsInJlY29yZFVwZGF0ZWQiLCJuZXdSZWNvcmQiLCJtYXAiLCJzcGVha2VyRGF0YSIsIm9uRmF2b3JpdGVUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});