import { MapPinLine } from '@phosphor-icons/react';
import { styled } from 'styled-components';

export function FinishOrder() {
  return (
    <Container>
      <ContainerHeader>
        <MapPinLine size={22} />
        <ContainerTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContainerTitle>
      </ContainerHeader>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
