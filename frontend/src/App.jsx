import { ThemeProvider } from 'styled-components'
import colors from './shared/styles/themes/colors'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './shared/styles/GlobalStyles'
import { AppRoutes } from './routes'
export const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
