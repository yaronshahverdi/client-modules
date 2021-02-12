export interface Theme {
  boxShadows: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fontSize: {
    64: string;
    44: string;
    34: string;
    26: string;
    22: string;
    20: string;
    18: string;
    16: string;
    14: string;
  };
  fontFamily: {
    accent: string;
    base: string;
    monospace: string;
    system: string;
  };
  lineHeight: {
    base: number;
    title: number;
  };
  fontWeight: {
    base: number;
    title: number;
  };
  colors: {
    beige: string;
    blue: string;
    green: string;
    hyper: string;
    lightBlue: string;
    lightGreen: string;
    navy: string;
    orange: string;
    paleBlue: string;
    paleGreen: string;
    palePink: string;
    paleYellow: string;
    pink: string;
    red: string;
    yellow: string;
    black: string;
    white: string;
    'beige-0': string;
    'blue-0': string;
    'blue-300': string;
    'blue-500': string;
    'blue-900': string;
    'green-0': string;
    'green-400': string;
    'green-700': string;
    'yellow-0': string;
    'yellow-500': string;
    'pink-0': string;
    'pink-400': string;
    'red-500': string;
    'orange-500': string;
    'hyper-400': string;
    'hyper-500': string;
    'gray-0': string;
    'gray-100': string;
    'gray-200': string;
    'gray-300': string;
    'gray-400': string;
    'gray-500': string;
    'gray-600': string;
    'gray-700': string;
    'gray-800': string;
    'gray-900': string;
  };
  spacing: {
    0: 0;
    4: string;
    8: string;
    12: string;
    16: string;
    24: string;
    32: string;
    48: string;
    64: string;
  };
}
