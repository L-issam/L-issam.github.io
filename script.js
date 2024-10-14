
 // Fonction pour afficher la date actuelle
 function afficherDate() {
  // Créer un nouvel objet de date
  var date = new Date();
  
  // Récupérer les composants de la date
  var jour = date.getDate();
  var mois = date.getMonth(); // Les mois commencent à partir de zéro ? si oui ajouter +1
  var annee = date.getFullYear();
       // Tableau des noms des mois en français
       var moisFrancais = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
      ];
  // Formater la date comme "jj/mm/aaaa"
  var dateFormatee = ' ' + jour + ' ' + moisFrancais[mois] + ' ' + annee + ' ';
 
   // Calculer la différence de dates
  var dateDebut = new Date("2019-10-30");
  var difference = date - dateDebut;

    // Convertir la différence en jours, mois et années
  var minutesPerDay = 24 * 60 * 60 * 1000; // millisecondes pas minutes
  var jours = Math.floor(difference / minutesPerDay);


// Calcul du nombre d'années, de mois et de jours
var ans = Math.floor(jours / 365,2422);
var resteJours = jours % 366;
var mois = Math.floor(resteJours / 30);
var jours = resteJours % 30;
var differenceDates = ' ' + ans + " ans et " + mois + " mois ";

  // Afficher la date dans l'élément avec l'ID "dateVisite"
  document.getElementById('dateVisite').textContent = dateFormatee;

  // Afficher la différence de dates dans l'élément avec l'ID "dateexp"
  document.getElementById('dateexp').textContent = differenceDates;
}

