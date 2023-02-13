# 生成随机渐变
调用方式如下
```ts
import {getRandomGradientColor} from 'random-liner-gradient';
// 不传入参数，则全随机生成
const gradientColor = getRandomGradientColor();
// 传入参数:hexColor十六进制的颜色值，deg:渐变角度，Colorangle:渐变颜色的偏向值，默认30°
const gradientColor = getRandomGradientColor(hexColor,deg,Colorangle);
```