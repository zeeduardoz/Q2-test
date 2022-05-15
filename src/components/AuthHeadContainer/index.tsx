import { Container, Description, Title } from './styles'

interface AuthHeadContainerProps {
  title: string
  description: string
}

const AuthHeadContainer = ({ title, description }: AuthHeadContainerProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default AuthHeadContainer
