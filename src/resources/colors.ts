import { TinyColor } from "@ctrl/tinycolor";

function sRGBToLinear(srgb: number) {
  // https://en.wikipedia.org/wiki/SRGB
  srgb /= 0xff;

  if (srgb <= 0.04045) {
    return srgb / 12.94;
  }

  return Math.pow((srgb + 0.055) / 1.055, 2.4);
}

function toLinearRGB(tinyColor: TinyColor) {
  const red = tinyColor.r;
  const green = tinyColor.g;
  const blue = tinyColor.b;

  return {
    linearRed: sRGBToLinear(red),
    linearGreen: sRGBToLinear(green),
    linearBlue: sRGBToLinear(blue),
  };
}

export function isDarkColor(color: string) {
  // https://en.wikipedia.org/wiki/Relative_luminance
  const tinyColor = new TinyColor(color);
  const { linearRed, linearGreen, linearBlue } = toLinearRGB(tinyColor);
  const bt709_luminance =
    0.2126 * linearRed + 0.7152 * linearGreen + 0.0722 * linearBlue;
  return bt709_luminance < 0.4;
}

export function brightenColor(color: string, amount: number) {
  return new TinyColor(color).brighten(amount).toHexString();
}

export function darkenColor(color: string, amount: number) {
  return new TinyColor(color).darken(amount).toHexString();
}

export function contrastColor(color: string, amount: number) {
  return isDarkColor(color)
    ? brightenColor(color, amount)
    : darkenColor(color, amount);
}
