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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                //throw \"Had Error.\"\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(initialData);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    function updateRecord(recordUpdated, doneCallback) {\n        const newRecords = data.map(function(rec) {\n            return rec.id === recordUpdated.id ? recordUpdated : rec;\n        });\n        async function delayFunction() {\n            try {\n                await delay(delayTime);\n                setData(newRecords);\n            } catch (error) {\n                console.log(\"error thrown inside delayFunction\", error);\n            }\n        }\n        delayFunction();\n    }\n    return {\n        data,\n        requestStatus,\n        error,\n        updateRecord\n    };\n}\n_s(useRequestDelay, \"uvvVBilWoUeFPXc52bF5AHAvR6Y=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsaUJBQWlCO0lBQzVCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNYLEVBQUU7QUFFRixTQUFTQyxrQkFBb0Q7UUFBcENDLFlBQUFBLGlFQUFZLElBQUksRUFBRUMsY0FBQUEsaUVBQWMsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUNFLGVBQWVDLE9BQU87SUFDekUsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1lLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBRW5FZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZW1CLFlBQVk7WUFDekIsSUFBSTtnQkFDRixNQUFNTCxNQUFNUjtnQkFDWixvQkFBb0I7Z0JBQ3BCSyxpQkFBaUJWLGVBQWVFLE9BQU87Z0JBQ3ZDTSxRQUFRRjtZQUNWLEVBQUUsT0FBT2EsR0FBRztnQkFDVlQsaUJBQWlCVixlQUFlRyxPQUFPO2dCQUN2Q1MsU0FBU087WUFDWDtRQUNGO1FBQ0FEO0lBQ0YsR0FBRyxFQUFFO0lBRUwsU0FBU0UsYUFBYUMsYUFBYSxFQUFFQyxZQUFZLEVBQUU7UUFDakQsTUFBTUMsYUFBYWhCLEtBQUtpQixHQUFHLENBQUMsU0FBVUMsR0FBRyxFQUFFO1lBQ3pDLE9BQU9BLElBQUlDLEVBQUUsS0FBS0wsY0FBY0ssRUFBRSxHQUFHTCxnQkFBZ0JJLEdBQUc7UUFDMUQ7UUFFQSxlQUFlRSxnQkFBZ0I7WUFDN0IsSUFBSTtnQkFDRixNQUFNZCxNQUFNUjtnQkFDWkcsUUFBUWU7WUFDVixFQUFFLE9BQU9aLE9BQU87Z0JBQ2RpQixRQUFRQyxHQUFHLENBQUMscUNBQXFDbEI7WUFDbkQ7UUFDRjtRQUNBZ0I7SUFDRjtJQUVBLE9BQU87UUFDTHBCO1FBQ0FFO1FBQ0FFO1FBQ0FTO0lBQ0Y7QUFDRjtHQTVDU2hCO0FBOENULCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanM/OGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxuICBGQUlMVVJFOiBcImZhaWx1cmVcIixcbn07XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICAvL3Rocm93IFwiSGFkIEVycm9yLlwiXG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIHNldERhdGEoaW5pdGlhbERhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xuICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB1cGRhdGVSZWNvcmQocmVjb3JkVXBkYXRlZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZFVwZGF0ZWQuaWQgPyByZWNvcmRVcGRhdGVkIDogcmVjO1xuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIHRocm93biBpbnNpZGUgZGVsYXlGdW5jdGlvblwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuY3Rpb24oKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICByZXF1ZXN0U3RhdHVzLFxuICAgIGVycm9yLFxuICAgIHVwZGF0ZVJlY29yZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwidXNlUmVxdWVzdERlbGF5IiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiLCJlIiwidXBkYXRlUmVjb3JkIiwicmVjb3JkVXBkYXRlZCIsImRvbmVDYWxsYmFjayIsIm5ld1JlY29yZHMiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});