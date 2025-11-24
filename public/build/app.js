(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/app/app.css */ "./assets/styles/app/app.css");
/* harmony import */ var _styles_app_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/app/home.css */ "./assets/styles/app/home.css");
/* harmony import */ var _styles_partials_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/partials/header.css */ "./assets/styles/partials/header.css");
/* harmony import */ var _styles_partials_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/partials/footer.css */ "./assets/styles/partials/footer.css");
/* harmony import */ var _styles_partials_buttons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/partials/buttons.css */ "./assets/styles/partials/buttons.css");
/* harmony import */ var _styles_app_filter_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/app/filter.css */ "./assets/styles/app/filter.css");
/* harmony import */ var _styles_app_activityDetail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/app/activityDetail.css */ "./assets/styles/app/activityDetail.css");
/* harmony import */ var _styles_user_login_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../styles/user/login.css */ "./assets/styles/user/login.css");
/* harmony import */ var _styles_user_profile_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../styles/user/profile.css */ "./assets/styles/user/profile.css");
/* harmony import */ var _styles_user_registration_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../styles/user/registration.css */ "./assets/styles/user/registration.css");
/* harmony import */ var _styles_user_contact_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../styles/user/contact.css */ "./assets/styles/user/contact.css");
/* harmony import */ var _styles_user_reset_password_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../styles/user/reset-password.css */ "./assets/styles/user/reset-password.css");
/* harmony import */ var _styles_legal_legal_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../styles/legal/legal.css */ "./assets/styles/legal/legal.css");
/* harmony import */ var _styles_pages_about_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../styles/pages/about.css */ "./assets/styles/pages/about.css");
/* harmony import */ var _styles_pages_faq_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../styles/pages/faq.css */ "./assets/styles/pages/faq.css");
/* harmony import */ var _styles_admin_admin_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../styles/admin/_admin.css */ "./assets/styles/admin/_admin.css");
/* harmony import */ var _styles_admin_sidebar_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../styles/admin/_sidebar.css */ "./assets/styles/admin/_sidebar.css");
/* harmony import */ var _styles_admin_adminDashboard_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../styles/admin/adminDashboard.css */ "./assets/styles/admin/adminDashboard.css");
/* harmony import */ var _styles_admin_adminActivityForm_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../styles/admin/adminActivityForm.css */ "./assets/styles/admin/adminActivityForm.css");
/* harmony import */ var _styles_admin_adminUserForm_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../styles/admin/adminUserForm.css */ "./assets/styles/admin/adminUserForm.css");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../js/header.js */ "./assets/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_20__);
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)




//Partials




//Activity



//User






//legal


//pages




//Admin






// JS


/***/ }),

/***/ "./assets/js/header.js":
/*!*****************************!*\
  !*** ./assets/js/header.js ***!
  \*****************************/
/***/ (() => {

// assets/js/header.js
(function () {
  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header || header.dataset.jsInit === '1') return; // évite double bind (hot reload / Turbo)
    header.dataset.jsInit = '1';
    var burger = header.querySelector('.burger');
    var nav = header.querySelector('.main-nav');
    if (!burger || !nav) return;
    var OPEN_CLASS = 'is-open';
    var MQ_MOBILE = 768; // doit correspondre à ton CSS

    // Toggle menu
    function toggle(open) {
      var willOpen = typeof open === 'boolean' ? open : !header.classList.contains(OPEN_CLASS);
      header.classList.toggle(OPEN_CLASS, willOpen);
      burger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    }
    burger.addEventListener('click', function () {
      return toggle();
    });

    // Fermer si on clique un lien du menu
    nav.addEventListener('click', function (e) {
      var a = e.target.closest('a');
      if (a) toggle(false);
    });

    // Fermer sur Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') toggle(false);
    });

    // Quand on repasse en desktop, on nettoie l'état
    window.addEventListener('resize', function () {
      if (window.innerWidth > MQ_MOBILE) toggle(false);
    });
  }

  // DOM ready + compat Symfony UX Turbo (si utilisé)
  if (document.readyState !== 'loading') initHeader();
  document.addEventListener('DOMContentLoaded', initHeader, {
    once: true
  });
  document.addEventListener('turbo:load', initHeader); // sans effet si Turbo non présent
})();

