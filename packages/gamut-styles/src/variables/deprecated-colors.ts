import { flattenScale } from '@codecademy/variance';

import { corePalette } from './colors';

const { black, white } = corePalette;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const deprecatedColors = {
  blue: {
    '100': '#c8d7fa',
    '200': '#a5befa',
    '300': '#7da2fa',
    '400': '#5788fa',
    '500': '#3069f0',
    '600': '#2d5dcc',
    '700': '#2e4a99',
    '800': '#233466',
    '900': '#141c3a',
    '1000': '#10162f',
    '1100': '#0a0e1d',
  },
  pink: {
    '100': '#ffd9fc',
    '200': '#ffbffa',
    '300': '#ffa6f8',
    '400': '#f288e9',
    '500': '#d957d9',
    '600': '#b035c9',
    '700': '#9129a6',
    '800': '#702080',
    '900': '#43134d',
  },
  purple: {
    '100': '#d5ccff',
    '200': '#c0b6f2',
    '300': '#ac9df2',
    '400': '#917ef2',
    '500': '#7c5ce6',
    '600': '#6437cc',
    '700': '#4b2999',
    '800': '#381f73',
    '900': '#231347',
  },
  red: {
    '100': '#ffd3cc',
    '200': '#ffb8ad',
    '300': '#ff988c',
    '400': '#ff7566',
    '500': '#fd4d3f',
    '600': '#e53935',
    '700': '#bf2e2c',
    '800': '#992523',
    '900': '#661917',
  },
  green: {
    '100': '#bbfae5',
    '200': '#91f2d2',
    '300': '#6aebc0',
    '400': '#4fe0b0',
    '500': '#47cca0',
    '600': '#3eb38c',
    '700': '#318c6e',
    '800': '#246650',
    '900': '#164032',
  },
  orange: {
    '100': '#FFE9C8',
    '200': '#FFD093',
    '300': '#FFB764',
    '400': '#FF9F3C',
    '500': '#FF881D',
    '600': '#FB7106',
    '700': '#DC5A03',
    '800': '#BA4604',
    '900': '#963606',
  },
  yellow: {
    '100': '#fff7cc',
    '200': '#fff2b3',
    '300': '#ffec8c',
    '400': '#ffe359',
    '500': '#ffd500',
    '600': '#ffb92e',
    '700': '#e69729',
    '800': '#b37620',
    '900': '#805417',
  },
  gray: {
    '100': '#f6f5fa',
    '200': '#dddce0',
    '300': '#c4c3c7',
    '400': '#a2a2a6',
    '500': '#828285',
    '600': '#646466',
    '700': '#4b4b4d',
    '800': '#323233',
    '900': '#19191a',
  },
  royalBlue: '#6400e4',
  black,
  white,
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const brandColors = {
  red: deprecatedColors.red[500],
  orange: deprecatedColors.orange[400],
  yellow: deprecatedColors.yellow[500],
  purple: deprecatedColors.royalBlue,
  pink: deprecatedColors.pink[400],
  magenta: deprecatedColors.pink[700],
  mint: deprecatedColors.green[300],
  beige: '#efd9ca',
  blue: deprecatedColors.blue[500],
  darkBlue: deprecatedColors.blue[900],
  lavender: deprecatedColors.purple[500],
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const interactiveColors = {
  dark: corePalette.hyper,
  light: corePalette.yellow,
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const editorColors = {
  blue: '#83fff5',
  deepPurple: '#cc7bc2',
  gray: '#939598',
  green: '#b4d353',
  orange: '#ff8973',
  purple: '#b3ccff',
  red: '#e85d7f',
  yellow: '#ffe083',
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const platformColors = {
  mint: {
    '500': '#37c3be',
    '600': '#2c9c98',
    '700': '#217572',
  },
  purple: {
    '200': '#c3c1d7',
    '300': '#a5a1c2',
    '400': '#8782ae',
    '500': '#69639a',
    '600': '#544f7b',
    '700': '#3f3b5c',
    '800': '#2a283e',
    '900': '#15141f',
  },
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const swatches = {
  beige: {
    '0': '#FFF0E5',
  },
  blue: {
    '0': '#F5FCFF',
    '300': '#66C4FF',
    '500': '#1557FF',
    '800': '#1D2340',
    '900': '#10162f',
  },
  green: {
    '0': '#F5FFE3',
    '400': '#AEE938',
    '700': '#008A27',
  },
  yellow: {
    '0': '#FFFAE5',
    '400': '#CCA900',
    '500': '#FFD300',
  },
  pink: {
    '0': '#FFF5FF',
    '400': '#F966FF',
  },
  red: {
    '500': '#E91C11',
  },
  orange: {
    '500': '#FF8C00',
  },
  hyper: {
    '400': '#5533FF',
    '500': '#3A10E5',
  },
  gray: {
    '0': white,
    '100': '#f6f5fa',
    '200': '#dddce0',
    '300': '#c4c3c7',
    '400': '#a2a2a6',
    '500': '#828285',
    '600': '#646466',
    '700': '#4b4b4d',
    '800': '#323233',
    '900': '#19191a',
  },
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

const trueColors = {
  beige: swatches.beige[0],
  blue: swatches.blue[500],
  green: swatches.green[700],
  hyper: swatches.hyper[500],
  lightBlue: swatches.blue[300],
  lightGreen: swatches.green[400],
  navy: swatches.blue[900],
  orange: swatches.orange[500],
  paleBlue: swatches.blue[0],
  paleGreen: swatches.green[0],
  palePink: swatches.pink[0],
  paleYellow: swatches.yellow[0],
  pink: swatches.pink[400],
  red: swatches.red[500],
  yellow: swatches.yellow[500],
  black,
  white,
} as const;

/**
 * @deprecated
 * Using these variables directly is no longer supported.
 *
 * Please use [`theme.colors`](https://gamut.codecademy.com/storybook/?path=/docs/foundations-theme--colors#standard-colors)
 */

export const colors = {
  ...flattenScale(swatches),
  ...trueColors,
} as const;
