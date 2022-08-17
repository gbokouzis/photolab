"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_NavLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Search.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Search.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    searchData: Object,
    users: Object
  },
  setup: function setup(props) {
    var search = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)('');
    var searchData = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)(props.searchData);
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.watch)(search, function (value) {
      // console.log('changed ' + value)
      // axios.get(`http://localhost:8000/search?search=${value}`).then((response) => {
      //     console.log(response.data)
      // })
      // .then(response => {
      //     searchData.value = response.data.data
      // });
      // console.log('search' + searchData)
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get('/search', {
        search: value
      }, {
        preserveState: true,
        replace: true
      });
    });
    return {
      search: search
    };
  } // data() {
  //     return {
  //         search: null
  //     }
  // }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavLayout.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavLayout.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Search_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Search.vue */ "./resources/js/Components/Search.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Search: _Components_Search_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    users: Object
  },
  data: function data() {
    return {
      imgMenuShow: false,
      selectShow: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Search.vue?vue&type=template&id=85ef609a":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Search.vue?vue&type=template&id=85ef609a ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex w-full items-center"
};
var _hoisted_2 = {
  "class": "flex flex-1 h-10 w-28 pl-2"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" All categories ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "aria-hidden": "true",
  "class": "ml-1 w-4 h-4",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
})], -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_3, _hoisted_4];
var _hoisted_6 = {
  key: 0,
  id: "dropdown",
  "class": "origin-top-left mt-10 absolute z-10 w-28 rounded-xl divide-y shadow bg-white",
  "data-popper-escaped": "",
  "data-popper-placement": "top",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "dropdown-button",
  tabindex: "-1"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<ul class=\"py-1 text-sm text-gray-700\" aria-labelledby=\"dropdown-button\"><li><button type=\"button\" class=\"inline-flex py-2 px-4 w-full hover:text-neutral-900\">Mockups</button></li><li><button type=\"button\" class=\"inline-flex py-2 px-4 w-full hover:text-neutral-900\">Templates</button></li><li><button type=\"button\" class=\"inline-flex py-2 px-4 w-full hover:text-neutral-900\">Design</button></li><li><button type=\"button\" class=\"inline-flex py-2 px-4 w-full hover:text-neutral-900\">Logos</button></li></ul>", 1);

var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = {
  "class": "relative w-full"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "absolute top-0 right-0 px-4 h-10 text-sm font-medium rounded-r-full border border-gray-300"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "aria-hidden": "true",
  "class": "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "sr-only"
}, "Search")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <a href=\"#\" class=\"text-gray-600 hover:text-neutral-900 px-3 py-2 rounded-md text-sm font-medium\">Team</a> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input v-model=\"search\" type=\"text\" placeholder=\"Search\" class=\"flex-1 border h-10 px-2 rounded-full\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <label for=\"search-dropdown\"\r\n                    class=\"mb-2 text-sm font-medium text-gray-700 sr-only\"\r\n                >\r\n                    Your Email\r\n                </label> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.selectShow = !_ctx.selectShow;
    }),
    id: "dropdown-button",
    "data-dropdown-toggle": "dropdown",
    "class": "flex-shrink-0 z-10 inline-flex items-center px-2 text-sm font-medium text-center text-gray-900 bg-neutral-50 border border-gray-300 rounded-l-full hover:bg-neutral-100",
    type: "button"
  }, _hoisted_5), _ctx.selectShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, _hoisted_8)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.search = $event;
    }),
    type: "search",
    id: "search-dropdown",
    placeholder: "Search Users, Tags, Locations...",
    "class": "block focus:outline-0 h-10 px-2 w-full z-20 text-sm rounded-r-full border-l-gray-50 border-l-2 border border-gray-300"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.search]]), _hoisted_10])])])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavLayout.vue?vue&type=template&id=7343a758":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavLayout.vue?vue&type=template&id=7343a758 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-neutral-50"
};
var _hoisted_2 = {
  "class": "relative w-full flex h-16"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex flex-grow-0 items-center justify-start px-2 sm:px-4 lg:px-8\"><div class=\"flex-shrink-0 flex items-center\"><!-- &lt;svg class=&quot;block lg:hidden h-10 w-auto&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 24 24&quot; width=&quot;48&quot; height=&quot;48&quot;&gt;&lt;path fill=&quot;none&quot; d=&quot;M0 0h24v24H0z&quot;/&gt;&lt;path d=&quot;M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z&quot;/&gt;&lt;/svg&gt; --><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"48\" height=\"48\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\" fill=\"rgba(23,23,23,1)\"></path></svg></div></div>", 1);

