export function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, '');

  const bigint: number = parseInt(hex, 16);
  const r: number = (bigint >> 16) & 255;
  const g: number = (bigint >> 8) & 255;
  const b: number = bigint & 255;

  return [r, g, b];
}