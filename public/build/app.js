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
/* harmony import */ var _styles_pages_error_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../styles/pages/error.css */ "./assets/styles/pages/error.css");
/* harmony import */ var _styles_admin_admin_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../styles/admin/_admin.css */ "./assets/styles/admin/_admin.css");
/* harmony import */ var _styles_admin_sidebar_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../styles/admin/_sidebar.css */ "./assets/styles/admin/_sidebar.css");
/* harmony import */ var _styles_admin_adminDashboard_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../styles/admin/adminDashboard.css */ "./assets/styles/admin/adminDashboard.css");
/* harmony import */ var _styles_admin_adminActivityForm_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../styles/admin/adminActivityForm.css */ "./assets/styles/admin/adminActivityForm.css");
/* harmony import */ var _styles_admin_adminUserForm_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../styles/admin/adminUserForm.css */ "./assets/styles/admin/adminUserForm.css");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../js/header.js */ "./assets/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_21__);
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

/***/ "./assets/styles/pages/error.css":
/*!***************************************!*\
  !*** ./assets/styles/pages/error.css ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3Q0o7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vX2FkbWluLmNzcz8zMzM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vX3NpZGViYXIuY3NzPzE4ZGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hZG1pbi9hZG1pbkFjdGl2aXR5Rm9ybS5jc3M/MDE1NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FkbWluL2FkbWluRGFzaGJvYXJkLmNzcz9iN2VhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYWRtaW5Vc2VyRm9ybS5jc3M/NzljZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC9hY3Rpdml0eURldGFpbC5jc3M/NmVkNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC9hcHAuY3NzPzZhNzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAvZmlsdGVyLmNzcz9hNWM2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwL2hvbWUuY3NzPzUyOWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9sZWdhbC9sZWdhbC5jc3M/NjBjNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3BhZ2VzL2Fib3V0LmNzcz80ODc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvcGFnZXMvZXJyb3IuY3NzPzZlODEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYWdlcy9mYXEuY3NzPzI3OTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9wYXJ0aWFscy9idXR0b25zLmNzcz8yZWFhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvZm9vdGVyLmNzcz80ZjEwIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvcGFydGlhbHMvaGVhZGVyLmNzcz8xOWMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9jb250YWN0LmNzcz9iMGQ3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9sb2dpbi5jc3M/YjBmNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3VzZXIvcHJvZmlsZS5jc3M/MTg3OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL3VzZXIvcmVnaXN0cmF0aW9uLmNzcz9lNWMyIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvdXNlci9yZXNldC1wYXNzd29yZC5jc3M/YzY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cblxuaW1wb3J0ICcuLy4uL3N0eWxlcy9hcHAvYXBwLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FwcC9ob21lLmNzcyc7XG5cblxuLy9QYXJ0aWFsc1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9wYXJ0aWFscy9oZWFkZXIuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvcGFydGlhbHMvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL3BhcnRpYWxzL2J1dHRvbnMuY3NzJztcblxuLy9BY3Rpdml0eVxuaW1wb3J0ICcuLy4uL3N0eWxlcy9hcHAvZmlsdGVyLmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL2FwcC9hY3Rpdml0eURldGFpbC5jc3MnO1xuXG4vL1VzZXJcbmltcG9ydCAnLi8uLi9zdHlsZXMvdXNlci9sb2dpbi5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy91c2VyL3Byb2ZpbGUuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvdXNlci9yZWdpc3RyYXRpb24uY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvdXNlci9jb250YWN0LmNzcyc7XG5pbXBvcnQgJy4vLi4vc3R5bGVzL3VzZXIvcmVzZXQtcGFzc3dvcmQuY3NzJztcblxuXG4vL2xlZ2FsXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2xlZ2FsL2xlZ2FsLmNzcyc7XG5cbi8vcGFnZXNcblxuaW1wb3J0ICcuLy4uL3N0eWxlcy9wYWdlcy9hYm91dC5jc3MnO1xuaW1wb3J0ICcuLy4uL3N0eWxlcy9wYWdlcy9mYXEuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvcGFnZXMvZXJyb3IuY3NzJztcblxuLy9BZG1pblxuaW1wb3J0ICcuLy4uL3N0eWxlcy9hZG1pbi9fYWRtaW4uY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYWRtaW4vX3NpZGViYXIuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYWRtaW4vYWRtaW5EYXNoYm9hcmQuY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYWRtaW4vYWRtaW5BY3Rpdml0eUZvcm0uY3NzJztcbmltcG9ydCAnLi8uLi9zdHlsZXMvYWRtaW4vYWRtaW5Vc2VyRm9ybS5jc3MnO1xuXG4vLyBKU1xuaW1wb3J0ICcuLi9qcy9oZWFkZXIuanMnOyIsIi8vIGFzc2V0cy9qcy9oZWFkZXIuanNcbigoKSA9PiB7XG4gIGZ1bmN0aW9uIGluaXRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJyk7XG4gICAgaWYgKCFoZWFkZXIgfHwgaGVhZGVyLmRhdGFzZXQuanNJbml0ID09PSAnMScpIHJldHVybjsgLy8gw6l2aXRlIGRvdWJsZSBiaW5kIChob3QgcmVsb2FkIC8gVHVyYm8pXG4gICAgaGVhZGVyLmRhdGFzZXQuanNJbml0ID0gJzEnO1xuXG4gICAgY29uc3QgYnVyZ2VyID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbiAgICBjb25zdCBuYXYgICAgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XG5cbiAgICBpZiAoIWJ1cmdlciB8fCAhbmF2KSByZXR1cm47XG5cbiAgICBjb25zdCBPUEVOX0NMQVNTID0gJ2lzLW9wZW4nO1xuICAgIGNvbnN0IE1RX01PQklMRSAgPSA3Njg7IC8vIGRvaXQgY29ycmVzcG9uZHJlIMOgIHRvbiBDU1NcblxuICAgIC8vIFRvZ2dsZSBtZW51XG4gICAgZnVuY3Rpb24gdG9nZ2xlKG9wZW4pIHtcbiAgICAgIGNvbnN0IHdpbGxPcGVuID0gdHlwZW9mIG9wZW4gPT09ICdib29sZWFuJyA/IG9wZW4gOiAhaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhPUEVOX0NMQVNTKTtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKE9QRU5fQ0xBU1MsIHdpbGxPcGVuKTtcbiAgICAgIGJ1cmdlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB3aWxsT3BlbiA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICAgIH1cblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZSgpKTtcblxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgdW4gbGllbiBkdSBtZW51XG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBlLnRhcmdldC5jbG9zZXN0KCdhJyk7XG4gICAgICBpZiAoYSkgdG9nZ2xlKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIC8vIEZlcm1lciBzdXIgRXNjYXBlXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB0b2dnbGUoZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgLy8gUXVhbmQgb24gcmVwYXNzZSBlbiBkZXNrdG9wLCBvbiBuZXR0b2llIGwnw6l0YXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gTVFfTU9CSUxFKSB0b2dnbGUoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRE9NIHJlYWR5ICsgY29tcGF0IFN5bWZvbnkgVVggVHVyYm8gKHNpIHV0aWxpc8OpKVxuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2xvYWRpbmcnKSBpbml0SGVhZGVyKCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0SGVhZGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3R1cmJvOmxvYWQnLCBpbml0SGVhZGVyKTsgLy8gc2FucyBlZmZldCBzaSBUdXJibyBub24gcHLDqXNlbnRcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaW5pdEhlYWRlciIsImhlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJqc0luaXQiLCJidXJnZXIiLCJuYXYiLCJPUEVOX0NMQVNTIiwiTVFfTU9CSUxFIiwidG9nZ2xlIiwib3BlbiIsIndpbGxPcGVuIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImEiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwia2V5Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlYWR5U3RhdGUiLCJvbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==