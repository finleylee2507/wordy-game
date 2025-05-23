export const COLORS = {
  white: '0, 0%, 100%',
  offWhite: '0, 0%, 98%',
  paleWhite: '0, 0%, 95%',
  black: '227, 26%, 17%',
  gray: {
    50: '210, 12%, 97%',
    100: '204, 6%, 83%',
    200: '210, 8%, 75%',
    300: '210, 7%, 65%',
    400: '210, 6%, 50%',
    500: '200, 6%, 40%',
    600: '200, 5%, 30%',
    700: '200, 4%, 20%',
    800: '200, 3%, 15%',
    900: '200, 2%, 10%'
  },
  yellow: '49, 51%, 57%',
  green: {
    100: '116, 55%, 90%',
    300: '115, 38%, 65%',
    500: '115, 29%, 53%',
    900: '115, 34%, 19%'
  }
};

export const BREAKPOINTS = {
  sm: '576px',
  md: '800px',
  lg: '1000px',
  xl: '1300px',
  xxl: '1500px'
};

export const BREAKPOINTS_NUMERIC = {
  sm: 576,
  md: 800,
  lg: 1000,
  xl: 1300,
  xxl: 1500
};

export enum View {
  Landing = 'landing',
  Game = 'game'
}

export const NUM_OF_GUESSES_ALLOWED = 5;
