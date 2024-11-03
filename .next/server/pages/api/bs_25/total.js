"use strict";
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
exports.id = "pages/api/bs_25/total";
exports.ids = ["pages/api/bs_25/total"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "(api)/./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://pgjctrahhiufgilszlrx.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnamN0cmFoaGl1ZmdpbHN6bHJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1OTI2MzgsImV4cCI6MjA0NjE2ODYzOH0.ht3wYB6DbaqIO00PeXxnamDa-S2dJPatu268TgWan2c\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3VwYWJhc2VDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUUxRCxNQUFNSyxXQUFXUCxtRUFBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXNpbWFzamlkLy4vbGliL3N1cGFiYXNlQ2xpZW50LmpzPzVmMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcclxuXHJcbmNvbnN0IHN1cGFiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xyXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/supabaseClient.js\n");

/***/ }),

/***/ "(api)/./pages/api/bs_25/total.js":
/*!**********************************!*\
  !*** ./pages/api/bs_25/total.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/supabaseClient */ \"(api)/./lib/supabaseClient.js\");\n\nconst handler = async (_, res)=>{\n    try {\n        // Mendapatkan semua data dari tabel keuangankas\n        const { data: results , error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_0__.supabase.from(\"bs_25\").select(\"*\").order(\"id\", {\n            ascending: true\n        });\n        if (error) {\n            throw new Error(error.message);\n        }\n        let dataIn = [];\n        let dataOut = [];\n        let totalIn = 0;\n        let totalOut = 0;\n        // Memisahkan transaksi 'IN' dan 'OUT' dan menghitung total Quantity\n        results.forEach((list)=>{\n            if (list.Transaksi === \"IN\") {\n                dataIn.push(list);\n                totalIn += list.Quantity;\n            } else {\n                dataOut.push(list);\n                totalOut += list.Quantity;\n            }\n        });\n        // Menyusun respons\n        let response = {\n            in: dataIn,\n            out: dataOut,\n            totalIN: totalIn,\n            totalOut: totalOut,\n            data: results\n        };\n        return res.json(response);\n    } catch (e) {\n        res.status(500).json({\n            message: e.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnNfMjUvdG90YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUQ7QUFFdkQsTUFBTUMsVUFBVSxPQUFPQyxHQUFHQyxNQUFRO0lBQzlCLElBQUk7UUFDQSxnREFBZ0Q7UUFDaEQsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1OLDhEQUM5QixDQUFDLFNBQ0xRLE1BQU0sQ0FBQyxLQUNQQyxLQUFLLENBQUMsTUFBTTtZQUFFQyxXQUFXLElBQUk7UUFBQztRQUVuQyxJQUFJSixPQUFPO1lBQ1AsTUFBTSxJQUFJSyxNQUFNTCxNQUFNTSxPQUFPLEVBQUU7UUFDbkMsQ0FBQztRQUVELElBQUlDLFNBQVMsRUFBRTtRQUNmLElBQUlDLFVBQVUsRUFBRTtRQUNoQixJQUFJQyxVQUFVO1FBQ2QsSUFBSUMsV0FBVztRQUVmLG9FQUFvRTtRQUNwRVgsUUFBUVksT0FBTyxDQUFDLENBQUNDLE9BQVM7WUFDdEIsSUFBSUEsS0FBS0MsU0FBUyxLQUFLLE1BQU07Z0JBQ3pCTixPQUFPTyxJQUFJLENBQUNGO2dCQUNaSCxXQUFXRyxLQUFLRyxRQUFRO1lBQzVCLE9BQU87Z0JBQ0hQLFFBQVFNLElBQUksQ0FBQ0Y7Z0JBQ2JGLFlBQVlFLEtBQUtHLFFBQVE7WUFDN0IsQ0FBQztRQUNMO1FBRUEsbUJBQW1CO1FBQ25CLElBQUlDLFdBQVc7WUFDWEMsSUFBSVY7WUFDSlcsS0FBS1Y7WUFDTFcsU0FBU1Y7WUFDVEMsVUFBVUE7WUFDVlosTUFBTUM7UUFDVjtRQUVBLE9BQU9GLElBQUl1QixJQUFJLENBQUNKO0lBRXBCLEVBQUUsT0FBT0ssR0FBRztRQUNSeEIsSUFBSXlCLE1BQU0sQ0FBQyxLQUFLRixJQUFJLENBQUM7WUFBRWQsU0FBU2UsRUFBRWYsT0FBTztRQUFDO0lBQzlDO0FBQ0o7QUFFQSxpRUFBZVgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm9ybWFzaW1hc2ppZC8uL3BhZ2VzL2FwaS9ic18yNS90b3RhbC5qcz80ZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9zdXBhYmFzZUNsaWVudFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChfLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTWVuZGFwYXRrYW4gc2VtdWEgZGF0YSBkYXJpIHRhYmVsIGtldWFuZ2Fua2FzXHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiByZXN1bHRzLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAgICAgLmZyb20oJ2JzXzI1JylcclxuICAgICAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgICAgIC5vcmRlcignaWQnLCB7IGFzY2VuZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRhSW4gPSBbXTtcclxuICAgICAgICBsZXQgZGF0YU91dCA9IFtdO1xyXG4gICAgICAgIGxldCB0b3RhbEluID0gMDtcclxuICAgICAgICBsZXQgdG90YWxPdXQgPSAwO1xyXG5cclxuICAgICAgICAvLyBNZW1pc2Foa2FuIHRyYW5zYWtzaSAnSU4nIGRhbiAnT1VUJyBkYW4gbWVuZ2hpdHVuZyB0b3RhbCBRdWFudGl0eVxyXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGlzdC5UcmFuc2Frc2kgPT09ICdJTicpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFJbi5wdXNoKGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxJbiArPSBsaXN0LlF1YW50aXR5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF0YU91dC5wdXNoKGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgdG90YWxPdXQgKz0gbGlzdC5RdWFudGl0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBNZW55dXN1biByZXNwb25zXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICBpbjogZGF0YUluLFxyXG4gICAgICAgICAgICBvdXQ6IGRhdGFPdXQsXHJcbiAgICAgICAgICAgIHRvdGFsSU46IHRvdGFsSW4sXHJcbiAgICAgICAgICAgIHRvdGFsT3V0OiB0b3RhbE91dCxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0c1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihyZXNwb25zZSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbInN1cGFiYXNlIiwiaGFuZGxlciIsIl8iLCJyZXMiLCJkYXRhIiwicmVzdWx0cyIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YUluIiwiZGF0YU91dCIsInRvdGFsSW4iLCJ0b3RhbE91dCIsImZvckVhY2giLCJsaXN0IiwiVHJhbnNha3NpIiwicHVzaCIsIlF1YW50aXR5IiwicmVzcG9uc2UiLCJpbiIsIm91dCIsInRvdGFsSU4iLCJqc29uIiwiZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/bs_25/total.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/bs_25/total.js"));
module.exports = __webpack_exports__;

})();