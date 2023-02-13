function M(t) {
  var r = t.r, a = t.g, v = t.b, n = Math.max(r, a, v), h = Math.min(r, a, v), i = 100 * n / 255, o = n === 0 ? 0 : 100 * (n - h) / n, e = 0;
  return n === r && a >= v ? e = 60 * (a - v) / (n - h) : n === r && a < v ? e = 60 * (a - v) / (n - h) + 360 : n === a ? e = 60 * (v - r) / (n - h) + 120 : n === v && (e = 60 * (r - a) / (n - h) + 240), {
    h: Math.round(e),
    s: Math.round(o),
    v: Math.round(i)
  };
}
function g(t) {
  var r = t.r, a = t.g, v = t.b, n = (r << 16 | a << 8 | v).toString(16);
  return "#" + new Array(Math.abs(n.length - 7)).join("0") + n;
}
function l(t) {
  for (var r = [], a = 1; a < 7; a += 2)
    r.push(parseInt("0x" + t.slice(a, a + 2)));
  return { r: r[0], g: r[1], b: r[2] };
}
function m(t) {
  var r = t.h, a = t.s, v = t.v, n = r % 360, h = a / 100, i = v / 100, o = 0, e = 0, c = 0;
  if (h === 0)
    o = e = c = i;
  else {
    var b = Math.floor(n / 60), d = n / 60 - b, u = i * (1 - h), f = i * (1 - h * d), s = i * (1 - h * (1 - d));
    switch (b) {
      case 0:
        o = i, e = s, c = u;
        break;
      case 1:
        o = f, e = i, c = u;
        break;
      case 2:
        o = u, e = i, c = s;
        break;
      case 3:
        o = u, e = f, c = i;
        break;
      case 4:
        o = s, e = u, c = i;
      case 5:
        o = i, e = u, c = f;
        break;
    }
  }
  return { r: Math.round(o * 255), g: Math.round(e * 255), b: Math.round(c * 255) };
}
function k(t, r) {
  r === void 0 && (r = 30);
  var a = l(t), v = M(a), n = v.h, h = v.s, i = v.v, o = n + r;
  o > 360 ? o = o - 360 : o < 0 && (o = 360 + o);
  var e = m({ h: o, s: h, v: i }), c = g(e);
  return c;
}
function w() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
var x = function(t, r, a) {
  t === void 0 && (t = ""), r === void 0 && (r = -361), a === void 0 && (a = 30), r = r < -360 ? Math.floor(Math.random() * 360) : r;
  var v = t || w(), n = k(v, a);
  return "linear-gradient(".concat(r, "deg, ").concat(v, " 0%, ").concat(n, " 100%)");
};
export {
  x as getRandomGradientColor
};
