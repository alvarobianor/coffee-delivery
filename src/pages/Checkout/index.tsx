import { FinishOrder } from '@components/FinishOrder';
import { Payment } from '@components/Payment';
import { ResumeOrder } from '@components/ResumeOrder';
import { styled } from 'styled-components';

export function Checkout() {
  return (
    <Container>
      <Section>
        <h2>Complete seu pedido</h2>
        <FinishOrder />
        <Payment />
      </Section>
      <Section>
        <h2>Cafés Selecionados</h2>
        <ResumeOrder />
      </Section>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  flex-direction: row;
  margin-bottom: 5rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;
