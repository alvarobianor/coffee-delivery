import { FinishOrder } from '@components/FinishOrder';
import { Payment } from '@components/Payment';
import { ResumeOrder } from '@components/ResumeOrder';
import { styled } from 'styled-components';

export function Checkout() {
  return (
    <Container>
      <section>
        <FinishOrder />
        <Payment />
      </section>
      <ResumeOrder />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: row;
`;
