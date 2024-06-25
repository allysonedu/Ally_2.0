import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './shared/styles/GlobalStyles';

import colors from './shared/themes/colors';

import { AppRoutes } from './shared/routes';

import { ThemeProvider } from 'styled-components';

import { AppProvider } from './shared/context';

import 'react-toastify/dist/ReactToastify.css'; // sempre prestar atenção nas atualizações das importações React!!

export const App = () => {
  return (
    // GlobalStyles é uma importação de estilizção
    <>
      <ThemeProvider theme={colors}>
        <AppProvider>
          <GlobalStyles />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AppProvider>
      </ThemeProvider>
    </>
  );
};
