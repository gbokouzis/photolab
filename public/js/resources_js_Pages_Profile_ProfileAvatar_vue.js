"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_ProfileAvatar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: Object,
    profileImg: Object
  },
  setup: function setup(props) {
    var src = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var img = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)('/storage/images/profile_image.png');
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted)(function () {
      if (props.profileImg) {
        props.profileImg.path, _readOnlyError("src");
      } else {
        img, _readOnlyError("src");
      }
    });

    var remove = function remove() {
      if (props.profileImg) {
        props.profileImg.path, _readOnlyError("src");
      } else {
        img, _readOnlyError("src");
      }
    };

    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      image: null
    });
    return {
      src: src,
      form: form,
      remove: remove
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=template&id=2901aa83":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=template&id=2901aa83 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative inline-block h-40 w-40"
};
var _hoisted_2 = ["src"];
var _hoisted_3 = {
  "class": "absolute top-0 h-full w-full bg-black rounded-full bg-opacity-25 flex items-center justify-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  type: "button",
  "class": "rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "32",
  height: "32"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.828 5l-2 2H4v12h16V7h-3.828l-2-2H9.828zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  fill: "rgba(40,40,40,1)"
})])], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "32",
  height: "32"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z",
  fill: "rgba(40,40,40,1)"
})], -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", {
    onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return _ctx.submit && _ctx.submit.apply(_ctx, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <input type=\"file\" accept=\"image/*\" class=\"hidden\" ref=\"image\" @change=\"change\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.image = $event.target.files[0];
    }),
    "class": "w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
  }, null, 32
  /* HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $setup.src,
    alt: "Avatar",
    "class": "h-40 w-40 object-cover rounded-full"
  }, null, 8
  /* PROPS */
  , _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $setup.remove();
    }),
    type: "button",
    "class": "rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none"
  }, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button v-if=\"image\" @click=\"submit()\" type=\"button\" class=\"rounded-full hover:bg-white hover:bg-opacity-25 p-2 focus:outline-none\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"32\" height=\"32\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z\" fill=\"rgba(40,40,40,1)\"/></svg>\r\n                </button> ")])])], 32
  /* HYDRATE_EVENTS */
  );
}

/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileAvatar.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileAvatar.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileAvatar_vue_vue_type_template_id_2901aa83__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileAvatar.vue?vue&type=template&id=2901aa83 */ "./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=template&id=2901aa83");
/* harmony import */ var _ProfileAvatar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileAvatar.vue?vue&type=script&lang=js */ "./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_photolab_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ProfileAvatar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ProfileAvatar_vue_vue_type_template_id_2901aa83__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Profile/ProfileAvatar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileAvatar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileAvatar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProfileAvatar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=template&id=2901aa83":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=template&id=2901aa83 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileAvatar_vue_vue_type_template_id_2901aa83__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ProfileAvatar_vue_vue_type_template_id_2901aa83__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ProfileAvatar.vue?vue&type=template&id=2901aa83 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile/ProfileAvatar.vue?vue&type=template&id=2901aa83");


/***/ })

}]);