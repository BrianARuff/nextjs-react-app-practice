module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/brian/Code/single-store-classes-next-app/src/pages/index.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst Form = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(props => {\n  const {\n    0: apiData,\n    1: setApiData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  });\n\n  const handleSubmit = e => {\n    e.preventDefautl();\n  };\n\n  const handleSetFormData = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n  }, [formData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      style: {\n        display: \"flex\",\n        flexFlow: \"column nowrap\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: handleSetFormData,\n        type: \"text\",\n        name: \"username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: handleSetFormData,\n        type: \"text\",\n        name: \"password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), props.data.map(data => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          style: {\n            color: \"red\",\n            fontSize: \"24px\"\n          },\n          children: data.completed\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: data.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }, undefined)]\n      }, data.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, undefined);\n    })]\n  }, void 0, true);\n});\nconst getStaticProps = () => {\n  return fetch(\"https://jsonplaceholder.typicode.com/todos\").then(res => res.json()).then(res => {\n    return {\n      props: {\n        data: res\n      }\n    };\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiRm9ybSIsIm1lbW8iLCJwcm9wcyIsImFwaURhdGEiLCJzZXRBcGlEYXRhIiwidXNlU3RhdGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXV0bCIsImhhbmRsZVNldEZvcm1EYXRhIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXNwbGF5IiwiZmxleEZsb3ciLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJkYXRhIiwibWFwIiwiY29sb3IiLCJmb250U2l6ZSIsImNvbXBsZXRlZCIsInRpdGxlIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsTUFBTUEsSUFBYyxnQkFBR0Msa0RBQUksQ0FBRUMsS0FBRCxJQUFXO0FBQ3JDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDO0FBQUVHLFlBQVEsRUFBRSxFQUFaO0FBQWdCQyxZQUFRLEVBQUU7QUFBMUIsR0FBRCxDQUF4Qzs7QUFFQSxRQUFNQyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxpQkFBaUIsR0FBR0MseURBQVcsQ0FDbENILENBQUQsSUFBTztBQUNMSixlQUFXLGlDQUNORCxRQURNO0FBRVQsT0FBQ0ssQ0FBQyxDQUFDSSxNQUFGLENBQVNDLElBQVYsR0FBaUJMLENBQUMsQ0FBQ0ksTUFBRixDQUFTRTtBQUZqQixPQUFYO0FBSUQsR0FOa0MsRUFPbkMsQ0FBQ1gsUUFBRCxDQVBtQyxDQUFyQztBQVVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxjQUFRLEVBQUVJLFlBRFo7QUFFRSxXQUFLLEVBQUU7QUFDTFEsZUFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQVEsRUFBRSxlQUZMO0FBR0xDLHNCQUFjLEVBQUUsUUFIWDtBQUlMQyxrQkFBVSxFQUFFLFFBSlA7QUFLTEMsY0FBTSxFQUFFO0FBTEgsT0FGVDtBQUFBLDhCQVVFO0FBQU8sZ0JBQVEsRUFBRVQsaUJBQWpCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQU8sZ0JBQVEsRUFBRUEsaUJBQWpCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQVlFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBZUdYLEtBQUssQ0FBQ3FCLElBQU4sQ0FBV0MsR0FBWCxDQUFnQkQsSUFBRCxJQUFVO0FBQ3hCLDBCQUNFO0FBQUEsZ0NBQ0U7QUFBSSxlQUFLLEVBQUU7QUFBRUUsaUJBQUssRUFBRSxLQUFUO0FBQWdCQyxvQkFBUSxFQUFFO0FBQTFCLFdBQVg7QUFBQSxvQkFBZ0RILElBQUksQ0FBQ0k7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsb0JBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUEsU0FBU0wsSUFBSSxDQUFDTSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFNRCxLQVBBLENBZkg7QUFBQSxrQkFERjtBQTBCRCxDQTVDMEIsQ0FBM0I7QUFvRE8sTUFBTUMsY0FBOEIsR0FBRyxNQUFNO0FBQ2xELFNBQU9DLEtBQUssQ0FBQyw0Q0FBRCxDQUFMLENBQ0pDLElBREksQ0FDRUMsR0FBRCxJQUFTQSxHQUFHLENBQUNDLElBQUosRUFEVixFQUVKRixJQUZJLENBRUVDLEdBQUQsSUFBUztBQUNiLFdBQU87QUFDTC9CLFdBQUssRUFBRTtBQUFFcUIsWUFBSSxFQUFFVTtBQUFSO0FBREYsS0FBUDtBQUdELEdBTkksQ0FBUDtBQU9ELENBUk07QUFVUWpDLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R2V0U3RhdGljUHJvcHN9IGZyb20gXCJuZXh0XCJcblxuY29uc3QgRm9ybTogUmVhY3QuRkMgPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCBbYXBpRGF0YSwgc2V0QXBpRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoeyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdXRsKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2V0Rm9ybURhdGEgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2Zvcm1EYXRhXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleEZsb3c6IFwiY29sdW1uIG5vd3JhcFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlU2V0Rm9ybURhdGF9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVTZXRGb3JtRGF0YX0gdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx1bCBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBmb250U2l6ZTogXCIyNHB4XCIgfX0+e2RhdGEuY29tcGxldGVkfTwvbGk+XG4gICAgICAgICAgICA8bGk+e2RhdGEudGl0bGV9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59KTtcblxudHlwZSBHZXRTdGF0aWNQcm9wc1R5cGVJbnRlcmZhY2UgPSB7XG4gIHByb3BzOiB7XG4gICAgZGF0YToge31bXVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvc1wiKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgZGF0YTogcmVzIH0sXG4gICAgICB9O1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });