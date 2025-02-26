import { CoffeeResumeCard } from '@components/CoffeeResumeCard';
import { Divider } from '@components/Divider';
import { css, styled } from 'styled-components';

export function ResumeOrder() {
  return (
    <Container>
      <ResumeContainer>
        <CoffeeResumeCard imgName={'mocaccino-img.png'} />
        <Divider />
        <CoffeeResumeCard imgName={'mocaccino-img.png'} />
        <Divider />

        <Row>
          <p>Total de itens</p>
          <p>R$ 29,90</p>
        </Row>
        <Row>
          <p>Entrega</p>
          <p>R$ 2,00</p>
        </Row>
        <Row $isHighlight>
          <p>Total</p>
          <p>R$ 50,00</p>
        </Row>
      </ResumeContainer>
      <FinishOrderButton type="submit">Finalizar pedido</FinishOrderButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  background-color: ${({ theme }) => theme.colors['base-card']};

  border-radius: 6px 40px 6px 40px;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 100%;
`;
interface RowProps {
  $isHighlight?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ $isHighlight }) => {
    return $isHighlight
      ? css`
          color: ${({ theme }) => theme.colors['base-subtitle']};
          font-size: ${({ theme }) => theme.textSizes['text-bold-l']};
          font-weight: bold;
        `
      : css`
          color: ${({ theme }) => theme.colors['base-text']};
          font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
        `;
  }}
`;

const FinishOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0;
  border: 0;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  color: ${({ theme }) => theme.colors['base-white']};
  text-transform: uppercase;

  &:active {
    background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;
