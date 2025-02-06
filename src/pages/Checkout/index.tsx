import { FinishOrder } from '@components/FinishOrder';
import { Payment } from '@components/Payment';
import { ResumeOrder } from '@components/ResumeOrder';
import { styled } from 'styled-components';

export function Checkout() {
  return (
    <Container>
      <OrderSection>
        <h2>Complete seu pedido</h2>
        <FinishOrder />
        <Payment />
      </OrderSection>
      <ResumeOrder />
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  flex-direction: row;
`;

const OrderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1rem;
    font-weight: bold;
  }
`;
