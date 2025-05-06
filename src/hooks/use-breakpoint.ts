import * as React from 'react';

const findBreakpoint = (
  currWidth: number,
  breakpoints: Record<string, number>
) => {
  const breakpointsEntries = Object.entries(breakpoints);

  //sort by breakpoint value in descending order
  breakpointsEntries.sort((entryA, entryB) => entryB[1] - entryA[1]);

  for (const [breakpoint, breakpointValue] of breakpointsEntries) {
    if (currWidth >= breakpointValue) {
      return breakpoint;
    }
  }

  return 'min';
};

export const useBreakpoint = <T extends Record<string, number>>(
  breakpoints: T
): keyof T => {
  const [currWidth, setCurrWidth] = React.useState(
    window ? window.innerWidth : 0
  );

  const handleResize = () => {
    setCurrWidth(window.innerWidth);
  };

  React.useEffect(() => {
    if (!window) {
      return;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return findBreakpoint(currWidth, breakpoints);
};
