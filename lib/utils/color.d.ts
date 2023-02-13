import { TRgb, THsv, THsl, THex } from '../types/color';
export declare function rgb2Hsv(props: TRgb): THsv;
export declare function rgb2Hsl(props: TRgb): THsl;
export declare function rgb2Hex(props: TRgb): THex;
export declare function hex2Rgb(hex: string): TRgb;
export declare function hsv2Rgb(props: THsv): TRgb;
