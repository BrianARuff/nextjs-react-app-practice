webpackHotUpdate_N_E(0,{

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_brian_Code_single_store_classes_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _jsxFileName = \"/home/brian/Code/single-store-classes-next-app/src/components/Form.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_brian_Code_single_store_classes_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar config = {\n  amp: true\n};\nvar Form = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"memo\"])(_c = _s(function (props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    username: \"\",\n    password: \"\"\n  }),\n      formData = _useState[0],\n      setFormData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    username: \"\",\n    password: \"\",\n    id: 0\n  }),\n      userAccount = _useState2[0],\n      setUserAccount = _useState2[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n      method: \"POST\",\n      body: JSON.stringify(formData),\n      headers: {\n        \"Content-type\": \"application/json; charset=UTF-8\"\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setUserAccount({\n        username: res.username,\n        password: res.password,\n        id: res.id\n      });\n    })[\"catch\"](function (err) {\n      throw new Error(err);\n    });\n  };\n\n  var handleSetFormData = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, Object(_home_brian_Code_single_store_classes_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, e.target.name, e.target.value)));\n  }, [formData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      action: \"submit\",\n      target: \"_blank\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: handleSetFormData,\n        type: \"text\",\n        name: \"username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        onChange: handleSetFormData,\n        type: \"text\",\n        name: \"password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onSubmit: handleSubmit,\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [formData.username, \"...\", formData.password]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n      children: userAccount.id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"UserName: \", userAccount.username, \" | Password: \", userAccount.password, \" | ID: \", userAccount.id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }, _this) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n}, \"/0dXmZRcx+Vp73YIYeQJzmEWr3A=\"));\n_c2 = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Form$memo\");\n$RefreshReg$(_c2, \"Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50c3g/OWVkZSJdLCJuYW1lcyI6WyJjb25maWciLCJhbXAiLCJGb3JtIiwibWVtbyIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImlkIiwidXNlckFjY291bnQiLCJzZXRVc2VyQWNjb3VudCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJFcnJvciIsImhhbmRsZVNldEZvcm1EYXRhIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQWY7QUFtQlAsSUFBTUMsSUFDNkIsZ0JBQUdDLGtEQUFJLFNBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ3BCQyxzREFBUSxDQUFvQjtBQUMxREMsWUFBUSxFQUFFLEVBRGdEO0FBRTFEQyxZQUFRLEVBQUU7QUFGZ0QsR0FBcEIsQ0FEWTtBQUFBLE1BQzdDQyxRQUQ2QztBQUFBLE1BQ25DQyxXQURtQzs7QUFBQSxtQkFLZEosc0RBQVEsQ0FBdUI7QUFDbkVDLFlBQVEsRUFBRSxFQUR5RDtBQUVuRUMsWUFBUSxFQUFFLEVBRnlEO0FBR25FRyxNQUFFLEVBQUU7QUFIK0QsR0FBdkIsQ0FMTTtBQUFBLE1BSzdDQyxXQUw2QztBQUFBLE1BS2hDQyxjQUxnQzs7QUFjcEQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsU0FBSyxDQUFDLDRDQUFELEVBQStDO0FBQ2xEQyxZQUFNLEVBQUUsTUFEMEM7QUFFbERDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVaLFFBQWYsQ0FGNEM7QUFHbERhLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSHlDLEtBQS9DLENBQUwsQ0FNR0MsSUFOSCxDQU1RLFVBQUFDLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEtBTlgsRUFPR0YsSUFQSCxDQU9RLFVBQUFDLEdBQUcsRUFBSTtBQUNYWCxvQkFBYyxDQUFDO0FBQ2JOLGdCQUFRLEVBQUVpQixHQUFHLENBQUNqQixRQUREO0FBRWJDLGdCQUFRLEVBQUVnQixHQUFHLENBQUNoQixRQUZEO0FBR2JHLFVBQUUsRUFBRWEsR0FBRyxDQUFDYjtBQUhLLE9BQUQsQ0FBZDtBQUtELEtBYkgsV0FjUyxVQUFBZSxHQUFHLEVBQUk7QUFDWixZQUFNLElBQUlDLEtBQUosQ0FBVUQsR0FBVixDQUFOO0FBQ0QsS0FoQkg7QUFpQkQsR0FuQkQ7O0FBcUJBLE1BQU1FLGlCQUFpQixHQUFHQyx5REFBVyxDQUNuQyxVQUFDZCxDQUFELEVBQU87QUFDTEwsZUFBVyxpQ0FDTkQsUUFETSxnS0FFUk0sQ0FBQyxDQUFDZSxNQUFGLENBQVNDLElBRkQsRUFFUWhCLENBQUMsQ0FBQ2UsTUFBRixDQUFTRSxLQUZqQixHQUFYO0FBSUQsR0FOa0MsRUFPbkMsQ0FBQ3ZCLFFBQUQsQ0FQbUMsQ0FBckM7QUFVQSxzQkFDRTtBQUFBLDRCQUNFO0FBQU0sWUFBTSxFQUFDLFFBQWI7QUFBc0IsWUFBTSxFQUFDLFFBQTdCO0FBQXNDLGNBQVEsRUFBRUssWUFBaEQ7QUFBQSw4QkFDRTtBQUFPLGdCQUFRLEVBQUVjLGlCQUFqQjtBQUFvQyxZQUFJLEVBQUMsTUFBekM7QUFBZ0QsWUFBSSxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU8sZ0JBQVEsRUFBRUEsaUJBQWpCO0FBQW9DLFlBQUksRUFBQyxNQUF6QztBQUFnRCxZQUFJLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBUSxnQkFBUSxFQUFFZCxZQUFsQjtBQUFnQyxZQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFO0FBQUEsNkJBQ0U7QUFBQSxtQkFDR0wsUUFBUSxDQUFDRixRQURaLFNBQ3lCRSxRQUFRLENBQUNELFFBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQWFFO0FBQUEsZ0JBRUlJLFdBQVcsQ0FBQ0QsRUFBWixnQkFDRTtBQUFBLGlDQUNhQyxXQUFXLENBQUNMLFFBRHpCLG1CQUVhSyxXQUFXLENBQUNKLFFBRnpCLGFBR09JLFdBQVcsQ0FBQ0QsRUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsR0FNRTtBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBLGtCQURGO0FBMkJELENBeEV5QyxrQ0FEMUM7TUFBTVIsSTtBQTJFU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIG1lbW8gfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiB0cnVlIH1cblxudHlwZSBQcm9wcyA9IHtcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7fVtdO1xuICB9O1xufTtcblxudHlwZSBGb3JtRGF0YUludGVyZmFjZSA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZyxcbiAgcGFzc3dvcmQ6IHN0cmluZ1xufVxuXG50eXBlIFVzZXJBY2NvdW50SW50ZXJmYWNlID0ge1xuICB1c2VybmFtZTogc3RyaW5nLFxuICBwYXNzd29yZDogc3RyaW5nLFxuICBpZDogbnVtYmVyXG59XG5cbmNvbnN0IEZvcm06IFJlYWN0Lk5hbWVkRXhvdGljQ29tcG9uZW50PHwgUmVhY3QuUmVmQXR0cmlidXRlczxSZWFjdC5Db21wb25lbnQ8UHJvcHMsIGFueSwgYW55Pj5cbiAgfCB7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gbWVtbygocHJvcHMpID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YUludGVyZmFjZT4oe1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiXG4gIH0pO1xuICBjb25zdCBbdXNlckFjY291bnQsIHNldFVzZXJBY2NvdW50XSA9IHVzZVN0YXRlPFVzZXJBY2NvdW50SW50ZXJmYWNlPih7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgaWQ6IDBcbiAgfSk7XG4gIHR5cGUgRmV0Y2ggPSB7XG4gICAgaW5wdXQ6IFJlcXVlc3QgfCBzdHJpbmcsXG4gICAgaW5pdD86IFJlcXVlc3RJbml0IHwgUHJvbWlzZTxSZXNwb25zZT5cbiAgfVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIlxuICAgICAgfVxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBzZXRVc2VyQWNjb3VudCh7XG4gICAgICAgICAgdXNlcm5hbWU6IHJlcy51c2VybmFtZSxcbiAgICAgICAgICBwYXNzd29yZDogcmVzLnBhc3N3b3JkLFxuICAgICAgICAgIGlkOiByZXMuaWRcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2V0Rm9ybURhdGEgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBbZm9ybURhdGFdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGZvcm0gYWN0aW9uPVwic3VibWl0XCIgdGFyZ2V0PVwiX2JsYW5rXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17aGFuZGxlU2V0Rm9ybURhdGF9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVTZXRGb3JtRGF0YX0gdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICA8YnV0dG9uIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2Zvcm1EYXRhLnVzZXJuYW1lfS4uLntmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgPC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIHtcbiAgICAgICAgICB1c2VyQWNjb3VudC5pZCA/XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVXNlck5hbWU6IHt1c2VyQWNjb3VudC51c2VybmFtZX0gfFxuICAgICAgICAgICAgICBQYXNzd29yZDoge3VzZXJBY2NvdW50LnBhc3N3b3JkfSB8XG4gICAgICAgICAgICAgIElEOiB7dXNlckFjY291bnQuaWR9XG4gICAgICAgICAgICA8L3A+IDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n");

/***/ })

})