/***/ }),

/***/ "./assets/styles/admin/_admin.css":
/*!****************************************!*\
  !*** ./assets/styles/admin/_admin.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin/_sidebar.css":
/*!******************************************!*\
  !*** ./assets/styles/admin/_sidebar.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin/adminActivityForm.css":
/*!***************************************************!*\
  !*** ./assets/styles/admin/adminActivityForm.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin/adminDashboard.css":
/*!************************************************!*\
  !*** ./assets/styles/admin/adminDashboard.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/admin/adminUserForm.css":
/*!***********************************************!*\
  !*** ./assets/styles/admin/adminUserForm.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app/activityDetail.css":
/*!**********************************************!*\
  !*** ./assets/styles/app/activityDetail.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app/app.css":
/*!***********************************!*\
  !*** ./assets/styles/app/app.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app/filter.css":
/*!**************************************!*\
  !*** ./assets/styles/app/filter.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app/home.css":
/*!************************************!*\
  !*** ./assets/styles/app/home.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/legal/legal.css":
/*!***************************************!*\
  !*** ./assets/styles/legal/legal.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/pages/about.css":
/*!***************************************!*\
  !*** ./assets/styles/pages/about.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/pages/faq.css":
/*!*************************************!*\
  !*** ./assets/styles/pages/faq.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/partials/buttons.css":
/*!********************************************!*\
  !*** ./assets/styles/partials/buttons.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/partials/footer.css":
/*!*******************************************!*\
  !*** ./assets/styles/partials/footer.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/partials/header.css":
/*!*******************************************!*\
  !*** ./assets/styles/partials/header.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/user/contact.css":
/*!****************************************!*\
  !*** ./assets/styles/user/contact.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/user/login.css":
/*!**************************************!*\
  !*** ./assets/styles/user/login.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/user/profile.css":
/*!****************************************!*\
  !*** ./assets/styles/user/profile.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/user/registration.css":
/*!*********************************************!*\
  !*** ./assets/styles/user/registration.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/user/reset-password.css":
/*!***********************************************!*\
  !*** ./assets/styles/user/reset-password.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL19hZG1pbi5jc3M/MzMzOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL19zaWRlYmFyLmNzcz8xOGRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYWRtaW5BY3Rpdml0eUZvcm0uY3NzPzAxNTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi9hZG1pbkRhc2hib2FyZC5jc3M/YjdlYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL2FkbWluVXNlckZvcm0uY3NzPzc5Y2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAvYWN0aXZpdHlEZXRhaWwuY3NzPzZlZDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAvYXBwLmNzcz82YTcxIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwL2ZpbHRlci5jc3M/YTVjNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC9ob21lLmNzcz81MjljIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbGVnYWwvbGVnYWwuY3NzPzYwYzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYWdlcy9hYm91dC5jc3M/NDg3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3BhZ2VzL2ZhcS5jc3M/Mjc5NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3BhcnRpYWxzL2J1dHRvbnMuY3NzPzJlYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYXJ0aWFscy9mb290ZXIuY3NzPzRmMTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYXJ0aWFscy9oZWFkZXIuY3NzPzE5YzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy91c2VyL2NvbnRhY3QuY3NzP2IwZDciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy91c2VyL2xvZ2luLmNzcz9iMGY0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9wcm9maWxlLmNzcz8xODc5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9yZWdpc3RyYXRpb24uY3NzP2U1YzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy91c2VyL3Jlc2V0LXBhc3N3b3JkLmNzcz9jNjU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FwcC9hcHAuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYXBwL2hvbWUuY3NzJztcblxuXG4vL1BhcnRpYWxzXG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhcnRpYWxzL2hlYWRlci5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9wYXJ0aWFscy9mb290ZXIuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvcGFydGlhbHMvYnV0dG9ucy5jc3MnO1xuXG4vL0FjdGl2aXR5XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FwcC9maWx0ZXIuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYXBwL2FjdGl2aXR5RGV0YWlsLmNzcyc7XG5cbi8vVXNlclxuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL2xvZ2luLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL3VzZXIvcHJvZmlsZS5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL3JlZ2lzdHJhdGlvbi5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL2NvbnRhY3QuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvdXNlci9yZXNldC1wYXNzd29yZC5jc3MnO1xuXG5cbi8vbGVnYWxcbmltcG9ydCAnLi8uLi9zdHlsZXMvbGVnYWwvbGVnYWwuY3NzJztcblxuLy9wYWdlc1xuXG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhZ2VzL2Fib3V0LmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhZ2VzL2ZhcS5jc3MnO1xuXG4vL0FkbWluXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FkbWluL19hZG1pbi5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9hZG1pbi9fc2lkZWJhci5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9hZG1pbi9hZG1pbkRhc2hib2FyZC5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9hZG1pbi9hZG1pbkFjdGl2aXR5Rm9ybS5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9hZG1pbi9hZG1pblVzZXJGb3JtLmNzcyc7XG5cbi8vIEpTXG5pbXBvcnQgJy4uL2pzL2hlYWRlci5qcyc7IiwiLy8gYXNzZXRzL2pzL2hlYWRlci5qc1xuKCgpID0+IHtcbiAgZnVuY3Rpb24gaW5pdEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKTtcbiAgICBpZiAoIWhlYWRlciB8fCBoZWFkZXIuZGF0YXNldC5qc0luaXQgPT09ICcxJykgcmV0dXJuOyAvLyDDqXZpdGUgZG91YmxlIGJpbmQgKGhvdCByZWxvYWQgLyBUdXJibylcbiAgICBoZWFkZXIuZGF0YXNldC5qc0luaXQgPSAnMSc7XG5cbiAgICBjb25zdCBidXJnZXIgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuICAgIGNvbnN0IG5hdiAgICA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcblxuICAgIGlmICghYnVyZ2VyIHx8ICFuYXYpIHJldHVybjtcblxuICAgIGNvbnN0IE9QRU5fQ0xBU1MgPSAnaXMtb3Blbic7XG4gICAgY29uc3QgTVFfTU9CSUxFICA9IDc2ODsgLy8gZG9pdCBjb3JyZXNwb25kcmUgw6AgdG9uIENTU1xuXG4gICAgLy8gVG9nZ2xlIG1lbnVcbiAgICBmdW5jdGlvbiB0b2dnbGUob3Blbikge1xuICAgICAgY29uc3Qgd2lsbE9wZW4gPSB0eXBlb2Ygb3BlbiA9PT0gJ2Jvb2xlYW4nID8gb3BlbiA6ICFoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKE9QRU5fQ0xBU1MpO1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoT1BFTl9DTEFTUywgd2lsbE9wZW4pO1xuICAgICAgYnVyZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHdpbGxPcGVuID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfVxuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlKCkpO1xuXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSB1biBsaWVuIGR1IG1lbnVcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgYSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcbiAgICAgIGlmIChhKSB0b2dnbGUoZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gRmVybWVyIHN1ciBFc2NhcGVcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHRvZ2dsZShmYWxzZSk7XG4gICAgfSk7XG5cbiAgICAvLyBRdWFuZCBvbiByZXBhc3NlIGVuIGRlc2t0b3AsIG9uIG5ldHRvaWUgbCfDqXRhdFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBNUV9NT0JJTEUpIHRvZ2dsZShmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBET00gcmVhZHkgKyBjb21wYXQgU3ltZm9ueSBVWCBUdXJibyAoc2kgdXRpbGlzw6kpXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIGluaXRIZWFkZXIoKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRIZWFkZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86bG9hZCcsIGluaXRIZWFkZXIpOyAvLyBzYW5zIGVmZmV0IHNpIFR1cmJvIG5vbiBwcsOpc2VudFxufSkoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJpbml0SGVhZGVyIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsImpzSW5pdCIsImJ1cmdlciIsIm5hdiIsIk9QRU5fQ0xBU1MiLCJNUV9NT0JJTEUiLCJ0b2dnbGUiLCJvcGVuIiwid2lsbE9wZW4iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYSIsInRhcmdldCIsImNsb3Nlc3QiLCJrZXkiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVhZHlTdGF0ZSIsIm9uY2UiXSwic291cmNlUm9vdCI6IiJ9