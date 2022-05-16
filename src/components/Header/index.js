import {
  Plus,
} from "phosphor-react";
import LogoHeader from '../../assets/images/logo-header.png';
import { Container, Content } from './styles';

export function Header({ openModalTransactions }) {
  return (
    <Container>
      <Content>
        <img src={LogoHeader} alt="logo sensedata" />
        <button type="button" onClick={openModalTransactions}>
          <Plus size={18} style={{marginRight: '0.8rem'}} /> Nova transação
        </button>
      </Content>
    </Container>
  );
}