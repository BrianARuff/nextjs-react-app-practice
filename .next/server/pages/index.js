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

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/brian/Code/single-store-classes-next-app/src/components/Form.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst Form = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"memo\"])(props => {\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  });\n\n  const handleSubmit = e => {\n    e.preventDefault();\n  };\n\n  const handleSetFormData = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(e => {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [e.target.name]: e.target.value\n    }));\n  }, [formData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: handleSetFormData,\n        type: \"text\",\n        name: \"username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: handleSetFormData,\n        type: \"text\",\n        name: \"password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onSubmit: handleSubmit,\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [formData.username, \"...\", formData.password]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeD85ZWRlIl0sIm5hbWVzIjpbIkZvcm0iLCJtZW1vIiwicHJvcHMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU2V0Rm9ybURhdGEiLCJ1c2VDYWxsYmFjayIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFBLE1BQU1BLElBQzZCLGdCQUFHQyxrREFBSSxDQUFFQyxLQUFELElBQVc7QUFDcEQsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQUVDLFlBQVEsRUFBRSxFQUFaO0FBQWdCQyxZQUFRLEVBQUU7QUFBMUIsR0FBRCxDQUF4Qzs7QUFFQSxRQUFNQyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxpQkFBaUIsR0FBR0MseURBQVcsQ0FDbENILENBQUQsSUFBTztBQUNMTCxlQUFXLGlDQUNORCxRQURNO0FBRVQsT0FBQ00sQ0FBQyxDQUFDSSxNQUFGLENBQVNDLElBQVYsR0FBaUJMLENBQUMsQ0FBQ0ksTUFBRixDQUFTRTtBQUZqQixPQUFYO0FBSUQsR0FOa0MsRUFPbkMsQ0FBQ1osUUFBRCxDQVBtQyxDQUFyQztBQVVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTSxjQUFRLEVBQUVLLFlBQWhCO0FBQUEsOEJBQ0U7QUFBTyxnQkFBUSxFQUFFRyxpQkFBakI7QUFBb0MsWUFBSSxFQUFDLE1BQXpDO0FBQWdELFlBQUksRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTyxnQkFBUSxFQUFFQSxpQkFBakI7QUFBb0MsWUFBSSxFQUFDLE1BQXpDO0FBQWdELFlBQUksRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBUSxnQkFBUSxFQUFFSCxZQUFsQjtBQUFnQyxZQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBQSw2QkFDRTtBQUFBLG1CQUNHTCxRQUFRLENBQUNHLFFBRFosU0FDeUJILFFBQVEsQ0FBQ0ksUUFEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBLGtCQURGO0FBZ0JELENBakN5QyxDQUQxQztBQW9DZVAsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7fVtdO1xuICB9O1xufTtcblxuY29uc3QgRm9ybTogUmVhY3QuTmFtZWRFeG90aWNDb21wb25lbnQ8fCBSZWFjdC5SZWZBdHRyaWJ1dGVzPFJlYWN0LkNvbXBvbmVudDxQcm9wcywgYW55LCBhbnk+PlxuICB8IHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfT4gPSBtZW1vKChwcm9wcykgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNldEZvcm1EYXRhID0gdXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIHNldEZvcm1EYXRhKHtcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW2Zvcm1EYXRhXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZVNldEZvcm1EYXRhfSB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlU2V0Rm9ybURhdGF9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtmb3JtRGF0YS51c2VybmFtZX0uLi57Zm9ybURhdGEucGFzc3dvcmR9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n");

/***/ }),

/***/ "./src/motion/variants.ts":
/*!********************************!*\
  !*** ./src/motion/variants.ts ***!
  \********************************/
