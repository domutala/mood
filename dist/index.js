import { defineComponent as On, openBlock as wt, createElementBlock as Tt, normalizeStyle as Ci, createElementVNode as Ye, pushScopeId as Iv, popScopeId as Pv, ref as $n, onMounted as bo, onBeforeUnmount as Ru, onDeactivated as Nu, normalizeClass as dr, renderSlot as dn, computed as af, unref as pf, watch as Mv, createCommentVNode as Ou, toDisplayString as Bv, mergeProps as gl } from "vue";
function qv() {
  vl();
  const h = ["title", "og:title", "description", "og:description"], d = document.querySelector("head");
  for (const s of h) {
    const S = d.querySelector(`meta[name='${s}']`);
    S && S.remove();
  }
}
function vl(h = "") {
  const d = document.querySelector("head");
  let s = d.querySelector("title");
  s || (s = document.createElement("title"), d.appendChild(s)), s.innerHTML = h;
}
function $v(h, d) {
  const s = document.querySelector("head");
  let S = s.querySelector(`meta[name='${h}']`);
  S || (S = document.createElement("meta"), S.name = h, s.appendChild(S)), S.content = d;
}
function Wv({ title: h, metas: d } = {}) {
  if (vl(h), d)
    for (const s of d)
      $v(s.name, s.content);
}
const kv = {
  install(h) {
    h.config.globalProperties.$mood.useMeta = Wv, h.mixin({
      mounted() {
        h.config.globalProperties.$moodMetaInit || (h.config.globalProperties.$moodMetaInit = !0, this.$watch("$router.currentRoute", qv, { deep: !0 }));
      }
    });
  }
}, Hv = ["href"], Fv = /* @__PURE__ */ On({
  __name: "MIcon",
  props: {
    name: { required: !0, type: String },
    width: { default: "18px", type: String },
    height: { default: "18px", type: String }
  },
  setup(h) {
    return (d, s) => (wt(), Tt("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: Ci({ width: h.width, height: h.height })
    }, [
      Ye("use", {
        href: `/mi/icons/micons.svg#${h.name}`
      }, null, 8, Hv)
    ], 4));
  }
});
const Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fv
}, Symbol.toStringTag, { value: "Module" }));
const yl = (h, d) => {
  const s = h.__vccOpts || h;
  for (const [S, E] of d)
    s[S] = E;
  return s;
}, zv = {}, ml = (h) => (Iv("data-v-d7aa3fdd"), h = h(), Pv(), h), jv = {
  class: "m-loading",
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg"
}, Gv = /* @__PURE__ */ ml(() => /* @__PURE__ */ Ye("g", null, [
  /* @__PURE__ */ Ye("circle", {
    cx: "16",
    cy: "16",
    fill: "none",
    r: "14",
    "stroke-width": "4",
    style: { stroke: "currentColor", opacity: "0.2" }
  })
], -1)), Vv = /* @__PURE__ */ ml(() => /* @__PURE__ */ Ye("g", { class: "circle__svg-circle" }, [
  /* @__PURE__ */ Ye("circle", {
    cx: "16",
    cy: "16",
    fill: "none",
    r: "14",
    "stroke-width": "4",
    style: { stroke: "currentColor", "stroke-dasharray": "80px", "stroke-dashoffset": "60px" }
  })
], -1)), Xv = [
  Gv,
  Vv
];
function Yv(h, d) {
  return wt(), Tt("svg", jv, Xv);
}
const Kv = /* @__PURE__ */ yl(zv, [["render", Yv], ["__scopeId", "data-v-d7aa3fdd"]]), Zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kv
}, Symbol.toStringTag, { value: "Module" })), Jv = /* @__PURE__ */ On({
  __name: "MModal",
  props: {
    blur: { type: Boolean, default: !1 },
    closeOnBack: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 }
  },
  emits: ["open", "close"],
  setup(h, { emit: d }) {
    const s = h, S = $n();
    bo(E);
    function E() {
      if (!S.value)
        return;
      window.addEventListener("keydown", k);
      const X = document.body;
      X && (X.style.overflow = "hidden", X.appendChild(S.value), d("open"));
    }
    function B() {
      d("close");
    }
    function W() {
      s.closeOnBack && B();
    }
    function k(X) {
      if (X.keyCode === 27 && s.closeOnEsc) {
        const G = document.querySelectorAll(".m-modal");
        G[G.length - 1] === S.value && B();
      }
    }
    function z() {
      const X = document.body;
      window.removeEventListener("keydown", k);
      const G = document.querySelectorAll(".m-modal");
      X && G.length <= 1 && (X.style.overflowY = "scroll"), !!S.value && X && S.value.parentNode === X && X.removeChild(S.value);
    }
    return Ru(z), Nu(z), (X, G) => (wt(), Tt("div", {
      ref_key: "el",
      ref: S,
      class: dr(["m-modal", { blur: h.blur }])
    }, [
      Ye("div", {
        class: "m-modal-back",
        onClick: W
      }),
      dn(X.$slots, "default")
    ], 2));
  }
});
const Qv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jv
}, Symbol.toStringTag, { value: "Module" })), df = (h, d = "m") => {
  let s;
  for (; !s; ) {
    let S = Math.random().toString().split(".").pop();
    S = S.slice(0, 6), document.querySelector(`[${d}-${h}="${S}"]`) || (s = S);
  }
  return s;
}, _l = (h) => (h = bl(h), h = xl(h), h), bl = (h) => {
  const d = /\B(#[a-zA-Z0-9_áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+\b)(?!;)/gm, s = '<span class="__hashtag">$1</span>';
  return h = h.replace(d, s), h;
}, xl = (h) => {
  const d = /\B(@[a-zA-Z0-9_]+\b)(?!;)/gm, s = '<span class="__cit">$1</span>';
  return h = h.replace(d, s), h;
}, ey = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateMarker: df,
  textFormatPost: _l,
  textFormatPostHashtag: bl,
  textFormatPostCit: xl
}, Symbol.toStringTag, { value: "Module" })), ty = ["m-navbar"], ny = /* @__PURE__ */ On({
  __name: "MNavbar",
  props: {
    fixAlign: {
      type: String,
      validator: (h) => h ? ["m-navbar-horizontal", "vertical"].includes(h) : !0
    },
    verticalSplitAt: { default: 992, type: Number },
    horizontalAt: { default: 500, type: Number },
    withBorder: { default: !0, type: Boolean }
  },
  emits: [
    "m-navbar-vertical",
    "m-navbar-horizontal",
    "m-navbar-vertical-split",
    "m-navbar-align"
  ],
  setup(h, { emit: d }) {
    const s = h, S = $n(""), E = $n(!0), B = $n(!0);
    bo(() => {
      S.value = df("navbar"), window.addEventListener("resize", k), setTimeout(() => {
        const X = document.querySelector(`[m-navbar="${S.value}"]`);
        document.body.appendChild(X);
        const G = E.value ? "m-navbar-vertical" : "m-navbar-horizontal";
        W(G, E.value), W("m-navbar-align", G), W("m-navbar-vertical-split", B.value), k();
      }, 100);
    });
    const W = (X, G) => {
      const ge = new CustomEvent(X, { detail: G });
      document.dispatchEvent(ge), d(X, G);
    }, k = () => {
      if (!s.fixAlign) {
        const X = E.value;
        if (E.value = window.innerWidth > s.horizontalAt, X !== E.value) {
          const G = E.value ? "m-navbar-vertical" : "m-navbar-horizontal";
          W(G, E.value), W("m-navbar-align", G);
        }
      }
      if (E.value) {
        const X = B.value;
        B.value = window.innerWidth < s.verticalSplitAt, X !== B.value && W("m-navbar-vertical-split", B.value);
      }
    };
    function z() {
      const X = document.querySelector(`[m-navbar="${S.value}"]`);
      X && X.parentNode && X.parentNode.removeChild(X), window.removeEventListener("resize", k);
    }
    return Ru(z), Nu(z), (X, G) => (wt(), Tt("div", {
      "m-navbar": S.value,
      class: dr(["m-navbar", [
        {
          vertical: E.value,
          split: B.value,
          "with-border": h.withBorder
        }
      ]])
    }, [
      dn(X.$slots, "default")
    ], 10, ty));
  }
}), ry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ny
}, Symbol.toStringTag, { value: "Module" })), iy = /* @__PURE__ */ On({
  __name: "MNavbarContainer",
  props: {
    type: {
      required: !0,
      type: String,
      validator: (h) => ["first", "last", "middle"].includes(h)
    },
    hideVerticalAlign: { default: !1, type: Boolean },
    hideVerticalAllAlign: { default: !1, type: Boolean },
    hideVerticalSplitAlign: { default: !1, type: Boolean },
    hideHorizontalAlign: { default: !1, type: Boolean }
  },
  setup(h) {
    const d = h, s = af(() => d.type);
    return (S, E) => (wt(), Tt("div", {
      class: dr(["m-navbar__container", [
        pf(s),
        {
          "hide-vertical-align": h.hideVerticalAlign,
          "hide-vertical-all-align": h.hideVerticalAllAlign,
          "hide-vertical-split-align": h.hideVerticalSplitAlign,
          "hide-horizontal-align": h.hideHorizontalAlign
        }
      ]])
    }, [
      dn(S.$slots, "default")
    ], 2));
  }
}), oy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: iy
}, Symbol.toStringTag, { value: "Module" }));
var tn = "top", An = "bottom", En = "right", nn = "left", Iu = "auto", xo = [tn, An, En, nn], Ai = "start", mo = "end", uy = "clippingParents", wl = "viewport", go = "popper", ay = "reference", il = /* @__PURE__ */ xo.reduce(function(h, d) {
  return h.concat([d + "-" + Ai, d + "-" + mo]);
}, []), Tl = /* @__PURE__ */ [].concat(xo, [Iu]).reduce(function(h, d) {
  return h.concat([d, d + "-" + Ai, d + "-" + mo]);
}, []), fy = "beforeRead", sy = "read", ly = "afterRead", cy = "beforeMain", py = "main", dy = "afterMain", hy = "beforeWrite", gy = "write", vy = "afterWrite", ff = [fy, sy, ly, cy, py, dy, hy, gy, vy];
function Zn(h) {
  return h ? (h.nodeName || "").toLowerCase() : null;
}
function Ln(h) {
  if (h == null)
    return window;
  if (h.toString() !== "[object Window]") {
    var d = h.ownerDocument;
    return d && d.defaultView || window;
  }
  return h;
}
function Qr(h) {
  var d = Ln(h).Element;
  return h instanceof d || h instanceof Element;
}
function hn(h) {
  var d = Ln(h).HTMLElement;
  return h instanceof d || h instanceof HTMLElement;
}
function hf(h) {
  if (typeof ShadowRoot > "u")
    return !1;
  var d = Ln(h).ShadowRoot;
  return h instanceof d || h instanceof ShadowRoot;
}
function yy(h) {
  var d = h.state;
  Object.keys(d.elements).forEach(function(s) {
    var S = d.styles[s] || {}, E = d.attributes[s] || {}, B = d.elements[s];
    !hn(B) || !Zn(B) || (Object.assign(B.style, S), Object.keys(E).forEach(function(W) {
      var k = E[W];
      k === !1 ? B.removeAttribute(W) : B.setAttribute(W, k === !0 ? "" : k);
    }));
  });
}
function my(h) {
  var d = h.state, s = {
    popper: {
      position: d.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(d.elements.popper.style, s.popper), d.styles = s, d.elements.arrow && Object.assign(d.elements.arrow.style, s.arrow), function() {
    Object.keys(d.elements).forEach(function(S) {
      var E = d.elements[S], B = d.attributes[S] || {}, W = Object.keys(d.styles.hasOwnProperty(S) ? d.styles[S] : s[S]), k = W.reduce(function(z, X) {
        return z[X] = "", z;
      }, {});
      !hn(E) || !Zn(E) || (Object.assign(E.style, k), Object.keys(B).forEach(function(z) {
        E.removeAttribute(z);
      }));
    });
  };
}
const _y = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yy,
  effect: my,
  requires: ["computeStyles"]
};
function Wn(h) {
  return h.split("-")[0];
}
var Jr = Math.max, Lu = Math.min, Ei = Math.round;
function sf() {
  var h = navigator.userAgentData;
  return h != null && h.brands ? h.brands.map(function(d) {
    return d.brand + "/" + d.version;
  }).join(" ") : navigator.userAgent;
}
function Sl() {
  return !/^((?!chrome|android).)*safari/i.test(sf());
}
function Oi(h, d, s) {
  d === void 0 && (d = !1), s === void 0 && (s = !1);
  var S = h.getBoundingClientRect(), E = 1, B = 1;
  d && hn(h) && (E = h.offsetWidth > 0 && Ei(S.width) / h.offsetWidth || 1, B = h.offsetHeight > 0 && Ei(S.height) / h.offsetHeight || 1);
  var W = Qr(h) ? Ln(h) : window, k = W.visualViewport, z = !Sl() && s, X = (S.left + (z && k ? k.offsetLeft : 0)) / E, G = (S.top + (z && k ? k.offsetTop : 0)) / B, ge = S.width / E, Te = S.height / B;
  return {
    width: ge,
    height: Te,
    top: G,
    right: X + ge,
    bottom: G + Te,
    left: X,
    x: X,
    y: G
  };
}
function gf(h) {
  var d = Oi(h), s = h.offsetWidth, S = h.offsetHeight;
  return Math.abs(d.width - s) <= 1 && (s = d.width), Math.abs(d.height - S) <= 1 && (S = d.height), {
    x: h.offsetLeft,
    y: h.offsetTop,
    width: s,
    height: S
  };
}
function Cl(h, d) {
  var s = d.getRootNode && d.getRootNode();
  if (h.contains(d))
    return !0;
  if (s && hf(s)) {
    var S = d;
    do {
      if (S && h.isSameNode(S))
        return !0;
      S = S.parentNode || S.host;
    } while (S);
  }
  return !1;
}
function kn(h) {
  return Ln(h).getComputedStyle(h);
}
function by(h) {
  return ["table", "td", "th"].indexOf(Zn(h)) >= 0;
}
function Rr(h) {
  return ((Qr(h) ? h.ownerDocument : h.document) || window.document).documentElement;
}
function Pu(h) {
  return Zn(h) === "html" ? h : h.assignedSlot || h.parentNode || (hf(h) ? h.host : null) || Rr(h);
}
function ol(h) {
  return !hn(h) || kn(h).position === "fixed" ? null : h.offsetParent;
}
function xy(h) {
  var d = /firefox/i.test(sf()), s = /Trident/i.test(sf());
  if (s && hn(h)) {
    var S = kn(h);
    if (S.position === "fixed")
      return null;
  }
  var E = Pu(h);
  for (hf(E) && (E = E.host); hn(E) && ["html", "body"].indexOf(Zn(E)) < 0; ) {
    var B = kn(E);
    if (B.transform !== "none" || B.perspective !== "none" || B.contain === "paint" || ["transform", "perspective"].indexOf(B.willChange) !== -1 || d && B.willChange === "filter" || d && B.filter && B.filter !== "none")
      return E;
    E = E.parentNode;
  }
  return null;
}
function wo(h) {
  for (var d = Ln(h), s = ol(h); s && by(s) && kn(s).position === "static"; )
    s = ol(s);
  return s && (Zn(s) === "html" || Zn(s) === "body" && kn(s).position === "static") ? d : s || xy(h) || d;
}
function vf(h) {
  return ["top", "bottom"].indexOf(h) >= 0 ? "x" : "y";
}
function vo(h, d, s) {
  return Jr(h, Lu(d, s));
}
function wy(h, d, s) {
  var S = vo(h, d, s);
  return S > s ? s : S;
}
function Al() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function El(h) {
  return Object.assign({}, Al(), h);
}
function Ol(h, d) {
  return d.reduce(function(s, S) {
    return s[S] = h, s;
  }, {});
}
var Ty = function(d, s) {
  return d = typeof d == "function" ? d(Object.assign({}, s.rects, {
    placement: s.placement
  })) : d, El(typeof d != "number" ? d : Ol(d, xo));
};
function Sy(h) {
  var d, s = h.state, S = h.name, E = h.options, B = s.elements.arrow, W = s.modifiersData.popperOffsets, k = Wn(s.placement), z = vf(k), X = [nn, En].indexOf(k) >= 0, G = X ? "height" : "width";
  if (!(!B || !W)) {
    var ge = Ty(E.padding, s), Te = gf(B), ce = z === "y" ? tn : nn, J = z === "y" ? An : En, Y = s.rects.reference[G] + s.rects.reference[z] - W[z] - s.rects.popper[G], ae = W[z] - s.rects.reference[z], te = wo(B), Ke = te ? z === "y" ? te.clientHeight || 0 : te.clientWidth || 0 : 0, Ne = Y / 2 - ae / 2, me = ge[ce], be = Ke - Te[G] - ge[J], f = Ke / 2 - Te[G] / 2 + Ne, Ee = vo(me, f, be), qe = z;
    s.modifiersData[S] = (d = {}, d[qe] = Ee, d.centerOffset = Ee - f, d);
  }
}
function Cy(h) {
  var d = h.state, s = h.options, S = s.element, E = S === void 0 ? "[data-popper-arrow]" : S;
  if (E != null && !(typeof E == "string" && (E = d.elements.popper.querySelector(E), !E))) {
    if (process.env.NODE_ENV !== "production" && (hn(E) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Cl(d.elements.popper, E)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    d.elements.arrow = E;
  }
}
const Ay = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Sy,
  effect: Cy,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Li(h) {
  return h.split("-")[1];
}
var Ey = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Oy(h) {
  var d = h.x, s = h.y, S = window, E = S.devicePixelRatio || 1;
  return {
    x: Ei(d * E) / E || 0,
    y: Ei(s * E) / E || 0
  };
}
function ul(h) {
  var d, s = h.popper, S = h.popperRect, E = h.placement, B = h.variation, W = h.offsets, k = h.position, z = h.gpuAcceleration, X = h.adaptive, G = h.roundOffsets, ge = h.isFixed, Te = W.x, ce = Te === void 0 ? 0 : Te, J = W.y, Y = J === void 0 ? 0 : J, ae = typeof G == "function" ? G({
    x: ce,
    y: Y
  }) : {
    x: ce,
    y: Y
  };
  ce = ae.x, Y = ae.y;
  var te = W.hasOwnProperty("x"), Ke = W.hasOwnProperty("y"), Ne = nn, me = tn, be = window;
  if (X) {
    var f = wo(s), Ee = "clientHeight", qe = "clientWidth";
    if (f === Ln(s) && (f = Rr(s), kn(f).position !== "static" && k === "absolute" && (Ee = "scrollHeight", qe = "scrollWidth")), f = f, E === tn || (E === nn || E === En) && B === mo) {
      me = An;
      var Fe = ge && f === be && be.visualViewport ? be.visualViewport.height : f[Ee];
      Y -= Fe - S.height, Y *= z ? 1 : -1;
    }
    if (E === nn || (E === tn || E === An) && B === mo) {
      Ne = En;
      var Ze = ge && f === be && be.visualViewport ? be.visualViewport.width : f[qe];
      ce -= Ze - S.width, ce *= z ? 1 : -1;
    }
  }
  var ke = Object.assign({
    position: k
  }, X && Ey), Ue = G === !0 ? Oy({
    x: ce,
    y: Y
  }) : {
    x: ce,
    y: Y
  };
  if (ce = Ue.x, Y = Ue.y, z) {
    var lt;
    return Object.assign({}, ke, (lt = {}, lt[me] = Ke ? "0" : "", lt[Ne] = te ? "0" : "", lt.transform = (be.devicePixelRatio || 1) <= 1 ? "translate(" + ce + "px, " + Y + "px)" : "translate3d(" + ce + "px, " + Y + "px, 0)", lt));
  }
  return Object.assign({}, ke, (d = {}, d[me] = Ke ? Y + "px" : "", d[Ne] = te ? ce + "px" : "", d.transform = "", d));
}
function Ly(h) {
  var d = h.state, s = h.options, S = s.gpuAcceleration, E = S === void 0 ? !0 : S, B = s.adaptive, W = B === void 0 ? !0 : B, k = s.roundOffsets, z = k === void 0 ? !0 : k;
  if (process.env.NODE_ENV !== "production") {
    var X = kn(d.elements.popper).transitionProperty || "";
    W && ["transform", "top", "right", "bottom", "left"].some(function(ge) {
      return X.indexOf(ge) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var G = {
    placement: Wn(d.placement),
    variation: Li(d.placement),
    popper: d.elements.popper,
    popperRect: d.rects.popper,
    gpuAcceleration: E,
    isFixed: d.options.strategy === "fixed"
  };
  d.modifiersData.popperOffsets != null && (d.styles.popper = Object.assign({}, d.styles.popper, ul(Object.assign({}, G, {
    offsets: d.modifiersData.popperOffsets,
    position: d.options.strategy,
    adaptive: W,
    roundOffsets: z
  })))), d.modifiersData.arrow != null && (d.styles.arrow = Object.assign({}, d.styles.arrow, ul(Object.assign({}, G, {
    offsets: d.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: z
  })))), d.attributes.popper = Object.assign({}, d.attributes.popper, {
    "data-popper-placement": d.placement
  });
}
const Dy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ly,
  data: {}
};
var Au = {
  passive: !0
};
function Ry(h) {
  var d = h.state, s = h.instance, S = h.options, E = S.scroll, B = E === void 0 ? !0 : E, W = S.resize, k = W === void 0 ? !0 : W, z = Ln(d.elements.popper), X = [].concat(d.scrollParents.reference, d.scrollParents.popper);
  return B && X.forEach(function(G) {
    G.addEventListener("scroll", s.update, Au);
  }), k && z.addEventListener("resize", s.update, Au), function() {
    B && X.forEach(function(G) {
      G.removeEventListener("scroll", s.update, Au);
    }), k && z.removeEventListener("resize", s.update, Au);
  };
}
const Ny = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ry,
  data: {}
};
var Iy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Eu(h) {
  return h.replace(/left|right|bottom|top/g, function(d) {
    return Iy[d];
  });
}
var Py = {
  start: "end",
  end: "start"
};
function al(h) {
  return h.replace(/start|end/g, function(d) {
    return Py[d];
  });
}
function yf(h) {
  var d = Ln(h), s = d.pageXOffset, S = d.pageYOffset;
  return {
    scrollLeft: s,
    scrollTop: S
  };
}
function mf(h) {
  return Oi(Rr(h)).left + yf(h).scrollLeft;
}
function My(h, d) {
  var s = Ln(h), S = Rr(h), E = s.visualViewport, B = S.clientWidth, W = S.clientHeight, k = 0, z = 0;
  if (E) {
    B = E.width, W = E.height;
    var X = Sl();
    (X || !X && d === "fixed") && (k = E.offsetLeft, z = E.offsetTop);
  }
  return {
    width: B,
    height: W,
    x: k + mf(h),
    y: z
  };
}
function By(h) {
  var d, s = Rr(h), S = yf(h), E = (d = h.ownerDocument) == null ? void 0 : d.body, B = Jr(s.scrollWidth, s.clientWidth, E ? E.scrollWidth : 0, E ? E.clientWidth : 0), W = Jr(s.scrollHeight, s.clientHeight, E ? E.scrollHeight : 0, E ? E.clientHeight : 0), k = -S.scrollLeft + mf(h), z = -S.scrollTop;
  return kn(E || s).direction === "rtl" && (k += Jr(s.clientWidth, E ? E.clientWidth : 0) - B), {
    width: B,
    height: W,
    x: k,
    y: z
  };
}
function _f(h) {
  var d = kn(h), s = d.overflow, S = d.overflowX, E = d.overflowY;
  return /auto|scroll|overlay|hidden/.test(s + E + S);
}
function Ll(h) {
  return ["html", "body", "#document"].indexOf(Zn(h)) >= 0 ? h.ownerDocument.body : hn(h) && _f(h) ? h : Ll(Pu(h));
}
function yo(h, d) {
  var s;
  d === void 0 && (d = []);
  var S = Ll(h), E = S === ((s = h.ownerDocument) == null ? void 0 : s.body), B = Ln(S), W = E ? [B].concat(B.visualViewport || [], _f(S) ? S : []) : S, k = d.concat(W);
  return E ? k : k.concat(yo(Pu(W)));
}
function lf(h) {
  return Object.assign({}, h, {
    left: h.x,
    top: h.y,
    right: h.x + h.width,
    bottom: h.y + h.height
  });
}
function qy(h, d) {
  var s = Oi(h, !1, d === "fixed");
  return s.top = s.top + h.clientTop, s.left = s.left + h.clientLeft, s.bottom = s.top + h.clientHeight, s.right = s.left + h.clientWidth, s.width = h.clientWidth, s.height = h.clientHeight, s.x = s.left, s.y = s.top, s;
}
function fl(h, d, s) {
  return d === wl ? lf(My(h, s)) : Qr(d) ? qy(d, s) : lf(By(Rr(h)));
}
function $y(h) {
  var d = yo(Pu(h)), s = ["absolute", "fixed"].indexOf(kn(h).position) >= 0, S = s && hn(h) ? wo(h) : h;
  return Qr(S) ? d.filter(function(E) {
    return Qr(E) && Cl(E, S) && Zn(E) !== "body";
  }) : [];
}
function Wy(h, d, s, S) {
  var E = d === "clippingParents" ? $y(h) : [].concat(d), B = [].concat(E, [s]), W = B[0], k = B.reduce(function(z, X) {
    var G = fl(h, X, S);
    return z.top = Jr(G.top, z.top), z.right = Lu(G.right, z.right), z.bottom = Lu(G.bottom, z.bottom), z.left = Jr(G.left, z.left), z;
  }, fl(h, W, S));
  return k.width = k.right - k.left, k.height = k.bottom - k.top, k.x = k.left, k.y = k.top, k;
}
function Dl(h) {
  var d = h.reference, s = h.element, S = h.placement, E = S ? Wn(S) : null, B = S ? Li(S) : null, W = d.x + d.width / 2 - s.width / 2, k = d.y + d.height / 2 - s.height / 2, z;
  switch (E) {
    case tn:
      z = {
        x: W,
        y: d.y - s.height
      };
      break;
    case An:
      z = {
        x: W,
        y: d.y + d.height
      };
      break;
    case En:
      z = {
        x: d.x + d.width,
        y: k
      };
      break;
    case nn:
      z = {
        x: d.x - s.width,
        y: k
      };
      break;
    default:
      z = {
        x: d.x,
        y: d.y
      };
  }
  var X = E ? vf(E) : null;
  if (X != null) {
    var G = X === "y" ? "height" : "width";
    switch (B) {
      case Ai:
        z[X] = z[X] - (d[G] / 2 - s[G] / 2);
        break;
      case mo:
        z[X] = z[X] + (d[G] / 2 - s[G] / 2);
        break;
    }
  }
  return z;
}
function _o(h, d) {
  d === void 0 && (d = {});
  var s = d, S = s.placement, E = S === void 0 ? h.placement : S, B = s.strategy, W = B === void 0 ? h.strategy : B, k = s.boundary, z = k === void 0 ? uy : k, X = s.rootBoundary, G = X === void 0 ? wl : X, ge = s.elementContext, Te = ge === void 0 ? go : ge, ce = s.altBoundary, J = ce === void 0 ? !1 : ce, Y = s.padding, ae = Y === void 0 ? 0 : Y, te = El(typeof ae != "number" ? ae : Ol(ae, xo)), Ke = Te === go ? ay : go, Ne = h.rects.popper, me = h.elements[J ? Ke : Te], be = Wy(Qr(me) ? me : me.contextElement || Rr(h.elements.popper), z, G, W), f = Oi(h.elements.reference), Ee = Dl({
    reference: f,
    element: Ne,
    strategy: "absolute",
    placement: E
  }), qe = lf(Object.assign({}, Ne, Ee)), Fe = Te === go ? qe : f, Ze = {
    top: be.top - Fe.top + te.top,
    bottom: Fe.bottom - be.bottom + te.bottom,
    left: be.left - Fe.left + te.left,
    right: Fe.right - be.right + te.right
  }, ke = h.modifiersData.offset;
  if (Te === go && ke) {
    var Ue = ke[E];
    Object.keys(Ze).forEach(function(lt) {
      var jt = [En, An].indexOf(lt) >= 0 ? 1 : -1, gn = [tn, An].indexOf(lt) >= 0 ? "y" : "x";
      Ze[lt] += Ue[gn] * jt;
    });
  }
  return Ze;
}
function ky(h, d) {
  d === void 0 && (d = {});
  var s = d, S = s.placement, E = s.boundary, B = s.rootBoundary, W = s.padding, k = s.flipVariations, z = s.allowedAutoPlacements, X = z === void 0 ? Tl : z, G = Li(S), ge = G ? k ? il : il.filter(function(J) {
    return Li(J) === G;
  }) : xo, Te = ge.filter(function(J) {
    return X.indexOf(J) >= 0;
  });
  Te.length === 0 && (Te = ge, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var ce = Te.reduce(function(J, Y) {
    return J[Y] = _o(h, {
      placement: Y,
      boundary: E,
      rootBoundary: B,
      padding: W
    })[Wn(Y)], J;
  }, {});
  return Object.keys(ce).sort(function(J, Y) {
    return ce[J] - ce[Y];
  });
}
function Hy(h) {
  if (Wn(h) === Iu)
    return [];
  var d = Eu(h);
  return [al(h), d, al(d)];
}
function Fy(h) {
  var d = h.state, s = h.options, S = h.name;
  if (!d.modifiersData[S]._skip) {
    for (var E = s.mainAxis, B = E === void 0 ? !0 : E, W = s.altAxis, k = W === void 0 ? !0 : W, z = s.fallbackPlacements, X = s.padding, G = s.boundary, ge = s.rootBoundary, Te = s.altBoundary, ce = s.flipVariations, J = ce === void 0 ? !0 : ce, Y = s.allowedAutoPlacements, ae = d.options.placement, te = Wn(ae), Ke = te === ae, Ne = z || (Ke || !J ? [Eu(ae)] : Hy(ae)), me = [ae].concat(Ne).reduce(function(on, yt) {
      return on.concat(Wn(yt) === Iu ? ky(d, {
        placement: yt,
        boundary: G,
        rootBoundary: ge,
        padding: X,
        flipVariations: J,
        allowedAutoPlacements: Y
      }) : yt);
    }, []), be = d.rects.reference, f = d.rects.popper, Ee = /* @__PURE__ */ new Map(), qe = !0, Fe = me[0], Ze = 0; Ze < me.length; Ze++) {
      var ke = me[Ze], Ue = Wn(ke), lt = Li(ke) === Ai, jt = [tn, An].indexOf(Ue) >= 0, gn = jt ? "width" : "height", St = _o(d, {
        placement: ke,
        boundary: G,
        rootBoundary: ge,
        altBoundary: Te,
        padding: X
      }), ot = jt ? lt ? En : nn : lt ? An : tn;
      be[gn] > f[gn] && (ot = Eu(ot));
      var qt = Eu(ot), Dn = [];
      if (B && Dn.push(St[Ue] <= 0), k && Dn.push(St[ot] <= 0, St[qt] <= 0), Dn.every(function(on) {
        return on;
      })) {
        Fe = ke, qe = !1;
        break;
      }
      Ee.set(ke, Dn);
    }
    if (qe)
      for (var vn = J ? 3 : 1, Je = function(yt) {
        var yn = me.find(function(Hn) {
          var mt = Ee.get(Hn);
          if (mt)
            return mt.slice(0, yt).every(function(ct) {
              return ct;
            });
        });
        if (yn)
          return Fe = yn, "break";
      }, Jn = vn; Jn > 0; Jn--) {
        var rn = Je(Jn);
        if (rn === "break")
          break;
      }
    d.placement !== Fe && (d.modifiersData[S]._skip = !0, d.placement = Fe, d.reset = !0);
  }
}
const Uy = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fy,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function sl(h, d, s) {
  return s === void 0 && (s = {
    x: 0,
    y: 0
  }), {
    top: h.top - d.height - s.y,
    right: h.right - d.width + s.x,
    bottom: h.bottom - d.height + s.y,
    left: h.left - d.width - s.x
  };
}
function ll(h) {
  return [tn, En, An, nn].some(function(d) {
    return h[d] >= 0;
  });
}
function zy(h) {
  var d = h.state, s = h.name, S = d.rects.reference, E = d.rects.popper, B = d.modifiersData.preventOverflow, W = _o(d, {
    elementContext: "reference"
  }), k = _o(d, {
    altBoundary: !0
  }), z = sl(W, S), X = sl(k, E, B), G = ll(z), ge = ll(X);
  d.modifiersData[s] = {
    referenceClippingOffsets: z,
    popperEscapeOffsets: X,
    isReferenceHidden: G,
    hasPopperEscaped: ge
  }, d.attributes.popper = Object.assign({}, d.attributes.popper, {
    "data-popper-reference-hidden": G,
    "data-popper-escaped": ge
  });
}
const jy = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: zy
};
function Gy(h, d, s) {
  var S = Wn(h), E = [nn, tn].indexOf(S) >= 0 ? -1 : 1, B = typeof s == "function" ? s(Object.assign({}, d, {
    placement: h
  })) : s, W = B[0], k = B[1];
  return W = W || 0, k = (k || 0) * E, [nn, En].indexOf(S) >= 0 ? {
    x: k,
    y: W
  } : {
    x: W,
    y: k
  };
}
function Vy(h) {
  var d = h.state, s = h.options, S = h.name, E = s.offset, B = E === void 0 ? [0, 0] : E, W = Tl.reduce(function(G, ge) {
    return G[ge] = Gy(ge, d.rects, B), G;
  }, {}), k = W[d.placement], z = k.x, X = k.y;
  d.modifiersData.popperOffsets != null && (d.modifiersData.popperOffsets.x += z, d.modifiersData.popperOffsets.y += X), d.modifiersData[S] = W;
}
const Xy = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vy
};
function Yy(h) {
  var d = h.state, s = h.name;
  d.modifiersData[s] = Dl({
    reference: d.rects.reference,
    element: d.rects.popper,
    strategy: "absolute",
    placement: d.placement
  });
}
const Ky = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Yy,
  data: {}
};
function Zy(h) {
  return h === "x" ? "y" : "x";
}
function Jy(h) {
  var d = h.state, s = h.options, S = h.name, E = s.mainAxis, B = E === void 0 ? !0 : E, W = s.altAxis, k = W === void 0 ? !1 : W, z = s.boundary, X = s.rootBoundary, G = s.altBoundary, ge = s.padding, Te = s.tether, ce = Te === void 0 ? !0 : Te, J = s.tetherOffset, Y = J === void 0 ? 0 : J, ae = _o(d, {
    boundary: z,
    rootBoundary: X,
    padding: ge,
    altBoundary: G
  }), te = Wn(d.placement), Ke = Li(d.placement), Ne = !Ke, me = vf(te), be = Zy(me), f = d.modifiersData.popperOffsets, Ee = d.rects.reference, qe = d.rects.popper, Fe = typeof Y == "function" ? Y(Object.assign({}, d.rects, {
    placement: d.placement
  })) : Y, Ze = typeof Fe == "number" ? {
    mainAxis: Fe,
    altAxis: Fe
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, Fe), ke = d.modifiersData.offset ? d.modifiersData.offset[d.placement] : null, Ue = {
    x: 0,
    y: 0
  };
  if (!!f) {
    if (B) {
      var lt, jt = me === "y" ? tn : nn, gn = me === "y" ? An : En, St = me === "y" ? "height" : "width", ot = f[me], qt = ot + ae[jt], Dn = ot - ae[gn], vn = ce ? -qe[St] / 2 : 0, Je = Ke === Ai ? Ee[St] : qe[St], Jn = Ke === Ai ? -qe[St] : -Ee[St], rn = d.elements.arrow, on = ce && rn ? gf(rn) : {
        width: 0,
        height: 0
      }, yt = d.modifiersData["arrow#persistent"] ? d.modifiersData["arrow#persistent"].padding : Al(), yn = yt[jt], Hn = yt[gn], mt = vo(0, Ee[St], on[St]), ct = Ne ? Ee[St] / 2 - vn - mt - yn - Ze.mainAxis : Je - mt - yn - Ze.mainAxis, Di = Ne ? -Ee[St] / 2 + vn + mt + Hn + Ze.mainAxis : Jn + mt + Hn + Ze.mainAxis, Fn = d.elements.arrow && wo(d.elements.arrow), hr = Fn ? me === "y" ? Fn.clientTop || 0 : Fn.clientLeft || 0 : 0, At = (lt = ke == null ? void 0 : ke[me]) != null ? lt : 0, pt = ot + ct - At - hr, un = ot + Di - At, oe = vo(ce ? Lu(qt, pt) : qt, ot, ce ? Jr(Dn, un) : Dn);
      f[me] = oe, Ue[me] = oe - ot;
    }
    if (k) {
      var Ve, ei = me === "x" ? tn : nn, Ri = me === "x" ? An : En, $t = f[be], dt = be === "y" ? "height" : "width", Rn = $t + ae[ei], an = $t - ae[Ri], Wt = [tn, nn].indexOf(te) !== -1, Et = (Ve = ke == null ? void 0 : ke[be]) != null ? Ve : 0, Nn = Wt ? Rn : $t - Ee[dt] - qe[dt] - Et + Ze.altAxis, Un = Wt ? $t + Ee[dt] + qe[dt] - Et - Ze.altAxis : an, Gt = ce && Wt ? wy(Nn, $t, Un) : vo(ce ? Nn : Rn, $t, ce ? Un : an);
      f[be] = Gt, Ue[be] = Gt - $t;
    }
    d.modifiersData[S] = Ue;
  }
}
const Qy = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jy,
  requiresIfExists: ["offset"]
};
function e0(h) {
  return {
    scrollLeft: h.scrollLeft,
    scrollTop: h.scrollTop
  };
}
function t0(h) {
  return h === Ln(h) || !hn(h) ? yf(h) : e0(h);
}
function n0(h) {
  var d = h.getBoundingClientRect(), s = Ei(d.width) / h.offsetWidth || 1, S = Ei(d.height) / h.offsetHeight || 1;
  return s !== 1 || S !== 1;
}
function r0(h, d, s) {
  s === void 0 && (s = !1);
  var S = hn(d), E = hn(d) && n0(d), B = Rr(d), W = Oi(h, E, s), k = {
    scrollLeft: 0,
    scrollTop: 0
  }, z = {
    x: 0,
    y: 0
  };
  return (S || !S && !s) && ((Zn(d) !== "body" || _f(B)) && (k = t0(d)), hn(d) ? (z = Oi(d, !0), z.x += d.clientLeft, z.y += d.clientTop) : B && (z.x = mf(B))), {
    x: W.left + k.scrollLeft - z.x,
    y: W.top + k.scrollTop - z.y,
    width: W.width,
    height: W.height
  };
}
function i0(h) {
  var d = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), S = [];
  h.forEach(function(B) {
    d.set(B.name, B);
  });
  function E(B) {
    s.add(B.name);
    var W = [].concat(B.requires || [], B.requiresIfExists || []);
    W.forEach(function(k) {
      if (!s.has(k)) {
        var z = d.get(k);
        z && E(z);
      }
    }), S.push(B);
  }
  return h.forEach(function(B) {
    s.has(B.name) || E(B);
  }), S;
}
function o0(h) {
  var d = i0(h);
  return ff.reduce(function(s, S) {
    return s.concat(d.filter(function(E) {
      return E.phase === S;
    }));
  }, []);
}
function u0(h) {
  var d;
  return function() {
    return d || (d = new Promise(function(s) {
      Promise.resolve().then(function() {
        d = void 0, s(h());
      });
    })), d;
  };
}
function Dr(h) {
  for (var d = arguments.length, s = new Array(d > 1 ? d - 1 : 0), S = 1; S < d; S++)
    s[S - 1] = arguments[S];
  return [].concat(s).reduce(function(E, B) {
    return E.replace(/%s/, B);
  }, h);
}
var Zr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', a0 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', cl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function f0(h) {
  h.forEach(function(d) {
    [].concat(Object.keys(d), cl).filter(function(s, S, E) {
      return E.indexOf(s) === S;
    }).forEach(function(s) {
      switch (s) {
        case "name":
          typeof d.name != "string" && console.error(Dr(Zr, String(d.name), '"name"', '"string"', '"' + String(d.name) + '"'));
          break;
        case "enabled":
          typeof d.enabled != "boolean" && console.error(Dr(Zr, d.name, '"enabled"', '"boolean"', '"' + String(d.enabled) + '"'));
          break;
        case "phase":
          ff.indexOf(d.phase) < 0 && console.error(Dr(Zr, d.name, '"phase"', "either " + ff.join(", "), '"' + String(d.phase) + '"'));
          break;
        case "fn":
          typeof d.fn != "function" && console.error(Dr(Zr, d.name, '"fn"', '"function"', '"' + String(d.fn) + '"'));
          break;
        case "effect":
          d.effect != null && typeof d.effect != "function" && console.error(Dr(Zr, d.name, '"effect"', '"function"', '"' + String(d.fn) + '"'));
          break;
        case "requires":
          d.requires != null && !Array.isArray(d.requires) && console.error(Dr(Zr, d.name, '"requires"', '"array"', '"' + String(d.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(d.requiresIfExists) || console.error(Dr(Zr, d.name, '"requiresIfExists"', '"array"', '"' + String(d.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + d.name + '" modifier, valid properties are ' + cl.map(function(S) {
            return '"' + S + '"';
          }).join(", ") + '; but "' + s + '" was provided.');
      }
      d.requires && d.requires.forEach(function(S) {
        h.find(function(E) {
          return E.name === S;
        }) == null && console.error(Dr(a0, String(d.name), S, S));
      });
    });
  });
}
function s0(h, d) {
  var s = /* @__PURE__ */ new Set();
  return h.filter(function(S) {
    var E = d(S);
    if (!s.has(E))
      return s.add(E), !0;
  });
}
function l0(h) {
  var d = h.reduce(function(s, S) {
    var E = s[S.name];
    return s[S.name] = E ? Object.assign({}, E, S, {
      options: Object.assign({}, E.options, S.options),
      data: Object.assign({}, E.data, S.data)
    }) : S, s;
  }, {});
  return Object.keys(d).map(function(s) {
    return d[s];
  });
}
var pl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", c0 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", dl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function hl() {
  for (var h = arguments.length, d = new Array(h), s = 0; s < h; s++)
    d[s] = arguments[s];
  return !d.some(function(S) {
    return !(S && typeof S.getBoundingClientRect == "function");
  });
}
function p0(h) {
  h === void 0 && (h = {});
  var d = h, s = d.defaultModifiers, S = s === void 0 ? [] : s, E = d.defaultOptions, B = E === void 0 ? dl : E;
  return function(k, z, X) {
    X === void 0 && (X = B);
    var G = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dl, B),
      modifiersData: {},
      elements: {
        reference: k,
        popper: z
      },
      attributes: {},
      styles: {}
    }, ge = [], Te = !1, ce = {
      state: G,
      setOptions: function(te) {
        var Ke = typeof te == "function" ? te(G.options) : te;
        Y(), G.options = Object.assign({}, B, G.options, Ke), G.scrollParents = {
          reference: Qr(k) ? yo(k) : k.contextElement ? yo(k.contextElement) : [],
          popper: yo(z)
        };
        var Ne = o0(l0([].concat(S, G.options.modifiers)));
        if (G.orderedModifiers = Ne.filter(function(ke) {
          return ke.enabled;
        }), process.env.NODE_ENV !== "production") {
          var me = s0([].concat(Ne, G.options.modifiers), function(ke) {
            var Ue = ke.name;
            return Ue;
          });
          if (f0(me), Wn(G.options.placement) === Iu) {
            var be = G.orderedModifiers.find(function(ke) {
              var Ue = ke.name;
              return Ue === "flip";
            });
            be || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var f = kn(z), Ee = f.marginTop, qe = f.marginRight, Fe = f.marginBottom, Ze = f.marginLeft;
          [Ee, qe, Fe, Ze].some(function(ke) {
            return parseFloat(ke);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return J(), ce.update();
      },
      forceUpdate: function() {
        if (!Te) {
          var te = G.elements, Ke = te.reference, Ne = te.popper;
          if (!hl(Ke, Ne)) {
            process.env.NODE_ENV !== "production" && console.error(pl);
            return;
          }
          G.rects = {
            reference: r0(Ke, wo(Ne), G.options.strategy === "fixed"),
            popper: gf(Ne)
          }, G.reset = !1, G.placement = G.options.placement, G.orderedModifiers.forEach(function(ke) {
            return G.modifiersData[ke.name] = Object.assign({}, ke.data);
          });
          for (var me = 0, be = 0; be < G.orderedModifiers.length; be++) {
            if (process.env.NODE_ENV !== "production" && (me += 1, me > 100)) {
              console.error(c0);
              break;
            }
            if (G.reset === !0) {
              G.reset = !1, be = -1;
              continue;
            }
            var f = G.orderedModifiers[be], Ee = f.fn, qe = f.options, Fe = qe === void 0 ? {} : qe, Ze = f.name;
            typeof Ee == "function" && (G = Ee({
              state: G,
              options: Fe,
              name: Ze,
              instance: ce
            }) || G);
          }
        }
      },
      update: u0(function() {
        return new Promise(function(ae) {
          ce.forceUpdate(), ae(G);
        });
      }),
      destroy: function() {
        Y(), Te = !0;
      }
    };
    if (!hl(k, z))
      return process.env.NODE_ENV !== "production" && console.error(pl), ce;
    ce.setOptions(X).then(function(ae) {
      !Te && X.onFirstUpdate && X.onFirstUpdate(ae);
    });
    function J() {
      G.orderedModifiers.forEach(function(ae) {
        var te = ae.name, Ke = ae.options, Ne = Ke === void 0 ? {} : Ke, me = ae.effect;
        if (typeof me == "function") {
          var be = me({
            state: G,
            name: te,
            instance: ce,
            options: Ne
          }), f = function() {
          };
          ge.push(be || f);
        }
      });
    }
    function Y() {
      ge.forEach(function(ae) {
        return ae();
      }), ge = [];
    }
    return ce;
  };
}
var d0 = [Ny, Ky, Dy, _y, Xy, Uy, Qy, Ay, jy], h0 = /* @__PURE__ */ p0({
  defaultModifiers: d0
}), Si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Rl = { exports: {} };
/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
(function(h) {
  (function(d, s) {
    h.exports = d.document ? s(d, !0) : function(S) {
      if (!S.document)
        throw new Error("jQuery requires a window with a document");
      return s(S);
    };
  })(typeof window < "u" ? window : Si, function(d, s) {
    var S = [], E = Object.getPrototypeOf, B = S.slice, W = S.flat ? function(n) {
      return S.flat.call(n);
    } : function(n) {
      return S.concat.apply([], n);
    }, k = S.push, z = S.indexOf, X = {}, G = X.toString, ge = X.hasOwnProperty, Te = ge.toString, ce = Te.call(Object), J = {}, Y = function(i) {
      return typeof i == "function" && typeof i.nodeType != "number" && typeof i.item != "function";
    }, ae = function(i) {
      return i != null && i === i.window;
    }, te = d.document, Ke = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function Ne(n, i, o) {
      o = o || te;
      var u, l, c = o.createElement("script");
      if (c.text = n, i)
        for (u in Ke)
          l = i[u] || i.getAttribute && i.getAttribute(u), l && c.setAttribute(u, l);
      o.head.appendChild(c).parentNode.removeChild(c);
    }
    function me(n) {
      return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? X[G.call(n)] || "object" : typeof n;
    }
    var be = "3.6.1", f = function(n, i) {
      return new f.fn.init(n, i);
    };
    f.fn = f.prototype = {
      jquery: be,
      constructor: f,
      length: 0,
      toArray: function() {
        return B.call(this);
      },
      get: function(n) {
        return n == null ? B.call(this) : n < 0 ? this[n + this.length] : this[n];
      },
      pushStack: function(n) {
        var i = f.merge(this.constructor(), n);
        return i.prevObject = this, i;
      },
      each: function(n) {
        return f.each(this, n);
      },
      map: function(n) {
        return this.pushStack(f.map(this, function(i, o) {
          return n.call(i, o, i);
        }));
      },
      slice: function() {
        return this.pushStack(B.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(f.grep(this, function(n, i) {
          return (i + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(f.grep(this, function(n, i) {
          return i % 2;
        }));
      },
      eq: function(n) {
        var i = this.length, o = +n + (n < 0 ? i : 0);
        return this.pushStack(o >= 0 && o < i ? [this[o]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push: k,
      sort: S.sort,
      splice: S.splice
    }, f.extend = f.fn.extend = function() {
      var n, i, o, u, l, c, g = arguments[0] || {}, w = 1, _ = arguments.length, D = !1;
      for (typeof g == "boolean" && (D = g, g = arguments[w] || {}, w++), typeof g != "object" && !Y(g) && (g = {}), w === _ && (g = this, w--); w < _; w++)
        if ((n = arguments[w]) != null)
          for (i in n)
            u = n[i], !(i === "__proto__" || g === u) && (D && u && (f.isPlainObject(u) || (l = Array.isArray(u))) ? (o = g[i], l && !Array.isArray(o) ? c = [] : !l && !f.isPlainObject(o) ? c = {} : c = o, l = !1, g[i] = f.extend(D, c, u)) : u !== void 0 && (g[i] = u));
      return g;
    }, f.extend({
      expando: "jQuery" + (be + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(n) {
        throw new Error(n);
      },
      noop: function() {
      },
      isPlainObject: function(n) {
        var i, o;
        return !n || G.call(n) !== "[object Object]" ? !1 : (i = E(n), i ? (o = ge.call(i, "constructor") && i.constructor, typeof o == "function" && Te.call(o) === ce) : !0);
      },
      isEmptyObject: function(n) {
        var i;
        for (i in n)
          return !1;
        return !0;
      },
      globalEval: function(n, i, o) {
        Ne(n, { nonce: i && i.nonce }, o);
      },
      each: function(n, i) {
        var o, u = 0;
        if (Ee(n))
          for (o = n.length; u < o && i.call(n[u], u, n[u]) !== !1; u++)
            ;
        else
          for (u in n)
            if (i.call(n[u], u, n[u]) === !1)
              break;
        return n;
      },
      makeArray: function(n, i) {
        var o = i || [];
        return n != null && (Ee(Object(n)) ? f.merge(
          o,
          typeof n == "string" ? [n] : n
        ) : k.call(o, n)), o;
      },
      inArray: function(n, i, o) {
        return i == null ? -1 : z.call(i, n, o);
      },
      merge: function(n, i) {
        for (var o = +i.length, u = 0, l = n.length; u < o; u++)
          n[l++] = i[u];
        return n.length = l, n;
      },
      grep: function(n, i, o) {
        for (var u, l = [], c = 0, g = n.length, w = !o; c < g; c++)
          u = !i(n[c], c), u !== w && l.push(n[c]);
        return l;
      },
      map: function(n, i, o) {
        var u, l, c = 0, g = [];
        if (Ee(n))
          for (u = n.length; c < u; c++)
            l = i(n[c], c, o), l != null && g.push(l);
        else
          for (c in n)
            l = i(n[c], c, o), l != null && g.push(l);
        return W(g);
      },
      guid: 1,
      support: J
    }), typeof Symbol == "function" && (f.fn[Symbol.iterator] = S[Symbol.iterator]), f.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(n, i) {
        X["[object " + i + "]"] = i.toLowerCase();
      }
    );
    function Ee(n) {
      var i = !!n && "length" in n && n.length, o = me(n);
      return Y(n) || ae(n) ? !1 : o === "array" || i === 0 || typeof i == "number" && i > 0 && i - 1 in n;
    }
    var qe = function(n) {
      var i, o, u, l, c, g, w, _, D, P, H, R, M, ie, _e, ne, et, tt, Oe, Le = "sizzle" + 1 * new Date(), ve = n.document, Dt = 0, De = 0, Qe = It(), qr = It(), pi = It(), Rt = It(), mn = function(y, x) {
        return y === x && (H = !0), 0;
      }, Xt = {}.hasOwnProperty, Nt = [], In = Nt.pop, kt = Nt.push, _n = Nt.push, di = Nt.slice, Gn = function(y, x) {
        for (var C = 0, $ = y.length; C < $; C++)
          if (y[C] === x)
            return C;
        return -1;
      }, Zi = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $e = "[\\x20\\t\\r\\n\\f]", Pn = "(?:\\\\[\\da-fA-F]{1,6}" + $e + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Vo = "\\[" + $e + "*(" + Pn + ")(?:" + $e + "*([*^$|!~]?=)" + $e + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Pn + "))|)" + $e + "*\\]", hi = ":(" + Pn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Vo + ")*)|.*)\\)|)", Ht = new RegExp($e + "+", "g"), wr = new RegExp("^" + $e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $e + "+$", "g"), $r = new RegExp("^" + $e + "*," + $e + "*"), Ji = new RegExp("^" + $e + "*([>+~]|" + $e + ")" + $e + "*"), Xo = new RegExp($e + "|>"), ia = new RegExp(hi), oa = new RegExp("^" + Pn + "$"), gi = {
        ID: new RegExp("^#(" + Pn + ")"),
        CLASS: new RegExp("^\\.(" + Pn + ")"),
        TAG: new RegExp("^(" + Pn + "|[*])"),
        ATTR: new RegExp("^" + Vo),
        PSEUDO: new RegExp("^" + hi),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $e + "*(even|odd|(([+-]|)(\\d*)n|)" + $e + "*(?:([+-]|)" + $e + "*(\\d+)|))" + $e + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + Zi + ")$", "i"),
        needsContext: new RegExp("^" + $e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $e + "*((?:-\\d)?\\d*)" + $e + "*\\)|)(?=[^-]|$)", "i")
      }, ua = /HTML$/i, aa = /^(?:input|select|textarea|button)$/i, Tr = /^h\d$/i, Wr = /^[^{]+\{\s*\[native \w/, fa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, kr = /[+~]/, bn = new RegExp("\\\\[\\da-fA-F]{1,6}" + $e + "?|\\\\([^\\r\\n\\f])", "g"), bt = function(y, x) {
        var C = "0x" + y.slice(1) - 65536;
        return x || (C < 0 ? String.fromCharCode(C + 65536) : String.fromCharCode(C >> 10 | 55296, C & 1023 | 56320));
      }, Hr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Yo = function(y, x) {
        return x ? y === "\0" ? "\uFFFD" : y.slice(0, -1) + "\\" + y.charCodeAt(y.length - 1).toString(16) + " " : "\\" + y;
      }, Ko = function() {
        R();
      }, sa = ye(
        function(y) {
          return y.disabled === !0 && y.nodeName.toLowerCase() === "fieldset";
        },
        { dir: "parentNode", next: "legend" }
      );
      try {
        _n.apply(
          Nt = di.call(ve.childNodes),
          ve.childNodes
        ), Nt[ve.childNodes.length].nodeType;
      } catch {
        _n = {
          apply: Nt.length ? function(x, C) {
            kt.apply(x, di.call(C));
          } : function(x, C) {
            for (var $ = x.length, O = 0; x[$++] = C[O++]; )
              ;
            x.length = $ - 1;
          }
        };
      }
      function We(y, x, C, $) {
        var O, N, j, K, Z, se, fe, le = x && x.ownerDocument, xe = x ? x.nodeType : 9;
        if (C = C || [], typeof y != "string" || !y || xe !== 1 && xe !== 9 && xe !== 11)
          return C;
        if (!$ && (R(x), x = x || M, _e)) {
          if (xe !== 11 && (Z = fa.exec(y)))
            if (O = Z[1]) {
              if (xe === 9)
                if (j = x.getElementById(O)) {
                  if (j.id === O)
                    return C.push(j), C;
                } else
                  return C;
              else if (le && (j = le.getElementById(O)) && Oe(x, j) && j.id === O)
                return C.push(j), C;
            } else {
              if (Z[2])
                return _n.apply(C, x.getElementsByTagName(y)), C;
              if ((O = Z[3]) && o.getElementsByClassName && x.getElementsByClassName)
                return _n.apply(C, x.getElementsByClassName(O)), C;
            }
          if (o.qsa && !Rt[y + " "] && (!ne || !ne.test(y)) && (xe !== 1 || x.nodeName.toLowerCase() !== "object")) {
            if (fe = y, le = x, xe === 1 && (Xo.test(y) || Ji.test(y))) {
              for (le = kr.test(y) && q(x.parentNode) || x, (le !== x || !o.scope) && ((K = x.getAttribute("id")) ? K = K.replace(Hr, Yo) : x.setAttribute("id", K = Le)), se = g(y), N = se.length; N--; )
                se[N] = (K ? "#" + K : ":scope") + " " + ee(se[N]);
              fe = se.join(",");
            }
            try {
              return _n.apply(
                C,
                le.querySelectorAll(fe)
              ), C;
            } catch {
              Rt(y, !0);
            } finally {
              K === Le && x.removeAttribute("id");
            }
          }
        }
        return _(y.replace(wr, "$1"), x, C, $);
      }
      function It() {
        var y = [];
        function x(C, $) {
          return y.push(C + " ") > u.cacheLength && delete x[y.shift()], x[C + " "] = $;
        }
        return x;
      }
      function Yt(y) {
        return y[Le] = !0, y;
      }
      function fn(y) {
        var x = M.createElement("fieldset");
        try {
          return !!y(x);
        } catch {
          return !1;
        } finally {
          x.parentNode && x.parentNode.removeChild(x), x = null;
        }
      }
      function Qi(y, x) {
        for (var C = y.split("|"), $ = C.length; $--; )
          u.attrHandle[C[$]] = x;
      }
      function Zo(y, x) {
        var C = x && y, $ = C && y.nodeType === 1 && x.nodeType === 1 && y.sourceIndex - x.sourceIndex;
        if ($)
          return $;
        if (C) {
          for (; C = C.nextSibling; )
            if (C === x)
              return -1;
        }
        return y ? 1 : -1;
      }
      function la(y) {
        return function(x) {
          var C = x.nodeName.toLowerCase();
          return C === "input" && x.type === y;
        };
      }
      function ca(y) {
        return function(x) {
          var C = x.nodeName.toLowerCase();
          return (C === "input" || C === "button") && x.type === y;
        };
      }
      function rr(y) {
        return function(x) {
          return "form" in x ? x.parentNode && x.disabled === !1 ? "label" in x ? "label" in x.parentNode ? x.parentNode.disabled === y : x.disabled === y : x.isDisabled === y || x.isDisabled !== !y && sa(x) === y : x.disabled === y : "label" in x ? x.disabled === y : !1;
        };
      }
      function A(y) {
        return Yt(function(x) {
          return x = +x, Yt(function(C, $) {
            for (var O, N = y([], C.length, x), j = N.length; j--; )
              C[O = N[j]] && (C[O] = !($[O] = C[O]));
          });
        });
      }
      function q(y) {
        return y && typeof y.getElementsByTagName < "u" && y;
      }
      o = We.support = {}, c = We.isXML = function(y) {
        var x = y && y.namespaceURI, C = y && (y.ownerDocument || y).documentElement;
        return !ua.test(x || C && C.nodeName || "HTML");
      }, R = We.setDocument = function(y) {
        var x, C, $ = y ? y.ownerDocument || y : ve;
        return $ == M || $.nodeType !== 9 || !$.documentElement || (M = $, ie = M.documentElement, _e = !c(M), ve != M && (C = M.defaultView) && C.top !== C && (C.addEventListener ? C.addEventListener("unload", Ko, !1) : C.attachEvent && C.attachEvent("onunload", Ko)), o.scope = fn(function(O) {
          return ie.appendChild(O).appendChild(M.createElement("div")), typeof O.querySelectorAll < "u" && !O.querySelectorAll(":scope fieldset div").length;
        }), o.attributes = fn(function(O) {
          return O.className = "i", !O.getAttribute("className");
        }), o.getElementsByTagName = fn(function(O) {
          return O.appendChild(M.createComment("")), !O.getElementsByTagName("*").length;
        }), o.getElementsByClassName = Wr.test(M.getElementsByClassName), o.getById = fn(function(O) {
          return ie.appendChild(O).id = Le, !M.getElementsByName || !M.getElementsByName(Le).length;
        }), o.getById ? (u.filter.ID = function(O) {
          var N = O.replace(bn, bt);
          return function(j) {
            return j.getAttribute("id") === N;
          };
        }, u.find.ID = function(O, N) {
          if (typeof N.getElementById < "u" && _e) {
            var j = N.getElementById(O);
            return j ? [j] : [];
          }
        }) : (u.filter.ID = function(O) {
          var N = O.replace(bn, bt);
          return function(j) {
            var K = typeof j.getAttributeNode < "u" && j.getAttributeNode("id");
            return K && K.value === N;
          };
        }, u.find.ID = function(O, N) {
          if (typeof N.getElementById < "u" && _e) {
            var j, K, Z, se = N.getElementById(O);
            if (se) {
              if (j = se.getAttributeNode("id"), j && j.value === O)
                return [se];
              for (Z = N.getElementsByName(O), K = 0; se = Z[K++]; )
                if (j = se.getAttributeNode("id"), j && j.value === O)
                  return [se];
            }
            return [];
          }
        }), u.find.TAG = o.getElementsByTagName ? function(O, N) {
          if (typeof N.getElementsByTagName < "u")
            return N.getElementsByTagName(O);
          if (o.qsa)
            return N.querySelectorAll(O);
        } : function(O, N) {
          var j, K = [], Z = 0, se = N.getElementsByTagName(O);
          if (O === "*") {
            for (; j = se[Z++]; )
              j.nodeType === 1 && K.push(j);
            return K;
          }
          return se;
        }, u.find.CLASS = o.getElementsByClassName && function(O, N) {
          if (typeof N.getElementsByClassName < "u" && _e)
            return N.getElementsByClassName(O);
        }, et = [], ne = [], (o.qsa = Wr.test(M.querySelectorAll)) && (fn(function(O) {
          var N;
          ie.appendChild(O).innerHTML = "<a id='" + Le + "'></a><select id='" + Le + "-\r\\' msallowcapture=''><option selected=''></option></select>", O.querySelectorAll("[msallowcapture^='']").length && ne.push("[*^$]=" + $e + `*(?:''|"")`), O.querySelectorAll("[selected]").length || ne.push("\\[" + $e + "*(?:value|" + Zi + ")"), O.querySelectorAll("[id~=" + Le + "-]").length || ne.push("~="), N = M.createElement("input"), N.setAttribute("name", ""), O.appendChild(N), O.querySelectorAll("[name='']").length || ne.push("\\[" + $e + "*name" + $e + "*=" + $e + `*(?:''|"")`), O.querySelectorAll(":checked").length || ne.push(":checked"), O.querySelectorAll("a#" + Le + "+*").length || ne.push(".#.+[+~]"), O.querySelectorAll("\\\f"), ne.push("[\\r\\n\\f]");
        }), fn(function(O) {
          O.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var N = M.createElement("input");
          N.setAttribute("type", "hidden"), O.appendChild(N).setAttribute("name", "D"), O.querySelectorAll("[name=d]").length && ne.push("name" + $e + "*[*^$|!~]?="), O.querySelectorAll(":enabled").length !== 2 && ne.push(":enabled", ":disabled"), ie.appendChild(O).disabled = !0, O.querySelectorAll(":disabled").length !== 2 && ne.push(":enabled", ":disabled"), O.querySelectorAll("*,:x"), ne.push(",.*:");
        })), (o.matchesSelector = Wr.test(tt = ie.matches || ie.webkitMatchesSelector || ie.mozMatchesSelector || ie.oMatchesSelector || ie.msMatchesSelector)) && fn(function(O) {
          o.disconnectedMatch = tt.call(O, "*"), tt.call(O, "[s!='']:x"), et.push("!=", hi);
        }), ne = ne.length && new RegExp(ne.join("|")), et = et.length && new RegExp(et.join("|")), x = Wr.test(ie.compareDocumentPosition), Oe = x || Wr.test(ie.contains) ? function(O, N) {
          var j = O.nodeType === 9 ? O.documentElement : O, K = N && N.parentNode;
          return O === K || !!(K && K.nodeType === 1 && (j.contains ? j.contains(K) : O.compareDocumentPosition && O.compareDocumentPosition(K) & 16));
        } : function(O, N) {
          if (N) {
            for (; N = N.parentNode; )
              if (N === O)
                return !0;
          }
          return !1;
        }, mn = x ? function(O, N) {
          if (O === N)
            return H = !0, 0;
          var j = !O.compareDocumentPosition - !N.compareDocumentPosition;
          return j || (j = (O.ownerDocument || O) == (N.ownerDocument || N) ? O.compareDocumentPosition(N) : 1, j & 1 || !o.sortDetached && N.compareDocumentPosition(O) === j ? O == M || O.ownerDocument == ve && Oe(ve, O) ? -1 : N == M || N.ownerDocument == ve && Oe(ve, N) ? 1 : P ? Gn(P, O) - Gn(P, N) : 0 : j & 4 ? -1 : 1);
        } : function(O, N) {
          if (O === N)
            return H = !0, 0;
          var j, K = 0, Z = O.parentNode, se = N.parentNode, fe = [O], le = [N];
          if (!Z || !se)
            return O == M ? -1 : N == M ? 1 : Z ? -1 : se ? 1 : P ? Gn(P, O) - Gn(P, N) : 0;
          if (Z === se)
            return Zo(O, N);
          for (j = O; j = j.parentNode; )
            fe.unshift(j);
          for (j = N; j = j.parentNode; )
            le.unshift(j);
          for (; fe[K] === le[K]; )
            K++;
          return K ? Zo(fe[K], le[K]) : fe[K] == ve ? -1 : le[K] == ve ? 1 : 0;
        }), M;
      }, We.matches = function(y, x) {
        return We(y, null, null, x);
      }, We.matchesSelector = function(y, x) {
        if (R(y), o.matchesSelector && _e && !Rt[x + " "] && (!et || !et.test(x)) && (!ne || !ne.test(x)))
          try {
            var C = tt.call(y, x);
            if (C || o.disconnectedMatch || y.document && y.document.nodeType !== 11)
              return C;
          } catch {
            Rt(x, !0);
          }
        return We(x, M, null, [y]).length > 0;
      }, We.contains = function(y, x) {
        return (y.ownerDocument || y) != M && R(y), Oe(y, x);
      }, We.attr = function(y, x) {
        (y.ownerDocument || y) != M && R(y);
        var C = u.attrHandle[x.toLowerCase()], $ = C && Xt.call(u.attrHandle, x.toLowerCase()) ? C(y, x, !_e) : void 0;
        return $ !== void 0 ? $ : o.attributes || !_e ? y.getAttribute(x) : ($ = y.getAttributeNode(x)) && $.specified ? $.value : null;
      }, We.escape = function(y) {
        return (y + "").replace(Hr, Yo);
      }, We.error = function(y) {
        throw new Error("Syntax error, unrecognized expression: " + y);
      }, We.uniqueSort = function(y) {
        var x, C = [], $ = 0, O = 0;
        if (H = !o.detectDuplicates, P = !o.sortStable && y.slice(0), y.sort(mn), H) {
          for (; x = y[O++]; )
            x === y[O] && ($ = C.push(O));
          for (; $--; )
            y.splice(C[$], 1);
        }
        return P = null, y;
      }, l = We.getText = function(y) {
        var x, C = "", $ = 0, O = y.nodeType;
        if (O) {
          if (O === 1 || O === 9 || O === 11) {
            if (typeof y.textContent == "string")
              return y.textContent;
            for (y = y.firstChild; y; y = y.nextSibling)
              C += l(y);
          } else if (O === 3 || O === 4)
            return y.nodeValue;
        } else
          for (; x = y[$++]; )
            C += l(x);
        return C;
      }, u = We.selectors = {
        cacheLength: 50,
        createPseudo: Yt,
        match: gi,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(y) {
            return y[1] = y[1].replace(bn, bt), y[3] = (y[3] || y[4] || y[5] || "").replace(bn, bt), y[2] === "~=" && (y[3] = " " + y[3] + " "), y.slice(0, 4);
          },
          CHILD: function(y) {
            return y[1] = y[1].toLowerCase(), y[1].slice(0, 3) === "nth" ? (y[3] || We.error(y[0]), y[4] = +(y[4] ? y[5] + (y[6] || 1) : 2 * (y[3] === "even" || y[3] === "odd")), y[5] = +(y[7] + y[8] || y[3] === "odd")) : y[3] && We.error(y[0]), y;
          },
          PSEUDO: function(y) {
            var x, C = !y[6] && y[2];
            return gi.CHILD.test(y[0]) ? null : (y[3] ? y[2] = y[4] || y[5] || "" : C && ia.test(C) && (x = g(C, !0)) && (x = C.indexOf(")", C.length - x) - C.length) && (y[0] = y[0].slice(0, x), y[2] = C.slice(0, x)), y.slice(0, 3));
          }
        },
        filter: {
          TAG: function(y) {
            var x = y.replace(bn, bt).toLowerCase();
            return y === "*" ? function() {
              return !0;
            } : function(C) {
              return C.nodeName && C.nodeName.toLowerCase() === x;
            };
          },
          CLASS: function(y) {
            var x = Qe[y + " "];
            return x || (x = new RegExp("(^|" + $e + ")" + y + "(" + $e + "|$)")) && Qe(
              y,
              function(C) {
                return x.test(
                  typeof C.className == "string" && C.className || typeof C.getAttribute < "u" && C.getAttribute("class") || ""
                );
              }
            );
          },
          ATTR: function(y, x, C) {
            return function($) {
              var O = We.attr($, y);
              return O == null ? x === "!=" : x ? (O += "", x === "=" ? O === C : x === "!=" ? O !== C : x === "^=" ? C && O.indexOf(C) === 0 : x === "*=" ? C && O.indexOf(C) > -1 : x === "$=" ? C && O.slice(-C.length) === C : x === "~=" ? (" " + O.replace(Ht, " ") + " ").indexOf(C) > -1 : x === "|=" ? O === C || O.slice(0, C.length + 1) === C + "-" : !1) : !0;
            };
          },
          CHILD: function(y, x, C, $, O) {
            var N = y.slice(0, 3) !== "nth", j = y.slice(-4) !== "last", K = x === "of-type";
            return $ === 1 && O === 0 ? function(Z) {
              return !!Z.parentNode;
            } : function(Z, se, fe) {
              var le, xe, Ie, ue, rt, at, Pt = N !== j ? "nextSibling" : "previousSibling", Xe = Z.parentNode, Vn = K && Z.nodeName.toLowerCase(), Sr = !fe && !K, gt = !1;
              if (Xe) {
                if (N) {
                  for (; Pt; ) {
                    for (ue = Z; ue = ue[Pt]; )
                      if (K ? ue.nodeName.toLowerCase() === Vn : ue.nodeType === 1)
                        return !1;
                    at = Pt = y === "only" && !at && "nextSibling";
                  }
                  return !0;
                }
                if (at = [j ? Xe.firstChild : Xe.lastChild], j && Sr) {
                  for (ue = Xe, Ie = ue[Le] || (ue[Le] = {}), xe = Ie[ue.uniqueID] || (Ie[ue.uniqueID] = {}), le = xe[y] || [], rt = le[0] === Dt && le[1], gt = rt && le[2], ue = rt && Xe.childNodes[rt]; ue = ++rt && ue && ue[Pt] || (gt = rt = 0) || at.pop(); )
                    if (ue.nodeType === 1 && ++gt && ue === Z) {
                      xe[y] = [Dt, rt, gt];
                      break;
                    }
                } else if (Sr && (ue = Z, Ie = ue[Le] || (ue[Le] = {}), xe = Ie[ue.uniqueID] || (Ie[ue.uniqueID] = {}), le = xe[y] || [], rt = le[0] === Dt && le[1], gt = rt), gt === !1)
                  for (; (ue = ++rt && ue && ue[Pt] || (gt = rt = 0) || at.pop()) && !((K ? ue.nodeName.toLowerCase() === Vn : ue.nodeType === 1) && ++gt && (Sr && (Ie = ue[Le] || (ue[Le] = {}), xe = Ie[ue.uniqueID] || (Ie[ue.uniqueID] = {}), xe[y] = [Dt, gt]), ue === Z)); )
                    ;
                return gt -= O, gt === $ || gt % $ === 0 && gt / $ >= 0;
              }
            };
          },
          PSEUDO: function(y, x) {
            var C, $ = u.pseudos[y] || u.setFilters[y.toLowerCase()] || We.error("unsupported pseudo: " + y);
            return $[Le] ? $(x) : $.length > 1 ? (C = [y, y, "", x], u.setFilters.hasOwnProperty(y.toLowerCase()) ? Yt(function(O, N) {
              for (var j, K = $(O, x), Z = K.length; Z--; )
                j = Gn(O, K[Z]), O[j] = !(N[j] = K[Z]);
            }) : function(O) {
              return $(O, 0, C);
            }) : $;
          }
        },
        pseudos: {
          not: Yt(function(y) {
            var x = [], C = [], $ = w(y.replace(wr, "$1"));
            return $[Le] ? Yt(function(O, N, j, K) {
              for (var Z, se = $(O, null, K, []), fe = O.length; fe--; )
                (Z = se[fe]) && (O[fe] = !(N[fe] = Z));
            }) : function(O, N, j) {
              return x[0] = O, $(x, null, j, C), x[0] = null, !C.pop();
            };
          }),
          has: Yt(function(y) {
            return function(x) {
              return We(y, x).length > 0;
            };
          }),
          contains: Yt(function(y) {
            return y = y.replace(bn, bt), function(x) {
              return (x.textContent || l(x)).indexOf(y) > -1;
            };
          }),
          lang: Yt(function(y) {
            return oa.test(y || "") || We.error("unsupported lang: " + y), y = y.replace(bn, bt).toLowerCase(), function(x) {
              var C;
              do
                if (C = _e ? x.lang : x.getAttribute("xml:lang") || x.getAttribute("lang"))
                  return C = C.toLowerCase(), C === y || C.indexOf(y + "-") === 0;
              while ((x = x.parentNode) && x.nodeType === 1);
              return !1;
            };
          }),
          target: function(y) {
            var x = n.location && n.location.hash;
            return x && x.slice(1) === y.id;
          },
          root: function(y) {
            return y === ie;
          },
          focus: function(y) {
            return y === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(y.type || y.href || ~y.tabIndex);
          },
          enabled: rr(!1),
          disabled: rr(!0),
          checked: function(y) {
            var x = y.nodeName.toLowerCase();
            return x === "input" && !!y.checked || x === "option" && !!y.selected;
          },
          selected: function(y) {
            return y.parentNode && y.parentNode.selectedIndex, y.selected === !0;
          },
          empty: function(y) {
            for (y = y.firstChild; y; y = y.nextSibling)
              if (y.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function(y) {
            return !u.pseudos.empty(y);
          },
          header: function(y) {
            return Tr.test(y.nodeName);
          },
          input: function(y) {
            return aa.test(y.nodeName);
          },
          button: function(y) {
            var x = y.nodeName.toLowerCase();
            return x === "input" && y.type === "button" || x === "button";
          },
          text: function(y) {
            var x;
            return y.nodeName.toLowerCase() === "input" && y.type === "text" && ((x = y.getAttribute("type")) == null || x.toLowerCase() === "text");
          },
          first: A(function() {
            return [0];
          }),
          last: A(function(y, x) {
            return [x - 1];
          }),
          eq: A(function(y, x, C) {
            return [C < 0 ? C + x : C];
          }),
          even: A(function(y, x) {
            for (var C = 0; C < x; C += 2)
              y.push(C);
            return y;
          }),
          odd: A(function(y, x) {
            for (var C = 1; C < x; C += 2)
              y.push(C);
            return y;
          }),
          lt: A(function(y, x, C) {
            for (var $ = C < 0 ? C + x : C > x ? x : C; --$ >= 0; )
              y.push($);
            return y;
          }),
          gt: A(function(y, x, C) {
            for (var $ = C < 0 ? C + x : C; ++$ < x; )
              y.push($);
            return y;
          })
        }
      }, u.pseudos.nth = u.pseudos.eq;
      for (i in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        u.pseudos[i] = la(i);
      for (i in { submit: !0, reset: !0 })
        u.pseudos[i] = ca(i);
      function I() {
      }
      I.prototype = u.filters = u.pseudos, u.setFilters = new I(), g = We.tokenize = function(y, x) {
        var C, $, O, N, j, K, Z, se = qr[y + " "];
        if (se)
          return x ? 0 : se.slice(0);
        for (j = y, K = [], Z = u.preFilter; j; ) {
          (!C || ($ = $r.exec(j))) && ($ && (j = j.slice($[0].length) || j), K.push(O = [])), C = !1, ($ = Ji.exec(j)) && (C = $.shift(), O.push({
            value: C,
            type: $[0].replace(wr, " ")
          }), j = j.slice(C.length));
          for (N in u.filter)
            ($ = gi[N].exec(j)) && (!Z[N] || ($ = Z[N]($))) && (C = $.shift(), O.push({
              value: C,
              type: N,
              matches: $
            }), j = j.slice(C.length));
          if (!C)
            break;
        }
        return x ? j.length : j ? We.error(y) : qr(y, K).slice(0);
      };
      function ee(y) {
        for (var x = 0, C = y.length, $ = ""; x < C; x++)
          $ += y[x].value;
        return $;
      }
      function ye(y, x, C) {
        var $ = x.dir, O = x.next, N = O || $, j = C && N === "parentNode", K = De++;
        return x.first ? function(Z, se, fe) {
          for (; Z = Z[$]; )
            if (Z.nodeType === 1 || j)
              return y(Z, se, fe);
          return !1;
        } : function(Z, se, fe) {
          var le, xe, Ie, ue = [Dt, K];
          if (fe) {
            for (; Z = Z[$]; )
              if ((Z.nodeType === 1 || j) && y(Z, se, fe))
                return !0;
          } else
            for (; Z = Z[$]; )
              if (Z.nodeType === 1 || j)
                if (Ie = Z[Le] || (Z[Le] = {}), xe = Ie[Z.uniqueID] || (Ie[Z.uniqueID] = {}), O && O === Z.nodeName.toLowerCase())
                  Z = Z[$] || Z;
                else {
                  if ((le = xe[N]) && le[0] === Dt && le[1] === K)
                    return ue[2] = le[2];
                  if (xe[N] = ue, ue[2] = y(Z, se, fe))
                    return !0;
                }
          return !1;
        };
      }
      function Me(y) {
        return y.length > 1 ? function(x, C, $) {
          for (var O = y.length; O--; )
            if (!y[O](x, C, $))
              return !1;
          return !0;
        } : y[0];
      }
      function ut(y, x, C) {
        for (var $ = 0, O = x.length; $ < O; $++)
          We(y, x[$], C);
        return C;
      }
      function He(y, x, C, $, O) {
        for (var N, j = [], K = 0, Z = y.length, se = x != null; K < Z; K++)
          (N = y[K]) && (!C || C(N, $, O)) && (j.push(N), se && x.push(K));
        return j;
      }
      function Fr(y, x, C, $, O, N) {
        return $ && !$[Le] && ($ = Fr($)), O && !O[Le] && (O = Fr(O, N)), Yt(function(j, K, Z, se) {
          var fe, le, xe, Ie = [], ue = [], rt = K.length, at = j || ut(
            x || "*",
            Z.nodeType ? [Z] : Z,
            []
          ), Pt = y && (j || !x) ? He(at, Ie, y, Z, se) : at, Xe = C ? O || (j ? y : rt || $) ? [] : K : Pt;
          if (C && C(Pt, Xe, Z, se), $)
            for (fe = He(Xe, ue), $(fe, [], Z, se), le = fe.length; le--; )
              (xe = fe[le]) && (Xe[ue[le]] = !(Pt[ue[le]] = xe));
          if (j) {
            if (O || y) {
              if (O) {
                for (fe = [], le = Xe.length; le--; )
                  (xe = Xe[le]) && fe.push(Pt[le] = xe);
                O(null, Xe = [], fe, se);
              }
              for (le = Xe.length; le--; )
                (xe = Xe[le]) && (fe = O ? Gn(j, xe) : Ie[le]) > -1 && (j[fe] = !(K[fe] = xe));
            }
          } else
            Xe = He(
              Xe === K ? Xe.splice(rt, Xe.length) : Xe
            ), O ? O(null, K, Xe, se) : _n.apply(K, Xe);
        });
      }
      function eo(y) {
        for (var x, C, $, O = y.length, N = u.relative[y[0].type], j = N || u.relative[" "], K = N ? 1 : 0, Z = ye(function(le) {
          return le === x;
        }, j, !0), se = ye(function(le) {
          return Gn(x, le) > -1;
        }, j, !0), fe = [function(le, xe, Ie) {
          var ue = !N && (Ie || xe !== D) || ((x = xe).nodeType ? Z(le, xe, Ie) : se(le, xe, Ie));
          return x = null, ue;
        }]; K < O; K++)
          if (C = u.relative[y[K].type])
            fe = [ye(Me(fe), C)];
          else {
            if (C = u.filter[y[K].type].apply(null, y[K].matches), C[Le]) {
              for ($ = ++K; $ < O && !u.relative[y[$].type]; $++)
                ;
              return Fr(
                K > 1 && Me(fe),
                K > 1 && ee(
                  y.slice(0, K - 1).concat({ value: y[K - 2].type === " " ? "*" : "" })
                ).replace(wr, "$1"),
                C,
                K < $ && eo(y.slice(K, $)),
                $ < O && eo(y = y.slice($)),
                $ < O && ee(y)
              );
            }
            fe.push(C);
          }
        return Me(fe);
      }
      function Kt(y, x) {
        var C = x.length > 0, $ = y.length > 0, O = function(N, j, K, Z, se) {
          var fe, le, xe, Ie = 0, ue = "0", rt = N && [], at = [], Pt = D, Xe = N || $ && u.find.TAG("*", se), Vn = Dt += Pt == null ? 1 : Math.random() || 0.1, Sr = Xe.length;
          for (se && (D = j == M || j || se); ue !== Sr && (fe = Xe[ue]) != null; ue++) {
            if ($ && fe) {
              for (le = 0, !j && fe.ownerDocument != M && (R(fe), K = !_e); xe = y[le++]; )
                if (xe(fe, j || M, K)) {
                  Z.push(fe);
                  break;
                }
              se && (Dt = Vn);
            }
            C && ((fe = !xe && fe) && Ie--, N && rt.push(fe));
          }
          if (Ie += ue, C && ue !== Ie) {
            for (le = 0; xe = x[le++]; )
              xe(rt, at, j, K);
            if (N) {
              if (Ie > 0)
                for (; ue--; )
                  rt[ue] || at[ue] || (at[ue] = In.call(Z));
              at = He(at);
            }
            _n.apply(Z, at), se && !N && at.length > 0 && Ie + x.length > 1 && We.uniqueSort(Z);
          }
          return se && (Dt = Vn, D = Pt), rt;
        };
        return C ? Yt(O) : O;
      }
      return w = We.compile = function(y, x) {
        var C, $ = [], O = [], N = pi[y + " "];
        if (!N) {
          for (x || (x = g(y)), C = x.length; C--; )
            N = eo(x[C]), N[Le] ? $.push(N) : O.push(N);
          N = pi(
            y,
            Kt(O, $)
          ), N.selector = y;
        }
        return N;
      }, _ = We.select = function(y, x, C, $) {
        var O, N, j, K, Z, se = typeof y == "function" && y, fe = !$ && g(y = se.selector || y);
        if (C = C || [], fe.length === 1) {
          if (N = fe[0] = fe[0].slice(0), N.length > 2 && (j = N[0]).type === "ID" && x.nodeType === 9 && _e && u.relative[N[1].type]) {
            if (x = (u.find.ID(j.matches[0].replace(bn, bt), x) || [])[0], x)
              se && (x = x.parentNode);
            else
              return C;
            y = y.slice(N.shift().value.length);
          }
          for (O = gi.needsContext.test(y) ? 0 : N.length; O-- && (j = N[O], !u.relative[K = j.type]); )
            if ((Z = u.find[K]) && ($ = Z(
              j.matches[0].replace(bn, bt),
              kr.test(N[0].type) && q(x.parentNode) || x
            ))) {
              if (N.splice(O, 1), y = $.length && ee(N), !y)
                return _n.apply(C, $), C;
              break;
            }
        }
        return (se || w(y, fe))(
          $,
          x,
          !_e,
          C,
          !x || kr.test(y) && q(x.parentNode) || x
        ), C;
      }, o.sortStable = Le.split("").sort(mn).join("") === Le, o.detectDuplicates = !!H, R(), o.sortDetached = fn(function(y) {
        return y.compareDocumentPosition(M.createElement("fieldset")) & 1;
      }), fn(function(y) {
        return y.innerHTML = "<a href='#'></a>", y.firstChild.getAttribute("href") === "#";
      }) || Qi("type|href|height|width", function(y, x, C) {
        if (!C)
          return y.getAttribute(x, x.toLowerCase() === "type" ? 1 : 2);
      }), (!o.attributes || !fn(function(y) {
        return y.innerHTML = "<input/>", y.firstChild.setAttribute("value", ""), y.firstChild.getAttribute("value") === "";
      })) && Qi("value", function(y, x, C) {
        if (!C && y.nodeName.toLowerCase() === "input")
          return y.defaultValue;
      }), fn(function(y) {
        return y.getAttribute("disabled") == null;
      }) || Qi(Zi, function(y, x, C) {
        var $;
        if (!C)
          return y[x] === !0 ? x.toLowerCase() : ($ = y.getAttributeNode(x)) && $.specified ? $.value : null;
      }), We;
    }(d);
    f.find = qe, f.expr = qe.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = qe.uniqueSort, f.text = qe.getText, f.isXMLDoc = qe.isXML, f.contains = qe.contains, f.escapeSelector = qe.escape;
    var Fe = function(n, i, o) {
      for (var u = [], l = o !== void 0; (n = n[i]) && n.nodeType !== 9; )
        if (n.nodeType === 1) {
          if (l && f(n).is(o))
            break;
          u.push(n);
        }
      return u;
    }, Ze = function(n, i) {
      for (var o = []; n; n = n.nextSibling)
        n.nodeType === 1 && n !== i && o.push(n);
      return o;
    }, ke = f.expr.match.needsContext;
    function Ue(n, i) {
      return n.nodeName && n.nodeName.toLowerCase() === i.toLowerCase();
    }
    var lt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function jt(n, i, o) {
      return Y(i) ? f.grep(n, function(u, l) {
        return !!i.call(u, l, u) !== o;
      }) : i.nodeType ? f.grep(n, function(u) {
        return u === i !== o;
      }) : typeof i != "string" ? f.grep(n, function(u) {
        return z.call(i, u) > -1 !== o;
      }) : f.filter(i, n, o);
    }
    f.filter = function(n, i, o) {
      var u = i[0];
      return o && (n = ":not(" + n + ")"), i.length === 1 && u.nodeType === 1 ? f.find.matchesSelector(u, n) ? [u] : [] : f.find.matches(n, f.grep(i, function(l) {
        return l.nodeType === 1;
      }));
    }, f.fn.extend({
      find: function(n) {
        var i, o, u = this.length, l = this;
        if (typeof n != "string")
          return this.pushStack(f(n).filter(function() {
            for (i = 0; i < u; i++)
              if (f.contains(l[i], this))
                return !0;
          }));
        for (o = this.pushStack([]), i = 0; i < u; i++)
          f.find(n, l[i], o);
        return u > 1 ? f.uniqueSort(o) : o;
      },
      filter: function(n) {
        return this.pushStack(jt(this, n || [], !1));
      },
      not: function(n) {
        return this.pushStack(jt(this, n || [], !0));
      },
      is: function(n) {
        return !!jt(
          this,
          typeof n == "string" && ke.test(n) ? f(n) : n || [],
          !1
        ).length;
      }
    });
    var gn, St = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ot = f.fn.init = function(n, i, o) {
      var u, l;
      if (!n)
        return this;
      if (o = o || gn, typeof n == "string")
        if (n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? u = [null, n, null] : u = St.exec(n), u && (u[1] || !i))
          if (u[1]) {
            if (i = i instanceof f ? i[0] : i, f.merge(this, f.parseHTML(
              u[1],
              i && i.nodeType ? i.ownerDocument || i : te,
              !0
            )), lt.test(u[1]) && f.isPlainObject(i))
              for (u in i)
                Y(this[u]) ? this[u](i[u]) : this.attr(u, i[u]);
            return this;
          } else
            return l = te.getElementById(u[2]), l && (this[0] = l, this.length = 1), this;
        else
          return !i || i.jquery ? (i || o).find(n) : this.constructor(i).find(n);
      else {
        if (n.nodeType)
          return this[0] = n, this.length = 1, this;
        if (Y(n))
          return o.ready !== void 0 ? o.ready(n) : n(f);
      }
      return f.makeArray(n, this);
    };
    ot.prototype = f.fn, gn = f(te);
    var qt = /^(?:parents|prev(?:Until|All))/, Dn = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    f.fn.extend({
      has: function(n) {
        var i = f(n, this), o = i.length;
        return this.filter(function() {
          for (var u = 0; u < o; u++)
            if (f.contains(this, i[u]))
              return !0;
        });
      },
      closest: function(n, i) {
        var o, u = 0, l = this.length, c = [], g = typeof n != "string" && f(n);
        if (!ke.test(n)) {
          for (; u < l; u++)
            for (o = this[u]; o && o !== i; o = o.parentNode)
              if (o.nodeType < 11 && (g ? g.index(o) > -1 : o.nodeType === 1 && f.find.matchesSelector(o, n))) {
                c.push(o);
                break;
              }
        }
        return this.pushStack(c.length > 1 ? f.uniqueSort(c) : c);
      },
      index: function(n) {
        return n ? typeof n == "string" ? z.call(f(n), this[0]) : z.call(
          this,
          n.jquery ? n[0] : n
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(n, i) {
        return this.pushStack(
          f.uniqueSort(
            f.merge(this.get(), f(n, i))
          )
        );
      },
      addBack: function(n) {
        return this.add(
          n == null ? this.prevObject : this.prevObject.filter(n)
        );
      }
    });
    function vn(n, i) {
      for (; (n = n[i]) && n.nodeType !== 1; )
        ;
      return n;
    }
    f.each({
      parent: function(n) {
        var i = n.parentNode;
        return i && i.nodeType !== 11 ? i : null;
      },
      parents: function(n) {
        return Fe(n, "parentNode");
      },
      parentsUntil: function(n, i, o) {
        return Fe(n, "parentNode", o);
      },
      next: function(n) {
        return vn(n, "nextSibling");
      },
      prev: function(n) {
        return vn(n, "previousSibling");
      },
      nextAll: function(n) {
        return Fe(n, "nextSibling");
      },
      prevAll: function(n) {
        return Fe(n, "previousSibling");
      },
      nextUntil: function(n, i, o) {
        return Fe(n, "nextSibling", o);
      },
      prevUntil: function(n, i, o) {
        return Fe(n, "previousSibling", o);
      },
      siblings: function(n) {
        return Ze((n.parentNode || {}).firstChild, n);
      },
      children: function(n) {
        return Ze(n.firstChild);
      },
      contents: function(n) {
        return n.contentDocument != null && E(n.contentDocument) ? n.contentDocument : (Ue(n, "template") && (n = n.content || n), f.merge([], n.childNodes));
      }
    }, function(n, i) {
      f.fn[n] = function(o, u) {
        var l = f.map(this, i, o);
        return n.slice(-5) !== "Until" && (u = o), u && typeof u == "string" && (l = f.filter(u, l)), this.length > 1 && (Dn[n] || f.uniqueSort(l), qt.test(n) && l.reverse()), this.pushStack(l);
      };
    });
    var Je = /[^\x20\t\r\n\f]+/g;
    function Jn(n) {
      var i = {};
      return f.each(n.match(Je) || [], function(o, u) {
        i[u] = !0;
      }), i;
    }
    f.Callbacks = function(n) {
      n = typeof n == "string" ? Jn(n) : f.extend({}, n);
      var i, o, u, l, c = [], g = [], w = -1, _ = function() {
        for (l = l || n.once, u = i = !0; g.length; w = -1)
          for (o = g.shift(); ++w < c.length; )
            c[w].apply(o[0], o[1]) === !1 && n.stopOnFalse && (w = c.length, o = !1);
        n.memory || (o = !1), i = !1, l && (o ? c = [] : c = "");
      }, D = {
        add: function() {
          return c && (o && !i && (w = c.length - 1, g.push(o)), function P(H) {
            f.each(H, function(R, M) {
              Y(M) ? (!n.unique || !D.has(M)) && c.push(M) : M && M.length && me(M) !== "string" && P(M);
            });
          }(arguments), o && !i && _()), this;
        },
        remove: function() {
          return f.each(arguments, function(P, H) {
            for (var R; (R = f.inArray(H, c, R)) > -1; )
              c.splice(R, 1), R <= w && w--;
          }), this;
        },
        has: function(P) {
          return P ? f.inArray(P, c) > -1 : c.length > 0;
        },
        empty: function() {
          return c && (c = []), this;
        },
        disable: function() {
          return l = g = [], c = o = "", this;
        },
        disabled: function() {
          return !c;
        },
        lock: function() {
          return l = g = [], !o && !i && (c = o = ""), this;
        },
        locked: function() {
          return !!l;
        },
        fireWith: function(P, H) {
          return l || (H = H || [], H = [P, H.slice ? H.slice() : H], g.push(H), i || _()), this;
        },
        fire: function() {
          return D.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!u;
        }
      };
      return D;
    };
    function rn(n) {
      return n;
    }
    function on(n) {
      throw n;
    }
    function yt(n, i, o, u) {
      var l;
      try {
        n && Y(l = n.promise) ? l.call(n).done(i).fail(o) : n && Y(l = n.then) ? l.call(n, i, o) : i.apply(void 0, [n].slice(u));
      } catch (c) {
        o.apply(void 0, [c]);
      }
    }
    f.extend({
      Deferred: function(n) {
        var i = [
          [
            "notify",
            "progress",
            f.Callbacks("memory"),
            f.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            f.Callbacks("once memory"),
            f.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            f.Callbacks("once memory"),
            f.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], o = "pending", u = {
          state: function() {
            return o;
          },
          always: function() {
            return l.done(arguments).fail(arguments), this;
          },
          catch: function(c) {
            return u.then(null, c);
          },
          pipe: function() {
            var c = arguments;
            return f.Deferred(function(g) {
              f.each(i, function(w, _) {
                var D = Y(c[_[4]]) && c[_[4]];
                l[_[1]](function() {
                  var P = D && D.apply(this, arguments);
                  P && Y(P.promise) ? P.promise().progress(g.notify).done(g.resolve).fail(g.reject) : g[_[0] + "With"](
                    this,
                    D ? [P] : arguments
                  );
                });
              }), c = null;
            }).promise();
          },
          then: function(c, g, w) {
            var _ = 0;
            function D(P, H, R, M) {
              return function() {
                var ie = this, _e = arguments, ne = function() {
                  var tt, Oe;
                  if (!(P < _)) {
                    if (tt = R.apply(ie, _e), tt === H.promise())
                      throw new TypeError("Thenable self-resolution");
                    Oe = tt && (typeof tt == "object" || typeof tt == "function") && tt.then, Y(Oe) ? M ? Oe.call(
                      tt,
                      D(_, H, rn, M),
                      D(_, H, on, M)
                    ) : (_++, Oe.call(
                      tt,
                      D(_, H, rn, M),
                      D(_, H, on, M),
                      D(
                        _,
                        H,
                        rn,
                        H.notifyWith
                      )
                    )) : (R !== rn && (ie = void 0, _e = [tt]), (M || H.resolveWith)(ie, _e));
                  }
                }, et = M ? ne : function() {
                  try {
                    ne();
                  } catch (tt) {
                    f.Deferred.exceptionHook && f.Deferred.exceptionHook(
                      tt,
                      et.stackTrace
                    ), P + 1 >= _ && (R !== on && (ie = void 0, _e = [tt]), H.rejectWith(ie, _e));
                  }
                };
                P ? et() : (f.Deferred.getStackHook && (et.stackTrace = f.Deferred.getStackHook()), d.setTimeout(et));
              };
            }
            return f.Deferred(function(P) {
              i[0][3].add(
                D(
                  0,
                  P,
                  Y(w) ? w : rn,
                  P.notifyWith
                )
              ), i[1][3].add(
                D(
                  0,
                  P,
                  Y(c) ? c : rn
                )
              ), i[2][3].add(
                D(
                  0,
                  P,
                  Y(g) ? g : on
                )
              );
            }).promise();
          },
          promise: function(c) {
            return c != null ? f.extend(c, u) : u;
          }
        }, l = {};
        return f.each(i, function(c, g) {
          var w = g[2], _ = g[5];
          u[g[1]] = w.add, _ && w.add(
            function() {
              o = _;
            },
            i[3 - c][2].disable,
            i[3 - c][3].disable,
            i[0][2].lock,
            i[0][3].lock
          ), w.add(g[3].fire), l[g[0]] = function() {
            return l[g[0] + "With"](this === l ? void 0 : this, arguments), this;
          }, l[g[0] + "With"] = w.fireWith;
        }), u.promise(l), n && n.call(l, l), l;
      },
      when: function(n) {
        var i = arguments.length, o = i, u = Array(o), l = B.call(arguments), c = f.Deferred(), g = function(w) {
          return function(_) {
            u[w] = this, l[w] = arguments.length > 1 ? B.call(arguments) : _, --i || c.resolveWith(u, l);
          };
        };
        if (i <= 1 && (yt(
          n,
          c.done(g(o)).resolve,
          c.reject,
          !i
        ), c.state() === "pending" || Y(l[o] && l[o].then)))
          return c.then();
        for (; o--; )
          yt(l[o], g(o), c.reject);
        return c.promise();
      }
    });
    var yn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    f.Deferred.exceptionHook = function(n, i) {
      d.console && d.console.warn && n && yn.test(n.name) && d.console.warn("jQuery.Deferred exception: " + n.message, n.stack, i);
    }, f.readyException = function(n) {
      d.setTimeout(function() {
        throw n;
      });
    };
    var Hn = f.Deferred();
    f.fn.ready = function(n) {
      return Hn.then(n).catch(function(i) {
        f.readyException(i);
      }), this;
    }, f.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(n) {
        (n === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0, !(n !== !0 && --f.readyWait > 0) && Hn.resolveWith(te, [f]));
      }
    }), f.ready.then = Hn.then;
    function mt() {
      te.removeEventListener("DOMContentLoaded", mt), d.removeEventListener("load", mt), f.ready();
    }
    te.readyState === "complete" || te.readyState !== "loading" && !te.documentElement.doScroll ? d.setTimeout(f.ready) : (te.addEventListener("DOMContentLoaded", mt), d.addEventListener("load", mt));
    var ct = function(n, i, o, u, l, c, g) {
      var w = 0, _ = n.length, D = o == null;
      if (me(o) === "object") {
        l = !0;
        for (w in o)
          ct(n, i, w, o[w], !0, c, g);
      } else if (u !== void 0 && (l = !0, Y(u) || (g = !0), D && (g ? (i.call(n, u), i = null) : (D = i, i = function(P, H, R) {
        return D.call(f(P), R);
      })), i))
        for (; w < _; w++)
          i(
            n[w],
            o,
            g ? u : u.call(n[w], w, i(n[w], o))
          );
      return l ? n : D ? i.call(n) : _ ? i(n[0], o) : c;
    }, Di = /^-ms-/, Fn = /-([a-z])/g;
    function hr(n, i) {
      return i.toUpperCase();
    }
    function At(n) {
      return n.replace(Di, "ms-").replace(Fn, hr);
    }
    var pt = function(n) {
      return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType;
    };
    function un() {
      this.expando = f.expando + un.uid++;
    }
    un.uid = 1, un.prototype = {
      cache: function(n) {
        var i = n[this.expando];
        return i || (i = {}, pt(n) && (n.nodeType ? n[this.expando] = i : Object.defineProperty(n, this.expando, {
          value: i,
          configurable: !0
        }))), i;
      },
      set: function(n, i, o) {
        var u, l = this.cache(n);
        if (typeof i == "string")
          l[At(i)] = o;
        else
          for (u in i)
            l[At(u)] = i[u];
        return l;
      },
      get: function(n, i) {
        return i === void 0 ? this.cache(n) : n[this.expando] && n[this.expando][At(i)];
      },
      access: function(n, i, o) {
        return i === void 0 || i && typeof i == "string" && o === void 0 ? this.get(n, i) : (this.set(n, i, o), o !== void 0 ? o : i);
      },
      remove: function(n, i) {
        var o, u = n[this.expando];
        if (u !== void 0) {
          if (i !== void 0)
            for (Array.isArray(i) ? i = i.map(At) : (i = At(i), i = i in u ? [i] : i.match(Je) || []), o = i.length; o--; )
              delete u[i[o]];
          (i === void 0 || f.isEmptyObject(u)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando]);
        }
      },
      hasData: function(n) {
        var i = n[this.expando];
        return i !== void 0 && !f.isEmptyObject(i);
      }
    };
    var oe = new un(), Ve = new un(), ei = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ri = /[A-Z]/g;
    function $t(n) {
      return n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : n === +n + "" ? +n : ei.test(n) ? JSON.parse(n) : n;
    }
    function dt(n, i, o) {
      var u;
      if (o === void 0 && n.nodeType === 1)
        if (u = "data-" + i.replace(Ri, "-$&").toLowerCase(), o = n.getAttribute(u), typeof o == "string") {
          try {
            o = $t(o);
          } catch {
          }
          Ve.set(n, i, o);
        } else
          o = void 0;
      return o;
    }
    f.extend({
      hasData: function(n) {
        return Ve.hasData(n) || oe.hasData(n);
      },
      data: function(n, i, o) {
        return Ve.access(n, i, o);
      },
      removeData: function(n, i) {
        Ve.remove(n, i);
      },
      _data: function(n, i, o) {
        return oe.access(n, i, o);
      },
      _removeData: function(n, i) {
        oe.remove(n, i);
      }
    }), f.fn.extend({
      data: function(n, i) {
        var o, u, l, c = this[0], g = c && c.attributes;
        if (n === void 0) {
          if (this.length && (l = Ve.get(c), c.nodeType === 1 && !oe.get(c, "hasDataAttrs"))) {
            for (o = g.length; o--; )
              g[o] && (u = g[o].name, u.indexOf("data-") === 0 && (u = At(u.slice(5)), dt(c, u, l[u])));
            oe.set(c, "hasDataAttrs", !0);
          }
          return l;
        }
        return typeof n == "object" ? this.each(function() {
          Ve.set(this, n);
        }) : ct(this, function(w) {
          var _;
          if (c && w === void 0)
            return _ = Ve.get(c, n), _ !== void 0 || (_ = dt(c, n), _ !== void 0) ? _ : void 0;
          this.each(function() {
            Ve.set(this, n, w);
          });
        }, null, i, arguments.length > 1, null, !0);
      },
      removeData: function(n) {
        return this.each(function() {
          Ve.remove(this, n);
        });
      }
    }), f.extend({
      queue: function(n, i, o) {
        var u;
        if (n)
          return i = (i || "fx") + "queue", u = oe.get(n, i), o && (!u || Array.isArray(o) ? u = oe.access(n, i, f.makeArray(o)) : u.push(o)), u || [];
      },
      dequeue: function(n, i) {
        i = i || "fx";
        var o = f.queue(n, i), u = o.length, l = o.shift(), c = f._queueHooks(n, i), g = function() {
          f.dequeue(n, i);
        };
        l === "inprogress" && (l = o.shift(), u--), l && (i === "fx" && o.unshift("inprogress"), delete c.stop, l.call(n, g, c)), !u && c && c.empty.fire();
      },
      _queueHooks: function(n, i) {
        var o = i + "queueHooks";
        return oe.get(n, o) || oe.access(n, o, {
          empty: f.Callbacks("once memory").add(function() {
            oe.remove(n, [i + "queue", o]);
          })
        });
      }
    }), f.fn.extend({
      queue: function(n, i) {
        var o = 2;
        return typeof n != "string" && (i = n, n = "fx", o--), arguments.length < o ? f.queue(this[0], n) : i === void 0 ? this : this.each(function() {
          var u = f.queue(this, n, i);
          f._queueHooks(this, n), n === "fx" && u[0] !== "inprogress" && f.dequeue(this, n);
        });
      },
      dequeue: function(n) {
        return this.each(function() {
          f.dequeue(this, n);
        });
      },
      clearQueue: function(n) {
        return this.queue(n || "fx", []);
      },
      promise: function(n, i) {
        var o, u = 1, l = f.Deferred(), c = this, g = this.length, w = function() {
          --u || l.resolveWith(c, [c]);
        };
        for (typeof n != "string" && (i = n, n = void 0), n = n || "fx"; g--; )
          o = oe.get(c[g], n + "queueHooks"), o && o.empty && (u++, o.empty.add(w));
        return w(), l.promise(i);
      }
    });
    var Rn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, an = new RegExp("^(?:([+-])=|)(" + Rn + ")([a-z%]*)$", "i"), Wt = ["Top", "Right", "Bottom", "Left"], Et = te.documentElement, Nn = function(n) {
      return f.contains(n.ownerDocument, n);
    }, Un = { composed: !0 };
    Et.getRootNode && (Nn = function(n) {
      return f.contains(n.ownerDocument, n) || n.getRootNode(Un) === n.ownerDocument;
    });
    var Gt = function(n, i) {
      return n = i || n, n.style.display === "none" || n.style.display === "" && Nn(n) && f.css(n, "display") === "none";
    };
    function ti(n, i, o, u) {
      var l, c, g = 20, w = u ? function() {
        return u.cur();
      } : function() {
        return f.css(n, i, "");
      }, _ = w(), D = o && o[3] || (f.cssNumber[i] ? "" : "px"), P = n.nodeType && (f.cssNumber[i] || D !== "px" && +_) && an.exec(f.css(n, i));
      if (P && P[3] !== D) {
        for (_ = _ / 2, D = D || P[3], P = +_ || 1; g--; )
          f.style(n, i, P + D), (1 - c) * (1 - (c = w() / _ || 0.5)) <= 0 && (g = 0), P = P / c;
        P = P * 2, f.style(n, i, P + D), o = o || [];
      }
      return o && (P = +P || +_ || 0, l = o[1] ? P + (o[1] + 1) * o[2] : +o[2], u && (u.unit = D, u.start = P, u.end = l)), l;
    }
    var ni = {};
    function Ni(n) {
      var i, o = n.ownerDocument, u = n.nodeName, l = ni[u];
      return l || (i = o.body.appendChild(o.createElement(u)), l = f.css(i, "display"), i.parentNode.removeChild(i), l === "none" && (l = "block"), ni[u] = l, l);
    }
    function zn(n, i) {
      for (var o, u, l = [], c = 0, g = n.length; c < g; c++)
        u = n[c], u.style && (o = u.style.display, i ? (o === "none" && (l[c] = oe.get(u, "display") || null, l[c] || (u.style.display = "")), u.style.display === "" && Gt(u) && (l[c] = Ni(u))) : o !== "none" && (l[c] = "none", oe.set(u, "display", o)));
      for (c = 0; c < g; c++)
        l[c] != null && (n[c].style.display = l[c]);
      return n;
    }
    f.fn.extend({
      show: function() {
        return zn(this, !0);
      },
      hide: function() {
        return zn(this);
      },
      toggle: function(n) {
        return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
          Gt(this) ? f(this).show() : f(this).hide();
        });
      }
    });
    var Qn = /^(?:checkbox|radio)$/i, ri = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ii = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var n = te.createDocumentFragment(), i = n.appendChild(te.createElement("div")), o = te.createElement("input");
      o.setAttribute("type", "radio"), o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), i.appendChild(o), J.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, i.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue, i.innerHTML = "<option></option>", J.option = !!i.lastChild;
    })();
    var Ot = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.thead, Ot.th = Ot.td, J.option || (Ot.optgroup = Ot.option = [1, "<select multiple='multiple'>", "</select>"]);
    function _t(n, i) {
      var o;
      return typeof n.getElementsByTagName < "u" ? o = n.getElementsByTagName(i || "*") : typeof n.querySelectorAll < "u" ? o = n.querySelectorAll(i || "*") : o = [], i === void 0 || i && Ue(n, i) ? f.merge([n], o) : o;
    }
    function Ii(n, i) {
      for (var o = 0, u = n.length; o < u; o++)
        oe.set(
          n[o],
          "globalEval",
          !i || oe.get(i[o], "globalEval")
        );
    }
    var Mu = /<|&#?\w+;/;
    function To(n, i, o, u, l) {
      for (var c, g, w, _, D, P, H = i.createDocumentFragment(), R = [], M = 0, ie = n.length; M < ie; M++)
        if (c = n[M], c || c === 0)
          if (me(c) === "object")
            f.merge(R, c.nodeType ? [c] : c);
          else if (!Mu.test(c))
            R.push(i.createTextNode(c));
          else {
            for (g = g || H.appendChild(i.createElement("div")), w = (ri.exec(c) || ["", ""])[1].toLowerCase(), _ = Ot[w] || Ot._default, g.innerHTML = _[1] + f.htmlPrefilter(c) + _[2], P = _[0]; P--; )
              g = g.lastChild;
            f.merge(R, g.childNodes), g = H.firstChild, g.textContent = "";
          }
      for (H.textContent = "", M = 0; c = R[M++]; ) {
        if (u && f.inArray(c, u) > -1) {
          l && l.push(c);
          continue;
        }
        if (D = Nn(c), g = _t(H.appendChild(c), "script"), D && Ii(g), o)
          for (P = 0; c = g[P++]; )
            ii.test(c.type || "") && o.push(c);
      }
      return H;
    }
    var Pi = /^([^.]*)(?:\.(.+)|)/;
    function er() {
      return !0;
    }
    function gr() {
      return !1;
    }
    function Bu(n, i) {
      return n === qu() == (i === "focus");
    }
    function qu() {
      try {
        return te.activeElement;
      } catch {
      }
    }
    function Mi(n, i, o, u, l, c) {
      var g, w;
      if (typeof i == "object") {
        typeof o != "string" && (u = u || o, o = void 0);
        for (w in i)
          Mi(n, w, o, u, i[w], c);
        return n;
      }
      if (u == null && l == null ? (l = o, u = o = void 0) : l == null && (typeof o == "string" ? (l = u, u = void 0) : (l = u, u = o, o = void 0)), l === !1)
        l = gr;
      else if (!l)
        return n;
      return c === 1 && (g = l, l = function(_) {
        return f().off(_), g.apply(this, arguments);
      }, l.guid = g.guid || (g.guid = f.guid++)), n.each(function() {
        f.event.add(this, i, l, u, o);
      });
    }
    f.event = {
      global: {},
      add: function(n, i, o, u, l) {
        var c, g, w, _, D, P, H, R, M, ie, _e, ne = oe.get(n);
        if (!!pt(n))
          for (o.handler && (c = o, o = c.handler, l = c.selector), l && f.find.matchesSelector(Et, l), o.guid || (o.guid = f.guid++), (_ = ne.events) || (_ = ne.events = /* @__PURE__ */ Object.create(null)), (g = ne.handle) || (g = ne.handle = function(et) {
            return typeof f < "u" && f.event.triggered !== et.type ? f.event.dispatch.apply(n, arguments) : void 0;
          }), i = (i || "").match(Je) || [""], D = i.length; D--; )
            w = Pi.exec(i[D]) || [], M = _e = w[1], ie = (w[2] || "").split(".").sort(), M && (H = f.event.special[M] || {}, M = (l ? H.delegateType : H.bindType) || M, H = f.event.special[M] || {}, P = f.extend({
              type: M,
              origType: _e,
              data: u,
              handler: o,
              guid: o.guid,
              selector: l,
              needsContext: l && f.expr.match.needsContext.test(l),
              namespace: ie.join(".")
            }, c), (R = _[M]) || (R = _[M] = [], R.delegateCount = 0, (!H.setup || H.setup.call(n, u, ie, g) === !1) && n.addEventListener && n.addEventListener(M, g)), H.add && (H.add.call(n, P), P.handler.guid || (P.handler.guid = o.guid)), l ? R.splice(R.delegateCount++, 0, P) : R.push(P), f.event.global[M] = !0);
      },
      remove: function(n, i, o, u, l) {
        var c, g, w, _, D, P, H, R, M, ie, _e, ne = oe.hasData(n) && oe.get(n);
        if (!(!ne || !(_ = ne.events))) {
          for (i = (i || "").match(Je) || [""], D = i.length; D--; ) {
            if (w = Pi.exec(i[D]) || [], M = _e = w[1], ie = (w[2] || "").split(".").sort(), !M) {
              for (M in _)
                f.event.remove(n, M + i[D], o, u, !0);
              continue;
            }
            for (H = f.event.special[M] || {}, M = (u ? H.delegateType : H.bindType) || M, R = _[M] || [], w = w[2] && new RegExp("(^|\\.)" + ie.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = c = R.length; c--; )
              P = R[c], (l || _e === P.origType) && (!o || o.guid === P.guid) && (!w || w.test(P.namespace)) && (!u || u === P.selector || u === "**" && P.selector) && (R.splice(c, 1), P.selector && R.delegateCount--, H.remove && H.remove.call(n, P));
            g && !R.length && ((!H.teardown || H.teardown.call(n, ie, ne.handle) === !1) && f.removeEvent(n, M, ne.handle), delete _[M]);
          }
          f.isEmptyObject(_) && oe.remove(n, "handle events");
        }
      },
      dispatch: function(n) {
        var i, o, u, l, c, g, w = new Array(arguments.length), _ = f.event.fix(n), D = (oe.get(this, "events") || /* @__PURE__ */ Object.create(null))[_.type] || [], P = f.event.special[_.type] || {};
        for (w[0] = _, i = 1; i < arguments.length; i++)
          w[i] = arguments[i];
        if (_.delegateTarget = this, !(P.preDispatch && P.preDispatch.call(this, _) === !1)) {
          for (g = f.event.handlers.call(this, _, D), i = 0; (l = g[i++]) && !_.isPropagationStopped(); )
            for (_.currentTarget = l.elem, o = 0; (c = l.handlers[o++]) && !_.isImmediatePropagationStopped(); )
              (!_.rnamespace || c.namespace === !1 || _.rnamespace.test(c.namespace)) && (_.handleObj = c, _.data = c.data, u = ((f.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, w), u !== void 0 && (_.result = u) === !1 && (_.preventDefault(), _.stopPropagation()));
          return P.postDispatch && P.postDispatch.call(this, _), _.result;
        }
      },
      handlers: function(n, i) {
        var o, u, l, c, g, w = [], _ = i.delegateCount, D = n.target;
        if (_ && D.nodeType && !(n.type === "click" && n.button >= 1)) {
          for (; D !== this; D = D.parentNode || this)
            if (D.nodeType === 1 && !(n.type === "click" && D.disabled === !0)) {
              for (c = [], g = {}, o = 0; o < _; o++)
                u = i[o], l = u.selector + " ", g[l] === void 0 && (g[l] = u.needsContext ? f(l, this).index(D) > -1 : f.find(l, this, null, [D]).length), g[l] && c.push(u);
              c.length && w.push({ elem: D, handlers: c });
            }
        }
        return D = this, _ < i.length && w.push({ elem: D, handlers: i.slice(_) }), w;
      },
      addProp: function(n, i) {
        Object.defineProperty(f.Event.prototype, n, {
          enumerable: !0,
          configurable: !0,
          get: Y(i) ? function() {
            if (this.originalEvent)
              return i(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[n];
          },
          set: function(o) {
            Object.defineProperty(this, n, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o
            });
          }
        });
      },
      fix: function(n) {
        return n[f.expando] ? n : new f.Event(n);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function(n) {
            var i = this || n;
            return Qn.test(i.type) && i.click && Ue(i, "input") && Nr(i, "click", er), !1;
          },
          trigger: function(n) {
            var i = this || n;
            return Qn.test(i.type) && i.click && Ue(i, "input") && Nr(i, "click"), !0;
          },
          _default: function(n) {
            var i = n.target;
            return Qn.test(i.type) && i.click && Ue(i, "input") && oe.get(i, "click") || Ue(i, "a");
          }
        },
        beforeunload: {
          postDispatch: function(n) {
            n.result !== void 0 && n.originalEvent && (n.originalEvent.returnValue = n.result);
          }
        }
      }
    };
    function Nr(n, i, o) {
      if (!o) {
        oe.get(n, i) === void 0 && f.event.add(n, i, er);
        return;
      }
      oe.set(n, i, !1), f.event.add(n, i, {
        namespace: !1,
        handler: function(u) {
          var l, c, g = oe.get(this, i);
          if (u.isTrigger & 1 && this[i]) {
            if (g.length)
              (f.event.special[i] || {}).delegateType && u.stopPropagation();
            else if (g = B.call(arguments), oe.set(this, i, g), l = o(this, i), this[i](), c = oe.get(this, i), g !== c || l ? oe.set(this, i, !1) : c = {}, g !== c)
              return u.stopImmediatePropagation(), u.preventDefault(), c && c.value;
          } else
            g.length && (oe.set(this, i, {
              value: f.event.trigger(
                f.extend(g[0], f.Event.prototype),
                g.slice(1),
                this
              )
            }), u.stopImmediatePropagation());
        }
      });
    }
    f.removeEvent = function(n, i, o) {
      n.removeEventListener && n.removeEventListener(i, o);
    }, f.Event = function(n, i) {
      if (!(this instanceof f.Event))
        return new f.Event(n, i);
      n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === void 0 && n.returnValue === !1 ? er : gr, this.target = n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n, i && f.extend(this, i), this.timeStamp = n && n.timeStamp || Date.now(), this[f.expando] = !0;
    }, f.Event.prototype = {
      constructor: f.Event,
      isDefaultPrevented: gr,
      isPropagationStopped: gr,
      isImmediatePropagationStopped: gr,
      isSimulated: !1,
      preventDefault: function() {
        var n = this.originalEvent;
        this.isDefaultPrevented = er, n && !this.isSimulated && n.preventDefault();
      },
      stopPropagation: function() {
        var n = this.originalEvent;
        this.isPropagationStopped = er, n && !this.isSimulated && n.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var n = this.originalEvent;
        this.isImmediatePropagationStopped = er, n && !this.isSimulated && n.stopImmediatePropagation(), this.stopPropagation();
      }
    }, f.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0
    }, f.event.addProp), f.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
      f.event.special[n] = {
        setup: function() {
          return Nr(this, n, Bu), !1;
        },
        trigger: function() {
          return Nr(this, n), !0;
        },
        _default: function(o) {
          return oe.get(o.target, n);
        },
        delegateType: i
      };
    }), f.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(n, i) {
      f.event.special[n] = {
        delegateType: i,
        bindType: i,
        handle: function(o) {
          var u, l = this, c = o.relatedTarget, g = o.handleObj;
          return (!c || c !== l && !f.contains(l, c)) && (o.type = g.origType, u = g.handler.apply(this, arguments), o.type = i), u;
        }
      };
    }), f.fn.extend({
      on: function(n, i, o, u) {
        return Mi(this, n, i, o, u);
      },
      one: function(n, i, o, u) {
        return Mi(this, n, i, o, u, 1);
      },
      off: function(n, i, o) {
        var u, l;
        if (n && n.preventDefault && n.handleObj)
          return u = n.handleObj, f(n.delegateTarget).off(
            u.namespace ? u.origType + "." + u.namespace : u.origType,
            u.selector,
            u.handler
          ), this;
        if (typeof n == "object") {
          for (l in n)
            this.off(l, i, n[l]);
          return this;
        }
        return (i === !1 || typeof i == "function") && (o = i, i = void 0), o === !1 && (o = gr), this.each(function() {
          f.event.remove(this, n, o, i);
        });
      }
    });
    var $u = /<script|<style|<link/i, Wu = /checked\s*(?:[^=]|=\s*.checked.)/i, ku = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function oi(n, i) {
      return Ue(n, "table") && Ue(i.nodeType !== 11 ? i : i.firstChild, "tr") && f(n).children("tbody")[0] || n;
    }
    function Hu(n) {
      return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n;
    }
    function Bi(n) {
      return (n.type || "").slice(0, 5) === "true/" ? n.type = n.type.slice(5) : n.removeAttribute("type"), n;
    }
    function So(n, i) {
      var o, u, l, c, g, w, _;
      if (i.nodeType === 1) {
        if (oe.hasData(n) && (c = oe.get(n), _ = c.events, _)) {
          oe.remove(i, "handle events");
          for (l in _)
            for (o = 0, u = _[l].length; o < u; o++)
              f.event.add(i, l, _[l][o]);
        }
        Ve.hasData(n) && (g = Ve.access(n), w = f.extend({}, g), Ve.set(i, w));
      }
    }
    function Fu(n, i) {
      var o = i.nodeName.toLowerCase();
      o === "input" && Qn.test(n.type) ? i.checked = n.checked : (o === "input" || o === "textarea") && (i.defaultValue = n.defaultValue);
    }
    function vr(n, i, o, u) {
      i = W(i);
      var l, c, g, w, _, D, P = 0, H = n.length, R = H - 1, M = i[0], ie = Y(M);
      if (ie || H > 1 && typeof M == "string" && !J.checkClone && Wu.test(M))
        return n.each(function(_e) {
          var ne = n.eq(_e);
          ie && (i[0] = M.call(this, _e, ne.html())), vr(ne, i, o, u);
        });
      if (H && (l = To(i, n[0].ownerDocument, !1, n, u), c = l.firstChild, l.childNodes.length === 1 && (l = c), c || u)) {
        for (g = f.map(_t(l, "script"), Hu), w = g.length; P < H; P++)
          _ = l, P !== R && (_ = f.clone(_, !0, !0), w && f.merge(g, _t(_, "script"))), o.call(n[P], _, P);
        if (w)
          for (D = g[g.length - 1].ownerDocument, f.map(g, Bi), P = 0; P < w; P++)
            _ = g[P], ii.test(_.type || "") && !oe.access(_, "globalEval") && f.contains(D, _) && (_.src && (_.type || "").toLowerCase() !== "module" ? f._evalUrl && !_.noModule && f._evalUrl(_.src, {
              nonce: _.nonce || _.getAttribute("nonce")
            }, D) : Ne(_.textContent.replace(ku, ""), _, D));
      }
      return n;
    }
    function Co(n, i, o) {
      for (var u, l = i ? f.filter(i, n) : n, c = 0; (u = l[c]) != null; c++)
        !o && u.nodeType === 1 && f.cleanData(_t(u)), u.parentNode && (o && Nn(u) && Ii(_t(u, "script")), u.parentNode.removeChild(u));
      return n;
    }
    f.extend({
      htmlPrefilter: function(n) {
        return n;
      },
      clone: function(n, i, o) {
        var u, l, c, g, w = n.cloneNode(!0), _ = Nn(n);
        if (!J.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !f.isXMLDoc(n))
          for (g = _t(w), c = _t(n), u = 0, l = c.length; u < l; u++)
            Fu(c[u], g[u]);
        if (i)
          if (o)
            for (c = c || _t(n), g = g || _t(w), u = 0, l = c.length; u < l; u++)
              So(c[u], g[u]);
          else
            So(n, w);
        return g = _t(w, "script"), g.length > 0 && Ii(g, !_ && _t(n, "script")), w;
      },
      cleanData: function(n) {
        for (var i, o, u, l = f.event.special, c = 0; (o = n[c]) !== void 0; c++)
          if (pt(o)) {
            if (i = o[oe.expando]) {
              if (i.events)
                for (u in i.events)
                  l[u] ? f.event.remove(o, u) : f.removeEvent(o, u, i.handle);
              o[oe.expando] = void 0;
            }
            o[Ve.expando] && (o[Ve.expando] = void 0);
          }
      }
    }), f.fn.extend({
      detach: function(n) {
        return Co(this, n, !0);
      },
      remove: function(n) {
        return Co(this, n);
      },
      text: function(n) {
        return ct(this, function(i) {
          return i === void 0 ? f.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = i);
          });
        }, null, n, arguments.length);
      },
      append: function() {
        return vr(this, arguments, function(n) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var i = oi(this, n);
            i.appendChild(n);
          }
        });
      },
      prepend: function() {
        return vr(this, arguments, function(n) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var i = oi(this, n);
            i.insertBefore(n, i.firstChild);
          }
        });
      },
      before: function() {
        return vr(this, arguments, function(n) {
          this.parentNode && this.parentNode.insertBefore(n, this);
        });
      },
      after: function() {
        return vr(this, arguments, function(n) {
          this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
        });
      },
      empty: function() {
        for (var n, i = 0; (n = this[i]) != null; i++)
          n.nodeType === 1 && (f.cleanData(_t(n, !1)), n.textContent = "");
        return this;
      },
      clone: function(n, i) {
        return n = n == null ? !1 : n, i = i == null ? n : i, this.map(function() {
          return f.clone(this, n, i);
        });
      },
      html: function(n) {
        return ct(this, function(i) {
          var o = this[0] || {}, u = 0, l = this.length;
          if (i === void 0 && o.nodeType === 1)
            return o.innerHTML;
          if (typeof i == "string" && !$u.test(i) && !Ot[(ri.exec(i) || ["", ""])[1].toLowerCase()]) {
            i = f.htmlPrefilter(i);
            try {
              for (; u < l; u++)
                o = this[u] || {}, o.nodeType === 1 && (f.cleanData(_t(o, !1)), o.innerHTML = i);
              o = 0;
            } catch {
            }
          }
          o && this.empty().append(i);
        }, null, n, arguments.length);
      },
      replaceWith: function() {
        var n = [];
        return vr(this, arguments, function(i) {
          var o = this.parentNode;
          f.inArray(this, n) < 0 && (f.cleanData(_t(this)), o && o.replaceChild(i, this));
        }, n);
      }
    }), f.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(n, i) {
      f.fn[n] = function(o) {
        for (var u, l = [], c = f(o), g = c.length - 1, w = 0; w <= g; w++)
          u = w === g ? this : this.clone(!0), f(c[w])[i](u), k.apply(l, u.get());
        return this.pushStack(l);
      };
    });
    var qi = new RegExp("^(" + Rn + ")(?!px)[a-z%]+$", "i"), $i = /^--/, ui = function(n) {
      var i = n.ownerDocument.defaultView;
      return (!i || !i.opener) && (i = d), i.getComputedStyle(n);
    }, Ao = function(n, i, o) {
      var u, l, c = {};
      for (l in i)
        c[l] = n.style[l], n.style[l] = i[l];
      u = o.call(n);
      for (l in i)
        n.style[l] = c[l];
      return u;
    }, Eo = new RegExp(Wt.join("|"), "i"), Oo = "[\\x20\\t\\r\\n\\f]", Uu = new RegExp(
      "^" + Oo + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Oo + "+$",
      "g"
    );
    (function() {
      function n() {
        if (!!D) {
          _.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", D.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Et.appendChild(_).appendChild(D);
          var P = d.getComputedStyle(D);
          o = P.top !== "1%", w = i(P.marginLeft) === 12, D.style.right = "60%", c = i(P.right) === 36, u = i(P.width) === 36, D.style.position = "absolute", l = i(D.offsetWidth / 3) === 12, Et.removeChild(_), D = null;
        }
      }
      function i(P) {
        return Math.round(parseFloat(P));
      }
      var o, u, l, c, g, w, _ = te.createElement("div"), D = te.createElement("div");
      !D.style || (D.style.backgroundClip = "content-box", D.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = D.style.backgroundClip === "content-box", f.extend(J, {
        boxSizingReliable: function() {
          return n(), u;
        },
        pixelBoxStyles: function() {
          return n(), c;
        },
        pixelPosition: function() {
          return n(), o;
        },
        reliableMarginLeft: function() {
          return n(), w;
        },
        scrollboxSize: function() {
          return n(), l;
        },
        reliableTrDimensions: function() {
          var P, H, R, M;
          return g == null && (P = te.createElement("table"), H = te.createElement("tr"), R = te.createElement("div"), P.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", H.style.cssText = "border:1px solid", H.style.height = "1px", R.style.height = "9px", R.style.display = "block", Et.appendChild(P).appendChild(H).appendChild(R), M = d.getComputedStyle(H), g = parseInt(M.height, 10) + parseInt(M.borderTopWidth, 10) + parseInt(M.borderBottomWidth, 10) === H.offsetHeight, Et.removeChild(P)), g;
        }
      }));
    })();
    function Ir(n, i, o) {
      var u, l, c, g, w = $i.test(i), _ = n.style;
      return o = o || ui(n), o && (g = o.getPropertyValue(i) || o[i], w && (g = g.replace(Uu, "$1")), g === "" && !Nn(n) && (g = f.style(n, i)), !J.pixelBoxStyles() && qi.test(g) && Eo.test(i) && (u = _.width, l = _.minWidth, c = _.maxWidth, _.minWidth = _.maxWidth = _.width = g, g = o.width, _.width = u, _.minWidth = l, _.maxWidth = c)), g !== void 0 ? g + "" : g;
    }
    function Lo(n, i) {
      return {
        get: function() {
          if (n()) {
            delete this.get;
            return;
          }
          return (this.get = i).apply(this, arguments);
        }
      };
    }
    var Do = ["Webkit", "Moz", "ms"], Ro = te.createElement("div").style, Pr = {};
    function zu(n) {
      for (var i = n[0].toUpperCase() + n.slice(1), o = Do.length; o--; )
        if (n = Do[o] + i, n in Ro)
          return n;
    }
    function yr(n) {
      var i = f.cssProps[n] || Pr[n];
      return i || (n in Ro ? n : Pr[n] = zu(n) || n);
    }
    var ju = /^(none|table(?!-c[ea]).+)/, Gu = { position: "absolute", visibility: "hidden", display: "block" }, No = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Wi(n, i, o) {
      var u = an.exec(i);
      return u ? Math.max(0, u[2] - (o || 0)) + (u[3] || "px") : i;
    }
    function ai(n, i, o, u, l, c) {
      var g = i === "width" ? 1 : 0, w = 0, _ = 0;
      if (o === (u ? "border" : "content"))
        return 0;
      for (; g < 4; g += 2)
        o === "margin" && (_ += f.css(n, o + Wt[g], !0, l)), u ? (o === "content" && (_ -= f.css(n, "padding" + Wt[g], !0, l)), o !== "margin" && (_ -= f.css(n, "border" + Wt[g] + "Width", !0, l))) : (_ += f.css(n, "padding" + Wt[g], !0, l), o !== "padding" ? _ += f.css(n, "border" + Wt[g] + "Width", !0, l) : w += f.css(n, "border" + Wt[g] + "Width", !0, l));
      return !u && c >= 0 && (_ += Math.max(0, Math.ceil(
        n["offset" + i[0].toUpperCase() + i.slice(1)] - c - _ - w - 0.5
      )) || 0), _;
    }
    function ki(n, i, o) {
      var u = ui(n), l = !J.boxSizingReliable() || o, c = l && f.css(n, "boxSizing", !1, u) === "border-box", g = c, w = Ir(n, i, u), _ = "offset" + i[0].toUpperCase() + i.slice(1);
      if (qi.test(w)) {
        if (!o)
          return w;
        w = "auto";
      }
      return (!J.boxSizingReliable() && c || !J.reliableTrDimensions() && Ue(n, "tr") || w === "auto" || !parseFloat(w) && f.css(n, "display", !1, u) === "inline") && n.getClientRects().length && (c = f.css(n, "boxSizing", !1, u) === "border-box", g = _ in n, g && (w = n[_])), w = parseFloat(w) || 0, w + ai(
        n,
        i,
        o || (c ? "border" : "content"),
        g,
        u,
        w
      ) + "px";
    }
    f.extend({
      cssHooks: {
        opacity: {
          get: function(n, i) {
            if (i) {
              var o = Ir(n, "opacity");
              return o === "" ? "1" : o;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function(n, i, o, u) {
        if (!(!n || n.nodeType === 3 || n.nodeType === 8 || !n.style)) {
          var l, c, g, w = At(i), _ = $i.test(i), D = n.style;
          if (_ || (i = yr(w)), g = f.cssHooks[i] || f.cssHooks[w], o !== void 0) {
            if (c = typeof o, c === "string" && (l = an.exec(o)) && l[1] && (o = ti(n, i, l), c = "number"), o == null || o !== o)
              return;
            c === "number" && !_ && (o += l && l[3] || (f.cssNumber[w] ? "" : "px")), !J.clearCloneStyle && o === "" && i.indexOf("background") === 0 && (D[i] = "inherit"), (!g || !("set" in g) || (o = g.set(n, o, u)) !== void 0) && (_ ? D.setProperty(i, o) : D[i] = o);
          } else
            return g && "get" in g && (l = g.get(n, !1, u)) !== void 0 ? l : D[i];
        }
      },
      css: function(n, i, o, u) {
        var l, c, g, w = At(i), _ = $i.test(i);
        return _ || (i = yr(w)), g = f.cssHooks[i] || f.cssHooks[w], g && "get" in g && (l = g.get(n, !0, o)), l === void 0 && (l = Ir(n, i, u)), l === "normal" && i in No && (l = No[i]), o === "" || o ? (c = parseFloat(l), o === !0 || isFinite(c) ? c || 0 : l) : l;
      }
    }), f.each(["height", "width"], function(n, i) {
      f.cssHooks[i] = {
        get: function(o, u, l) {
          if (u)
            return ju.test(f.css(o, "display")) && (!o.getClientRects().length || !o.getBoundingClientRect().width) ? Ao(o, Gu, function() {
              return ki(o, i, l);
            }) : ki(o, i, l);
        },
        set: function(o, u, l) {
          var c, g = ui(o), w = !J.scrollboxSize() && g.position === "absolute", _ = w || l, D = _ && f.css(o, "boxSizing", !1, g) === "border-box", P = l ? ai(
            o,
            i,
            l,
            D,
            g
          ) : 0;
          return D && w && (P -= Math.ceil(
            o["offset" + i[0].toUpperCase() + i.slice(1)] - parseFloat(g[i]) - ai(o, i, "border", !1, g) - 0.5
          )), P && (c = an.exec(u)) && (c[3] || "px") !== "px" && (o.style[i] = u, u = f.css(o, i)), Wi(o, u, P);
        }
      };
    }), f.cssHooks.marginLeft = Lo(
      J.reliableMarginLeft,
      function(n, i) {
        if (i)
          return (parseFloat(Ir(n, "marginLeft")) || n.getBoundingClientRect().left - Ao(n, { marginLeft: 0 }, function() {
            return n.getBoundingClientRect().left;
          })) + "px";
      }
    ), f.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(n, i) {
      f.cssHooks[n + i] = {
        expand: function(o) {
          for (var u = 0, l = {}, c = typeof o == "string" ? o.split(" ") : [o]; u < 4; u++)
            l[n + Wt[u] + i] = c[u] || c[u - 2] || c[0];
          return l;
        }
      }, n !== "margin" && (f.cssHooks[n + i].set = Wi);
    }), f.fn.extend({
      css: function(n, i) {
        return ct(this, function(o, u, l) {
          var c, g, w = {}, _ = 0;
          if (Array.isArray(u)) {
            for (c = ui(o), g = u.length; _ < g; _++)
              w[u[_]] = f.css(o, u[_], !1, c);
            return w;
          }
          return l !== void 0 ? f.style(o, u, l) : f.css(o, u);
        }, n, i, arguments.length > 1);
      }
    });
    function Lt(n, i, o, u, l) {
      return new Lt.prototype.init(n, i, o, u, l);
    }
    f.Tween = Lt, Lt.prototype = {
      constructor: Lt,
      init: function(n, i, o, u, l, c) {
        this.elem = n, this.prop = o, this.easing = l || f.easing._default, this.options = i, this.start = this.now = this.cur(), this.end = u, this.unit = c || (f.cssNumber[o] ? "" : "px");
      },
      cur: function() {
        var n = Lt.propHooks[this.prop];
        return n && n.get ? n.get(this) : Lt.propHooks._default.get(this);
      },
      run: function(n) {
        var i, o = Lt.propHooks[this.prop];
        return this.options.duration ? this.pos = i = f.easing[this.easing](
          n,
          this.options.duration * n,
          0,
          1,
          this.options.duration
        ) : this.pos = i = n, this.now = (this.end - this.start) * i + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : Lt.propHooks._default.set(this), this;
      }
    }, Lt.prototype.init.prototype = Lt.prototype, Lt.propHooks = {
      _default: {
        get: function(n) {
          var i;
          return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (i = f.css(n.elem, n.prop, ""), !i || i === "auto" ? 0 : i);
        },
        set: function(n) {
          f.fx.step[n.prop] ? f.fx.step[n.prop](n) : n.elem.nodeType === 1 && (f.cssHooks[n.prop] || n.elem.style[yr(n.prop)] != null) ? f.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now;
        }
      }
    }, Lt.propHooks.scrollTop = Lt.propHooks.scrollLeft = {
      set: function(n) {
        n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
      }
    }, f.easing = {
      linear: function(n) {
        return n;
      },
      swing: function(n) {
        return 0.5 - Math.cos(n * Math.PI) / 2;
      },
      _default: "swing"
    }, f.fx = Lt.prototype.init, f.fx.step = {};
    var mr, fi, Vu = /^(?:toggle|show|hide)$/, Io = /queueHooks$/;
    function si() {
      fi && (te.hidden === !1 && d.requestAnimationFrame ? d.requestAnimationFrame(si) : d.setTimeout(si, f.fx.interval), f.fx.tick());
    }
    function Hi() {
      return d.setTimeout(function() {
        mr = void 0;
      }), mr = Date.now();
    }
    function _r(n, i) {
      var o, u = 0, l = { height: n };
      for (i = i ? 1 : 0; u < 4; u += 2 - i)
        o = Wt[u], l["margin" + o] = l["padding" + o] = n;
      return i && (l.opacity = l.width = n), l;
    }
    function Po(n, i, o) {
      for (var u, l = (Vt.tweeners[i] || []).concat(Vt.tweeners["*"]), c = 0, g = l.length; c < g; c++)
        if (u = l[c].call(o, i, n))
          return u;
    }
    function Mo(n, i, o) {
      var u, l, c, g, w, _, D, P, H = "width" in i || "height" in i, R = this, M = {}, ie = n.style, _e = n.nodeType && Gt(n), ne = oe.get(n, "fxshow");
      o.queue || (g = f._queueHooks(n, "fx"), g.unqueued == null && (g.unqueued = 0, w = g.empty.fire, g.empty.fire = function() {
        g.unqueued || w();
      }), g.unqueued++, R.always(function() {
        R.always(function() {
          g.unqueued--, f.queue(n, "fx").length || g.empty.fire();
        });
      }));
      for (u in i)
        if (l = i[u], Vu.test(l)) {
          if (delete i[u], c = c || l === "toggle", l === (_e ? "hide" : "show"))
            if (l === "show" && ne && ne[u] !== void 0)
              _e = !0;
            else
              continue;
          M[u] = ne && ne[u] || f.style(n, u);
        }
      if (_ = !f.isEmptyObject(i), !(!_ && f.isEmptyObject(M))) {
        H && n.nodeType === 1 && (o.overflow = [ie.overflow, ie.overflowX, ie.overflowY], D = ne && ne.display, D == null && (D = oe.get(n, "display")), P = f.css(n, "display"), P === "none" && (D ? P = D : (zn([n], !0), D = n.style.display || D, P = f.css(n, "display"), zn([n]))), (P === "inline" || P === "inline-block" && D != null) && f.css(n, "float") === "none" && (_ || (R.done(function() {
          ie.display = D;
        }), D == null && (P = ie.display, D = P === "none" ? "" : P)), ie.display = "inline-block")), o.overflow && (ie.overflow = "hidden", R.always(function() {
          ie.overflow = o.overflow[0], ie.overflowX = o.overflow[1], ie.overflowY = o.overflow[2];
        })), _ = !1;
        for (u in M)
          _ || (ne ? "hidden" in ne && (_e = ne.hidden) : ne = oe.access(n, "fxshow", { display: D }), c && (ne.hidden = !_e), _e && zn([n], !0), R.done(function() {
            _e || zn([n]), oe.remove(n, "fxshow");
            for (u in M)
              f.style(n, u, M[u]);
          })), _ = Po(_e ? ne[u] : 0, u, R), u in ne || (ne[u] = _.start, _e && (_.end = _.start, _.start = 0));
      }
    }
    function li(n, i) {
      var o, u, l, c, g;
      for (o in n)
        if (u = At(o), l = i[u], c = n[o], Array.isArray(c) && (l = c[1], c = n[o] = c[0]), o !== u && (n[u] = c, delete n[o]), g = f.cssHooks[u], g && "expand" in g) {
          c = g.expand(c), delete n[u];
          for (o in c)
            o in n || (n[o] = c[o], i[o] = l);
        } else
          i[u] = l;
    }
    function Vt(n, i, o) {
      var u, l, c = 0, g = Vt.prefilters.length, w = f.Deferred().always(function() {
        delete _.elem;
      }), _ = function() {
        if (l)
          return !1;
        for (var H = mr || Hi(), R = Math.max(0, D.startTime + D.duration - H), M = R / D.duration || 0, ie = 1 - M, _e = 0, ne = D.tweens.length; _e < ne; _e++)
          D.tweens[_e].run(ie);
        return w.notifyWith(n, [D, ie, R]), ie < 1 && ne ? R : (ne || w.notifyWith(n, [D, 1, 0]), w.resolveWith(n, [D]), !1);
      }, D = w.promise({
        elem: n,
        props: f.extend({}, i),
        opts: f.extend(!0, {
          specialEasing: {},
          easing: f.easing._default
        }, o),
        originalProperties: i,
        originalOptions: o,
        startTime: mr || Hi(),
        duration: o.duration,
        tweens: [],
        createTween: function(H, R) {
          var M = f.Tween(
            n,
            D.opts,
            H,
            R,
            D.opts.specialEasing[H] || D.opts.easing
          );
          return D.tweens.push(M), M;
        },
        stop: function(H) {
          var R = 0, M = H ? D.tweens.length : 0;
          if (l)
            return this;
          for (l = !0; R < M; R++)
            D.tweens[R].run(1);
          return H ? (w.notifyWith(n, [D, 1, 0]), w.resolveWith(n, [D, H])) : w.rejectWith(n, [D, H]), this;
        }
      }), P = D.props;
      for (li(P, D.opts.specialEasing); c < g; c++)
        if (u = Vt.prefilters[c].call(D, n, P, D.opts), u)
          return Y(u.stop) && (f._queueHooks(D.elem, D.opts.queue).stop = u.stop.bind(u)), u;
      return f.map(P, Po, D), Y(D.opts.start) && D.opts.start.call(n, D), D.progress(D.opts.progress).done(D.opts.done, D.opts.complete).fail(D.opts.fail).always(D.opts.always), f.fx.timer(
        f.extend(_, {
          elem: n,
          anim: D,
          queue: D.opts.queue
        })
      ), D;
    }
    f.Animation = f.extend(Vt, {
      tweeners: {
        "*": [function(n, i) {
          var o = this.createTween(n, i);
          return ti(o.elem, n, an.exec(i), o), o;
        }]
      },
      tweener: function(n, i) {
        Y(n) ? (i = n, n = ["*"]) : n = n.match(Je);
        for (var o, u = 0, l = n.length; u < l; u++)
          o = n[u], Vt.tweeners[o] = Vt.tweeners[o] || [], Vt.tweeners[o].unshift(i);
      },
      prefilters: [Mo],
      prefilter: function(n, i) {
        i ? Vt.prefilters.unshift(n) : Vt.prefilters.push(n);
      }
    }), f.speed = function(n, i, o) {
      var u = n && typeof n == "object" ? f.extend({}, n) : {
        complete: o || !o && i || Y(n) && n,
        duration: n,
        easing: o && i || i && !Y(i) && i
      };
      return f.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration in f.fx.speeds ? u.duration = f.fx.speeds[u.duration] : u.duration = f.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
        Y(u.old) && u.old.call(this), u.queue && f.dequeue(this, u.queue);
      }, u;
    }, f.fn.extend({
      fadeTo: function(n, i, o, u) {
        return this.filter(Gt).css("opacity", 0).show().end().animate({ opacity: i }, n, o, u);
      },
      animate: function(n, i, o, u) {
        var l = f.isEmptyObject(n), c = f.speed(i, o, u), g = function() {
          var w = Vt(this, f.extend({}, n), c);
          (l || oe.get(this, "finish")) && w.stop(!0);
        };
        return g.finish = g, l || c.queue === !1 ? this.each(g) : this.queue(c.queue, g);
      },
      stop: function(n, i, o) {
        var u = function(l) {
          var c = l.stop;
          delete l.stop, c(o);
        };
        return typeof n != "string" && (o = i, i = n, n = void 0), i && this.queue(n || "fx", []), this.each(function() {
          var l = !0, c = n != null && n + "queueHooks", g = f.timers, w = oe.get(this);
          if (c)
            w[c] && w[c].stop && u(w[c]);
          else
            for (c in w)
              w[c] && w[c].stop && Io.test(c) && u(w[c]);
          for (c = g.length; c--; )
            g[c].elem === this && (n == null || g[c].queue === n) && (g[c].anim.stop(o), l = !1, g.splice(c, 1));
          (l || !o) && f.dequeue(this, n);
        });
      },
      finish: function(n) {
        return n !== !1 && (n = n || "fx"), this.each(function() {
          var i, o = oe.get(this), u = o[n + "queue"], l = o[n + "queueHooks"], c = f.timers, g = u ? u.length : 0;
          for (o.finish = !0, f.queue(this, n, []), l && l.stop && l.stop.call(this, !0), i = c.length; i--; )
            c[i].elem === this && c[i].queue === n && (c[i].anim.stop(!0), c.splice(i, 1));
          for (i = 0; i < g; i++)
            u[i] && u[i].finish && u[i].finish.call(this);
          delete o.finish;
        });
      }
    }), f.each(["toggle", "show", "hide"], function(n, i) {
      var o = f.fn[i];
      f.fn[i] = function(u, l, c) {
        return u == null || typeof u == "boolean" ? o.apply(this, arguments) : this.animate(_r(i, !0), u, l, c);
      };
    }), f.each({
      slideDown: _r("show"),
      slideUp: _r("hide"),
      slideToggle: _r("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(n, i) {
      f.fn[n] = function(o, u, l) {
        return this.animate(i, o, u, l);
      };
    }), f.timers = [], f.fx.tick = function() {
      var n, i = 0, o = f.timers;
      for (mr = Date.now(); i < o.length; i++)
        n = o[i], !n() && o[i] === n && o.splice(i--, 1);
      o.length || f.fx.stop(), mr = void 0;
    }, f.fx.timer = function(n) {
      f.timers.push(n), f.fx.start();
    }, f.fx.interval = 13, f.fx.start = function() {
      fi || (fi = !0, si());
    }, f.fx.stop = function() {
      fi = null;
    }, f.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, f.fn.delay = function(n, i) {
      return n = f.fx && f.fx.speeds[n] || n, i = i || "fx", this.queue(i, function(o, u) {
        var l = d.setTimeout(o, n);
        u.stop = function() {
          d.clearTimeout(l);
        };
      });
    }, function() {
      var n = te.createElement("input"), i = te.createElement("select"), o = i.appendChild(te.createElement("option"));
      n.type = "checkbox", J.checkOn = n.value !== "", J.optSelected = o.selected, n = te.createElement("input"), n.value = "t", n.type = "radio", J.radioValue = n.value === "t";
    }();
    var Bo, br = f.expr.attrHandle;
    f.fn.extend({
      attr: function(n, i) {
        return ct(this, f.attr, n, i, arguments.length > 1);
      },
      removeAttr: function(n) {
        return this.each(function() {
          f.removeAttr(this, n);
        });
      }
    }), f.extend({
      attr: function(n, i, o) {
        var u, l, c = n.nodeType;
        if (!(c === 3 || c === 8 || c === 2)) {
          if (typeof n.getAttribute > "u")
            return f.prop(n, i, o);
          if ((c !== 1 || !f.isXMLDoc(n)) && (l = f.attrHooks[i.toLowerCase()] || (f.expr.match.bool.test(i) ? Bo : void 0)), o !== void 0) {
            if (o === null) {
              f.removeAttr(n, i);
              return;
            }
            return l && "set" in l && (u = l.set(n, o, i)) !== void 0 ? u : (n.setAttribute(i, o + ""), o);
          }
          return l && "get" in l && (u = l.get(n, i)) !== null ? u : (u = f.find.attr(n, i), u == null ? void 0 : u);
        }
      },
      attrHooks: {
        type: {
          set: function(n, i) {
            if (!J.radioValue && i === "radio" && Ue(n, "input")) {
              var o = n.value;
              return n.setAttribute("type", i), o && (n.value = o), i;
            }
          }
        }
      },
      removeAttr: function(n, i) {
        var o, u = 0, l = i && i.match(Je);
        if (l && n.nodeType === 1)
          for (; o = l[u++]; )
            n.removeAttribute(o);
      }
    }), Bo = {
      set: function(n, i, o) {
        return i === !1 ? f.removeAttr(n, o) : n.setAttribute(o, o), o;
      }
    }, f.each(f.expr.match.bool.source.match(/\w+/g), function(n, i) {
      var o = br[i] || f.find.attr;
      br[i] = function(u, l, c) {
        var g, w, _ = l.toLowerCase();
        return c || (w = br[_], br[_] = g, g = o(u, l, c) != null ? _ : null, br[_] = w), g;
      };
    });
    var qo = /^(?:input|select|textarea|button)$/i, Fi = /^(?:a|area)$/i;
    f.fn.extend({
      prop: function(n, i) {
        return ct(this, f.prop, n, i, arguments.length > 1);
      },
      removeProp: function(n) {
        return this.each(function() {
          delete this[f.propFix[n] || n];
        });
      }
    }), f.extend({
      prop: function(n, i, o) {
        var u, l, c = n.nodeType;
        if (!(c === 3 || c === 8 || c === 2))
          return (c !== 1 || !f.isXMLDoc(n)) && (i = f.propFix[i] || i, l = f.propHooks[i]), o !== void 0 ? l && "set" in l && (u = l.set(n, o, i)) !== void 0 ? u : n[i] = o : l && "get" in l && (u = l.get(n, i)) !== null ? u : n[i];
      },
      propHooks: {
        tabIndex: {
          get: function(n) {
            var i = f.find.attr(n, "tabindex");
            return i ? parseInt(i, 10) : qo.test(n.nodeName) || Fi.test(n.nodeName) && n.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), J.optSelected || (f.propHooks.selected = {
      get: function(n) {
        var i = n.parentNode;
        return i && i.parentNode && i.parentNode.selectedIndex, null;
      },
      set: function(n) {
        var i = n.parentNode;
        i && (i.selectedIndex, i.parentNode && i.parentNode.selectedIndex);
      }
    }), f.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      f.propFix[this.toLowerCase()] = this;
    });
    function tr(n) {
      var i = n.match(Je) || [];
      return i.join(" ");
    }
    function jn(n) {
      return n.getAttribute && n.getAttribute("class") || "";
    }
    function Mr(n) {
      return Array.isArray(n) ? n : typeof n == "string" ? n.match(Je) || [] : [];
    }
    f.fn.extend({
      addClass: function(n) {
        var i, o, u, l, c, g;
        return Y(n) ? this.each(function(w) {
          f(this).addClass(n.call(this, w, jn(this)));
        }) : (i = Mr(n), i.length ? this.each(function() {
          if (u = jn(this), o = this.nodeType === 1 && " " + tr(u) + " ", o) {
            for (c = 0; c < i.length; c++)
              l = i[c], o.indexOf(" " + l + " ") < 0 && (o += l + " ");
            g = tr(o), u !== g && this.setAttribute("class", g);
          }
        }) : this);
      },
      removeClass: function(n) {
        var i, o, u, l, c, g;
        return Y(n) ? this.each(function(w) {
          f(this).removeClass(n.call(this, w, jn(this)));
        }) : arguments.length ? (i = Mr(n), i.length ? this.each(function() {
          if (u = jn(this), o = this.nodeType === 1 && " " + tr(u) + " ", o) {
            for (c = 0; c < i.length; c++)
              for (l = i[c]; o.indexOf(" " + l + " ") > -1; )
                o = o.replace(" " + l + " ", " ");
            g = tr(o), u !== g && this.setAttribute("class", g);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(n, i) {
        var o, u, l, c, g = typeof n, w = g === "string" || Array.isArray(n);
        return Y(n) ? this.each(function(_) {
          f(this).toggleClass(
            n.call(this, _, jn(this), i),
            i
          );
        }) : typeof i == "boolean" && w ? i ? this.addClass(n) : this.removeClass(n) : (o = Mr(n), this.each(function() {
          if (w)
            for (c = f(this), l = 0; l < o.length; l++)
              u = o[l], c.hasClass(u) ? c.removeClass(u) : c.addClass(u);
          else
            (n === void 0 || g === "boolean") && (u = jn(this), u && oe.set(this, "__className__", u), this.setAttribute && this.setAttribute(
              "class",
              u || n === !1 ? "" : oe.get(this, "__className__") || ""
            ));
        }));
      },
      hasClass: function(n) {
        var i, o, u = 0;
        for (i = " " + n + " "; o = this[u++]; )
          if (o.nodeType === 1 && (" " + tr(jn(o)) + " ").indexOf(i) > -1)
            return !0;
        return !1;
      }
    });
    var Ui = /\r/g;
    f.fn.extend({
      val: function(n) {
        var i, o, u, l = this[0];
        return arguments.length ? (u = Y(n), this.each(function(c) {
          var g;
          this.nodeType === 1 && (u ? g = n.call(this, c, f(this).val()) : g = n, g == null ? g = "" : typeof g == "number" ? g += "" : Array.isArray(g) && (g = f.map(g, function(w) {
            return w == null ? "" : w + "";
          })), i = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], (!i || !("set" in i) || i.set(this, g, "value") === void 0) && (this.value = g));
        })) : l ? (i = f.valHooks[l.type] || f.valHooks[l.nodeName.toLowerCase()], i && "get" in i && (o = i.get(l, "value")) !== void 0 ? o : (o = l.value, typeof o == "string" ? o.replace(Ui, "") : o == null ? "" : o)) : void 0;
      }
    }), f.extend({
      valHooks: {
        option: {
          get: function(n) {
            var i = f.find.attr(n, "value");
            return i != null ? i : tr(f.text(n));
          }
        },
        select: {
          get: function(n) {
            var i, o, u, l = n.options, c = n.selectedIndex, g = n.type === "select-one", w = g ? null : [], _ = g ? c + 1 : l.length;
            for (c < 0 ? u = _ : u = g ? c : 0; u < _; u++)
              if (o = l[u], (o.selected || u === c) && !o.disabled && (!o.parentNode.disabled || !Ue(o.parentNode, "optgroup"))) {
                if (i = f(o).val(), g)
                  return i;
                w.push(i);
              }
            return w;
          },
          set: function(n, i) {
            for (var o, u, l = n.options, c = f.makeArray(i), g = l.length; g--; )
              u = l[g], (u.selected = f.inArray(f.valHooks.option.get(u), c) > -1) && (o = !0);
            return o || (n.selectedIndex = -1), c;
          }
        }
      }
    }), f.each(["radio", "checkbox"], function() {
      f.valHooks[this] = {
        set: function(n, i) {
          if (Array.isArray(i))
            return n.checked = f.inArray(f(n).val(), i) > -1;
        }
      }, J.checkOn || (f.valHooks[this].get = function(n) {
        return n.getAttribute("value") === null ? "on" : n.value;
      });
    }), J.focusin = "onfocusin" in d;
    var nr = /^(?:focusinfocus|focusoutblur)$/, zi = function(n) {
      n.stopPropagation();
    };
    f.extend(f.event, {
      trigger: function(n, i, o, u) {
        var l, c, g, w, _, D, P, H, R = [o || te], M = ge.call(n, "type") ? n.type : n, ie = ge.call(n, "namespace") ? n.namespace.split(".") : [];
        if (c = H = g = o = o || te, !(o.nodeType === 3 || o.nodeType === 8) && !nr.test(M + f.event.triggered) && (M.indexOf(".") > -1 && (ie = M.split("."), M = ie.shift(), ie.sort()), _ = M.indexOf(":") < 0 && "on" + M, n = n[f.expando] ? n : new f.Event(M, typeof n == "object" && n), n.isTrigger = u ? 2 : 3, n.namespace = ie.join("."), n.rnamespace = n.namespace ? new RegExp("(^|\\.)" + ie.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = void 0, n.target || (n.target = o), i = i == null ? [n] : f.makeArray(i, [n]), P = f.event.special[M] || {}, !(!u && P.trigger && P.trigger.apply(o, i) === !1))) {
          if (!u && !P.noBubble && !ae(o)) {
            for (w = P.delegateType || M, nr.test(w + M) || (c = c.parentNode); c; c = c.parentNode)
              R.push(c), g = c;
            g === (o.ownerDocument || te) && R.push(g.defaultView || g.parentWindow || d);
          }
          for (l = 0; (c = R[l++]) && !n.isPropagationStopped(); )
            H = c, n.type = l > 1 ? w : P.bindType || M, D = (oe.get(c, "events") || /* @__PURE__ */ Object.create(null))[n.type] && oe.get(c, "handle"), D && D.apply(c, i), D = _ && c[_], D && D.apply && pt(c) && (n.result = D.apply(c, i), n.result === !1 && n.preventDefault());
          return n.type = M, !u && !n.isDefaultPrevented() && (!P._default || P._default.apply(R.pop(), i) === !1) && pt(o) && _ && Y(o[M]) && !ae(o) && (g = o[_], g && (o[_] = null), f.event.triggered = M, n.isPropagationStopped() && H.addEventListener(M, zi), o[M](), n.isPropagationStopped() && H.removeEventListener(M, zi), f.event.triggered = void 0, g && (o[_] = g)), n.result;
        }
      },
      simulate: function(n, i, o) {
        var u = f.extend(
          new f.Event(),
          o,
          {
            type: n,
            isSimulated: !0
          }
        );
        f.event.trigger(u, null, i);
      }
    }), f.fn.extend({
      trigger: function(n, i) {
        return this.each(function() {
          f.event.trigger(n, i, this);
        });
      },
      triggerHandler: function(n, i) {
        var o = this[0];
        if (o)
          return f.event.trigger(n, i, o, !0);
      }
    }), J.focusin || f.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
      var o = function(u) {
        f.event.simulate(i, u.target, f.event.fix(u));
      };
      f.event.special[i] = {
        setup: function() {
          var u = this.ownerDocument || this.document || this, l = oe.access(u, i);
          l || u.addEventListener(n, o, !0), oe.access(u, i, (l || 0) + 1);
        },
        teardown: function() {
          var u = this.ownerDocument || this.document || this, l = oe.access(u, i) - 1;
          l ? oe.access(u, i, l) : (u.removeEventListener(n, o, !0), oe.remove(u, i));
        }
      };
    });
    var xr = d.location, $o = { guid: Date.now() }, ci = /\?/;
    f.parseXML = function(n) {
      var i, o;
      if (!n || typeof n != "string")
        return null;
      try {
        i = new d.DOMParser().parseFromString(n, "text/xml");
      } catch {
      }
      return o = i && i.getElementsByTagName("parsererror")[0], (!i || o) && f.error("Invalid XML: " + (o ? f.map(o.childNodes, function(u) {
        return u.textContent;
      }).join(`
`) : n)), i;
    };
    var Wo = /\[\]$/, ji = /\r?\n/g, ko = /^(?:submit|button|image|reset|file)$/i, Xu = /^(?:input|select|textarea|keygen)/i;
    function Gi(n, i, o, u) {
      var l;
      if (Array.isArray(i))
        f.each(i, function(c, g) {
          o || Wo.test(n) ? u(n, g) : Gi(
            n + "[" + (typeof g == "object" && g != null ? c : "") + "]",
            g,
            o,
            u
          );
        });
      else if (!o && me(i) === "object")
        for (l in i)
          Gi(n + "[" + l + "]", i[l], o, u);
      else
        u(n, i);
    }
    f.param = function(n, i) {
      var o, u = [], l = function(c, g) {
        var w = Y(g) ? g() : g;
        u[u.length] = encodeURIComponent(c) + "=" + encodeURIComponent(w == null ? "" : w);
      };
      if (n == null)
        return "";
      if (Array.isArray(n) || n.jquery && !f.isPlainObject(n))
        f.each(n, function() {
          l(this.name, this.value);
        });
      else
        for (o in n)
          Gi(o, n[o], i, l);
      return u.join("&");
    }, f.fn.extend({
      serialize: function() {
        return f.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var n = f.prop(this, "elements");
          return n ? f.makeArray(n) : this;
        }).filter(function() {
          var n = this.type;
          return this.name && !f(this).is(":disabled") && Xu.test(this.nodeName) && !ko.test(n) && (this.checked || !Qn.test(n));
        }).map(function(n, i) {
          var o = f(this).val();
          return o == null ? null : Array.isArray(o) ? f.map(o, function(u) {
            return { name: i.name, value: u.replace(ji, `\r
`) };
          }) : { name: i.name, value: o.replace(ji, `\r
`) };
        }).get();
      }
    });
    var Yu = /%20/g, Ho = /#.*$/, Ku = /([?&])_=[^&]*/, Zu = /^(.*?):[ \t]*([^\r\n]*)$/mg, Ju = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qu = /^(?:GET|HEAD)$/, Vi = /^\/\//, Fo = {}, Xi = {}, Uo = "*/".concat("*"), Yi = te.createElement("a");
    Yi.href = xr.href;
    function zo(n) {
      return function(i, o) {
        typeof i != "string" && (o = i, i = "*");
        var u, l = 0, c = i.toLowerCase().match(Je) || [];
        if (Y(o))
          for (; u = c[l++]; )
            u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(o)) : (n[u] = n[u] || []).push(o);
      };
    }
    function Ge(n, i, o, u) {
      var l = {}, c = n === Xi;
      function g(w) {
        var _;
        return l[w] = !0, f.each(n[w] || [], function(D, P) {
          var H = P(i, o, u);
          if (typeof H == "string" && !c && !l[H])
            return i.dataTypes.unshift(H), g(H), !1;
          if (c)
            return !(_ = H);
        }), _;
      }
      return g(i.dataTypes[0]) || !l["*"] && g("*");
    }
    function ze(n, i) {
      var o, u, l = f.ajaxSettings.flatOptions || {};
      for (o in i)
        i[o] !== void 0 && ((l[o] ? n : u || (u = {}))[o] = i[o]);
      return u && f.extend(!0, n, u), n;
    }
    function ea(n, i, o) {
      for (var u, l, c, g, w = n.contents, _ = n.dataTypes; _[0] === "*"; )
        _.shift(), u === void 0 && (u = n.mimeType || i.getResponseHeader("Content-Type"));
      if (u) {
        for (l in w)
          if (w[l] && w[l].test(u)) {
            _.unshift(l);
            break;
          }
      }
      if (_[0] in o)
        c = _[0];
      else {
        for (l in o) {
          if (!_[0] || n.converters[l + " " + _[0]]) {
            c = l;
            break;
          }
          g || (g = l);
        }
        c = c || g;
      }
      if (c)
        return c !== _[0] && _.unshift(c), o[c];
    }
    function ta(n, i, o, u) {
      var l, c, g, w, _, D = {}, P = n.dataTypes.slice();
      if (P[1])
        for (g in n.converters)
          D[g.toLowerCase()] = n.converters[g];
      for (c = P.shift(); c; )
        if (n.responseFields[c] && (o[n.responseFields[c]] = i), !_ && u && n.dataFilter && (i = n.dataFilter(i, n.dataType)), _ = c, c = P.shift(), c) {
          if (c === "*")
            c = _;
          else if (_ !== "*" && _ !== c) {
            if (g = D[_ + " " + c] || D["* " + c], !g) {
              for (l in D)
                if (w = l.split(" "), w[1] === c && (g = D[_ + " " + w[0]] || D["* " + w[0]], g)) {
                  g === !0 ? g = D[l] : D[l] !== !0 && (c = w[0], P.unshift(w[1]));
                  break;
                }
            }
            if (g !== !0)
              if (g && n.throws)
                i = g(i);
              else
                try {
                  i = g(i);
                } catch (H) {
                  return {
                    state: "parsererror",
                    error: g ? H : "No conversion from " + _ + " to " + c
                  };
                }
          }
        }
      return { state: "success", data: i };
    }
    f.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xr.href,
        type: "GET",
        isLocal: Ju.test(xr.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Uo,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": f.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(n, i) {
        return i ? ze(ze(n, f.ajaxSettings), i) : ze(f.ajaxSettings, n);
      },
      ajaxPrefilter: zo(Fo),
      ajaxTransport: zo(Xi),
      ajax: function(n, i) {
        typeof n == "object" && (i = n, n = void 0), i = i || {};
        var o, u, l, c, g, w, _, D, P, H, R = f.ajaxSetup({}, i), M = R.context || R, ie = R.context && (M.nodeType || M.jquery) ? f(M) : f.event, _e = f.Deferred(), ne = f.Callbacks("once memory"), et = R.statusCode || {}, tt = {}, Oe = {}, Le = "canceled", ve = {
          readyState: 0,
          getResponseHeader: function(De) {
            var Qe;
            if (_) {
              if (!c)
                for (c = {}; Qe = Zu.exec(l); )
                  c[Qe[1].toLowerCase() + " "] = (c[Qe[1].toLowerCase() + " "] || []).concat(Qe[2]);
              Qe = c[De.toLowerCase() + " "];
            }
            return Qe == null ? null : Qe.join(", ");
          },
          getAllResponseHeaders: function() {
            return _ ? l : null;
          },
          setRequestHeader: function(De, Qe) {
            return _ == null && (De = Oe[De.toLowerCase()] = Oe[De.toLowerCase()] || De, tt[De] = Qe), this;
          },
          overrideMimeType: function(De) {
            return _ == null && (R.mimeType = De), this;
          },
          statusCode: function(De) {
            var Qe;
            if (De)
              if (_)
                ve.always(De[ve.status]);
              else
                for (Qe in De)
                  et[Qe] = [et[Qe], De[Qe]];
            return this;
          },
          abort: function(De) {
            var Qe = De || Le;
            return o && o.abort(Qe), Dt(0, Qe), this;
          }
        };
        if (_e.promise(ve), R.url = ((n || R.url || xr.href) + "").replace(Vi, xr.protocol + "//"), R.type = i.method || i.type || R.method || R.type, R.dataTypes = (R.dataType || "*").toLowerCase().match(Je) || [""], R.crossDomain == null) {
          w = te.createElement("a");
          try {
            w.href = R.url, w.href = w.href, R.crossDomain = Yi.protocol + "//" + Yi.host != w.protocol + "//" + w.host;
          } catch {
            R.crossDomain = !0;
          }
        }
        if (R.data && R.processData && typeof R.data != "string" && (R.data = f.param(R.data, R.traditional)), Ge(Fo, R, i, ve), _)
          return ve;
        D = f.event && R.global, D && f.active++ === 0 && f.event.trigger("ajaxStart"), R.type = R.type.toUpperCase(), R.hasContent = !Qu.test(R.type), u = R.url.replace(Ho, ""), R.hasContent ? R.data && R.processData && (R.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (R.data = R.data.replace(Yu, "+")) : (H = R.url.slice(u.length), R.data && (R.processData || typeof R.data == "string") && (u += (ci.test(u) ? "&" : "?") + R.data, delete R.data), R.cache === !1 && (u = u.replace(Ku, "$1"), H = (ci.test(u) ? "&" : "?") + "_=" + $o.guid++ + H), R.url = u + H), R.ifModified && (f.lastModified[u] && ve.setRequestHeader("If-Modified-Since", f.lastModified[u]), f.etag[u] && ve.setRequestHeader("If-None-Match", f.etag[u])), (R.data && R.hasContent && R.contentType !== !1 || i.contentType) && ve.setRequestHeader("Content-Type", R.contentType), ve.setRequestHeader(
          "Accept",
          R.dataTypes[0] && R.accepts[R.dataTypes[0]] ? R.accepts[R.dataTypes[0]] + (R.dataTypes[0] !== "*" ? ", " + Uo + "; q=0.01" : "") : R.accepts["*"]
        );
        for (P in R.headers)
          ve.setRequestHeader(P, R.headers[P]);
        if (R.beforeSend && (R.beforeSend.call(M, ve, R) === !1 || _))
          return ve.abort();
        if (Le = "abort", ne.add(R.complete), ve.done(R.success), ve.fail(R.error), o = Ge(Xi, R, i, ve), !o)
          Dt(-1, "No Transport");
        else {
          if (ve.readyState = 1, D && ie.trigger("ajaxSend", [ve, R]), _)
            return ve;
          R.async && R.timeout > 0 && (g = d.setTimeout(function() {
            ve.abort("timeout");
          }, R.timeout));
          try {
            _ = !1, o.send(tt, Dt);
          } catch (De) {
            if (_)
              throw De;
            Dt(-1, De);
          }
        }
        function Dt(De, Qe, qr, pi) {
          var Rt, mn, Xt, Nt, In, kt = Qe;
          _ || (_ = !0, g && d.clearTimeout(g), o = void 0, l = pi || "", ve.readyState = De > 0 ? 4 : 0, Rt = De >= 200 && De < 300 || De === 304, qr && (Nt = ea(R, ve, qr)), !Rt && f.inArray("script", R.dataTypes) > -1 && f.inArray("json", R.dataTypes) < 0 && (R.converters["text script"] = function() {
          }), Nt = ta(R, Nt, ve, Rt), Rt ? (R.ifModified && (In = ve.getResponseHeader("Last-Modified"), In && (f.lastModified[u] = In), In = ve.getResponseHeader("etag"), In && (f.etag[u] = In)), De === 204 || R.type === "HEAD" ? kt = "nocontent" : De === 304 ? kt = "notmodified" : (kt = Nt.state, mn = Nt.data, Xt = Nt.error, Rt = !Xt)) : (Xt = kt, (De || !kt) && (kt = "error", De < 0 && (De = 0))), ve.status = De, ve.statusText = (Qe || kt) + "", Rt ? _e.resolveWith(M, [mn, kt, ve]) : _e.rejectWith(M, [ve, kt, Xt]), ve.statusCode(et), et = void 0, D && ie.trigger(
            Rt ? "ajaxSuccess" : "ajaxError",
            [ve, R, Rt ? mn : Xt]
          ), ne.fireWith(M, [ve, kt]), D && (ie.trigger("ajaxComplete", [ve, R]), --f.active || f.event.trigger("ajaxStop")));
        }
        return ve;
      },
      getJSON: function(n, i, o) {
        return f.get(n, i, o, "json");
      },
      getScript: function(n, i) {
        return f.get(n, void 0, i, "script");
      }
    }), f.each(["get", "post"], function(n, i) {
      f[i] = function(o, u, l, c) {
        return Y(u) && (c = c || l, l = u, u = void 0), f.ajax(f.extend({
          url: o,
          type: i,
          dataType: c,
          data: u,
          success: l
        }, f.isPlainObject(o) && o));
      };
    }), f.ajaxPrefilter(function(n) {
      var i;
      for (i in n.headers)
        i.toLowerCase() === "content-type" && (n.contentType = n.headers[i] || "");
    }), f._evalUrl = function(n, i, o) {
      return f.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(u) {
          f.globalEval(u, i, o);
        }
      });
    }, f.fn.extend({
      wrapAll: function(n) {
        var i;
        return this[0] && (Y(n) && (n = n.call(this[0])), i = f(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && i.insertBefore(this[0]), i.map(function() {
          for (var o = this; o.firstElementChild; )
            o = o.firstElementChild;
          return o;
        }).append(this)), this;
      },
      wrapInner: function(n) {
        return Y(n) ? this.each(function(i) {
          f(this).wrapInner(n.call(this, i));
        }) : this.each(function() {
          var i = f(this), o = i.contents();
          o.length ? o.wrapAll(n) : i.append(n);
        });
      },
      wrap: function(n) {
        var i = Y(n);
        return this.each(function(o) {
          f(this).wrapAll(i ? n.call(this, o) : n);
        });
      },
      unwrap: function(n) {
        return this.parent(n).not("body").each(function() {
          f(this).replaceWith(this.childNodes);
        }), this;
      }
    }), f.expr.pseudos.hidden = function(n) {
      return !f.expr.pseudos.visible(n);
    }, f.expr.pseudos.visible = function(n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }, f.ajaxSettings.xhr = function() {
      try {
        return new d.XMLHttpRequest();
      } catch {
      }
    };
    var na = {
      0: 200,
      1223: 204
    }, Br = f.ajaxSettings.xhr();
    J.cors = !!Br && "withCredentials" in Br, J.ajax = Br = !!Br, f.ajaxTransport(function(n) {
      var i, o;
      if (J.cors || Br && !n.crossDomain)
        return {
          send: function(u, l) {
            var c, g = n.xhr();
            if (g.open(
              n.type,
              n.url,
              n.async,
              n.username,
              n.password
            ), n.xhrFields)
              for (c in n.xhrFields)
                g[c] = n.xhrFields[c];
            n.mimeType && g.overrideMimeType && g.overrideMimeType(n.mimeType), !n.crossDomain && !u["X-Requested-With"] && (u["X-Requested-With"] = "XMLHttpRequest");
            for (c in u)
              g.setRequestHeader(c, u[c]);
            i = function(w) {
              return function() {
                i && (i = o = g.onload = g.onerror = g.onabort = g.ontimeout = g.onreadystatechange = null, w === "abort" ? g.abort() : w === "error" ? typeof g.status != "number" ? l(0, "error") : l(
                  g.status,
                  g.statusText
                ) : l(
                  na[g.status] || g.status,
                  g.statusText,
                  (g.responseType || "text") !== "text" || typeof g.responseText != "string" ? { binary: g.response } : { text: g.responseText },
                  g.getAllResponseHeaders()
                ));
              };
            }, g.onload = i(), o = g.onerror = g.ontimeout = i("error"), g.onabort !== void 0 ? g.onabort = o : g.onreadystatechange = function() {
              g.readyState === 4 && d.setTimeout(function() {
                i && o();
              });
            }, i = i("abort");
            try {
              g.send(n.hasContent && n.data || null);
            } catch (w) {
              if (i)
                throw w;
            }
          },
          abort: function() {
            i && i();
          }
        };
    }), f.ajaxPrefilter(function(n) {
      n.crossDomain && (n.contents.script = !1);
    }), f.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(n) {
          return f.globalEval(n), n;
        }
      }
    }), f.ajaxPrefilter("script", function(n) {
      n.cache === void 0 && (n.cache = !1), n.crossDomain && (n.type = "GET");
    }), f.ajaxTransport("script", function(n) {
      if (n.crossDomain || n.scriptAttrs) {
        var i, o;
        return {
          send: function(u, l) {
            i = f("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", o = function(c) {
              i.remove(), o = null, c && l(c.type === "error" ? 404 : 200, c.type);
            }), te.head.appendChild(i[0]);
          },
          abort: function() {
            o && o();
          }
        };
      }
    });
    var jo = [], Ki = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var n = jo.pop() || f.expando + "_" + $o.guid++;
        return this[n] = !0, n;
      }
    }), f.ajaxPrefilter("json jsonp", function(n, i, o) {
      var u, l, c, g = n.jsonp !== !1 && (Ki.test(n.url) ? "url" : typeof n.data == "string" && (n.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ki.test(n.data) && "data");
      if (g || n.dataTypes[0] === "jsonp")
        return u = n.jsonpCallback = Y(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, g ? n[g] = n[g].replace(Ki, "$1" + u) : n.jsonp !== !1 && (n.url += (ci.test(n.url) ? "&" : "?") + n.jsonp + "=" + u), n.converters["script json"] = function() {
          return c || f.error(u + " was not called"), c[0];
        }, n.dataTypes[0] = "json", l = d[u], d[u] = function() {
          c = arguments;
        }, o.always(function() {
          l === void 0 ? f(d).removeProp(u) : d[u] = l, n[u] && (n.jsonpCallback = i.jsonpCallback, jo.push(u)), c && Y(l) && l(c[0]), c = l = void 0;
        }), "script";
    }), J.createHTMLDocument = function() {
      var n = te.implementation.createHTMLDocument("").body;
      return n.innerHTML = "<form></form><form></form>", n.childNodes.length === 2;
    }(), f.parseHTML = function(n, i, o) {
      if (typeof n != "string")
        return [];
      typeof i == "boolean" && (o = i, i = !1);
      var u, l, c;
      return i || (J.createHTMLDocument ? (i = te.implementation.createHTMLDocument(""), u = i.createElement("base"), u.href = te.location.href, i.head.appendChild(u)) : i = te), l = lt.exec(n), c = !o && [], l ? [i.createElement(l[1])] : (l = To([n], i, c), c && c.length && f(c).remove(), f.merge([], l.childNodes));
    }, f.fn.load = function(n, i, o) {
      var u, l, c, g = this, w = n.indexOf(" ");
      return w > -1 && (u = tr(n.slice(w)), n = n.slice(0, w)), Y(i) ? (o = i, i = void 0) : i && typeof i == "object" && (l = "POST"), g.length > 0 && f.ajax({
        url: n,
        type: l || "GET",
        dataType: "html",
        data: i
      }).done(function(_) {
        c = arguments, g.html(u ? f("<div>").append(f.parseHTML(_)).find(u) : _);
      }).always(o && function(_, D) {
        g.each(function() {
          o.apply(this, c || [_.responseText, D, _]);
        });
      }), this;
    }, f.expr.pseudos.animated = function(n) {
      return f.grep(f.timers, function(i) {
        return n === i.elem;
      }).length;
    }, f.offset = {
      setOffset: function(n, i, o) {
        var u, l, c, g, w, _, D, P = f.css(n, "position"), H = f(n), R = {};
        P === "static" && (n.style.position = "relative"), w = H.offset(), c = f.css(n, "top"), _ = f.css(n, "left"), D = (P === "absolute" || P === "fixed") && (c + _).indexOf("auto") > -1, D ? (u = H.position(), g = u.top, l = u.left) : (g = parseFloat(c) || 0, l = parseFloat(_) || 0), Y(i) && (i = i.call(n, o, f.extend({}, w))), i.top != null && (R.top = i.top - w.top + g), i.left != null && (R.left = i.left - w.left + l), "using" in i ? i.using.call(n, R) : H.css(R);
      }
    }, f.fn.extend({
      offset: function(n) {
        if (arguments.length)
          return n === void 0 ? this : this.each(function(l) {
            f.offset.setOffset(this, n, l);
          });
        var i, o, u = this[0];
        if (!!u)
          return u.getClientRects().length ? (i = u.getBoundingClientRect(), o = u.ownerDocument.defaultView, {
            top: i.top + o.pageYOffset,
            left: i.left + o.pageXOffset
          }) : { top: 0, left: 0 };
      },
      position: function() {
        if (!!this[0]) {
          var n, i, o, u = this[0], l = { top: 0, left: 0 };
          if (f.css(u, "position") === "fixed")
            i = u.getBoundingClientRect();
          else {
            for (i = this.offset(), o = u.ownerDocument, n = u.offsetParent || o.documentElement; n && (n === o.body || n === o.documentElement) && f.css(n, "position") === "static"; )
              n = n.parentNode;
            n && n !== u && n.nodeType === 1 && (l = f(n).offset(), l.top += f.css(n, "borderTopWidth", !0), l.left += f.css(n, "borderLeftWidth", !0));
          }
          return {
            top: i.top - l.top - f.css(u, "marginTop", !0),
            left: i.left - l.left - f.css(u, "marginLeft", !0)
          };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var n = this.offsetParent; n && f.css(n, "position") === "static"; )
            n = n.offsetParent;
          return n || Et;
        });
      }
    }), f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, i) {
      var o = i === "pageYOffset";
      f.fn[n] = function(u) {
        return ct(this, function(l, c, g) {
          var w;
          if (ae(l) ? w = l : l.nodeType === 9 && (w = l.defaultView), g === void 0)
            return w ? w[i] : l[c];
          w ? w.scrollTo(
            o ? w.pageXOffset : g,
            o ? g : w.pageYOffset
          ) : l[c] = g;
        }, n, u, arguments.length);
      };
    }), f.each(["top", "left"], function(n, i) {
      f.cssHooks[i] = Lo(
        J.pixelPosition,
        function(o, u) {
          if (u)
            return u = Ir(o, i), qi.test(u) ? f(o).position()[i] + "px" : u;
        }
      );
    }), f.each({ Height: "height", Width: "width" }, function(n, i) {
      f.each({
        padding: "inner" + n,
        content: i,
        "": "outer" + n
      }, function(o, u) {
        f.fn[u] = function(l, c) {
          var g = arguments.length && (o || typeof l != "boolean"), w = o || (l === !0 || c === !0 ? "margin" : "border");
          return ct(this, function(_, D, P) {
            var H;
            return ae(_) ? u.indexOf("outer") === 0 ? _["inner" + n] : _.document.documentElement["client" + n] : _.nodeType === 9 ? (H = _.documentElement, Math.max(
              _.body["scroll" + n],
              H["scroll" + n],
              _.body["offset" + n],
              H["offset" + n],
              H["client" + n]
            )) : P === void 0 ? f.css(_, D, w) : f.style(_, D, P, w);
          }, i, g ? l : void 0, g);
        };
      });
    }), f.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(n, i) {
      f.fn[i] = function(o) {
        return this.on(i, o);
      };
    }), f.fn.extend({
      bind: function(n, i, o) {
        return this.on(n, null, i, o);
      },
      unbind: function(n, i) {
        return this.off(n, null, i);
      },
      delegate: function(n, i, o, u) {
        return this.on(i, n, o, u);
      },
      undelegate: function(n, i, o) {
        return arguments.length === 1 ? this.off(n, "**") : this.off(i, n || "**", o);
      },
      hover: function(n, i) {
        return this.mouseenter(n).mouseleave(i || n);
      }
    }), f.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(n, i) {
        f.fn[i] = function(o, u) {
          return arguments.length > 0 ? this.on(i, null, o, u) : this.trigger(i);
        };
      }
    );
    var Go = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    f.proxy = function(n, i) {
      var o, u, l;
      if (typeof i == "string" && (o = n[i], i = n, n = o), !!Y(n))
        return u = B.call(arguments, 2), l = function() {
          return n.apply(i || this, u.concat(B.call(arguments)));
        }, l.guid = n.guid = n.guid || f.guid++, l;
    }, f.holdReady = function(n) {
      n ? f.readyWait++ : f.ready(!0);
    }, f.isArray = Array.isArray, f.parseJSON = JSON.parse, f.nodeName = Ue, f.isFunction = Y, f.isWindow = ae, f.camelCase = At, f.type = me, f.now = Date.now, f.isNumeric = function(n) {
      var i = f.type(n);
      return (i === "number" || i === "string") && !isNaN(n - parseFloat(n));
    }, f.trim = function(n) {
      return n == null ? "" : (n + "").replace(Go, "$1");
    };
    var ra = d.jQuery, ht = d.$;
    return f.noConflict = function(n) {
      return d.$ === f && (d.$ = ht), n && d.jQuery === f && (d.jQuery = ra), f;
    }, typeof s > "u" && (d.jQuery = d.$ = f), f;
  });
})(Rl);
const uf = Rl.exports, g0 = ["m-popup"], v0 = ["m-popup-main"], y0 = {
  key: 0,
  class: "back"
}, m0 = ["m-popup-popup"], _0 = /* @__PURE__ */ On({
  __name: "MPopup",
  props: {
    atach: { required: !0, type: String },
    role: { required: !0, type: String },
    placement: { default: "auto", type: String }
  },
  setup(h) {
    const d = h, s = $n(!1), S = $n(!1), E = $n("");
    let B, W;
    function k() {
      return document.querySelector(`[m-popup="${E.value}"]`);
    }
    bo(() => {
      E.value = df("popup"), z();
    });
    function z() {
      d.atach && (W = document.querySelector(d.atach), setTimeout(() => {
        W && (d.role === "popup" ? W.addEventListener("click", X) : W.addEventListener("mouseenter", X));
      }, 1e3));
    }
    function X() {
      s.value || (s.value = !0, S.value = !1, setTimeout(() => {
        const J = k();
        d.role === "popup" ? W.removeEventListener("click", X) : W.addEventListener("mouseenter", X);
        const Y = J.querySelector("#m-popup__main");
        Y && document.body.appendChild(Y), ge(), d.role === "popup" ? window.addEventListener("click", Te) : window.addEventListener("mousemove", Te), S.value = !0;
      }, 100));
    }
    function G() {
      S.value = !1, window.removeEventListener("click", Te), window.removeEventListener("mousemove", Te), d.role === "popup" ? W.addEventListener("click", X) : W.addEventListener("mouseenter", X), setTimeout(() => {
        B && B.destroy();
        const J = document.querySelector(`[m-popup-main="${E.value}"]`), Y = k();
        J.parentElement == document.body && Y.appendChild(J), s.value = !1;
      }, 100);
    }
    function ge() {
      const J = document.querySelector(`[m-popup-popup="${E.value}"]`);
      B = h0(W, J, {
        placement: d.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 5]
            }
          }
        ]
      });
    }
    function Te(J) {
      setTimeout(() => {
        if (J.type === "mousemove") {
          const Y = uf(`${d.atach}:hover`).length === 0;
          let ae = !0;
          d.role !== "tooltip" && (ae = uf(`[m-popup-popup="${E.value}"]:hover`).length === 0), Y && ae && G();
        } else
          uf(`[m-popup-popup="${E.value}"]:hover`).length === 0 && G();
      }, 200);
    }
    function ce() {
      B && B.destroy(), W && (W.removeEventListener("click", X), W.removeEventListener("mouseenter", X)), window.removeEventListener("click", Te), window.removeEventListener("mousemove", Te);
      const J = document.querySelector(`[m-popup-main="${E.value}"]`);
      J == null || J.remove();
    }
    return Mv(() => d.atach, () => {
      window.removeEventListener("click", Te), window.removeEventListener("mousemove", Te), W && (W.removeEventListener("click", X), W.removeEventListener("mouseenter", X)), z();
    }), Ru(ce), Nu(ce), (J, Y) => (wt(), Tt("div", {
      id: "el",
      "m-popup": E.value,
      style: Ci({
        opacity: S.value ? 1 : 0,
        position: "absolute",
        cursor: "default"
      })
    }, [
      Ye("div", {
        "m-popup-main": E.value,
        id: "m-popup__main"
      }, [
        S.value && d.role === "popup" ? (wt(), Tt("div", y0)) : Ou("", !0),
        s.value ? (wt(), Tt("div", {
          key: 1,
          "m-popup-popup": E.value,
          class: "m-popup",
          role: "tooltip"
        }, [
          dn(J.$slots, "default")
        ], 8, m0)) : Ou("", !0)
      ], 8, v0)
    ], 12, g0));
  }
}), b0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _0
}, Symbol.toStringTag, { value: "Module" })), x0 = /* @__PURE__ */ On({
  __name: "MPopupPopin",
  props: {
    maxWidth: { default: "350px", type: String }
  },
  setup(h) {
    const d = h;
    return (s, S) => (wt(), Tt("div", {
      class: "m-popup-popin",
      style: Ci({ maxWidth: d.maxWidth })
    }, [
      dn(s.$slots, "default")
    ], 4));
  }
}), w0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: x0
}, Symbol.toStringTag, { value: "Module" })), T0 = /* @__PURE__ */ On({
  __name: "MPopupTooltip",
  props: {
    backgoundColor: {
      default: "var(--m-popup-tooltip-background-color)",
      type: String
    },
    textColor: { default: "var(--m-popup-tooltip-text-color)", type: String },
    radius: { default: ".9em", type: String },
    padding: { default: "10px", type: String },
    maxWidth: { default: "250px", type: String }
  },
  setup(h) {
    const d = h;
    return (s, S) => (wt(), Tt("div", {
      class: "m-popup-tooltip",
      style: Ci({
        color: d.textColor,
        borderRadius: d.radius,
        padding: d.padding,
        backgroundColor: d.backgoundColor,
        maxWidth: d.maxWidth
      })
    }, [
      dn(s.$slots, "default")
    ], 4));
  }
}), S0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: T0
}, Symbol.toStringTag, { value: "Module" })), C0 = ["innerHTML"], A0 = /* @__PURE__ */ On({
  __name: "MTextFormat",
  props: {
    text: { default: "true", type: String }
  },
  setup(h) {
    return (d, s) => (wt(), Tt("div", {
      class: "m-text-format",
      innerHTML: pf(_l)(h.text)
    }, null, 8, C0));
  }
});
const E0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A0
}, Symbol.toStringTag, { value: "Module" })), O0 = ["type", "disabled"], L0 = /* @__PURE__ */ On({
  __name: "MButton",
  props: {
    primary: { default: !0, type: Boolean },
    danger: { default: !1, type: Boolean },
    success: { default: !1, type: Boolean },
    info: { default: !1, type: Boolean },
    dark: { default: !1, type: Boolean },
    flat: { default: !1, type: Boolean },
    transparent: { default: !1, type: Boolean },
    lg: { default: !1, type: Boolean },
    square: { default: !1, type: Boolean },
    icon: { default: !1, type: Boolean },
    border: { default: !1, type: Boolean },
    disabled: { default: !1, type: Boolean },
    type: { default: "button", type: String }
  },
  setup(h) {
    const d = h, s = af(() => d.dark ? "dark" : d.danger ? "danger" : d.info ? "info" : d.success ? "success" : "primary"), S = af(() => {
      let E = d.transparent ? "transparent" : d.flat ? "flat" : "";
      return E && (E = `-${E}`), `${s.value}${E}`;
    });
    return bo(() => {
    }), (E, B) => (wt(), Tt("button", {
      class: dr(["m-button", [
        pf(S),
        {
          square: h.square,
          border: h.border,
          flat: h.flat,
          icon: h.icon,
          lg: h.lg
        }
      ]]),
      type: d.type,
      disabled: h.disabled
    }, [
      dn(E.$slots, "default")
    ], 10, O0));
  }
}), D0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L0
}, Symbol.toStringTag, { value: "Module" })), R0 = { class: "m-input" }, N0 = { class: "--in" }, I0 = { class: "--content" }, P0 = ["value", "type", "disabled"], M0 = {
  key: 0,
  class: "--textarea"
}, B0 = /* @__PURE__ */ On({
  __name: "MInput",
  props: {
    modelValue: {},
    placeholder: { default: "", type: String },
    border: { default: !0, type: Boolean },
    disabled: { default: !1, type: Boolean },
    success: { default: !1, type: Boolean },
    danger: { default: !1, type: Boolean },
    type: { default: "text", type: String }
  },
  emits: ["update:modelValue"],
  setup(h, { emit: d }) {
    const s = $n(), S = $n(!1);
    function E() {
      var B;
      d("update:modelValue", (B = s.value) == null ? void 0 : B.value);
    }
    return (B, W) => (wt(), Tt("div", R0, [
      Ye("div", {
        class: dr(["--container", {
          border: h.border,
          disabled: h.disabled,
          success: h.success,
          danger: h.danger,
          focus: S.value
        }])
      }, [
        Ye("div", N0, [
          dn(B.$slots, "before"),
          Ye("div", I0, [
            Ye("div", {
              class: dr(["--placeholder", {
                "--topper": h.modelValue,
                "--to-textarea": h.type === "textarea"
              }])
            }, Bv(h.placeholder), 3),
            h.type !== "textarea" ? (wt(), Tt("input", gl({
              key: 0,
              class: "--input",
              ref_key: "input",
              ref: s,
              value: h.modelValue,
              type: h.type,
              disabled: h.disabled
            }, B.$attrs, {
              onInput: E,
              onFocus: W[0] || (W[0] = (k) => S.value = !0),
              onBlur: W[1] || (W[1] = (k) => S.value = !1)
            }), null, 16, P0)) : Ou("", !0)
          ]),
          dn(B.$slots, "after")
        ]),
        h.type === "textarea" ? (wt(), Tt("div", M0, [
          dn(B.$slots, "textarea")
        ])) : Ou("", !0)
      ], 2),
      dn(B.$slots, "info")
    ]));
  }
}), q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: B0
}, Symbol.toStringTag, { value: "Module" })), $0 = /* @__PURE__ */ On({
  __name: "MInputInfo",
  props: {
    success: { default: !1, type: Boolean },
    danger: { default: !1, type: Boolean }
  },
  setup(h) {
    return (d, s) => (wt(), Tt("div", {
      class: dr(["--info", { success: h.success, danger: h.danger }])
    }, [
      dn(d.$slots, "default")
    ], 2));
  }
}), W0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $0
}, Symbol.toStringTag, { value: "Module" })), k0 = { class: "m-navigation" }, H0 = { class: "m-navigation__wrapper" }, F0 = /* @__PURE__ */ Ye("div", { class: "m-navigation__zoom-icon m-navigation__zoom-icon--left" }, [
  /* @__PURE__ */ Ye("svg", {
    viewBox: "0 0 24 24",
    class: "r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
  }, [
    /* @__PURE__ */ Ye("g", null, [
      /* @__PURE__ */ Ye("path", { d: "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" }),
      /* @__PURE__ */ Ye("path", { d: "M14.46 11.75H7.54c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.92c.415 0 .75.336.75.75s-.335.75-.75.75z" })
    ])
  ])
], -1), U0 = { class: "m-navigation__line" }, z0 = /* @__PURE__ */ Ye("div", { class: "m-navigation__zoom-icon m-navigation__zoom-icon--right" }, [
  /* @__PURE__ */ Ye("svg", {
    viewBox: "0 0 24 24",
    class: "r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
  }, [
    /* @__PURE__ */ Ye("g", null, [
      /* @__PURE__ */ Ye("path", { d: "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" }),
      /* @__PURE__ */ Ye("path", { d: "M15.21 11c0 .41-.34.75-.75.75h-2.71v2.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.71H7.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.71V7.54c0-.41.34-.75.75-.75s.75.34.75.75v2.71h2.71c.41 0 .75.34.75.75z" })
    ])
  ])
], -1), j0 = /* @__PURE__ */ On({
  __name: "MInputRange",
  props: { zoom: { default: 0, type: Number } },
  emits: ["change"],
  setup(h, { emit: d }) {
    const s = $n(!1), S = $n();
    bo(() => {
      window.addEventListener("mouseup", B.onStop, { passive: !1 }), window.addEventListener("mousemove", B.onDrag, { passive: !1 }), window.addEventListener("touchmove", B.onDrag, { passive: !1 }), window.addEventListener("touchend", B.onStop, { passive: !1 });
    });
    function E() {
      window.removeEventListener("mouseup", B.onStop), window.removeEventListener("mousemove", B.onDrag), window.removeEventListener("touchmove", B.onDrag), window.removeEventListener("touchend", B.onStop);
    }
    Ru(E), Nu(E);
    const B = {
      onDrag(W) {
        if (s.value) {
          const k = W.touches ? W.touches[0].clientX : W.clientX, z = S.value;
          if (z) {
            const { left: X, width: G } = z.getBoundingClientRect();
            d("change", Math.min(1, Math.max(0, k - X) / G));
          }
          W.preventDefault && W.preventDefault();
        }
      },
      onStop() {
        s.value = !1;
      },
      onStart(W) {
        s.value = !0, this.onDrag(W);
      }
    };
    return (W, k) => (wt(), Tt("div", k0, [
      Ye("div", H0, [
        F0,
        Ye("div", {
          class: "m-navigation__line-wrapper",
          ref_key: "line",
          ref: S,
          onMousedown: k[0] || (k[0] = (...z) => B.onStart && B.onStart(...z)),
          onTouchstart: k[1] || (k[1] = (...z) => B.onStart && B.onStart(...z))
        }, [
          Ye("div", U0, [
            Ye("div", {
              class: "m-navigation__fill",
              style: Ci({
                flexGrow: h.zoom
              })
            }, null, 4),
            Ye("div", {
              class: dr(["m-navigation__circle", { "m-navigation__circle--focus": s.value }]),
              style: Ci({
                left: `${h.zoom * 100}%`
              })
            }, [
              Ye("div", {
                class: dr(["m-navigation__inner-circle", { "m-navigation__inner-circle--focus": s.value }])
              }, null, 2)
            ], 6)
          ])
        ], 544),
        z0
      ])
    ]));
  }
});
const G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j0
}, Symbol.toStringTag, { value: "Module" }));
const V0 = {};
function X0(h, d) {
  return wt(), Tt("a", gl({ class: "m-link" }, h.$attrs), [
    dn(h.$slots, "default", {}, void 0, !0)
  ], 16);
}
const Y0 = /* @__PURE__ */ yl(V0, [["render", X0], ["__scopeId", "data-v-352ec6b0"]]), K0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y0
}, Symbol.toStringTag, { value: "Module" }));
var cf = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(h, d) {
  (function() {
    var s, S = "4.17.21", E = 200, B = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", W = "Expected a function", k = "Invalid `variable` option passed into `_.template`", z = "__lodash_hash_undefined__", X = 500, G = "__lodash_placeholder__", ge = 1, Te = 2, ce = 4, J = 1, Y = 2, ae = 1, te = 2, Ke = 4, Ne = 8, me = 16, be = 32, f = 64, Ee = 128, qe = 256, Fe = 512, Ze = 30, ke = "...", Ue = 800, lt = 16, jt = 1, gn = 2, St = 3, ot = 1 / 0, qt = 9007199254740991, Dn = 17976931348623157e292, vn = 0 / 0, Je = 4294967295, Jn = Je - 1, rn = Je >>> 1, on = [
      ["ary", Ee],
      ["bind", ae],
      ["bindKey", te],
      ["curry", Ne],
      ["curryRight", me],
      ["flip", Fe],
      ["partial", be],
      ["partialRight", f],
      ["rearg", qe]
    ], yt = "[object Arguments]", yn = "[object Array]", Hn = "[object AsyncFunction]", mt = "[object Boolean]", ct = "[object Date]", Di = "[object DOMException]", Fn = "[object Error]", hr = "[object Function]", At = "[object GeneratorFunction]", pt = "[object Map]", un = "[object Number]", oe = "[object Null]", Ve = "[object Object]", ei = "[object Promise]", Ri = "[object Proxy]", $t = "[object RegExp]", dt = "[object Set]", Rn = "[object String]", an = "[object Symbol]", Wt = "[object Undefined]", Et = "[object WeakMap]", Nn = "[object WeakSet]", Un = "[object ArrayBuffer]", Gt = "[object DataView]", ti = "[object Float32Array]", ni = "[object Float64Array]", Ni = "[object Int8Array]", zn = "[object Int16Array]", Qn = "[object Int32Array]", ri = "[object Uint8Array]", ii = "[object Uint8ClampedArray]", Ot = "[object Uint16Array]", _t = "[object Uint32Array]", Ii = /\b__p \+= '';/g, Mu = /\b(__p \+=) '' \+/g, To = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pi = /&(?:amp|lt|gt|quot|#39);/g, er = /[&<>"']/g, gr = RegExp(Pi.source), Bu = RegExp(er.source), qu = /<%-([\s\S]+?)%>/g, Mi = /<%([\s\S]+?)%>/g, Nr = /<%=([\s\S]+?)%>/g, $u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wu = /^\w*$/, ku = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, oi = /[\\^$.*+?()[\]{}|]/g, Hu = RegExp(oi.source), Bi = /^\s+/, So = /\s/, Fu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, vr = /\{\n\/\* \[wrapped with (.+)\] \*/, Co = /,? & /, qi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $i = /[()=,{}\[\]\/\s]/, ui = /\\(\\)?/g, Ao = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Eo = /\w*$/, Oo = /^[-+]0x[0-9a-f]+$/i, Uu = /^0b[01]+$/i, Ir = /^\[object .+?Constructor\]$/, Lo = /^0o[0-7]+$/i, Do = /^(?:0|[1-9]\d*)$/, Ro = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pr = /($^)/, zu = /['\n\r\u2028\u2029\\]/g, yr = "\\ud800-\\udfff", ju = "\\u0300-\\u036f", Gu = "\\ufe20-\\ufe2f", No = "\\u20d0-\\u20ff", Wi = ju + Gu + No, ai = "\\u2700-\\u27bf", ki = "a-z\\xdf-\\xf6\\xf8-\\xff", Lt = "\\xac\\xb1\\xd7\\xf7", mr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fi = "\\u2000-\\u206f", Vu = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Io = "A-Z\\xc0-\\xd6\\xd8-\\xde", si = "\\ufe0e\\ufe0f", Hi = Lt + mr + fi + Vu, _r = "['\u2019]", Po = "[" + yr + "]", Mo = "[" + Hi + "]", li = "[" + Wi + "]", Vt = "\\d+", Bo = "[" + ai + "]", br = "[" + ki + "]", qo = "[^" + yr + Hi + Vt + ai + ki + Io + "]", Fi = "\\ud83c[\\udffb-\\udfff]", tr = "(?:" + li + "|" + Fi + ")", jn = "[^" + yr + "]", Mr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ui = "[\\ud800-\\udbff][\\udc00-\\udfff]", nr = "[" + Io + "]", zi = "\\u200d", xr = "(?:" + br + "|" + qo + ")", $o = "(?:" + nr + "|" + qo + ")", ci = "(?:" + _r + "(?:d|ll|m|re|s|t|ve))?", Wo = "(?:" + _r + "(?:D|LL|M|RE|S|T|VE))?", ji = tr + "?", ko = "[" + si + "]?", Xu = "(?:" + zi + "(?:" + [jn, Mr, Ui].join("|") + ")" + ko + ji + ")*", Gi = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Yu = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ho = ko + ji + Xu, Ku = "(?:" + [Bo, Mr, Ui].join("|") + ")" + Ho, Zu = "(?:" + [jn + li + "?", li, Mr, Ui, Po].join("|") + ")", Ju = RegExp(_r, "g"), Qu = RegExp(li, "g"), Vi = RegExp(Fi + "(?=" + Fi + ")|" + Zu + Ho, "g"), Fo = RegExp([
      nr + "?" + br + "+" + ci + "(?=" + [Mo, nr, "$"].join("|") + ")",
      $o + "+" + Wo + "(?=" + [Mo, nr + xr, "$"].join("|") + ")",
      nr + "?" + xr + "+" + ci,
      nr + "+" + Wo,
      Yu,
      Gi,
      Vt,
      Ku
    ].join("|"), "g"), Xi = RegExp("[" + zi + yr + Wi + si + "]"), Uo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Yi = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], zo = -1, Ge = {};
    Ge[ti] = Ge[ni] = Ge[Ni] = Ge[zn] = Ge[Qn] = Ge[ri] = Ge[ii] = Ge[Ot] = Ge[_t] = !0, Ge[yt] = Ge[yn] = Ge[Un] = Ge[mt] = Ge[Gt] = Ge[ct] = Ge[Fn] = Ge[hr] = Ge[pt] = Ge[un] = Ge[Ve] = Ge[$t] = Ge[dt] = Ge[Rn] = Ge[Et] = !1;
    var ze = {};
    ze[yt] = ze[yn] = ze[Un] = ze[Gt] = ze[mt] = ze[ct] = ze[ti] = ze[ni] = ze[Ni] = ze[zn] = ze[Qn] = ze[pt] = ze[un] = ze[Ve] = ze[$t] = ze[dt] = ze[Rn] = ze[an] = ze[ri] = ze[ii] = ze[Ot] = ze[_t] = !0, ze[Fn] = ze[hr] = ze[Et] = !1;
    var ea = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, ta = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, na = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Br = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, jo = parseFloat, Ki = parseInt, Go = typeof Si == "object" && Si && Si.Object === Object && Si, ra = typeof self == "object" && self && self.Object === Object && self, ht = Go || ra || Function("return this")(), n = d && !d.nodeType && d, i = n && !0 && h && !h.nodeType && h, o = i && i.exports === n, u = o && Go.process, l = function() {
      try {
        var A = i && i.require && i.require("util").types;
        return A || u && u.binding && u.binding("util");
      } catch {
      }
    }(), c = l && l.isArrayBuffer, g = l && l.isDate, w = l && l.isMap, _ = l && l.isRegExp, D = l && l.isSet, P = l && l.isTypedArray;
    function H(A, q, I) {
      switch (I.length) {
        case 0:
          return A.call(q);
        case 1:
          return A.call(q, I[0]);
        case 2:
          return A.call(q, I[0], I[1]);
        case 3:
          return A.call(q, I[0], I[1], I[2]);
      }
      return A.apply(q, I);
    }
    function R(A, q, I, ee) {
      for (var ye = -1, Me = A == null ? 0 : A.length; ++ye < Me; ) {
        var ut = A[ye];
        q(ee, ut, I(ut), A);
      }
      return ee;
    }
    function M(A, q) {
      for (var I = -1, ee = A == null ? 0 : A.length; ++I < ee && q(A[I], I, A) !== !1; )
        ;
      return A;
    }
    function ie(A, q) {
      for (var I = A == null ? 0 : A.length; I-- && q(A[I], I, A) !== !1; )
        ;
      return A;
    }
    function _e(A, q) {
      for (var I = -1, ee = A == null ? 0 : A.length; ++I < ee; )
        if (!q(A[I], I, A))
          return !1;
      return !0;
    }
    function ne(A, q) {
      for (var I = -1, ee = A == null ? 0 : A.length, ye = 0, Me = []; ++I < ee; ) {
        var ut = A[I];
        q(ut, I, A) && (Me[ye++] = ut);
      }
      return Me;
    }
    function et(A, q) {
      var I = A == null ? 0 : A.length;
      return !!I && Xt(A, q, 0) > -1;
    }
    function tt(A, q, I) {
      for (var ee = -1, ye = A == null ? 0 : A.length; ++ee < ye; )
        if (I(q, A[ee]))
          return !0;
      return !1;
    }
    function Oe(A, q) {
      for (var I = -1, ee = A == null ? 0 : A.length, ye = Array(ee); ++I < ee; )
        ye[I] = q(A[I], I, A);
      return ye;
    }
    function Le(A, q) {
      for (var I = -1, ee = q.length, ye = A.length; ++I < ee; )
        A[ye + I] = q[I];
      return A;
    }
    function ve(A, q, I, ee) {
      var ye = -1, Me = A == null ? 0 : A.length;
      for (ee && Me && (I = A[++ye]); ++ye < Me; )
        I = q(I, A[ye], ye, A);
      return I;
    }
    function Dt(A, q, I, ee) {
      var ye = A == null ? 0 : A.length;
      for (ee && ye && (I = A[--ye]); ye--; )
        I = q(I, A[ye], ye, A);
      return I;
    }
    function De(A, q) {
      for (var I = -1, ee = A == null ? 0 : A.length; ++I < ee; )
        if (q(A[I], I, A))
          return !0;
      return !1;
    }
    var Qe = _n("length");
    function qr(A) {
      return A.split("");
    }
    function pi(A) {
      return A.match(qi) || [];
    }
    function Rt(A, q, I) {
      var ee;
      return I(A, function(ye, Me, ut) {
        if (q(ye, Me, ut))
          return ee = Me, !1;
      }), ee;
    }
    function mn(A, q, I, ee) {
      for (var ye = A.length, Me = I + (ee ? 1 : -1); ee ? Me-- : ++Me < ye; )
        if (q(A[Me], Me, A))
          return Me;
      return -1;
    }
    function Xt(A, q, I) {
      return q === q ? Ko(A, q, I) : mn(A, In, I);
    }
    function Nt(A, q, I, ee) {
      for (var ye = I - 1, Me = A.length; ++ye < Me; )
        if (ee(A[ye], q))
          return ye;
      return -1;
    }
    function In(A) {
      return A !== A;
    }
    function kt(A, q) {
      var I = A == null ? 0 : A.length;
      return I ? $e(A, q) / I : vn;
    }
    function _n(A) {
      return function(q) {
        return q == null ? s : q[A];
      };
    }
    function di(A) {
      return function(q) {
        return A == null ? s : A[q];
      };
    }
    function Gn(A, q, I, ee, ye) {
      return ye(A, function(Me, ut, He) {
        I = ee ? (ee = !1, Me) : q(I, Me, ut, He);
      }), I;
    }
    function Zi(A, q) {
      var I = A.length;
      for (A.sort(q); I--; )
        A[I] = A[I].value;
      return A;
    }
    function $e(A, q) {
      for (var I, ee = -1, ye = A.length; ++ee < ye; ) {
        var Me = q(A[ee]);
        Me !== s && (I = I === s ? Me : I + Me);
      }
      return I;
    }
    function Pn(A, q) {
      for (var I = -1, ee = Array(A); ++I < A; )
        ee[I] = q(I);
      return ee;
    }
    function Vo(A, q) {
      return Oe(q, function(I) {
        return [I, A[I]];
      });
    }
    function hi(A) {
      return A && A.slice(0, Yt(A) + 1).replace(Bi, "");
    }
    function Ht(A) {
      return function(q) {
        return A(q);
      };
    }
    function wr(A, q) {
      return Oe(q, function(I) {
        return A[I];
      });
    }
    function $r(A, q) {
      return A.has(q);
    }
    function Ji(A, q) {
      for (var I = -1, ee = A.length; ++I < ee && Xt(q, A[I], 0) > -1; )
        ;
      return I;
    }
    function Xo(A, q) {
      for (var I = A.length; I-- && Xt(q, A[I], 0) > -1; )
        ;
      return I;
    }
    function ia(A, q) {
      for (var I = A.length, ee = 0; I--; )
        A[I] === q && ++ee;
      return ee;
    }
    var oa = di(ea), gi = di(ta);
    function ua(A) {
      return "\\" + Br[A];
    }
    function aa(A, q) {
      return A == null ? s : A[q];
    }
    function Tr(A) {
      return Xi.test(A);
    }
    function Wr(A) {
      return Uo.test(A);
    }
    function fa(A) {
      for (var q, I = []; !(q = A.next()).done; )
        I.push(q.value);
      return I;
    }
    function kr(A) {
      var q = -1, I = Array(A.size);
      return A.forEach(function(ee, ye) {
        I[++q] = [ye, ee];
      }), I;
    }
    function bn(A, q) {
      return function(I) {
        return A(q(I));
      };
    }
    function bt(A, q) {
      for (var I = -1, ee = A.length, ye = 0, Me = []; ++I < ee; ) {
        var ut = A[I];
        (ut === q || ut === G) && (A[I] = G, Me[ye++] = I);
      }
      return Me;
    }
    function Hr(A) {
      var q = -1, I = Array(A.size);
      return A.forEach(function(ee) {
        I[++q] = ee;
      }), I;
    }
    function Yo(A) {
      var q = -1, I = Array(A.size);
      return A.forEach(function(ee) {
        I[++q] = [ee, ee];
      }), I;
    }
    function Ko(A, q, I) {
      for (var ee = I - 1, ye = A.length; ++ee < ye; )
        if (A[ee] === q)
          return ee;
      return -1;
    }
    function sa(A, q, I) {
      for (var ee = I + 1; ee--; )
        if (A[ee] === q)
          return ee;
      return ee;
    }
    function We(A) {
      return Tr(A) ? Qi(A) : Qe(A);
    }
    function It(A) {
      return Tr(A) ? Zo(A) : qr(A);
    }
    function Yt(A) {
      for (var q = A.length; q-- && So.test(A.charAt(q)); )
        ;
      return q;
    }
    var fn = di(na);
    function Qi(A) {
      for (var q = Vi.lastIndex = 0; Vi.test(A); )
        ++q;
      return q;
    }
    function Zo(A) {
      return A.match(Vi) || [];
    }
    function la(A) {
      return A.match(Fo) || [];
    }
    var ca = function A(q) {
      q = q == null ? ht : rr.defaults(ht.Object(), q, rr.pick(ht, Yi));
      var I = q.Array, ee = q.Date, ye = q.Error, Me = q.Function, ut = q.Math, He = q.Object, Fr = q.RegExp, eo = q.String, Kt = q.TypeError, y = I.prototype, x = Me.prototype, C = He.prototype, $ = q["__core-js_shared__"], O = x.toString, N = C.hasOwnProperty, j = 0, K = function() {
        var e = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Z = C.toString, se = O.call(He), fe = ht._, le = Fr(
        "^" + O.call(N).replace(oi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), xe = o ? q.Buffer : s, Ie = q.Symbol, ue = q.Uint8Array, rt = xe ? xe.allocUnsafe : s, at = bn(He.getPrototypeOf, He), Pt = He.create, Xe = C.propertyIsEnumerable, Vn = y.splice, Sr = Ie ? Ie.isConcatSpreadable : s, gt = Ie ? Ie.iterator : s, Ur = Ie ? Ie.toStringTag : s, Jo = function() {
        try {
          var e = Xr(He, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Nl = q.clearTimeout !== ht.clearTimeout && q.clearTimeout, Il = ee && ee.now !== ht.Date.now && ee.now, Pl = q.setTimeout !== ht.setTimeout && q.setTimeout, Qo = ut.ceil, eu = ut.floor, pa = He.getOwnPropertySymbols, Ml = xe ? xe.isBuffer : s, bf = q.isFinite, Bl = y.join, ql = bn(He.keys, He), vt = ut.max, Mt = ut.min, $l = ee.now, Wl = q.parseInt, xf = ut.random, kl = y.reverse, da = Xr(q, "DataView"), to = Xr(q, "Map"), ha = Xr(q, "Promise"), vi = Xr(q, "Set"), no = Xr(q, "WeakMap"), ro = Xr(He, "create"), tu = no && new no(), yi = {}, Hl = Yr(da), Fl = Yr(to), Ul = Yr(ha), zl = Yr(vi), jl = Yr(no), nu = Ie ? Ie.prototype : s, io = nu ? nu.valueOf : s, wf = nu ? nu.toString : s;
      function v(e) {
        if (it(e) && !we(e) && !(e instanceof Pe)) {
          if (e instanceof xn)
            return e;
          if (N.call(e, "__wrapped__"))
            return Ts(e);
        }
        return new xn(e);
      }
      var mi = function() {
        function e() {
        }
        return function(t) {
          if (!nt(t))
            return {};
          if (Pt)
            return Pt(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = s, r;
        };
      }();
      function ru() {
      }
      function xn(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = s;
      }
      v.templateSettings = {
        escape: qu,
        evaluate: Mi,
        interpolate: Nr,
        variable: "",
        imports: {
          _: v
        }
      }, v.prototype = ru.prototype, v.prototype.constructor = v, xn.prototype = mi(ru.prototype), xn.prototype.constructor = xn;
      function Pe(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Je, this.__views__ = [];
      }
      function Gl() {
        var e = new Pe(this.__wrapped__);
        return e.__actions__ = Zt(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Zt(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Zt(this.__views__), e;
      }
      function Vl() {
        if (this.__filtered__) {
          var e = new Pe(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Xl() {
        var e = this.__wrapped__.value(), t = this.__dir__, r = we(e), a = t < 0, p = r ? e.length : 0, m = up(0, p, this.__views__), b = m.start, T = m.end, L = T - b, F = a ? T : b - 1, U = this.__iteratees__, V = U.length, Q = 0, re = Mt(L, this.__takeCount__);
        if (!r || !a && p == L && re == L)
          return Gf(e, this.__actions__);
        var de = [];
        e:
          for (; L-- && Q < re; ) {
            F += t;
            for (var Ce = -1, he = e[F]; ++Ce < V; ) {
              var Re = U[Ce], Be = Re.iteratee, cn = Re.type, zt = Be(he);
              if (cn == gn)
                he = zt;
              else if (!zt) {
                if (cn == jt)
                  continue e;
                break e;
              }
            }
            de[Q++] = he;
          }
        return de;
      }
      Pe.prototype = mi(ru.prototype), Pe.prototype.constructor = Pe;
      function zr(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function Yl() {
        this.__data__ = ro ? ro(null) : {}, this.size = 0;
      }
      function Kl(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Zl(e) {
        var t = this.__data__;
        if (ro) {
          var r = t[e];
          return r === z ? s : r;
        }
        return N.call(t, e) ? t[e] : s;
      }
      function Jl(e) {
        var t = this.__data__;
        return ro ? t[e] !== s : N.call(t, e);
      }
      function Ql(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = ro && t === s ? z : t, this;
      }
      zr.prototype.clear = Yl, zr.prototype.delete = Kl, zr.prototype.get = Zl, zr.prototype.has = Jl, zr.prototype.set = Ql;
      function ir(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function ec() {
        this.__data__ = [], this.size = 0;
      }
      function tc(e) {
        var t = this.__data__, r = iu(t, e);
        if (r < 0)
          return !1;
        var a = t.length - 1;
        return r == a ? t.pop() : Vn.call(t, r, 1), --this.size, !0;
      }
      function nc(e) {
        var t = this.__data__, r = iu(t, e);
        return r < 0 ? s : t[r][1];
      }
      function rc(e) {
        return iu(this.__data__, e) > -1;
      }
      function ic(e, t) {
        var r = this.__data__, a = iu(r, e);
        return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
      }
      ir.prototype.clear = ec, ir.prototype.delete = tc, ir.prototype.get = nc, ir.prototype.has = rc, ir.prototype.set = ic;
      function or(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var a = e[t];
          this.set(a[0], a[1]);
        }
      }
      function oc() {
        this.size = 0, this.__data__ = {
          hash: new zr(),
          map: new (to || ir)(),
          string: new zr()
        };
      }
      function uc(e) {
        var t = vu(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function ac(e) {
        return vu(this, e).get(e);
      }
      function fc(e) {
        return vu(this, e).has(e);
      }
      function sc(e, t) {
        var r = vu(this, e), a = r.size;
        return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
      }
      or.prototype.clear = oc, or.prototype.delete = uc, or.prototype.get = ac, or.prototype.has = fc, or.prototype.set = sc;
      function jr(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new or(); ++t < r; )
          this.add(e[t]);
      }
      function lc(e) {
        return this.__data__.set(e, z), this;
      }
      function cc(e) {
        return this.__data__.has(e);
      }
      jr.prototype.add = jr.prototype.push = lc, jr.prototype.has = cc;
      function Mn(e) {
        var t = this.__data__ = new ir(e);
        this.size = t.size;
      }
      function pc() {
        this.__data__ = new ir(), this.size = 0;
      }
      function dc(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      function hc(e) {
        return this.__data__.get(e);
      }
      function gc(e) {
        return this.__data__.has(e);
      }
      function vc(e, t) {
        var r = this.__data__;
        if (r instanceof ir) {
          var a = r.__data__;
          if (!to || a.length < E - 1)
            return a.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new or(a);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      Mn.prototype.clear = pc, Mn.prototype.delete = dc, Mn.prototype.get = hc, Mn.prototype.has = gc, Mn.prototype.set = vc;
      function Tf(e, t) {
        var r = we(e), a = !r && Kr(e), p = !r && !a && Lr(e), m = !r && !a && !p && wi(e), b = r || a || p || m, T = b ? Pn(e.length, eo) : [], L = T.length;
        for (var F in e)
          (t || N.call(e, F)) && !(b && (F == "length" || p && (F == "offset" || F == "parent") || m && (F == "buffer" || F == "byteLength" || F == "byteOffset") || sr(F, L))) && T.push(F);
        return T;
      }
      function Sf(e) {
        var t = e.length;
        return t ? e[Ca(0, t - 1)] : s;
      }
      function yc(e, t) {
        return yu(Zt(e), Gr(t, 0, e.length));
      }
      function mc(e) {
        return yu(Zt(e));
      }
      function ga(e, t, r) {
        (r !== s && !Bn(e[t], r) || r === s && !(t in e)) && ur(e, t, r);
      }
      function oo(e, t, r) {
        var a = e[t];
        (!(N.call(e, t) && Bn(a, r)) || r === s && !(t in e)) && ur(e, t, r);
      }
      function iu(e, t) {
        for (var r = e.length; r--; )
          if (Bn(e[r][0], t))
            return r;
        return -1;
      }
      function _c(e, t, r, a) {
        return Cr(e, function(p, m, b) {
          t(a, p, r(p), b);
        }), a;
      }
      function Cf(e, t) {
        return e && Yn(t, xt(t), e);
      }
      function bc(e, t) {
        return e && Yn(t, Qt(t), e);
      }
      function ur(e, t, r) {
        t == "__proto__" && Jo ? Jo(e, t, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : e[t] = r;
      }
      function va(e, t) {
        for (var r = -1, a = t.length, p = I(a), m = e == null; ++r < a; )
          p[r] = m ? s : Ka(e, t[r]);
        return p;
      }
      function Gr(e, t, r) {
        return e === e && (r !== s && (e = e <= r ? e : r), t !== s && (e = e >= t ? e : t)), e;
      }
      function wn(e, t, r, a, p, m) {
        var b, T = t & ge, L = t & Te, F = t & ce;
        if (r && (b = p ? r(e, a, p, m) : r(e)), b !== s)
          return b;
        if (!nt(e))
          return e;
        var U = we(e);
        if (U) {
          if (b = fp(e), !T)
            return Zt(e, b);
        } else {
          var V = Bt(e), Q = V == hr || V == At;
          if (Lr(e))
            return Yf(e, T);
          if (V == Ve || V == yt || Q && !p) {
            if (b = L || Q ? {} : hs(e), !T)
              return L ? Zc(e, bc(b, e)) : Kc(e, Cf(b, e));
          } else {
            if (!ze[V])
              return p ? e : {};
            b = sp(e, V, T);
          }
        }
        m || (m = new Mn());
        var re = m.get(e);
        if (re)
          return re;
        m.set(e, b), Us(e) ? e.forEach(function(he) {
          b.add(wn(he, t, r, he, e, m));
        }) : Hs(e) && e.forEach(function(he, Re) {
          b.set(Re, wn(he, t, r, Re, e, m));
        });
        var de = F ? L ? Ba : Ma : L ? Qt : xt, Ce = U ? s : de(e);
        return M(Ce || e, function(he, Re) {
          Ce && (Re = he, he = e[Re]), oo(b, Re, wn(he, t, r, Re, e, m));
        }), b;
      }
      function xc(e) {
        var t = xt(e);
        return function(r) {
          return Af(r, e, t);
        };
      }
      function Af(e, t, r) {
        var a = r.length;
        if (e == null)
          return !a;
        for (e = He(e); a--; ) {
          var p = r[a], m = t[p], b = e[p];
          if (b === s && !(p in e) || !m(b))
            return !1;
        }
        return !0;
      }
      function Ef(e, t, r) {
        if (typeof e != "function")
          throw new Kt(W);
        return po(function() {
          e.apply(s, r);
        }, t);
      }
      function uo(e, t, r, a) {
        var p = -1, m = et, b = !0, T = e.length, L = [], F = t.length;
        if (!T)
          return L;
        r && (t = Oe(t, Ht(r))), a ? (m = tt, b = !1) : t.length >= E && (m = $r, b = !1, t = new jr(t));
        e:
          for (; ++p < T; ) {
            var U = e[p], V = r == null ? U : r(U);
            if (U = a || U !== 0 ? U : 0, b && V === V) {
              for (var Q = F; Q--; )
                if (t[Q] === V)
                  continue e;
              L.push(U);
            } else
              m(t, V, a) || L.push(U);
          }
        return L;
      }
      var Cr = es(Xn), Of = es(ma, !0);
      function wc(e, t) {
        var r = !0;
        return Cr(e, function(a, p, m) {
          return r = !!t(a, p, m), r;
        }), r;
      }
      function ou(e, t, r) {
        for (var a = -1, p = e.length; ++a < p; ) {
          var m = e[a], b = t(m);
          if (b != null && (T === s ? b === b && !ln(b) : r(b, T)))
            var T = b, L = m;
        }
        return L;
      }
      function Tc(e, t, r, a) {
        var p = e.length;
        for (r = Se(r), r < 0 && (r = -r > p ? 0 : p + r), a = a === s || a > p ? p : Se(a), a < 0 && (a += p), a = r > a ? 0 : js(a); r < a; )
          e[r++] = t;
        return e;
      }
      function Lf(e, t) {
        var r = [];
        return Cr(e, function(a, p, m) {
          t(a, p, m) && r.push(a);
        }), r;
      }
      function Ct(e, t, r, a, p) {
        var m = -1, b = e.length;
        for (r || (r = cp), p || (p = []); ++m < b; ) {
          var T = e[m];
          t > 0 && r(T) ? t > 1 ? Ct(T, t - 1, r, a, p) : Le(p, T) : a || (p[p.length] = T);
        }
        return p;
      }
      var ya = ts(), Df = ts(!0);
      function Xn(e, t) {
        return e && ya(e, t, xt);
      }
      function ma(e, t) {
        return e && Df(e, t, xt);
      }
      function uu(e, t) {
        return ne(t, function(r) {
          return lr(e[r]);
        });
      }
      function Vr(e, t) {
        t = Er(t, e);
        for (var r = 0, a = t.length; e != null && r < a; )
          e = e[Kn(t[r++])];
        return r && r == a ? e : s;
      }
      function Rf(e, t, r) {
        var a = t(e);
        return we(e) ? a : Le(a, r(e));
      }
      function Ft(e) {
        return e == null ? e === s ? Wt : oe : Ur && Ur in He(e) ? op(e) : mp(e);
      }
      function _a(e, t) {
        return e > t;
      }
      function Sc(e, t) {
        return e != null && N.call(e, t);
      }
      function Cc(e, t) {
        return e != null && t in He(e);
      }
      function Ac(e, t, r) {
        return e >= Mt(t, r) && e < vt(t, r);
      }
      function ba(e, t, r) {
        for (var a = r ? tt : et, p = e[0].length, m = e.length, b = m, T = I(m), L = 1 / 0, F = []; b--; ) {
          var U = e[b];
          b && t && (U = Oe(U, Ht(t))), L = Mt(U.length, L), T[b] = !r && (t || p >= 120 && U.length >= 120) ? new jr(b && U) : s;
        }
        U = e[0];
        var V = -1, Q = T[0];
        e:
          for (; ++V < p && F.length < L; ) {
            var re = U[V], de = t ? t(re) : re;
            if (re = r || re !== 0 ? re : 0, !(Q ? $r(Q, de) : a(F, de, r))) {
              for (b = m; --b; ) {
                var Ce = T[b];
                if (!(Ce ? $r(Ce, de) : a(e[b], de, r)))
                  continue e;
              }
              Q && Q.push(de), F.push(re);
            }
          }
        return F;
      }
      function Ec(e, t, r, a) {
        return Xn(e, function(p, m, b) {
          t(a, r(p), m, b);
        }), a;
      }
      function ao(e, t, r) {
        t = Er(t, e), e = ms(e, t);
        var a = e == null ? e : e[Kn(Sn(t))];
        return a == null ? s : H(a, e, r);
      }
      function Nf(e) {
        return it(e) && Ft(e) == yt;
      }
      function Oc(e) {
        return it(e) && Ft(e) == Un;
      }
      function Lc(e) {
        return it(e) && Ft(e) == ct;
      }
      function fo(e, t, r, a, p) {
        return e === t ? !0 : e == null || t == null || !it(e) && !it(t) ? e !== e && t !== t : Dc(e, t, r, a, fo, p);
      }
      function Dc(e, t, r, a, p, m) {
        var b = we(e), T = we(t), L = b ? yn : Bt(e), F = T ? yn : Bt(t);
        L = L == yt ? Ve : L, F = F == yt ? Ve : F;
        var U = L == Ve, V = F == Ve, Q = L == F;
        if (Q && Lr(e)) {
          if (!Lr(t))
            return !1;
          b = !0, U = !1;
        }
        if (Q && !U)
          return m || (m = new Mn()), b || wi(e) ? cs(e, t, r, a, p, m) : rp(e, t, L, r, a, p, m);
        if (!(r & J)) {
          var re = U && N.call(e, "__wrapped__"), de = V && N.call(t, "__wrapped__");
          if (re || de) {
            var Ce = re ? e.value() : e, he = de ? t.value() : t;
            return m || (m = new Mn()), p(Ce, he, r, a, m);
          }
        }
        return Q ? (m || (m = new Mn()), ip(e, t, r, a, p, m)) : !1;
      }
      function Rc(e) {
        return it(e) && Bt(e) == pt;
      }
      function xa(e, t, r, a) {
        var p = r.length, m = p, b = !a;
        if (e == null)
          return !m;
        for (e = He(e); p--; ) {
          var T = r[p];
          if (b && T[2] ? T[1] !== e[T[0]] : !(T[0] in e))
            return !1;
        }
        for (; ++p < m; ) {
          T = r[p];
          var L = T[0], F = e[L], U = T[1];
          if (b && T[2]) {
            if (F === s && !(L in e))
              return !1;
          } else {
            var V = new Mn();
            if (a)
              var Q = a(F, U, L, e, t, V);
            if (!(Q === s ? fo(U, F, J | Y, a, V) : Q))
              return !1;
          }
        }
        return !0;
      }
      function If(e) {
        if (!nt(e) || dp(e))
          return !1;
        var t = lr(e) ? le : Ir;
        return t.test(Yr(e));
      }
      function Nc(e) {
        return it(e) && Ft(e) == $t;
      }
      function Ic(e) {
        return it(e) && Bt(e) == dt;
      }
      function Pc(e) {
        return it(e) && Tu(e.length) && !!Ge[Ft(e)];
      }
      function Pf(e) {
        return typeof e == "function" ? e : e == null ? en : typeof e == "object" ? we(e) ? qf(e[0], e[1]) : Bf(e) : nl(e);
      }
      function wa(e) {
        if (!co(e))
          return ql(e);
        var t = [];
        for (var r in He(e))
          N.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      function Mc(e) {
        if (!nt(e))
          return yp(e);
        var t = co(e), r = [];
        for (var a in e)
          a == "constructor" && (t || !N.call(e, a)) || r.push(a);
        return r;
      }
      function Ta(e, t) {
        return e < t;
      }
      function Mf(e, t) {
        var r = -1, a = Jt(e) ? I(e.length) : [];
        return Cr(e, function(p, m, b) {
          a[++r] = t(p, m, b);
        }), a;
      }
      function Bf(e) {
        var t = $a(e);
        return t.length == 1 && t[0][2] ? vs(t[0][0], t[0][1]) : function(r) {
          return r === e || xa(r, e, t);
        };
      }
      function qf(e, t) {
        return ka(e) && gs(t) ? vs(Kn(e), t) : function(r) {
          var a = Ka(r, e);
          return a === s && a === t ? Za(r, e) : fo(t, a, J | Y);
        };
      }
      function au(e, t, r, a, p) {
        e !== t && ya(t, function(m, b) {
          if (p || (p = new Mn()), nt(m))
            Bc(e, t, b, r, au, a, p);
          else {
            var T = a ? a(Fa(e, b), m, b + "", e, t, p) : s;
            T === s && (T = m), ga(e, b, T);
          }
        }, Qt);
      }
      function Bc(e, t, r, a, p, m, b) {
        var T = Fa(e, r), L = Fa(t, r), F = b.get(L);
        if (F) {
          ga(e, r, F);
          return;
        }
        var U = m ? m(T, L, r + "", e, t, b) : s, V = U === s;
        if (V) {
          var Q = we(L), re = !Q && Lr(L), de = !Q && !re && wi(L);
          U = L, Q || re || de ? we(T) ? U = T : ft(T) ? U = Zt(T) : re ? (V = !1, U = Yf(L, !0)) : de ? (V = !1, U = Kf(L, !0)) : U = [] : ho(L) || Kr(L) ? (U = T, Kr(T) ? U = Gs(T) : (!nt(T) || lr(T)) && (U = hs(L))) : V = !1;
        }
        V && (b.set(L, U), p(U, L, a, m, b), b.delete(L)), ga(e, r, U);
      }
      function $f(e, t) {
        var r = e.length;
        if (!!r)
          return t += t < 0 ? r : 0, sr(t, r) ? e[t] : s;
      }
      function Wf(e, t, r) {
        t.length ? t = Oe(t, function(m) {
          return we(m) ? function(b) {
            return Vr(b, m.length === 1 ? m[0] : m);
          } : m;
        }) : t = [en];
        var a = -1;
        t = Oe(t, Ht(pe()));
        var p = Mf(e, function(m, b, T) {
          var L = Oe(t, function(F) {
            return F(m);
          });
          return { criteria: L, index: ++a, value: m };
        });
        return Zi(p, function(m, b) {
          return Yc(m, b, r);
        });
      }
      function qc(e, t) {
        return kf(e, t, function(r, a) {
          return Za(e, a);
        });
      }
      function kf(e, t, r) {
        for (var a = -1, p = t.length, m = {}; ++a < p; ) {
          var b = t[a], T = Vr(e, b);
          r(T, b) && so(m, Er(b, e), T);
        }
        return m;
      }
      function $c(e) {
        return function(t) {
          return Vr(t, e);
        };
      }
      function Sa(e, t, r, a) {
        var p = a ? Nt : Xt, m = -1, b = t.length, T = e;
        for (e === t && (t = Zt(t)), r && (T = Oe(e, Ht(r))); ++m < b; )
          for (var L = 0, F = t[m], U = r ? r(F) : F; (L = p(T, U, L, a)) > -1; )
            T !== e && Vn.call(T, L, 1), Vn.call(e, L, 1);
        return e;
      }
      function Hf(e, t) {
        for (var r = e ? t.length : 0, a = r - 1; r--; ) {
          var p = t[r];
          if (r == a || p !== m) {
            var m = p;
            sr(p) ? Vn.call(e, p, 1) : Oa(e, p);
          }
        }
        return e;
      }
      function Ca(e, t) {
        return e + eu(xf() * (t - e + 1));
      }
      function Wc(e, t, r, a) {
        for (var p = -1, m = vt(Qo((t - e) / (r || 1)), 0), b = I(m); m--; )
          b[a ? m : ++p] = e, e += r;
        return b;
      }
      function Aa(e, t) {
        var r = "";
        if (!e || t < 1 || t > qt)
          return r;
        do
          t % 2 && (r += e), t = eu(t / 2), t && (e += e);
        while (t);
        return r;
      }
      function Ae(e, t) {
        return Ua(ys(e, t, en), e + "");
      }
      function kc(e) {
        return Sf(Ti(e));
      }
      function Hc(e, t) {
        var r = Ti(e);
        return yu(r, Gr(t, 0, r.length));
      }
      function so(e, t, r, a) {
        if (!nt(e))
          return e;
        t = Er(t, e);
        for (var p = -1, m = t.length, b = m - 1, T = e; T != null && ++p < m; ) {
          var L = Kn(t[p]), F = r;
          if (L === "__proto__" || L === "constructor" || L === "prototype")
            return e;
          if (p != b) {
            var U = T[L];
            F = a ? a(U, L, T) : s, F === s && (F = nt(U) ? U : sr(t[p + 1]) ? [] : {});
          }
          oo(T, L, F), T = T[L];
        }
        return e;
      }
      var Ff = tu ? function(e, t) {
        return tu.set(e, t), e;
      } : en, Fc = Jo ? function(e, t) {
        return Jo(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qa(t),
          writable: !0
        });
      } : en;
      function Uc(e) {
        return yu(Ti(e));
      }
      function Tn(e, t, r) {
        var a = -1, p = e.length;
        t < 0 && (t = -t > p ? 0 : p + t), r = r > p ? p : r, r < 0 && (r += p), p = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var m = I(p); ++a < p; )
          m[a] = e[a + t];
        return m;
      }
      function zc(e, t) {
        var r;
        return Cr(e, function(a, p, m) {
          return r = t(a, p, m), !r;
        }), !!r;
      }
      function fu(e, t, r) {
        var a = 0, p = e == null ? a : e.length;
        if (typeof t == "number" && t === t && p <= rn) {
          for (; a < p; ) {
            var m = a + p >>> 1, b = e[m];
            b !== null && !ln(b) && (r ? b <= t : b < t) ? a = m + 1 : p = m;
          }
          return p;
        }
        return Ea(e, t, en, r);
      }
      function Ea(e, t, r, a) {
        var p = 0, m = e == null ? 0 : e.length;
        if (m === 0)
          return 0;
        t = r(t);
        for (var b = t !== t, T = t === null, L = ln(t), F = t === s; p < m; ) {
          var U = eu((p + m) / 2), V = r(e[U]), Q = V !== s, re = V === null, de = V === V, Ce = ln(V);
          if (b)
            var he = a || de;
          else
            F ? he = de && (a || Q) : T ? he = de && Q && (a || !re) : L ? he = de && Q && !re && (a || !Ce) : re || Ce ? he = !1 : he = a ? V <= t : V < t;
          he ? p = U + 1 : m = U;
        }
        return Mt(m, Jn);
      }
      function Uf(e, t) {
        for (var r = -1, a = e.length, p = 0, m = []; ++r < a; ) {
          var b = e[r], T = t ? t(b) : b;
          if (!r || !Bn(T, L)) {
            var L = T;
            m[p++] = b === 0 ? 0 : b;
          }
        }
        return m;
      }
      function zf(e) {
        return typeof e == "number" ? e : ln(e) ? vn : +e;
      }
      function sn(e) {
        if (typeof e == "string")
          return e;
        if (we(e))
          return Oe(e, sn) + "";
        if (ln(e))
          return wf ? wf.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ot ? "-0" : t;
      }
      function Ar(e, t, r) {
        var a = -1, p = et, m = e.length, b = !0, T = [], L = T;
        if (r)
          b = !1, p = tt;
        else if (m >= E) {
          var F = t ? null : tp(e);
          if (F)
            return Hr(F);
          b = !1, p = $r, L = new jr();
        } else
          L = t ? [] : T;
        e:
          for (; ++a < m; ) {
            var U = e[a], V = t ? t(U) : U;
            if (U = r || U !== 0 ? U : 0, b && V === V) {
              for (var Q = L.length; Q--; )
                if (L[Q] === V)
                  continue e;
              t && L.push(V), T.push(U);
            } else
              p(L, V, r) || (L !== T && L.push(V), T.push(U));
          }
        return T;
      }
      function Oa(e, t) {
        return t = Er(t, e), e = ms(e, t), e == null || delete e[Kn(Sn(t))];
      }
      function jf(e, t, r, a) {
        return so(e, t, r(Vr(e, t)), a);
      }
      function su(e, t, r, a) {
        for (var p = e.length, m = a ? p : -1; (a ? m-- : ++m < p) && t(e[m], m, e); )
          ;
        return r ? Tn(e, a ? 0 : m, a ? m + 1 : p) : Tn(e, a ? m + 1 : 0, a ? p : m);
      }
      function Gf(e, t) {
        var r = e;
        return r instanceof Pe && (r = r.value()), ve(t, function(a, p) {
          return p.func.apply(p.thisArg, Le([a], p.args));
        }, r);
      }
      function La(e, t, r) {
        var a = e.length;
        if (a < 2)
          return a ? Ar(e[0]) : [];
        for (var p = -1, m = I(a); ++p < a; )
          for (var b = e[p], T = -1; ++T < a; )
            T != p && (m[p] = uo(m[p] || b, e[T], t, r));
        return Ar(Ct(m, 1), t, r);
      }
      function Vf(e, t, r) {
        for (var a = -1, p = e.length, m = t.length, b = {}; ++a < p; ) {
          var T = a < m ? t[a] : s;
          r(b, e[a], T);
        }
        return b;
      }
      function Da(e) {
        return ft(e) ? e : [];
      }
      function Ra(e) {
        return typeof e == "function" ? e : en;
      }
      function Er(e, t) {
        return we(e) ? e : ka(e, t) ? [e] : ws(je(e));
      }
      var jc = Ae;
      function Or(e, t, r) {
        var a = e.length;
        return r = r === s ? a : r, !t && r >= a ? e : Tn(e, t, r);
      }
      var Xf = Nl || function(e) {
        return ht.clearTimeout(e);
      };
      function Yf(e, t) {
        if (t)
          return e.slice();
        var r = e.length, a = rt ? rt(r) : new e.constructor(r);
        return e.copy(a), a;
      }
      function Na(e) {
        var t = new e.constructor(e.byteLength);
        return new ue(t).set(new ue(e)), t;
      }
      function Gc(e, t) {
        var r = t ? Na(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      function Vc(e) {
        var t = new e.constructor(e.source, Eo.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Xc(e) {
        return io ? He(io.call(e)) : {};
      }
      function Kf(e, t) {
        var r = t ? Na(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      function Zf(e, t) {
        if (e !== t) {
          var r = e !== s, a = e === null, p = e === e, m = ln(e), b = t !== s, T = t === null, L = t === t, F = ln(t);
          if (!T && !F && !m && e > t || m && b && L && !T && !F || a && b && L || !r && L || !p)
            return 1;
          if (!a && !m && !F && e < t || F && r && p && !a && !m || T && r && p || !b && p || !L)
            return -1;
        }
        return 0;
      }
      function Yc(e, t, r) {
        for (var a = -1, p = e.criteria, m = t.criteria, b = p.length, T = r.length; ++a < b; ) {
          var L = Zf(p[a], m[a]);
          if (L) {
            if (a >= T)
              return L;
            var F = r[a];
            return L * (F == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Jf(e, t, r, a) {
        for (var p = -1, m = e.length, b = r.length, T = -1, L = t.length, F = vt(m - b, 0), U = I(L + F), V = !a; ++T < L; )
          U[T] = t[T];
        for (; ++p < b; )
          (V || p < m) && (U[r[p]] = e[p]);
        for (; F--; )
          U[T++] = e[p++];
        return U;
      }
      function Qf(e, t, r, a) {
        for (var p = -1, m = e.length, b = -1, T = r.length, L = -1, F = t.length, U = vt(m - T, 0), V = I(U + F), Q = !a; ++p < U; )
          V[p] = e[p];
        for (var re = p; ++L < F; )
          V[re + L] = t[L];
        for (; ++b < T; )
          (Q || p < m) && (V[re + r[b]] = e[p++]);
        return V;
      }
      function Zt(e, t) {
        var r = -1, a = e.length;
        for (t || (t = I(a)); ++r < a; )
          t[r] = e[r];
        return t;
      }
      function Yn(e, t, r, a) {
        var p = !r;
        r || (r = {});
        for (var m = -1, b = t.length; ++m < b; ) {
          var T = t[m], L = a ? a(r[T], e[T], T, r, e) : s;
          L === s && (L = e[T]), p ? ur(r, T, L) : oo(r, T, L);
        }
        return r;
      }
      function Kc(e, t) {
        return Yn(e, Wa(e), t);
      }
      function Zc(e, t) {
        return Yn(e, ps(e), t);
      }
      function lu(e, t) {
        return function(r, a) {
          var p = we(r) ? R : _c, m = t ? t() : {};
          return p(r, e, pe(a, 2), m);
        };
      }
      function _i(e) {
        return Ae(function(t, r) {
          var a = -1, p = r.length, m = p > 1 ? r[p - 1] : s, b = p > 2 ? r[2] : s;
          for (m = e.length > 3 && typeof m == "function" ? (p--, m) : s, b && Ut(r[0], r[1], b) && (m = p < 3 ? s : m, p = 1), t = He(t); ++a < p; ) {
            var T = r[a];
            T && e(t, T, a, m);
          }
          return t;
        });
      }
      function es(e, t) {
        return function(r, a) {
          if (r == null)
            return r;
          if (!Jt(r))
            return e(r, a);
          for (var p = r.length, m = t ? p : -1, b = He(r); (t ? m-- : ++m < p) && a(b[m], m, b) !== !1; )
            ;
          return r;
        };
      }
      function ts(e) {
        return function(t, r, a) {
          for (var p = -1, m = He(t), b = a(t), T = b.length; T--; ) {
            var L = b[e ? T : ++p];
            if (r(m[L], L, m) === !1)
              break;
          }
          return t;
        };
      }
      function Jc(e, t, r) {
        var a = t & ae, p = lo(e);
        function m() {
          var b = this && this !== ht && this instanceof m ? p : e;
          return b.apply(a ? r : this, arguments);
        }
        return m;
      }
      function ns(e) {
        return function(t) {
          t = je(t);
          var r = Tr(t) ? It(t) : s, a = r ? r[0] : t.charAt(0), p = r ? Or(r, 1).join("") : t.slice(1);
          return a[e]() + p;
        };
      }
      function bi(e) {
        return function(t) {
          return ve(el(Qs(t).replace(Ju, "")), e, "");
        };
      }
      function lo(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var r = mi(e.prototype), a = e.apply(r, t);
          return nt(a) ? a : r;
        };
      }
      function Qc(e, t, r) {
        var a = lo(e);
        function p() {
          for (var m = arguments.length, b = I(m), T = m, L = xi(p); T--; )
            b[T] = arguments[T];
          var F = m < 3 && b[0] !== L && b[m - 1] !== L ? [] : bt(b, L);
          if (m -= F.length, m < r)
            return as(
              e,
              t,
              cu,
              p.placeholder,
              s,
              b,
              F,
              s,
              s,
              r - m
            );
          var U = this && this !== ht && this instanceof p ? a : e;
          return H(U, this, b);
        }
        return p;
      }
      function rs(e) {
        return function(t, r, a) {
          var p = He(t);
          if (!Jt(t)) {
            var m = pe(r, 3);
            t = xt(t), r = function(T) {
              return m(p[T], T, p);
            };
          }
          var b = e(t, r, a);
          return b > -1 ? p[m ? t[b] : b] : s;
        };
      }
      function is(e) {
        return fr(function(t) {
          var r = t.length, a = r, p = xn.prototype.thru;
          for (e && t.reverse(); a--; ) {
            var m = t[a];
            if (typeof m != "function")
              throw new Kt(W);
            if (p && !b && gu(m) == "wrapper")
              var b = new xn([], !0);
          }
          for (a = b ? a : r; ++a < r; ) {
            m = t[a];
            var T = gu(m), L = T == "wrapper" ? qa(m) : s;
            L && Ha(L[0]) && L[1] == (Ee | Ne | be | qe) && !L[4].length && L[9] == 1 ? b = b[gu(L[0])].apply(b, L[3]) : b = m.length == 1 && Ha(m) ? b[T]() : b.thru(m);
          }
          return function() {
            var F = arguments, U = F[0];
            if (b && F.length == 1 && we(U))
              return b.plant(U).value();
            for (var V = 0, Q = r ? t[V].apply(this, F) : U; ++V < r; )
              Q = t[V].call(this, Q);
            return Q;
          };
        });
      }
      function cu(e, t, r, a, p, m, b, T, L, F) {
        var U = t & Ee, V = t & ae, Q = t & te, re = t & (Ne | me), de = t & Fe, Ce = Q ? s : lo(e);
        function he() {
          for (var Re = arguments.length, Be = I(Re), cn = Re; cn--; )
            Be[cn] = arguments[cn];
          if (re)
            var zt = xi(he), pn = ia(Be, zt);
          if (a && (Be = Jf(Be, a, p, re)), m && (Be = Qf(Be, m, b, re)), Re -= pn, re && Re < F) {
            var st = bt(Be, zt);
            return as(
              e,
              t,
              cu,
              he.placeholder,
              r,
              Be,
              st,
              T,
              L,
              F - Re
            );
          }
          var qn = V ? r : this, pr = Q ? qn[e] : e;
          return Re = Be.length, T ? Be = _p(Be, T) : de && Re > 1 && Be.reverse(), U && L < Re && (Be.length = L), this && this !== ht && this instanceof he && (pr = Ce || lo(pr)), pr.apply(qn, Be);
        }
        return he;
      }
      function os(e, t) {
        return function(r, a) {
          return Ec(r, e, t(a), {});
        };
      }
      function pu(e, t) {
        return function(r, a) {
          var p;
          if (r === s && a === s)
            return t;
          if (r !== s && (p = r), a !== s) {
            if (p === s)
              return a;
            typeof r == "string" || typeof a == "string" ? (r = sn(r), a = sn(a)) : (r = zf(r), a = zf(a)), p = e(r, a);
          }
          return p;
        };
      }
      function Ia(e) {
        return fr(function(t) {
          return t = Oe(t, Ht(pe())), Ae(function(r) {
            var a = this;
            return e(t, function(p) {
              return H(p, a, r);
            });
          });
        });
      }
      function du(e, t) {
        t = t === s ? " " : sn(t);
        var r = t.length;
        if (r < 2)
          return r ? Aa(t, e) : t;
        var a = Aa(t, Qo(e / We(t)));
        return Tr(t) ? Or(It(a), 0, e).join("") : a.slice(0, e);
      }
      function ep(e, t, r, a) {
        var p = t & ae, m = lo(e);
        function b() {
          for (var T = -1, L = arguments.length, F = -1, U = a.length, V = I(U + L), Q = this && this !== ht && this instanceof b ? m : e; ++F < U; )
            V[F] = a[F];
          for (; L--; )
            V[F++] = arguments[++T];
          return H(Q, p ? r : this, V);
        }
        return b;
      }
      function us(e) {
        return function(t, r, a) {
          return a && typeof a != "number" && Ut(t, r, a) && (r = a = s), t = cr(t), r === s ? (r = t, t = 0) : r = cr(r), a = a === s ? t < r ? 1 : -1 : cr(a), Wc(t, r, a, e);
        };
      }
      function hu(e) {
        return function(t, r) {
          return typeof t == "string" && typeof r == "string" || (t = Cn(t), r = Cn(r)), e(t, r);
        };
      }
      function as(e, t, r, a, p, m, b, T, L, F) {
        var U = t & Ne, V = U ? b : s, Q = U ? s : b, re = U ? m : s, de = U ? s : m;
        t |= U ? be : f, t &= ~(U ? f : be), t & Ke || (t &= ~(ae | te));
        var Ce = [
          e,
          t,
          p,
          re,
          V,
          de,
          Q,
          T,
          L,
          F
        ], he = r.apply(s, Ce);
        return Ha(e) && _s(he, Ce), he.placeholder = a, bs(he, e, t);
      }
      function Pa(e) {
        var t = ut[e];
        return function(r, a) {
          if (r = Cn(r), a = a == null ? 0 : Mt(Se(a), 292), a && bf(r)) {
            var p = (je(r) + "e").split("e"), m = t(p[0] + "e" + (+p[1] + a));
            return p = (je(m) + "e").split("e"), +(p[0] + "e" + (+p[1] - a));
          }
          return t(r);
        };
      }
      var tp = vi && 1 / Hr(new vi([, -0]))[1] == ot ? function(e) {
        return new vi(e);
      } : nf;
      function fs(e) {
        return function(t) {
          var r = Bt(t);
          return r == pt ? kr(t) : r == dt ? Yo(t) : Vo(t, e(t));
        };
      }
      function ar(e, t, r, a, p, m, b, T) {
        var L = t & te;
        if (!L && typeof e != "function")
          throw new Kt(W);
        var F = a ? a.length : 0;
        if (F || (t &= ~(be | f), a = p = s), b = b === s ? b : vt(Se(b), 0), T = T === s ? T : Se(T), F -= p ? p.length : 0, t & f) {
          var U = a, V = p;
          a = p = s;
        }
        var Q = L ? s : qa(e), re = [
          e,
          t,
          r,
          a,
          p,
          U,
          V,
          m,
          b,
          T
        ];
        if (Q && vp(re, Q), e = re[0], t = re[1], r = re[2], a = re[3], p = re[4], T = re[9] = re[9] === s ? L ? 0 : e.length : vt(re[9] - F, 0), !T && t & (Ne | me) && (t &= ~(Ne | me)), !t || t == ae)
          var de = Jc(e, t, r);
        else
          t == Ne || t == me ? de = Qc(e, t, T) : (t == be || t == (ae | be)) && !p.length ? de = ep(e, t, r, a) : de = cu.apply(s, re);
        var Ce = Q ? Ff : _s;
        return bs(Ce(de, re), e, t);
      }
      function ss(e, t, r, a) {
        return e === s || Bn(e, C[r]) && !N.call(a, r) ? t : e;
      }
      function ls(e, t, r, a, p, m) {
        return nt(e) && nt(t) && (m.set(t, e), au(e, t, s, ls, m), m.delete(t)), e;
      }
      function np(e) {
        return ho(e) ? s : e;
      }
      function cs(e, t, r, a, p, m) {
        var b = r & J, T = e.length, L = t.length;
        if (T != L && !(b && L > T))
          return !1;
        var F = m.get(e), U = m.get(t);
        if (F && U)
          return F == t && U == e;
        var V = -1, Q = !0, re = r & Y ? new jr() : s;
        for (m.set(e, t), m.set(t, e); ++V < T; ) {
          var de = e[V], Ce = t[V];
          if (a)
            var he = b ? a(Ce, de, V, t, e, m) : a(de, Ce, V, e, t, m);
          if (he !== s) {
            if (he)
              continue;
            Q = !1;
            break;
          }
          if (re) {
            if (!De(t, function(Re, Be) {
              if (!$r(re, Be) && (de === Re || p(de, Re, r, a, m)))
                return re.push(Be);
            })) {
              Q = !1;
              break;
            }
          } else if (!(de === Ce || p(de, Ce, r, a, m))) {
            Q = !1;
            break;
          }
        }
        return m.delete(e), m.delete(t), Q;
      }
      function rp(e, t, r, a, p, m, b) {
        switch (r) {
          case Gt:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Un:
            return !(e.byteLength != t.byteLength || !m(new ue(e), new ue(t)));
          case mt:
          case ct:
          case un:
            return Bn(+e, +t);
          case Fn:
            return e.name == t.name && e.message == t.message;
          case $t:
          case Rn:
            return e == t + "";
          case pt:
            var T = kr;
          case dt:
            var L = a & J;
            if (T || (T = Hr), e.size != t.size && !L)
              return !1;
            var F = b.get(e);
            if (F)
              return F == t;
            a |= Y, b.set(e, t);
            var U = cs(T(e), T(t), a, p, m, b);
            return b.delete(e), U;
          case an:
            if (io)
              return io.call(e) == io.call(t);
        }
        return !1;
      }
      function ip(e, t, r, a, p, m) {
        var b = r & J, T = Ma(e), L = T.length, F = Ma(t), U = F.length;
        if (L != U && !b)
          return !1;
        for (var V = L; V--; ) {
          var Q = T[V];
          if (!(b ? Q in t : N.call(t, Q)))
            return !1;
        }
        var re = m.get(e), de = m.get(t);
        if (re && de)
          return re == t && de == e;
        var Ce = !0;
        m.set(e, t), m.set(t, e);
        for (var he = b; ++V < L; ) {
          Q = T[V];
          var Re = e[Q], Be = t[Q];
          if (a)
            var cn = b ? a(Be, Re, Q, t, e, m) : a(Re, Be, Q, e, t, m);
          if (!(cn === s ? Re === Be || p(Re, Be, r, a, m) : cn)) {
            Ce = !1;
            break;
          }
          he || (he = Q == "constructor");
        }
        if (Ce && !he) {
          var zt = e.constructor, pn = t.constructor;
          zt != pn && "constructor" in e && "constructor" in t && !(typeof zt == "function" && zt instanceof zt && typeof pn == "function" && pn instanceof pn) && (Ce = !1);
        }
        return m.delete(e), m.delete(t), Ce;
      }
      function fr(e) {
        return Ua(ys(e, s, As), e + "");
      }
      function Ma(e) {
        return Rf(e, xt, Wa);
      }
      function Ba(e) {
        return Rf(e, Qt, ps);
      }
      var qa = tu ? function(e) {
        return tu.get(e);
      } : nf;
      function gu(e) {
        for (var t = e.name + "", r = yi[t], a = N.call(yi, t) ? r.length : 0; a--; ) {
          var p = r[a], m = p.func;
          if (m == null || m == e)
            return p.name;
        }
        return t;
      }
      function xi(e) {
        var t = N.call(v, "placeholder") ? v : e;
        return t.placeholder;
      }
      function pe() {
        var e = v.iteratee || ef;
        return e = e === ef ? Pf : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function vu(e, t) {
        var r = e.__data__;
        return pp(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      function $a(e) {
        for (var t = xt(e), r = t.length; r--; ) {
          var a = t[r], p = e[a];
          t[r] = [a, p, gs(p)];
        }
        return t;
      }
      function Xr(e, t) {
        var r = aa(e, t);
        return If(r) ? r : s;
      }
      function op(e) {
        var t = N.call(e, Ur), r = e[Ur];
        try {
          e[Ur] = s;
          var a = !0;
        } catch {
        }
        var p = Z.call(e);
        return a && (t ? e[Ur] = r : delete e[Ur]), p;
      }
      var Wa = pa ? function(e) {
        return e == null ? [] : (e = He(e), ne(pa(e), function(t) {
          return Xe.call(e, t);
        }));
      } : rf, ps = pa ? function(e) {
        for (var t = []; e; )
          Le(t, Wa(e)), e = at(e);
        return t;
      } : rf, Bt = Ft;
      (da && Bt(new da(new ArrayBuffer(1))) != Gt || to && Bt(new to()) != pt || ha && Bt(ha.resolve()) != ei || vi && Bt(new vi()) != dt || no && Bt(new no()) != Et) && (Bt = function(e) {
        var t = Ft(e), r = t == Ve ? e.constructor : s, a = r ? Yr(r) : "";
        if (a)
          switch (a) {
            case Hl:
              return Gt;
            case Fl:
              return pt;
            case Ul:
              return ei;
            case zl:
              return dt;
            case jl:
              return Et;
          }
        return t;
      });
      function up(e, t, r) {
        for (var a = -1, p = r.length; ++a < p; ) {
          var m = r[a], b = m.size;
          switch (m.type) {
            case "drop":
              e += b;
              break;
            case "dropRight":
              t -= b;
              break;
            case "take":
              t = Mt(t, e + b);
              break;
            case "takeRight":
              e = vt(e, t - b);
              break;
          }
        }
        return { start: e, end: t };
      }
      function ap(e) {
        var t = e.match(vr);
        return t ? t[1].split(Co) : [];
      }
      function ds(e, t, r) {
        t = Er(t, e);
        for (var a = -1, p = t.length, m = !1; ++a < p; ) {
          var b = Kn(t[a]);
          if (!(m = e != null && r(e, b)))
            break;
          e = e[b];
        }
        return m || ++a != p ? m : (p = e == null ? 0 : e.length, !!p && Tu(p) && sr(b, p) && (we(e) || Kr(e)));
      }
      function fp(e) {
        var t = e.length, r = new e.constructor(t);
        return t && typeof e[0] == "string" && N.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      }
      function hs(e) {
        return typeof e.constructor == "function" && !co(e) ? mi(at(e)) : {};
      }
      function sp(e, t, r) {
        var a = e.constructor;
        switch (t) {
          case Un:
            return Na(e);
          case mt:
          case ct:
            return new a(+e);
          case Gt:
            return Gc(e, r);
          case ti:
          case ni:
          case Ni:
          case zn:
          case Qn:
          case ri:
          case ii:
          case Ot:
          case _t:
            return Kf(e, r);
          case pt:
            return new a();
          case un:
          case Rn:
            return new a(e);
          case $t:
            return Vc(e);
          case dt:
            return new a();
          case an:
            return Xc(e);
        }
      }
      function lp(e, t) {
        var r = t.length;
        if (!r)
          return e;
        var a = r - 1;
        return t[a] = (r > 1 ? "& " : "") + t[a], t = t.join(r > 2 ? ", " : " "), e.replace(Fu, `{
/* [wrapped with ` + t + `] */
`);
      }
      function cp(e) {
        return we(e) || Kr(e) || !!(Sr && e && e[Sr]);
      }
      function sr(e, t) {
        var r = typeof e;
        return t = t == null ? qt : t, !!t && (r == "number" || r != "symbol" && Do.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Ut(e, t, r) {
        if (!nt(r))
          return !1;
        var a = typeof t;
        return (a == "number" ? Jt(r) && sr(t, r.length) : a == "string" && t in r) ? Bn(r[t], e) : !1;
      }
      function ka(e, t) {
        if (we(e))
          return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || ln(e) ? !0 : Wu.test(e) || !$u.test(e) || t != null && e in He(t);
      }
      function pp(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Ha(e) {
        var t = gu(e), r = v[t];
        if (typeof r != "function" || !(t in Pe.prototype))
          return !1;
        if (e === r)
          return !0;
        var a = qa(r);
        return !!a && e === a[0];
      }
      function dp(e) {
        return !!K && K in e;
      }
      var hp = $ ? lr : of;
      function co(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || C;
        return e === r;
      }
      function gs(e) {
        return e === e && !nt(e);
      }
      function vs(e, t) {
        return function(r) {
          return r == null ? !1 : r[e] === t && (t !== s || e in He(r));
        };
      }
      function gp(e) {
        var t = xu(e, function(a) {
          return r.size === X && r.clear(), a;
        }), r = t.cache;
        return t;
      }
      function vp(e, t) {
        var r = e[1], a = t[1], p = r | a, m = p < (ae | te | Ee), b = a == Ee && r == Ne || a == Ee && r == qe && e[7].length <= t[8] || a == (Ee | qe) && t[7].length <= t[8] && r == Ne;
        if (!(m || b))
          return e;
        a & ae && (e[2] = t[2], p |= r & ae ? 0 : Ke);
        var T = t[3];
        if (T) {
          var L = e[3];
          e[3] = L ? Jf(L, T, t[4]) : T, e[4] = L ? bt(e[3], G) : t[4];
        }
        return T = t[5], T && (L = e[5], e[5] = L ? Qf(L, T, t[6]) : T, e[6] = L ? bt(e[5], G) : t[6]), T = t[7], T && (e[7] = T), a & Ee && (e[8] = e[8] == null ? t[8] : Mt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = p, e;
      }
      function yp(e) {
        var t = [];
        if (e != null)
          for (var r in He(e))
            t.push(r);
        return t;
      }
      function mp(e) {
        return Z.call(e);
      }
      function ys(e, t, r) {
        return t = vt(t === s ? e.length - 1 : t, 0), function() {
          for (var a = arguments, p = -1, m = vt(a.length - t, 0), b = I(m); ++p < m; )
            b[p] = a[t + p];
          p = -1;
          for (var T = I(t + 1); ++p < t; )
            T[p] = a[p];
          return T[t] = r(b), H(e, this, T);
        };
      }
      function ms(e, t) {
        return t.length < 2 ? e : Vr(e, Tn(t, 0, -1));
      }
      function _p(e, t) {
        for (var r = e.length, a = Mt(t.length, r), p = Zt(e); a--; ) {
          var m = t[a];
          e[a] = sr(m, r) ? p[m] : s;
        }
        return e;
      }
      function Fa(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var _s = xs(Ff), po = Pl || function(e, t) {
        return ht.setTimeout(e, t);
      }, Ua = xs(Fc);
      function bs(e, t, r) {
        var a = t + "";
        return Ua(e, lp(a, bp(ap(a), r)));
      }
      function xs(e) {
        var t = 0, r = 0;
        return function() {
          var a = $l(), p = lt - (a - r);
          if (r = a, p > 0) {
            if (++t >= Ue)
              return arguments[0];
          } else
            t = 0;
          return e.apply(s, arguments);
        };
      }
      function yu(e, t) {
        var r = -1, a = e.length, p = a - 1;
        for (t = t === s ? a : t; ++r < t; ) {
          var m = Ca(r, p), b = e[m];
          e[m] = e[r], e[r] = b;
        }
        return e.length = t, e;
      }
      var ws = gp(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(ku, function(r, a, p, m) {
          t.push(p ? m.replace(ui, "$1") : a || r);
        }), t;
      });
      function Kn(e) {
        if (typeof e == "string" || ln(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ot ? "-0" : t;
      }
      function Yr(e) {
        if (e != null) {
          try {
            return O.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function bp(e, t) {
        return M(on, function(r) {
          var a = "_." + r[0];
          t & r[1] && !et(e, a) && e.push(a);
        }), e.sort();
      }
      function Ts(e) {
        if (e instanceof Pe)
          return e.clone();
        var t = new xn(e.__wrapped__, e.__chain__);
        return t.__actions__ = Zt(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function xp(e, t, r) {
        (r ? Ut(e, t, r) : t === s) ? t = 1 : t = vt(Se(t), 0);
        var a = e == null ? 0 : e.length;
        if (!a || t < 1)
          return [];
        for (var p = 0, m = 0, b = I(Qo(a / t)); p < a; )
          b[m++] = Tn(e, p, p += t);
        return b;
      }
      function wp(e) {
        for (var t = -1, r = e == null ? 0 : e.length, a = 0, p = []; ++t < r; ) {
          var m = e[t];
          m && (p[a++] = m);
        }
        return p;
      }
      function Tp() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = I(e - 1), r = arguments[0], a = e; a--; )
          t[a - 1] = arguments[a];
        return Le(we(r) ? Zt(r) : [r], Ct(t, 1));
      }
      var Sp = Ae(function(e, t) {
        return ft(e) ? uo(e, Ct(t, 1, ft, !0)) : [];
      }), Cp = Ae(function(e, t) {
        var r = Sn(t);
        return ft(r) && (r = s), ft(e) ? uo(e, Ct(t, 1, ft, !0), pe(r, 2)) : [];
      }), Ap = Ae(function(e, t) {
        var r = Sn(t);
        return ft(r) && (r = s), ft(e) ? uo(e, Ct(t, 1, ft, !0), s, r) : [];
      });
      function Ep(e, t, r) {
        var a = e == null ? 0 : e.length;
        return a ? (t = r || t === s ? 1 : Se(t), Tn(e, t < 0 ? 0 : t, a)) : [];
      }
      function Op(e, t, r) {
        var a = e == null ? 0 : e.length;
        return a ? (t = r || t === s ? 1 : Se(t), t = a - t, Tn(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Lp(e, t) {
        return e && e.length ? su(e, pe(t, 3), !0, !0) : [];
      }
      function Dp(e, t) {
        return e && e.length ? su(e, pe(t, 3), !0) : [];
      }
      function Rp(e, t, r, a) {
        var p = e == null ? 0 : e.length;
        return p ? (r && typeof r != "number" && Ut(e, t, r) && (r = 0, a = p), Tc(e, t, r, a)) : [];
      }
      function Ss(e, t, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var p = r == null ? 0 : Se(r);
        return p < 0 && (p = vt(a + p, 0)), mn(e, pe(t, 3), p);
      }
      function Cs(e, t, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var p = a - 1;
        return r !== s && (p = Se(r), p = r < 0 ? vt(a + p, 0) : Mt(p, a - 1)), mn(e, pe(t, 3), p, !0);
      }
      function As(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ct(e, 1) : [];
      }
      function Np(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ct(e, ot) : [];
      }
      function Ip(e, t) {
        var r = e == null ? 0 : e.length;
        return r ? (t = t === s ? 1 : Se(t), Ct(e, t)) : [];
      }
      function Pp(e) {
        for (var t = -1, r = e == null ? 0 : e.length, a = {}; ++t < r; ) {
          var p = e[t];
          a[p[0]] = p[1];
        }
        return a;
      }
      function Es(e) {
        return e && e.length ? e[0] : s;
      }
      function Mp(e, t, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var p = r == null ? 0 : Se(r);
        return p < 0 && (p = vt(a + p, 0)), Xt(e, t, p);
      }
      function Bp(e) {
        var t = e == null ? 0 : e.length;
        return t ? Tn(e, 0, -1) : [];
      }
      var qp = Ae(function(e) {
        var t = Oe(e, Da);
        return t.length && t[0] === e[0] ? ba(t) : [];
      }), $p = Ae(function(e) {
        var t = Sn(e), r = Oe(e, Da);
        return t === Sn(r) ? t = s : r.pop(), r.length && r[0] === e[0] ? ba(r, pe(t, 2)) : [];
      }), Wp = Ae(function(e) {
        var t = Sn(e), r = Oe(e, Da);
        return t = typeof t == "function" ? t : s, t && r.pop(), r.length && r[0] === e[0] ? ba(r, s, t) : [];
      });
      function kp(e, t) {
        return e == null ? "" : Bl.call(e, t);
      }
      function Sn(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : s;
      }
      function Hp(e, t, r) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var p = a;
        return r !== s && (p = Se(r), p = p < 0 ? vt(a + p, 0) : Mt(p, a - 1)), t === t ? sa(e, t, p) : mn(e, In, p, !0);
      }
      function Fp(e, t) {
        return e && e.length ? $f(e, Se(t)) : s;
      }
      var Up = Ae(Os);
      function Os(e, t) {
        return e && e.length && t && t.length ? Sa(e, t) : e;
      }
      function zp(e, t, r) {
        return e && e.length && t && t.length ? Sa(e, t, pe(r, 2)) : e;
      }
      function jp(e, t, r) {
        return e && e.length && t && t.length ? Sa(e, t, s, r) : e;
      }
      var Gp = fr(function(e, t) {
        var r = e == null ? 0 : e.length, a = va(e, t);
        return Hf(e, Oe(t, function(p) {
          return sr(p, r) ? +p : p;
        }).sort(Zf)), a;
      });
      function Vp(e, t) {
        var r = [];
        if (!(e && e.length))
          return r;
        var a = -1, p = [], m = e.length;
        for (t = pe(t, 3); ++a < m; ) {
          var b = e[a];
          t(b, a, e) && (r.push(b), p.push(a));
        }
        return Hf(e, p), r;
      }
      function za(e) {
        return e == null ? e : kl.call(e);
      }
      function Xp(e, t, r) {
        var a = e == null ? 0 : e.length;
        return a ? (r && typeof r != "number" && Ut(e, t, r) ? (t = 0, r = a) : (t = t == null ? 0 : Se(t), r = r === s ? a : Se(r)), Tn(e, t, r)) : [];
      }
      function Yp(e, t) {
        return fu(e, t);
      }
      function Kp(e, t, r) {
        return Ea(e, t, pe(r, 2));
      }
      function Zp(e, t) {
        var r = e == null ? 0 : e.length;
        if (r) {
          var a = fu(e, t);
          if (a < r && Bn(e[a], t))
            return a;
        }
        return -1;
      }
      function Jp(e, t) {
        return fu(e, t, !0);
      }
      function Qp(e, t, r) {
        return Ea(e, t, pe(r, 2), !0);
      }
      function ed(e, t) {
        var r = e == null ? 0 : e.length;
        if (r) {
          var a = fu(e, t, !0) - 1;
          if (Bn(e[a], t))
            return a;
        }
        return -1;
      }
      function td(e) {
        return e && e.length ? Uf(e) : [];
      }
      function nd(e, t) {
        return e && e.length ? Uf(e, pe(t, 2)) : [];
      }
      function rd(e) {
        var t = e == null ? 0 : e.length;
        return t ? Tn(e, 1, t) : [];
      }
      function id(e, t, r) {
        return e && e.length ? (t = r || t === s ? 1 : Se(t), Tn(e, 0, t < 0 ? 0 : t)) : [];
      }
      function od(e, t, r) {
        var a = e == null ? 0 : e.length;
        return a ? (t = r || t === s ? 1 : Se(t), t = a - t, Tn(e, t < 0 ? 0 : t, a)) : [];
      }
      function ud(e, t) {
        return e && e.length ? su(e, pe(t, 3), !1, !0) : [];
      }
      function ad(e, t) {
        return e && e.length ? su(e, pe(t, 3)) : [];
      }
      var fd = Ae(function(e) {
        return Ar(Ct(e, 1, ft, !0));
      }), sd = Ae(function(e) {
        var t = Sn(e);
        return ft(t) && (t = s), Ar(Ct(e, 1, ft, !0), pe(t, 2));
      }), ld = Ae(function(e) {
        var t = Sn(e);
        return t = typeof t == "function" ? t : s, Ar(Ct(e, 1, ft, !0), s, t);
      });
      function cd(e) {
        return e && e.length ? Ar(e) : [];
      }
      function pd(e, t) {
        return e && e.length ? Ar(e, pe(t, 2)) : [];
      }
      function dd(e, t) {
        return t = typeof t == "function" ? t : s, e && e.length ? Ar(e, s, t) : [];
      }
      function ja(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = ne(e, function(r) {
          if (ft(r))
            return t = vt(r.length, t), !0;
        }), Pn(t, function(r) {
          return Oe(e, _n(r));
        });
      }
      function Ls(e, t) {
        if (!(e && e.length))
          return [];
        var r = ja(e);
        return t == null ? r : Oe(r, function(a) {
          return H(t, s, a);
        });
      }
      var hd = Ae(function(e, t) {
        return ft(e) ? uo(e, t) : [];
      }), gd = Ae(function(e) {
        return La(ne(e, ft));
      }), vd = Ae(function(e) {
        var t = Sn(e);
        return ft(t) && (t = s), La(ne(e, ft), pe(t, 2));
      }), yd = Ae(function(e) {
        var t = Sn(e);
        return t = typeof t == "function" ? t : s, La(ne(e, ft), s, t);
      }), md = Ae(ja);
      function _d(e, t) {
        return Vf(e || [], t || [], oo);
      }
      function bd(e, t) {
        return Vf(e || [], t || [], so);
      }
      var xd = Ae(function(e) {
        var t = e.length, r = t > 1 ? e[t - 1] : s;
        return r = typeof r == "function" ? (e.pop(), r) : s, Ls(e, r);
      });
      function Ds(e) {
        var t = v(e);
        return t.__chain__ = !0, t;
      }
      function wd(e, t) {
        return t(e), e;
      }
      function mu(e, t) {
        return t(e);
      }
      var Td = fr(function(e) {
        var t = e.length, r = t ? e[0] : 0, a = this.__wrapped__, p = function(m) {
          return va(m, e);
        };
        return t > 1 || this.__actions__.length || !(a instanceof Pe) || !sr(r) ? this.thru(p) : (a = a.slice(r, +r + (t ? 1 : 0)), a.__actions__.push({
          func: mu,
          args: [p],
          thisArg: s
        }), new xn(a, this.__chain__).thru(function(m) {
          return t && !m.length && m.push(s), m;
        }));
      });
      function Sd() {
        return Ds(this);
      }
      function Cd() {
        return new xn(this.value(), this.__chain__);
      }
      function Ad() {
        this.__values__ === s && (this.__values__ = zs(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? s : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Ed() {
        return this;
      }
      function Od(e) {
        for (var t, r = this; r instanceof ru; ) {
          var a = Ts(r);
          a.__index__ = 0, a.__values__ = s, t ? p.__wrapped__ = a : t = a;
          var p = a;
          r = r.__wrapped__;
        }
        return p.__wrapped__ = e, t;
      }
      function Ld() {
        var e = this.__wrapped__;
        if (e instanceof Pe) {
          var t = e;
          return this.__actions__.length && (t = new Pe(this)), t = t.reverse(), t.__actions__.push({
            func: mu,
            args: [za],
            thisArg: s
          }), new xn(t, this.__chain__);
        }
        return this.thru(za);
      }
      function Dd() {
        return Gf(this.__wrapped__, this.__actions__);
      }
      var Rd = lu(function(e, t, r) {
        N.call(e, r) ? ++e[r] : ur(e, r, 1);
      });
      function Nd(e, t, r) {
        var a = we(e) ? _e : wc;
        return r && Ut(e, t, r) && (t = s), a(e, pe(t, 3));
      }
      function Id(e, t) {
        var r = we(e) ? ne : Lf;
        return r(e, pe(t, 3));
      }
      var Pd = rs(Ss), Md = rs(Cs);
      function Bd(e, t) {
        return Ct(_u(e, t), 1);
      }
      function qd(e, t) {
        return Ct(_u(e, t), ot);
      }
      function $d(e, t, r) {
        return r = r === s ? 1 : Se(r), Ct(_u(e, t), r);
      }
      function Rs(e, t) {
        var r = we(e) ? M : Cr;
        return r(e, pe(t, 3));
      }
      function Ns(e, t) {
        var r = we(e) ? ie : Of;
        return r(e, pe(t, 3));
      }
      var Wd = lu(function(e, t, r) {
        N.call(e, r) ? e[r].push(t) : ur(e, r, [t]);
      });
      function kd(e, t, r, a) {
        e = Jt(e) ? e : Ti(e), r = r && !a ? Se(r) : 0;
        var p = e.length;
        return r < 0 && (r = vt(p + r, 0)), Su(e) ? r <= p && e.indexOf(t, r) > -1 : !!p && Xt(e, t, r) > -1;
      }
      var Hd = Ae(function(e, t, r) {
        var a = -1, p = typeof t == "function", m = Jt(e) ? I(e.length) : [];
        return Cr(e, function(b) {
          m[++a] = p ? H(t, b, r) : ao(b, t, r);
        }), m;
      }), Fd = lu(function(e, t, r) {
        ur(e, r, t);
      });
      function _u(e, t) {
        var r = we(e) ? Oe : Mf;
        return r(e, pe(t, 3));
      }
      function Ud(e, t, r, a) {
        return e == null ? [] : (we(t) || (t = t == null ? [] : [t]), r = a ? s : r, we(r) || (r = r == null ? [] : [r]), Wf(e, t, r));
      }
      var zd = lu(function(e, t, r) {
        e[r ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function jd(e, t, r) {
        var a = we(e) ? ve : Gn, p = arguments.length < 3;
        return a(e, pe(t, 4), r, p, Cr);
      }
      function Gd(e, t, r) {
        var a = we(e) ? Dt : Gn, p = arguments.length < 3;
        return a(e, pe(t, 4), r, p, Of);
      }
      function Vd(e, t) {
        var r = we(e) ? ne : Lf;
        return r(e, wu(pe(t, 3)));
      }
      function Xd(e) {
        var t = we(e) ? Sf : kc;
        return t(e);
      }
      function Yd(e, t, r) {
        (r ? Ut(e, t, r) : t === s) ? t = 1 : t = Se(t);
        var a = we(e) ? yc : Hc;
        return a(e, t);
      }
      function Kd(e) {
        var t = we(e) ? mc : Uc;
        return t(e);
      }
      function Zd(e) {
        if (e == null)
          return 0;
        if (Jt(e))
          return Su(e) ? We(e) : e.length;
        var t = Bt(e);
        return t == pt || t == dt ? e.size : wa(e).length;
      }
      function Jd(e, t, r) {
        var a = we(e) ? De : zc;
        return r && Ut(e, t, r) && (t = s), a(e, pe(t, 3));
      }
      var Qd = Ae(function(e, t) {
        if (e == null)
          return [];
        var r = t.length;
        return r > 1 && Ut(e, t[0], t[1]) ? t = [] : r > 2 && Ut(t[0], t[1], t[2]) && (t = [t[0]]), Wf(e, Ct(t, 1), []);
      }), bu = Il || function() {
        return ht.Date.now();
      };
      function eh(e, t) {
        if (typeof t != "function")
          throw new Kt(W);
        return e = Se(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Is(e, t, r) {
        return t = r ? s : t, t = e && t == null ? e.length : t, ar(e, Ee, s, s, s, s, t);
      }
      function Ps(e, t) {
        var r;
        if (typeof t != "function")
          throw new Kt(W);
        return e = Se(e), function() {
          return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = s), r;
        };
      }
      var Ga = Ae(function(e, t, r) {
        var a = ae;
        if (r.length) {
          var p = bt(r, xi(Ga));
          a |= be;
        }
        return ar(e, a, t, r, p);
      }), Ms = Ae(function(e, t, r) {
        var a = ae | te;
        if (r.length) {
          var p = bt(r, xi(Ms));
          a |= be;
        }
        return ar(t, a, e, r, p);
      });
      function Bs(e, t, r) {
        t = r ? s : t;
        var a = ar(e, Ne, s, s, s, s, s, t);
        return a.placeholder = Bs.placeholder, a;
      }
      function qs(e, t, r) {
        t = r ? s : t;
        var a = ar(e, me, s, s, s, s, s, t);
        return a.placeholder = qs.placeholder, a;
      }
      function $s(e, t, r) {
        var a, p, m, b, T, L, F = 0, U = !1, V = !1, Q = !0;
        if (typeof e != "function")
          throw new Kt(W);
        t = Cn(t) || 0, nt(r) && (U = !!r.leading, V = "maxWait" in r, m = V ? vt(Cn(r.maxWait) || 0, t) : m, Q = "trailing" in r ? !!r.trailing : Q);
        function re(st) {
          var qn = a, pr = p;
          return a = p = s, F = st, b = e.apply(pr, qn), b;
        }
        function de(st) {
          return F = st, T = po(Re, t), U ? re(st) : b;
        }
        function Ce(st) {
          var qn = st - L, pr = st - F, rl = t - qn;
          return V ? Mt(rl, m - pr) : rl;
        }
        function he(st) {
          var qn = st - L, pr = st - F;
          return L === s || qn >= t || qn < 0 || V && pr >= m;
        }
        function Re() {
          var st = bu();
          if (he(st))
            return Be(st);
          T = po(Re, Ce(st));
        }
        function Be(st) {
          return T = s, Q && a ? re(st) : (a = p = s, b);
        }
        function cn() {
          T !== s && Xf(T), F = 0, a = L = p = T = s;
        }
        function zt() {
          return T === s ? b : Be(bu());
        }
        function pn() {
          var st = bu(), qn = he(st);
          if (a = arguments, p = this, L = st, qn) {
            if (T === s)
              return de(L);
            if (V)
              return Xf(T), T = po(Re, t), re(L);
          }
          return T === s && (T = po(Re, t)), b;
        }
        return pn.cancel = cn, pn.flush = zt, pn;
      }
      var th = Ae(function(e, t) {
        return Ef(e, 1, t);
      }), nh = Ae(function(e, t, r) {
        return Ef(e, Cn(t) || 0, r);
      });
      function rh(e) {
        return ar(e, Fe);
      }
      function xu(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new Kt(W);
        var r = function() {
          var a = arguments, p = t ? t.apply(this, a) : a[0], m = r.cache;
          if (m.has(p))
            return m.get(p);
          var b = e.apply(this, a);
          return r.cache = m.set(p, b) || m, b;
        };
        return r.cache = new (xu.Cache || or)(), r;
      }
      xu.Cache = or;
      function wu(e) {
        if (typeof e != "function")
          throw new Kt(W);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function ih(e) {
        return Ps(2, e);
      }
      var oh = jc(function(e, t) {
        t = t.length == 1 && we(t[0]) ? Oe(t[0], Ht(pe())) : Oe(Ct(t, 1), Ht(pe()));
        var r = t.length;
        return Ae(function(a) {
          for (var p = -1, m = Mt(a.length, r); ++p < m; )
            a[p] = t[p].call(this, a[p]);
          return H(e, this, a);
        });
      }), Va = Ae(function(e, t) {
        var r = bt(t, xi(Va));
        return ar(e, be, s, t, r);
      }), Ws = Ae(function(e, t) {
        var r = bt(t, xi(Ws));
        return ar(e, f, s, t, r);
      }), uh = fr(function(e, t) {
        return ar(e, qe, s, s, s, t);
      });
      function ah(e, t) {
        if (typeof e != "function")
          throw new Kt(W);
        return t = t === s ? t : Se(t), Ae(e, t);
      }
      function fh(e, t) {
        if (typeof e != "function")
          throw new Kt(W);
        return t = t == null ? 0 : vt(Se(t), 0), Ae(function(r) {
          var a = r[t], p = Or(r, 0, t);
          return a && Le(p, a), H(e, this, p);
        });
      }
      function sh(e, t, r) {
        var a = !0, p = !0;
        if (typeof e != "function")
          throw new Kt(W);
        return nt(r) && (a = "leading" in r ? !!r.leading : a, p = "trailing" in r ? !!r.trailing : p), $s(e, t, {
          leading: a,
          maxWait: t,
          trailing: p
        });
      }
      function lh(e) {
        return Is(e, 1);
      }
      function ch(e, t) {
        return Va(Ra(t), e);
      }
      function ph() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return we(e) ? e : [e];
      }
      function dh(e) {
        return wn(e, ce);
      }
      function hh(e, t) {
        return t = typeof t == "function" ? t : s, wn(e, ce, t);
      }
      function gh(e) {
        return wn(e, ge | ce);
      }
      function vh(e, t) {
        return t = typeof t == "function" ? t : s, wn(e, ge | ce, t);
      }
      function yh(e, t) {
        return t == null || Af(e, t, xt(t));
      }
      function Bn(e, t) {
        return e === t || e !== e && t !== t;
      }
      var mh = hu(_a), _h = hu(function(e, t) {
        return e >= t;
      }), Kr = Nf(function() {
        return arguments;
      }()) ? Nf : function(e) {
        return it(e) && N.call(e, "callee") && !Xe.call(e, "callee");
      }, we = I.isArray, bh = c ? Ht(c) : Oc;
      function Jt(e) {
        return e != null && Tu(e.length) && !lr(e);
      }
      function ft(e) {
        return it(e) && Jt(e);
      }
      function xh(e) {
        return e === !0 || e === !1 || it(e) && Ft(e) == mt;
      }
      var Lr = Ml || of, wh = g ? Ht(g) : Lc;
      function Th(e) {
        return it(e) && e.nodeType === 1 && !ho(e);
      }
      function Sh(e) {
        if (e == null)
          return !0;
        if (Jt(e) && (we(e) || typeof e == "string" || typeof e.splice == "function" || Lr(e) || wi(e) || Kr(e)))
          return !e.length;
        var t = Bt(e);
        if (t == pt || t == dt)
          return !e.size;
        if (co(e))
          return !wa(e).length;
        for (var r in e)
          if (N.call(e, r))
            return !1;
        return !0;
      }
      function Ch(e, t) {
        return fo(e, t);
      }
      function Ah(e, t, r) {
        r = typeof r == "function" ? r : s;
        var a = r ? r(e, t) : s;
        return a === s ? fo(e, t, s, r) : !!a;
      }
      function Xa(e) {
        if (!it(e))
          return !1;
        var t = Ft(e);
        return t == Fn || t == Di || typeof e.message == "string" && typeof e.name == "string" && !ho(e);
      }
      function Eh(e) {
        return typeof e == "number" && bf(e);
      }
      function lr(e) {
        if (!nt(e))
          return !1;
        var t = Ft(e);
        return t == hr || t == At || t == Hn || t == Ri;
      }
      function ks(e) {
        return typeof e == "number" && e == Se(e);
      }
      function Tu(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= qt;
      }
      function nt(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function it(e) {
        return e != null && typeof e == "object";
      }
      var Hs = w ? Ht(w) : Rc;
      function Oh(e, t) {
        return e === t || xa(e, t, $a(t));
      }
      function Lh(e, t, r) {
        return r = typeof r == "function" ? r : s, xa(e, t, $a(t), r);
      }
      function Dh(e) {
        return Fs(e) && e != +e;
      }
      function Rh(e) {
        if (hp(e))
          throw new ye(B);
        return If(e);
      }
      function Nh(e) {
        return e === null;
      }
      function Ih(e) {
        return e == null;
      }
      function Fs(e) {
        return typeof e == "number" || it(e) && Ft(e) == un;
      }
      function ho(e) {
        if (!it(e) || Ft(e) != Ve)
          return !1;
        var t = at(e);
        if (t === null)
          return !0;
        var r = N.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && O.call(r) == se;
      }
      var Ya = _ ? Ht(_) : Nc;
      function Ph(e) {
        return ks(e) && e >= -qt && e <= qt;
      }
      var Us = D ? Ht(D) : Ic;
      function Su(e) {
        return typeof e == "string" || !we(e) && it(e) && Ft(e) == Rn;
      }
      function ln(e) {
        return typeof e == "symbol" || it(e) && Ft(e) == an;
      }
      var wi = P ? Ht(P) : Pc;
      function Mh(e) {
        return e === s;
      }
      function Bh(e) {
        return it(e) && Bt(e) == Et;
      }
      function qh(e) {
        return it(e) && Ft(e) == Nn;
      }
      var $h = hu(Ta), Wh = hu(function(e, t) {
        return e <= t;
      });
      function zs(e) {
        if (!e)
          return [];
        if (Jt(e))
          return Su(e) ? It(e) : Zt(e);
        if (gt && e[gt])
          return fa(e[gt]());
        var t = Bt(e), r = t == pt ? kr : t == dt ? Hr : Ti;
        return r(e);
      }
      function cr(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Cn(e), e === ot || e === -ot) {
          var t = e < 0 ? -1 : 1;
          return t * Dn;
        }
        return e === e ? e : 0;
      }
      function Se(e) {
        var t = cr(e), r = t % 1;
        return t === t ? r ? t - r : t : 0;
      }
      function js(e) {
        return e ? Gr(Se(e), 0, Je) : 0;
      }
      function Cn(e) {
        if (typeof e == "number")
          return e;
        if (ln(e))
          return vn;
        if (nt(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = nt(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = hi(e);
        var r = Uu.test(e);
        return r || Lo.test(e) ? Ki(e.slice(2), r ? 2 : 8) : Oo.test(e) ? vn : +e;
      }
      function Gs(e) {
        return Yn(e, Qt(e));
      }
      function kh(e) {
        return e ? Gr(Se(e), -qt, qt) : e === 0 ? e : 0;
      }
      function je(e) {
        return e == null ? "" : sn(e);
      }
      var Hh = _i(function(e, t) {
        if (co(t) || Jt(t)) {
          Yn(t, xt(t), e);
          return;
        }
        for (var r in t)
          N.call(t, r) && oo(e, r, t[r]);
      }), Vs = _i(function(e, t) {
        Yn(t, Qt(t), e);
      }), Cu = _i(function(e, t, r, a) {
        Yn(t, Qt(t), e, a);
      }), Fh = _i(function(e, t, r, a) {
        Yn(t, xt(t), e, a);
      }), Uh = fr(va);
      function zh(e, t) {
        var r = mi(e);
        return t == null ? r : Cf(r, t);
      }
      var jh = Ae(function(e, t) {
        e = He(e);
        var r = -1, a = t.length, p = a > 2 ? t[2] : s;
        for (p && Ut(t[0], t[1], p) && (a = 1); ++r < a; )
          for (var m = t[r], b = Qt(m), T = -1, L = b.length; ++T < L; ) {
            var F = b[T], U = e[F];
            (U === s || Bn(U, C[F]) && !N.call(e, F)) && (e[F] = m[F]);
          }
        return e;
      }), Gh = Ae(function(e) {
        return e.push(s, ls), H(Xs, s, e);
      });
      function Vh(e, t) {
        return Rt(e, pe(t, 3), Xn);
      }
      function Xh(e, t) {
        return Rt(e, pe(t, 3), ma);
      }
      function Yh(e, t) {
        return e == null ? e : ya(e, pe(t, 3), Qt);
      }
      function Kh(e, t) {
        return e == null ? e : Df(e, pe(t, 3), Qt);
      }
      function Zh(e, t) {
        return e && Xn(e, pe(t, 3));
      }
      function Jh(e, t) {
        return e && ma(e, pe(t, 3));
      }
      function Qh(e) {
        return e == null ? [] : uu(e, xt(e));
      }
      function eg(e) {
        return e == null ? [] : uu(e, Qt(e));
      }
      function Ka(e, t, r) {
        var a = e == null ? s : Vr(e, t);
        return a === s ? r : a;
      }
      function tg(e, t) {
        return e != null && ds(e, t, Sc);
      }
      function Za(e, t) {
        return e != null && ds(e, t, Cc);
      }
      var ng = os(function(e, t, r) {
        t != null && typeof t.toString != "function" && (t = Z.call(t)), e[t] = r;
      }, Qa(en)), rg = os(function(e, t, r) {
        t != null && typeof t.toString != "function" && (t = Z.call(t)), N.call(e, t) ? e[t].push(r) : e[t] = [r];
      }, pe), ig = Ae(ao);
      function xt(e) {
        return Jt(e) ? Tf(e) : wa(e);
      }
      function Qt(e) {
        return Jt(e) ? Tf(e, !0) : Mc(e);
      }
      function og(e, t) {
        var r = {};
        return t = pe(t, 3), Xn(e, function(a, p, m) {
          ur(r, t(a, p, m), a);
        }), r;
      }
      function ug(e, t) {
        var r = {};
        return t = pe(t, 3), Xn(e, function(a, p, m) {
          ur(r, p, t(a, p, m));
        }), r;
      }
      var ag = _i(function(e, t, r) {
        au(e, t, r);
      }), Xs = _i(function(e, t, r, a) {
        au(e, t, r, a);
      }), fg = fr(function(e, t) {
        var r = {};
        if (e == null)
          return r;
        var a = !1;
        t = Oe(t, function(m) {
          return m = Er(m, e), a || (a = m.length > 1), m;
        }), Yn(e, Ba(e), r), a && (r = wn(r, ge | Te | ce, np));
        for (var p = t.length; p--; )
          Oa(r, t[p]);
        return r;
      });
      function sg(e, t) {
        return Ys(e, wu(pe(t)));
      }
      var lg = fr(function(e, t) {
        return e == null ? {} : qc(e, t);
      });
      function Ys(e, t) {
        if (e == null)
          return {};
        var r = Oe(Ba(e), function(a) {
          return [a];
        });
        return t = pe(t), kf(e, r, function(a, p) {
          return t(a, p[0]);
        });
      }
      function cg(e, t, r) {
        t = Er(t, e);
        var a = -1, p = t.length;
        for (p || (p = 1, e = s); ++a < p; ) {
          var m = e == null ? s : e[Kn(t[a])];
          m === s && (a = p, m = r), e = lr(m) ? m.call(e) : m;
        }
        return e;
      }
      function pg(e, t, r) {
        return e == null ? e : so(e, t, r);
      }
      function dg(e, t, r, a) {
        return a = typeof a == "function" ? a : s, e == null ? e : so(e, t, r, a);
      }
      var Ks = fs(xt), Zs = fs(Qt);
      function hg(e, t, r) {
        var a = we(e), p = a || Lr(e) || wi(e);
        if (t = pe(t, 4), r == null) {
          var m = e && e.constructor;
          p ? r = a ? new m() : [] : nt(e) ? r = lr(m) ? mi(at(e)) : {} : r = {};
        }
        return (p ? M : Xn)(e, function(b, T, L) {
          return t(r, b, T, L);
        }), r;
      }
      function gg(e, t) {
        return e == null ? !0 : Oa(e, t);
      }
      function vg(e, t, r) {
        return e == null ? e : jf(e, t, Ra(r));
      }
      function yg(e, t, r, a) {
        return a = typeof a == "function" ? a : s, e == null ? e : jf(e, t, Ra(r), a);
      }
      function Ti(e) {
        return e == null ? [] : wr(e, xt(e));
      }
      function mg(e) {
        return e == null ? [] : wr(e, Qt(e));
      }
      function _g(e, t, r) {
        return r === s && (r = t, t = s), r !== s && (r = Cn(r), r = r === r ? r : 0), t !== s && (t = Cn(t), t = t === t ? t : 0), Gr(Cn(e), t, r);
      }
      function bg(e, t, r) {
        return t = cr(t), r === s ? (r = t, t = 0) : r = cr(r), e = Cn(e), Ac(e, t, r);
      }
      function xg(e, t, r) {
        if (r && typeof r != "boolean" && Ut(e, t, r) && (t = r = s), r === s && (typeof t == "boolean" ? (r = t, t = s) : typeof e == "boolean" && (r = e, e = s)), e === s && t === s ? (e = 0, t = 1) : (e = cr(e), t === s ? (t = e, e = 0) : t = cr(t)), e > t) {
          var a = e;
          e = t, t = a;
        }
        if (r || e % 1 || t % 1) {
          var p = xf();
          return Mt(e + p * (t - e + jo("1e-" + ((p + "").length - 1))), t);
        }
        return Ca(e, t);
      }
      var wg = bi(function(e, t, r) {
        return t = t.toLowerCase(), e + (r ? Js(t) : t);
      });
      function Js(e) {
        return Ja(je(e).toLowerCase());
      }
      function Qs(e) {
        return e = je(e), e && e.replace(Ro, oa).replace(Qu, "");
      }
      function Tg(e, t, r) {
        e = je(e), t = sn(t);
        var a = e.length;
        r = r === s ? a : Gr(Se(r), 0, a);
        var p = r;
        return r -= t.length, r >= 0 && e.slice(r, p) == t;
      }
      function Sg(e) {
        return e = je(e), e && Bu.test(e) ? e.replace(er, gi) : e;
      }
      function Cg(e) {
        return e = je(e), e && Hu.test(e) ? e.replace(oi, "\\$&") : e;
      }
      var Ag = bi(function(e, t, r) {
        return e + (r ? "-" : "") + t.toLowerCase();
      }), Eg = bi(function(e, t, r) {
        return e + (r ? " " : "") + t.toLowerCase();
      }), Og = ns("toLowerCase");
      function Lg(e, t, r) {
        e = je(e), t = Se(t);
        var a = t ? We(e) : 0;
        if (!t || a >= t)
          return e;
        var p = (t - a) / 2;
        return du(eu(p), r) + e + du(Qo(p), r);
      }
      function Dg(e, t, r) {
        e = je(e), t = Se(t);
        var a = t ? We(e) : 0;
        return t && a < t ? e + du(t - a, r) : e;
      }
      function Rg(e, t, r) {
        e = je(e), t = Se(t);
        var a = t ? We(e) : 0;
        return t && a < t ? du(t - a, r) + e : e;
      }
      function Ng(e, t, r) {
        return r || t == null ? t = 0 : t && (t = +t), Wl(je(e).replace(Bi, ""), t || 0);
      }
      function Ig(e, t, r) {
        return (r ? Ut(e, t, r) : t === s) ? t = 1 : t = Se(t), Aa(je(e), t);
      }
      function Pg() {
        var e = arguments, t = je(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Mg = bi(function(e, t, r) {
        return e + (r ? "_" : "") + t.toLowerCase();
      });
      function Bg(e, t, r) {
        return r && typeof r != "number" && Ut(e, t, r) && (t = r = s), r = r === s ? Je : r >>> 0, r ? (e = je(e), e && (typeof t == "string" || t != null && !Ya(t)) && (t = sn(t), !t && Tr(e)) ? Or(It(e), 0, r) : e.split(t, r)) : [];
      }
      var qg = bi(function(e, t, r) {
        return e + (r ? " " : "") + Ja(t);
      });
      function $g(e, t, r) {
        return e = je(e), r = r == null ? 0 : Gr(Se(r), 0, e.length), t = sn(t), e.slice(r, r + t.length) == t;
      }
      function Wg(e, t, r) {
        var a = v.templateSettings;
        r && Ut(e, t, r) && (t = s), e = je(e), t = Cu({}, t, a, ss);
        var p = Cu({}, t.imports, a.imports, ss), m = xt(p), b = wr(p, m), T, L, F = 0, U = t.interpolate || Pr, V = "__p += '", Q = Fr(
          (t.escape || Pr).source + "|" + U.source + "|" + (U === Nr ? Ao : Pr).source + "|" + (t.evaluate || Pr).source + "|$",
          "g"
        ), re = "//# sourceURL=" + (N.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++zo + "]") + `
`;
        e.replace(Q, function(he, Re, Be, cn, zt, pn) {
          return Be || (Be = cn), V += e.slice(F, pn).replace(zu, ua), Re && (T = !0, V += `' +
__e(` + Re + `) +
'`), zt && (L = !0, V += `';
` + zt + `;
__p += '`), Be && (V += `' +
((__t = (` + Be + `)) == null ? '' : __t) +
'`), F = pn + he.length, he;
        }), V += `';
`;
        var de = N.call(t, "variable") && t.variable;
        if (!de)
          V = `with (obj) {
` + V + `
}
`;
        else if ($i.test(de))
          throw new ye(k);
        V = (L ? V.replace(Ii, "") : V).replace(Mu, "$1").replace(To, "$1;"), V = "function(" + (de || "obj") + `) {
` + (de ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (T ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + V + `return __p
}`;
        var Ce = tl(function() {
          return Me(m, re + "return " + V).apply(s, b);
        });
        if (Ce.source = V, Xa(Ce))
          throw Ce;
        return Ce;
      }
      function kg(e) {
        return je(e).toLowerCase();
      }
      function Hg(e) {
        return je(e).toUpperCase();
      }
      function Fg(e, t, r) {
        if (e = je(e), e && (r || t === s))
          return hi(e);
        if (!e || !(t = sn(t)))
          return e;
        var a = It(e), p = It(t), m = Ji(a, p), b = Xo(a, p) + 1;
        return Or(a, m, b).join("");
      }
      function Ug(e, t, r) {
        if (e = je(e), e && (r || t === s))
          return e.slice(0, Yt(e) + 1);
        if (!e || !(t = sn(t)))
          return e;
        var a = It(e), p = Xo(a, It(t)) + 1;
        return Or(a, 0, p).join("");
      }
      function zg(e, t, r) {
        if (e = je(e), e && (r || t === s))
          return e.replace(Bi, "");
        if (!e || !(t = sn(t)))
          return e;
        var a = It(e), p = Ji(a, It(t));
        return Or(a, p).join("");
      }
      function jg(e, t) {
        var r = Ze, a = ke;
        if (nt(t)) {
          var p = "separator" in t ? t.separator : p;
          r = "length" in t ? Se(t.length) : r, a = "omission" in t ? sn(t.omission) : a;
        }
        e = je(e);
        var m = e.length;
        if (Tr(e)) {
          var b = It(e);
          m = b.length;
        }
        if (r >= m)
          return e;
        var T = r - We(a);
        if (T < 1)
          return a;
        var L = b ? Or(b, 0, T).join("") : e.slice(0, T);
        if (p === s)
          return L + a;
        if (b && (T += L.length - T), Ya(p)) {
          if (e.slice(T).search(p)) {
            var F, U = L;
            for (p.global || (p = Fr(p.source, je(Eo.exec(p)) + "g")), p.lastIndex = 0; F = p.exec(U); )
              var V = F.index;
            L = L.slice(0, V === s ? T : V);
          }
        } else if (e.indexOf(sn(p), T) != T) {
          var Q = L.lastIndexOf(p);
          Q > -1 && (L = L.slice(0, Q));
        }
        return L + a;
      }
      function Gg(e) {
        return e = je(e), e && gr.test(e) ? e.replace(Pi, fn) : e;
      }
      var Vg = bi(function(e, t, r) {
        return e + (r ? " " : "") + t.toUpperCase();
      }), Ja = ns("toUpperCase");
      function el(e, t, r) {
        return e = je(e), t = r ? s : t, t === s ? Wr(e) ? la(e) : pi(e) : e.match(t) || [];
      }
      var tl = Ae(function(e, t) {
        try {
          return H(e, s, t);
        } catch (r) {
          return Xa(r) ? r : new ye(r);
        }
      }), Xg = fr(function(e, t) {
        return M(t, function(r) {
          r = Kn(r), ur(e, r, Ga(e[r], e));
        }), e;
      });
      function Yg(e) {
        var t = e == null ? 0 : e.length, r = pe();
        return e = t ? Oe(e, function(a) {
          if (typeof a[1] != "function")
            throw new Kt(W);
          return [r(a[0]), a[1]];
        }) : [], Ae(function(a) {
          for (var p = -1; ++p < t; ) {
            var m = e[p];
            if (H(m[0], this, a))
              return H(m[1], this, a);
          }
        });
      }
      function Kg(e) {
        return xc(wn(e, ge));
      }
      function Qa(e) {
        return function() {
          return e;
        };
      }
      function Zg(e, t) {
        return e == null || e !== e ? t : e;
      }
      var Jg = is(), Qg = is(!0);
      function en(e) {
        return e;
      }
      function ef(e) {
        return Pf(typeof e == "function" ? e : wn(e, ge));
      }
      function ev(e) {
        return Bf(wn(e, ge));
      }
      function tv(e, t) {
        return qf(e, wn(t, ge));
      }
      var nv = Ae(function(e, t) {
        return function(r) {
          return ao(r, e, t);
        };
      }), rv = Ae(function(e, t) {
        return function(r) {
          return ao(e, r, t);
        };
      });
      function tf(e, t, r) {
        var a = xt(t), p = uu(t, a);
        r == null && !(nt(t) && (p.length || !a.length)) && (r = t, t = e, e = this, p = uu(t, xt(t)));
        var m = !(nt(r) && "chain" in r) || !!r.chain, b = lr(e);
        return M(p, function(T) {
          var L = t[T];
          e[T] = L, b && (e.prototype[T] = function() {
            var F = this.__chain__;
            if (m || F) {
              var U = e(this.__wrapped__), V = U.__actions__ = Zt(this.__actions__);
              return V.push({ func: L, args: arguments, thisArg: e }), U.__chain__ = F, U;
            }
            return L.apply(e, Le([this.value()], arguments));
          });
        }), e;
      }
      function iv() {
        return ht._ === this && (ht._ = fe), this;
      }
      function nf() {
      }
      function ov(e) {
        return e = Se(e), Ae(function(t) {
          return $f(t, e);
        });
      }
      var uv = Ia(Oe), av = Ia(_e), fv = Ia(De);
      function nl(e) {
        return ka(e) ? _n(Kn(e)) : $c(e);
      }
      function sv(e) {
        return function(t) {
          return e == null ? s : Vr(e, t);
        };
      }
      var lv = us(), cv = us(!0);
      function rf() {
        return [];
      }
      function of() {
        return !1;
      }
      function pv() {
        return {};
      }
      function dv() {
        return "";
      }
      function hv() {
        return !0;
      }
      function gv(e, t) {
        if (e = Se(e), e < 1 || e > qt)
          return [];
        var r = Je, a = Mt(e, Je);
        t = pe(t), e -= Je;
        for (var p = Pn(a, t); ++r < e; )
          t(r);
        return p;
      }
      function vv(e) {
        return we(e) ? Oe(e, Kn) : ln(e) ? [e] : Zt(ws(je(e)));
      }
      function yv(e) {
        var t = ++j;
        return je(e) + t;
      }
      var mv = pu(function(e, t) {
        return e + t;
      }, 0), _v = Pa("ceil"), bv = pu(function(e, t) {
        return e / t;
      }, 1), xv = Pa("floor");
      function wv(e) {
        return e && e.length ? ou(e, en, _a) : s;
      }
      function Tv(e, t) {
        return e && e.length ? ou(e, pe(t, 2), _a) : s;
      }
      function Sv(e) {
        return kt(e, en);
      }
      function Cv(e, t) {
        return kt(e, pe(t, 2));
      }
      function Av(e) {
        return e && e.length ? ou(e, en, Ta) : s;
      }
      function Ev(e, t) {
        return e && e.length ? ou(e, pe(t, 2), Ta) : s;
      }
      var Ov = pu(function(e, t) {
        return e * t;
      }, 1), Lv = Pa("round"), Dv = pu(function(e, t) {
        return e - t;
      }, 0);
      function Rv(e) {
        return e && e.length ? $e(e, en) : 0;
      }
      function Nv(e, t) {
        return e && e.length ? $e(e, pe(t, 2)) : 0;
      }
      return v.after = eh, v.ary = Is, v.assign = Hh, v.assignIn = Vs, v.assignInWith = Cu, v.assignWith = Fh, v.at = Uh, v.before = Ps, v.bind = Ga, v.bindAll = Xg, v.bindKey = Ms, v.castArray = ph, v.chain = Ds, v.chunk = xp, v.compact = wp, v.concat = Tp, v.cond = Yg, v.conforms = Kg, v.constant = Qa, v.countBy = Rd, v.create = zh, v.curry = Bs, v.curryRight = qs, v.debounce = $s, v.defaults = jh, v.defaultsDeep = Gh, v.defer = th, v.delay = nh, v.difference = Sp, v.differenceBy = Cp, v.differenceWith = Ap, v.drop = Ep, v.dropRight = Op, v.dropRightWhile = Lp, v.dropWhile = Dp, v.fill = Rp, v.filter = Id, v.flatMap = Bd, v.flatMapDeep = qd, v.flatMapDepth = $d, v.flatten = As, v.flattenDeep = Np, v.flattenDepth = Ip, v.flip = rh, v.flow = Jg, v.flowRight = Qg, v.fromPairs = Pp, v.functions = Qh, v.functionsIn = eg, v.groupBy = Wd, v.initial = Bp, v.intersection = qp, v.intersectionBy = $p, v.intersectionWith = Wp, v.invert = ng, v.invertBy = rg, v.invokeMap = Hd, v.iteratee = ef, v.keyBy = Fd, v.keys = xt, v.keysIn = Qt, v.map = _u, v.mapKeys = og, v.mapValues = ug, v.matches = ev, v.matchesProperty = tv, v.memoize = xu, v.merge = ag, v.mergeWith = Xs, v.method = nv, v.methodOf = rv, v.mixin = tf, v.negate = wu, v.nthArg = ov, v.omit = fg, v.omitBy = sg, v.once = ih, v.orderBy = Ud, v.over = uv, v.overArgs = oh, v.overEvery = av, v.overSome = fv, v.partial = Va, v.partialRight = Ws, v.partition = zd, v.pick = lg, v.pickBy = Ys, v.property = nl, v.propertyOf = sv, v.pull = Up, v.pullAll = Os, v.pullAllBy = zp, v.pullAllWith = jp, v.pullAt = Gp, v.range = lv, v.rangeRight = cv, v.rearg = uh, v.reject = Vd, v.remove = Vp, v.rest = ah, v.reverse = za, v.sampleSize = Yd, v.set = pg, v.setWith = dg, v.shuffle = Kd, v.slice = Xp, v.sortBy = Qd, v.sortedUniq = td, v.sortedUniqBy = nd, v.split = Bg, v.spread = fh, v.tail = rd, v.take = id, v.takeRight = od, v.takeRightWhile = ud, v.takeWhile = ad, v.tap = wd, v.throttle = sh, v.thru = mu, v.toArray = zs, v.toPairs = Ks, v.toPairsIn = Zs, v.toPath = vv, v.toPlainObject = Gs, v.transform = hg, v.unary = lh, v.union = fd, v.unionBy = sd, v.unionWith = ld, v.uniq = cd, v.uniqBy = pd, v.uniqWith = dd, v.unset = gg, v.unzip = ja, v.unzipWith = Ls, v.update = vg, v.updateWith = yg, v.values = Ti, v.valuesIn = mg, v.without = hd, v.words = el, v.wrap = ch, v.xor = gd, v.xorBy = vd, v.xorWith = yd, v.zip = md, v.zipObject = _d, v.zipObjectDeep = bd, v.zipWith = xd, v.entries = Ks, v.entriesIn = Zs, v.extend = Vs, v.extendWith = Cu, tf(v, v), v.add = mv, v.attempt = tl, v.camelCase = wg, v.capitalize = Js, v.ceil = _v, v.clamp = _g, v.clone = dh, v.cloneDeep = gh, v.cloneDeepWith = vh, v.cloneWith = hh, v.conformsTo = yh, v.deburr = Qs, v.defaultTo = Zg, v.divide = bv, v.endsWith = Tg, v.eq = Bn, v.escape = Sg, v.escapeRegExp = Cg, v.every = Nd, v.find = Pd, v.findIndex = Ss, v.findKey = Vh, v.findLast = Md, v.findLastIndex = Cs, v.findLastKey = Xh, v.floor = xv, v.forEach = Rs, v.forEachRight = Ns, v.forIn = Yh, v.forInRight = Kh, v.forOwn = Zh, v.forOwnRight = Jh, v.get = Ka, v.gt = mh, v.gte = _h, v.has = tg, v.hasIn = Za, v.head = Es, v.identity = en, v.includes = kd, v.indexOf = Mp, v.inRange = bg, v.invoke = ig, v.isArguments = Kr, v.isArray = we, v.isArrayBuffer = bh, v.isArrayLike = Jt, v.isArrayLikeObject = ft, v.isBoolean = xh, v.isBuffer = Lr, v.isDate = wh, v.isElement = Th, v.isEmpty = Sh, v.isEqual = Ch, v.isEqualWith = Ah, v.isError = Xa, v.isFinite = Eh, v.isFunction = lr, v.isInteger = ks, v.isLength = Tu, v.isMap = Hs, v.isMatch = Oh, v.isMatchWith = Lh, v.isNaN = Dh, v.isNative = Rh, v.isNil = Ih, v.isNull = Nh, v.isNumber = Fs, v.isObject = nt, v.isObjectLike = it, v.isPlainObject = ho, v.isRegExp = Ya, v.isSafeInteger = Ph, v.isSet = Us, v.isString = Su, v.isSymbol = ln, v.isTypedArray = wi, v.isUndefined = Mh, v.isWeakMap = Bh, v.isWeakSet = qh, v.join = kp, v.kebabCase = Ag, v.last = Sn, v.lastIndexOf = Hp, v.lowerCase = Eg, v.lowerFirst = Og, v.lt = $h, v.lte = Wh, v.max = wv, v.maxBy = Tv, v.mean = Sv, v.meanBy = Cv, v.min = Av, v.minBy = Ev, v.stubArray = rf, v.stubFalse = of, v.stubObject = pv, v.stubString = dv, v.stubTrue = hv, v.multiply = Ov, v.nth = Fp, v.noConflict = iv, v.noop = nf, v.now = bu, v.pad = Lg, v.padEnd = Dg, v.padStart = Rg, v.parseInt = Ng, v.random = xg, v.reduce = jd, v.reduceRight = Gd, v.repeat = Ig, v.replace = Pg, v.result = cg, v.round = Lv, v.runInContext = A, v.sample = Xd, v.size = Zd, v.snakeCase = Mg, v.some = Jd, v.sortedIndex = Yp, v.sortedIndexBy = Kp, v.sortedIndexOf = Zp, v.sortedLastIndex = Jp, v.sortedLastIndexBy = Qp, v.sortedLastIndexOf = ed, v.startCase = qg, v.startsWith = $g, v.subtract = Dv, v.sum = Rv, v.sumBy = Nv, v.template = Wg, v.times = gv, v.toFinite = cr, v.toInteger = Se, v.toLength = js, v.toLower = kg, v.toNumber = Cn, v.toSafeInteger = kh, v.toString = je, v.toUpper = Hg, v.trim = Fg, v.trimEnd = Ug, v.trimStart = zg, v.truncate = jg, v.unescape = Gg, v.uniqueId = yv, v.upperCase = Vg, v.upperFirst = Ja, v.each = Rs, v.eachRight = Ns, v.first = Es, tf(v, function() {
        var e = {};
        return Xn(v, function(t, r) {
          N.call(v.prototype, r) || (e[r] = t);
        }), e;
      }(), { chain: !1 }), v.VERSION = S, M(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        v[e].placeholder = v;
      }), M(["drop", "take"], function(e, t) {
        Pe.prototype[e] = function(r) {
          r = r === s ? 1 : vt(Se(r), 0);
          var a = this.__filtered__ && !t ? new Pe(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = Mt(r, a.__takeCount__) : a.__views__.push({
            size: Mt(r, Je),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, Pe.prototype[e + "Right"] = function(r) {
          return this.reverse()[e](r).reverse();
        };
      }), M(["filter", "map", "takeWhile"], function(e, t) {
        var r = t + 1, a = r == jt || r == St;
        Pe.prototype[e] = function(p) {
          var m = this.clone();
          return m.__iteratees__.push({
            iteratee: pe(p, 3),
            type: r
          }), m.__filtered__ = m.__filtered__ || a, m;
        };
      }), M(["head", "last"], function(e, t) {
        var r = "take" + (t ? "Right" : "");
        Pe.prototype[e] = function() {
          return this[r](1).value()[0];
        };
      }), M(["initial", "tail"], function(e, t) {
        var r = "drop" + (t ? "" : "Right");
        Pe.prototype[e] = function() {
          return this.__filtered__ ? new Pe(this) : this[r](1);
        };
      }), Pe.prototype.compact = function() {
        return this.filter(en);
      }, Pe.prototype.find = function(e) {
        return this.filter(e).head();
      }, Pe.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Pe.prototype.invokeMap = Ae(function(e, t) {
        return typeof e == "function" ? new Pe(this) : this.map(function(r) {
          return ao(r, e, t);
        });
      }), Pe.prototype.reject = function(e) {
        return this.filter(wu(pe(e)));
      }, Pe.prototype.slice = function(e, t) {
        e = Se(e);
        var r = this;
        return r.__filtered__ && (e > 0 || t < 0) ? new Pe(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== s && (t = Se(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
      }, Pe.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Pe.prototype.toArray = function() {
        return this.take(Je);
      }, Xn(Pe.prototype, function(e, t) {
        var r = /^(?:filter|find|map|reject)|While$/.test(t), a = /^(?:head|last)$/.test(t), p = v[a ? "take" + (t == "last" ? "Right" : "") : t], m = a || /^find/.test(t);
        !p || (v.prototype[t] = function() {
          var b = this.__wrapped__, T = a ? [1] : arguments, L = b instanceof Pe, F = T[0], U = L || we(b), V = function(Re) {
            var Be = p.apply(v, Le([Re], T));
            return a && Q ? Be[0] : Be;
          };
          U && r && typeof F == "function" && F.length != 1 && (L = U = !1);
          var Q = this.__chain__, re = !!this.__actions__.length, de = m && !Q, Ce = L && !re;
          if (!m && U) {
            b = Ce ? b : new Pe(this);
            var he = e.apply(b, T);
            return he.__actions__.push({ func: mu, args: [V], thisArg: s }), new xn(he, Q);
          }
          return de && Ce ? e.apply(this, T) : (he = this.thru(V), de ? a ? he.value()[0] : he.value() : he);
        });
      }), M(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = y[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        v.prototype[e] = function() {
          var p = arguments;
          if (a && !this.__chain__) {
            var m = this.value();
            return t.apply(we(m) ? m : [], p);
          }
          return this[r](function(b) {
            return t.apply(we(b) ? b : [], p);
          });
        };
      }), Xn(Pe.prototype, function(e, t) {
        var r = v[t];
        if (r) {
          var a = r.name + "";
          N.call(yi, a) || (yi[a] = []), yi[a].push({ name: t, func: r });
        }
      }), yi[cu(s, te).name] = [{
        name: "wrapper",
        func: s
      }], Pe.prototype.clone = Gl, Pe.prototype.reverse = Vl, Pe.prototype.value = Xl, v.prototype.at = Td, v.prototype.chain = Sd, v.prototype.commit = Cd, v.prototype.next = Ad, v.prototype.plant = Od, v.prototype.reverse = Ld, v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = Dd, v.prototype.first = v.prototype.head, gt && (v.prototype[gt] = Ed), v;
    }, rr = ca();
    i ? ((i.exports = rr)._ = rr, n._ = rr) : ht._ = rr;
  }).call(Si);
})(cf, cf.exports);
const Du = cf.exports, Z0 = {
  install(h) {
    const d = ["/", "ntv", "element"];
    for (let S = 0; S < d.length; S++) {
      let E = d[S];
      E.startsWith("/") && (E = E.slice(1)), E.endsWith("/") && (E = E.slice(-1)), d[S] = E;
    }
    const s = /* @__PURE__ */ Object.assign({ "./element/icon/MIcon.vue": Uv, "./element/icon/MLoading.vue": Zv, "./element/modal/MModal.vue": Qv, "./element/navbar/MNavbar.vue": ry, "./element/navbar/MNavbarContainer.vue": oy, "./element/popup/MPopup.vue": b0, "./element/popup/MPopupPopin.vue": w0, "./element/popup/MPopupTooltip.vue": S0, "./element/text/MTextFormat.vue": E0, "./ntv/button/MButton.vue": D0, "./ntv/input/MInput.vue": q0, "./ntv/input/MInputInfo.vue": W0, "./ntv/input/MInputRange.vue": G0, "./ntv/link/MLink.vue": K0 });
    for (const S of Object.keys(s)) {
      const E = S.slice(2).split("/").slice(0, -1);
      let B = !1;
      for (let W = 0; W < E.length; W++) {
        let k = E.slice(0, W).join("/");
        if (k === "" && (k = "/"), B = d.includes(k), B)
          break;
      }
      if (B) {
        const W = s[S];
        let k = S.split("/").pop();
        k = k.replace(/\.\w+$/, ""), k = Du.upperFirst(Du.camelCase(k)), k = k.charAt(0).toUpperCase() + k.slice(1), h.component(k, W.default);
      }
    }
  }
}, J0 = (h) => (d) => {
  for (const s of Object.keys(h)) {
    const S = h[s];
    let E = s.split("/").pop();
    E = E.replace(/\.\w+$/, ""), E = Du.upperFirst(Du.camelCase(E)), E = E.charAt(0).toUpperCase() + E.slice(1), d.component(E, S.default);
  }
}, em = { uString: ey, install: J0 }, tm = {
  install(h) {
    h.config.globalProperties.$mood = {}, h.use(kv), h.use(Z0);
  }
};
export {
  tm as Mood,
  tm as default,
  Wv as useMeta,
  em as utils
};