!function(G, Za) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = G.document ? Za(G, !0) : function($a) {
    if (!$a.document) {
      throw Error("jQuery requires a window with a document");
    }
    return Za($a);
  } : Za(G);
}("undefined" != typeof window ? window : this, function(G, Za) {
  function $a(a, b, c) {
    var d, f = (b = b || P).createElement("script");
    if (f.text = a, c) {
      for (d in Ic) {
        c[d] && (f[d] = c[d]);
      }
    }
    b.head.appendChild(f).parentNode.removeChild(f);
  }
  function Ra(a) {
    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ib[Qb.call(a)] || "object" : typeof a;
  }
  function xb(a) {
    var b = !!a && "length" in a && a.length, c = Ra(a);
    return !J(a) && !Sa(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a);
  }
  function xa(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  function yb(a, b, c) {
    return J(b) ? e.grep(a, function(d, f) {
      return !!b.call(d, f, d) !== c;
    }) : b.nodeType ? e.grep(a, function(d) {
      return d === b !== c;
    }) : "string" != typeof b ? e.grep(a, function(d) {
      return -1 < jb.call(b, d) !== c;
    }) : e.filter(b, a, c);
  }
  function Rb(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType;) {
    }
    return a;
  }
  function Jc(a) {
    var b = {};
    return e.each(a.match(ya) || [], function(c, d) {
      b[d] = !0;
    }), b;
  }
  function Ta(a) {
    return a;
  }
  function kb(a) {
    throw a;
  }
  function Sb(a, b, c, d) {
    var f;
    try {
      a && J(f = a.promise) ? f.call(a).done(b).fail(c) : a && J(f = a.then) ? f.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (g) {
      c.apply(void 0, [g]);
    }
  }
  function lb() {
    P.removeEventListener("DOMContentLoaded", lb);
    G.removeEventListener("load", lb);
    e.ready();
  }
  function Kc(a, b) {
    return b.toUpperCase();
  }
  function za(a) {
    return a.replace(Lc, "ms-").replace(Mc, Kc);
  }
  function ab() {
    this.expando = e.expando + ab.uid++;
  }
  function Tb(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) {
      if (d = "data-" + b.replace(Nc, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
        try {
          d = c, c = "true" === d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : Oc.test(d) ? JSON.parse(d) : d);
        } catch (f) {
        }
        na.set(a, b, c);
      } else {
        c = void 0;
      }
    }
    return c;
  }
  function Ub(a, b, c, d) {
    var f, g, k = 20, m = d ? function() {
      return d.cur();
    } : function() {
      return e.css(a, b, "");
    }, n = m(), t = c && c[3] || (e.cssNumber[b] ? "" : "px"), q = (e.cssNumber[b] || "px" !== t && +n) && bb.exec(e.css(a, b));
    if (q && q[3] !== t) {
      n /= 2;
      t = t || q[3];
      for (q = +n || 1; k--;) {
        e.style(a, b, q + t), 0 >= (1 - g) * (1 - (g = m() / n || .5)) && (k = 0), q /= g;
      }
      q *= 2;
      e.style(a, b, q + t);
      c = c || [];
    }
    return c && (q = +q || +n || 0, f = c[1] ? q + (c[1] + 1) * c[2] : +c[2], d && (d.unit = t, d.start = q, d.end = f)), f;
  }
  function Ua(a, b) {
    for (var c, d, f = [], g = 0, k = a.length; g < k; g++) {
      if ((d = a[g]).style) {
        if (c = d.style.display, b) {
          if ("none" === c && (f[g] = H.get(d, "display") || null, f[g] || (d.style.display = "")), "" === d.style.display && mb(d)) {
            c = g;
            var m = void 0;
            var n = d.ownerDocument;
            d = d.nodeName;
            var t = Vb[d];
            n = t || (m = n.body.appendChild(n.createElement(d)), t = e.css(m, "display"), m.parentNode.removeChild(m), "none" === t && (t = "block"), Vb[d] = t, t);
            f[c] = n;
          }
        } else {
          "none" !== c && (f[g] = "none", H.set(d, "display", c));
        }
      }
    }
    for (g = 0; g < k; g++) {
      null != f[g] && (a[g].style.display = f[g]);
    }
    return a;
  }
  function oa(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && xa(a, b) ? e.merge([a], c) : c;
  }
  function zb(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      H.set(a[c], "globalEval", !b || H.get(b[c], "globalEval"));
    }
  }
  function Wb(a, b, c, d, f) {
    for (var g, k, m, n, t = b.createDocumentFragment(), q = [], w = 0, z = a.length; w < z; w++) {
      if ((g = a[w]) || 0 === g) {
        if ("object" === Ra(g)) {
          e.merge(q, g.nodeType ? [g] : g);
        } else if (Pc.test(g)) {
          k = k || t.appendChild(b.createElement("div"));
          m = (Xb.exec(g) || ["", ""])[1].toLowerCase();
          m = qa[m] || qa._default;
          k.innerHTML = m[1] + e.htmlPrefilter(g) + m[2];
          for (m = m[0]; m--;) {
            k = k.lastChild;
          }
          e.merge(q, k.childNodes);
          (k = t.firstChild).textContent = "";
        } else {
          q.push(b.createTextNode(g));
        }
      }
    }
    t.textContent = "";
    for (w = 0; g = q[w++];) {
      if (d && -1 < e.inArray(g, d)) {
        f && f.push(g);
      } else if (n = e.contains(g.ownerDocument, g), k = oa(t.appendChild(g), "script"), n && zb(k), c) {
        for (m = 0; g = k[m++];) {
          Yb.test(g.type || "") && c.push(g);
        }
      }
    }
    return t;
  }
  function nb() {
    return !0;
  }
  function Va() {
    return !1;
  }
  function Zb() {
    try {
      return P.activeElement;
    } catch (a) {
    }
  }
  function Ab(a, b, c, d, f, g) {
    var k, m;
    if ("object" == typeof b) {
      "string" != typeof c && (d = d || c, c = void 0);
      for (m in b) {
        Ab(a, m, c, d, b[m], g);
      }
      return a;
    }
    if (null == d && null == f ? (f = c, d = c = void 0) : null == f && ("string" == typeof c ? (f = d, d = void 0) : (f = d, d = c, c = void 0)), !1 === f) {
      f = Va;
    } else if (!f) {
      return a;
    }
    return 1 === g && (k = f, (f = function(n) {
      return e().off(n), k.apply(this, arguments);
    }).guid = k.guid || (k.guid = e.guid++)), a.each(function() {
      e.event.add(this, b, f, d, c);
    });
  }
  function $b(a, b) {
    return xa(a, "table") && xa(11 !== b.nodeType ? b : b.firstChild, "tr") ? e(a).children("tbody")[0] || a : a;
  }
  function Qc(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }
  function Rc(a) {
    return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a;
  }
  function ac(a, b) {
    var c, d, f, g, k, m;
    if (1 === b.nodeType) {
      if (H.hasData(a) && (c = H.access(a), d = H.set(b, c), m = c.events)) {
        for (f in delete d.handle, d.events = {}, m) {
          for (c = 0, d = m[f].length; c < d; c++) {
            e.event.add(b, f, m[f][c]);
          }
        }
      }
      na.hasData(a) && (g = na.access(a), k = e.extend({}, g), na.set(b, k));
    }
  }
  function Wa(a, b, c, d) {
    b = bc.apply([], b);
    var f, g, k, m = 0, n = a.length, t = n - 1, q = b[0], w = J(q);
    if (w || 1 < n && "string" == typeof q && !V.checkClone && Sc.test(q)) {
      return a.each(function(I) {
        var B = a.eq(I);
        w && (b[0] = q.call(this, I, B.html()));
        Wa(B, b, c, d);
      });
    }
    if (n && (f = Wb(b, a[0].ownerDocument, !1, a, d), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || d)) {
      for (k = (g = e.map(oa(f, "script"), Qc)).length; m < n; m++) {
        var z = f;
        m !== t && (z = e.clone(z, !0, !0), k && e.merge(g, oa(z, "script")));
        c.call(a[m], z, m);
      }
      if (k) {
        for (f = g[g.length - 1].ownerDocument, e.map(g, Rc), m = 0; m < k; m++) {
          z = g[m], Yb.test(z.type || "") && !H.access(z, "globalEval") && e.contains(f, z) && (z.src && "module" !== (z.type || "").toLowerCase() ? e._evalUrl && e._evalUrl(z.src) : $a(z.textContent.replace(Tc, ""), f, z));
        }
      }
    }
    return a;
  }
  function cc(a, b, c) {
    for (var d = b ? e.filter(b, a) : a, f = 0; null != (b = d[f]); f++) {
      c || 1 !== b.nodeType || e.cleanData(oa(b)), b.parentNode && (c && e.contains(b.ownerDocument, b) && zb(oa(b, "script")), b.parentNode.removeChild(b));
    }
    return a;
  }
  function cb(a, b, c) {
    var d, f, g, k, m = a.style;
    return (c = c || ob(a)) && ("" !== (k = c.getPropertyValue(b) || c[b]) || e.contains(a.ownerDocument, a) || (k = e.style(a, b)), !V.pixelBoxStyles() && Bb.test(k) && Uc.test(b) && (d = m.width, f = m.minWidth, g = m.maxWidth, m.minWidth = m.maxWidth = m.width = k, k = c.width, m.width = d, m.minWidth = f, m.maxWidth = g)), void 0 !== k ? k + "" : k;
  }
  function dc(a, b) {
    return {get:function() {
      if (!a()) {
        return (this.get = b).apply(this, arguments);
      }
      delete this.get;
    }};
  }
  function ec(a) {
    var b = e.cssProps[a];
    if (!b) {
      b = e.cssProps;
      a: {
        var c = a;
        if (!(c in fc)) {
          for (var d = c[0].toUpperCase() + c.slice(1), f = gc.length; f--;) {
            if ((c = gc[f] + d) in fc) {
              break a;
            }
          }
          c = void 0;
        }
      }
      b = b[a] = c || a;
    }
    return b;
  }
  function hc(a, b, c) {
    return (a = bb.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b;
  }
  function Cb(a, b, c, d, f, g) {
    var k = "width" === b ? 1 : 0, m = 0, n = 0;
    if (c === (d ? "border" : "content")) {
      return 0;
    }
    for (; 4 > k; k += 2) {
      "margin" === c && (n += e.css(a, c + Ca[k], !0, f)), d ? ("content" === c && (n -= e.css(a, "padding" + Ca[k], !0, f)), "margin" !== c && (n -= e.css(a, "border" + Ca[k] + "Width", !0, f))) : (n += e.css(a, "padding" + Ca[k], !0, f), "padding" !== c ? n += e.css(a, "border" + Ca[k] + "Width", !0, f) : m += e.css(a, "border" + Ca[k] + "Width", !0, f));
    }
    return !d && 0 <= g && (n += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - g - n - m - .5))), n;
  }
  function ic(a, b, c) {
    var d = ob(a), f = cb(a, b, d), g = "border-box" === e.css(a, "boxSizing", !1, d), k = g;
    if (Bb.test(f)) {
      if (!c) {
        return f;
      }
      f = "auto";
    }
    return k = k && (V.boxSizingReliable() || f === a.style[b]), ("auto" === f || !parseFloat(f) && "inline" === e.css(a, "display", !1, d)) && (f = a["offset" + b[0].toUpperCase() + b.slice(1)], k = !0), (f = parseFloat(f) || 0) + Cb(a, b, c || (g ? "border" : "content"), k, d, f) + "px";
  }
  function pa(a, b, c, d, f) {
    return new pa.prototype.init(a, b, c, d, f);
  }
  function Db() {
    pb && (!1 === P.hidden && G.requestAnimationFrame ? G.requestAnimationFrame(Db) : G.setTimeout(Db, e.fx.interval), e.fx.tick());
  }
  function jc() {
    return G.setTimeout(function() {
      Xa = void 0;
    }), Xa = Date.now();
  }
  function qb(a, b) {
    var c, d = 0, f = {height:a};
    for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      f["margin" + (c = Ca[d])] = f["padding" + c] = a;
    }
    return b && (f.opacity = f.width = a), f;
  }
  function kc(a, b, c) {
    for (var d, f = (ua.tweeners[b] || []).concat(ua.tweeners["*"]), g = 0, k = f.length; g < k; g++) {
      if (d = f[g].call(c, b, a)) {
        return d;
      }
    }
  }
  function Vc(a, b) {
    var c, d, f, g, k;
    for (c in a) {
      if (d = za(c), f = b[d], g = a[c], Array.isArray(g) && (f = g[1], g = a[c] = g[0]), c !== d && (a[d] = g, delete a[c]), (k = e.cssHooks[d]) && "expand" in k) {
        for (c in g = k.expand(g), delete a[d], g) {
          c in a || (a[c] = g[c], b[c] = f);
        }
      } else {
        b[d] = f;
      }
    }
  }
  function ua(a, b, c) {
    var d, f = 0, g = ua.prefilters.length, k = e.Deferred().always(function() {
      delete m.elem;
    }), m = function() {
      if (d) {
        return !1;
      }
      var t = Xa || jc();
      t = Math.max(0, n.startTime + n.duration - t);
      for (var q = 1 - (t / n.duration || 0), w = 0, z = n.tweens.length; w < z; w++) {
        n.tweens[w].run(q);
      }
      return k.notifyWith(a, [n, q, t]), 1 > q && z ? t : (z || k.notifyWith(a, [n, 1, 0]), k.resolveWith(a, [n]), !1);
    }, n = k.promise({elem:a, props:e.extend({}, b), opts:e.extend(!0, {specialEasing:{}, easing:e.easing._default}, c), originalProperties:b, originalOptions:c, startTime:Xa || jc(), duration:c.duration, tweens:[], createTween:function(t, q) {
      var w = e.Tween(a, n.opts, t, q, n.opts.specialEasing[t] || n.opts.easing);
      return n.tweens.push(w), w;
    }, stop:function(t) {
      var q = 0, w = t ? n.tweens.length : 0;
      if (d) {
        return this;
      }
      for (d = !0; q < w; q++) {
        n.tweens[q].run(1);
      }
      return t ? (k.notifyWith(a, [n, 1, 0]), k.resolveWith(a, [n, t])) : k.rejectWith(a, [n, t]), this;
    }});
    c = n.props;
    for (Vc(c, n.opts.specialEasing); f < g; f++) {
      if (b = ua.prefilters[f].call(n, a, c, n.opts)) {
        return J(b.stop) && (e._queueHooks(n.elem, n.opts.queue).stop = b.stop.bind(b)), b;
      }
    }
    return e.map(c, kc, n), J(n.opts.start) && n.opts.start.call(a, n), n.progress(n.opts.progress).done(n.opts.done, n.opts.complete).fail(n.opts.fail).always(n.opts.always), e.fx.timer(e.extend(m, {elem:a, anim:n, queue:n.opts.queue})), n;
  }
  function Ka(a) {
    return (a.match(ya) || []).join(" ");
  }
  function La(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }
  function Eb(a) {
    return Array.isArray(a) ? a : "string" == typeof a ? a.match(ya) || [] : [];
  }
  function Fb(a, b, c, d) {
    var f;
    if (Array.isArray(b)) {
      e.each(b, function(g, k) {
        c || Wc.test(a) ? d(a, k) : Fb(a + "[" + ("object" == typeof k && null != k ? g : "") + "]", k, c, d);
      });
    } else if (c || "object" !== Ra(b)) {
      d(a, b);
    } else {
      for (f in b) {
        Fb(a + "[" + f + "]", b[f], c, d);
      }
    }
  }
  function lc(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, f = 0, g = b.toLowerCase().match(ya) || [];
      if (J(c)) {
        for (; d = g[f++];) {
          "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        }
      }
    };
  }
  function mc(a, b, c, d) {
    function f(m) {
      var n;
      return g[m] = !0, e.each(a[m] || [], function(t, q) {
        var w = q(b, c, d);
        return "string" != typeof w || k || g[w] ? k ? !(n = w) : void 0 : (b.dataTypes.unshift(w), f(w), !1);
      }), n;
    }
    var g = {}, k = a === Gb;
    return f(b.dataTypes[0]) || !g["*"] && f("*");
  }
  function Hb(a, b) {
    var c, d, f = e.ajaxSettings.flatOptions || {};
    for (c in b) {
      void 0 !== b[c] && ((f[c] ? a : d || (d = {}))[c] = b[c]);
    }
    return d && e.extend(!0, a, d), a;
  }
  var Ma = [], P = G.document, Xc = Object.getPrototypeOf, Na = Ma.slice, bc = Ma.concat, Ib = Ma.push, jb = Ma.indexOf, ib = {}, Qb = ib.toString, rb = ib.hasOwnProperty, nc = rb.toString, Yc = nc.call(Object), V = {}, J = function(a) {
    return "function" == typeof a && "number" != typeof a.nodeType;
  }, Sa = function(a) {
    return null != a && a === a.window;
  }, Ic = {type:!0, src:!0, noModule:!0}, e = function(a, b) {
    return new e.fn.init(a, b);
  }, Zc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  e.fn = e.prototype = {jquery:"3.3.1", constructor:e, length:0, toArray:function() {
    return Na.call(this);
  }, get:function(a) {
    return null == a ? Na.call(this) : 0 > a ? this[a + this.length] : this[a];
  }, pushStack:function(a) {
    a = e.merge(this.constructor(), a);
    return a.prevObject = this, a;
  }, each:function(a) {
    return e.each(this, a);
  }, map:function(a) {
    return this.pushStack(e.map(this, function(b, c) {
      return a.call(b, c, b);
    }));
  }, slice:function() {
    return this.pushStack(Na.apply(this, arguments));
  }, first:function() {
    return this.eq(0);
  }, last:function() {
    return this.eq(-1);
  }, eq:function(a) {
    var b = this.length;
    a = +a + (0 > a ? b : 0);
    return this.pushStack(0 <= a && a < b ? [this[a]] : []);
  }, end:function() {
    return this.prevObject || this.constructor();
  }, push:Ib, sort:Ma.sort, splice:Ma.splice};
  e.extend = e.fn.extend = function() {
    var a, b, c, d, f, g = arguments[0] || {}, k = 1, m = arguments.length, n = !1;
    "boolean" == typeof g && (n = g, g = arguments[k] || {}, k++);
    "object" == typeof g || J(g) || (g = {});
    for (k === m && (g = this, k--); k < m; k++) {
      if (null != (a = arguments[k])) {
        for (b in a) {
          var t = g[b];
          g !== (c = a[b]) && (n && c && (e.isPlainObject(c) || (d = Array.isArray(c))) ? (d ? (d = !1, f = t && Array.isArray(t) ? t : []) : f = t && e.isPlainObject(t) ? t : {}, g[b] = e.extend(n, f, c)) : void 0 !== c && (g[b] = c));
        }
      }
    }
    return g;
  };
  e.extend({expando:"jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady:!0, error:function(a) {
    throw Error(a);
  }, noop:function() {
  }, isPlainObject:function(a) {
    var b, c;
    return !(!a || "[object Object]" !== Qb.call(a)) && (!(b = Xc(a)) || "function" == typeof(c = rb.call(b, "constructor") && b.constructor) && nc.call(c) === Yc);
  }, isEmptyObject:function(a) {
    for (var b in a) {
      return !1;
    }
    return !0;
  }, globalEval:function(a) {
    $a(a);
  }, each:function(a, b) {
    var c, d = 0;
    if (xb(a)) {
      for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++) {
      }
    } else {
      for (d in a) {
        if (!1 === b.call(a[d], d, a[d])) {
          break;
        }
      }
    }
    return a;
  }, trim:function(a) {
    return null == a ? "" : (a + "").replace(Zc, "");
  }, makeArray:function(a, b) {
    var c = b || [];
    return null != a && (xb(Object(a)) ? e.merge(c, "string" == typeof a ? [a] : a) : Ib.call(c, a)), c;
  }, inArray:function(a, b, c) {
    return null == b ? -1 : jb.call(b, a, c);
  }, merge:function(a, b) {
    for (var c = +b.length, d = 0, f = a.length; d < c; d++) {
      a[f++] = b[d];
    }
    return a.length = f, a;
  }, grep:function(a, b, c) {
    var d = [], f = 0, g = a.length;
    for (c = !c; f < g; f++) {
      !b(a[f], f) !== c && d.push(a[f]);
    }
    return d;
  }, map:function(a, b, c) {
    var d, f, g = 0, k = [];
    if (xb(a)) {
      for (d = a.length; g < d; g++) {
        null != (f = b(a[g], g, c)) && k.push(f);
      }
    } else {
      for (g in a) {
        null != (f = b(a[g], g, c)) && k.push(f);
      }
    }
    return bc.apply([], k);
  }, guid:1, support:V});
  "function" == typeof Symbol && (e.fn[Symbol.iterator] = Ma[Symbol.iterator]);
  e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
    ib["[object " + b + "]"] = b.toLowerCase();
  });
  var Qa = function(a) {
    function b(h, l, p, r) {
      var u, v, y, A, x = l && l.ownerDocument, C = l ? l.nodeType : 9;
      if (p = p || [], "string" != typeof h || !h || 1 !== C && 9 !== C && 11 !== C) {
        return p;
      }
      if (!r && ((l ? l.ownerDocument || l : Z) !== N && Oa(l), l = l || N, fa)) {
        if (11 !== C && (A = $c.exec(h))) {
          if (u = A[1]) {
            if (9 === C) {
              if (!(v = l.getElementById(u))) {
                return p;
              }
              if (v.id === u) {
                return p.push(v), p;
              }
            } else if (x && (v = x.getElementById(u)) && ca(l, v) && v.id === u) {
              return p.push(v), p;
            }
          } else {
            if (A[2]) {
              return Ha.apply(p, l.getElementsByTagName(h)), p;
            }
            if ((u = A[3]) && aa.getElementsByClassName && l.getElementsByClassName) {
              return Ha.apply(p, l.getElementsByClassName(u)), p;
            }
          }
        }
        if (!(!aa.qsa || Aa[h + " "] || S && S.test(h))) {
          if (1 !== C) {
            x = l;
            var E = h;
          } else if ("object" !== l.nodeName.toLowerCase()) {
            (y = l.getAttribute("id")) ? y = y.replace(oc, pc) : l.setAttribute("id", y = O);
            for (u = (v = sb(h)).length; u--;) {
              v[u] = "#" + y + " " + I(v[u]);
            }
            E = v.join(",");
            x = Jb.test(h) && w(l.parentNode) || l;
          }
          if (E) {
            try {
              return Ha.apply(p, x.querySelectorAll(E)), p;
            } catch (W) {
            } finally {
              y === O && l.removeAttribute("id");
            }
          }
        }
      }
      return L(h.replace(tb, "$1"), l, p, r);
    }
    function c() {
      function h(p, r) {
        return l.push(p + " ") > D.cacheLength && delete h[l.shift()], h[p + " "] = r;
      }
      var l = [];
      return h;
    }
    function d(h) {
      return h[O] = !0, h;
    }
    function f(h) {
      var l = N.createElement("fieldset");
      try {
        return !!h(l);
      } catch (p) {
        return !1;
      } finally {
        l.parentNode && l.parentNode.removeChild(l);
      }
    }
    function g(h, l) {
      for (var p = h.split("|"), r = p.length; r--;) {
        D.attrHandle[p[r]] = l;
      }
    }
    function k(h, l) {
      var p = l && h, r = p && 1 === h.nodeType && 1 === l.nodeType && h.sourceIndex - l.sourceIndex;
      if (r) {
        return r;
      }
      if (p) {
        for (; p = p.nextSibling;) {
          if (p === l) {
            return -1;
          }
        }
      }
      return h ? 1 : -1;
    }
    function m(h) {
      return function(l) {
        return "input" === l.nodeName.toLowerCase() && l.type === h;
      };
    }
    function n(h) {
      return function(l) {
        var p = l.nodeName.toLowerCase();
        return ("input" === p || "button" === p) && l.type === h;
      };
    }
    function t(h) {
      return function(l) {
        return "form" in l ? l.parentNode && !1 === l.disabled ? "label" in l ? "label" in l.parentNode ? l.parentNode.disabled === h : l.disabled === h : l.isDisabled === h || l.isDisabled !== !h && ad(l) === h : l.disabled === h : "label" in l && l.disabled === h;
      };
    }
    function q(h) {
      return d(function(l) {
        return l = +l, d(function(p, r) {
          for (var u, v = h([], p.length, l), y = v.length; y--;) {
            p[u = v[y]] && (p[u] = !(r[u] = p[u]));
          }
        });
      });
    }
    function w(h) {
      return h && "undefined" != typeof h.getElementsByTagName && h;
    }
    function z() {
    }
    function I(h) {
      for (var l = 0, p = h.length, r = ""; l < p; l++) {
        r += h[l].value;
      }
      return r;
    }
    function B(h, l, p) {
      var r = l.dir, u = l.next, v = u || r, y = p && "parentNode" === v, A = db++;
      return l.first ? function(x, C, E) {
        for (; x = x[r];) {
          if (1 === x.nodeType || y) {
            return h(x, C, E);
          }
        }
        return !1;
      } : function(x, C, E) {
        var W, Y, F, R = [T, A];
        if (E) {
          for (; x = x[r];) {
            if ((1 === x.nodeType || y) && h(x, C, E)) {
              return !0;
            }
          }
        } else {
          for (; x = x[r];) {
            if (1 === x.nodeType || y) {
              if (F = x[O] || (x[O] = {}), Y = F[x.uniqueID] || (F[x.uniqueID] = {}), u && u === x.nodeName.toLowerCase()) {
                x = x[r] || x;
              } else {
                if ((W = Y[v]) && W[0] === T && W[1] === A) {
                  return R[2] = W[2];
                }
                if (Y[v] = R, R[2] = h(x, C, E)) {
                  return !0;
                }
              }
            }
          }
        }
        return !1;
      };
    }
    function M(h) {
      return 1 < h.length ? function(l, p, r) {
        for (var u = h.length; u--;) {
          if (!h[u](l, p, r)) {
            return !1;
          }
        }
        return !0;
      } : h[0];
    }
    function da(h, l, p, r, u) {
      for (var v, y = [], A = 0, x = h.length, C = null != l; A < x; A++) {
        (v = h[A]) && (p && !p(v, r, u) || (y.push(v), C && l.push(A)));
      }
      return y;
    }
    function va(h, l, p, r, u, v) {
      return r && !r[O] && (r = va(r)), u && !u[O] && (u = va(u, v)), d(function(y, A, x, C) {
        var E, W = [], Y = [], F = A.length, R;
        if (!(R = y)) {
          R = l || "*";
          for (var Q = x.nodeType ? [x] : x, Ia = [], Ba = 0, ha = Q.length; Ba < ha; Ba++) {
            b(R, Q[Ba], Ia);
          }
          R = Ia;
        }
        R = !h || !y && l ? R : da(R, W, h, x, C);
        Q = p ? u || (y ? h : F || r) ? [] : A : R;
        if (p && p(R, Q, x, C), r) {
          var ja = da(Q, Y);
          r(ja, [], x, C);
          for (x = ja.length; x--;) {
            (E = ja[x]) && (Q[Y[x]] = !(R[Y[x]] = E));
          }
        }
        if (y) {
          if (u || h) {
            if (u) {
              ja = [];
              for (x = Q.length; x--;) {
                (E = Q[x]) && ja.push(R[x] = E);
              }
              u(null, Q = [], ja, C);
            }
            for (x = Q.length; x--;) {
              (E = Q[x]) && -1 < (ja = u ? Pa(y, E) : W[x]) && (y[ja] = !(A[ja] = E));
            }
          }
        } else {
          Q = da(Q === A ? Q.splice(F, Q.length) : Q), u ? u(null, A, Q, C) : Ha.apply(A, Q);
        }
      });
    }
    function ea(h) {
      var l, p, r = h.length, u = D.relative[h[0].type];
      var v = u || D.relative[" "];
      for (var y = u ? 1 : 0, A = B(function(E) {
        return E === l;
      }, v, !0), x = B(function(E) {
        return -1 < Pa(l, E);
      }, v, !0), C = [function(E, W, Y) {
        E = !u && (Y || W !== ba) || ((l = W).nodeType ? A(E, W, Y) : x(E, W, Y));
        return l = null, E;
      }]; y < r; y++) {
        if (v = D.relative[h[y].type]) {
          C = [B(M(C), v)];
        } else {
          if ((v = D.filter[h[y].type].apply(null, h[y].matches))[O]) {
            for (p = ++y; p < r && !D.relative[h[p].type]; p++) {
            }
            return va(1 < y && M(C), 1 < y && I(h.slice(0, y - 1).concat({value:" " === h[y - 2].type ? "*" : ""})).replace(tb, "$1"), v, y < p && ea(h.slice(y, p)), p < r && ea(h = h.slice(p)), p < r && I(h));
          }
          C.push(v);
        }
      }
      return M(C);
    }
    function K(h, l) {
      var p = 0 < l.length, r = 0 < h.length, u = function(v, y, A, x, C) {
        var E, W, Y = 0, F = "0", R = v && [], Q = [], Ia = ba, Ba = v || r && D.find.TAG("*", C), ha = T += null == Ia ? 1 : Math.random() || .1, ja = Ba.length;
        for (C && (ba = y === N || y || C); F !== ja && null != (E = Ba[F]); F++) {
          if (r && E) {
            var Kb = 0;
            for (y || E.ownerDocument === N || (Oa(E), A = !fa); W = h[Kb++];) {
              if (W(E, y || N, A)) {
                x.push(E);
                break;
              }
            }
            C && (T = ha);
          }
          p && ((E = !W && E) && Y--, v && R.push(E));
        }
        if (Y += F, p && F !== Y) {
          for (Kb = 0; W = l[Kb++];) {
            W(R, Q, y, A);
          }
          if (v) {
            if (0 < Y) {
              for (; F--;) {
                R[F] || Q[F] || (Q[F] = bd.call(x));
              }
            }
            Q = da(Q);
          }
          Ha.apply(x, Q);
          C && !v && 0 < Q.length && 1 < Y + l.length && b.uniqueSort(x);
        }
        return C && (T = ha, ba = Ia), R;
      };
      return p ? d(u) : u;
    }
    var ra, D, ka, L, ba, X, la, N, ia, fa, S, U, wa, ca, O = "sizzle" + 1 * new Date(), Z = a.document, T = 0, db = 0, sa = c(), ma = c(), Aa = c(), ta = function(h, l) {
      return h === l && (la = !0), 0;
    }, Ja = {}.hasOwnProperty, Da = [], bd = Da.pop, cd = Da.push, Ha = Da.push, qc = Da.slice, Pa = function(h, l) {
      for (var p = 0, r = h.length; p < r; p++) {
        if (h[p] === l) {
          return p;
        }
      }
      return -1;
    }, dd = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), tb = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), ed = RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"), fd = RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"), gd = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), hd = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"), 
    id = RegExp("^(?:\\\\.|[\\w-]|[^\x00-\\xa0])+$"), ub = {ID:RegExp("^#((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)"), CLASS:RegExp("^\\.((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)"), TAG:RegExp("^((?:\\\\.|[\\w-]|[^\x00-\\xa0])+|[*])"), ATTR:RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"), PSEUDO:RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"), 
    CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), bool:RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext:RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", 
    "i")}, jd = /^(?:input|select|textarea|button)$/i, kd = /^h\d$/i, eb = /^[^{]+\{\s*\[native \w/, $c = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Jb = /[+~]/, Ea = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), Fa = function(h, l, p) {
      h = "0x" + l - 65536;
      return h !== h || p ? l : 0 > h ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, 1023 & h | 56320);
    }, oc = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pc = function(h, l) {
      return l ? "\x00" === h ? "\ufffd" : h.slice(0, -1) + "\\" + h.charCodeAt(h.length - 1).toString(16) + " " : "\\" + h;
    }, rc = function() {
      Oa();
    }, ad = B(function(h) {
      return !0 === h.disabled && ("form" in h || "label" in h);
    }, {dir:"parentNode", next:"legend"});
    try {
      Ha.apply(Da = qc.call(Z.childNodes), Z.childNodes), Da[Z.childNodes.length].nodeType;
    } catch (h) {
      Ha = {apply:Da.length ? function(l, p) {
        cd.apply(l, qc.call(p));
      } : function(l, p) {
        for (var r = l.length, u = 0; l[r++] = p[u++];) {
        }
        l.length = r - 1;
      }};
    }
    var aa = b.support = {};
    var ld = b.isXML = function(h) {
      h = h && (h.ownerDocument || h).documentElement;
      return !!h && "HTML" !== h.nodeName;
    };
    var Oa = b.setDocument = function(h) {
      var l, p;
      h = h ? h.ownerDocument || h : Z;
      return h !== N && 9 === h.nodeType && h.documentElement ? (N = h, ia = N.documentElement, fa = !ld(N), Z !== N && (p = N.defaultView) && p.top !== p && (p.addEventListener ? p.addEventListener("unload", rc, !1) : p.attachEvent && p.attachEvent("onunload", rc)), aa.attributes = f(function(r) {
        return r.className = "i", !r.getAttribute("className");
      }), aa.getElementsByTagName = f(function(r) {
        return r.appendChild(N.createComment("")), !r.getElementsByTagName("*").length;
      }), aa.getElementsByClassName = eb.test(N.getElementsByClassName), aa.getById = f(function(r) {
        return ia.appendChild(r).id = O, !N.getElementsByName || !N.getElementsByName(O).length;
      }), aa.getById ? (D.filter.ID = function(r) {
        var u = r.replace(Ea, Fa);
        return function(v) {
          return v.getAttribute("id") === u;
        };
      }, D.find.ID = function(r, u) {
        if ("undefined" != typeof u.getElementById && fa) {
          var v = u.getElementById(r);
          return v ? [v] : [];
        }
      }) : (D.filter.ID = function(r) {
        var u = r.replace(Ea, Fa);
        return function(v) {
          return (v = "undefined" != typeof v.getAttributeNode && v.getAttributeNode("id")) && v.value === u;
        };
      }, D.find.ID = function(r, u) {
        if ("undefined" != typeof u.getElementById && fa) {
          var v, y, A = u.getElementById(r);
          if (A) {
            if ((v = A.getAttributeNode("id")) && v.value === r) {
              return [A];
            }
            var x = u.getElementsByName(r);
            for (y = 0; A = x[y++];) {
              if ((v = A.getAttributeNode("id")) && v.value === r) {
                return [A];
              }
            }
          }
          return [];
        }
      }), D.find.TAG = aa.getElementsByTagName ? function(r, u) {
        return "undefined" != typeof u.getElementsByTagName ? u.getElementsByTagName(r) : aa.qsa ? u.querySelectorAll(r) : void 0;
      } : function(r, u) {
        var v, y = [], A = 0, x = u.getElementsByTagName(r);
        if ("*" === r) {
          for (; v = x[A++];) {
            1 === v.nodeType && y.push(v);
          }
          return y;
        }
        return x;
      }, D.find.CLASS = aa.getElementsByClassName && function(r, u) {
        if ("undefined" != typeof u.getElementsByClassName && fa) {
          return u.getElementsByClassName(r);
        }
      }, U = [], S = [], (aa.qsa = eb.test(N.querySelectorAll)) && (f(function(r) {
        ia.appendChild(r).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>";
        r.querySelectorAll("[msallowcapture^='']").length && S.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
        r.querySelectorAll("[selected]").length || S.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
        r.querySelectorAll("[id~=" + O + "-]").length || S.push("~=");
        r.querySelectorAll(":checked").length || S.push(":checked");
        r.querySelectorAll("a#" + O + "+*").length || S.push(".#.+[+~]");
      }), f(function(r) {
        r.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var u = N.createElement("input");
        u.setAttribute("type", "hidden");
        r.appendChild(u).setAttribute("name", "D");
        r.querySelectorAll("[name=d]").length && S.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
        2 !== r.querySelectorAll(":enabled").length && S.push(":enabled", ":disabled");
        ia.appendChild(r).disabled = !0;
        2 !== r.querySelectorAll(":disabled").length && S.push(":enabled", ":disabled");
        r.querySelectorAll("*,:x");
        S.push(",.*:");
      })), (aa.matchesSelector = eb.test(wa = ia.matches || ia.webkitMatchesSelector || ia.mozMatchesSelector || ia.oMatchesSelector || ia.msMatchesSelector)) && f(function(r) {
        aa.disconnectedMatch = wa.call(r, "*");
        wa.call(r, "[s!='']:x");
        U.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
      }), S = S.length && new RegExp(S.join("|")), U = U.length && new RegExp(U.join("|")), l = eb.test(ia.compareDocumentPosition), ca = l || eb.test(ia.contains) ? function(r, u) {
        var v = 9 === r.nodeType ? r.documentElement : r, y = u && u.parentNode;
        return r === y || !(!y || 1 !== y.nodeType || !(v.contains ? v.contains(y) : r.compareDocumentPosition && 16 & r.compareDocumentPosition(y)));
      } : function(r, u) {
        if (u) {
          for (; u = u.parentNode;) {
            if (u === r) {
              return !0;
            }
          }
        }
        return !1;
      }, ta = l ? function(r, u) {
        if (r === u) {
          return la = !0, 0;
        }
        var v = !r.compareDocumentPosition - !u.compareDocumentPosition;
        return v || (1 & (v = (r.ownerDocument || r) === (u.ownerDocument || u) ? r.compareDocumentPosition(u) : 1) || !aa.sortDetached && u.compareDocumentPosition(r) === v ? r === N || r.ownerDocument === Z && ca(Z, r) ? -1 : u === N || u.ownerDocument === Z && ca(Z, u) ? 1 : X ? Pa(X, r) - Pa(X, u) : 0 : 4 & v ? -1 : 1);
      } : function(r, u) {
        if (r === u) {
          return la = !0, 0;
        }
        var v = 0;
        var y = r.parentNode;
        var A = u.parentNode, x = [r], C = [u];
        if (!y || !A) {
          return r === N ? -1 : u === N ? 1 : y ? -1 : A ? 1 : X ? Pa(X, r) - Pa(X, u) : 0;
        }
        if (y === A) {
          return k(r, u);
        }
        for (y = r; y = y.parentNode;) {
          x.unshift(y);
        }
        for (y = u; y = y.parentNode;) {
          C.unshift(y);
        }
        for (; x[v] === C[v];) {
          v++;
        }
        return v ? k(x[v], C[v]) : x[v] === Z ? -1 : C[v] === Z ? 1 : 0;
      }, N) : N;
    };
    b.matches = function(h, l) {
      return b(h, null, null, l);
    };
    b.matchesSelector = function(h, l) {
      if ((h.ownerDocument || h) !== N && Oa(h), l = l.replace(gd, "='$1']"), !(!aa.matchesSelector || !fa || Aa[l + " "] || U && U.test(l) || S && S.test(l))) {
        try {
          var p = wa.call(h, l);
          if (p || aa.disconnectedMatch || h.document && 11 !== h.document.nodeType) {
            return p;
          }
        } catch (r) {
        }
      }
      return 0 < b(l, N, null, [h]).length;
    };
    b.contains = function(h, l) {
      return (h.ownerDocument || h) !== N && Oa(h), ca(h, l);
    };
    b.attr = function(h, l) {
      (h.ownerDocument || h) !== N && Oa(h);
      var p = D.attrHandle[l.toLowerCase()];
      p = p && Ja.call(D.attrHandle, l.toLowerCase()) ? p(h, l, !fa) : void 0;
      return void 0 !== p ? p : aa.attributes || !fa ? h.getAttribute(l) : (p = h.getAttributeNode(l)) && p.specified ? p.value : null;
    };
    b.escape = function(h) {
      return (h + "").replace(oc, pc);
    };
    b.error = function(h) {
      throw Error("Syntax error, unrecognized expression: " + h);
    };
    b.uniqueSort = function(h) {
      var l, p = [], r = 0, u = 0;
      if (la = !aa.detectDuplicates, X = !aa.sortStable && h.slice(0), h.sort(ta), la) {
        for (; l = h[u++];) {
          l === h[u] && (r = p.push(u));
        }
        for (; r--;) {
          h.splice(p[r], 1);
        }
      }
      return X = null, h;
    };
    var Lb = b.getText = function(h) {
      var l, p = "", r = 0;
      if (l = h.nodeType) {
        if (1 === l || 9 === l || 11 === l) {
          if ("string" == typeof h.textContent) {
            return h.textContent;
          }
          for (h = h.firstChild; h; h = h.nextSibling) {
            p += Lb(h);
          }
        } else if (3 === l || 4 === l) {
          return h.nodeValue;
        }
      } else {
        for (; l = h[r++];) {
          p += Lb(l);
        }
      }
      return p;
    };
    (D = b.selectors = {cacheLength:50, createPseudo:d, match:ub, attrHandle:{}, find:{}, relative:{">":{dir:"parentNode", first:!0}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:!0}, "~":{dir:"previousSibling"}}, preFilter:{ATTR:function(h) {
      return h[1] = h[1].replace(Ea, Fa), h[3] = (h[3] || h[4] || h[5] || "").replace(Ea, Fa), "~=" === h[2] && (h[3] = " " + h[3] + " "), h.slice(0, 4);
    }, CHILD:function(h) {
      return h[1] = h[1].toLowerCase(), "nth" === h[1].slice(0, 3) ? (h[3] || b.error(h[0]), h[4] = +(h[4] ? h[5] + (h[6] || 1) : 2 * ("even" === h[3] || "odd" === h[3])), h[5] = +(h[7] + h[8] || "odd" === h[3])) : h[3] && b.error(h[0]), h;
    }, PSEUDO:function(h) {
      var l, p = !h[6] && h[2];
      return ub.CHILD.test(h[0]) ? null : (h[3] ? h[2] = h[4] || h[5] || "" : p && hd.test(p) && (l = sb(p, !0)) && (l = p.indexOf(")", p.length - l) - p.length) && (h[0] = h[0].slice(0, l), h[2] = p.slice(0, l)), h.slice(0, 3));
    }}, filter:{TAG:function(h) {
      var l = h.replace(Ea, Fa).toLowerCase();
      return "*" === h ? function() {
        return !0;
      } : function(p) {
        return p.nodeName && p.nodeName.toLowerCase() === l;
      };
    }, CLASS:function(h) {
      var l = sa[h + " "];
      return l || (l = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + h + "([\\x20\\t\\r\\n\\f]|$)"), sa(h, function(p) {
        return l.test("string" == typeof p.className && p.className || "undefined" != typeof p.getAttribute && p.getAttribute("class") || "");
      }));
    }, ATTR:function(h, l, p) {
      return function(r) {
        r = b.attr(r, h);
        return null == r ? "!=" === l : !l || (r += "", "=" === l ? r === p : "!=" === l ? r !== p : "^=" === l ? p && 0 === r.indexOf(p) : "*=" === l ? p && -1 < r.indexOf(p) : "$=" === l ? p && r.slice(-p.length) === p : "~=" === l ? -1 < (" " + r.replace(dd, " ") + " ").indexOf(p) : "|=" === l && (r === p || r.slice(0, p.length + 1) === p + "-"));
      };
    }, CHILD:function(h, l, p, r, u) {
      var v = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), A = "of-type" === l;
      return 1 === r && 0 === u ? function(x) {
        return !!x.parentNode;
      } : function(x, C, E) {
        var W, Y, F, R;
        C = v !== y ? "nextSibling" : "previousSibling";
        var Q = x.parentNode, Ia = A && x.nodeName.toLowerCase(), Ba = !E && !A, ha = !1;
        if (Q) {
          if (v) {
            for (; C;) {
              for (F = x; F = F[C];) {
                if (A ? F.nodeName.toLowerCase() === Ia : 1 === F.nodeType) {
                  return !1;
                }
              }
              var ja = C = "only" === h && !ja && "nextSibling";
            }
            return !0;
          }
          if (ja = [y ? Q.firstChild : Q.lastChild], y && Ba) {
            for (ha = (R = (W = (E = (Y = (F = Q)[O] || (F[O] = {}))[F.uniqueID] || (Y[F.uniqueID] = {}))[h] || [])[0] === T && W[1]) && W[2], F = R && Q.childNodes[R]; F = ++R && F && F[C] || (ha = R = 0) || ja.pop();) {
              if (1 === F.nodeType && ++ha && F === x) {
                E[h] = [T, R, ha];
                break;
              }
            }
          } else if (Ba && (ha = R = (W = ((Y = (F = x)[O] || (F[O] = {}))[F.uniqueID] || (Y[F.uniqueID] = {}))[h] || [])[0] === T && W[1]), !1 === ha) {
            for (; (F = ++R && F && F[C] || (ha = R = 0) || ja.pop()) && ((A ? F.nodeName.toLowerCase() !== Ia : 1 !== F.nodeType) || !++ha || (Ba && ((E = (Y = F[O] || (F[O] = {}))[F.uniqueID] || (Y[F.uniqueID] = {}))[h] = [T, ha]), F !== x));) {
            }
          }
          return (ha -= u) === r || 0 == ha % r && 0 <= ha / r;
        }
      };
    }, PSEUDO:function(h, l) {
      var p, r = D.pseudos[h] || D.setFilters[h.toLowerCase()] || b.error("unsupported pseudo: " + h);
      return r[O] ? r(l) : 1 < r.length ? (p = [h, h, "", l], D.setFilters.hasOwnProperty(h.toLowerCase()) ? d(function(u, v) {
        for (var y, A = r(u, l), x = A.length; x--;) {
          u[y = Pa(u, A[x])] = !(v[y] = A[x]);
        }
      }) : function(u) {
        return r(u, 0, p);
      }) : r;
    }}, pseudos:{not:d(function(h) {
      var l = [], p = [], r = ka(h.replace(tb, "$1"));
      return r[O] ? d(function(u, v, y, A) {
        var x;
        y = r(u, null, A, []);
        for (A = u.length; A--;) {
          (x = y[A]) && (u[A] = !(v[A] = x));
        }
      }) : function(u, v, y) {
        return l[0] = u, r(l, null, y, p), l[0] = null, !p.pop();
      };
    }), has:d(function(h) {
      return function(l) {
        return 0 < b(h, l).length;
      };
    }), contains:d(function(h) {
      return h = h.replace(Ea, Fa), function(l) {
        return -1 < (l.textContent || l.innerText || Lb(l)).indexOf(h);
      };
    }), lang:d(function(h) {
      return id.test(h || "") || b.error("unsupported lang: " + h), h = h.replace(Ea, Fa).toLowerCase(), function(l) {
        var p;
        do {
          if (p = fa ? l.lang : l.getAttribute("xml:lang") || l.getAttribute("lang")) {
            return (p = p.toLowerCase()) === h || 0 === p.indexOf(h + "-");
          }
        } while ((l = l.parentNode) && 1 === l.nodeType);
        return !1;
      };
    }), target:function(h) {
      var l = a.location && a.location.hash;
      return l && l.slice(1) === h.id;
    }, root:function(h) {
      return h === ia;
    }, focus:function(h) {
      return h === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(h.type || h.href || ~h.tabIndex);
    }, enabled:t(!1), disabled:t(!0), checked:function(h) {
      var l = h.nodeName.toLowerCase();
      return "input" === l && !!h.checked || "option" === l && !!h.selected;
    }, selected:function(h) {
      return h.parentNode && h.parentNode.selectedIndex, !0 === h.selected;
    }, empty:function(h) {
      for (h = h.firstChild; h; h = h.nextSibling) {
        if (6 > h.nodeType) {
          return !1;
        }
      }
      return !0;
    }, parent:function(h) {
      return !D.pseudos.empty(h);
    }, header:function(h) {
      return kd.test(h.nodeName);
    }, input:function(h) {
      return jd.test(h.nodeName);
    }, button:function(h) {
      var l = h.nodeName.toLowerCase();
      return "input" === l && "button" === h.type || "button" === l;
    }, text:function(h) {
      var l;
      return "input" === h.nodeName.toLowerCase() && "text" === h.type && (null == (l = h.getAttribute("type")) || "text" === l.toLowerCase());
    }, first:q(function() {
      return [0];
    }), last:q(function(h, l) {
      return [l - 1];
    }), eq:q(function(h, l, p) {
      return [0 > p ? p + l : p];
    }), even:q(function(h, l) {
      for (var p = 0; p < l; p += 2) {
        h.push(p);
      }
      return h;
    }), odd:q(function(h, l) {
      for (var p = 1; p < l; p += 2) {
        h.push(p);
      }
      return h;
    }), lt:q(function(h, l, p) {
      for (l = 0 > p ? p + l : p; 0 <= --l;) {
        h.push(l);
      }
      return h;
    }), gt:q(function(h, l, p) {
      for (p = 0 > p ? p + l : p; ++p < l;) {
        h.push(p);
      }
      return h;
    })}}).pseudos.nth = D.pseudos.eq;
    for (ra in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0}) {
      D.pseudos[ra] = m(ra);
    }
    for (ra in{submit:!0, reset:!0}) {
      D.pseudos[ra] = n(ra);
    }
    z.prototype = D.filters = D.pseudos;
    D.setFilters = new z();
    var sb = b.tokenize = function(h, l) {
      var p, r, u, v, y;
      if (v = ma[h + " "]) {
        return l ? 0 : v.slice(0);
      }
      v = h;
      var A = [];
      for (y = D.preFilter; v;) {
        x && !(p = ed.exec(v)) || (p && (v = v.slice(p[0].length) || v), A.push(r = []));
        var x = !1;
        (p = fd.exec(v)) && (x = p.shift(), r.push({value:x, type:p[0].replace(tb, " ")}), v = v.slice(x.length));
        for (u in D.filter) {
          !(p = ub[u].exec(v)) || y[u] && !(p = y[u](p)) || (x = p.shift(), r.push({value:x, type:u, matches:p}), v = v.slice(x.length));
        }
        if (!x) {
          break;
        }
      }
      return l ? v.length : v ? b.error(h) : ma(h, A).slice(0);
    };
    return ka = b.compile = function(h, l) {
      var p, r = [], u = [], v = Aa[h + " "];
      if (!v) {
        l || (l = sb(h));
        for (p = l.length; p--;) {
          (v = ea(l[p]))[O] ? r.push(v) : u.push(v);
        }
        (v = Aa(h, K(u, r))).selector = h;
      }
      return v;
    }, L = b.select = function(h, l, p, r) {
      var u, v, y, A, x, C = "function" == typeof h && h, E = !r && sb(h = C.selector || h);
      if (p = p || [], 1 === E.length) {
        if (2 < (v = E[0] = E[0].slice(0)).length && "ID" === (y = v[0]).type && 9 === l.nodeType && fa && D.relative[v[1].type]) {
          if (!(l = (D.find.ID(y.matches[0].replace(Ea, Fa), l) || [])[0])) {
            return p;
          }
          C && (l = l.parentNode);
          h = h.slice(v.shift().value.length);
        }
        for (u = ub.needsContext.test(h) ? 0 : v.length; u-- && (y = v[u], !D.relative[A = y.type]);) {
          if ((x = D.find[A]) && (r = x(y.matches[0].replace(Ea, Fa), Jb.test(v[0].type) && w(l.parentNode) || l))) {
            if (v.splice(u, 1), !(h = r.length && I(v))) {
              return Ha.apply(p, r), p;
            }
            break;
          }
        }
      }
      return (C || ka(h, E))(r, l, !fa, p, !l || Jb.test(h) && w(l.parentNode) || l), p;
    }, aa.sortStable = O.split("").sort(ta).join("") === O, aa.detectDuplicates = !!la, Oa(), aa.sortDetached = f(function(h) {
      return 1 & h.compareDocumentPosition(N.createElement("fieldset"));
    }), f(function(h) {
      return h.innerHTML = "<a href='#'></a>", "#" === h.firstChild.getAttribute("href");
    }) || g("type|href|height|width", function(h, l, p) {
      if (!p) {
        return h.getAttribute(l, "type" === l.toLowerCase() ? 1 : 2);
      }
    }), aa.attributes && f(function(h) {
      return h.innerHTML = "<input/>", h.firstChild.setAttribute("value", ""), "" === h.firstChild.getAttribute("value");
    }) || g("value", function(h, l, p) {
      if (!p && "input" === h.nodeName.toLowerCase()) {
        return h.defaultValue;
      }
    }), f(function(h) {
      return null == h.getAttribute("disabled");
    }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(h, l, p) {
      var r;
      if (!p) {
        return !0 === h[l] ? l.toLowerCase() : (r = h.getAttributeNode(l)) && r.specified ? r.value : null;
      }
    }), b;
  }(G);
  e.find = Qa;
  e.expr = Qa.selectors;
  e.expr[":"] = e.expr.pseudos;
  e.uniqueSort = e.unique = Qa.uniqueSort;
  e.text = Qa.getText;
  e.isXMLDoc = Qa.isXML;
  e.contains = Qa.contains;
  e.escapeSelector = Qa.escape;
  var Ya = function(a, b, c) {
    for (var d = [], f = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;) {
      if (1 === a.nodeType) {
        if (f && e(a).is(c)) {
          break;
        }
        d.push(a);
      }
    }
    return d;
  }, sc = function(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }
    return c;
  }, tc = e.expr.match.needsContext, uc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  e.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? e.find.matchesSelector(d, a) ? [d] : [] : e.find.matches(a, e.grep(b, function(f) {
      return 1 === f.nodeType;
    }));
  };
  e.fn.extend({find:function(a) {
    var b, c = this.length, d = this;
    if ("string" != typeof a) {
      return this.pushStack(e(a).filter(function() {
        for (b = 0; b < c; b++) {
          if (e.contains(d[b], this)) {
            return !0;
          }
        }
      }));
    }
    var f = this.pushStack([]);
    for (b = 0; b < c; b++) {
      e.find(a, d[b], f);
    }
    return 1 < c ? e.uniqueSort(f) : f;
  }, filter:function(a) {
    return this.pushStack(yb(this, a || [], !1));
  }, not:function(a) {
    return this.pushStack(yb(this, a || [], !0));
  }, is:function(a) {
    return !!yb(this, "string" == typeof a && tc.test(a) ? e(a) : a || [], !1).length;
  }});
  var md = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (e.fn.init = function(a, b, c) {
    var d, f;
    if (!a) {
      return this;
    }
    if (c = c || nd, "string" == typeof a) {
      if (!(d = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : md.exec(a)) || !d[1] && b) {
        return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
      }
      if (d[1]) {
        if (b = b instanceof e ? b[0] : b, e.merge(this, e.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : P, !0)), uc.test(d[1]) && e.isPlainObject(b)) {
          for (d in b) {
            J(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
          }
        }
        return this;
      }
      return (f = P.getElementById(d[2])) && (this[0] = f, this.length = 1), this;
    }
    return a.nodeType ? (this[0] = a, this.length = 1, this) : J(a) ? void 0 !== c.ready ? c.ready(a) : a(e) : e.makeArray(a, this);
  }).prototype = e.fn;
  var nd = e(P);
  var od = /^(?:parents|prev(?:Until|All))/, pd = {children:!0, contents:!0, next:!0, prev:!0};
  e.fn.extend({has:function(a) {
    var b = e(a, this), c = b.length;
    return this.filter(function() {
      for (var d = 0; d < c; d++) {
        if (e.contains(this, b[d])) {
          return !0;
        }
      }
    });
  }, closest:function(a, b) {
    var c, d = 0, f = this.length, g = [], k = "string" != typeof a && e(a);
    if (!tc.test(a)) {
      for (; d < f; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (11 > c.nodeType && (k ? -1 < k.index(c) : 1 === c.nodeType && e.find.matchesSelector(c, a))) {
            g.push(c);
            break;
          }
        }
      }
    }
    return this.pushStack(1 < g.length ? e.uniqueSort(g) : g);
  }, index:function(a) {
    return a ? "string" == typeof a ? jb.call(e(a), this[0]) : jb.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add:function(a, b) {
    return this.pushStack(e.uniqueSort(e.merge(this.get(), e(a, b))));
  }, addBack:function(a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
  }});
  e.each({parent:function(a) {
    return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
  }, parents:function(a) {
    return Ya(a, "parentNode");
  }, parentsUntil:function(a, b, c) {
    return Ya(a, "parentNode", c);
  }, next:function(a) {
    return Rb(a, "nextSibling");
  }, prev:function(a) {
    return Rb(a, "previousSibling");
  }, nextAll:function(a) {
    return Ya(a, "nextSibling");
  }, prevAll:function(a) {
    return Ya(a, "previousSibling");
  }, nextUntil:function(a, b, c) {
    return Ya(a, "nextSibling", c);
  }, prevUntil:function(a, b, c) {
    return Ya(a, "previousSibling", c);
  }, siblings:function(a) {
    return sc((a.parentNode || {}).firstChild, a);
  }, children:function(a) {
    return sc(a.firstChild);
  }, contents:function(a) {
    return xa(a, "iframe") ? a.contentDocument : (xa(a, "template") && (a = a.content || a), e.merge([], a.childNodes));
  }}, function(a, b) {
    e.fn[a] = function(c, d) {
      var f = e.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (f = e.filter(d, f)), 1 < this.length && (pd[a] || e.uniqueSort(f), od.test(a) && f.reverse()), this.pushStack(f);
    };
  });
  var ya = /[^\x20\t\r\n\f]+/g;
  e.Callbacks = function(a) {
    a = "string" == typeof a ? Jc(a) : e.extend({}, a);
    var b, c, d, f, g = [], k = [], m = -1, n = function() {
      f = f || a.once;
      for (d = b = !0; k.length; m = -1) {
        for (c = k.shift(); ++m < g.length;) {
          !1 === g[m].apply(c[0], c[1]) && a.stopOnFalse && (m = g.length, c = !1);
        }
      }
      a.memory || (c = !1);
      b = !1;
      f && (g = c ? [] : "");
    }, t = {add:function() {
      return g && (c && !b && (m = g.length - 1, k.push(c)), function z(w) {
        e.each(w, function(I, B) {
          J(B) ? a.unique && t.has(B) || g.push(B) : B && B.length && "string" !== Ra(B) && z(B);
        });
      }(arguments), c && !b && n()), this;
    }, remove:function() {
      return e.each(arguments, function(q, w) {
        for (var z; -1 < (z = e.inArray(w, g, z));) {
          g.splice(z, 1), z <= m && m--;
        }
      }), this;
    }, has:function(q) {
      return q ? -1 < e.inArray(q, g) : 0 < g.length;
    }, empty:function() {
      return g && (g = []), this;
    }, disable:function() {
      return f = k = [], g = c = "", this;
    }, disabled:function() {
      return !g;
    }, lock:function() {
      return f = k = [], c || b || (g = c = ""), this;
    }, locked:function() {
      return !!f;
    }, fireWith:function(q, w) {
      return f || (w = [q, (w = w || []).slice ? w.slice() : w], k.push(w), b || n()), this;
    }, fire:function() {
      return t.fireWith(this, arguments), this;
    }, fired:function() {
      return !!d;
    }};
    return t;
  };
  e.extend({Deferred:function(a) {
    var b = [["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory"), 2], ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), 1, "rejected"]], c = "pending", d = {state:function() {
      return c;
    }, always:function() {
      return f.done(arguments).fail(arguments), this;
    }, "catch":function(g) {
      return d.then(null, g);
    }, pipe:function() {
      var g = arguments;
      return e.Deferred(function(k) {
        e.each(b, function(m, n) {
          var t = J(g[n[4]]) && g[n[4]];
          f[n[1]](function() {
            var q = t && t.apply(this, arguments);
            q && J(q.promise) ? q.promise().progress(k.notify).done(k.resolve).fail(k.reject) : k[n[0] + "With"](this, t ? [q] : arguments);
          });
        });
        g = null;
      }).promise();
    }, then:function(g, k, m) {
      function n(q, w, z, I) {
        return function() {
          var B = this, M = arguments, da = function() {
            var ea;
            if (!(q < t)) {
              if ((ea = z.apply(B, M)) === w.promise()) {
                throw new TypeError("Thenable self-resolution");
              }
              var K = ea && ("object" == typeof ea || "function" == typeof ea) && ea.then;
              J(K) ? I ? K.call(ea, n(t, w, Ta, I), n(t, w, kb, I)) : (t++, K.call(ea, n(t, w, Ta, I), n(t, w, kb, I), n(t, w, Ta, w.notifyWith))) : (z !== Ta && (B = void 0, M = [ea]), (I || w.resolveWith)(B, M));
            }
          }, va = I ? da : function() {
            try {
              da();
            } catch (ea) {
              e.Deferred.exceptionHook && e.Deferred.exceptionHook(ea, va.stackTrace), q + 1 >= t && (z !== kb && (B = void 0, M = [ea]), w.rejectWith(B, M));
            }
          };
          q ? va() : (e.Deferred.getStackHook && (va.stackTrace = e.Deferred.getStackHook()), G.setTimeout(va));
        };
      }
      var t = 0;
      return e.Deferred(function(q) {
        b[0][3].add(n(0, q, J(m) ? m : Ta, q.notifyWith));
        b[1][3].add(n(0, q, J(g) ? g : Ta));
        b[2][3].add(n(0, q, J(k) ? k : kb));
      }).promise();
    }, promise:function(g) {
      return null != g ? e.extend(g, d) : d;
    }}, f = {};
    return e.each(b, function(g, k) {
      var m = k[2], n = k[5];
      d[k[1]] = m.add;
      n && m.add(function() {
        c = n;
      }, b[3 - g][2].disable, b[3 - g][3].disable, b[0][2].lock, b[0][3].lock);
      m.add(k[3].fire);
      f[k[0]] = function() {
        return f[k[0] + "With"](this === f ? void 0 : this, arguments), this;
      };
      f[k[0] + "With"] = m.fireWith;
    }), d.promise(f), a && a.call(f, f), f;
  }, when:function(a) {
    var b = arguments.length, c = b, d = Array(c), f = Na.call(arguments), g = e.Deferred(), k = function(m) {
      return function(n) {
        d[m] = this;
        f[m] = 1 < arguments.length ? Na.call(arguments) : n;
        --b || g.resolveWith(d, f);
      };
    };
    if (1 >= b && (Sb(a, g.done(k(c)).resolve, g.reject, !b), "pending" === g.state() || J(f[c] && f[c].then))) {
      return g.then();
    }
    for (; c--;) {
      Sb(f[c], k(c), g.reject);
    }
    return g.promise();
  }});
  var qd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  e.Deferred.exceptionHook = function(a, b) {
    G.console && G.console.warn && a && qd.test(a.name) && G.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b);
  };
  e.readyException = function(a) {
    G.setTimeout(function() {
      throw a;
    });
  };
  var Mb = e.Deferred();
  e.fn.ready = function(a) {
    return Mb.then(a)["catch"](function(b) {
      e.readyException(b);
    }), this;
  };
  e.extend({isReady:!1, readyWait:1, ready:function(a) {
    (!0 === a ? --e.readyWait : e.isReady) || (e.isReady = !0, !0 !== a && 0 < --e.readyWait || Mb.resolveWith(P, [e]));
  }});
  e.ready.then = Mb.then;
  "complete" === P.readyState || "loading" !== P.readyState && !P.documentElement.doScroll ? G.setTimeout(e.ready) : (P.addEventListener("DOMContentLoaded", lb), G.addEventListener("load", lb));
  var Ga = function(a, b, c, d, f, g, k) {
    var m = 0, n = a.length, t = null == c;
    if ("object" === Ra(c)) {
      for (m in f = !0, c) {
        Ga(a, b, m, c[m], !0, g, k);
      }
    } else if (void 0 !== d && (f = !0, J(d) || (k = !0), t && (k ? (b.call(a, d), b = null) : (t = b, b = function(q, w, z) {
      return t.call(e(q), z);
    })), b)) {
      for (; m < n; m++) {
        b(a[m], c, k ? d : d.call(a[m], m, b(a[m], c)));
      }
    }
    return f ? a : t ? b.call(a) : n ? b(a[0], c) : g;
  }, Lc = /^-ms-/, Mc = /-([a-z])/g, vb = function(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };
  ab.uid = 1;
  ab.prototype = {cache:function(a) {
    var b = a[this.expando];
    return b || (b = {}, vb(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {value:b, configurable:!0}))), b;
  }, set:function(a, b, c) {
    var d;
    a = this.cache(a);
    if ("string" == typeof b) {
      a[za(b)] = c;
    } else {
      for (d in b) {
        a[za(d)] = b[d];
      }
    }
    return a;
  }, get:function(a, b) {
    return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][za(b)];
  }, access:function(a, b, c) {
    return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
  }, remove:function(a, b) {
    var c = a[this.expando];
    if (void 0 !== c) {
      if (void 0 !== b) {
        var d = (b = Array.isArray(b) ? b.map(za) : (b = za(b)) in c ? [b] : b.match(ya) || []).length;
        for (; d--;) {
          delete c[b[d]];
        }
      }
      (void 0 === b || e.isEmptyObject(c)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
    }
  }, hasData:function(a) {
    a = a[this.expando];
    return void 0 !== a && !e.isEmptyObject(a);
  }};
  var H = new ab(), na = new ab(), Oc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Nc = /[A-Z]/g;
  e.extend({hasData:function(a) {
    return na.hasData(a) || H.hasData(a);
  }, data:function(a, b, c) {
    return na.access(a, b, c);
  }, removeData:function(a, b) {
    na.remove(a, b);
  }, _data:function(a, b, c) {
    return H.access(a, b, c);
  }, _removeData:function(a, b) {
    H.remove(a, b);
  }});
  e.fn.extend({data:function(a, b) {
    var c, d, f, g = this[0], k = g && g.attributes;
    if (void 0 === a) {
      if (this.length && (f = na.get(g), 1 === g.nodeType && !H.get(g, "hasDataAttrs"))) {
        for (c = k.length; c--;) {
          k[c] && 0 === (d = k[c].name).indexOf("data-") && (d = za(d.slice(5)), Tb(g, d, f[d]));
        }
        H.set(g, "hasDataAttrs", !0);
      }
      return f;
    }
    return "object" == typeof a ? this.each(function() {
      na.set(this, a);
    }) : Ga(this, function(m) {
      var n;
      if (g && void 0 === m) {
        if (void 0 !== (n = na.get(g, a)) || void 0 !== (n = Tb(g, a))) {
          return n;
        }
      } else {
        this.each(function() {
          na.set(this, a, m);
        });
      }
    }, null, b, 1 < arguments.length, null, !0);
  }, removeData:function(a) {
    return this.each(function() {
      na.remove(this, a);
    });
  }});
  e.extend({queue:function(a, b, c) {
    var d;
    if (a) {
      return b = (b || "fx") + "queue", d = H.get(a, b), c && (!d || Array.isArray(c) ? d = H.access(a, b, e.makeArray(c)) : d.push(c)), d || [];
    }
  }, dequeue:function(a, b) {
    b = b || "fx";
    var c = e.queue(a, b), d = c.length, f = c.shift(), g = e._queueHooks(a, b), k = function() {
      e.dequeue(a, b);
    };
    "inprogress" === f && (f = c.shift(), d--);
    f && ("fx" === b && c.unshift("inprogress"), delete g.stop, f.call(a, k, g));
    !d && g && g.empty.fire();
  }, _queueHooks:function(a, b) {
    var c = b + "queueHooks";
    return H.get(a, c) || H.access(a, c, {empty:e.Callbacks("once memory").add(function() {
      H.remove(a, [b + "queue", c]);
    })});
  }});
  e.fn.extend({queue:function(a, b) {
    var c = 2;
    return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? e.queue(this[0], a) : void 0 === b ? this : this.each(function() {
      var d = e.queue(this, a, b);
      e._queueHooks(this, a);
      "fx" === a && "inprogress" !== d[0] && e.dequeue(this, a);
    });
  }, dequeue:function(a) {
    return this.each(function() {
      e.dequeue(this, a);
    });
  }, clearQueue:function(a) {
    return this.queue(a || "fx", []);
  }, promise:function(a, b) {
    var c, d = 1, f = e.Deferred(), g = this, k = this.length, m = function() {
      --d || f.resolveWith(g, [g]);
    };
    "string" != typeof a && (b = a, a = void 0);
    for (a = a || "fx"; k--;) {
      (c = H.get(g[k], a + "queueHooks")) && c.empty && (d++, c.empty.add(m));
    }
    return m(), f.promise(b);
  }});
  var vc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, bb = new RegExp("^(?:([+-])=|)(" + vc + ")([a-z%]*)$", "i"), Ca = ["Top", "Right", "Bottom", "Left"], mb = function(a, b) {
    return "none" === (a = b || a).style.display || "" === a.style.display && e.contains(a.ownerDocument, a) && "none" === e.css(a, "display");
  }, wc = function(a, b, c, d) {
    var f, g = {};
    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }
    c = c.apply(a, d || []);
    for (f in b) {
      a.style[f] = g[f];
    }
    return c;
  }, Vb = {};
  e.fn.extend({show:function() {
    return Ua(this, !0);
  }, hide:function() {
    return Ua(this);
  }, toggle:function(a) {
    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
      mb(this) ? e(this).show() : e(this).hide();
    });
  }});
  var xc = /^(?:checkbox|radio)$/i, Xb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Yb = /^$|^module$|\/(?:java|ecma)script/i, qa = {option:[1, "<select multiple='multiple'>", "</select>"], thead:[1, "<table>", "</table>"], col:[2, "<table><colgroup>", "</colgroup></table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:[0, "", ""]};
  qa.optgroup = qa.option;
  qa.tbody = qa.tfoot = qa.colgroup = qa.caption = qa.thead;
  qa.th = qa.td;
  var Pc = /<|&#?\w+;/;
  !function() {
    var a = P.createDocumentFragment().appendChild(P.createElement("div")), b = P.createElement("input");
    b.setAttribute("type", "radio");
    b.setAttribute("checked", "checked");
    b.setAttribute("name", "t");
    a.appendChild(b);
    V.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
    a.innerHTML = "<textarea>x</textarea>";
    V.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
  }();
  var wb = P.documentElement, rd = /^key/, sd = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, yc = /^([^.]*)(?:\.(.+)|)/;
  e.event = {global:{}, add:function(a, b, c, d, f) {
    var g, k, m, n, t, q, w, z, I;
    if (t = H.get(a)) {
      for (c.handler && (c = (g = c).handler, f = g.selector), f && e.find.matchesSelector(wb, f), c.guid || (c.guid = e.guid++), (n = t.events) || (n = t.events = {}), (k = t.handle) || (k = t.handle = function(M) {
        return "undefined" != typeof e && e.event.triggered !== M.type ? e.event.dispatch.apply(a, arguments) : void 0;
      }), t = (b = (b || "").match(ya) || [""]).length; t--;) {
        var B = I = (m = yc.exec(b[t]) || [])[1];
        m = (m[2] || "").split(".").sort();
        B && (w = e.event.special[B] || {}, B = (f ? w.delegateType : w.bindType) || B, w = e.event.special[B] || {}, q = e.extend({type:B, origType:I, data:d, handler:c, guid:c.guid, selector:f, needsContext:f && e.expr.match.needsContext.test(f), namespace:m.join(".")}, g), (z = n[B]) || ((z = n[B] = []).delegateCount = 0, w.setup && !1 !== w.setup.call(a, d, m, k) || a.addEventListener && a.addEventListener(B, k)), w.add && (w.add.call(a, q), q.handler.guid || (q.handler.guid = c.guid)), f ? z.splice(z.delegateCount++, 
        0, q) : z.push(q), e.event.global[B] = !0);
      }
    }
  }, remove:function(a, b, c, d, f) {
    var g, k, m, n, t, q, w, z, I = H.hasData(a) && H.get(a);
    if (I && (n = I.events)) {
      for (t = (b = (b || "").match(ya) || [""]).length; t--;) {
        if (m = yc.exec(b[t]) || [], q = z = m[1], w = (m[2] || "").split(".").sort(), q) {
          var B = e.event.special[q] || {};
          var M = n[q = (d ? B.delegateType : B.bindType) || q] || [];
          m = m[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)");
          for (k = g = M.length; g--;) {
            var da = M[g];
            !f && z !== da.origType || c && c.guid !== da.guid || m && !m.test(da.namespace) || d && d !== da.selector && ("**" !== d || !da.selector) || (M.splice(g, 1), da.selector && M.delegateCount--, B.remove && B.remove.call(a, da));
          }
          k && !M.length && (B.teardown && !1 !== B.teardown.call(a, w, I.handle) || e.removeEvent(a, q, I.handle), delete n[q]);
        } else {
          for (q in n) {
            e.event.remove(a, q + b[t], c, d, !0);
          }
        }
      }
      e.isEmptyObject(n) && H.remove(a, "handle events");
    }
  }, dispatch:function(a) {
    var b = e.event.fix(a), c, d, f, g, k = Array(arguments.length);
    var m = (H.get(this, "events") || {})[b.type] || [];
    var n = e.event.special[b.type] || {};
    k[0] = b;
    for (c = 1; c < arguments.length; c++) {
      k[c] = arguments[c];
    }
    if (b.delegateTarget = this, !n.preDispatch || !1 !== n.preDispatch.call(this, b)) {
      var t = e.event.handlers.call(this, b, m);
      for (c = 0; (f = t[c++]) && !b.isPropagationStopped();) {
        for (b.currentTarget = f.elem, m = 0; (g = f.handlers[m++]) && !b.isImmediatePropagationStopped();) {
          b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, void 0 !== (d = ((e.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, k)) && !1 === (b.result = d) && (b.preventDefault(), b.stopPropagation()));
        }
      }
      return n.postDispatch && n.postDispatch.call(this, b), b.result;
    }
  }, handlers:function(a, b) {
    var c, d, f, g = [], k = b.delegateCount, m = a.target;
    if (k && m.nodeType && !("click" === a.type && 1 <= a.button)) {
      for (; m !== this; m = m.parentNode || this) {
        if (1 === m.nodeType && ("click" !== a.type || !0 !== m.disabled)) {
          var n = [];
          var t = {};
          for (c = 0; c < k; c++) {
            void 0 === t[f = (d = b[c]).selector + " "] && (t[f] = d.needsContext ? -1 < e(f, this).index(m) : e.find(f, this, null, [m]).length), t[f] && n.push(d);
          }
          n.length && g.push({elem:m, handlers:n});
        }
      }
    }
    return m = this, k < b.length && g.push({elem:m, handlers:b.slice(k)}), g;
  }, addProp:function(a, b) {
    Object.defineProperty(e.Event.prototype, a, {enumerable:!0, configurable:!0, get:J(b) ? function() {
      if (this.originalEvent) {
        return b(this.originalEvent);
      }
    } : function() {
      if (this.originalEvent) {
        return this.originalEvent[a];
      }
    }, set:function(c) {
      Object.defineProperty(this, a, {enumerable:!0, configurable:!0, writable:!0, value:c});
    }});
  }, fix:function(a) {
    return a[e.expando] ? a : new e.Event(a);
  }, special:{load:{noBubble:!0}, focus:{trigger:function() {
    if (this !== Zb() && this.focus) {
      return this.focus(), !1;
    }
  }, delegateType:"focusin"}, blur:{trigger:function() {
    if (this === Zb() && this.blur) {
      return this.blur(), !1;
    }
  }, delegateType:"focusout"}, click:{trigger:function() {
    if ("checkbox" === this.type && this.click && xa(this, "input")) {
      return this.click(), !1;
    }
  }, _default:function(a) {
    return xa(a.target, "a");
  }}, beforeunload:{postDispatch:function(a) {
    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
  }}}};
  e.removeEvent = function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  };
  e.Event = function(a, b) {
    if (!(this instanceof e.Event)) {
      return new e.Event(a, b);
    }
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? nb : Va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a;
    b && e.extend(this, b);
    this.timeStamp = a && a.timeStamp || Date.now();
    this[e.expando] = !0;
  };
  e.Event.prototype = {constructor:e.Event, isDefaultPrevented:Va, isPropagationStopped:Va, isImmediatePropagationStopped:Va, isSimulated:!1, preventDefault:function() {
    var a = this.originalEvent;
    this.isDefaultPrevented = nb;
    a && !this.isSimulated && a.preventDefault();
  }, stopPropagation:function() {
    var a = this.originalEvent;
    this.isPropagationStopped = nb;
    a && !this.isSimulated && a.stopPropagation();
  }, stopImmediatePropagation:function() {
    var a = this.originalEvent;
    this.isImmediatePropagationStopped = nb;
    a && !this.isSimulated && a.stopImmediatePropagation();
    this.stopPropagation();
  }};
  e.each({altKey:!0, bubbles:!0, cancelable:!0, changedTouches:!0, ctrlKey:!0, detail:!0, eventPhase:!0, metaKey:!0, pageX:!0, pageY:!0, shiftKey:!0, view:!0, "char":!0, charCode:!0, key:!0, keyCode:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pointerId:!0, pointerType:!0, screenX:!0, screenY:!0, targetTouches:!0, toElement:!0, touches:!0, which:function(a) {
    var b = a.button;
    return null == a.which && rd.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sd.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
  }}, e.event.addProp);
  e.each({mouseenter:"mouseover", mouseleave:"mouseout", pointerenter:"pointerover", pointerleave:"pointerout"}, function(a, b) {
    e.event.special[a] = {delegateType:b, bindType:b, handle:function(c) {
      var d, f = c.relatedTarget, g = c.handleObj;
      return f && (f === this || e.contains(this, f)) || (c.type = g.origType, d = g.handler.apply(this, arguments), c.type = b), d;
    }};
  });
  e.fn.extend({on:function(a, b, c, d) {
    return Ab(this, a, b, c, d);
  }, one:function(a, b, c, d) {
    return Ab(this, a, b, c, d, 1);
  }, off:function(a, b, c) {
    var d, f;
    if (a && a.preventDefault && a.handleObj) {
      return d = a.handleObj, e(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
    }
    if ("object" == typeof a) {
      for (f in a) {
        this.off(f, b, a[f]);
      }
      return this;
    }
    return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = Va), this.each(function() {
      e.event.remove(this, a, c, b);
    });
  }});
  var td = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ud = /<script|<style|<link/i, Sc = /checked\s*(?:[^=]|=\s*.checked.)/i, Tc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  e.extend({htmlPrefilter:function(a) {
    return a.replace(td, "<$1></$2>");
  }, clone:function(a, b, c) {
    var d, f, g = a.cloneNode(!0), k = e.contains(a.ownerDocument, a);
    if (!(V.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a))) {
      var m = oa(g);
      var n = 0;
      for (d = (f = oa(a)).length; n < d; n++) {
        var t = f[n], q = m[n], w = q.nodeName.toLowerCase();
        "input" === w && xc.test(t.type) ? q.checked = t.checked : "input" !== w && "textarea" !== w || (q.defaultValue = t.defaultValue);
      }
    }
    if (b) {
      if (c) {
        for (f = f || oa(a), m = m || oa(g), n = 0, d = f.length; n < d; n++) {
          ac(f[n], m[n]);
        }
      } else {
        ac(a, g);
      }
    }
    return 0 < (m = oa(g, "script")).length && zb(m, !k && oa(a, "script")), g;
  }, cleanData:function(a) {
    for (var b, c, d, f = e.event.special, g = 0; void 0 !== (c = a[g]); g++) {
      if (vb(c)) {
        if (b = c[H.expando]) {
          if (b.events) {
            for (d in b.events) {
              f[d] ? e.event.remove(c, d) : e.removeEvent(c, d, b.handle);
            }
          }
          c[H.expando] = void 0;
        }
        c[na.expando] && (c[na.expando] = void 0);
      }
    }
  }});
  e.fn.extend({detach:function(a) {
    return cc(this, a, !0);
  }, remove:function(a) {
    return cc(this, a);
  }, text:function(a) {
    return Ga(this, function(b) {
      return void 0 === b ? e.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = b);
      });
    }, null, a, arguments.length);
  }, append:function() {
    return Wa(this, arguments, function(a) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $b(this, a).appendChild(a);
    });
  }, prepend:function() {
    return Wa(this, arguments, function(a) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var b = $b(this, a);
        b.insertBefore(a, b.firstChild);
      }
    });
  }, before:function() {
    return Wa(this, arguments, function(a) {
      this.parentNode && this.parentNode.insertBefore(a, this);
    });
  }, after:function() {
    return Wa(this, arguments, function(a) {
      this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
    });
  }, empty:function() {
    for (var a, b = 0; null != (a = this[b]); b++) {
      1 === a.nodeType && (e.cleanData(oa(a, !1)), a.textContent = "");
    }
    return this;
  }, clone:function(a, b) {
    return a = null != a && a, b = null == b ? a : b, this.map(function() {
      return e.clone(this, a, b);
    });
  }, html:function(a) {
    return Ga(this, function(b) {
      var c = this[0] || {}, d = 0, f = this.length;
      if (void 0 === b && 1 === c.nodeType) {
        return c.innerHTML;
      }
      if ("string" == typeof b && !ud.test(b) && !qa[(Xb.exec(b) || ["", ""])[1].toLowerCase()]) {
        b = e.htmlPrefilter(b);
        try {
          for (; d < f; d++) {
            1 === (c = this[d] || {}).nodeType && (e.cleanData(oa(c, !1)), c.innerHTML = b);
          }
          c = 0;
        } catch (g) {
        }
      }
      c && this.empty().append(b);
    }, null, a, arguments.length);
  }, replaceWith:function() {
    var a = [];
    return Wa(this, arguments, function(b) {
      var c = this.parentNode;
      0 > e.inArray(this, a) && (e.cleanData(oa(this)), c && c.replaceChild(b, this));
    }, a);
  }});
  e.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, b) {
    e.fn[a] = function(c) {
      for (var d = [], f = e(c), g = f.length - 1, k = 0; k <= g; k++) {
        c = k === g ? this : this.clone(!0), e(f[k])[b](c), Ib.apply(d, c.get());
      }
      return this.pushStack(d);
    };
  });
  var Bb = new RegExp("^(" + vc + ")(?!px)[a-z%]+$", "i"), ob = function(a) {
    var b = a.ownerDocument.defaultView;
    return b && b.opener || (b = G), b.getComputedStyle(a);
  }, Uc = new RegExp(Ca.join("|"), "i");
  !function() {
    function a() {
      if (m) {
        k.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        m.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        wb.appendChild(k).appendChild(m);
        var n = G.getComputedStyle(m);
        b = "1%" !== n.top;
        g = 12 === Math.round(parseFloat(n.marginLeft));
        m.style.right = "60%";
        f = 36 === Math.round(parseFloat(n.right));
        c = 36 === Math.round(parseFloat(n.width));
        m.style.position = "absolute";
        d = 36 === m.offsetWidth || "absolute";
        wb.removeChild(k);
        m = null;
      }
    }
    var b, c, d, f, g, k = P.createElement("div"), m = P.createElement("div");
    m.style && (m.style.backgroundClip = "content-box", m.cloneNode(!0).style.backgroundClip = "", V.clearCloneStyle = "content-box" === m.style.backgroundClip, e.extend(V, {boxSizingReliable:function() {
      return a(), c;
    }, pixelBoxStyles:function() {
      return a(), f;
    }, pixelPosition:function() {
      return a(), b;
    }, reliableMarginLeft:function() {
      return a(), g;
    }, scrollboxSize:function() {
      return a(), d;
    }}));
  }();
  var vd = /^(none|table(?!-c[ea]).+)/, zc = /^--/, wd = {position:"absolute", visibility:"hidden", display:"block"}, Ac = {letterSpacing:"0", fontWeight:"400"}, gc = ["Webkit", "Moz", "ms"], fc = P.createElement("div").style;
  e.extend({cssHooks:{opacity:{get:function(a, b) {
    if (b) {
      var c = cb(a, "opacity");
      return "" === c ? "1" : c;
    }
  }}}, cssNumber:{animationIterationCount:!0, columnCount:!0, fillOpacity:!0, flexGrow:!0, flexShrink:!0, fontWeight:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{}, style:function(a, b, c, d) {
    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
      var f, g, k, m = za(b), n = zc.test(b), t = a.style;
      if (n || (b = ec(m)), k = e.cssHooks[b] || e.cssHooks[m], void 0 === c) {
        return k && "get" in k && void 0 !== (f = k.get(a, !1, d)) ? f : t[b];
      }
      "string" == (g = typeof c) && (f = bb.exec(c)) && f[1] && (c = Ub(a, b, f), g = "number");
      null != c && c === c && ("number" === g && (c += f && f[3] || (e.cssNumber[m] ? "" : "px")), V.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (t[b] = "inherit"), k && "set" in k && void 0 === (c = k.set(a, c, d)) || (n ? t.setProperty(b, c) : t[b] = c));
    }
  }, css:function(a, b, c, d) {
    var f, g, k, m = za(b);
    return zc.test(b) || (b = ec(m)), (k = e.cssHooks[b] || e.cssHooks[m]) && "get" in k && (f = k.get(a, !0, c)), void 0 === f && (f = cb(a, b, d)), "normal" === f && b in Ac && (f = Ac[b]), "" === c || c ? (g = parseFloat(f), !0 === c || isFinite(g) ? g || 0 : f) : f;
  }});
  e.each(["height", "width"], function(a, b) {
    e.cssHooks[b] = {get:function(c, d, f) {
      if (d) {
        return !vd.test(e.css(c, "display")) || c.getClientRects().length && c.getBoundingClientRect().width ? ic(c, b, f) : wc(c, wd, function() {
          return ic(c, b, f);
        });
      }
    }, set:function(c, d, f) {
      var g, k = ob(c), m = "border-box" === e.css(c, "boxSizing", !1, k);
      f = f && Cb(c, b, f, m, k);
      return m && V.scrollboxSize() === k.position && (f -= Math.ceil(c["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(k[b]) - Cb(c, b, "border", !1, k) - .5)), f && (g = bb.exec(d)) && "px" !== (g[3] || "px") && (c.style[b] = d, d = e.css(c, b)), hc(c, d, f);
    }};
  });
  e.cssHooks.marginLeft = dc(V.reliableMarginLeft, function(a, b) {
    if (b) {
      return (parseFloat(cb(a, "marginLeft")) || a.getBoundingClientRect().left - wc(a, {marginLeft:0}, function() {
        return a.getBoundingClientRect().left;
      })) + "px";
    }
  });
  e.each({margin:"", padding:"", border:"Width"}, function(a, b) {
    e.cssHooks[a + b] = {expand:function(c) {
      var d = 0, f = {};
      for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
        f[a + Ca[d] + b] = c[d] || c[d - 2] || c[0];
      }
      return f;
    }};
    "margin" !== a && (e.cssHooks[a + b].set = hc);
  });
  e.fn.extend({css:function(a, b) {
    return Ga(this, function(c, d, f) {
      var g, k = {}, m = 0;
      if (Array.isArray(d)) {
        f = ob(c);
        for (g = d.length; m < g; m++) {
          k[d[m]] = e.css(c, d[m], !1, f);
        }
        return k;
      }
      return void 0 !== f ? e.style(c, d, f) : e.css(c, d);
    }, a, b, 1 < arguments.length);
  }});
  e.Tween = pa;
  pa.prototype = {constructor:pa, init:function(a, b, c, d, f, g) {
    this.elem = a;
    this.prop = c;
    this.easing = f || e.easing._default;
    this.options = b;
    this.start = this.now = this.cur();
    this.end = d;
    this.unit = g || (e.cssNumber[c] ? "" : "px");
  }, cur:function() {
    var a = pa.propHooks[this.prop];
    return a && a.get ? a.get(this) : pa.propHooks._default.get(this);
  }, run:function(a) {
    var b, c = pa.propHooks[this.prop];
    return this.options.duration ? this.pos = b = e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : pa.propHooks._default.set(this), this;
  }};
  pa.prototype.init.prototype = pa.prototype;
  pa.propHooks = {_default:{get:function(a) {
    var b;
    return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = e.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0;
  }, set:function(a) {
    e.fx.step[a.prop] ? e.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[e.cssProps[a.prop]] && !e.cssHooks[a.prop] ? a.elem[a.prop] = a.now : e.style(a.elem, a.prop, a.now + a.unit);
  }}};
  pa.propHooks.scrollTop = pa.propHooks.scrollLeft = {set:function(a) {
    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
  }};
  e.easing = {linear:function(a) {
    return a;
  }, swing:function(a) {
    return .5 - Math.cos(a * Math.PI) / 2;
  }, _default:"swing"};
  e.fx = pa.prototype.init;
  e.fx.step = {};
  var Xa, pb, xd = /^(?:toggle|show|hide)$/, yd = /queueHooks$/;
  e.Animation = e.extend(ua, {tweeners:{"*":[function(a, b) {
    var c = this.createTween(a, b);
    return Ub(c.elem, a, bb.exec(b), c), c;
  }]}, tweener:function(a, b) {
    J(a) ? (b = a, a = ["*"]) : a = a.match(ya);
    for (var c, d = 0, f = a.length; d < f; d++) {
      c = a[d], ua.tweeners[c] = ua.tweeners[c] || [], ua.tweeners[c].unshift(b);
    }
  }, prefilters:[function(a, b, c) {
    var d, f, g, k, m, n, t, q = "width" in b || "height" in b, w = this, z = {}, I = a.style, B = a.nodeType && mb(a), M = H.get(a, "fxshow");
    c.queue || (null == (k = e._queueHooks(a, "fx")).unqueued && (k.unqueued = 0, m = k.empty.fire, k.empty.fire = function() {
      k.unqueued || m();
    }), k.unqueued++, w.always(function() {
      w.always(function() {
        k.unqueued--;
        e.queue(a, "fx").length || k.empty.fire();
      });
    }));
    for (d in b) {
      if (f = b[d], xd.test(f)) {
        if (delete b[d], g = g || "toggle" === f, f === (B ? "hide" : "show")) {
          if ("show" !== f || !M || void 0 === M[d]) {
            continue;
          }
          B = !0;
        }
        z[d] = M && M[d] || e.style(a, d);
      }
    }
    if ((b = !e.isEmptyObject(b)) || !e.isEmptyObject(z)) {
      for (d in q && 1 === a.nodeType && (c.overflow = [I.overflow, I.overflowX, I.overflowY], null == (n = M && M.display) && (n = H.get(a, "display")), "none" === (t = e.css(a, "display")) && (n ? t = n : (Ua([a], !0), n = a.style.display || n, t = e.css(a, "display"), Ua([a]))), ("inline" === t || "inline-block" === t && null != n) && "none" === e.css(a, "float") && (b || (w.done(function() {
        I.display = n;
      }), null == n && (t = I.display, n = "none" === t ? "" : t)), I.display = "inline-block")), c.overflow && (I.overflow = "hidden", w.always(function() {
        I.overflow = c.overflow[0];
        I.overflowX = c.overflow[1];
        I.overflowY = c.overflow[2];
      })), b = !1, z) {
        b || (M ? "hidden" in M && (B = M.hidden) : M = H.access(a, "fxshow", {display:n}), g && (M.hidden = !B), B && Ua([a], !0), w.done(function() {
          B || Ua([a]);
          H.remove(a, "fxshow");
          for (d in z) {
            e.style(a, d, z[d]);
          }
        })), b = kc(B ? M[d] : 0, d, w), d in M || (M[d] = b.start, B && (b.end = b.start, b.start = 0));
      }
    }
  }], prefilter:function(a, b) {
    b ? ua.prefilters.unshift(a) : ua.prefilters.push(a);
  }});
  e.speed = function(a, b, c) {
    var d = a && "object" == typeof a ? e.extend({}, a) : {complete:c || !c && b || J(a) && a, duration:a, easing:c && b || b && !J(b) && b};
    return e.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in e.fx.speeds ? d.duration = e.fx.speeds[d.duration] : d.duration = e.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
      J(d.old) && d.old.call(this);
      d.queue && e.dequeue(this, d.queue);
    }, d;
  };
  e.fn.extend({fadeTo:function(a, b, c, d) {
    return this.filter(mb).css("opacity", 0).show().end().animate({opacity:b}, a, c, d);
  }, animate:function(a, b, c, d) {
    var f = e.isEmptyObject(a), g = e.speed(b, c, d);
    b = function() {
      var k = ua(this, e.extend({}, a), g);
      (f || H.get(this, "finish")) && k.stop(!0);
    };
    return b.finish = b, f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b);
  }, stop:function(a, b, c) {
    var d = function(f) {
      var g = f.stop;
      delete f.stop;
      g(c);
    };
    return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
      var f = !0, g = null != a && a + "queueHooks", k = e.timers, m = H.get(this);
      if (g) {
        m[g] && m[g].stop && d(m[g]);
      } else {
        for (g in m) {
          m[g] && m[g].stop && yd.test(g) && d(m[g]);
        }
      }
      for (g = k.length; g--;) {
        k[g].elem !== this || null != a && k[g].queue !== a || (k[g].anim.stop(c), f = !1, k.splice(g, 1));
      }
      !f && c || e.dequeue(this, a);
    });
  }, finish:function(a) {
    return !1 !== a && (a = a || "fx"), this.each(function() {
      var b = H.get(this), c = b[a + "queue"];
      var d = b[a + "queueHooks"];
      var f = e.timers, g = c ? c.length : 0;
      b.finish = !0;
      e.queue(this, a, []);
      d && d.stop && d.stop.call(this, !0);
      for (d = f.length; d--;) {
        f[d].elem === this && f[d].queue === a && (f[d].anim.stop(!0), f.splice(d, 1));
      }
      for (d = 0; d < g; d++) {
        c[d] && c[d].finish && c[d].finish.call(this);
      }
      delete b.finish;
    });
  }});
  e.each(["toggle", "show", "hide"], function(a, b) {
    var c = e.fn[b];
    e.fn[b] = function(d, f, g) {
      return null == d || "boolean" == typeof d ? c.apply(this, arguments) : this.animate(qb(b, !0), d, f, g);
    };
  });
  e.each({slideDown:qb("show"), slideUp:qb("hide"), slideToggle:qb("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, b) {
    e.fn[a] = function(c, d, f) {
      return this.animate(b, c, d, f);
    };
  });
  e.timers = [];
  e.fx.tick = function() {
    var a, b = 0, c = e.timers;
    for (Xa = Date.now(); b < c.length; b++) {
      (a = c[b])() || c[b] !== a || c.splice(b--, 1);
    }
    c.length || e.fx.stop();
    Xa = void 0;
  };
  e.fx.timer = function(a) {
    e.timers.push(a);
    e.fx.start();
  };
  e.fx.interval = 13;
  e.fx.start = function() {
    pb || (pb = !0, Db());
  };
  e.fx.stop = function() {
    pb = null;
  };
  e.fx.speeds = {slow:600, fast:200, _default:400};
  e.fn.delay = function(a, b) {
    return a = e.fx ? e.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(c, d) {
      var f = G.setTimeout(c, a);
      d.stop = function() {
        G.clearTimeout(f);
      };
    });
  };
  (function() {
    var a = P.createElement("input"), b = P.createElement("select").appendChild(P.createElement("option"));
    a.type = "checkbox";
    V.checkOn = "" !== a.value;
    V.optSelected = b.selected;
    (a = P.createElement("input")).value = "t";
    a.type = "radio";
    V.radioValue = "t" === a.value;
  })();
  var fb = e.expr.attrHandle;
  e.fn.extend({attr:function(a, b) {
    return Ga(this, e.attr, a, b, 1 < arguments.length);
  }, removeAttr:function(a) {
    return this.each(function() {
      e.removeAttr(this, a);
    });
  }});
  e.extend({attr:function(a, b, c) {
    var d, f, g = a.nodeType;
    if (3 !== g && 8 !== g && 2 !== g) {
      return "undefined" == typeof a.getAttribute ? e.prop(a, b, c) : (1 === g && e.isXMLDoc(a) || (f = e.attrHooks[b.toLowerCase()] || (e.expr.match.bool.test(b) ? zd : void 0)), void 0 !== c ? null === c ? void e.removeAttr(a, b) : f && "set" in f && void 0 !== (d = f.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : f && "get" in f && null !== (d = f.get(a, b)) ? d : null == (d = e.find.attr(a, b)) ? void 0 : d);
    }
  }, attrHooks:{type:{set:function(a, b) {
    if (!V.radioValue && "radio" === b && xa(a, "input")) {
      var c = a.value;
      return a.setAttribute("type", b), c && (a.value = c), b;
    }
  }}}, removeAttr:function(a, b) {
    var c, d = 0, f = b && b.match(ya);
    if (f && 1 === a.nodeType) {
      for (; c = f[d++];) {
        a.removeAttribute(c);
      }
    }
  }});
  var zd = {set:function(a, b, c) {
    return !1 === b ? e.removeAttr(a, c) : a.setAttribute(c, c), c;
  }};
  e.each(e.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = fb[b] || e.find.attr;
    fb[b] = function(d, f, g) {
      var k, m, n = f.toLowerCase();
      return g || (m = fb[n], fb[n] = k, k = null != c(d, f, g) ? n : null, fb[n] = m), k;
    };
  });
  var Ad = /^(?:input|select|textarea|button)$/i, Bd = /^(?:a|area)$/i;
  e.fn.extend({prop:function(a, b) {
    return Ga(this, e.prop, a, b, 1 < arguments.length);
  }, removeProp:function(a) {
    return this.each(function() {
      delete this[e.propFix[a] || a];
    });
  }});
  e.extend({prop:function(a, b, c) {
    var d, f, g = a.nodeType;
    if (3 !== g && 8 !== g && 2 !== g) {
      return 1 === g && e.isXMLDoc(a) || (b = e.propFix[b] || b, f = e.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (d = f.set(a, c, b)) ? d : a[b] = c : f && "get" in f && null !== (d = f.get(a, b)) ? d : a[b];
    }
  }, propHooks:{tabIndex:{get:function(a) {
    var b = e.find.attr(a, "tabindex");
    return b ? parseInt(b, 10) : Ad.test(a.nodeName) || Bd.test(a.nodeName) && a.href ? 0 : -1;
  }}}, propFix:{"for":"htmlFor", "class":"className"}});
  V.optSelected || (e.propHooks.selected = {get:function(a) {
    a = a.parentNode;
    return a && a.parentNode && a.parentNode.selectedIndex, null;
  }, set:function(a) {
    a = a.parentNode;
    a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
  }});
  e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
    e.propFix[this.toLowerCase()] = this;
  });
  e.fn.extend({addClass:function(a) {
    var b, c, d, f, g, k, m, n = 0;
    if (J(a)) {
      return this.each(function(t) {
        e(this).addClass(a.call(this, t, La(this)));
      });
    }
    if ((b = Eb(a)).length) {
      for (; c = this[n++];) {
        if (f = La(c), d = 1 === c.nodeType && " " + Ka(f) + " ") {
          for (k = 0; g = b[k++];) {
            0 > d.indexOf(" " + g + " ") && (d += g + " ");
          }
          f !== (m = Ka(d)) && c.setAttribute("class", m);
        }
      }
    }
    return this;
  }, removeClass:function(a) {
    var b, c, d, f, g, k, m, n = 0;
    if (J(a)) {
      return this.each(function(t) {
        e(this).removeClass(a.call(this, t, La(this)));
      });
    }
    if (!arguments.length) {
      return this.attr("class", "");
    }
    if ((b = Eb(a)).length) {
      for (; c = this[n++];) {
        if (f = La(c), d = 1 === c.nodeType && " " + Ka(f) + " ") {
          for (k = 0; g = b[k++];) {
            for (; -1 < d.indexOf(" " + g + " ");) {
              d = d.replace(" " + g + " ", " ");
            }
          }
          f !== (m = Ka(d)) && c.setAttribute("class", m);
        }
      }
    }
    return this;
  }, toggleClass:function(a, b) {
    var c = typeof a, d = "string" === c || Array.isArray(a);
    return "boolean" == typeof b && d ? b ? this.addClass(a) : this.removeClass(a) : J(a) ? this.each(function(f) {
      e(this).toggleClass(a.call(this, f, La(this), b), b);
    }) : this.each(function() {
      var f, g;
      if (d) {
        var k = 0;
        var m = e(this);
        for (g = Eb(a); f = g[k++];) {
          m.hasClass(f) ? m.removeClass(f) : m.addClass(f);
        }
      } else {
        void 0 !== a && "boolean" !== c || ((f = La(this)) && H.set(this, "__className__", f), this.setAttribute && this.setAttribute("class", f || !1 === a ? "" : H.get(this, "__className__") || ""));
      }
    });
  }, hasClass:function(a) {
    var b, c = 0;
    for (a = " " + a + " "; b = this[c++];) {
      if (1 === b.nodeType && -1 < (" " + Ka(La(b)) + " ").indexOf(a)) {
        return !0;
      }
    }
    return !1;
  }});
  var Cd = /\r/g;
  e.fn.extend({val:function(a) {
    var b, c, d, f = this[0];
    if (arguments.length) {
      return d = J(a), this.each(function(g) {
        var k;
        1 === this.nodeType && (null == (k = d ? a.call(this, g, e(this).val()) : a) ? k = "" : "number" == typeof k ? k += "" : Array.isArray(k) && (k = e.map(k, function(m) {
          return null == m ? "" : m + "";
        })), (b = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, k, "value") || (this.value = k));
      });
    }
    if (f) {
      return (b = e.valHooks[f.type] || e.valHooks[f.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(f, "value")) ? c : "string" == typeof(c = f.value) ? c.replace(Cd, "") : null == c ? "" : c;
    }
  }});
  e.extend({valHooks:{option:{get:function(a) {
    var b = e.find.attr(a, "value");
    return null != b ? b : Ka(e.text(a));
  }}, select:{get:function(a) {
    var b, c, d = a.options, f = a.selectedIndex, g = "select-one" === a.type, k = g ? null : [], m = g ? f + 1 : d.length;
    for (c = 0 > f ? m : g ? f : 0; c < m; c++) {
      if (!(!(b = d[c]).selected && c !== f || b.disabled || b.parentNode.disabled && xa(b.parentNode, "optgroup"))) {
        if (a = e(b).val(), g) {
          return a;
        }
        k.push(a);
      }
    }
    return k;
  }, set:function(a, b) {
    for (var c, d, f = a.options, g = e.makeArray(b), k = f.length; k--;) {
      ((d = f[k]).selected = -1 < e.inArray(e.valHooks.option.get(d), g)) && (c = !0);
    }
    return c || (a.selectedIndex = -1), g;
  }}}});
  e.each(["radio", "checkbox"], function() {
    e.valHooks[this] = {set:function(a, b) {
      if (Array.isArray(b)) {
        return a.checked = -1 < e.inArray(e(a).val(), b);
      }
    }};
    V.checkOn || (e.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  V.focusin = "onfocusin" in G;
  var Bc = /^(?:focusinfocus|focusoutblur)$/, Cc = function(a) {
    a.stopPropagation();
  };
  e.extend(e.event, {trigger:function(a, b, c, d) {
    var f, g, k, m, n, t, q = [c || P], w = rb.call(a, "type") ? a.type : a;
    var z = rb.call(a, "namespace") ? a.namespace.split(".") : [];
    if (f = t = g = c = c || P, 3 !== c.nodeType && 8 !== c.nodeType && !Bc.test(w + e.event.triggered) && (-1 < w.indexOf(".") && (w = (z = w.split(".")).shift(), z.sort()), k = 0 > w.indexOf(":") && "on" + w, a = a[e.expando] ? a : new e.Event(w, "object" == typeof a && a), a.isTrigger = d ? 2 : 3, a.namespace = z.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + z.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : e.makeArray(b, 
    [a]), n = e.event.special[w] || {}, d || !n.trigger || !1 !== n.trigger.apply(c, b))) {
      if (!d && !n.noBubble && !Sa(c)) {
        var I = n.delegateType || w;
        for (Bc.test(I + w) || (f = f.parentNode); f; f = f.parentNode) {
          q.push(f), g = f;
        }
        g === (c.ownerDocument || P) && q.push(g.defaultView || g.parentWindow || G);
      }
      for (z = 0; (f = q[z++]) && !a.isPropagationStopped();) {
        t = f, a.type = 1 < z ? I : n.bindType || w, (m = (H.get(f, "events") || {})[a.type] && H.get(f, "handle")) && m.apply(f, b), (m = k && f[k]) && m.apply && vb(f) && (a.result = m.apply(f, b), !1 === a.result && a.preventDefault());
      }
      return a.type = w, d || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(q.pop(), b) || !vb(c) || k && J(c[w]) && !Sa(c) && ((g = c[k]) && (c[k] = null), e.event.triggered = w, a.isPropagationStopped() && t.addEventListener(w, Cc), c[w](), a.isPropagationStopped() && t.removeEventListener(w, Cc), e.event.triggered = void 0, g && (c[k] = g)), a.result;
    }
  }, simulate:function(a, b, c) {
    a = e.extend(new e.Event(), c, {type:a, isSimulated:!0});
    e.event.trigger(a, null, b);
  }});
  e.fn.extend({trigger:function(a, b) {
    return this.each(function() {
      e.event.trigger(a, b, this);
    });
  }, triggerHandler:function(a, b) {
    var c = this[0];
    if (c) {
      return e.event.trigger(a, b, c, !0);
    }
  }});
  V.focusin || e.each({focus:"focusin", blur:"focusout"}, function(a, b) {
    var c = function(d) {
      e.event.simulate(b, d.target, e.event.fix(d));
    };
    e.event.special[b] = {setup:function() {
      var d = this.ownerDocument || this, f = H.access(d, b);
      f || d.addEventListener(a, c, !0);
      H.access(d, b, (f || 0) + 1);
    }, teardown:function() {
      var d = this.ownerDocument || this, f = H.access(d, b) - 1;
      f ? H.access(d, b, f) : (d.removeEventListener(a, c, !0), H.remove(d, b));
    }};
  });
  var gb = G.location, Dc = Date.now(), Nb = /\?/;
  e.parseXML = function(a) {
    if (!a || "string" != typeof a) {
      return null;
    }
    try {
      var b = (new G.DOMParser()).parseFromString(a, "text/xml");
    } catch (c) {
      b = void 0;
    }
    return b && !b.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + a), b;
  };
  var Wc = /\[\]$/, Ec = /\r?\n/g, Dd = /^(?:submit|button|image|reset|file)$/i, Ed = /^(?:input|select|textarea|keygen)/i;
  e.param = function(a, b) {
    var c, d = [], f = function(g, k) {
      var m = J(k) ? k() : k;
      d[d.length] = encodeURIComponent(g) + "=" + encodeURIComponent(null == m ? "" : m);
    };
    if (Array.isArray(a) || a.jquery && !e.isPlainObject(a)) {
      e.each(a, function() {
        f(this.name, this.value);
      });
    } else {
      for (c in a) {
        Fb(c, a[c], b, f);
      }
    }
    return d.join("&");
  };
  e.fn.extend({serialize:function() {
    return e.param(this.serializeArray());
  }, serializeArray:function() {
    return this.map(function() {
      var a = e.prop(this, "elements");
      return a ? e.makeArray(a) : this;
    }).filter(function() {
      var a = this.type;
      return this.name && !e(this).is(":disabled") && Ed.test(this.nodeName) && !Dd.test(a) && (this.checked || !xc.test(a));
    }).map(function(a, b) {
      var c = e(this).val();
      return null == c ? null : Array.isArray(c) ? e.map(c, function(d) {
        return {name:b.name, value:d.replace(Ec, "\r\n")};
      }) : {name:b.name, value:c.replace(Ec, "\r\n")};
    }).get();
  }});
 

  e.expr.pseudos.animated = function(a) {
    return e.grep(e.timers, function(b) {
      return a === b.elem;
    }).length;
  };
  e.offset = {setOffset:function(a, b, c) {
    var d, f, g, k = e.css(a, "position"), m = e(a), n = {};
    "static" === k && (a.style.position = "relative");
    var t = m.offset();
    var q = e.css(a, "top");
    var w = e.css(a, "left");
    ("absolute" === k || "fixed" === k) && -1 < (q + w).indexOf("auto") ? (g = (d = m.position()).top, f = d.left) : (g = parseFloat(q) || 0, f = parseFloat(w) || 0);
    J(b) && (b = b.call(a, c, e.extend({}, t)));
    null != b.top && (n.top = b.top - t.top + g);
    null != b.left && (n.left = b.left - t.left + f);
    "using" in b ? b.using.call(a, n) : m.css(n);
  }};
  e.fn.extend({offset:function(a) {
    if (arguments.length) {
      return void 0 === a ? this : this.each(function(f) {
        e.offset.setOffset(this, a, f);
      });
    }
    var b, c, d = this[0];
    if (d) {
      return d.getClientRects().length ? (b = d.getBoundingClientRect(), c = d.ownerDocument.defaultView, {top:b.top + c.pageYOffset, left:b.left + c.pageXOffset}) : {top:0, left:0};
    }
  }, position:function() {
    if (this[0]) {
      var a, b = this[0], c = {top:0, left:0};
      if ("fixed" === e.css(b, "position")) {
        var d = b.getBoundingClientRect();
      } else {
        d = this.offset();
        var f = b.ownerDocument;
        for (a = b.offsetParent || f.documentElement; a && (a === f.body || a === f.documentElement) && "static" === e.css(a, "position");) {
          a = a.parentNode;
        }
        a && a !== b && 1 === a.nodeType && ((c = e(a).offset()).top += e.css(a, "borderTopWidth", !0), c.left += e.css(a, "borderLeftWidth", !0));
      }
      return {top:d.top - c.top - e.css(b, "marginTop", !0), left:d.left - c.left - e.css(b, "marginLeft", !0)};
    }
  }, offsetParent:function() {
    return this.map(function() {
      for (var a = this.offsetParent; a && "static" === e.css(a, "position");) {
        a = a.offsetParent;
      }
      return a || wb;
    });
  }});
  e.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(a, b) {
    var c = "pageYOffset" === b;
    e.fn[a] = function(d) {
      return Ga(this, function(f, g, k) {
        var m;
        if (Sa(f) ? m = f : 9 === f.nodeType && (m = f.defaultView), void 0 === k) {
          return m ? m[b] : f[g];
        }
        m ? m.scrollTo(c ? m.pageXOffset : k, c ? k : m.pageYOffset) : f[g] = k;
      }, a, d, arguments.length);
    };
  });
  e.each(["top", "left"], function(a, b) {
    e.cssHooks[b] = dc(V.pixelPosition, function(c, d) {
      if (d) {
        return d = cb(c, b), Bb.test(d) ? e(c).position()[b] + "px" : d;
      }
    });
  });
  e.each({Height:"height", Width:"width"}, function(a, b) {
    e.each({padding:"inner" + a, content:b, "":"outer" + a}, function(c, d) {
      e.fn[d] = function(f, g) {
        var k = arguments.length && (c || "boolean" != typeof f), m = c || (!0 === f || !0 === g ? "margin" : "border");
        return Ga(this, function(n, t, q) {
          var w;
          return Sa(n) ? 0 === d.indexOf("outer") ? n["inner" + a] : n.document.documentElement["client" + a] : 9 === n.nodeType ? (w = n.documentElement, Math.max(n.body["scroll" + a], w["scroll" + a], n.body["offset" + a], w["offset" + a], w["client" + a])) : void 0 === q ? e.css(n, t, m) : e.style(n, t, q, m);
        }, b, k ? f : void 0, k);
      };
    });
  });
  e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
    e.fn[b] = function(c, d) {
      return 0 < arguments.length ? this.on(b, null, c, d) : this.trigger(b);
    };
  });
  e.fn.extend({hover:function(a, b) {
    return this.mouseenter(a).mouseleave(b || a);
  }});
  e.fn.extend({bind:function(a, b, c) {
    return this.on(a, null, b, c);
  }, unbind:function(a, b) {
    return this.off(a, null, b);
  }, delegate:function(a, b, c, d) {
    return this.on(b, a, c, d);
  }, undelegate:function(a, b, c) {
    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
  }});
  e.proxy = function(a, b) {
    var c, d, f;
    if ("string" == typeof b && (c = a[b], b = a, a = c), J(a)) {
      return d = Na.call(arguments, 2), f = function() {
        return a.apply(b || this, d.concat(Na.call(arguments)));
      }, f.guid = a.guid = a.guid || e.guid++, f;
    }
  };
  e.holdReady = function(a) {
    a ? e.readyWait++ : e.ready(!0);
  };
  e.isArray = Array.isArray;
  e.parseJSON = JSON.parse;
  e.nodeName = xa;
  e.isFunction = J;
  e.isWindow = Sa;
  e.camelCase = za;
  e.type = Ra;
  e.now = Date.now;
  e.isNumeric = function(a) {
    var b = e.type(a);
    return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
  };
  "function" == typeof define && define.amd && define("jquery", [], function() {
    return e;
  });
  var Md = G.jQuery, Nd = G.$;
  return e.noConflict = function(a) {
    return G.$ === e && (G.$ = Nd), a && G.jQuery === e && (G.jQuery = Md), e;
  }, Za || (G.jQuery = G.$ = e), e;
});

