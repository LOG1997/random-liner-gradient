import { TRgb, THsv, THsl, THex } from '../types/color';
// rgb转hsv
export function rgb2Hsv(props: TRgb): THsv {
    const { r, g, b } = props;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // v取值
    let v = 100 * max / 255;
    // s取值
    let s = max === 0 ? 0 : 100 * (max - min) / max;
    // h取值
    let h = 0;
    if (max === r && g >= b) {
        h = 60 * (g - b) / (max - min);
    }
    else if (max === r && g < b) {
        h = 60 * (g - b) / (max - min) + 360;
    }
    else if (max === g) {
        h = 60 * (b - r) / (max - min) + 120;
    }
    else if (max === b) {
        h = 60 * (r - g) / (max - min) + 240;
    }
    return {
        h: Math.round(h), s: Math.round(s), v: Math.round(v)
    };

}
// rgb转hsl
export function rgb2Hsl(props: TRgb): THsl {
    const { r, g, b } = props;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // l取值
    let l = (max + min) / 2;
    // s取值
    let s = 0;
    if (max === min || l === 0) {
        s = 0;
    }
    else if (l > 0 && l <= 0.5) {
        s = (max - min) / (max + min);
    }
    else if (l > 0.5) {
        s = (max - min) / (2 - max - min);
    }
    // h取值
    let h = 0;
    if (max == min) {
        h = 0;
    }
    else if (max === r && g >= b) {
        h = 60 * (g - b) / (max - min);

    }
    else if (max === r && g < b) {
        h = 60 * (g - b) / (max - min) + 360;
    }
    else if (max === g) {
        h = 60 * (b - r) / (max - min) + 120;
    }
    else if (max === b) {
        h = 60 * (r - g) / (max - min) + 240;
    }
    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}
// rgb转hex
export function rgb2Hex(props: TRgb): THex {
    const { r, g, b } = props;
    const hex = ((r << 16) | (g << 8) | b).toString(16);
    return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex;
}
// hex转rgb
export function hex2Rgb(hex: string): TRgb {
    const rgb = [];
    for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt('0x' + hex.slice(i, i + 2)));
    }
    return { r: rgb[0], g: rgb[1], b: rgb[2] };
}
// hsv转rgb
export function hsv2Rgb(props: THsv): TRgb {
    let { h, s, v } = props;
    let hue = h % 360;
    let saturation = s / 100;
    let vion = v / 100;
    let r = 0, g = 0, b = 0;
    if (saturation === 0) {
        r = g = b = vion;
    }
    else {
        let i = Math.floor(hue / 60);
        let f = hue / 60 - i;

        let p = vion * (1 - saturation);
        let q = vion * (1 - saturation * f);
        let t = vion * (1 - saturation * (1 - f));
        switch (i) {
            case 0:
                r = vion;
                g = t;
                b = p;
                break;

            case 1:
                r = q;
                g = vion;
                b = p;
                break;
            case 2:
                r = p;
                g = vion;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = vion;
                break;

            case 4:
                r = t;
                g = p;
                b = vion;

            case 5:
                r = vion;
                g = p;
                b = q;
                break;

        }


    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}
