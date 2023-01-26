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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay() {\n    let delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(REQUEST_STATUS.LOADING);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        async function delayFunc() {\n            try {\n                await delay(delayTime);\n                setRequestStatus(REQUEST_STATUS.SUCCESS);\n                setData(initialData);\n            } catch (e) {\n                setRequestStatus(REQUEST_STATUS.FAILURE);\n                setError(e);\n            }\n        }\n        delayFunc();\n    }, []);\n    function updateRecord(record, doneCallback) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecords = data.map(function(rec) {\n            return rec.id === recordUpdated.id ? recordUpdated : rec;\n        });\n        async function delayFunction() {\n            try {\n                setData(newRecords);\n                await delay(delayTime);\n                if (doneCallback) {\n                    doneCallback();\n                }\n            } catch (error) {\n                console.log(\"error thrown inside delayFunction\", error);\n                if (doneCallback) {\n                    doneCallback();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    function insertRecord(record, doneCallback) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecords = [\n            record,\n            ...data\n        ];\n        async function delayFunction() {\n            try {\n                setData(newRecords);\n                await delay(delayTime);\n                if (doneCallback) {\n                    doneCallback();\n                }\n            } catch (error) {\n                console.log(\"error thrown inside delayFunction\", error);\n                if (doneCallback) {\n                    doneCallback();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    function deleteRecord(record, doneCallback) {\n        const originalRecords = [\n            ...data\n        ];\n        const newRecords = data.filter(function(rec) {\n            return rec.id != recordid;\n        });\n        async function delayFunction() {\n            try {\n                setData(newRecords);\n                await delay(delayTime);\n                if (doneCallback) {\n                    doneCallback();\n                }\n            } catch (error) {\n                console.log(\"error thrown inside delayFunction\", error);\n                if (doneCallback) {\n                    doneCallback();\n                }\n                setData(originalRecords);\n            }\n        }\n        delayFunction();\n    }\n    return {\n        data,\n        requestStatus,\n        error,\n        updateRecord\n    };\n}\n_s(useRequestDelay, \"uvvVBilWoUeFPXc52bF5AHAvR6Y=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFFckMsTUFBTUUsaUJBQWlCO0lBQzVCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsU0FBUztBQUNYLEVBQUU7QUFFRixTQUFTQyxrQkFBb0Q7UUFBcENDLFlBQUFBLGlFQUFZLElBQUksRUFBRUMsY0FBQUEsaUVBQWMsRUFBRTs7SUFDekQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDVSxlQUFlQyxpQkFBaUIsR0FBR1gsK0NBQVFBLENBQUNDLGVBQWVDLE9BQU87SUFDekUsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1jLFFBQVEsQ0FBQ0MsS0FBTyxJQUFJQyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVNGO0lBQ25FaEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWVvQixZQUFZO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUwsTUFBTVI7Z0JBQ1pLLGlCQUFpQlYsZUFBZUUsT0FBTztnQkFDdkNNLFFBQVFGO1lBQ1YsRUFBRSxPQUFPYSxHQUFHO2dCQUNWVCxpQkFBaUJWLGVBQWVHLE9BQU87Z0JBQ3ZDUyxTQUFTTztZQUNYO1FBQ0Y7UUFDQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTRSxhQUFhQyxNQUFNLEVBQUVDLFlBQVksRUFBRTtRQUMxQyxNQUFNQyxrQkFBa0I7ZUFBSWhCO1NBQUs7UUFDakMsTUFBTWlCLGFBQWFqQixLQUFLa0IsR0FBRyxDQUFDLFNBQVVDLEdBQUcsRUFBRTtZQUN6QyxPQUFPQSxJQUFJQyxFQUFFLEtBQUtDLGNBQWNELEVBQUUsR0FBR0MsZ0JBQWdCRixHQUFHO1FBQzFEO1FBRUEsZUFBZUcsZ0JBQWdCO1lBQzdCLElBQUk7Z0JBQ0ZyQixRQUFRZ0I7Z0JBQ1IsTUFBTVgsTUFBTVI7Z0JBQ1osSUFBSWlCLGNBQWM7b0JBQ2hCQTtnQkFDRixDQUFDO1lBQ0gsRUFBRSxPQUFPWCxPQUFPO2dCQUNkbUIsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ3BCO2dCQUNqRCxJQUFJVyxjQUFjO29CQUNoQkE7Z0JBQ0YsQ0FBQztnQkFDRGQsUUFBUWU7WUFDVjtRQUNGO1FBQ0FNO0lBQ0Y7SUFFQSxTQUFTRyxhQUFhWCxNQUFNLEVBQUVDLFlBQVksRUFBRTtRQUMxQyxNQUFNQyxrQkFBa0I7ZUFBSWhCO1NBQUs7UUFDakMsTUFBTWlCLGFBQWE7WUFBQ0g7ZUFBV2Q7U0FBSztRQUVwQyxlQUFlc0IsZ0JBQWdCO1lBQzdCLElBQUk7Z0JBQ0ZyQixRQUFRZ0I7Z0JBQ1IsTUFBTVgsTUFBTVI7Z0JBQ1osSUFBSWlCLGNBQWM7b0JBQ2hCQTtnQkFDRixDQUFDO1lBQ0gsRUFBRSxPQUFPWCxPQUFPO2dCQUNkbUIsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ3BCO2dCQUNqRCxJQUFJVyxjQUFjO29CQUNoQkE7Z0JBQ0YsQ0FBQztnQkFDRGQsUUFBUWU7WUFDVjtRQUNGO1FBQ0FNO0lBQ0Y7SUFFQSxTQUFTSSxhQUFhWixNQUFNLEVBQUVDLFlBQVksRUFBRTtRQUMxQyxNQUFNQyxrQkFBa0I7ZUFBSWhCO1NBQUs7UUFDakMsTUFBTWlCLGFBQWFqQixLQUFLMkIsTUFBTSxDQUFDLFNBQVNSLEdBQUcsRUFBRTtZQUMzQyxPQUFPQSxJQUFJQyxFQUFFLElBQUlRO1FBQ25CO1FBRUEsZUFBZU4sZ0JBQWdCO1lBQzdCLElBQUk7Z0JBQ0ZyQixRQUFRZ0I7Z0JBQ1IsTUFBTVgsTUFBTVI7Z0JBQ1osSUFBSWlCLGNBQWM7b0JBQ2hCQTtnQkFDRixDQUFDO1lBQ0gsRUFBRSxPQUFPWCxPQUFPO2dCQUNkbUIsUUFBUUMsR0FBRyxDQUFDLHFDQUFxQ3BCO2dCQUNqRCxJQUFJVyxjQUFjO29CQUNoQkE7Z0JBQ0YsQ0FBQztnQkFDRGQsUUFBUWU7WUFDVjtRQUNGO1FBQ0FNO0lBQ0Y7SUFFQSxPQUFPO1FBQ0x0QjtRQUNBRTtRQUNBRTtRQUNBUztJQUNGO0FBQ0Y7R0EvRlNoQjtBQWlHVCwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzPzhlZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxuICBTVUNDRVNTOiBcInN1Y2Nlc3NcIixcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXG59O1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xuICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcbiAgICAgICAgc2V0RXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGF5RnVuYygpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSByZWNvcmRVcGRhdGVkLmlkID8gcmVjb3JkVXBkYXRlZCA6IHJlYztcbiAgICB9KTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0UmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBbcmVjb3JkLCAuLi5kYXRhXTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlUmVjb3JkKHJlY29yZCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRzID0gWy4uLmRhdGFdO1xuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbihyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgIT0gcmVjb3JkaWQ7XG4gICAgfSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xuICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xuICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGVsYXlGdW5jdGlvbigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIHJlcXVlc3RTdGF0dXMsXG4gICAgZXJyb3IsXG4gICAgdXBkYXRlUmVjb3JkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwiZGF0YSIsInNldERhdGEiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwiZSIsInVwZGF0ZVJlY29yZCIsInJlY29yZCIsImRvbmVDYWxsYmFjayIsIm9yaWdpbmFsUmVjb3JkcyIsIm5ld1JlY29yZHMiLCJtYXAiLCJyZWMiLCJpZCIsInJlY29yZFVwZGF0ZWQiLCJkZWxheUZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsImZpbHRlciIsInJlY29yZGlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});