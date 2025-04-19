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
  html {
    --color-white: hsl(${COLORS.white});
    --color-gray-100: hsl(${COLORS.gray['100']});
    --color-gray-500: hsl(${COLORS.gray['500']});
    --color-green-100: hsl(${COLORS.green['100']});
    --color-green-500: hsl(${COLORS.green['500']});
    --color-green-900: hsl(${COLORS.green['900']});
    --color-yellow: hsl(${COLORS.yellow});
  }

  html, body, #root {
    height: 100%;
  }


`;

export default GlobalStyles;
