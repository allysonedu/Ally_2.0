import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';

import { GridLayout } from './styles';

export const Layout = ({ children }) => {
  return (
    <GridLayout>
      <Aside />
      <MainHeader />
      <Content>{children}</Content>
    </GridLayout>
  );
};
/**
import { Aside } from '../Aside';         
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';

Só seram Ultilizado no Layout 
*/
