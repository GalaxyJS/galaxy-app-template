var Fe = Object.defineProperty;
var Ue = (e, t, n) => t in e ? Fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var de = (e, t, n) => Ue(e, typeof t != "symbol" ? t + "" : t, n);
const O = {
  tag: {
    type: "none"
  },
  node: {
    type: "none"
  },
  props: {
    type: "none"
  },
  children: {
    type: "none"
  },
  data_3: {
    type: "none",
    key: "data"
  },
  data_8: {
    type: "none",
    key: "data"
  },
  html: {
    type: "prop",
    key: "innerHTML"
  },
  onchange: {
    type: "event"
  },
  onclick: {
    type: "event"
  },
  ondblclick: {
    type: "event"
  },
  onmouseover: {
    type: "event"
  },
  onmouseout: {
    type: "event"
  },
  onkeydown: {
    type: "event"
  },
  onkeypress: {
    type: "event"
  },
  onkeyup: {
    type: "event"
  },
  onmousedown: {
    type: "event"
  },
  onmouseup: {
    type: "event"
  },
  onload: {
    type: "event"
  },
  onabort: {
    type: "event"
  },
  onerror: {
    type: "event"
  },
  onfocus: {
    type: "event"
  },
  onblur: {
    type: "event"
  },
  onreset: {
    type: "event"
  },
  onsubmit: {
    type: "event"
  }
}, He = [
  "text",
  "comment",
  //
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "bgsound",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "isindex",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "listing",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "nobr",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "plaintext",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "shadow",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "xmp"
];
class D {
  /**
   * Create an Observer.
   * @param {Object} context - The context to observe.
   */
  constructor(t) {
    this.context = t, this.subjectsActions = {}, this.allSubjectAction = [];
    const n = "__observers__";
    this.context.hasOwnProperty(n) || R(t, n, {
      value: [],
      writable: !0,
      configurable: !0
    }), this.context[n].push(this);
  }
  /**
   * Remove the observer from the context.
   */
  remove() {
    const t = this.context.__observers__, n = t.indexOf(this);
    n !== -1 && t.splice(n, 1);
  }
  /**
   * Notify the observer of a change.
   * @param {string} key - The key that changed.
   * @param {*} value - The new value.
   */
  notify(t, n) {
    this.subjectsActions.hasOwnProperty(t) && this.subjectsActions[t].call(this.context, n), this.allSubjectAction.forEach((s) => {
      s.call(this.context, t, n);
    });
  }
  /**
   * Register an action for a specific subject.
   * @param {string} subject - The subject to observe.
   * @param {Function} action - The action to perform.
   */
  on(t, n) {
    this.subjectsActions[t] = n;
  }
  /**
   * Register an action for all subjects.
   * @param {Function} action - The action to perform.
   */
  onAll(t) {
    this.allSubjectAction.indexOf(t) === -1 && this.allSubjectAction.push(t);
  }
  /**
   * Notify all observers of a change.
   * @param {Object} obj - The object being observed.
   * @param {string} key - The key that changed.
   * @param {*} value - The new value.
   */
  static notify(t, n, s) {
    const i = t.__observers__;
    i !== void 0 && i.forEach((r) => {
      r.notify(n, s);
    });
  }
}
function he(e, t) {
  if (typeof t == "object" && t !== null) {
    const n = {};
    for (const s in t) {
      const i = t[s];
      typeof i == "object" ? n[s] = JSON.stringify(i) : n[s] = i;
    }
    Object.assign(e.dataset, n);
  } else
    e.dataset = null;
}
const Ge = {
  type: "reactive",
  key: "data",
  getConfig: function(e, t) {
    if (t !== null && (typeof t != "object" || t instanceof Array))
      throw new Error(`data property should be an object with explicits keys:
` + JSON.stringify(this.blueprint, null, "  "));
    return {
      reactiveData: null,
      subjects: t,
      scope: e
    };
  },
  install: function(e) {
    if (e.scope.data === e.subjects)
      throw new Error("It is not allowed to use Scope.data as data value");
    if (!this.blueprint.module) {
      e.reactiveData = B(this, e.subjects, e.scope, !0), new D(e.reactiveData).onAll(() => {
        he(this.node, e.reactiveData);
      });
      return;
    }
    return Object.assign(this.data, e.subjects), !1;
  },
  update: function(e, t, n) {
    n && (t = n()), e.subjects === t && (t = e.reactiveData), he(this.node, t);
  }
}, Ke = {
  type: "prop",
  key: "nodeValue"
}, qe = {
  type: "prop",
  key: "nodeValue"
}, Ye = {
  type: "prop",
  key: "text",
  /**
   *
   * @param {Galaxy.ViewNode} viewNode
   * @param value
   */
  update: function(e, t) {
    let n = typeof t > "u" || t === null ? "" : t;
    n instanceof Object && (n = JSON.stringify(n));
    const s = e.node, i = s["<>text"];
    if (i)
      i.nodeValue = n;
    else {
      const r = s["<>text"] = document.createTextNode(n);
      s.insertBefore(r, s.firstChild);
    }
  }
};
let ie, ye;
if (!window.gsap)
  ye = function() {
  }, ie = {
    type: "prop",
    key: "animations",
    /**
     *
     * @param {Galaxy.ViewNode} viewNode
     * @param animationDescriptions
     */
    update: function(e, t) {
      t.enter && t.enter.to.onComplete && (e.processEnterAnimation = t.enter.to.onComplete), e.processLeaveAnimation = (n) => {
        n();
      };
    }
  }, window.gsap = {
    to: function(e, t) {
      return requestAnimationFrame(() => {
        typeof e == "string" && (e = document.querySelector(e));
        const n = e.style;
        if (n) {
          const s = Object.keys(t);
          for (let i = 0, r = s.length; i < r; i++) {
            const a = s[i], l = t[a];
            switch (a) {
              case "duration":
              case "ease":
                break;
              case "opacity":
              case "z-index":
                n.setProperty(a, l);
                break;
              case "scrollTo":
                e.scrollTop = typeof l.y == "string" ? document.querySelector(l.y).offsetTop : l.y, e.scrollLeft = typeof l.x == "string" ? document.querySelector(l.x).offsetLeft : l.x;
                break;
              default:
                n.setProperty(a, typeof l == "number" && l !== 0 ? l + "px" : l);
            }
          }
        } else
          Object.assign(e, t);
      });
    }
  }, console.info("%cIn order to activate animations, load GSAP - GreenSock", "color: yellowgreen; font-weight: bold;"), console.info("%cYou can implement most common animations by loading the following resources before galaxy.js", "color: yellowgreen;"), console.info("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"), console.info("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollToPlugin.min.js"), console.info(`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/EasePack.min.js

`);
else {
  let e = function(o) {
    if (!o.parent) return !1;
    const c = o.parent;
    return c.blueprint.animations && c.blueprint.animations.enter && gsap.getTweensOf(c.node).length ? !0 : e(o.parent);
  }, n = function(o) {
    const c = gsap.getTweensOf(o);
    for (const f of c)
      f.parent ? (f.parent === gsap.globalTimeline ? f.pause() : f.parent.pause(), f.parent.remove(f)) : f.pause();
  }, s = function(o, c) {
    const f = o.node;
    if (c.withParent) {
      if (e(o))
        return gsap.set(f, Object.assign({}, c.to || {}));
      if (!o.parent.rendered.resolved)
        return;
    }
    gsap.getTweensOf(f).length && gsap.killTweensOf(f), t.contains(f) && p.installGSAPAnimation(o, "enter", c);
  }, i = function(o, c, f) {
    if (c.active === !1)
      return l.call(o, f);
    const h = c.withParent;
    o.leaveWithParent = h === !0;
    const m = o.node;
    if (h && o.parent.transitory)
      return gsap.killTweensOf(m), o.dump();
    if ("style" in m) {
      const b = m.getBoundingClientRect();
      if (b.width === 0 || b.height === 0 || m.style.opacity === "0" || m.style.visibility === "hidden")
        return gsap.killTweensOf(m), f();
    }
    n(m), p.installGSAPAnimation(o, "leave", c, f);
  }, r = function(o, c, f, u, h, m) {
    (h ? j : F)(o.index, (_) => {
      const y = !!c[f];
      h && (!o.node.classList.contains(m) || y) ? p.setupOnComplete(u.to || u.from, () => {
        o.node.classList.add(m);
      }) : !h && (o.node.classList.contains(m) || y) && p.setupOnComplete(u.to || u.from, () => {
        o.node.classList.remove(m);
      }), c[f] = c[f] || [], c[f].push(p.installGSAPAnimation(o, null, u)), _();
    });
  }, a = function(o, c, f) {
    const u = c ? "add:" + f : "remove:" + f;
    return o[u];
  }, l = function(o) {
    n(this.node), this.parent.transitory ? this.dump() : o();
  }, p = function(o) {
    const c = this;
    if (o && typeof o != "string") {
      if (o.__am__)
        return o.__am__;
      const f = o.eventCallback("onComplete") || x;
      c.name = "<user-defined>", c.timeline = o, c.timeline.__am__ = this, c.timeline.eventCallback("onComplete", function() {
        f.call(c.timeline), c.onCompletesActions.forEach((u) => {
          u(c.timeline);
        }), c.nodes = [], c.awaits = [], c.children = [], c.onCompletesActions = [];
      }), c.parsePosition = (u) => u;
    } else {
      const f = p.ANIMATIONS[o];
      if (f)
        return !f.timeline.getChildren().length && !f.timeline.isActive() && (f.timeline.clear(!1), f.timeline.invalidate()), f;
      c.name = o, c.timeline = gsap.timeline({
        autoRemoveChildren: !0,
        smoothChildTiming: !1,
        paused: !0,
        onComplete: function() {
          c.onCompletesActions.forEach((h) => {
            h(c.timeline);
          }), c.nodes = [], c.awaits = [], c.children = [], c.onCompletesActions = [], p.ANIMATIONS[o] = null;
        }
      }), c.timeline.data = { name: o }, c.labelCounter = 0, c.labelsMap = {};
      const u = d[o];
      u && c.setupLabels(u), p.ANIMATIONS[o] = this;
    }
    c.type = null, c.onCompletesActions = [], c.started = !1, c.configs = {}, c.children = [], c.nodes = [], c.awaits = [];
  };
  const t = document.body;
  ie = {
    type: "prop",
    key: "animations",
    /**
     *
     * @param {Galaxy.ViewNode} viewNode
     * @param animations
     */
    update: function(o, c) {
      if (o.virtual || !c)
        return;
      const f = c.enter;
      f && (o.processEnterAnimation = function() {
        s(this, f);
      });
      const u = c.leave;
      u ? (!f && o.blueprint.if && (console.warn("The following node has `if` and a `leave` animation but does NOT have a `enter` animation.\nThis can result in unexpected UI behavior.\nTry to define a `enter` animation that negates the leave animation to prevent unexpected behavior\n\n"), console.warn(o.node)), o.processLeaveAnimation = function(m) {
        i(this, u, m);
      }, o.populateHideSequence = o.processLeaveAnimation.bind(o, () => {
        o.node.style.display = "none";
      })) : o.processLeaveAnimation = l.bind(o);
      const h = o.cache;
      h.class && h.class.observer && o.rendered.then(function() {
        const m = h.class.observer.context;
        for (const _ in m) {
          const y = !!m[_], A = a(c, y, _);
          if (A) {
            if (A.to.keyframes instanceof Array)
              for (let g = 0, E = A.to.keyframes.length; g < E; g++)
                gsap.set(o.node, Object.assign({ callbackScope: o }, A.to.keyframes[g] || {}));
            else
              gsap.set(o.node, Object.assign({ callbackScope: o }, A.to || {}));
            y ? o.node.classList.add(_) : o.node.classList.remove(_);
          }
        }
        let b = JSON.stringify(m);
        h.class.observer.onAll((_) => {
          const y = JSON.stringify(m);
          if (b === y)
            return;
          b = y;
          const A = !!m[_], g = a(c, A, _);
          if (g) {
            const E = "tween:" + _;
            h[E] && (h[E].forEach((S) => S.kill()), Reflect.deleteProperty(h, E)), r(o, h, E, g, A, _);
          }
        });
      });
    }
  }, p.ANIMATIONS = {}, p.TIMELINES = {}, p.createSimpleAnimation = function(o, c, f) {
    f = f || x;
    const u = o.node;
    let h = c.from, m = c.to;
    if (m && (m = Object.assign({}, m), m.onComplete = f, c.onComplete)) {
      const _ = c.onComplete;
      m.onComplete = function() {
        _(), f();
      };
    }
    let b;
    if (h && m)
      b = gsap.fromTo(u, h, m);
    else if (h) {
      if (h = Object.assign({}, h), h.onComplete = f, c.onComplete) {
        const _ = c.onComplete;
        h.onComplete = function() {
          _(), f();
        };
      }
      b = gsap.from(u, h);
    } else if (m)
      b = gsap.to(u, m);
    else if (c.onComplete) {
      const _ = c.onComplete, y = function() {
        _(), f();
      };
      b = gsap.to(u, {
        duration: c.duration || 0,
        onComplete: y
      });
    } else
      b = gsap.to(u, {
        duration: c.duration || 0,
        onComplete: f
      });
    return b;
  }, p.addCallbackScope = function(o, c) {
    const f = Object.assign({}, o);
    return f.callbackScope = c, f;
  }, p.setupOnComplete = function(o, c) {
    if (o.onComplete) {
      const f = o.onComplete;
      o.onComplete = function() {
        f.call(this), c();
      };
    } else
      o.onComplete = () => {
        c();
      };
  }, p.installGSAPAnimation = function(o, c, f, u) {
    const h = f.from;
    let m = f.to;
    c !== "leave" && m && o.node.nodeType !== Node.COMMENT_NODE && (m.clearProps = m.hasOwnProperty("clearProps") ? m.clearProps : "all");
    const b = Object.assign({}, f);
    b.from = h, b.to = m;
    let _ = b.timeline;
    if (_) {
      const y = new p(_);
      if (c = c || y.type, b.await && y.awaits.indexOf(b.await) === -1) {
        let g = y.timeline;
        for (; g.parent !== gsap.globalTimeline; ) {
          if (!g.parent) return;
          g = g.parent;
        }
        y.awaits.push(b.await);
        const E = g.addPause(b.position, () => {
          if (o.transitory || o.destroyed.resolved)
            return g.resume();
          b.await.then(S);
        }).recent(), S = ((Z) => {
          const ue = y.awaits.indexOf(b.await);
          ue !== -1 && (y.awaits.splice(ue, 1), Z._initted ? g.resume() : g.getChildren(!1).indexOf(Z) !== -1 && g.remove(Z));
        }).bind(null, E);
        o.finalize.push(() => {
          y.awaits.indexOf(b.await) !== -1 && o.node.style && (o.node.style.display = "none"), S();
        });
      }
      y.type && y.type !== c && b.position && b.position.indexOf("=") !== -1 && (b.position = b.startPosition);
      const A = y.timeline.getChildren(!1);
      return A.length && A[A.length - 1].data === "timeline:start" && (b.position = "+=0"), y.type = c, y.add(o, b, u);
    } else
      return p.createSimpleAnimation(o, b, u);
  };
  const d = {};
  ye = function(o, c) {
    d[o] = c;
    const f = p.ANIMATIONS[o];
    f && f.setupLabels(c);
  }, p.prototype = {
    setupLabels: function(o) {
      for (const c in o) {
        const f = "label_" + this.labelCounter++, u = o[c];
        this.labelsMap[c] = f, this.timeline.addLabel(f, typeof u == "number" ? "+=" + u : u);
      }
    },
    parsePosition: function(o) {
      let c = this.labelsMap[o] || o, f = null;
      return (c || typeof c == "number") && (c.indexOf("+=") !== -1 ? f = c.split("+=")[0] : c.indexOf("-=") !== -1 && (f = c.split("-=")[0])), f && f !== "<" && f !== ">" && (c = c.replace(f, this.labelsMap[f])), c;
    },
    addOnComplete: function(o) {
      this.onCompletesActions.push(o);
    },
    /**
     *
     * @param viewNode
     * @param config {AnimationConfig}
     * @param finalize
     */
    add: function(o, c, f) {
      const u = this;
      let h;
      if (c.from && c.to) {
        const y = p.addCallbackScope(c.to, o);
        h = gsap.fromTo(o.node, c.from, y);
      } else if (c.from) {
        const y = p.addCallbackScope(c.from, o);
        h = gsap.from(o.node, y);
      } else {
        const y = p.addCallbackScope(c.to, o);
        h = gsap.to(o.node, y);
      }
      if (f)
        if (h.vars.onComplete) {
          const y = h.vars.onComplete;
          h.vars.onComplete = function() {
            y.apply(this, arguments), f();
          };
        } else
          h.vars.onComplete = f;
      const m = this.parsePosition(c.position), b = u.timeline.getChildren(!1), _ = b[0];
      return b.length === 0 ? u.timeline.add(h, m && m.indexOf("-=") === -1 ? m : null) : (b.length === 1 && !_.hasOwnProperty("timeline") && _.getChildren(!1).length === 0 && u.timeline.clear(!1), u.timeline.add(h, m)), u.name === "<user-defined>" || (u.started ? u.timeline.paused() && u.timeline.resume() : (u.started = !0, u.timeline.resume())), h;
    }
  };
}
const Je = {
  type: "prop",
  key: "checked",
  /**
   *
   * @param {Galaxy.ViewNode} viewNode
   * @param {Galaxy.View.ReactiveData} scopeReactiveData
   * @param prop
   * @param {Function} expression
   */
  beforeActivate: function(e, t, n, s) {
    if (!t)
      return;
    if (s && e.blueprint.tag === "input")
      throw new Error("input.checked property does not support binding expressions because it must be able to change its data.\nIt uses its bound value as its `model` and expressions can not be used as model.\n");
    const r = V(e.blueprint.checked).propertyKeys[0].split(".").pop(), a = e.node;
    a.addEventListener("change", function() {
      const l = t.data[r];
      if (l instanceof Array && a.type !== "radio") {
        const d = a.hasAttribute("value") ? a.value : !0;
        l instanceof Array ? l.indexOf(d) === -1 ? l.push(d) : l.splice(l.indexOf(d), 1) : t.data[r] = [d];
      } else a.hasAttribute("value") ? t.data[r] = a.checked ? a.value : null : t.data[r] = a.checked;
    });
  },
  update: function(e, t) {
    const n = e.node;
    e.rendered.then(function() {
      if (t instanceof Array) {
        if (n.type === "radio")
          return console.error("Inputs with type `radio` can not provide array as a value."), console.warn("Read about radio input at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio");
        const s = n.hasAttribute("value") ? n.value : !0;
        n.checked = t.indexOf(s) !== -1;
      } else n.hasAttribute("value") ? n.checked = t === n.value : n.checked = t;
    });
  }
}, Xe = {
  type: "reactive",
  key: "class",
  getConfig: function(e, t) {
    return {
      scope: e,
      subjects: t,
      reactiveClasses: null,
      observer: null
    };
  },
  install: function(e) {
    if (this.virtual || e.subjects === null || e.subjects instanceof Array || typeof e.subjects != "object")
      return !0;
    const t = this, n = e.reactiveClasses = B(t, e.subjects, e.scope, !0), s = e.observer = new D(n), i = t.blueprint.animations || {}, r = !!window.gsap.config;
    return t.blueprint.renderConfig.applyClassListAfterRender ? t.rendered.then(() => {
      s.onAll((a) => {
        r && (i["add:" + a] || i["remove:" + a]) || G(t, n);
      });
    }) : s.onAll((a) => {
      r && (i["add:" + a] || i["remove:" + a]) || G(t, n);
    }), !0;
  },
  /**
   *
   * @param config
   * @param value
   * @param expression
   * @this Galaxy.ViewNode
   */
  update: function(e, t, n) {
    if (this.virtual)
      return;
    const s = this, i = s.node;
    if (n && (t = n()), typeof t == "string" || t === null || t === void 0)
      return i.className = t;
    if (t instanceof Array)
      return i.className = t.join(" ");
    e.subjects === t && (t = e.reactiveClasses), s.blueprint.renderConfig.applyClassListAfterRender ? s.rendered.then(() => {
      G(s, t);
    }) : G(s, t);
  }
};
function ze(e) {
  if (typeof e == "string")
    return [e];
  if (e instanceof Array)
    return e;
  if (e !== null && typeof e == "object") {
    let t = [];
    for (let n in e)
      e.hasOwnProperty(n) && e[n] && t.push(n);
    return t;
  }
}
function G(e, t) {
  const n = e.node.className || [], s = ze(t);
  JSON.stringify(n) !== JSON.stringify(s) && (e.node.className = s.join(" "));
}
const $e = {
  type: "attr",
  key: "disabled",
  update: function(e, t, n) {
    e.rendered.then(() => {
      if (e.blueprint.tag.toLowerCase() === "form") {
        const s = e.node.querySelectorAll("input, textarea, select, button");
        t ? Array.prototype.forEach.call(s, (i) => i.setAttribute("disabled", "")) : Array.prototype.forEach.call(s, (i) => i.removeAttribute("disabled"));
      }
    }), Le(e, t ? "" : null, n);
  }
}, We = {
  type: "reactive",
  key: "if",
  getConfig: function() {
    return {
      throttleId: 0
    };
  },
  install: function(e) {
    return !0;
  },
  /**
   *
   * @this Galaxy.ViewNode
   * @param config
   * @param value
   * @param expression
   */
  update: function(e, t, n) {
    e.throttleId !== 0 && (window.clearTimeout(e.throttleId), e.throttleId = 0), n && (t = n()), t = !!t, !this.rendered.resolved && !this.inDOM && (this.blueprint.renderConfig.renderDetached = !t), e.throttleId = setTimeout(() => {
      this.inDOM !== t && this.setInDOM(t);
    });
  }
};
function xe(e) {
  let t = document.createElement("a");
  t.href = e;
  let s = /\/([^\t\n]+\/)/g.exec(t.pathname);
  this.parsedURL = t.href, this.path = s ? s[1] : "/", this.base = window.location.pathname, this.protocol = t.protocol;
}
const Qe = {
  type: "reactive",
  key: "module",
  getConfig: function(e) {
    return {
      previousModule: null,
      moduleMeta: null,
      scope: e
    };
  },
  install: function() {
    return !0;
  },
  /**
   *
   * @param cache
   * @param {Galaxy.ModuleMetaData} newModuleMeta
   * @param expression
   */
  update: function(t, n, s) {
    const i = this;
    if (s && (n = s()), n !== void 0) {
      if (typeof n != "object")
        return console.error("module property only accept objects as value", n);
      n && t.moduleMeta && n.path === t.moduleMeta.path || ((!n || n !== t.moduleMeta) && (Ze(i), t.loadedModule && (t.loadedModule.destroy(), t.loadedModule = null)), !i.virtual && n && n.path && n !== t.moduleMeta && j(i.index, (r) => {
        et.call(null, i, t, n, r);
      }), t.moduleMeta = n);
    }
  }
};
function Ze(e) {
  const t = e.getChildNodes();
  for (let n = 0, s = t.length; n < s; n++) {
    const i = t[n];
    i.processLeaveAnimation === x && (i.processLeaveAnimation = function(r) {
      r();
    });
  }
  e.clean(e.hasAnimation(t));
}
function et(e, t, n, s) {
  const i = new xe(n.path);
  let r = t.scope, a = t.scope;
  for (typeof n.onInvoke == "function" && n.onInvoke.call(); r; ) {
    if (a instanceof k || (a = new k(t.scope.__parent__.context, {
      systemId: "repeat-item",
      path: t.scope.__parent__.uri.parsedURL,
      parentScope: t.scope.__parent__
    })), i.parsedURL === a.uri.parsedURL)
      return console.error(`Circular module loading detected and stopped.
` + a.uri.parsedURL + " tries to load itself.");
    r = r.parentScope;
  }
  a.load(n, {
    element: e
  }).then(function(l) {
    t.loadedModule = l, e.node.setAttribute("module", l.path), l.start(), typeof n.onLoad == "function" && n.onLoad.call(), s();
  }).catch(function(l) {
    console.error(l), s();
  });
}
const tt = {
  type: "prop",
  key: "on",
  /**
   *
   * @param {Galaxy.ViewNode} viewNode
   * @param events
   */
  update: function(e, t) {
    if (t !== null && typeof t == "object") {
      for (let n in t)
        if (t.hasOwnProperty(n)) {
          const s = function(i) {
            return t[n].call(e, i, e.data);
          };
          e.node.addEventListener(n, s, !1), e.finalize.push(() => {
            e.node.removeEventListener(n, s, !1);
          });
        }
    }
  }
}, I = class I {
  constructor() {
    this.id = I.lastId++, I.lastId > 1e8 && (I.lastId = 0), this.init = null, this.original = null, this.returnValue = null, this.params = [], this.type = "reset";
  }
  /**
   * Get a new instance of ArrayChange with the same properties.
   * @returns {ArrayChange} A new instance of ArrayChange.
   */
  getInstance() {
    const t = new I();
    return t.init = this.init, t.original = this.original, t.params = [...this.params], t.type = this.type, t;
  }
};
de(I, "lastId", 0);
let C = I;
const we = {
  type: "reactive",
  key: "repeat",
  getConfig: function(e, t) {
    return this.virtualize(), {
      changeId: null,
      previousActionId: null,
      nodes: [],
      data: t.data,
      as: t.as,
      indexAs: t.indexAs || "_index",
      oldChanges: {},
      positions: [],
      trackMap: [],
      scope: e,
      trackBy: t.trackBy,
      onComplete: t.onComplete
    };
  },
  /**
   *
   * @param config Value return by getConfig
   */
  install: function(e) {
    const t = this;
    if (e.data) {
      if (e.as === "data")
        throw new Error("`data` is an invalid value for repeat.as property. Please choose a different value.`");
      t.localPropertyNames.add(e.as), t.localPropertyNames.add(e.indexAs);
      const n = V(e.data);
      if (n.propertyKeys.length)
        W(t, "repeat", void 0, e.scope, n, t), n.propertyKeys.forEach((s) => {
          try {
            const i = Ne(e.scope, s);
            t.finalize.push(() => {
              i.removeNode(t);
            });
          } catch (i) {
            console.error("Could not find: " + s + `
`, i);
          }
        });
      else if (e.data instanceof Array) {
        const s = t.setters.repeat = fe(we, t, e.data, null), i = new C();
        i.params = e.data, e.data.changes = i, s(e.data);
      }
    }
    return !1;
  },
  /**
   *
   * @this Galaxy.ViewNode
   * @param config The value returned by getConfig
   * @param value
   * @param {Function} expression
   */
  update: function(e, t, n) {
    let s = null;
    if (n) {
      if (t = n(), t === void 0)
        return;
      if (t === null)
        throw Error("Invalid return type: " + t + "\nThe expression function for `repeat.data` must return an instance of Array or Galaxy.View.ArrayChange or undefined");
      if (t instanceof C)
        s = t;
      else if (t instanceof Array) {
        const r = new C();
        r.original = t, r.type = "reset", r.params = t, s = t.changes = r;
      } else if (t instanceof Object) {
        const r = Object.entries(t).map(([l, d]) => ({ key: l, value: d })), a = new C();
        a.original = r, a.type = "reset", a.params = r, s = t.changes = a;
      } else
        s = {
          type: "reset",
          params: []
        };
    } else if (t instanceof C)
      s = t;
    else if (t instanceof Array)
      s = t.changes;
    else if (t instanceof Object) {
      const r = Object.entries(t).map(([a, l]) => ({ key: a, value: l }));
      s = new C(), s.original = r, s.type = "reset", s.params = r;
    }
    if (s && !(s instanceof C))
      return console.warn(`%crepeat %cdata is not a type of ArrayChange
data: ` + e.data + `
%ctry '` + e.data + `.changes'
`, "color:black;font-weight:bold", null, "color:green;font-weight:bold");
    (!s || typeof s == "string") && (s = {
      id: 0,
      type: "reset",
      params: []
    });
    const i = this;
    s.id !== e.changeId && (e.changeId = s.id, e.oldChanges = s, st(i, e, nt(i, e, s)));
  }
};
function nt(e, t, n) {
  const s = e.blueprint.animations && e.blueprint.animations.leave, i = t.trackBy;
  if (i && n.type === "reset") {
    let r;
    i === !0 ? r = n.params.map((d) => d) : typeof i == "string" && (r = n.params.map((d) => d[i]));
    const a = [];
    t.trackMap = t.trackMap.filter(function(d, p) {
      return r.indexOf(d) === -1 && t.nodes[p] ? (a.push(t.nodes[p]), !1) : !0;
    });
    const l = new C();
    return l.init = n.init, l.type = n.type, l.original = n.original, l.params = n.params, l.__rd__ = n.__rd__, l.type === "reset" && l.params.length && (l.type = "push"), t.nodes = t.nodes.filter(function(d) {
      return a.indexOf(d) === -1;
    }), $(a, s), l;
  } else if (n.type === "reset") {
    const r = t.nodes.slice(0);
    t.nodes = [], $(r, s);
    const a = Object.assign({}, n);
    return a.type = "push", a;
  }
  return n;
}
function st(e, t, n) {
  const s = e.parent, i = [], r = [], a = t.scope, l = t.trackMap, d = t.as, p = t.indexAs, o = t.nodes, c = t.trackBy, f = e.cloneBlueprint();
  f.repeat = null;
  let u = o.length ? o[o.length - 1].anchor.nextSibling : e.placeholder.nextSibling, h = [], m;
  if (c === !0 ? m = function(_, y, A) {
    l.push(A), this.push(_);
  } : typeof c == "string" ? m = function(_, y, A) {
    l.push(A[t.trackBy]), this.push(_);
  } : m = function(_) {
    this.push(_);
  }, n.type === "push")
    h = n.params;
  else if (n.type === "unshift")
    u = o[0] ? o[0].anchor : u, h = n.params, c === !0 ? m = function(_, y, A) {
      l.unshift(A), this.unshift(_);
    } : m = function(_, y, A) {
      l.unshift(A[c]), this.unshift(_);
    };
  else if (n.type === "splice") {
    const _ = n.params.slice(0, 2), y = Array.prototype.splice.apply(o, _);
    $(y.reverse(), e.blueprint.animations && e.blueprint.animations.leave), Array.prototype.splice.apply(l, _);
    const A = n.params[0];
    h = n.params.slice(2);
    for (let g = 0, E = h.length; g < E; g++) {
      const S = g + A;
      i.push(S), r.push(o[S] ? o[S].anchor : u);
    }
    c === !0 ? m = function(g, E, S) {
      l.splice(E, 0, S), this.splice(E, 0, g);
    } : m = function(g, E, S) {
      l.splice(E, 0, S[c]), this.splice(E, 0, g);
    };
  } else if (n.type === "pop") {
    const _ = o.pop();
    _ && _.destroy(), l.pop();
  } else if (n.type === "shift") {
    const _ = o.shift();
    _ && _.destroy(), l.shift();
  } else (n.type === "sort" || n.type === "reverse") && (o.forEach(function(_) {
    _.destroy();
  }), t.nodes = [], h = n.original, Array.prototype[n.type].call(l));
  const b = e.view;
  if (h instanceof Array) {
    const _ = h.slice(0);
    if (c)
      if (c === !0)
        for (let y = 0, A = h.length; y < A; y++) {
          const g = _[y], E = l.indexOf(g);
          if (E !== -1) {
            t.nodes[E].data._index = E;
            continue;
          }
          ee(b, f, a, d, g, p, y, s, r[y] || u, m, o, i);
        }
      else
        for (let y = 0, A = h.length; y < A; y++) {
          const g = _[y], E = l.indexOf(g[c]);
          if (E !== -1) {
            t.nodes[E].data._index = E;
            continue;
          }
          ee(b, f, a, d, g, p, y, s, r[y] || u, m, o, i);
        }
    else
      for (let y = 0, A = h.length; y < A; y++)
        ee(b, f, a, d, _[y], p, y, s, r[y] || u, m, o, i);
    t.onComplete && j(e.index, (y) => {
      t.onComplete(o), y();
    });
  }
}
function it(e, t, n) {
  const s = Me(e);
  return s[t] = n, s;
}
function ee(e, t, n, s, i, r, a, l, d, p, o, c) {
  const f = it(n, s, i), u = pe(t);
  f[r] = a;
  const h = e.createNode(u, f, l, d);
  p.call(o, h, c[a], f[s]);
}
const rt = {
  type: "prop",
  key: "selected",
  /**
   *
   * @param {Galaxy.ViewNode} viewNode
   * @param {Galaxy.View.ReactiveData} scopeReactiveData
   * @param prop
   * @param {Function} expression
   */
  beforeActivate: function(e, t, n, s) {
    if (t) {
      if (s && e.blueprint.tag === "select")
        throw new Error("select.selected property does not support binding expressions because it must be able to change its data.\nIt uses its bound value as its `model` and expressions can not be used as model.\n");
      e.blueprint.tag === "select" && (V(e.blueprint.selected).propertyKeys[0].split(".").pop(), e.node.addEventListener("change", (a) => {
        console.log(e.node, "SELECTED", a);
      }));
    }
  },
  update: function(e, t) {
    const n = e.node;
    e.rendered.then(function() {
      n.value !== t && (e.blueprint.tag === "select" ? n.value = t : t ? n.setAttribute("selected", !0) : n.removeAttribute("selected"));
    });
  }
}, ot = {
  type: "prop",
  key: "style"
}, at = {
  type: "prop",
  key: "style"
}, lt = {
  type: "reactive",
  key: "style",
  getConfig: function(e, t) {
    return {
      scope: e,
      subjects: t,
      reactiveStyle: null
    };
  },
  install: function(e) {
    if (this.virtual || e.subjects === null || e.subjects instanceof Array || typeof e.subjects != "object")
      return !0;
    const t = this.node, n = e.reactiveStyle = B(this, e.subjects, e.scope, !0);
    return new D(n).onAll(() => {
      te(t, n);
    }), !0;
  },
  /**
   *
   * @param config
   * @param value
   * @param expression
   * @this {Galaxy.ViewNode}
   */
  update: function(e, t, n) {
    if (this.virtual)
      return;
    const i = this.node;
    if (n && (t = n()), typeof t == "string")
      return i.style = t;
    if (t instanceof Array)
      return i.style = t.join(";");
    if (t instanceof Promise)
      t.then(function(r) {
        te(i, r);
      });
    else if (t === null)
      return i.removeAttribute("style");
    e.subjects === t && (t = e.reactiveStyle), te(i, t);
  }
};
function te(e, t) {
  if (t instanceof Object)
    for (let n in t) {
      const s = t[n];
      s instanceof Promise ? s.then((i) => {
        e.style[n] = i;
      }) : typeof s == "function" ? e.style[n] = s.call(e.__vn__, e.__vn__.data) : e.style[n] = s;
    }
  else
    e.style = t;
}
const ct = [
  "radio",
  "checkbox",
  "button",
  "reset",
  "submit"
], ft = {
  type: "none"
}, pt = {
  type: "prop",
  key: "value",
  /**
   *
   * @param {Galaxy.ViewNode} viewNode
   * @param {Galaxy.View.ReactiveData} scopeReactiveData
   * @param prop
   * @param {Function} expression
   */
  beforeActivate: function(t, n, s, i) {
    const r = t.node;
    if (!n || ct.indexOf(r.type) !== -1)
      return;
    if (i)
      throw new Error("input.value property does not support binding expressions because it must be able to change its data.\nIt uses its bound value as its `model` and expressions can not be used as model.\n");
    const l = V(t.blueprint.value).propertyKeys[0].split(".").pop();
    if (r.tagName === "SELECT") {
      const d = new MutationObserver(() => {
        t.rendered.then(() => {
          r.value = n.data[l];
        });
      });
      d.observe(r, { childList: !0 }), t.finalize.push(() => {
        d.disconnect();
      }), r.addEventListener("change", me(n, l));
    } else r.type === "number" || r.type === "range" ? r.addEventListener("input", ut(r, n, l)) : r.addEventListener("input", me(n, l));
  },
  update: function(e, t) {
    (t !== e.node.value || !e.node.value) && (e.node.value = t ?? "");
  }
};
function ut(e, t, n) {
  return function() {
    t.data[n] = e.value ? Number(e.value) : null;
  };
}
function me(e, t) {
  return function(n) {
    e.data[t] = n.target.value;
  };
}
const dt = {
  type: "reactive",
  key: "visible",
  getConfig: function() {
    return {
      throttleId: 0
    };
  },
  install: function() {
    return !0;
  },
  update: function(e, t, n) {
    e.throttleId !== 0 && (window.clearTimeout(e.throttleId), e.throttleId = 0), n && (t = n()), e.throttleId = window.setTimeout(() => {
      this.visible !== t && this.setVisibility(t);
    });
  }
};
O.data = Ge;
O.text_3 = Ke;
O.text_8 = qe;
O.text = Ye;
O.animations = ie;
O.checked = Je;
O.class = Xe;
O.disabled = $e;
O.if = We;
O.module = Qe;
O.on = tt;
O.repeat = we;
O.selected = rt;
O.style = lt;
O.style_3 = ot;
O.style_8 = at;
O["value.config"] = ft;
O.value = pt;
O.visible = dt;
O._create = {
  type: "prop",
  key: "_create",
  getSetter: () => x
};
O._render = {
  type: "prop",
  key: "_render",
  getSetter: () => x
};
O._destroy = {
  type: "prop",
  key: "_destroy",
  getSetter: () => x
};
O.renderConfig = {
  type: "prop",
  key: "renderConfig"
};
const ne = {
  value: void 0,
  configurable: !1,
  enumerable: !1
}, _e = {
  value: null,
  configurable: !1,
  enumerable: !1,
  writable: !0
};
function ve(e, t, n) {
  e.insertBefore(t, n);
}
function J(e, t) {
  e.removeChild(t);
}
function L(e) {
  const t = this;
  e ? (t.node.parentNode && J(t.node.parentNode, t.node), t.placeholder.parentNode && J(t.placeholder.parentNode, t.placeholder), t.garbage.forEach(function(n) {
    L.call(n, !0);
  }), t.hasBeenDestroyed()) : (t.placeholder.parentNode || ve(t.node.parentNode, t.placeholder, t.node), t.node.parentNode && J(t.node.parentNode, t.node), t.garbage.forEach(function(n) {
    L.call(n, !0);
  })), t.garbage = [];
}
v.GLOBAL_RENDER_CONFIG = {
  applyClassListAfterRender: !1,
  renderDetached: !1
};
v.cleanReferenceNode = function(e) {
  e instanceof Array ? e.forEach(function(t) {
    v.cleanReferenceNode(t);
  }) : e instanceof Object && (e.node = null, v.cleanReferenceNode(e.children));
};
v.createIndex = function(e) {
  if (e < 0) return "0";
  if (e < 10) return e + "";
  let t = "9", n = e - 10;
  for (; n >= 10; )
    t += "9", n -= 10;
  return t + n;
};
function v(e, t, n, s) {
  const i = this;
  i.view = n, e.tag instanceof Node ? (i.node = e.tag, e.tag = e.tag.tagName) : i.node = $t(e.tag || "div", t), "style" in i.node || (i.processEnterAnimation = x), i.blueprint = e, i.data = s instanceof k ? {} : s, i.localPropertyNames = /* @__PURE__ */ new Set(), i.inputs = {}, i.virtual = !1, i.visible = !0, i.placeholder = zt(e.tag || "div"), i.properties = /* @__PURE__ */ new Set(), i.inDOM = !1, i.setters = {}, i.parent = t, i.finalize = [], i.origin = !1, i.destroyOrigin = 0, i.transitory = !1, i.garbage = [], i.leaveWithParent = !1, i.onLeaveComplete = L.bind(i, !0), R(i, "cache", {
    enumerable: !1,
    configurable: !1,
    value: {}
  }), i.rendered = new Promise(function(a) {
    "style" in i.node ? i.hasBeenRendered = function() {
      i.rendered.resolved = !0, i.node.style.removeProperty("display"), i.blueprint._render && i.blueprint._render.call(i, i.data), a(i);
    } : i.hasBeenRendered = function() {
      i.rendered.resolved = !0, a();
    };
  }), i.rendered.resolved = !1, i.destroyed = new Promise(function(a) {
    i.hasBeenDestroyed = function() {
      i.destroyed.resolved = !0, i.blueprint._destroy && i.blueprint._destroy.call(i, i.data), a();
    };
  }), i.destroyed.resolved = !1, i.blueprint.renderConfig = Object.assign({}, v.GLOBAL_RENDER_CONFIG, e.renderConfig || {}), _e.value = this.node, R(i.blueprint, "node", _e), ne.value = this, i.node.__vn__ || (R(i.node, "__vn__", ne), R(i.placeholder, "__vn__", ne)), i.blueprint._create && i.blueprint._create.call(i, i.data);
}
v.prototype = {
  onLeaveComplete: null,
  dump: function() {
    let e = this.parent, t = this.garbage;
    for (; e.transitory && (e.blueprint.hasOwnProperty("if") && !this.blueprint.hasOwnProperty("if") && (t = e.garbage), e.parent && e.parent.transitory); )
      e = e.parent;
    t.push(this), this.garbage = [];
  },
  query: function(e) {
    return this.node.querySelector(e);
  },
  dispatchEvent: function(e) {
    this.node.dispatchEvent(e);
  },
  cloneBlueprint: function() {
    const e = Object.assign({}, this.blueprint);
    return v.cleanReferenceNode(e), R(e, "mother", {
      value: this.blueprint,
      writable: !1,
      enumerable: !1,
      configurable: !1
    }), e;
  },
  virtualize: function() {
    this.placeholder.nodeValue = JSON.stringify(this.blueprint, (e, t) => e === "children" ? "<children>" : e === "animations" ? "<animations>" : t, 2), this.virtual = !0, this.setInDOM(!1);
  },
  processEnterAnimation: function() {
    this.node.style.display = null;
  },
  processLeaveAnimation: x,
  populateHideSequence: function() {
    this.node.style.display = "none";
  },
  /**
   *
   * @param {boolean} flag
   */
  setInDOM: function(e) {
    const t = this;
    if (t.blueprint.renderConfig.renderDetached) {
      j(t.index, (n) => {
        t.blueprint.renderConfig.renderDetached = !1, t.hasBeenRendered(), n();
      });
      return;
    }
    if (t.inDOM = e, !t.virtual) {
      if (e) {
        "style" in t.node && t.node.style.setProperty("display", "none"), t.node.parentNode || ve(t.placeholder.parentNode, t.node, t.placeholder.nextSibling), t.placeholder.parentNode && J(t.placeholder.parentNode, t.placeholder), j(t.index, (i) => {
          t.hasBeenRendered(), t.processEnterAnimation(), i();
        });
        const n = t.getChildNodesAsc(), s = n.length;
        for (let i = 0; i < s; i++)
          n[i].setInDOM(!0);
      } else if (!e && t.node.parentNode) {
        t.origin = !0, t.transitory = !0;
        const n = t.processLeaveAnimation, s = t.getChildNodes();
        t.prepareLeaveAnimation(t.hasAnimation(s), s), F(t.index, (i) => {
          t.processLeaveAnimation(L.bind(t, !1)), t.origin = !1, t.transitory = !1, t.processLeaveAnimation = n, i();
        });
      }
    }
  },
  setVisibility: function(e) {
    const t = this;
    t.visible = e, e && !t.virtual ? j(t.index, (n) => {
      t.node.style.display = null, t.processEnterAnimation(), n();
    }) : !e && t.node.parentNode && (t.origin = !0, t.transitory = !0, F(t.index, (n) => {
      t.populateHideSequence(), t.origin = !1, t.transitory = !1, n();
    }));
  },
  /**
   *
   * @param {Galaxy.ViewNode} childNode
   * @param position
   */
  registerChild: function(e, t) {
    this.node.insertBefore(e.placeholder, t);
  },
  createNode: function(e, t) {
    this.view.createNode(e, t, this);
  },
  /**
   * @param {string} propertyKey
   * @param {Galaxy.View.ReactiveData} reactiveData
   * @param {Function} expression
   */
  registerActiveProperty: function(e, t, n) {
    this.properties.add(t), Kt(this, e, t, n);
  },
  snapshot: function(e) {
    const t = this.node.getBoundingClientRect(), n = this.node.cloneNode(!0), s = {
      margin: "0",
      width: t.width + "px",
      height: t.height + " px",
      top: t.top + "px",
      left: t.left + "px",
      position: "fixed"
    };
    return Object.assign(n.style, s), {
      tag: n,
      style: s
    };
  },
  hasAnimation: function(e) {
    if (this.processLeaveAnimation && this.processLeaveAnimation !== x)
      return !0;
    for (let t = 0, n = e.length; t < n; t++) {
      const s = e[t];
      if (s.hasAnimation(s.getChildNodes()))
        return !0;
    }
    return !1;
  },
  prepareLeaveAnimation: function(e, t) {
    const n = this;
    if (e) {
      if (n.processLeaveAnimation === x)
        n.origin ? n.processLeaveAnimation = function() {
          L.call(n, !1);
        } : n.destroyOrigin === 1 && L.call(n, !0);
      else if (n.processLeaveAnimation !== x && !n.origin)
        for (let s = 0, i = t.length; s < i; s++)
          t[s].onLeaveComplete = x;
    } else
      n.processLeaveAnimation = function() {
        L.call(n, !n.origin);
      };
  },
  destroy: function(e) {
    const t = this;
    if (t.transitory = !0, t.parent.destroyOrigin === 0 ? t.destroyOrigin = 1 : t.destroyOrigin = 2, t.inDOM) {
      const s = t.getChildNodes();
      e = e || t.hasAnimation(s), t.prepareLeaveAnimation(e, s), t.clean(e, s);
    }
    t.properties.forEach((s) => s.removeNode(t));
    let n = t.finalize.length;
    for (let s = 0; s < n; s++)
      t.finalize[s].call(t);
    F(t.index, (s) => {
      t.processLeaveAnimation(t.destroyOrigin === 2 ? x : t.onLeaveComplete), t.localPropertyNames.clear(), t.properties.clear(), t.finalize = [], t.inDOM = !1, t.inputs = {}, t.view = null, t.parent = null, Reflect.deleteProperty(t.blueprint, "node"), s();
    });
  },
  getChildNodes: function() {
    const e = [], t = Oe.call(this.node.childNodes, 0);
    for (let n = t.length - 1; n >= 0; n--) {
      const s = t[n];
      "__vn__" in s && e.push(s.__vn__);
    }
    return e;
  },
  getChildNodesAsc: function() {
    const e = [], t = Oe.call(this.node.childNodes, 0);
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      "__vn__" in s && e.push(s.__vn__);
    }
    return e;
  },
  /**
   *
   */
  clean: function(e, t) {
    t = t || this.getChildNodes(), $(t, e), F(this.index, (n) => {
      let s = this.finalize.length;
      for (let i = 0; i < s; i++)
        this.finalize[i].call(this);
      this.finalize = [], n();
    });
  },
  createNext: function(e) {
    j(this.index, e);
  },
  get index() {
    const e = this.parent;
    if (e) {
      let t = this.placeholder.parentNode ? this.placeholder.previousSibling : this.node.previousSibling;
      if (t) {
        if (!t.hasOwnProperty("__index__")) {
          let n = 0, s = this.node;
          for (; (s = s.previousSibling) !== null; ) ++n;
          t.__index__ = n;
        }
        this.node.__index__ = t.__index__ + 1;
      } else
        this.node.__index__ = 0;
      return e.index + "," + v.createIndex(this.node.__index__);
    }
    return "0";
  },
  get anchor() {
    return this.inDOM ? this.node : this.placeholder;
  }
};
function ht(e, t, n) {
  const s = t.key, i = t.update || Bt, r = yt(i, e, s);
  return n ? function() {
    const l = n();
    r(l);
  } : r;
}
function yt(e, t, n) {
  return function(i) {
    if (i instanceof Promise) {
      const r = function(a) {
        e(t, a, n);
      };
      i.then(r).catch(r);
    } else if (i instanceof Function) {
      const r = i.call(t, t.data);
      e(t, r, n);
    } else
      e(t, i, n);
  };
}
function mt(e, t, n) {
  const s = t.key, i = t.update || Le, r = _t(i, e, s);
  return n ? function() {
    const l = n();
    r(l);
  } : r;
}
function _t(e, t, n) {
  return function(i) {
    if (i instanceof Promise) {
      const r = function(a) {
        e(t, a, n);
      };
      i.then(r).catch(r);
    } else if (i instanceof Function) {
      const r = i.call(t, t.data);
      e(t, r, n);
    } else
      e(t, i, n);
  };
}
function bt(e, t, n, s) {
  const i = t.key, r = t.update, a = e.cache[i];
  return gt(r, e, a, n, s);
}
function gt(e, t, n, s, i) {
  const r = e.bind(t);
  return function(l) {
    return r(n, l, s, i);
  };
}
const Ot = Array.prototype, At = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
], Et = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
  "changes",
  "__rd__"
], xt = Object.keys, T = Object.defineProperty, wt = function(e) {
  return {
    id: e || "Scope",
    shadow: {},
    data: {},
    notify: function() {
    },
    notifyDown: function() {
    },
    sync: function() {
    },
    makeReactiveObject: function() {
    },
    addKeyToShadow: function() {
    }
  };
}, vt = function(e) {
  if (e instanceof Array) {
    const t = ["length"];
    return e.hasOwnProperty("changes") && t.push("changes"), t;
  } else
    return Object.keys(e);
};
function Ct(e, t, n) {
  const s = Ot[t];
  return function() {
    const r = this.__rd__;
    let a = arguments.length;
    const l = new Array(a);
    for (; a--; )
      l[a] = arguments[a];
    const d = s.apply(this, l), p = new C(), o = p.original = e;
    switch (p.type = t, p.params = l, p.returnValue = d, p.init = n, t) {
      case "push":
      case "reset":
      case "unshift":
        const c = o.length - 1;
        for (let f = 0, u = p.params.length; f < u; f++) {
          const h = p.params[f];
          h !== null && typeof h == "object" && new P(c + f, h, r);
        }
        break;
      case "pop":
      case "shift":
        d !== null && typeof d == "object" && "__rd__" in d && d.__rd__.removeMyRef();
        break;
      case "splice":
        p.params.slice(2).forEach(function(f) {
          f !== null && typeof f == "object" && new P(o.indexOf(f), f, r);
        });
        break;
    }
    return e.changes = p, r.notifyDown("length"), r.notifyDown("changes"), r.notify(r.keyInParent, this), d;
  };
}
const re = {
  _(e, t, n) {
    n instanceof C && (n = n.getInstance()), e instanceof v ? e.setters[t](n) : e[t] = n, D.notify(e, t, n);
  },
  self(e, t, n, s, i) {
    i || s || re._(e, t, n);
  },
  props(e, t, n, s, i) {
    i && re._(e, t, n);
  }
};
function Ce() {
  this.keys = [], this.nodes = [], this.types = [];
}
Ce.prototype.push = function(e, t, n) {
  this.keys.push(e), this.nodes.push(t), this.types.push(n);
};
function P(e, t, n) {
  const s = n instanceof P ? n : wt(n);
  if (this.data = t, this.id = s.id + (e ? "." + e : "|Scope"), this.keyInParent = e, this.nodesMap = /* @__PURE__ */ Object.create(null), this.parent = s, this.refs = [], this.shadow = /* @__PURE__ */ Object.create(null), this.nodeCount = -1, this.data && this.data.hasOwnProperty("__rd__")) {
    this.refs = this.data.__rd__.refs;
    const i = this.getRefById(this.id);
    if (i)
      return i.parent.isDead && (i.parent = s), this.fixHierarchy(e, i), i;
    this.refs.push(this);
  } else {
    if (this.refs.push(this), this.data === null) {
      if (this.parent.shadow[e])
        return this.parent.shadow[e];
      this.data = {}, this.parent.data[e] ? new P(e, this.parent.data[e], this.parent) : this.parent.makeReactiveObject(this.parent.data, e, !0);
    }
    if (!Object.isExtensible(this.data))
      return;
    T(this.data, "__rd__", {
      enumerable: !1,
      configurable: !0,
      value: this
    }), (this.data instanceof k || this.data.__scope__) && (this.addKeyToShadow = x), this.data instanceof k ? this.walkOnScope(this.data) : this.walk(this.data);
  }
  this.fixHierarchy(e, this);
}
P.prototype = {
  get isDead() {
    return this.nodeCount === 0 && this.refs.length === 1 && this.refs[0] === this;
  },
  // If parent data is an array, then this would be an item inside the array
  // therefore its keyInParent should NOT be its index in the array but the
  // array's keyInParent. This way we redirect each item in the array to the
  // array's reactive data
  fixHierarchy: function(e, t) {
    this.parent.data instanceof Array ? this.keyInParent = this.parent.keyInParent : this.parent.shadow[e] = t;
  },
  setData: function(e) {
    if (this.removeMyRef(), !(e instanceof Object)) {
      this.data = {};
      for (let t in this.shadow)
        this.shadow[t] instanceof P ? this.shadow[t].setData(e) : this.notifyDown(t);
      return;
    }
    this.data = e, e.hasOwnProperty("__rd__") ? (this.data.__rd__.addRef(this), this.refs = this.data.__rd__.refs, this.data instanceof Array ? (this.sync("length", this.data.length, !1, !1), this.sync("changes", this.data.changes, !1, !1)) : this.syncAll()) : (T(this.data, "__rd__", {
      enumerable: !1,
      configurable: !0,
      value: this
    }), this.walk(this.data)), this.setupShadowProperties(vt(this.data));
  },
  /**
   *
   * @param data
   */
  walk: function(e) {
    if (!(e instanceof Node)) {
      if (e instanceof Array)
        this.makeReactiveArray(e);
      else if (e instanceof Object)
        for (let t in e)
          this.makeReactiveObject(e, t, !1);
    }
  },
  walkOnScope: function(e) {
  },
  /**
   *
   * @param data
   * @param {string} key
   * @param shadow
   */
  makeReactiveObject: function(e, t, n) {
    let s = e[t];
    if (typeof s == "function")
      return;
    const i = Object.getOwnPropertyDescriptor(e, t), r = i && i.get, a = i && i.set;
    T(e, t, {
      get: function() {
        return r ? r.call(e) : s;
      },
      set: function(l) {
        const d = e.__rd__;
        if (a && a.call(e, l), s === l) {
          l instanceof Array ? d.sync(t, l, !0, !1) : l instanceof Object && d.notifyDown(t);
          return;
        }
        s = l;
        for (let p = 0, o = d.refs.length; p < o; p++) {
          const c = d.refs[p];
          c.shadow[t] && (c.makeKeyEnum(t), c.shadow[t].setData(l));
        }
        d.notify(t, s, null, !1);
      },
      enumerable: !n,
      configurable: !0
    }), this.shadow[t] ? this.shadow[t].setData(s) : this.shadow[t] = null, this.sync(t, s, !1, !1);
  },
  /**
   *
   * @param arr
   * @returns {*}
   */
  makeReactiveArray: function(e) {
    if (e.hasOwnProperty("changes"))
      return e.changes.init;
    const t = this, n = new C();
    n.original = e, n.type = "reset", n.params = e;
    for (let s = 0, i = n.params.length; s < i; s++) {
      const r = n.params[s];
      r !== null && typeof r == "object" && new P(n.original.indexOf(r), r, t);
    }
    return t.sync("length", e.length, !1, !1), n.init = n, T(e, "changes", {
      enumerable: !1,
      configurable: !1,
      writable: !0,
      value: n
    }), At.forEach(function(s) {
      T(e, s, {
        value: Ct(e, s, n),
        writable: !1,
        configurable: !0
      });
    }), n;
  },
  /**
   *
   * @param {string} key
   * @param {any} value
   * @param refs
   * @param {boolean} fromChild
   */
  notify: function(e, t, n, s) {
    if (this.refs === n) {
      this.sync(e, t, !1, s);
      return;
    }
    for (let i = 0, r = this.refs.length; i < r; i++) {
      const a = this.refs[i];
      this !== a && a.notify(e, t, this.refs, s);
    }
    this.sync(e, t, !1, s);
    for (let i = 0, r = this.refs.length; i < r; i++) {
      const a = this.refs[i], l = a.keyInParent, d = a.parent;
      a.parent.notify(l, d.data[l], null, !0);
    }
  },
  notifyDown: function(e) {
    const t = this.data[e];
    this.notifyRefs(e, t), this.sync(e, t, !1, !1);
  },
  notifyRefs: function(e, t) {
    for (let n = 0, s = this.refs.length; n < s; n++) {
      const i = this.refs[n];
      this !== i && i.notify(e, t, this.refs, !1);
    }
  },
  /**
   *
   * @param {string} propertyKey
   * @param {*} value
   * @param {boolean} sameValueObject
   * @param {boolean} fromChild
   */
  sync: function(e, t, n, s) {
    const i = this, r = i.nodesMap[e];
    if (D.notify(i.data, e, t), r)
      for (let a = 0, l = r.nodes.length; a < l; a++)
        i.syncNode(r.types[a], r.nodes[a], r.keys[a], t, n, s);
  },
  /**
   *
   */
  syncAll: function() {
    const e = this, t = xt(e.data);
    for (let n = 0, s = t.length; n < s; n++)
      e.sync(t[n], e.data[t[n]], !1, !1);
  },
  /**
   *
   * @param {string} bindType
   * @param node
   * @param {string} key
   * @param {*} value
   * @param {boolean} sameObjectValue
   * @param {boolean} fromChild
   */
  syncNode: function(e, t, n, s, i, r) {
    re[e].call(null, t, n, s, i, r);
  },
  /**
   *
   * @param {Galaxy.View.ReactiveData} reactiveData
   */
  addRef: function(e) {
    this.refs.indexOf(e) === -1 && this.refs.push(e);
  },
  /**
   *
   * @param {Galaxy.View.ReactiveData} reactiveData
   */
  removeRef: function(e) {
    const t = this.refs.indexOf(e);
    t !== -1 && this.refs.splice(t, 1);
  },
  /**
   *
   */
  removeMyRef: function() {
    if (!(!this.data || !this.data.hasOwnProperty("__rd__")))
      if (this.data.__rd__ !== this)
        this.refs = [this], this.data.__rd__.removeRef(this);
      else if (this.refs.length === 1) {
        const e = this.data;
        if (e instanceof Array)
          for (const t of Et)
            Reflect.deleteProperty(e, t);
      } else {
        this.data.__rd__.removeRef(this);
        const e = this.refs[0];
        T(this.data, "__rd__", {
          enumerable: !1,
          configurable: !0,
          value: e
        }), this.refs = [this];
      }
  },
  /**
   *
   * @param {string} id
   * @returns {*}
   */
  getRefById: function(e) {
    return this.refs.filter(function(t) {
      return t.id === e;
    })[0];
  },
  /**
   *
   * @param {Galaxy.ViewNode} node
   * @param {string} nodeKey
   * @param {string} dataKey
   * @param {string} bindType
   * @param expression
   */
  addNode: function(e, t, n, s, i) {
    let r = this.nodesMap[n];
    r || (r = this.nodesMap[n] = new Ce()), s = s || "_", this.nodeCount === -1 && (this.nodeCount = 0);
    const a = r.nodes.indexOf(e);
    if (a === -1 || r.keys[a] !== t) {
      this.nodeCount++, e instanceof v && !e.setters[t] && e.registerActiveProperty(t, this, i), r.push(t, e, s);
      let l = this.data[n];
      l instanceof Array && l.changes && (l.hasOwnProperty("changes") ? l.changes = l.changes.init : T(l, "changes", {
        enumerable: !1,
        configurable: !1,
        writable: !0,
        value: l.changes.init
      })), this.data instanceof Array && n !== "length" && l && (l = l.init), this.syncNode("_", e, t, l, !1, !1);
    }
  },
  /**
   *
   * @param node
   */
  removeNode: function(e) {
    for (let t = 0, n = this.refs.length; t < n; t++)
      this.removeNodeFromRef(this.refs[t], e);
  },
  /**
   *
   * @param ref
   * @param node
   */
  removeNodeFromRef: function(e, t) {
    let n;
    for (let s in e.nodesMap) {
      n = e.nodesMap[s];
      let i = -1;
      for (; (i = n.nodes.indexOf(t)) !== -1; )
        n.nodes.splice(i, 1), n.keys.splice(i, 1), n.types.splice(i, 1), this.nodeCount--;
    }
  },
  /**
   *
   * @param {string} key
   * @param {boolean} isArray
   */
  addKeyToShadow: function(e, t) {
    e in this.shadow || (t ? this.shadow[e] = new P(e, [], this) : this.shadow[e] = null), this.data.hasOwnProperty(e) || this.makeReactiveObject(this.data, e, !1);
  },
  /**
   *
   */
  setupShadowProperties: function(e) {
    for (let t in this.shadow)
      this.shadow[t] instanceof P ? (this.data.hasOwnProperty(t) || this.makeReactiveObject(this.data, t, !0), this.shadow[t].setData(this.data[t])) : e.indexOf(t) === -1 && this.sync(t, void 0, !1, !1);
  },
  /**
   *
   * @param {string} key
   */
  makeKeyEnum: function(e) {
    const t = Object.getOwnPropertyDescriptor(this.data, e);
    t && t.enumerable === !1 && (t.enumerable = !0, T(this.data, e, t));
  }
};
const Pt = /=\s*'<([^\[\]<>]*)>(.*)'/m, St = /=\s*'=\s*"<([^\[\]<>]*)>(.*)"/m, kt = /^\(\s*([^)]+?)\s*\)|^function.*\(\s*([^)]+?)\s*\)/m, Rt = /^<([^\[\]<>]*)>\s*([^<>]*)\s*$|^=\s*([^\[\]<>]*)\s*$/, Tt = /\.|\[([^\[\]\n]+)]|([^.\n\[\]]+)/g, Pe = {};
for (const e in O)
  O[e].type === "reactive" && (Pe[e] = !0);
