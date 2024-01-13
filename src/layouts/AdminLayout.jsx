import { Container } from './Container'

export const AdminLayout = ({ children }) => {

  return (
    <Container>
      <div>
        {children}
      </div>
    </Container>
  )
}

