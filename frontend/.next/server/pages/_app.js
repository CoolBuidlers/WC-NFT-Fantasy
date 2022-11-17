/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygonMumbai\n], [\n    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            chains: chains,\n            modalSize: \"compact\",\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.darkTheme)({\n                accentColor: \"#262A53\",\n                accentColorForeground: \"white\",\n                borderRadius: \"small\",\n                fontStack: \"rounded\"\n            }),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {}, void 0, false, {\n                    fileName: \"/Users/user/Desktop/Chainlink-Hackathon-2022/WC-NFT-Fantasy/frontend/pages/_app.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/Chainlink-Hackathon-2022/WC-NFT-Fantasy/frontend/pages/_app.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Desktop/Chainlink-Hackathon-2022/WC-NFT-Fantasy/frontend/pages/_app.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/Chainlink-Hackathon-2022/WC-NFT-Fantasy/frontend/pages/_app.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBRWE7QUFLWDtBQU1qQjtBQUMyQjtBQUVjO0FBQ3hELE1BQU0sRUFBRVMsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR04sc0RBQWUsQ0FDMUM7SUFBQ0Qsc0RBQW1CO0NBQUMsRUFDckI7SUFDRSxzREFBc0Q7SUFDdERLLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRjtBQUVELE1BQU0sRUFBRUksVUFBVSxHQUFFLEdBQUdaLHlFQUFpQixDQUFDO0lBQ3ZDYSxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCSixNQUFNO0NBQ1AsQ0FBQztBQUVGLE1BQU1LLFdBQVcsR0FBR1QsbURBQVksQ0FBQztJQUMvQlUsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkYsUUFBUTtDQUNULENBQUM7QUFHRixTQUFTTSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ1osOENBQVc7UUFBQ2EsTUFBTSxFQUFFTCxXQUFXO2tCQUM5Qiw0RUFBQ2Isc0VBQWtCO1lBQUNRLE1BQU0sRUFBRUEsTUFBTTtZQUFFVyxTQUFTLEVBQUMsU0FBUztZQUFDQyxLQUFLLEVBQUVuQixpRUFBUyxDQUFDO2dCQUN2RW9CLFdBQVcsRUFBRSxTQUFTO2dCQUN0QkMscUJBQXFCLEVBQUUsT0FBTztnQkFDOUJDLFlBQVksRUFBRSxPQUFPO2dCQUNyQkMsU0FBUyxFQUFFLFNBQVM7YUFFckIsQ0FBQzs7OEJBQ0EsOERBQUNsQixvREFBTzs7Ozt3QkFBRzs4QkFDYiw4REFBQ1UsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7O2dCQUNQOzs7OztZQUNULENBQ2Q7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWVcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQge1xuICBjaGFpbixcbiAgY29uZmlndXJlQ2hhaW5zLFxuICBjcmVhdGVDbGllbnQsXG4gIFdhZ21pQ29uZmlnLFxufSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2FsY2hlbXknO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY2hhaW4ucG9seWdvbk11bWJhaV0sXG4gIFtcbiAgICAvL2FsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9JRCB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpXG4gIF1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnTXkgUmFpbmJvd0tpdCBBcHAnLFxuICBjaGFpbnNcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlclxufSlcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pQ29uZmlnIGNsaWVudD17d2FnbWlDbGllbnR9PlxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlciBjaGFpbnM9e2NoYWluc30gbW9kYWxTaXplPVwiY29tcGFjdFwiIHRoZW1lPXtkYXJrVGhlbWUoe1xuICAgICAgICBhY2NlbnRDb2xvcjogJyMyNjJBNTMnLFxuICAgICAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ3NtYWxsJyxcbiAgICAgICAgZm9udFN0YWNrOiAncm91bmRlZCcsXG5cbiAgICAgIH0pfT5cbiAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsIlRvYXN0ZXIiLCJwdWJsaWNQcm92aWRlciIsImNoYWlucyIsInByb3ZpZGVyIiwicG9seWdvbk11bWJhaSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwibW9kYWxTaXplIiwidGhlbWUiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsImJvcmRlclJhZGl1cyIsImZvbnRTdGFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();