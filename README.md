
<div style="text-align:center;align:center">
<!-- <div style="width:100px;height:100px;background-image: linear-gradient(to top right, #ff0844 50%, #ffb199 50%);filter:blur(30px);margin:0 auto">

</div>    -->
 <img style="z-index:10;position:abslute;margin-top:10px" src="https://s1.ax1x.com/2023/02/14/pSo7CWt.png" />

</div>
<br/>
<p align="center">
<a href="https://github.com/LOG1997/random-liner-gradient">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/log1997/random-liner-gradient?style=flat-square">
</a>
<a href="https://github.com/LOG1997/random-liner-gradient">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/log1997/random-liner-gradient?style=flat-square">
</a>
<a href="https://www.npmjs.com/package/random-liner-gradient">
<img alt="npm" src="https://img.shields.io/npm/dm/random-liner-gradient">
</a>
<a href="https://cn.vitejs.dev/">
<img alt="GitHub code size in bytes" src="https://img.shields.io/static/v1?label=vite&message=4.1.1&color=blueviolet&style=flat-square">
</a>
</p>
<br/>
# 生成随机渐变
## 生成随机色的方式
传入一种颜色或者自动生成一个随机色后，渐变色的另一个颜色默认取值是在色环上顺时针偏向30°的颜色，此种颜色过渡平缓，优点是稳定、和谐，没有强烈的视觉冲击，是最安全的配色。
<img src="https://s1.ax1x.com/2023/02/14/pSo4I3T.png" alt="颜色"></img>
## 安装
```bash
npm i random-liner-gradient
```
## 使用
```ts
import {getRandomGradientColor} from 'random-liner-gradient';
// 不传入参数，则全随机生成
const gradientColor = getRandomGradientColor();
// 传入参数:
// hexColor十六进制的颜色值
// deg:渐变角度，传入数值小于-360，则角度随机
// Colorangle:渐变颜色的偏向值，默认30°，传入数值小于-360，则角度随机
const gradientColor = getRandomGradientColor(hexColor,deg,Colorangle);
```