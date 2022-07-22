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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    posts: Object
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

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"columns-1 sm:columns-2 lg:columns-3 xl:columns-4 max-w-screen-2xl mx-auto sm:p-4 lg:p-6 xl:p-8\"><div class=\"relative mb-4 before:content-[&#39;&#39;] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\"><img class=\"w-full rounded-ss\" src=\"https://source.unsplash.com/random/1\"><div class=\"test__body absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100\"><div class=\"relative\"><a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a><h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1><p class=\"test__author font-sm font-light\">Author</p></div><div class=\"mt-auto\"><span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span></div></div></div><div class=\"relative mb-4 before:content-[&#39;&#39;] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\"><img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/2\"><div class=\"test__body absolute inset-0 p-8 text-white flex flex-col opacity-0 hover:opacity-100\"><div class=\"relative\"><a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a><h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1><p class=\"test__author font-sm font-light\">Author</p></div><div class=\"mt-auto\"><span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span></div></div></div><div class=\"relative mb-4 before:content-[&#39;&#39;] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\"><img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/3\"><div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\"><div class=\"relative\"><a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a><h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1><p class=\"test__author font-sm font-light\">Author</p></div><div class=\"mt-auto\"><span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span></div></div></div><div class=\"relative mb-4 before:content-[&#39;&#39;] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\"><img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/4\"><div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\"><div class=\"relative\"><a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a><h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1><p class=\"test__author font-sm font-light\">Author</p></div><div class=\"mt-auto\"><span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span></div></div></div><div class=\"relative mb-4 before:content-[&#39;&#39;] before:rounded-sm before:absolute before:inset-0 before:bg-black before:bg-opacity-20\"><img class=\"w-full rounded-sm\" src=\"https://source.unsplash.com/random/5\"><div class=\"test__body absolute inset-0 p-8 text-white flex flex-col\"><div class=\"relative\"><a class=\"test__link absolute inset-0\" target=\"_blank\" href=\"/\"></a><h1 class=\"test__title text-3xl font-bold mb-3\">Title post</h1><p class=\"test__author font-sm font-light\">Author</p></div><div class=\"mt-auto\"><span class=\"test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black\">#tag</span></div></div></div><!-- &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/6&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/7&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/8&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/9&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/10&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/11&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/12&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/13&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/14&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;inline-block relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/15&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/16&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/17&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/18&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/19&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/20&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/21&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/22&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/23&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/24&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt;\r\n  \r\n  &lt;div class=&quot;relative mb-4 before:content-[&#39;&#39;] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20&quot;&gt;\r\n    &lt;img class=&quot;w-full rounded-md&quot; src=&quot;https://source.unsplash.com/random/25&quot;&gt;\r\n    &lt;div class=&quot;test__body absolute inset-0 p-8 text-white flex flex-col&quot;&gt;\r\n      &lt;div class=&quot;relative&quot;&gt;\r\n        &lt;a class=&quot;test__link absolute inset-0&quot; target=&quot;_blank&quot; href=&quot;/&quot;&gt;&lt;/a&gt;\r\n        &lt;h1 class=&quot;test__title text-3xl font-bold mb-3&quot;&gt;Title post&lt;/h1&gt;\r\n        &lt;p class=&quot;test__author font-sm font-light&quot;&gt;Author&lt;/p&gt;\r\n      &lt;/div&gt;\r\n      &lt;div class=&quot;mt-auto&quot;&gt;\r\n        &lt;span class=&quot;test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black&quot;&gt;#tag&lt;/span&gt;\r\n      &lt;/div&gt;\r\n    &lt;/div&gt;\r\n  &lt;/div&gt; --></div>", 1);

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

  }), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.posts, function (post) {
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
    , _hoisted_11)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_12], 64
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