var _hoisted_4 = {
  key: 0,
  "class": "flex flex-shrink items-center px-2 sm:px-4 lg:px-8"
};
var _hoisted_5 = {
  type: "button",
  "class": "block p-1 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2v7zm9-10v7h-2V9H6l6-6 6 6h-5z",
  fill: "rgba(23,23,23,1)"
})], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "relative flex-grow-0 w-8 ml-2 sm:ml-4 lg:ml-8"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "bg-gray-800 flex rounded-full focus:outline-none focus:ring-1 focus:ring-offset-0.8 focus:ring-offset-neutral-900 focus:ring-neutral-900",
  id: "user-menu-button",
  "aria-expanded": "false",
  "aria-haspopup": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "w-8 rounded-full",
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  alt: ""
})])], -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  key: 0,
  "class": "z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
  role: "menu",
  "aria-orientation": "vertical",
  "aria-labelledby": "user-menu-button",
  tabindex: "-1"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900",
  role: "menuitem",
  tabindex: "-1",
  id: "user-menu-item-0"
}, "Your Profile", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Log out ");

var _hoisted_13 = {
  key: 1,
  "class": "flex flex-shrink items-center px-2 sm:px-4 lg:px-8"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Login/Register ");

var _hoisted_15 = {
  "class": "relative w-full flex sm:h-12 shadow-sm"
};
var _hoisted_16 = {
  "class": "w-full flex justify-center flex-col sm:flex-row items-center px-6 py-4 mx-auto"
};
var _hoisted_17 = {
  "class": "flex flex-col sm:flex-row md:space-x-5 w-full items-center justify-center md:text-lg"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Home ");

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Posts ");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Following ");

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Users ");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Categories ");

