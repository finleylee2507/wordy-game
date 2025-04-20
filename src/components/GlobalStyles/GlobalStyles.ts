import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../constants.ts';

const GlobalStyles = createGlobalStyle`
  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }


  /*PROJECT STYLES*/
  :root {
    --color-white: hsl(${COLORS.white});
    --color-gray-100: hsl(${COLORS.gray['100']});
    --color-gray-500: hsl(${COLORS.gray['500']});
    --color-green-100: hsl(${COLORS.green['100']});
    --color-green-500: hsl(${COLORS.green['500']});
    --color-green-900: hsl(${COLORS.green['900']});
    --color-yellow: hsl(${COLORS.yellow});

    /*default shadow color*/
    --shadow-color: 200deg 2% 51%;
    
    --shadow-elevation-low:
      0.3px 0.3px 0.5px hsl(var(--shadow-color) / 0.34),
      0.5px 0.5px 0.8px -1.2px hsl(var(--shadow-color) / 0.34),
      1.3px 1.3px 2.1px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium:
      0.3px 0.3px 0.5px hsl(var(--shadow-color) / 0.36),
      1px 1px 1.6px -0.8px hsl(var(--shadow-color) / 0.36),
      2.6px 2.6px 4.1px -1.7px hsl(var(--shadow-color) / 0.36),
      6.3px 6.4px 10.1px -2.5px hsl(var(--shadow-color) / 0.36);
    --shadow-elevation-high:
      0.3px 0.3px 0.5px hsl(var(--shadow-color) / 0.34),
      1.8px 1.9px 2.9px -0.4px hsl(var(--shadow-color) / 0.34),
      3.4px 3.5px 5.5px -0.7px hsl(var(--shadow-color) / 0.34),
      5.6px 5.7px 9px -1.1px hsl(var(--shadow-color) / 0.34),
      9px 9.1px 14.4px -1.4px hsl(var(--shadow-color) / 0.34),
      14.1px 14.2px 22.5px -1.8px hsl(var(--shadow-color) / 0.34),
      21.4px 21.6px 34.2px -2.1px hsl(var(--shadow-color) / 0.34),
      31.5px 31.9px 50.4px -2.5px hsl(var(--shadow-color) / 0.34);
    
  }
  
  body{
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }


`;

export default GlobalStyles;
