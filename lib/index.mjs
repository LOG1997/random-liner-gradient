function d(n) {
  var r = n.r, a = n.g, v = n.b, t = Math.max(r, a, v), h = Math.min(r, a, v), i = 100 * t / 255, o = t === 0 ? 0 : 100 * (t - h) / t, e = 0;
  return t === r && a >= v ? e = 60 * (a - v) / (t - h) : t === r && a < v ? e = 60 * (a - v) / (t - h) + 360 : t === a ? e = 60 * (v - r) / (t - h) + 120 : t === v && (e = 60 * (r - a) / (t - h) + 240), {
    h: Math.round(e),
    s: Math.round(o),
    v: Math.round(i)
  };
}
function m(n) {
  var r = n.r, a = n.g, v = n.b, t = (r << 16 | a << 8 | v).toString(16);
  return "#" + new Array(Math.abs(t.length - 7)).join("0") + t;
}
function g(n) {
  for (var r = [], a = 1; a < 7; a += 2)
    r.push(parseInt("0x" + n.slice(a, a + 2)));
  return { r: r[0], g: r[1], b: r[2] };
}
function k(n) {
  var r = n.h, a = n.s, v = n.v, t = r % 360, h = a / 100, i = v / 100, o = 0, e = 0, c = 0;
  if (h === 0)
    o = e = c = i;
  else {
    var b = Math.floor(t / 60), M = t / 60 - b, u = i * (1 - h), f = i * (1 - h * M), s = i * (1 - h * (1 - M));
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
function l(n, r) {
  r === void 0 && (r = 30);
  var a = g(n), v = d(a), t = v.h, h = v.s, i = v.v, o = t + r;
  o > 360 ? o = o - 360 : o < 0 && (o = 360 + o);
  var e = k({ h: o, s: h, v: i }), c = m(e);
  return c;
}
function w() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
var x = function(n, r, a) {
  n === void 0 && (n = ""), r === void 0 && (r = -361), a === void 0 && (a = 30), r = r < -360 ? Math.floor(Math.random() * 360) : r, a = a < -360 ? Math.floor(Math.random() * 360) : a;
  var v = n || w(), t = l(v, a);
  return "linear-gradient(".concat(r, "deg, ").concat(v, ", ").concat(t, ")");
};
export {
  x as getRandomGradientColor
};
