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

/***/ "./src/hooks/useTheme.js":
/*!*******************************!*\
  !*** ./src/hooks/useTheme.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useTheme(param) {\n    let { startingTheme =\"light\"  } = param;\n    _s();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingTheme);\n    function validateTheme(themeValue) {\n        if (themeValue === \"dark\") {\n            setTheme(\"dark\");\n        } else {\n            setTheme(\"light\");\n        }\n    }\n    return {\n        theme,\n        setTheme: validateTheme\n    };\n}\n_s(useTheme, \"7D3nJYxe783JeXHORkFR9pg9dCU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useTheme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQUVqQyxTQUFTQyxTQUFTLEtBQXVCLEVBQUU7UUFBekIsRUFBQ0MsZUFBYyxRQUFPLEVBQUMsR0FBdkI7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDRTtJQUVuQyxTQUFTRyxjQUFjQyxVQUFVLEVBQUU7UUFDL0IsSUFBSUEsZUFBZSxRQUFRO1lBQ3ZCRixTQUFTO1FBQ2IsT0FBTztZQUNIQSxTQUFTO1FBQ2IsQ0FBQztJQUNMO0lBRUEsT0FBTztRQUNIRDtRQUNBQyxVQUFVQztJQUNkO0FBQ0o7R0FmU0o7QUFpQlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRoZW1lLmpzPzMxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gdXNlVGhlbWUoe3N0YXJ0aW5nVGhlbWU9XCJsaWdodFwifSkge1xuICAgIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoc3RhcnRpbmdUaGVtZSk7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVRoZW1lKHRoZW1lVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoZW1lVmFsdWUgPT09IFwiZGFya1wiKSB7XG4gICAgICAgICAgICBzZXRUaGVtZShcImRhcmtcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRoZW1lKFwibGlnaHRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aGVtZSxcbiAgICAgICAgc2V0VGhlbWU6IHZhbGlkYXRlVGhlbWUsXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVGhlbWU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlVGhlbWUiLCJzdGFydGluZ1RoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsInZhbGlkYXRlVGhlbWUiLCJ0aGVtZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useTheme.js\n"));

/***/ })

});