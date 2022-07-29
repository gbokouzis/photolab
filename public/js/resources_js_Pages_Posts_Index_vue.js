"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Posts_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var lodash_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/function */ "./node_modules/lodash/function.js");
/* harmony import */ var lodash_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_function__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    posts: Object
  },
  data: function data() {
    return {
      dataPosts: this.posts
    };
  },
  mounted: function mounted() {
    var _this = this;

    console.log();
    window.addEventListener('scroll', (0,lodash_function__WEBPACK_IMPORTED_MODULE_1__.debounce)(function (e) {
      var pixelsFromBottom = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight;

      if (pixelsFromBottom < 200) {
        // console.log(pixelsFromBottom)
        if (_this.dataPosts.next_page_url != null) {
          axios__WEBPACK_IMPORTED_MODULE_2___default().get(_this.dataPosts.next_page_url).then(function (response) {
            _this.dataPosts = _objectSpread(_objectSpread({}, response.data), {}, {
              data: [].concat(_toConsumableArray(_this.dataPosts.data), _toConsumableArray(response.data.data))
            });
          });
        }
      }
    }, 100));
  },
  watch: {
    posts: function posts(newPosts) {
      this.dataPosts = newPosts;
    }
  },
  setup: function setup() {
    var destroy = function destroy(post) {
      if (confirm('Are you sure?')) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia["delete"](route('posts.destroy', post));
      }
    };

    return {
      destroy: destroy
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New Post ");

var _hoisted_2 = {
  "class": "px-6 py-4 m-4"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = ["src"];
var _hoisted_5 = {
  "class": "text-xl mb-2"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Username: geor ");

var _hoisted_7 = {
  key: 1,
  "class": "text-gray-700 text-base"
};
var _hoisted_8 = {
  key: 2,
  "class": "text-gray-700 text-base"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-6 pt-4 pb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
}, "#photography"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
}, "#travel")], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit");

var _hoisted_11 = ["onClick"];
var _hoisted_12 = {
  key: 0
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "32",
  height: "32"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0H24V24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z",
  fill: "rgba(79,70,229,1)"
})], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "32",
  height: "32"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0H24V24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z",
  fill: "rgba(79,70,229,1)"
})], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 max-w-screen-2xl mx-auto sm:p-4 lg:p-6 xl:p-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-ss\" src=\"https://source.unsplash.com/random/1\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/2\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/3\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/4\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/5\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/6\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/7\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/8\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/9\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/10\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/11\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/12\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/13\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/14\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"inline-block relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/15\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/16\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/17\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/18\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/19\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/20\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/21\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/22\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/23\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/24\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20\">\r\n    <img class=\"w-full rounded-md\" src=\"https://source.unsplash.com/random/25\">\r\n    <div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\">\r\n      <div class=\"relative\">\r\n        <a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a>\r\n        <h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1>\r\n        <p class=\"test__author font-sm font-light\">Author</p>\r\n      </div>\r\n      <div class=\"mt-auto\">\r\n        <span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span>\r\n      </div>\r\n    </div>\r\n  </div> ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Index"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/posts/create",
    "class": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    _: 1
    /* STABLE */

  }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.dataPosts.data, function (post) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "max-w-sm rounded overflow-hidden shadow-lg mt-4 mx-auto",
      key: post.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [post.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: post.image.path,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_4)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: _ctx.route('posts.show', post.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_6];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, " By: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.user.name), 1
    /* TEXT */
    )]), post.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, " description: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.description), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), post.camera ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_8, " camera: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.camera), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" TODO na do :headers an xriazonte  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: _ctx.route('posts.edit', post.id),
      headers: {
        id: post.id
      },
      "class": "m-4 px-2 py-1 bg-blue-600 text-white rounded font-bold"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_10];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href", "headers"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      onClick: function onClick($event) {
        return $setup.destroy(post);
      },
      type: "button",
      "class": "m-4 px-2 py-1 bg-red-600 text-white rounded font-bold"
    }, " Delete " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.id), 9
    /* TEXT, PROPS */
    , _hoisted_11), _ctx.$page.props.auth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [post.liked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 0,
      "preserve-scroll": "",
      method: "POST",
      as: "button",
      href: "/posts/".concat(post.id, "/unlike")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_13];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      key: 1,
      "preserve-scroll": "",
      method: "POST",
      as: "button",
      href: "/posts/".concat(post.id, "/like")
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_14];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg v-if=\"post.likes_count\" @click=\"buttonUnlike(post.id)\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"32\" height=\"32\"><path fill=\"none\" d=\"M0 0H24V24H0z\"/>\r\n              <path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z\" fill=\"rgba(79,70,229,1)\"/>\r\n            </svg>\r\n            <svg v-else @click=\"buttonLike(post.id)\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"32\" height=\"32\">\r\n              <path fill=\"none\" d=\"M0 0H24V24H0z\"/><path d=\"M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z\" fill=\"rgba(79,70,229,1)\"/>\r\n            </svg> ")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_15], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2e913d5d */ "./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Posts/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2e913d5d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=2e913d5d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Posts/Index.vue?vue&type=template&id=2e913d5d");


/***/ })

}]);