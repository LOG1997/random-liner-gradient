/**
 *
 * @param hexColor string 颜色值
 * @param deg number 渐变角度 -360<=deg<=360 默认随机 输入小于-360则随机
 * @param Colorangle number 颜色旋转角度 -360<=Colorangle<=360 默认30
 * @returns string 渐变色
 */
export declare const getRandomGradientColor: (hexColor?: string, deg?: number, Colorangle?: number) => string;
