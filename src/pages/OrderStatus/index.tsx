import { styled } from 'styled-components';

export function OrderStatus() {
  return (
    <Container>
      <Section>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <Card>
          <p>
            Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto Alegre,
            RS
          </p>
        </Card>
      </Section>
      <Section>
        <h2>Cafés Selecionados</h2>
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
  gap: 0.25rem;

  > h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin-top: 3rem;
  border-radius: 6px 40px 6px 40px;
  position: relative;
  background: ${({ theme }) => theme.colors['base-background']};

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors['brand-yellow-light']},
      ${({ theme }) => theme.colors['brand-purple-dark']}
    );
  }
`;
