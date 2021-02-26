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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QeBL");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./src/motion/variants.ts
const variants = {
  active: {
    opacity: 1,
    x: ["100vw", "0vw"],
    transition: {
      duration: 0.5,
      type: "spring"
    }
  },
  inactive: {
    opacity: 0,
    x: ["0vw", "-100vw"],
    transition: {
      duration: 0.5
    }
  }
};
// CONCATENATED MODULE: ./src/components/Form.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const config = {
  amp: true
};
const Form = /*#__PURE__*/Object(external_react_["memo"])(props => {
  const {
    0: formData,
    1: setFormData
  } = Object(external_react_["useState"])({
    username: "",
    password: ""
  });
  const {
    0: userAccount,
    1: setUserAccount
  } = Object(external_react_["useState"])({
    username: "",
    password: "",
    id: 0
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => res.json()).then(res => {
      setUserAccount({
        username: res.username,
        password: res.password,
        id: res.id
      });
    }).catch(err => {
      throw new Error(err);
    });
  };

  const handleSetFormData = Object(external_react_["useCallback"])(e => {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [e.target.name]: e.target.value
    }));
  }, [formData]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      action: "/",
      target: "_blank",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        onChange: handleSetFormData,
        type: "text",
        name: "username"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        onChange: handleSetFormData,
        type: "text",
        name: "password"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onSubmit: handleSubmit,
        type: "submit",
        children: "Submit"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("article", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [formData.username, "...", formData.password]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("article", {
      children: userAccount.id ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["UserName: ", userAccount.username, " | Password: ", userAccount.password, " | ID: ", userAccount.id]
      }) : null
    })]
  });
});
/* harmony default export */ var components_Form = (Form);
// CONCATENATED MODULE: ./src/pages/index.tsx










const Index = props => {
  const [isVisible, setIsVisible] = external_react_["useState"](true);

  const handleSetIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Next-JS Applicaiton"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Form, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: handleSetIsVisible,
      children: "Hide Data"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
      animate: isVisible ? "active" : "inactive",
      variants: variants,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        container: true,
        children: props.data.map(data => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
            style: {
              border: "1px solid black"
            },
            item: true,
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 2,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                children: data.title
              })
            })
          }, data.id);
        })
      })
    })]
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);
const getStaticProps = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json()).then(res => {
    if (!res) {
      return {
        redirect: {
          destination: "/",
          permanent: false
        }
      };
    }

    return {
      props: {
        data: res
      }
    };
  });
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });