import "../styles/home-page.scss";

/// wyświetla modal
///
///
document
  .querySelector(".js-dynamic-modal-toggle")
  .addEventListener("click", function () {
    // Here we create our dynamic modal
    if (!rating) {
      window.alert("error");
    } else {
      if (reviewValue > 3) {
        new Modal({
          title: "Hooray!",
          content: `Thank you for rating the product ${reviewValue}`,
        }).show();
      } else {
        new Modal({
          title: "We can do better!",
          content: `Thank you for rating the product ${reviewValue}`,
        }).show();
      }
    }
  });

let rating = false;
let reviewValue = 5;

/// wybieranie oceny
///
///
function selectReview() {
  const numbers = document.querySelectorAll(".review-component__number");
  const button = document.querySelector(".review-component__button");

  /// iteruje przez numbers, ustawia i pobiera atrybuty
  /// usuwa disabled, rating wysyła error, jeśli usunięto disabled
  ///
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      rating = true;
      reviewValue = this.dataset.review;
      if (this.dataset.active === "1") {
        rating = false;
        this.dataset.active = "0";
        button.disabled = true;
      } else {
        this.dataset.active = "1";
        for (let j = 0; j < numbers.length; j++) {
          if (j === i) {
            numbers[j].dataset.active = "1";
            button.disabled = false;
          } else {
            numbers[j].dataset.active = "0";
          }
        }
      }
    });
  }
}

selectReview();

/// opóźnia pojawienie się komponentu
///
const reviewComponent = document.querySelector(".review-component");
reviewComponent.remove();

const homePage = document.getElementById("home-page");
setTimeout(() => {
  homePage.appendChild(reviewComponent);
}, 3000);

///modal
///
///
var Modal = (function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var o = (n[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function (e, n, i) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0))
  );
})([
  function (e, t, n) {
    e.exports = n(1).default;
  },
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function s(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function r(e) {
      for (var t in e)
        Array.isArray(e[t])
          ? e[t].forEach(function (e) {
              r(e);
            })
          : null !== e[t] && "object" === p(e[t]) && Object.freeze(e[t]);
      return Object.freeze(e);
    }
    function a() {
      return (
        ((65536 * (1 + Math.random())) | 0).toString(16) +
        ((65536 * (1 + Math.random())) | 0).toString(16)
      );
    }
    function l(e, t, n) {
      var i = e.data || {};
      if (void 0 === n) {
        if (e.data && e.data[t]) return e.data[t];
        var o = e.getAttribute("data-" + t);
        return void 0 !== o ? o : null;
      }
      return (i[t] = n), (e.data = i), e;
    }
    function d(e, t) {
      return e.nodeName
        ? e
        : ((e = e.replace(/(\t|\n$)/g, "")),
          _ || (_ = document.createElement("div")),
          (_.innerHTML = ""),
          (_.innerHTML = e),
          !0 === t ? _.childNodes : _.childNodes[0]);
    }
    function c() {
      var e = void 0,
        t = void 0,
        n = void 0,
        i = document.createElement("div");
      return (
        v(i.style, { visibility: "hidden", width: "100px" }),
        document.body.appendChild(i),
        (n = i.offsetWidth),
        (i.style.overflow = "scroll"),
        (e = document.createElement("div")),
        (e.style.width = "100%"),
        i.appendChild(e),
        (t = n - e.offsetWidth),
        document.body.removeChild(i),
        t
      );
    }
    function h(e) {
      for (var t = [e]; e.parentNode; ) (e = e.parentNode), t.push(e);
      return t;
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      v =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        },
      p =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      f = n(2),
      m = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(f),
      _ = null,
      y = Object.freeze({
        el: null,
        animate: !0,
        animateClass: "fade",
        animateInClass: "show",
        appendTo: "body",
        backdrop: !0,
        keyboard: !0,
        title: !1,
        header: !0,
        content: !1,
        footer: !0,
        buttons: null,
        headerClose: !0,
        construct: !1,
        transition: 300,
        backdropTransition: 150,
      }),
      b = r({
        dialog: [
          {
            text: "Cancel",
            value: !1,
            attr: { class: "btn btn-default", "data-dismiss": "modal" },
          },
          {
            text: "OK",
            value: !0,
            attr: { class: "btn btn-primary", "data-dismiss": "modal" },
          },
        ],
        alert: [
          {
            text: "OK",
            attr: { class: "btn btn-primary", "data-dismiss": "modal" },
          },
        ],
        confirm: [
          {
            text: "Cancel",
            value: !1,
            attr: { class: "btn btn-default", "data-dismiss": "modal" },
          },
          {
            text: "OK",
            value: !0,
            attr: { class: "btn btn-primary", "data-dismiss": "modal" },
          },
        ],
      }),
      g = {
        container: '<div class="modal"></div>',
        dialog: '<div class="modal-dialog"></div>',
        content: '<div class="modal-content"></div>',
        header: '<div class="modal-header"></div>',
        headerClose:
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>',
        body: '<div class="modal-body"></div>',
        footer: '<div class="modal-footer"></div>',
        backdrop: '<div class="modal-backdrop"></div>',
      },
      k = (function (e) {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          if (
            ((n.id = a()),
            (n.el = null),
            (n._html = {}),
            (n._events = {}),
            (n._visible = !1),
            (n._pointerInContent = !1),
            (n._options = v({}, t.options, e)),
            (n._templates = v({}, t.templates, e.templates || {})),
            (n._html.appendTo = document.querySelector(n._options.appendTo)),
            (n._scrollbarWidth = c()),
            null === n._options.buttons &&
              (n._options.buttons = t.buttons.dialog),
            n._options.el)
          ) {
            var s = n._options.el;
            if (
              "string" == typeof n._options.el &&
              !(s = document.querySelector(n._options.el))
            )
              throw new Error(
                "Selector: DOM Element " + n._options.el + " not found."
              );
            l(s, "modal", n), (n.el = s);
          } else n._options.construct = !0;
          return n._options.construct ? n._render() : n._mapDom(), n;
        }
        return (
          s(t, e),
          u(t, null, [
            {
              key: "alert",
              value: function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return new t(
                  v(
                    {},
                    y,
                    {
                      title: e,
                      content: !1,
                      construct: !0,
                      headerClose: !1,
                      buttons: t.buttons.alert,
                    },
                    n
                  )
                );
              },
            },
            {
              key: "confirm",
              value: function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return new t(
                  v(
                    {},
                    y,
                    {
                      title: e,
                      content: !1,
                      construct: !0,
                      headerClose: !1,
                      buttons: t.buttons.confirm,
                    },
                    n
                  )
                );
              },
            },
            {
              key: "templates",
              set: function (e) {
                this._baseTemplates = e;
              },
              get: function () {
                return v({}, g, t._baseTemplates || {});
              },
            },
            {
              key: "buttons",
              set: function (e) {
                this._baseButtons = e;
              },
              get: function () {
                return v({}, b, t._baseButtons || {});
              },
            },
            {
              key: "options",
              set: function (e) {
                this._baseOptions = e;
              },
              get: function () {
                return v({}, y, t._baseOptions || {});
              },
            },
            {
              key: "version",
              get: function () {
                return "0.12.0";
              },
            },
          ]),
          u(t, [
            {
              key: "_render",
              value: function () {
                var e = this._html,
                  t = this._options,
                  n = this._templates,
                  i = !!t.animate && t.animateClass;
                return (
                  (e.container = d(n.container)),
                  (e.dialog = d(n.dialog)),
                  (e.content = d(n.content)),
                  (e.header = d(n.header)),
                  (e.headerClose = d(n.headerClose)),
                  (e.body = d(n.body)),
                  (e.footer = d(n.footer)),
                  i && e.container.classList.add(i),
                  this._setHeader(),
                  this._setContent(),
                  this._setFooter(),
                  (this.el = e.container),
                  e.dialog.appendChild(e.content),
                  e.container.appendChild(e.dialog),
                  this
                );
              },
            },
            {
              key: "_mapDom",
              value: function () {
                var e = this._html,
                  t = this._options;
                return (
                  this.el.classList.contains(t.animateClass) &&
                    (t.animate = !0),
                  (e.container = this.el),
                  (e.dialog = this.el.querySelector(".modal-dialog")),
                  (e.content = this.el.querySelector(".modal-content")),
                  (e.header = this.el.querySelector(".modal-header")),
                  (e.headerClose = this.el.querySelector(
                    ".modal-header .close"
                  )),
                  (e.body = this.el.querySelector(".modal-body")),
                  (e.footer = this.el.querySelector(".modal-footer")),
                  this._setHeader(),
                  this._setContent(),
                  this._setFooter(),
                  this
                );
              },
            },
            {
              key: "_setHeader",
              value: function () {
                var e = this._html,
                  t = this._options;
                t.header &&
                  e.header &&
                  (t.title.nodeName
                    ? (e.header.innerHTML = t.title.outerHTML)
                    : "string" == typeof t.title &&
                      (e.header.innerHTML =
                        '<h4 class="modal-title">' + t.title + "</h4>"),
                  null === this.el &&
                    e.headerClose &&
                    t.headerClose &&
                    e.header.appendChild(e.headerClose),
                  t.construct && e.content.appendChild(e.header));
              },
            },
            {
              key: "_setContent",
              value: function () {
                var e = this._html,
                  t = this._options;
                t.content &&
                  e.body &&
                  ("string" == typeof t.content
                    ? (e.body.innerHTML = t.content)
                    : (e.body.innerHTML = t.content.outerHTML),
                  t.construct && e.content.appendChild(e.body));
              },
            },
            {
              key: "_setFooter",
              value: function () {
                var e = this._html,
                  t = this._options;
                t.footer &&
                  e.footer &&
                  (t.footer.nodeName
                    ? (e.footer.ineerHTML = t.footer.outerHTML)
                    : "string" == typeof t.footer
                    ? (e.footer.innerHTML = t.footer)
                    : e.footer.children.length ||
                      t.buttons.forEach(function (t) {
                        var n = document.createElement("button");
                        l(n, "button", t),
                          (n.innerHTML = t.text),
                          n.setAttribute("type", "button");
                        for (var i in t.attr) n.setAttribute(i, t.attr[i]);
                        e.footer.appendChild(n);
                      }),
                  t.construct && e.content.appendChild(e.footer));
              },
            },
            {
              key: "_setEvents",
              value: function () {
                var e = (this._options, this._html);
                (this._events.keydownHandler =
                  this._handleKeydownEvent.bind(this)),
                  document.body.addEventListener(
                    "keydown",
                    this._events.keydownHandler
                  ),
                  (this._events.mousedownHandler =
                    this._handleMousedownEvent.bind(this)),
                  e.container.addEventListener(
                    "mousedown",
                    this._events.mousedownHandler
                  ),
                  (this._events.clickHandler =
                    this._handleClickEvent.bind(this)),
                  e.container.addEventListener(
                    "click",
                    this._events.clickHandler
                  ),
                  (this._events.resizeHandler =
                    this._handleResizeEvent.bind(this)),
                  window.addEventListener("resize", this._events.resizeHandler);
              },
            },
            {
              key: "_handleMousedownEvent",
              value: function (e) {
                var t = this;
                (this._pointerInContent = !1),
                  h(e.target).every(function (e) {
                    return (
                      !e.classList ||
                      !e.classList.contains("modal-content") ||
                      ((t._pointerInContent = !0), !1)
                    );
                  });
              },
            },
            {
              key: "_handleClickEvent",
              value: function (e) {
                var t = this;
                h(e.target).every(function (n) {
                  return !(
                    "HTML" === n.tagName ||
                    (!0 !== t._options.backdrop &&
                      n.classList.contains("modal")) ||
                    n.classList.contains("modal-content") ||
                    ("modal" === n.getAttribute("data-dismiss")
                      ? (t.emit("dismiss", t, e, l(e.target, "button")),
                        t.hide(),
                        1)
                      : !t._pointerInContent &&
                        n.classList.contains("modal") &&
                        (t.emit("dismiss", t, e, null), t.hide(), 1))
                  );
                }),
                  (this._pointerInContent = !1);
              },
            },
            {
              key: "_handleKeydownEvent",
              value: function (e) {
                27 === e.which &&
                  this._options.keyboard &&
                  (this.emit("dismiss", this, e, null), this.hide());
              },
            },
            {
              key: "_handleResizeEvent",
              value: function (e) {
                this._resize();
              },
            },
            {
              key: "show",
              value: function () {
                var e = this,
                  t = this._options,
                  n = this._html;
                return (
                  this.emit("show", this),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  document.body.classList.add("modal-open"),
                  t.construct && n.appendTo.appendChild(n.container),
                  (n.container.style.display = "block"),
                  (n.container.scrollTop = 0),
                  !1 !== t.backdrop
                    ? (this.once("showBackdrop", function () {
                        e._setEvents(),
                          t.animate && n.container.offsetWidth,
                          n.container.classList.add(t.animateInClass),
                          setTimeout(function () {
                            (e._visible = !0), e.emit("shown", e);
                          }, t.transition);
                      }),
                      this._backdrop())
                    : (this._setEvents(),
                      t.animate && n.container.offsetWidth,
                      n.container.classList.add(t.animateInClass),
                      setTimeout(function () {
                        (e._visible = !0), e.emit("shown", e);
                      }, t.transition)),
                  this._resize(),
                  this
                );
              },
            },
            {
              key: "toggle",
              value: function () {
                this._visible ? this.hide() : this.show();
              },
            },
            {
              key: "_resize",
              value: function () {
                var e =
                  this._html.container.scrollHeight >
                  document.documentElement.clientHeight;
                (this._html.container.style.paddingLeft =
                  !this.bodyIsOverflowing && e
                    ? this._scrollbarWidth + "px"
                    : ""),
                  (this._html.container.style.paddingRight =
                    this.bodyIsOverflowing && !e
                      ? `${this._scrollbarWidth}px`
                      : "");
              },
            },
            {
              key: "_backdrop",
              value: function () {
                var e = this,
                  t = this._html,
                  n = this._templates,
                  i = this._options,
                  o = !!i.animate && i.animateClass;
                (t.backdrop = d(n.backdrop)),
                  o && t.backdrop.classList.add(o),
                  t.appendTo.appendChild(t.backdrop),
                  o && t.backdrop.offsetWidth,
                  t.backdrop.classList.add(i.animateInClass),
                  setTimeout(function () {
                    e.emit("showBackdrop", e);
                  }, this._options.backdropTransition);
              },
            },
            {
              key: "hide",
              value: function () {
                var e = this,
                  t = this._html,
                  n = this._options,
                  i = t.container.classList;
                if (
                  (this.emit("hide", this),
                  i.remove(n.animateInClass),
                  n.backdrop)
                ) {
                  t.backdrop.classList.remove(n.animateInClass);
                }
                return (
                  this._removeEvents(),
                  setTimeout(function () {
                    document.body.classList.remove("modal-open"),
                      (document.body.style.paddingRight = e.originalBodyPad);
                  }, n.backdropTransition),
                  setTimeout(function () {
                    n.backdrop && t.backdrop.parentNode.removeChild(t.backdrop),
                      (t.container.style.display = "none"),
                      n.construct &&
                        t.container.parentNode.removeChild(t.container),
                      (e._visible = !1),
                      e.emit("hidden", e);
                  }, n.transition),
                  this
                );
              },
            },
            {
              key: "_removeEvents",
              value: function () {
                this._events.keydownHandler &&
                  document.body.removeEventListener(
                    "keydown",
                    this._events.keydownHandler
                  ),
                  this._html.container.removeEventListener(
                    "mousedown",
                    this._events.mousedownHandler
                  ),
                  this._html.container.removeEventListener(
                    "click",
                    this._events.clickHandler
                  ),
                  window.removeEventListener(
                    "resize",
                    this._events.resizeHandler
                  );
              },
            },
            {
              key: "_checkScrollbar",
              value: function () {
                this.bodyIsOverflowing =
                  document.body.clientWidth < window.innerWidth;
              },
            },
            {
              key: "_setScrollbar",
              value: function () {
                if (
                  ((this.originalBodyPad =
                    document.body.style.paddingRight || ""),
                  this.bodyIsOverflowing)
                ) {
                  var e = parseInt(this.originalBodyPad || 0, 10);
                  document.body.style.paddingRight =
                    e + this._scrollbarWidth + "px";
                }
              },
            },
          ]),
          t
        );
      })(m.default);
    t.default = k;
  },
  function (e, t) {
    function n() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function i(e) {
      return "function" == typeof e;
    }
    function o(e) {
      return "number" == typeof e;
    }
    function s(e) {
      return "object" == typeof e && null !== e;
    }
    function r(e) {
      return void 0 === e;
    }
    (e.exports = n),
      (n.EventEmitter = n),
      (n.prototype._events = void 0),
      (n.prototype._maxListeners = void 0),
      (n.defaultMaxListeners = 10),
      (n.prototype.setMaxListeners = function (e) {
        if (!o(e) || e < 0 || isNaN(e))
          throw TypeError("n must be a positive number");
        return (this._maxListeners = e), this;
      }),
      (n.prototype.emit = function (e) {
        var t, n, o, a, l, d;
        if (
          (this._events || (this._events = {}),
          "error" === e &&
            (!this._events.error ||
              (s(this._events.error) && !this._events.error.length)))
        ) {
          if ((t = arguments[1]) instanceof Error) throw t;
          var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((c.context = t), c);
        }
        if (((n = this._events[e]), r(n))) return !1;
        if (i(n))
          switch (arguments.length) {
            case 1:
              n.call(this);
              break;
            case 2:
              n.call(this, arguments[1]);
              break;
            case 3:
              n.call(this, arguments[1], arguments[2]);
              break;
            default:
              (a = Array.prototype.slice.call(arguments, 1)), n.apply(this, a);
          }
        else if (s(n))
          for (
            a = Array.prototype.slice.call(arguments, 1),
              d = n.slice(),
              o = d.length,
              l = 0;
            l < o;
            l++
          )
            d[l].apply(this, a);
        return !0;
      }),
      (n.prototype.addListener = function (e, t) {
        var o;
        if (!i(t)) throw TypeError("listener must be a function");
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit("newListener", e, i(t.listener) ? t.listener : t),
          this._events[e]
            ? s(this._events[e])
              ? this._events[e].push(t)
              : (this._events[e] = [this._events[e], t])
            : (this._events[e] = t),
          s(this._events[e]) &&
            !this._events[e].warned &&
            (o = r(this._maxListeners)
              ? n.defaultMaxListeners
              : this._maxListeners) &&
            o > 0 &&
            this._events[e].length > o &&
            ((this._events[e].warned = !0),
            console.error(
              "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
              this._events[e].length
            ),
            "function" == typeof console.trace && console.trace()),
          this
        );
      }),
      (n.prototype.on = n.prototype.addListener),
      (n.prototype.once = function (e, t) {
        function n() {
          this.removeListener(e, n), o || ((o = !0), t.apply(this, arguments));
        }
        if (!i(t)) throw TypeError("listener must be a function");
        var o = !1;
        return (n.listener = t), this.on(e, n), this;
      }),
      (n.prototype.removeListener = function (e, t) {
        var n, o, r, a;
        if (!i(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (
          ((n = this._events[e]),
          (r = n.length),
          (o = -1),
          n === t || (i(n.listener) && n.listener === t))
        )
          delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (s(n)) {
          for (a = r; a-- > 0; )
            if (n[a] === t || (n[a].listener && n[a].listener === t)) {
              o = a;
              break;
            }
          if (o < 0) return this;
          1 === n.length
            ? ((n.length = 0), delete this._events[e])
            : n.splice(o, 1),
            this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }),
      (n.prototype.removeAllListeners = function (e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[e] && delete this._events[e],
            this
          );
        if (0 === arguments.length) {
          for (t in this._events)
            "removeListener" !== t && this.removeAllListeners(t);
          return (
            this.removeAllListeners("removeListener"), (this._events = {}), this
          );
        }
        if (((n = this._events[e]), i(n))) this.removeListener(e, n);
        else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this;
      }),
      (n.prototype.listeners = function (e) {
        return this._events && this._events[e]
          ? i(this._events[e])
            ? [this._events[e]]
            : this._events[e].slice()
          : [];
      }),
      (n.prototype.listenerCount = function (e) {
        if (this._events) {
          var t = this._events[e];
          if (i(t)) return 1;
          if (t) return t.length;
        }
        return 0;
      }),
      (n.listenerCount = function (e, t) {
        return e.listenerCount(t);
      });
  },
]);