/*! exports provided: variants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"variants\", function() { return variants; });\nconst variants = {\n  active: {\n    opacity: 1,\n    x: [\"100vw\", \"0vw\"],\n    transition: {\n      duration: 0.5,\n      type: \"spring\"\n    }\n  },\n  inactive: {\n    opacity: 0,\n    x: \"-100vw\",\n    transition: {\n      duration: 0.5\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW90aW9uL3ZhcmlhbnRzLnRzPzlmMTkiXSwibmFtZXMiOlsidmFyaWFudHMiLCJhY3RpdmUiLCJvcGFjaXR5IiwieCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJpbmFjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBYUE7QUFBQTtBQUFPLE1BQU1BLFFBQVEsR0FBRztBQUN0QkMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRSxDQURIO0FBRU5DLEtBQUMsRUFBRSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBRkc7QUFHTkMsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxHQURBO0FBRVZDLFVBQUksRUFBRTtBQUZJO0FBSE4sR0FEYztBQVN0QkMsVUFBUSxFQUFFO0FBQ1JMLFdBQU8sRUFBRSxDQUREO0FBRVJDLEtBQUMsRUFBRSxRQUZLO0FBR1JDLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUU7QUFEQTtBQUhKO0FBVFksQ0FBakIiLCJmaWxlIjoiLi9zcmMvbW90aW9uL3ZhcmlhbnRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIHZhcmlhbnRzSW50ZXJmYWNlIHtcbiAgYWN0aXZlOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwge31cbiAgfVxuICBpbmFjdGl2ZToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IHtcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwge31cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhcmlhbnRzID0ge1xuICBhY3RpdmU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHg6IFtcIjEwMHZ3XCIsIFwiMHZ3XCJdLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICB0eXBlOiBcInNwcmluZ1wiXG4gICAgfVxuICB9LFxuICBpbmFjdGl2ZToge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgeDogXCItMTAwdndcIixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC41XG4gICAgfVxuICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/motion/variants.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _motion_variants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../motion/variants */ \"./src/motion/variants.ts\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Form */ \"./src/components/Form.tsx\");\n\n\nvar _jsxFileName = \"/home/brian/Code/single-store-classes-next-app/src/pages/index.tsx\";\n\n\n\n\n\n\n\nconst Index = props => {\n  const [isVisible, setIsVisible] = react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"](true);\n\n  const handleSetIsVisible = () => {\n    setIsVisible(!isVisible);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Next-JS Applicaiton\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: handleSetIsVisible,\n      children: \"Hide Data\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      animate: isVisible ? \"active\" : \"inactive\",\n      variants: _motion_variants__WEBPACK_IMPORTED_MODULE_5__[\"variants\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n        container: true,\n        children: props.data.map(data => {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], {\n            item: true,\n            xs: 12,\n            sm: 6,\n            md: 4,\n            lg: 3,\n            xl: 2,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, undefined)\n          }, data.id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, undefined);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nconst getStaticProps = () => {\n  return fetch(\"https://jsonplaceholder.typicode.com/todos\").then(res => res.json()).then(res => {\n    return {\n      props: {\n        data: res\n      }\n    };\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsIlJlYWN0IiwiaGFuZGxlU2V0SXNWaXNpYmxlIiwidmFyaWFudHMiLCJkYXRhIiwibWFwIiwidGl0bGUiLCJpZCIsImdldFN0YXRpY1Byb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFFdkIsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJDLDhDQUFBLENBQWUsSUFBZixDQUFsQzs7QUFFQSxRQUFNQyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CRixnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFDTSxZQUFJLEVBQUM7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBR0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUNNLFlBQUksRUFBQztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBU0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQVVFO0FBQVEsYUFBTyxFQUFFRyxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFXRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFPLEVBQUVILFNBQVMsR0FBRyxRQUFILEdBQWMsVUFBNUM7QUFDWSxjQUFRLEVBQUVJLHlEQUR0QjtBQUFBLDZCQUVFLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBLGtCQUNHTCxLQUFLLENBQUNNLElBQU4sQ0FBV0MsR0FBWCxDQUFnQkQsSUFBRCxJQUFVO0FBQ3hCLDhCQUNFLHFFQUFDLHNEQUFEO0FBQW9CLGdCQUFJLE1BQXhCO0FBQXlCLGNBQUUsRUFBRSxFQUE3QjtBQUFpQyxjQUFFLEVBQUUsQ0FBckM7QUFBd0MsY0FBRSxFQUFFLENBQTVDO0FBQStDLGNBQUUsRUFBRSxDQUFuRDtBQUFzRCxjQUFFLEVBQUUsQ0FBMUQ7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFO0FBQUEsMEJBQUtBLElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQVdGLElBQUksQ0FBQ0csRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQU9ELFNBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBLGtCQURGO0FBNEJELENBcENEOztBQXNDZVYsb0VBQWY7QUFFTyxNQUFNVyxjQUFjLEdBQUksTUFBTTtBQUNuQyxTQUFPQyxLQUFLLENBQUMsNENBQUQsQ0FBTCxDQUNKQyxJQURJLENBQ0VDLEdBQUQsSUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBRFYsRUFFSkYsSUFGSSxDQUVFQyxHQUFELElBQVM7QUFDYixXQUFPO0FBQ0xiLFdBQUssRUFBRTtBQUFFTSxZQUFJLEVBQUVPO0FBQVI7QUFERixLQUFQO0FBR0QsR0FOSSxDQUFQO0FBT0QsQ0FSTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB2YXJpYW50cyB9IGZyb20gXCIuLi9tb3Rpb24vdmFyaWFudHNcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1cIjtcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0SXNWaXNpYmxlID0gKCkgPT4ge1xuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsNTAwLDcwMCZkaXNwbGF5PXN3YXBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiAvPlxuICAgICAgICA8dGl0bGU+TmV4dC1KUyBBcHBsaWNhaXRvbjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxGb3JtIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNldElzVmlzaWJsZX0+SGlkZSBEYXRhPC9idXR0b24+XG4gICAgICA8bW90aW9uLmRpdiBhbmltYXRlPXtpc1Zpc2libGUgPyBcImFjdGl2ZVwiIDogXCJpbmFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIHtwcm9wcy5kYXRhLm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEdyaWQga2V5PXtkYXRhLmlkfSBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17M30geGw9ezJ9PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT57ZGF0YS50aXRsZX08L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSAgKCkgPT4ge1xuICByZXR1cm4gZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3NcIilcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IGRhdGE6IHJlcyB9XG4gICAgICB9O1xuICAgIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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