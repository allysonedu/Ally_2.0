import { Aside } from '../Aside';
import { Content } from '../Content';
//import { MainHeader } from '../MainHeader';
import colors from '../../themes/colors';
import darkColors from '../../themes/darkColors';

import React, { useState } from 'react';

import { GridLayout } from './styles';
import { ThemeProvider } from 'styled-components';

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const isDarkTheme = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkColors : colors}>
      <GridLayout className={`layout ${theme}`}>
        <Aside theme={theme} toggleTheme={toggleTheme} />

        <Content> {children} </Content>
      </GridLayout>
    </ThemeProvider>
  );
};
/**
import { Aside } from '../Aside';         
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';

Só seram Ultilizado no Layout 
*/
