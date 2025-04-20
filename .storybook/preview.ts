import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import GlobalStyles from '../src/components/GlobalStyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

//APPLY GLOBAL STYLES TO ALL STORIES
export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles
  })
];

export default preview;
