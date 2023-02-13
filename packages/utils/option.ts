import { THsv, THex } from '../types/color';

import { rgb2Hsv, rgb2Hsl, rgb2Hex, hex2Rgb, hsv2Rgb } from './color';
//hsv颜色旋转
export function rotateHsv(props: THex, angle: number = 30): THex {
    const rgbColor = hex2Rgb(props);
    const hsvColor = rgb2Hsv(rgbColor);

    const { h, s, v } = hsvColor;
    let newH = h + angle;
    if (newH > 360) {
        newH = newH - 360;
    }
    else if (newH < 0) {
        newH = 360 + newH;
    }
    const newRgbColor = hsv2Rgb({ h: newH, s, v });
    const newHexColor = rgb2Hex(newRgbColor);
    return newHexColor;
}
// 随机颜色
export function randomColor(): string {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
}