(function($) {
  "use strict";

  // Page cursors
  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px";
    t.style.top = n.clientY + "px";
    e.style.left = n.clientX + "px";
    e.style.top = n.clientY + "px";
    i.style.left = n.clientX + "px";
    i.style.top = n.clientY + "px";
  });

  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");

  function n(t) {
    e.classList.add("hover");
    i.classList.add("hover");
  }

  function s(t) {
    e.classList.remove("hover");
    i.classList.remove("hover");
  }

  s();

  var r = document.querySelectorAll(".hover-target");
  for (var a = r.length - 1; a >= 0; a--) {
    o(r[a]);
  }

  function o(t) {
    t.addEventListener("mouseover", n);
    t.addEventListener("mouseout", s);
  }

  // About page
  $(".about-text").on('click', function() {
    $("body").addClass("about-on");
  });

  $(".about-close").on('click', function() {
    $("body").removeClass("about-on");
  });

  // Contact page
  $(".contact-text").on('click', function() {
    $("body").addClass("contact-on");
  });

  $(".contact-close").on('click', function() {
    $("body").removeClass("contact-on");
  });

  // Travel portfolio page
  $(".travel").on('click', function() {
    $("body").addClass("travel-on");
  });

  $(".travel-close").on('click', function() {
    $("body").removeClass("travel-on");
  });

  // Wildlife portfolio page
 // $(".wildlife").on('click', function() {
   // $("body").addClass("wildlife-on");
  //});
