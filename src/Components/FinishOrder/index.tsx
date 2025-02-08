import { styled } from 'styled-components';

export function FinishOrder() {
  return (
    <Container>
      <h1> Finish Order</h1>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 1rem;
`;
