import '../src/assets/styles/colors.scss';
import '../src/assets/styles/reset.scss';
import '../src/assets/styles/common.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}