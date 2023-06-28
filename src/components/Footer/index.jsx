import { Container, Content } from './styles';
import logoFooter from '../../assets/logo-footer.svg';

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoFooter} alt="Logo" />
          <span>Food Explorer - Rocketseat</span>
        </div>
        <p>Rocketseat© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}