import { BrowserRouter } from 'react-router-dom';

import colors from './shared/themes/colors';

import { AppRoutes } from './shared/routes';

import GlobalStyles from './shared/styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';

import { AppProvider } from './shared/context';

export const App = () => {
  return (
    // GlobalStyles é uma importação de estilizção
    <ThemeProvider theme={colors}>
      <AppProvider>
        <BrowserRouter>
          <GlobalStyles />
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
};
