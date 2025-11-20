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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL19hZG1pbi5jc3M/MzMzOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL19zaWRlYmFyLmNzcz8xOGRiIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYWRtaW5BY3Rpdml0eUZvcm0uY3NzPzAxNTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi9hZG1pbkRhc2hib2FyZC5jc3M/YjdlYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL2FkbWluVXNlckZvcm0uY3NzPzc5Y2QiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAvYWN0aXZpdHlEZXRhaWwuY3NzPzZlZDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAvYXBwLmNzcz82YTcxIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwL2ZpbHRlci5jc3M/YTVjNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC9ob21lLmNzcz81MjljIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvbGVnYWwvbGVnYWwuY3NzPzYwYzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYWdlcy9hYm91dC5jc3M/NDg3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3BhZ2VzL2ZhcS5jc3M/Mjc5NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3BhcnRpYWxzL2J1dHRvbnMuY3NzPzJlYWEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYXJ0aWFscy9mb290ZXIuY3NzPzRmMTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYXJ0aWFscy9oZWFkZXIuY3NzPzE5YzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy91c2VyL2NvbnRhY3QuY3NzP2IwZDciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy91c2VyL2xvZ2luLmNzcz9iMGY0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9wcm9maWxlLmNzcz8xODc5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9yZWdpc3RyYXRpb24uY3NzP2U1YzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy91c2VyL3Jlc2V0LXBhc3N3b3JkLmNzcz9jNjU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcblxuXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FwcC9hcHAuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYXBwL2hvbWUuY3NzJztcblxuXG4vL1BhcnRpYWxzXG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhcnRpYWxzL2hlYWRlci5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9wYXJ0aWFscy9mb290ZXIuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvcGFydGlhbHMvYnV0dG9ucy5jc3MnO1xuXG4vL0FjdGl2aXR5XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FwcC9maWx0ZXIuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYXBwL2FjdGl2aXR5RGV0YWlsLmNzcyc7XG5cbi8vVXNlclxuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL2xvZ2luLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL3VzZXIvcHJvZmlsZS5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL3JlZ2lzdHJhdGlvbi5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL2NvbnRhY3QuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvdXNlci9yZXNldC1wYXNzd29yZC5jc3MnO1xuXG5cbi8vbGVnYWxcbmltcG9ydCAnLi8uLi9zdHlsZXMvbGVnYWwvbGVnYWwuY3NzJztcblxuLy9wYWdlc1xuXG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhZ2VzL2Fib3V0LmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhZ2VzL2ZhcS5jc3MnO1xuXG5cbi8vQWRtaW5cbmltcG9ydCAnLi8uLi9zdHlsZXMvYWRtaW4vX2FkbWluLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FkbWluL19zaWRlYmFyLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FkbWluL2FkbWluRGFzaGJvYXJkLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FkbWluL2FkbWluQWN0aXZpdHlGb3JtLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FkbWluL2FkbWluVXNlckZvcm0uY3NzJztcblxuLy8gSlNcbmltcG9ydCAnLi4vanMvaGVhZGVyLmpzJzsiLCIvLyBhc3NldHMvanMvaGVhZGVyLmpzXG4oKCkgPT4ge1xuICBmdW5jdGlvbiBpbml0SGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpO1xuICAgIGlmICghaGVhZGVyIHx8IGhlYWRlci5kYXRhc2V0LmpzSW5pdCA9PT0gJzEnKSByZXR1cm47IC8vIMOpdml0ZSBkb3VibGUgYmluZCAoaG90IHJlbG9hZCAvIFR1cmJvKVxuICAgIGhlYWRlci5kYXRhc2V0LmpzSW5pdCA9ICcxJztcblxuICAgIGNvbnN0IGJ1cmdlciA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gICAgY29uc3QgbmF2ICAgID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuXG4gICAgaWYgKCFidXJnZXIgfHwgIW5hdikgcmV0dXJuO1xuXG4gICAgY29uc3QgT1BFTl9DTEFTUyA9ICdpcy1vcGVuJztcbiAgICBjb25zdCBNUV9NT0JJTEUgID0gNzY4OyAvLyBkb2l0IGNvcnJlc3BvbmRyZSDDoCB0b24gQ1NTXG5cbiAgICAvLyBUb2dnbGUgbWVudVxuICAgIGZ1bmN0aW9uIHRvZ2dsZShvcGVuKSB7XG4gICAgICBjb25zdCB3aWxsT3BlbiA9IHR5cGVvZiBvcGVuID09PSAnYm9vbGVhbicgPyBvcGVuIDogIWhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoT1BFTl9DTEFTUyk7XG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShPUEVOX0NMQVNTLCB3aWxsT3Blbik7XG4gICAgICBidXJnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgd2lsbE9wZW4gPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9XG5cbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGUoKSk7XG5cbiAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIHVuIGxpZW4gZHUgbWVudVxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBhID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuICAgICAgaWYgKGEpIHRvZ2dsZShmYWxzZSk7XG4gICAgfSk7XG5cbiAgICAvLyBGZXJtZXIgc3VyIEVzY2FwZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgdG9nZ2xlKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIC8vIFF1YW5kIG9uIHJlcGFzc2UgZW4gZGVza3RvcCwgb24gbmV0dG9pZSBsJ8OpdGF0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IE1RX01PQklMRSkgdG9nZ2xlKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERPTSByZWFkeSArIGNvbXBhdCBTeW1mb255IFVYIFR1cmJvIChzaSB1dGlsaXPDqSlcbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdsb2FkaW5nJykgaW5pdEhlYWRlcigpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdEhlYWRlciwgeyBvbmNlOiB0cnVlIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpsb2FkJywgaW5pdEhlYWRlcik7IC8vIHNhbnMgZWZmZXQgc2kgVHVyYm8gbm9uIHByw6lzZW50XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImluaXRIZWFkZXIiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwianNJbml0IiwiYnVyZ2VyIiwibmF2IiwiT1BFTl9DTEFTUyIsIk1RX01PQklMRSIsInRvZ2dsZSIsIm9wZW4iLCJ3aWxsT3BlbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhIiwidGFyZ2V0IiwiY2xvc2VzdCIsImtleSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJyZWFkeVN0YXRlIiwib25jZSJdLCJzb3VyY2VSb290IjoiIn0=