var _hoisted_23 = {
  key: 0,
  "class": "hidden flex-shrink-0 sm:block"
};
var _hoisted_24 = {
  "class": "flex items-center justify-end mx-2 sm:mx-4 lg:mx-8"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Search");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <nav\r\n      class=\"bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center  px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto\"\r\n    >\r\n        <div>\r\n            <h2 class=\"text-3xl font-bold ml-2 mr-5\">\r\n                <a>My <span class=\"text-blue-600\">B</span>rand</a>\r\n            </h2>\r\n        </div>\r\n        <div class=\"mt-5 md:mt-0\">\r\n            <ul class=\"flex flex-col md:flex-row md:space-x-5 w-full items-center\">\r\n                <li>\r\n                        <Link href=\"/home\" class=\"font-semibold tracking-tight block cursor-pointer p-2 \r\n                            hover:text-blue-500 hover:underline transition-colors duration-300\"\r\n                            :class=\"{ 'font-bold underline': $page.component === 'Welcome' }\"\r\n                        >\r\n                            Home\r\n                        </Link>\r\n                </li>\r\n                <li>\r\n                        <Link href=\"/posts\" class=\"font-semibold tracking-tight block cursor-pointer p-2 \r\n                            hover:text-blue-500 hover:underline transition-colors duration-300\"\r\n                            :class=\"{ 'font-bold underline': $page.component === 'Posts/Index' }\"\r\n                        >\r\n                            Posts\r\n                        </Link>\r\n                </li>\r\n                <li>\r\n                        <Link href=\"/users\" class=\"font-semibold tracking-tight block cursor-pointer p-2 \r\n                            hover:text-blue-500 hover:underline transition-colors duration-300\"\r\n                            :class=\"{ 'font-bold underline': $page.component === 'Profile/Index' }\"\r\n                        >\r\n                            Users\r\n                        </Link>\r\n                </li>\r\n                <li>\r\n                        <Link href=\"/categories\" class=\"font-semibold tracking-tight block cursor-pointer p-2 \r\n                            hover:text-blue-500 hover:underline transition-colors duration-300\"\r\n                            :class=\"{ 'font-bold underline': $page.component === 'Categories/Index' }\"\r\n                        >\r\n                            Categories\r\n                        </Link>\r\n                </li>\r\n                <li>\r\n                    <Link href=\"/register\" class=\"font-semibold tracking-tight block cursor-pointer p-2 \r\n                        hover:text-blue-500 hover:underline transition-colors duration-300\"\r\n                    >\r\n                        Register\r\n                    </Link>\r\n                </li>\r\n                <li>\r\n                    <Link href=\"/login\" class=\"font-semibold tracking-tight block cursor-pointer p-2 \r\n                        hover:text-blue-500 hover:underline transition-colors duration-300\"\r\n                    >\r\n                        Login\r\n                    </Link>\r\n                </li>\r\n            </ul>\r\n            <div class=\"\">\r\n                <Link href=\"/logout\" method=\"post\"\r\n                        class=\"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150 ml-4\">\r\n                    Log out\r\n                </Link>\r\n            </div>\r\n        </div>\r\n    \r\n    </nav> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"36\" height=\"36\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M9.827 21.763L14.31 14l3.532 6.117A9.955 9.955 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237zM7.89 21.12A10.028 10.028 0 0 1 2.458 15h8.965L7.89 21.119zM2.05 13a9.964 9.964 0 0 1 2.583-7.761L9.112 13H2.05zm4.109-9.117A9.955 9.955 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10 6.159 3.883zM16.11 2.88A10.028 10.028 0 0 1 21.542 9h-8.965l3.533-6.119zM21.95 11a9.964 9.964 0 0 1-2.583 7.761L14.888 11h7.064z\"/></svg> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"36\" height=\"36\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\"/></svg> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Logo "), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Search "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Search), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Right "), _ctx.$page.props.auth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Upload "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/posts/create",
    "class": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Profile dropdown "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.imgMenuShow = !$data.imgMenuShow;
    })
  }, _hoisted_9), $data.imgMenuShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/logout",
    method: "post",
    "class": "block px-4 py-2 text-sm text-gray-600 hover:text-neutral-900",
    role: "menuitem",
    tabindex: "-1",
    id: "user-menu-item-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('login'),
    as: "button",
    "class": "inline-block px-6 py-2 border border-gray-400 text-gray-600 font-medium text-sm leading-tight rounded-xl bg-white hover:border-neutral-900 hover:text-neutral-900"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/home",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold tracking-tight block cursor-pointer p-2 text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300", {
      'font-bold underline': _ctx.$page.component === 'Welcome'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_18];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/posts",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold tracking-tight block cursor-pointer p-2 text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300", {
      'font-bold underline': _ctx.$page.component === 'Posts/Index'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_19];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/following",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold tracking-tight block cursor-pointer p-2 text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300", {
      'font-bold underline': _ctx.$page.component === 'Posts/Following'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_20];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/users",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold tracking-tight block cursor-pointer p-2 text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300", {
      'font-bold underline': _ctx.$page.component === 'Profile/Index'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/categories",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["font-semibold tracking-tight block cursor-pointer p-2 text-gray-700 hover:text-neutral-900 hover:underline transition-colors duration-300", {
      'font-bold underline': _ctx.$page.component === 'Categories/Index'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_22];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])]), _ctx.$page.props.auth ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, "Hi " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.auth.user.name) + "!", 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Components/Search.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Search.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_85ef609a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=85ef609a */ "./resources/js/Components/Search.vue?vue&type=template&id=85ef609a");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./resources/js/Components/Search.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_85ef609a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Components/Search.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/NavLayout.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/NavLayout.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLayout_vue_vue_type_template_id_7343a758__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLayout.vue?vue&type=template&id=7343a758 */ "./resources/js/Pages/NavLayout.vue?vue&type=template&id=7343a758");
/* harmony import */ var _NavLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLayout.vue?vue&type=script&lang=js */ "./resources/js/Pages/NavLayout.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NavLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NavLayout_vue_vue_type_template_id_7343a758__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/NavLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Components/Search.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Search.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/NavLayout.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/NavLayout.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Search.vue?vue&type=template&id=85ef609a":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Search.vue?vue&type=template&id=85ef609a ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_85ef609a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_85ef609a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=template&id=85ef609a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Search.vue?vue&type=template&id=85ef609a");


/***/ }),

/***/ "./resources/js/Pages/NavLayout.vue?vue&type=template&id=7343a758":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/NavLayout.vue?vue&type=template&id=7343a758 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLayout_vue_vue_type_template_id_7343a758__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NavLayout_vue_vue_type_template_id_7343a758__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NavLayout.vue?vue&type=template&id=7343a758 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/NavLayout.vue?vue&type=template&id=7343a758");


/***/ })

}]);