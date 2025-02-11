import { QuantityInput } from '@components/CoffeCard/QuantityInput';
import { Trash } from '@phosphor-icons/react';
import { styled } from 'styled-components';

export function CoffeeResumeCard({ imgName }: { imgName: string }) {
  return (
    <Container>
      <img src={imgName} />
      <Content>
        <span>Nome</span>
        <ButttonsContainer>
          {/* TODO implement a secondary apperancy to hide the background of buttons */}
          <Wrapper>
            <QuantityInput quantity={0} onChangeValue={() => {}} />
          </Wrapper>
          <RemoveButton>
            <Trash size={22} /> Remover
          </RemoveButton>
        </ButttonsContainer>
      </Content>
      <Price>R$ 5,00</Price>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 5rem;
  width: 100%;
  gap: 1rem;

  padding: 0.5rem 0;

  > img {
    width: 4rem;
    height: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  > span {
    font-size: ${({ theme }) => theme.textSizes['text-bold-m']};
  }
`;

const ButttonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.textSizes['text-bold-l']};
  font-weight: bold;
`;

const Wrapper = styled.div`
  max-width: 5rem;
`;

const RemoveButton = styled.button`
  display: flex;
  height: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  text-transform: uppercase;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  color: ${({ theme }) => theme.colors['base-text']};
  background-color: ${({ theme }) => theme.colors['base-button']};

  > svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`;