const jt = {
  none: function() {
    return x;
  },
  prop: ht,
  attr: mt,
  reactive: bt
};
function It() {
  return "@" + performance.now();
}
function ce(e, t) {
  const s = e.match(Tt).filter((i) => i !== "" && i !== ".");
  return t ? s.map((i) => i.indexOf("[") === 0 ? i.substring(1, i.length - 1) : i) : s;
}
function Lt(e, t) {
  const n = ce(t, !0);
  let s = n[0];
  const i = e;
  let r = e, a = e;
  if (e[s] === void 0) {
    for (; a.__parent__; ) {
      if (a.__parent__.hasOwnProperty(s)) {
        r = a.__parent__;
        break;
      }
      a = a.__parent__;
    }
    r[s] === void 0 && (r = i);
  }
  r = r || {};
  const l = n.length - 1;
  return n.forEach(function(d, p) {
    r = r[d], p !== l && !(r instanceof Object) && (r = {});
  }), r instanceof C ? r.getInstance() : r === void 0 ? null : r;
}
const X = Q.DOM_MANIPLATION = {}, Se = [], ke = [];
let oe = [], ae = !0, U = !1, M = 0, N = 0, K;
const Re = function(e, t) {
  if (t)
    return e();
  this.length ? this.shift()(Re.bind(this, e)) : e();
}, be = function() {
  if (this.length) {
    let e = this.shift(), t = X[e];
    if (!t.length)
      return z.call(this);
    Re.call(t, z.bind(this), U);
  } else
    ae = !0, N = 0, M = 0;
}, z = function() {
  if (U)
    return U = !1, M = 0, z.call(oe);
  const e = performance.now();
  N = N || e, M = M + (e - N), N = e, M > 2 ? (M = 0, K && (clearTimeout(K), K = null), K = setTimeout((t) => {
    N = t, be.call(this);
  })) : be.call(this);
};
function Mt(e, t) {
  return e > t;
}
function Nt(e, t) {
  return e < t;
}
function Te(e, t, n) {
  let s = 0, i = e.length - 1, r = 0;
  for (; s <= i; ) {
    let a = Math.floor((s + i) / 2), l = e[a];
    n(t, l) ? r = s = a + 1 : (r = a, i = a - 1);
  }
  return r;
}
function Dt(e, t) {
  return t < e[0] ? 0 : t > e[e.length - 1] ? e.length : Te(e, t, Mt);
}
function Vt(e, t) {
  return t > e[0] ? 0 : t < e[e.length - 1] ? e.length : Te(e, t, Nt);
}
function je(e, t, n, s) {
  e in X ? X[e].push(t) : (X[e] = [t], n.splice(s(n, e), 0, e));
}
let q = 0;
function Ie() {
  q !== 0 && (clearTimeout(q), q = 0), oe = Jt(ke, Se), q = setTimeout(() => {
    ae && (ae = !1, z.call(oe));
  });
}
function F(e, t) {
  U = !0, je("<" + e, t, ke, Vt), Ie();
}
function j(e, t) {
  U = !0, je(">" + e, t, Se, Dt), Ie();
}
function $(e, t) {
  let n = null;
  for (let s = 0, i = e.length; s < i; s++)
    n = e[s], n.destroy(t);
}
function Le(e, t, n) {
  t != null && t !== !1 ? e.node.setAttribute(n, t === !0 ? "" : t) : e.node.removeAttribute(n);
}
function Bt(e, t, n) {
  e.node[n] = t;
}
function Me(e) {
  let t = {};
  return R(t, "__parent__", {
    enumerable: !1,
    value: e
  }), R(t, "__scope__", {
    enumerable: !1,
    value: e.__scope__ || e
  }), t;
}
function V(e) {
  let t = [], n = [], s = [], i = !1;
  const r = typeof e;
  let a = null;
  if (r === "string") {
    const l = e.match(Rt);
    l && (s = [l[1]], t = [l[2]], n = [e]);
  } else if (r === "function") {
    i = !0, a = e;
    const l = e.toString().match(kt);
    l && (n = (l[1] || l[2]).split(",").map((p) => {
      const o = p.indexOf('"') === -1 ? p.match(Pt) : p.match(St);
      if (o)
        return s.push(o[1]), t.push(o[2]), "<>" + o[2];
    }));
  }
  return {
    propertyKeys: t,
    propertyValues: n,
    bindTypes: s,
    handler: a,
    isExpression: i,
    expressionFn: null
  };
}
function le(e, t) {
  let s = ce(t, !0)[0];
  const i = e;
  let r = e, a = e, l = 0, d;
  if (e[s] === void 0) {
    for (; a.__parent__; ) {
      if (d = a.__parent__, d.hasOwnProperty(s)) {
        r = d;
        break;
      }
      if (l++ >= 1e3)
        throw Error("Maximum nested property lookup has reached `" + s + "`\n" + e);
      a = d;
    }
    if (r[s] === void 0)
      return i;
  }
  return r;
}
function Ne(e, t) {
  const n = t.split("."), s = n.length - 1;
  let i = e;
  return n.forEach(function(r, a) {
    i = le(i, r), a !== s && (i[r] ? i = i[r] : i = i.__rd__.refs.filter((d) => d.shadow[r])[0].shadow[r].data);
  }), i.__rd__;
}
const se = {};
function Ft(e) {
  const t = e.join();
  if (se[t])
    return se[t];
  let n = "return [", s = [];
  for (let r = 0, a = e.length; r < a; r++) {
    const l = e[r];
    typeof l == "string" ? l.indexOf("<>this.") === 0 ? s.push('_prop(this.data, "' + l.replace("<>this.", "") + '")') : l.indexOf("<>") === 0 && s.push('_prop(scope, "' + l.replace("<>", "") + '")') : s.push("_var[" + r + "]");
  }
  n += s.join(",") + "]";
  const i = new Function("scope, _prop , _var", n);
  return se[t] = i, i;
}
function Ut(e, t, n, s, i) {
  i[0] || (e instanceof v ? i[0] = e.data : i[0] = t);
  const r = Ft(i);
  return function() {
    let a = [];
    try {
      a = r.call(e, t, Lt, i);
    } catch (l) {
      console.error(`Can't find the property:
` + s.join(`
`), `

It is recommended to inject the parent object instead of its property.

`, t, `
`, l);
    }
    return n.apply(e, a);
  };
}
function Ht(e, t, n) {
  if (!e.isExpression)
    return !1;
  if (e.expressionFn)
    return e.expressionFn;
  try {
    return e.expressionFn = Ut(t, n, e.handler, e.propertyKeys, e.propertyValues), e.expressionFn;
  } catch (s) {
    throw Error(s.message + `
` + e.propertyKeys);
  }
}
function W(e, t, n, s, i, r) {
  const a = i.propertyKeys, l = Ht(i, r, s);
  let d = s, p = null, o = null, c = null, f = [];
  for (let u = 0, h = a.length; u < h; u++) {
    p = a[u], o = null;
    const m = i.bindTypes[u];
    if (f = ce(p), f.length > 1 && (p = f[0], o = f.slice(1).join(".")), !n && s && ("__rd__" in s ? n = s.__rd__ : n = new P(null, s, s instanceof k ? s.systemId : "child")), f[0] === "Scope")
      throw new Error("`Scope` keyword must be omitted when it is used  used in bindings: " + a.join("."));
    p.indexOf("[") === 0 && (p = p.substring(1, p.length - 1)), f[0] === "this" && p === "this" && r instanceof v ? (p = f[1], i.propertyKeys = f.slice(2), o = null, n = new P("data", r.data, "this"), d = le(r.data, p)) : d && (d = le(d, p)), c = d, d !== null && typeof d == "object" && (c = d[p]);
    let b;
    if (c instanceof Object ? b = new P(p, c, n || s.__scope__.__rd__) : o ? b = new P(p, null, n) : n && n.addKeyToShadow(p, t === "repeat"), o === null) {
      if (e instanceof v || R(e, t, {
        set: function(y) {
          l || n.data[p] !== y && (n.data[p] = y);
        },
        get: function() {
          return l ? l() : n.data[p];
        },
        enumerable: !0,
        configurable: !0
      }), n && s instanceof k && e instanceof v && e.localPropertyNames.has(p))
        return;
      n.addNode(e, t, p, m, l);
    }
    o !== null && W(e, t, b, c, Object.assign({}, i, { propertyKeys: [o] }), r);
  }
}
function B(e, t, n, s) {
  const i = Ve(t);
  let r, a;
  const l = s ? pe(t) : t;
  let d;
  n instanceof k || (d = new P(null, n, "BSTD"));
  for (let p = 0, o = i.length; p < o; p++) {
    if (r = i[p], a = l[r], a.__singleton__)
      continue;
    const c = V(a);
    c.propertyKeys.length && (W(l, r, d, n, c, e), e && c.propertyKeys.forEach(function(f) {
      try {
        const u = Ne(n, f);
        e.finalize.push(() => {
          u.removeNode(l);
        });
      } catch (u) {
        console.error("bind_subjects_to_data -> Could not find: " + f + `
 in`, n, u);
      }
    })), a && typeof a == "object" && !(a instanceof Array) && B(e, a, n);
  }
  return l;
}
function Gt(e, t, n, s) {
  if (n in Pe) {
    if (s == null)
      return !1;
    const i = O[n], r = i.getConfig.call(e, t, e.blueprint[n]);
    return r !== void 0 && (e.cache[n] = r), i.install.call(e, r);
  }
  return !0;
}
function Kt(e, t, n, s) {
  const i = O[t] || { type: "attr" };
  i.key = i.key || t, typeof i.beforeActivate < "u" && i.beforeActivate(e, n, t, s), e.setters[t] = fe(i, e, n, s);
}
function fe(e, t, n, s) {
  return e.type !== "reactive" && t.virtual ? x : typeof e.getSetter < "u" ? e.getSetter(t, e, e, s) : jt[e.type](t, e, s);
}
function ge(e, t, n) {
  const s = t + "_" + e.node.nodeType;
  let i = O[s] || O[t];
  switch (i || (i = { type: "prop" }, !(t in e.node) && "setAttribute" in e.node && (i = { type: "attr" }), O[s] = i), i.key = i.key || t, i.type) {
    case "attr":
    case "prop":
    case "reactive":
      fe(i, e)(n, null);
      break;
    case "event":
      e.node[t] = function(r) {
        n.call(e, r, e.data);
      };
      break;
  }
}
Q.COMPONENTS = {};
function Q(e) {
  const t = this;
  t.scope = e, e.element instanceof v ? (t.container = e.element, t._components = Object.assign({}, e.element.view._components)) : (t.container = new v({
    tag: e.element
  }, null, t), t.container.setInDOM(!0));
}
function H(e) {
  this.type = e;
}
H.prototype.startKeyframe = function(e, t) {
  if (!e)
    throw new Error("Argument Missing: view." + this.type + ".startKeyframe(timeline:string) needs a `timeline`");
  t = t || "+=0";
  const n = {
    [this.type]: {
      // keyframe: true,
      to: {
        data: "timeline:start",
        duration: 1e-3
      },
      timeline: e,
      position: t
    }
  };
  return {
    tag: "comment",
    text: ["", this.type + ":timeline:start", "position: " + t, "timeline: " + e, ""].join(`
`),
    animations: n
  };
};
H.prototype.keyframe = function(e, t, n) {
  if (!t)
    throw new Error("Argument Missing: view." + this.type + ".addKeyframe(timeline:string) needs a `timeline`");
  const s = {
    [this.type]: {
      // keyframe: true,
      to: {
        duration: 1e-3,
        onComplete: e
      },
      timeline: t,
      position: n
    }
  };
  return {
    tag: "comment",
    text: this.type + ":timeline:keyframe",
    animations: s
  };
};
H.prototype.waitKeyframe = function(e, t) {
  if (!e)
    throw new Error("Argument Missing: view." + this.type + ".addKeyframe(timeline:string) needs a `timeline`");
  const n = {
    [this.type]: {
      to: {
        duration: 1e-3
      },
      timeline: e,
      position: t
    }
  };
  return {
    tag: "comment",
    text: this.type + ":timeline:waitKeyframe",
    animations: n
  };
};
Q.prototype = {
  _components: {},
  components: function(e) {
    for (const t in e) {
      const n = e[t];
      if (typeof n != "function")
        throw new Error("Component must be type of function: " + t);
      this._components[t] = n;
    }
  },
  /**
   *
   */
  entering: new H("enter"),
  leaving: new H("leave"),
  /**
   *
   * @param {string} key
   * @param blueprint
   * @param {Galaxy.Scope|Object} scopeData
   * @returns {*}
   */
  getComponent: function(e, t, n) {
    let s = n, i = t;
    if (e)
      if (e in this._components) {
        if (t.props && typeof t.props != "object")
          throw new Error("The `props` must be a literal object.");
        if (s = Me(n), Object.assign(s, t.props || {}), B(null, s, n), i = this._components[e].call(null, s, t, this), t instanceof Array)
          throw new Error("A component's blueprint can NOT be an array. A component must have only one root node.");
      } else He.indexOf(e) === -1 && console.warn("Invalid component/tag: " + e);
    return {
      blueprint: Object.assign(t, i),
      scopeData: s
    };
  },
  /**
   *
   * @param {{enter?: AnimationConfig, leave?:AnimationConfig}} animations
   * @returns Blueprint
   */
  addTimeline: function(e) {
    return {
      tag: "comment",
      text: "timeline",
      animations: e
    };
  },
  /**
   *
   * @param {Blueprint|Blueprint[]} blueprint
   * @return {Galaxy.ViewNode|Array<Galaxy.ViewNode>}
   */
  blueprint: function(e) {
    const t = this;
    return this.createNode(e, t.scope, t.container, null);
  },
  /**
   *
   * @param {boolean} [hasAnimation]
   */
  clean: function(e) {
    this.container.clean(e);
  },
  dispatchEvent: function(e) {
    this.container.dispatchEvent(e);
  },
  /**
   *
   * @param {Object} blueprint
   * @param {Object} scopeData
   * @param {Galaxy.ViewNode} parent
   * @param {Node|Element|null} position
   * @return {Galaxy.ViewNode|Array<Galaxy.ViewNode>}
   */
  createNode: function(e, t, n, s) {
    const i = this;
    let r = 0, a = 0;
    if (typeof e == "string") {
      const l = document.createElement("div");
      l.innerHTML = e;
      const d = Array.prototype.slice.call(l.childNodes);
      return d.forEach(function(p) {
        const o = new v({ tag: p }, n, i);
        n.registerChild(o, s), p.parentNode.removeChild(p), ge(o, "animations", {}), o.setInDOM(!0);
      }), d;
    } else {
      if (typeof e == "function")
        return e.call(i);
      if (e instanceof Array) {
        const l = [];
        for (r = 0, a = e.length; r < a; r++)
          l.push(i.createNode(e[r], t, n, null));
        return l;
      } else if (e instanceof Object) {
        const l = i.getComponent(e.tag, e, t);
        let d, p;
        const o = l.blueprint, c = Ve(o), f = [], u = new v(o, n, i, l.scopeData);
        for (n.registerChild(u, s), r = 0, a = c.length; r < a; r++)
          p = c[r], d = o[p], Gt(u, l.scopeData, p, d) !== !1 && f.push(p);
        for (r = 0, a = f.length; r < a; r++) {
          if (p = f[r], p === "children") continue;
          d = o[p];
          const h = V(d);
          h.propertyKeys.length ? W(u, p, null, l.scopeData, h, u) : ge(u, p, d);
        }
        return u.virtual || (u.setInDOM(!0), o.children && i.createNode(o.children, l.scopeData, u, null)), u;
      } else
        throw Error("blueprint should NOT be null");
    }
  },
  loadStyle(e) {
    e.indexOf("./") === 0 && (e = e.replace("./", this.scope.uri.path));
  }
};
function De(e, t, n) {
  if (e instanceof Array) {
    const s = e.map((i) => De(i, t, n));
    return t && (t.activeRoute.children = s), s;
  }
  return {
    ...e,
    fullPath: n + e.path,
    active: !1,
    hidden: e.hidden || !!e.redirectTo || !1,
    viewports: e.viewports || {},
    parent: t ? t.activeRoute : null,
    children: e.children || []
  };
}
function qt(e) {
  return e.map(function(t) {
    const n = [];
    let s = w.PARAMETER_NAME_REGEX.exec(t);
    for (; s; )
      n.push(s[1]), s = w.PARAMETER_NAME_REGEX.exec(t);
    return n.length ? {
      id: t,
      paramNames: n,
      paramFinderExpression: new RegExp(t.replace(w.PARAMETER_NAME_REGEX, w.PARAMETER_NAME_REPLACEMENT))
    } : null;
  }).filter(Boolean);
}
w.TITLE_SEPARATOR = " • ";
w.PARAMETER_NAME_REGEX = new RegExp(/[:*](\w+)/g);
w.PARAMETER_NAME_REPLACEMENT = "([^/]+)";
w.BASE_URL = "/";
w.currentPath = {
  handlers: [],
  subscribe: function(e) {
    this.handlers.push(e), e(location.pathname);
  },
  update: function() {
    this.handlers.forEach((e) => {
      e(location.pathname);
    });
  }
};
w.mainListener = function(e) {
  w.currentPath.update();
};
window.addEventListener("popstate", w.mainListener);
function w(e) {
  const t = this;
  if (t.__singleton__ = !0, t.config = {
    baseURL: w.BASE_URL
  }, t.scope = e, t.routes = [], t.parentScope = e.parentScope, t.parentRouter = e.parentScope ? e.parentScope.__router__ : null, t.parentScope && (!t.parentScope.router || !t.parentScope.router.activeRoute)) {
    let s = t.parentScope;
    for (; !s.router || !s.router.activeRoute; )
      s = s.parentScope;
    t.parentScope = s, t.parentRouter = s.__router__;
  }
  const n = t.parentScope && t.parentScope.router;
  t.title = n ? this.parentScope.router.activeRoute.title : "", t.path = n ? t.parentScope.router.activeRoute.path : "/", t.fullPath = this.config.baseURL === "/" ? this.path : this.config.baseURL + this.path, t.parentRoute = n ? this.parentScope.router.activeRoute : null, t.oldURL = "", t.resolvedRouteValue = null, t.resolvedDynamicRouteValue = null, t.routesMap = null, t.data = {
    routes: [],
    navs: [],
    activeRoute: null,
    activePath: null,
    activeModule: null,
    viewports: {
      main: null
    },
    parameters: t.parentScope && t.parentScope.router ? t.parentScope.router.parameters : {}
  }, t.onTransitionFn = x, t.onInvokeFn = x, t.onLoadFn = x, t.viewports = {
    main: {
      tag: "div",
      module: "<>router.activeModule"
    }
  }, Object.defineProperty(this, "urlParts", {
    get: function() {
      return t.oldURL.split("/").slice(1);
    },
    enumerable: !0
  }), e.systemId === "@root" && w.currentPath.update();
}
w.prototype = {
  setup: function(e) {
    return this.routes = De(e, this.parentScope ? this.parentScope.router : null, this.fullPath === "/" ? "" : this.fullPath), this.routes.forEach((t) => {
      (t.viewports ? Object.keys(t.viewports) : []).forEach((s) => {
        s === "main" || this.viewports[s] || (this.viewports[s] = {
          tag: "div",
          module: "<>router.viewports." + s
        });
      });
    }), this.data.routes = this.routes, this.data.navs = this.routes.filter((t) => !t.hidden), this;
  },
  start: function() {
    this.listener = this.detect.bind(this), window.addEventListener("popstate", this.listener), this.detect();
  },
  setTitle(e) {
    this.title = e;
  },
  getTitle(e) {
    const t = [];
    if (e.pageTitle)
      return e.pageTitle;
    if (this.parentRouter) {
      const n = this.parentRoute.pageTitle;
      if (n)
        return t.push(n), e.title && t.push(e.title), t.join(w.TITLE_SEPARATOR);
      t.push(this.parentRouter.title);
    }
    return this.title && t.push(this.title), e.title && t.push(e.title), t.join(w.TITLE_SEPARATOR);
  },
  /**
   *
   * @param {string} path
   * @param {boolean} replace
   */
  navigateToPath: function(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid argument(s) for `navigateToPath`: path must be a string. " + typeof e + " is given");
    if (e.indexOf("/") !== 0)
      throw new Error("Invalid argument(s) for `navigateToPath`: path must be starting with a `/`\nPlease use `/" + e + "` instead of `" + e + "`");
    e.indexOf(this.config.baseURL) !== 0 && (e = this.config.baseURL + e), window.location.pathname !== e && (t ? history.replaceState({}, "", e) : history.pushState({}, "", e), dispatchEvent(new PopStateEvent("popstate", { state: {} })));
  },
  navigate: function(e, t) {
    if (typeof e != "string")
      throw new Error("Invalid argument(s) for `navigate`: path must be a string. " + typeof e + " is given");
    if (e.indexOf("/") !== 0)
      throw new Error("Invalid argument(s) for `navigate`: path must be starting with a `/`\nPlease use `/" + e + "` instead of `" + e + "`");
    e.indexOf(this.path) !== 0 && (e = this.path + e), this.navigateToPath(e, t);
  },
  navigateToRoute: function(e, t) {
    let n = e.path;
    e.parent && (n = e.parent.path + e.path), this.navigate(n, t);
  },
  notFound: function() {
  },
  normalizeHash: function(e) {
    if (e.indexOf("#!/") === 0)
      throw new Error("Please use `#/` instead of `#!/` for you hash");
    let t = e;
    return e.indexOf("#/") !== 0 && (e.indexOf("/") !== 0 ? t = "/" + e : e.indexOf("#") === 0 && (t = e.split("#").join("#/"))), t.replace(this.fullPath, "/").replace("//", "/") || "/";
  },
  onTransition: function(e) {
    return this.onTransitionFn = e, this;
  },
  onInvoke: function(e) {
    return this.onInvokeFn = e, this;
  },
  onLoad: function(e) {
    return this.onLoadFn = e, this;
  },
  findMatchRoute: function(e, t, n) {
    const s = this;
    let i = 0;
    const r = s.normalizeHash(t), a = e.map((o) => o.path), l = qt(a), d = e.filter((o) => l.indexOf(o) === -1 && r.indexOf(o.path) === 0), p = d.length ? d.reduce((o, c) => o.path.length > c.path.length ? o : c) : !1;
    if (p && !(r !== "/" && p.path === "/")) {
      const o = r.slice(0, p.path.length);
      return s.resolvedRouteValue === o ? Object.assign(s.data.parameters, s.createClearParameters()) : (s.resolvedDynamicRouteValue = null, s.resolvedRouteValue = o, p.redirectTo ? this.navigate(p.redirectTo, !0) : (i++, s.callRoute(p, r, s.createClearParameters(), n)));
    }
    for (let o = 0, c = l.length; o < c; o++) {
      const f = l[o], u = f.paramFinderExpression.exec(r);
      if (!u)
        continue;
      i++;
      const h = s.createParamValueMap(f.paramNames, u.slice(1));
      if (s.resolvedDynamicRouteValue === t)
        return Object.assign(s.data.parameters, h);
      s.resolvedDynamicRouteValue = t, s.resolvedRouteValue = null;
      const m = a.indexOf(f.id), b = f.id.split("/").filter((y) => y.indexOf(":") !== 0).join("/"), _ = t.replace(b, "").split("/");
      return s.callRoute(e[m], _.join("/"), h, n);
    }
    i === 0 && console.warn("No associated route has been found", t);
  },
  callRoute: function(e, t, n, s) {
    const i = this.data.activeRoute, r = this.data.activePath;
    return this.data.activeRoute = e, this.data.activePath = e.path, this.onTransitionFn.call(this, r, e.path, i, e), e.redirectTo || (i && e.path.indexOf(r) !== 0 && (i.active = !1, typeof i.onLeave == "function" && i.onLeave.call(null, r, e.path, i, e)), e.active = !0), typeof e.onEnter == "function" && e.onEnter.call(null, r, e.path, i, e), document.title = this.getTitle(e), typeof e.handle == "function" ? e.handle.call(this, n, s) : (this.populateViewports(e), j(It(), (a) => {
      Object.assign(this.data.parameters, n), a();
    }), !1);
  },
  populateViewports: function(e) {
    let t = !1;
    const n = this.data.viewports;
    for (const s in n) {
      let i = e.viewports[s];
      i !== void 0 && (typeof i == "string" && (i = {
        path: i,
        onInvoke: this.onInvokeFn.bind(this, i, s),
        onLoad: this.onLoadFn.bind(this, i, s)
      }, t = !0), s === "main" && (this.data.activeModule = i), this.data.viewports[s] = i);
    }
    !t && this.parentRouter && this.parentRouter.populateViewports(e);
  },
  createClearParameters: function() {
    const e = {};
    return Object.keys(this.data.parameters).forEach((n) => e[n] = void 0), e;
  },
  createParamValueMap: function(e, t) {
    const n = {};
    return e.forEach(function(s, i) {
      n[s] = t[i];
    }), n;
  },
  detect: function() {
    const e = window.location.pathname, t = e ? e.substring(-1) !== "/" ? e + "/" : e : "/", n = this.config.baseURL === "/" ? this.path : this.config.baseURL + this.path;
    t.indexOf(n) === 0 && t !== this.oldURL && (this.oldURL = t, this.findMatchRoute(this.routes, t, {}));
  },
  getURLParts: function() {
    return this.oldURL.split("/").slice(1);
  },
  destroy: function() {
    this.parentRoute && (this.parentRoute.children = []), window.removeEventListener("popstate", this.listener);
  }
};
function x() {
}
const R = Object.defineProperty, Yt = Reflect.deleteProperty, Ve = Object.keys, Jt = Array.prototype.concat.bind([]), Oe = Array.prototype.slice;
function pe(e) {
  let t = e instanceof Array ? [] : {};
  t.__proto__ = e.__proto__;
  for (let n in e)
    if (e.hasOwnProperty(n)) {
      const s = e[n];
      s instanceof Promise || s instanceof w ? t[n] = s : typeof s == "object" && s !== null ? n === "animations" && s && typeof s == "object" ? t[n] = s : t[n] = pe(s) : t[n] = s;
    }
  return t;
}
const Xt = document.createComment("");
function zt(e) {
  const t = Xt.cloneNode();
  return t.textContent = e, t;
}
function $t(e, t) {
  return e === "svg" || t && t.blueprint.tag === "svg" ? document.createElementNS("http://www.w3.org/2000/svg", e) : e === "comment" ? document.createComment("ViewNode") : document.createElement(e);
}
function k(e, t, n) {
  const s = this;
  s.context = e, s.systemId = t.systemId, s.parentScope = t.parentScope || null, s.element = n || null, s.export = {}, s.uri = new xe(t.path), s.eventHandlers = {}, s.observers = [];
  const i = s.element.data ? B(s.element, s.element.data, s.parentScope, !0) : {};
  R(s, "data", {
    enumerable: !0,
    configurable: !0,
    get: function() {
      return i;
    },
    set: function(r) {
      if (r === null || typeof r != "object")
        throw Error("The `Scope.data` property must be type of object and can not be null.");
      Object.assign(i, r);
    }
  }), s.on("module.destroy", this.destroy.bind(s));
}
k.prototype = {
  data: null,
  systemId: null,
  parentScope: null,
  importAsText: function(e) {
    return e.indexOf("./") === 0 && (e = e.replace("./", this.uri.path)), fetch(e, {
      headers: {
        "Content-Type": "text/plain"
      }
    }).then((t) => t.text());
  },
  /**
   *
   */
  destroy: function() {
    Yt(this, "data"), this.observers.forEach(function(e) {
      e.remove();
    });
  },
  kill: function() {
    throw Error("Scope.kill() should not be invoked at the runtime");
  },
  /**
   *
   * @param {Galaxy.ModuleMetaData} moduleMeta
   * @param {*} config
   * @returns {*}
   */
  load: function(e, t) {
    const n = Object.assign({}, e, t || {});
    return n.path.indexOf("./") === 0 && (n.path = this.uri.path + e.path.substr(2)), n.parentScope = this, this.context.load(n);
  },
  /**
   *
   * @param moduleMetaData
   * @param viewNode
   * @returns {*|PromiseLike<T>|Promise<T>}
   */
  loadModuleInto: function(e, t) {
    return this.load(e, {
      element: t
    }).then(function(n) {
      return n.start(), n;
    });
  },
  /**
   *
   * @param {string} event
   * @param {Function} handler
   */
  on: function(e, t) {
    this.eventHandlers[e] || (this.eventHandlers[e] = []), this.eventHandlers[e].indexOf(t) === -1 && this.eventHandlers[e].push(t);
  },
  /**
   *
   * @param {string} event
   * @param {*} data
   */
  trigger: function(e, t) {
    this.eventHandlers[e] && this.eventHandlers[e].forEach(function(n) {
      n.call(null, t);
    });
  },
  /**
   *
   * @param object
   * @returns {Galaxy.Observer}
   */
  observe: function(e) {
    const t = new D(e);
    return this.observers.push(t), t;
  }
};
function Be(e, t) {
  this.id = e.id, this.systemId = e.systemId, this.source = typeof e.source == "function" ? e.source : null, this.path = e.path || null, this.importId = e.importId || e.path, this.scope = t;
}
Be.prototype = {
  init: function() {
    Reflect.deleteProperty(this, "source"), Reflect.deleteProperty(this, "addOnProviders"), this.scope.trigger("module.init");
  },
  start: function() {
    this.scope.trigger("module.start");
  },
  destroy: function() {
    this.scope.trigger("module.destroy");
  }
};
function Ae(e, t) {
  const n = new k(e, t, t.element || this.rootElement);
  return new Be(t, n);
}
function Ee(e) {
  return new Promise(async function(t, n) {
    try {
      const s = e.source || (await import(
        /* @vite-ignore */
      "/" + e.path
        )).default;
      let i = s;
      typeof s != "function" && (i = function() {
        console.error("Can't find default function in %c" + e.path, "font-weight: bold;");
      });
      const r = i.call(null, e.scope) || null, a = () => (e.init(), t(e));
      r ? r.then(a) : a();
    } catch (s) {
      console.error(s.message + ": " + e.path), console.trace(s), n();
    }
  });
}
k.prototype.useView = function() {
  return new Q(this);
};
k.prototype.useRouter = function() {
  const e = new w(this);
  return this.systemId !== "@root" && this.on("module.destroy", () => e.destroy()), this.__router__ = e, this.router = e.data, e;
};
Array.prototype.unique = function() {
  const e = this.concat();
  for (let t = 0, n = e.length; t < n; ++t)
    for (let s = t + 1, i = e.length; s < i; ++s)
      e[t] === e[s] && e.splice(s--, 1);
  return e;
};
const Y = {
  moduleContents: {},
  addOnProviders: [],
  rootElement: null,
  bootModule: null,
  /**
   *
   * @param {Object} out
   * @returns {*|{}}
   */
  extend: function(e) {
    let t = e || {}, n;
    for (let s = 1; s < arguments.length; s++)
      if (n = arguments[s], !!n)
        for (let i in n)
          n.hasOwnProperty(i) && (n[i] instanceof Array ? t[i] = this.extend(t[i] || [], n[i]) : typeof n[i] == "object" && n[i] !== null ? t[i] = this.extend(t[i] || {}, n[i]) : t[i] = n[i]);
    return t;
  },
  /**
   *
   * @param {Galaxy.ModuleMetaData} moduleMeta
   * @return {Promise<any>}
   */
  load: function(e) {
    if (!e)
      throw new Error("Module meta data or constructor is missing");
    const t = this;
    return new Promise(function(n, s) {
      if (e.hasOwnProperty("constructor") && typeof e.constructor == "function")
        return e.path = e.id = "internal/" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.round(performance.now()), e.systemId = e.parentScope ? e.parentScope.systemId + "/" + e.id : e.id, e.source = e.constructor, Ee(Ae(t, e)).then(n);
      e.path = e.path.indexOf("/") === 0 ? e.path.substring(1) : e.path, e.id || (e.id = "@" + e.path), e.systemId = e.parentScope ? e.parentScope.systemId + "/" + e.id : e.id;
      let i = e.path, r = t.moduleContents[i];
      r || (t.moduleContents[i] = r = fetch(i).then((a) => a.ok ? a : (console.error(a.statusText, i), s(a.statusText))).catch(s)), r = r.then((a) => a.clone().text()), r.then((a) => Ee(Ae(t, e))).then(n).catch(s);
    });
  }
};
function Zt(e) {
  if (Y.rootElement = e.element, e.id = "@root", !Y.rootElement)
    throw new Error("element property is mandatory");
  return new Promise(function(t, n) {
    Y.load(e).then(function(s) {
      Y.bootModule = s, t(s);
    }).catch(function(s) {
      console.error("Something went wrong", s), n();
    });
  });
}
export {
  Zt as boot,
  ye as setupTimeline
};
//# sourceMappingURL=galaxy.js.map
