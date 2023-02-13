// Path: packages\index.ts
import { rotateHsv, randomColor } from './utils/option';
/**
 * 
 * @param hexColor string 颜色值
 * @param deg number 渐变角度 -360<=deg<=360 默认随机 输入小于-360则随机
 * @param Colorangle number 颜色旋转角度 -360<=Colorangle<=360 默认30
 * @returns string 渐变色
 */
export const getRandomGradientColor = (hexColor: string = '', deg: number = -361, Colorangle: number = 30) => {
    deg = deg < -360 ? Math.floor(Math.random() * 360) : deg;
    const color1 = hexColor ? hexColor : randomColor();
    const color2 = rotateHsv(color1, Colorangle);
    return `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 100%)`;
}

