(self["webpackChunk"] = self["webpackChunk"] || []).push([["activityDetail"],{

/***/ "./assets/js/activityDetail.js":
/*!*************************************!*\
  !*** ./assets/js/activityDetail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// ---------------------------Fonctionnalité aimer une activité -------------------------

// Affiche un message dans la console pour confirmer que le JS est bien chargé
console.log("JS chargé !");

// Attend que toute la page soit chargée avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
  console.log("JS chargé !");

  // Récupère tous les boutons qui permettent de "liker" une activité
  var buttons = document.querySelectorAll('.favorite-toggle');

  // Pour chaque bouton "favori" trouvé sur la page
  buttons.forEach(function (button) {
    // Ajoute un événement au clic sur le bouton
    button.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var activityId, response, result, icon, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            // Récupère l'ID de l'activité à partir de l'attribut data-id du bouton
            activityId = button.dataset.id;
            console.log("Bouton cliqué pour l'activité ID :", activityId);
            console.log("Tentative d'envoi de requête POST vers /favorite/toggle/" + activityId);
            _context.p = 1;
            _context.n = 2;
            return fetch("/favorite/toggle/".concat(activityId), {
              method: 'POST',
              headers: {
                'X-Requested-With': 'XMLHttpRequest' // indique qu'il s'agit d'une requête AJAX
              }
            });
          case 2:
            response = _context.v;
            _context.n = 3;
            return response.json();
          case 3:
            result = _context.v;
            console.log("Résultat JSON :", result);

            // Sélectionne l'icône à l'intérieur du bouton
            icon = button.querySelector('i'); // Si l'activité est maintenant dans les favoris
            if (result.favorited) {
              // Ajoute la classe CSS "favorited" pour changer la couleur du cœur (par ex. violet)
              icon.classList.add('favorited');
            } else {
              // Sinon, retire cette classe
              icon.classList.remove('favorited');
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            // Si une erreur survient (ex : problème réseau), affiche-la dans la console
            console.error("Erreur lors de la requête fetch :", _t);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    })));
  });
});

// ----------------------fonctionnalité partager une acitivité ------------------------
document.addEventListener('DOMContentLoaded', function () {
  var share = document.querySelector('.share');
  if (!share) return;
  var btn = share.querySelector('.share-toggle');
  var menu = share.querySelector('.share-menu');
  var title = encodeURIComponent(btn.dataset.title || document.title);
  var text = encodeURIComponent(btn.dataset.text || '');
  var url = encodeURIComponent(btn.dataset.url || location.href);

  // URLs de partage
  var links = {
    fb: "https://www.facebook.com/sharer/sharer.php?u=".concat(url),
    wa: "https://wa.me/?text=".concat(title, "%20").concat(url),
    li: "https://www.linkedin.com/sharing/share-offsite/?url=".concat(url),
    mail: "mailto:?subject=".concat(title, "&body=").concat(text, "%0D%0A").concat(url)
  };

  // Injecte les href
  share.querySelector('.share-fb').href = links.fb;
  share.querySelector('.share-wa').href = links.wa;
  share.querySelector('.share-li').href = links.li;
  share.querySelector('.share-mail').href = links.mail;

  // Ouvre/ferme le menu
  btn.addEventListener('click', function () {
    var shown = menu.hasAttribute('hidden') === false;
    menu.toggleAttribute('hidden', shown);
    btn.setAttribute('aria-expanded', String(!shown));
  });

  // Clique à l’extérieur -> fermer
  document.addEventListener('click', function (e) {
    if (!share.contains(e.target)) {
      menu.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Quand on clique un lien -> fermer le menu
  menu.addEventListener('click', function () {
    menu.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  });
});

// ------------------Fonctionnalité imprimer l'activité---------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var pb = document.querySelector('.print-btn');
  if (pb) pb.addEventListener('click', function () {
    return window.print();
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-b3887a"], () => (__webpack_exec__("./assets/js/activityDetail.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsRUFBRSxDQUFDO0lBQy9CaEIsR0FBRyxDQUFDZ0IsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7RUFDNUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUlGO0FBQ0EzQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDbEQsSUFBTThDLEVBQUUsR0FBRy9DLFFBQVEsQ0FBQ29CLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDL0MsSUFBSTJCLEVBQUUsRUFBRUEsRUFBRSxDQUFDOUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQUEsT0FBTStDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7RUFBQSxFQUFDO0FBQzVELENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FjdGl2aXR5RGV0YWlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvbmN0aW9ubmFsaXTDqSBhaW1lciB1bmUgYWN0aXZpdMOpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBBZmZpY2hlIHVuIG1lc3NhZ2UgZGFucyBsYSBjb25zb2xlIHBvdXIgY29uZmlybWVyIHF1ZSBsZSBKUyBlc3QgYmllbiBjaGFyZ8OpXG5jb25zb2xlLmxvZyhcIkpTIGNoYXJnw6kgIVwiKTtcblxuLy8gQXR0ZW5kIHF1ZSB0b3V0ZSBsYSBwYWdlIHNvaXQgY2hhcmfDqWUgYXZhbnQgZCdleMOpY3V0ZXIgbGUgY29kZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkpTIGNoYXJnw6kgIVwiKTtcblxuICAgIC8vIFLDqWN1cMOocmUgdG91cyBsZXMgYm91dG9ucyBxdWkgcGVybWV0dGVudCBkZSBcImxpa2VyXCIgdW5lIGFjdGl2aXTDqVxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmF2b3JpdGUtdG9nZ2xlJyk7XG5cbiAgICAvLyBQb3VyIGNoYXF1ZSBib3V0b24gXCJmYXZvcmlcIiB0cm91dsOpIHN1ciBsYSBwYWdlXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgLy8gQWpvdXRlIHVuIMOpdsOpbmVtZW50IGF1IGNsaWMgc3VyIGxlIGJvdXRvblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSw6ljdXDDqHJlIGwnSUQgZGUgbCdhY3Rpdml0w6kgw6AgcGFydGlyIGRlIGwnYXR0cmlidXQgZGF0YS1pZCBkdSBib3V0b25cbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5SWQgPSBidXR0b24uZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm91dG9uIGNsaXF1w6kgcG91ciBsJ2FjdGl2aXTDqSBJRCA6XCIsIGFjdGl2aXR5SWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZW50YXRpdmUgZCdlbnZvaSBkZSByZXF1w6p0ZSBQT1NUIHZlcnMgL2Zhdm9yaXRlL3RvZ2dsZS9cIiArIGFjdGl2aXR5SWQpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEVudm9pZSB1bmUgcmVxdcOqdGUgUE9TVCDDoCBTeW1mb255IHBvdXIgYWN0aXZlci9kw6lzYWN0aXZlciBsZSBmYXZvcmlcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvZmF2b3JpdGUvdG9nZ2xlLyR7YWN0aXZpdHlJZH1gLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsIC8vIGluZGlxdWUgcXUnaWwgcydhZ2l0IGQndW5lIHJlcXXDqnRlIEFKQVhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUsOpY3Vww6hyZSBsYSByw6lwb25zZSBKU09OIHJlbnZvecOpZSBwYXIgbGUgY29udHLDtGxldXIgU3ltZm9ueVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlLDqXN1bHRhdCBKU09OIDpcIiwgcmVzdWx0KTtcblxuICAgICAgICAgICAgICAgIC8vIFPDqWxlY3Rpb25uZSBsJ2ljw7RuZSDDoCBsJ2ludMOpcmlldXIgZHUgYm91dG9uXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTaSBsJ2FjdGl2aXTDqSBlc3QgbWFpbnRlbmFudCBkYW5zIGxlcyBmYXZvcmlzXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5mYXZvcml0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWpvdXRlIGxhIGNsYXNzZSBDU1MgXCJmYXZvcml0ZWRcIiBwb3VyIGNoYW5nZXIgbGEgY291bGV1ciBkdSBjxZN1ciAocGFyIGV4LiB2aW9sZXQpXG4gICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGVkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2lub24sIHJldGlyZSBjZXR0ZSBjbGFzc2VcbiAgICAgICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIFNpIHVuZSBlcnJldXIgc3VydmllbnQgKGV4IDogcHJvYmzDqG1lIHLDqXNlYXUpLCBhZmZpY2hlLWxhIGRhbnMgbGEgY29uc29sZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByZXF1w6p0ZSBmZXRjaCA6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1mb25jdGlvbm5hbGl0w6kgcGFydGFnZXIgdW5lIGFjaXRpdml0w6kgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBzaGFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGFyZScpO1xuICBpZiAoIXNoYXJlKSByZXR1cm47XG5cbiAgY29uc3QgYnRuICA9IHNoYXJlLnF1ZXJ5U2VsZWN0b3IoJy5zaGFyZS10b2dnbGUnKTtcbiAgY29uc3QgbWVudSA9IHNoYXJlLnF1ZXJ5U2VsZWN0b3IoJy5zaGFyZS1tZW51Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBlbmNvZGVVUklDb21wb25lbnQoYnRuLmRhdGFzZXQudGl0bGUgfHwgZG9jdW1lbnQudGl0bGUpO1xuICBjb25zdCB0ZXh0ICA9IGVuY29kZVVSSUNvbXBvbmVudChidG4uZGF0YXNldC50ZXh0IHx8ICcnKTtcbiAgY29uc3QgdXJsICAgPSBlbmNvZGVVUklDb21wb25lbnQoYnRuLmRhdGFzZXQudXJsIHx8IGxvY2F0aW9uLmhyZWYpO1xuXG4gIC8vIFVSTHMgZGUgcGFydGFnZVxuICBjb25zdCBsaW5rcyA9IHtcbiAgICBmYjogYGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSR7dXJsfWAsXG4gICAgd2E6IGBodHRwczovL3dhLm1lLz90ZXh0PSR7dGl0bGV9JTIwJHt1cmx9YCxcbiAgICBsaTogYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyaW5nL3NoYXJlLW9mZnNpdGUvP3VybD0ke3VybH1gLFxuICAgIG1haWw6IGBtYWlsdG86P3N1YmplY3Q9JHt0aXRsZX0mYm9keT0ke3RleHR9JTBEJTBBJHt1cmx9YFxuICB9O1xuXG4gIC8vIEluamVjdGUgbGVzIGhyZWZcbiAgc2hhcmUucXVlcnlTZWxlY3RvcignLnNoYXJlLWZiJykuaHJlZiAgID0gbGlua3MuZmI7XG4gIHNoYXJlLnF1ZXJ5U2VsZWN0b3IoJy5zaGFyZS13YScpLmhyZWYgICA9IGxpbmtzLndhO1xuICBzaGFyZS5xdWVyeVNlbGVjdG9yKCcuc2hhcmUtbGknKS5ocmVmICAgPSBsaW5rcy5saTtcbiAgc2hhcmUucXVlcnlTZWxlY3RvcignLnNoYXJlLW1haWwnKS5ocmVmID0gbGlua3MubWFpbDtcblxuICAvLyBPdXZyZS9mZXJtZSBsZSBtZW51XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBzaG93biA9IG1lbnUuaGFzQXR0cmlidXRlKCdoaWRkZW4nKSA9PT0gZmFsc2U7XG4gICAgbWVudS50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsIHNob3duKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgU3RyaW5nKCFzaG93bikpO1xuICB9KTtcblxuICAvLyBDbGlxdWUgw6AgbOKAmWV4dMOpcmlldXIgLT4gZmVybWVyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNoYXJlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFF1YW5kIG9uIGNsaXF1ZSB1biBsaWVuIC0+IGZlcm1lciBsZSBtZW51XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS1Gb25jdGlvbm5hbGl0w6kgaW1wcmltZXIgbCdhY3Rpdml0w6ktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IHBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW50LWJ0bicpO1xuICBpZiAocGIpIHBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93LnByaW50KCkpO1xufSk7Il0sIm5hbWVzIjpbImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfaW52b2tlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJfY2FsbGVlIiwiYWN0aXZpdHlJZCIsInJlc3BvbnNlIiwicmVzdWx0IiwiaWNvbiIsIl90IiwiX2NvbnRleHQiLCJkYXRhc2V0IiwiaWQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwicXVlcnlTZWxlY3RvciIsImZhdm9yaXRlZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImVycm9yIiwic2hhcmUiLCJidG4iLCJtZW51IiwidGl0bGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0ZXh0IiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwibGlua3MiLCJmYiIsIndhIiwibGkiLCJtYWlsIiwic2hvd24iLCJoYXNBdHRyaWJ1dGUiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJTdHJpbmciLCJjb250YWlucyIsInRhcmdldCIsInBiIiwid2luZG93IiwicHJpbnQiXSwic291cmNlUm9vdCI6IiJ9