/*
  $(".wildlife-close").on('click', function() {
    $("body").removeClass("wildlife-on");
  });
*/
  // Nature portfolio page
  $(".nature").on('click', function() {
    $("body").addClass("nature-on");
  });

  $(".nature-close").on('click', function() {
    $("body").removeClass("nature-on");
  });
 
   // projet portfolio page
   $(".projet").on('click', function() {
    $("body").addClass("projet-on");
  });

  $(".projet-close").on('click', function() {
    $("body").removeClass("projet-on");
  });
 
  // projet1 portfolio page
  $(".projet1").on('click', function() {
    $("body").addClass("projet1-on");
  });

  $(".projet1-close").on('click', function() {
    $("body").removeClass("projet1-on");
  });
 
  // projet2 portfolio page
  $(".projet2").on('click', function() {
    $("body").addClass("projet2-on");
  });

  $(".projet2-close").on('click', function() {
    $("body").removeClass("projet2-on");
  });

  // projet3 portfolio page
  $(".projet3").on('click', function() {
    $("body").addClass("projet3-on");
  });

  $(".projet3-close").on('click', function() {
    $("body").removeClass("projet3-on");
  });

    // projet4 portfolio page
    $(".projet4").on('click', function() {
      $("body").addClass("projet4-on");
    });
  
    $(".projet4-close").on('click', function() {
      $("body").removeClass("projet4-on");
    });
  
      // projet5 portfolio page
  $(".projet5").on('click', function() {
    $("body").addClass("projet5-on");
  });

  $(".projet5-close").on('click', function() {
    $("body").removeClass("projet5-on");
  });

    // projet6 portfolio page
    $(".projet6").on('click', function() {
      $("body").addClass("projet6-on");
    });
  
    $(".projet6-close").on('click', function() {
      $("body").removeClass("projet6-on");
    });
  
      // projet7 portfolio page
  $(".projet7").on('click', function() {
    $("body").addClass("projet7-on");
  });

  $(".projet7-close").on('click', function() {
    $("body").removeClass("projet7-on");
  });



})(jQuery);
