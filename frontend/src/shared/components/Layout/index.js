import { Aside } from '../Aside'
import { Content } from '../Content'

import { GridLayout, Container } from './styles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <GridLayout>
        <Aside />
        <Content>{children}</Content>
      </GridLayout>
    </Container>
  )
}
